const mjml2html = require('mjml')
const Vue = require('vue')

const app = new Vue({
    data: {
        name: 'kevcodez'
    },
    template: `
<mj-section>
  <mj-column>
    <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello {{ name }}</mj-text>
  </mj-column>
</mj-section>`
})

const renderer = require('vue-server-renderer').createRenderer({
    template: `
<mjml>
  <mj-body>
    <!--vue-ssr-outlet-->
  </mj-body>
</mjml>`
})

renderer.renderToString(app).then(html => {
    const htmlWithoutDataServerRenderedAttribute = html.replace(`data-server-rendered="true"`, '')
    const plainHtml = mjml2html(htmlWithoutDataServerRenderedAttribute)
    console.log(plainHtml.html)
})