const hljs = require('highlight.js/lib/highlight')

hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage(
  'javascript',
  require('highlight.js/lib/languages/javascript')
)
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'))
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))

export function start() {
  document.querySelectorAll('pre code').forEach(codeblock => {
    hljs.highlightBlock(codeblock)
  })
}
