const prod = process.env.NODE_ENV === 'production';
module.exports = {
    'process.env.BASE_URL': prod ? 'https://anthonyfink-cv.herokuapp.com' :'http://localhost:3000',
    'process.env.NAMESPACE': 'https://anthonyfink-cv.herokuapp.com',
    'process.env.CLIENT_ID':''
}
