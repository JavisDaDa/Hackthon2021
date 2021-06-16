const proxy = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        proxy("/v3/automations/", {
            target: "https://aacs-cie-pdx-d-tcp.integ.amazon.com",
            secure: false,
            changeOrigin: true
        })
    )
}