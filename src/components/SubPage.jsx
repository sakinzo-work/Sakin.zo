import { useEffect, useMemo } from 'react'
import subpageScript from '../../not use/subpage.js?raw'
import subpageCss from '../../not use/subpage.css?raw'
import { normalizeHtmlLinks } from '../routing'

function getPages() {
  const match = subpageScript.match(/const pages=(\{[\s\S]*?\});\s*const slug=/)
  if (!match) return {}
  return Function(`"use strict"; return (${match[1]});`)()
}

const pages = getPages()

const groups = [
  ['About Us', [['Who We Are', '/who-we-are'], ['Careers', '/careers'], ['Contacts', '/contactus'], ['Leadership', '/leadership']]],
  ['Success Stories', [['Cloud ecosystem for EV charging', '/ev-charging'], ['AI-Based Market Access Tool', '/market-access'], ['Multi-currency Wallet', '/multi-currency-wallet'], ['IoT Cloud Platform', '/iot-cloud-platform'], ['Smart HVAC Monitoring with AI', '/smart-hvac']]],
  ['Services', [['IoT Development Services', '/iot-development'], ['AI Development', '/ai-development'], ['AI Agent Development', '/ai-agent-development'], ['eCommerce Platform Development', '/ecommerce-development'], ['Fintech Software Development', '/fintech-development'], ['Blockchain Development', '/blockchain-development'], ['Full-cycle Development', '/full-cycle-development']]],
  ['Insights', [['News', '/news'], ['Opensource', '/opensource'], ['Blog', '/blog']]],
]

function HeaderNav() {
  return (
    <>
      <header className="hdr">
        <div className="hdr-inner">
          <a href="/" className="logo">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8 L18 2 L30 8 L26 14 L18 11 L10 14 Z" fill="#1673FF" /><path d="M6 8 L10 14 L6 20 L18 34 L30 20 L26 14 L18 11 L10 14 Z" fill="#1673FF" opacity=".85" /><path d="M10 14 L18 11 L26 14 L18 28 Z" fill="rgba(255,255,255,0.35)" /></svg>
            <span className="logo-txt">Sakin<span>.zo</span></span>
          </a>
          <nav>
            {groups.map(([label, items]) => (
              <div className="ndrop" key={label}>
                <button className="nbtn">{label}<svg viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
                <div className="drop">{items.map(([text, href]) => <a key={href} href={href}>{text}</a>)}</div>
              </div>
            ))}
          </nav>
          <div className="hdr-right"><span className="lang">EN</span><a href="/contactus#form-section" className="btn-git">Get in touch</a></div>
        </div>
      </header>
    </>
  )
}

export default function SubPage({ slug }) {
  const page = pages[slug] || pages['who-we-are']
  const cards = useMemo(() => page.cards || [], [page])

  useEffect(() => {
    const style = document.createElement('style')
    style.dataset.reactManaged = 'subpage'
    style.textContent = subpageCss
    document.head.appendChild(style)
    normalizeHtmlLinks(document)
    return () => style.remove()
  }, [])

  return (
    <>
      <HeaderNav />
      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="crumb"><a href="/">Home</a> / {page.cat}</div>
            <div className="eyebrow">{page.cat}</div>
            <h1>{page.title}</h1>
            <p className="hero-copy">{page.intro}</p>
            <div className="hero-actions"><a className="btn btn-blue" href="/contactus#form-section">Start a conversation &gt;</a><a className="btn btn-ghost" href="#overview">Explore more</a></div>
          </div>
        </section>
        <section className="section" id="overview">
          <div className="wrap intro-grid">
            <div><span className="kicker">What we do</span><h2>{page.heading}</h2></div>
            <div><p className="lead">{page.intro}</p><p className="body-copy">{page.body}</p></div>
          </div>
        </section>
        <section className="section alt">
          <div className="wrap">
            <span className="kicker">Our approach</span>
            <h2>Built around outcomes</h2>
            <div className="cards">{cards.map((card, index) => <article className="card" key={card[0]}><div className="card-num">0{index + 1}</div><h3>{card[0]}</h3><p>{card[1]}</p></article>)}</div>
            {page.stats && <div className="stats">{page.stats.map((stat) => <div className="stat" key={stat[1]}><strong>{stat[0]}</strong><span>{stat[1]}</span></div>)}</div>}
          </div>
        </section>
        <section className="cta"><div className="cta-inner"><h2>Have a challenge worth solving?</h2><a className="btn btn-blue" href="/contactus#form-section">Tell us about your project &gt;</a></div></section>
      </main>
      <footer className="site-footer"><div className="footer-inner"><a className="brand" href="/">Sakin<span>.zo</span></a><div className="footer-links"><a href="/who-we-are">About</a><a href="/careers">Careers</a><a href="/blog">Insights</a><a href="/contactus">Contact</a></div><span>© {new Date().getFullYear()} Sakinzo</span></div></footer>
    </>
  )
}
