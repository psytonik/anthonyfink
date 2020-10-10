const withPWA = require('next-pwa')
const prod = process.env.NODE_ENV === 'production'

module.exports = withPWA({
    pwa: {
        disable: !prod,
        dest: 'public'
    },
    env: {
        API_URI: process.env.API_URL,
        API_DB: process.env.DB_URI,
        API_DEV: process.env.API_DEV
    }
})
