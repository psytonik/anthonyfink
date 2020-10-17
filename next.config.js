const withPWA = require('next-pwa')
const prod = process.env.NODE_ENV === 'production'
const path = require('path');

module.exports = withPWA({
    webpack: config=>{
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
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
