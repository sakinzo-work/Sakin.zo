import { useEffect, useMemo } from 'react'
import contactPage from '../../not use/contactus.html?raw'
import projectPage from '../../not use/project.html?raw'
import { normalizeHtmlLinks } from '../routing'

const pages = {
  contactus: contactPage,
  project: projectPage,
}

function parsePage(slug) {
  const doc = new DOMParser().parseFromString(pages[slug], 'text/html')
  const styles = [...doc.querySelectorAll('style')].map((style) => style.textContent).join('\n')
  const scripts = [...doc.body.querySelectorAll('script')].map((script) => script.textContent)
  doc.body.querySelectorAll('script').forEach((script) => script.remove())
  return { styles, scripts, body: doc.body.innerHTML }
}

export default function HtmlPage({ slug }) {
  const page = useMemo(() => parsePage(slug), [slug])

  useEffect(() => {
    const style = document.createElement('style')
    style.dataset.reactManaged = slug
    style.textContent = page.styles
    document.head.appendChild(style)

    const scripts = page.scripts.map((content) => {
      const script = document.createElement('script')
      script.dataset.reactManaged = slug
      script.textContent = content
      document.body.appendChild(script)
      return script
    })

    const observer = new MutationObserver(() => normalizeHtmlLinks(document))
    observer.observe(document.body, { childList: true, subtree: true })
    normalizeHtmlLinks(document)

    return () => {
      observer.disconnect()
      style.remove()
      scripts.forEach((script) => script.remove())
    }
  }, [page, slug])

  return <div dangerouslySetInnerHTML={{ __html: page.body }} />
}
