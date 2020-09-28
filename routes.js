const routes = require('next-routes');
module.exports = routes()
    .add('/portfolio','/portfolio/:id')
    .add('/portfolio','/portfolio/:id/edit')

