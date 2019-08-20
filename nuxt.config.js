module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'canricos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  css: ['~/assets/app.styl',
  '@/assets/css/main.css'
],
  
  plugins:['~plugins/vuetify.js'],

  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      /*if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  }
}

