function W_(e, t, n, r, i, a) {
  let o = new is(t, n, {
      type: e,
      depthBuffer: i,
      stencilBuffer: a,
      samples: r ? 4 : 0,
      storeMultisampledDepthBuffer: !1,
      storeMultisampledStencilBuffer: !1,
      resolveDepthBuffer: !1,
      resolveStencilBuffer: !1,
    }),
    s = null,
    c = null,
    l = null,
    u = new Qc()
  ;(u.setAttribute(`position`, new Bc([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
    u.setAttribute(`uv`, new Bc([0, 2, 0, 0, 2, 0], 2)))
  let d = new wp({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
      fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
      depthTest: !1,
      depthWrite: !1,
    }),
    f = new Gl(u, d),
    p = new Um(-1, 1, 1, -1, 0, 1),
    m = null,
    h = null,
    g = !1,
    _,
    v = null,
    y = [],
    b = !1
  ;((this.setSize = function (e, t) {
    ;(o.setSize(e, t), s !== null && s.setSize(e, t), c !== null && c.setSize(e, t))
    for (let n = 0; n < y.length; n++) {
      let r = y[n]
      r.setSize && r.setSize(e, t)
    }
  }),
    (this.setEffects = function (e) {
      ;((y = e), (b = y.length > 0 && y[0].isRenderPass === !0))
      let t = o.width,
        n = o.height
      y.length > 0 &&
        s === null &&
        ((s = new is(t, n, { type: ti, depthBuffer: !1, stencilBuffer: !1 })),
        (c = new is(t, n, { type: ti, depthBuffer: !1, stencilBuffer: !1 })))
      let r = i === !0 && y.some((e) => e.needsDepthTexture === !0)
      r !== (o.depthTexture !== null) &&
        (r === !0 &&
          l === null &&
          ((l = new bd(t, n)), a === !0 && ((l.format = di), (l.type = ii))),
        o.dispose(),
        (o.depthTexture = r ? l : null),
        (o.resolveDepthBuffer = r),
        (o.storeMultisampledDepthBuffer = r))
      for (let e = 0; e < y.length; e++) {
        let i = y[e]
        ;(i.setSize && i.setSize(t, n),
          r && i.needsDepthTexture === !0 && i.setDepthTexture && i.setDepthTexture(l))
      }
    }),
    (this.begin = function (e, t) {
      if (g || (e.toneMapping === 0 && y.length === 0)) return !1
      if (((v = t), t !== null)) {
        let e = t.width,
          n = t.height
        ;(o.width !== e || o.height !== n) && this.setSize(e, n)
      }
      return (b === !1 && e.setRenderTarget(o), (_ = e.toneMapping), (e.toneMapping = 0), !0)
    }),
    (this.hasRenderPass = function () {
      return b
    }),
    (this.end = function (e, t) {
      ;((e.toneMapping = _), (g = !0))
      let n = o,
        r = s
      for (let i = 0; i < y.length; i++) {
        let a = y[i]
        a.enabled !== !1 &&
          (a.render(e, r, n, t), a.needsSwap !== !1 && ((n = r), (r = r === s ? c : s)))
      }
      if (m !== e.outputColorSpace || h !== e.toneMapping) {
        ;((m = e.outputColorSpace),
          (h = e.toneMapping),
          (d.defines = {}),
          Wo.getTransfer(m) === `srgb` && (d.defines.SRGB_TRANSFER = ``))
        let t = U_[h]
        ;(t && (d.defines[t] = ``), (d.needsUpdate = !0))
      }
      ;((d.uniforms.tDiffuse.value = n.texture),
        e.setRenderTarget(v),
        e.render(f, p),
        (v = null),
        (g = !1))
    }),
    (this.isCompositing = function () {
      return g
    }),
    (this.dispose = function () {
      ;(o.dispose(),
        s !== null && s.dispose(),
        c !== null && c.dispose(),
        u.dispose(),
        d.dispose())
    }))
}
var G_ = new ts(),
  K_ = new bd(1, 1),
  q_ = new xd(1),
  J_ = new as(),
  Y_ = new ss(),
  X_ = new _d(),
  Z_ = [],
  Q_ = [],
  $_ = new Float32Array(16),
  ev = new Float32Array(9),
  tv = new Float32Array(4)
