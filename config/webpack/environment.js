const { environment } = require('@rails/webpacker')

module.exports = environment

const webpark = require('webpark')
environment.plugins.prepend(
    'provide',
    new webpark.providePlugin({
        $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery',
        Popper: 'popper.js'
    })
)
