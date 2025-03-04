
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/archana-2306/new-project/ang-proj',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/archana-2306/new-project/ang-proj"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 542, hash: '5dddaa68ab181bf605931ec7ce2e3d53c0b09689d29d61d4b76b3f67d41a8036', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '41066a7459d5ed9ee5932931fff7999dbbd0d74b05d2e57ff9c97039ccbc5ed2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2313, hash: '6821a808e1fb36a1c0e825de9b18961a2c3212362d4887251b3683f5e14289b4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
