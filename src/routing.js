const htmlRoutes = new Set([
  'who-we-are',
  'careers',
  'contactus',
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
  'project',
])

export function normalizeLegacyHref(href = '') {
  if (!href || href.startsWith('#')) return href
  if (/^(https?:|mailto:|tel:|javascript:)/i.test(href)) return href

  const url = new URL(href, window.location.origin)
  let path = url.pathname.replace(/^\/+/, '').replace(/\/$/, '')

  if (!path || path === 'index.html') path = ''
  if (path.endsWith('.html')) path = path.slice(0, -5)

  if (!path) return `/${url.search}${url.hash}`
  if (!htmlRoutes.has(path)) return href
  return `/${path}${url.search}${url.hash}`
}

export function normalizeHtmlLinks(root = document) {
  root.querySelectorAll?.('a[href]').forEach((anchor) => {
    const nextHref = normalizeLegacyHref(anchor.getAttribute('href'))
    if (nextHref) anchor.setAttribute('href', nextHref)
  })
}

export function slugFromLocation() {
  let slug = window.location.pathname.replace(/^\/+/, '').replace(/\/$/, '')
  if (slug === 'index.html') slug = ''
  if (slug.endsWith('.html')) slug = slug.slice(0, -5)
  return slug
}
