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

export function appBasePath() {
  const base = import.meta.env.BASE_URL || '/'
  if (base === './') return '/'
  return base.startsWith('/') ? base : `/${base}`
}

function withBase(path = '') {
  const base = appBasePath()
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  if (!cleanBase) return cleanPath
  if (cleanPath === '/') return `${cleanBase}/`
  return `${cleanBase}${cleanPath}`
}

export function normalizeLegacyHref(href = '') {
  if (!href || href.startsWith('#')) return href
  if (/^(https?:|mailto:|tel:|javascript:)/i.test(href)) return href

  const url = new URL(href, window.location.origin)
  let path = url.pathname.replace(/^\/+/, '').replace(/\/$/, '')

  if (!path || path === 'index.html') path = ''
  if (path.endsWith('.html')) path = path.slice(0, -5)

  if (!path) return `${withBase('/')}${url.search}${url.hash}`
  if (!htmlRoutes.has(path)) return href
  return `${withBase(path)}${url.search}${url.hash}`
}

export function normalizeHtmlLinks(root = document) {
  root.querySelectorAll?.('a[href]').forEach((anchor) => {
    const nextHref = normalizeLegacyHref(anchor.getAttribute('href'))
    if (nextHref) anchor.setAttribute('href', nextHref)
  })
}

export function slugFromLocation() {
  let slug = window.location.pathname.replace(/^\/+/, '').replace(/\/$/, '')
  let base = appBasePath().replace(/^\/+/, '').replace(/\/$/, '')
  if (base && slug === base) slug = ''
  if (base && slug.startsWith(`${base}/`)) slug = slug.slice(base.length + 1)
  if (slug === 'index.html') slug = ''
  if (slug.endsWith('.html')) slug = slug.slice(0, -5)
  return slug
}

export function routeHref(path = '') {
  return withBase(path)
}
