
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/archana-2306/new-project',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/archana-2306/new-project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 532, hash: '1f7ab2f52c04ae26eb24411d61b0014a53595b91f1bf4008153ba212771404e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1045, hash: '453b651f6a417e67c99cd0acc788b5b871884f77d09fe92c0cdea9a4cc0b77f7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2300, hash: '5e139d099632147002f3c0ddbc5ae561111203d17b91abb969323d33888c6719', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
