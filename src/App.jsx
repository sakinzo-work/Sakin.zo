import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Clients from './components/Clients'
import Projects from './components/Projects'
import WhatWeDo from './components/WhatWeDo'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import CallToAction from './components/CallToAction'
import ClientMap from './components/ClientMap'
import Testimonials from './components/Testimonials'
import Insights from './components/Insights'
import Footer from './components/Footer'
import HtmlPage from './components/HtmlPage'
import { getLegacyHead } from './components/LegacyMarkup'
import SubPage from './components/SubPage'
import { normalizeHtmlLinks, normalizeLegacyHref, routeHref, slugFromLocation } from './routing'

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      if (existing.dataset.loaded === 'true') resolve()
      else existing.addEventListener('load', resolve, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.dataset.reactManaged = 'true'
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true'
      resolve()
    }, { once: true })
    script.addEventListener('error', reject, { once: true })
    document.head.appendChild(script)
  })
}

const subpageSlugs = new Set([
  'who-we-are',
  'careers',
  'leadership',
  'ev-charging',
  'market-access',
  'multi-currency-wallet',
  'iot-cloud-platform',
  'smart-hvac',
  'iot-development',
  'ai-development',
  'ai-agent-development',
  'ecommerce-development',
  'fintech-development',
  'blockchain-development',
  'full-cycle-development',
  'news',
  'opensource',
  'blog',
])

function HomePage() {
  const initializedRef = useRef(false)
  const [error, setError] = useState('')
  const page = getLegacyHead()

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    const style = document.createElement('style')
    style.dataset.reactManaged = 'homepage'
    style.textContent = page.css
    document.head.appendChild(style)

    const leafletCss = document.createElement('link')
    leafletCss.rel = 'stylesheet'
    leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    leafletCss.dataset.reactManaged = 'true'
    document.head.appendChild(leafletCss)

    let legacyScript
    const observer = new MutationObserver(() => normalizeHtmlLinks(document))
    observer.observe(document.body, { childList: true, subtree: true })

    loadScript('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js')
      .catch(() => undefined)
      .finally(() => {
        legacyScript = document.createElement('script')
        legacyScript.dataset.reactManaged = 'homepage'
        legacyScript.textContent = page.script.replace(/project\.html\?id=/g, `${routeHref('project')}?id=`)
        document.body.appendChild(legacyScript)
        document.dispatchEvent(new Event('DOMContentLoaded'))
        normalizeHtmlLinks(document)
      })
      .catch((reason) => setError(reason?.message || 'The page could not be initialized.'))

    return () => {
      style.remove()
      leafletCss.remove()
      legacyScript?.remove()
      observer.disconnect()
    }
  }, [page])

  if (!page.css) {
    return (
      <main className="react-error">
        <h1>Unable to load the website</h1>
        <p>The source homepage could not be parsed.</p>
      </main>
    )
  }

  return (
    <>
      {error && <div className="react-notice" role="status">{error}</div>}
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Clients />
        <Projects />
        <WhatWeDo />
        <Services />
        <CaseStudies />
        <CallToAction />
        <ClientMap />
        <Testimonials />
        <Insights />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [slug, setSlug] = useState(slugFromLocation())

  useEffect(() => {
    const onPopState = () => setSlug(slugFromLocation())
    const onClick = (event) => {
      const anchor = event.target.closest?.('a[href]')
      if (!anchor || anchor.target || event.defaultPrevented) return

      const normalizedHref = normalizeLegacyHref(anchor.getAttribute('href'))
      if (!normalizedHref || normalizedHref.startsWith('#')) return

      const url = new URL(normalizedHref, window.location.origin)
      if (url.origin !== window.location.origin) return

      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`)
      setSlug(slugFromLocation())
    }

    window.addEventListener('popstate', onPopState)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', onPopState)
      document.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(() => {
    normalizeHtmlLinks(document)
    if (window.location.hash) {
      setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' }), 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [slug])

  if (!slug) return <HomePage />
  if (slug === 'contactus' || slug === 'project') return <HtmlPage slug={slug} />
  if (subpageSlugs.has(slug)) return <SubPage slug={slug} />

  return <HomePage />
}
