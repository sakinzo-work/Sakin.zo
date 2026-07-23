import legacyPage from '../../index3.html?raw'
import { normalizeLegacyHref } from '../routing'

let parsedDocument

function getLegacyDocument() {
  if (!parsedDocument) {
    parsedDocument = new DOMParser().parseFromString(legacyPage, 'text/html')
  }
  return parsedDocument
}

export function getLegacyHead() {
  const source = getLegacyDocument()
  return {
    css: source.querySelector('style')?.textContent ?? '',
    script: [...source.querySelectorAll('body > script')].at(-1)?.textContent ?? '',
  }
}

function normalizeMarkup(html) {
  return html.replace(/href=(["'])([^"']+)\1/g, (_match, quote, href) => `href=${quote}${normalizeLegacyHref(href)}${quote}`)
}

export default function LegacyMarkup({ selector }) {
  const element = getLegacyDocument().querySelector(selector)
  if (!element) return null
  return <div className="react-section-root" dangerouslySetInnerHTML={{ __html: normalizeMarkup(element.outerHTML) }} />
}
