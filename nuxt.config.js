
export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: '/fontawesome-free-5.12.1-web/css/all.min.css' }
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '~assets/css/styles.css'
  ],

  components: true,

  plugins: [
  ],

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  pwa: {
    manifest: {
      name: 'Stephen Lai',
      short_name: 'Stephen Lai',
      display: 'fullscreen',
      start_url: '/?fullscreen=true'
    },
    workbox: {
      
    }
  },

  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://my-awesome-portfolio-nuxtjs.netlify.app' : 'http://localhost:3000'
    // baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  build: {
    extend(config, ctx) {
    },
    optimization: {
      minimize: process.env.NODE_ENV !== 'production' ? false : true,
    }
  }
}
