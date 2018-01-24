export const link = [
  {
    id: 'snipcart-theme',
    rel: 'stylesheet',
    href: 'https://cdn.snipcart.com/themes/base/snipcart.css',
    type: 'text/css'
  },
  {
    rel: 'icon',
    sizes: '192x192',
    href: `${__PATH_PREFIX__}/favicon-192x192.png`,
  },
  {
    href: `${__PATH_PREFIX__}/favicon-32x32.png`,
    rel: 'shortcut icon',
    type: 'image/x-icon',
  },
  {
    href: `${__PATH_PREFIX__}/apple-touch-icon.png`,
    rel: 'apple-touch-icon',
  },
];

export const meta = [
  {
    name: 'apple-mobile-web-app-title',
    content: 'HeadForCode',
  },
  {
    property: 'og:type',
    content: 'website',
  },
  { property: 'og:url', content: 'http://headforcode.com/' },
  {
    property: 'og:title',
    content: 'HeadForCode | We Teach. We Consult. We Solve.',
  },
  {
    property: 'og:image',
    content: 'https://www.headforcode.com/h4c.png',
  },
  {
    property: 'og:description',
    content: 'HeadForCode | We Teach. We Consult. We Solve.',
  },
  { property: 'og:site_name', content: 'HeadForCode' },
  { property: 'og:locale', content: 'en_GB' },
];

export const script = [
  {
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js',
  },
  {
    type: 'text/javascript',
    id: 'snipcart',
    dataApiKey: 'NzIzOTg5MjktMzA3NC00ODk0LWE5N2ItNTNjMDA1YzI3OWQ3NjM2MzY3MDEyNTg3MjIyMTA3'
  }
];
