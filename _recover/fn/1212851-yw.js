function yw(e) {
  if (typeof TextDecoder < `u`) return new TextDecoder().decode(e)
  let t = ``
  for (let n = 0, r = e.length; n < r; n++) t += String.fromCharCode(e[n])
  try {
    return decodeURIComponent(escape(t))
  } catch {
    return t
  }
}
var bw = `srgb`,
  xw = `srgb-linear`,
  Sw = 3001,
  Cw = 3e3,
  ww = class extends mm {
    constructor(e) {
      ;(super(e),
        (this.dracoLoader = null),
        (this.ktx2Loader = null),
        (this.meshoptDecoder = null),
        (this.pluginCallbacks = []),
        this.register(function (e) {
          return new Aw(e)
        }),
        this.register(function (e) {
          return new jw(e)
        }),
        this.register(function (e) {
          return new Bw(e)
        }),
        this.register(function (e) {
          return new Vw(e)
        }),
        this.register(function (e) {
          return new Hw(e)
        }),
        this.register(function (e) {
          return new Nw(e)
        }),
        this.register(function (e) {
          return new Pw(e)
        }),
        this.register(function (e) {
          return new Fw(e)
        }),
        this.register(function (e) {
          return new Iw(e)
        }),
        this.register(function (e) {
          return new kw(e)
        }),
        this.register(function (e) {
          return new Lw(e)
        }),
        this.register(function (e) {
          return new Mw(e)
        }),
        this.register(function (e) {
          return new zw(e)
        }),
        this.register(function (e) {
          return new Rw(e)
        }),
        this.register(function (e) {
          return new Dw(e)
        }),
        this.register(function (e) {
          return new Uw(e)
        }),
        this.register(function (e) {
          return new Ww(e)
        }))
    }
    load(e, t, n, r) {
      let i = this,
        a
      if (this.resourcePath !== ``) a = this.resourcePath
      else if (this.path !== ``) {
        let t = Qm.extractUrlBase(e)
        a = Qm.resolveURL(t, this.path)
      } else a = Qm.extractUrlBase(e)
      this.manager.itemStart(e)
      let o = function (t) {
          ;(r ? r(t) : console.error(t), i.manager.itemError(e), i.manager.itemEnd(e))
        },
        s = new _m(this.manager)
      ;(s.setPath(this.path),
        s.setResponseType(`arraybuffer`),
        s.setRequestHeader(this.requestHeader),
        s.setWithCredentials(this.withCredentials),
        s.load(
          e,
          function (n) {
            try {
              i.parse(
                n,
                a,
                function (n) {
                  ;(t(n), i.manager.itemEnd(e))
                },
                o,
              )
            } catch (e) {
              o(e)
            }
          },
          n,
          o,
        ))
    }
    setDRACOLoader(e) {
      return ((this.dracoLoader = e), this)
    }
    setDDSLoader() {
      throw Error(
        `THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".`,
      )
    }
    setKTX2Loader(e) {
      return ((this.ktx2Loader = e), this)
    }
    setMeshoptDecoder(e) {
      return ((this.meshoptDecoder = e), this)
    }
    register(e) {
      return (this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this)
    }
    unregister(e) {
      return (
        this.pluginCallbacks.indexOf(e) !== -1 &&
          this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
        this
      )
    }
    parse(e, t, n, r) {
      let i,
        a = {},
        o = {}
      if (typeof e == `string`) i = JSON.parse(e)
      else if (e instanceof ArrayBuffer) {
        if (yw(new Uint8Array(e.slice(0, 4))) === Gw) {
          try {
            a[Ew.KHR_BINARY_GLTF] = new Jw(e)
          } catch (e) {
            r && r(e)
            return
          }
          i = JSON.parse(a[Ew.KHR_BINARY_GLTF].content)
        } else i = JSON.parse(yw(new Uint8Array(e)))
      } else i = e
      if (i.asset === void 0 || i.asset.version[0] < 2) {
        r && r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`))
        return
      }
      let s = new bT(i, {
        path: t || this.resourcePath || ``,
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder,
      })
      s.fileLoader.setRequestHeader(this.requestHeader)
      for (let e = 0; e < this.pluginCallbacks.length; e++) {
        let t = this.pluginCallbacks[e](s)
        ;(t.name || console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),
          (o[t.name] = t),
          (a[t.name] = !0))
      }
      if (i.extensionsUsed)
        for (let e = 0; e < i.extensionsUsed.length; ++e) {
          let t = i.extensionsUsed[e],
            n = i.extensionsRequired || []
          switch (t) {
            case Ew.KHR_MATERIALS_UNLIT:
              a[t] = new Ow()
              break
            case Ew.KHR_DRACO_MESH_COMPRESSION:
              a[t] = new Yw(i, this.dracoLoader)
              break
            case Ew.KHR_TEXTURE_TRANSFORM:
              a[t] = new Xw()
              break
            case Ew.KHR_MESH_QUANTIZATION:
              a[t] = new Zw()
              break
            default:
              n.indexOf(t) >= 0 &&
                o[t] === void 0 &&
                console.warn(`THREE.GLTFLoader: Unknown extension "` + t + `".`)
          }
        }
      ;(s.setExtensions(a), s.setPlugins(o), s.parse(n, r))
    }
    parseAsync(e, t) {
      let n = this
      return new Promise(function (r, i) {
        n.parse(e, t, r, i)
      })
    }
  }
