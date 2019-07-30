module.exports = {
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://116.62.64.183',
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     }
    // }
    css: {
        loaderOptions: {
            sass: {
              data: '@import "@/style/variable.scss"; @import "@/style/mixin.scss"; @import "@/style/common/antd-reset.scss";'
            },
            less: {
                modifyVars: {
                    'primary-color': '#ff6d33',
                    'link-color': '#1890FF',
                    '@success-color': '#52C41A',
                    '@warning-color': '#FAAD14',
                    '@error-color': '#F5222D',
                    '@font-size-base': '14px',
                    '@heading-color': 'rgba(0, 0, 0, .85)',
                    '@text-color': 'rgba(0, 0, 0, .65)',
                    '@text-color-secondary': 'rgba(0, 0, 0, .45)',
                    '@disabled-color': 'rgba(0, 0, 0, .25)',
                    '@border-radius-base': '4px',
                    '@border-color-base': '#e9e9e9',
                    '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)'
                },
                javascriptEnabled: true,
            }
        }
    },

    lintOnSave: false,
    publicPath: './',
    assetsDir: 'static'
};
