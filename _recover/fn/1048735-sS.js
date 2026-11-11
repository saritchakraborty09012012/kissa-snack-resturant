function sS(e) {
  let t = () => e.store.getState().gl?.xr,
    n = () => {
      var r, i, a
      let o = e.store.getState()
      if (
        ((r = t()) != null && r.isPresenting) ||
        ((i = t()) != null && i.getSession != null && i.getSession())
      ) {
        t().addEventListener(`sessionend`, n)
        return
      }
      ;(a = t()) == null ||
        a.removeEventListener == null ||
        a.removeEventListener(`sessionend`, n)
      let s = e.configuration.previous
      if (!s) return
      let c = s.dpr ?? [1, 2]
      o.viewport.dpr !== sx(c) && o.setDpr(c)
    },
    r = cx(n)
  return () => {
    var e
    ;(r(),
      (e = t()) == null ||
        e.removeEventListener == null ||
        e.removeEventListener(`sessionend`, n))
  }
}
var cS = {
  name: `@react-three/fiber`,
  version: `9.8.2`,
  description: `A React renderer for Threejs`,
  keywords: [`react`, `renderer`, `fiber`, `three`, `threejs`],
  author: `Paul Henschel (https://github.com/drcmda)`,
  license: `MIT`,
  maintainers: [
    `Josh Ellis (https://github.com/joshuaellis)`,
    `Cody Bennett (https://github.com/codyjasonbennett)`,
    `Kris Baumgarter (https://github.com/krispya)`,
  ],
  bugs: { url: `https://github.com/pmndrs/react-three-fiber/issues` },
  homepage: `https://github.com/pmndrs/react-three-fiber#readme`,
  repository: { type: `git`, url: `git+https://github.com/pmndrs/react-three-fiber.git` },
  collective: { type: `opencollective`, url: `https://opencollective.com/react-three-fiber` },
  main: `dist/react-three-fiber.cjs.js`,
  module: `dist/react-three-fiber.esm.js`,
  types: `dist/react-three-fiber.cjs.d.ts`,
  'react-native': `native/dist/react-three-fiber-native.cjs.js`,
  files: [`dist`, `native`, `react-reconciler`, `CHANGELOG.md`],
  sideEffects: !1,
  preconstruct: { entrypoints: [`index.tsx`, `native.tsx`] },
  scripts: { prebuild: `cp ../../readme.md readme.md` },
  devDependencies: { '@types/react-reconciler': `^0.33.0`, 'react-reconciler': `^0.34.0` },
  dependencies: {
    '@babel/runtime': `^7.17.8`,
    '@types/webxr': `*`,
    'base64-js': `^1.5.1`,
    buffer: `^6.0.3`,
    'its-fine': `^2.1.1`,
    'react-use-measure': `^2.1.7`,
    scheduler: `^0.28.0`,
    'suspend-react': `^0.1.3`,
    'use-sync-external-store': `^1.4.0`,
    zustand: `^5.0.3`,
  },
  peerDependencies: {
    expo: `>=43.0`,
    'expo-asset': `>=8.4`,
    'expo-file-system': `>=11.0`,
    'expo-gl': `>=11.0`,
    react: `>=19 <19.4`,
    'react-dom': `>=19 <19.4`,
    'react-native': `>=0.78`,
    three: `>=0.156`,
  },
  peerDependenciesMeta: {
    'react-dom': { optional: !0 },
    'react-native': { optional: !0 },
    expo: { optional: !0 },
    'expo-asset': { optional: !0 },
    'expo-file-system': { optional: !0 },
    'expo-gl': { optional: !0 },
  },
}
