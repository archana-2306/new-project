
export default {
  basePath: 'https://github.com/archana-2306/new-project',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
