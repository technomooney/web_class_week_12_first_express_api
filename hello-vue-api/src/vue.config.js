//https://forum.vuejs.org/t/devserver-proxy-in-vue-config-js-not-working/87316/5

module.exports = {
    devServer: {
            proxy: 'http://localhost:3000'
                // {
            //     '^/api/': {
            //         target:"http://localhost:3000",
            //         pathRewrite: { "^/api/": "/api/" },
            //         changeOrigin:true,
            //         logLevel: "debug"
            //     }
            // }

    }
}