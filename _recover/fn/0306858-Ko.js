function Ko(e) {
  return e < 0.0031308 ? e * 12.92 : 1.055 * e ** 0.41666 - 0.055
}
var qo,
  Jo = class {
    static getDataURL(e, t = `image/png`) {
      if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > `u`) return e.src
      let n
      if (e instanceof HTMLCanvasElement) n = e
      else {
        ;(qo === void 0 && (qo = Ja(`canvas`)), (qo.width = e.width), (qo.height = e.height))
        let t = qo.getContext(`2d`)
        ;(e instanceof ImageData
          ? t.putImageData(e, 0, 0)
          : t.drawImage(e, 0, 0, e.width, e.height),
          (n = qo))
      }
      return n.toDataURL(t)
    }
    static sRGBToLinear(e) {
      if (
        (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < `u` && e instanceof ImageBitmap)
      ) {
        let t = Ja(`canvas`)
        ;((t.width = e.width), (t.height = e.height))
        let n = t.getContext(`2d`)
        n.drawImage(e, 0, 0, e.width, e.height)
        let r = n.getImageData(0, 0, e.width, e.height),
          i = r.data
        for (let e = 0; e < i.length; e++) i[e] = Go(i[e] / 255) * 255
        return (n.putImageData(r, 0, 0), t)
      }
      if (e.data) {
        let t = e.data.slice(0)
        for (let e = 0; e < t.length; e++)
          t instanceof Uint8Array || t instanceof Uint8ClampedArray
            ? (t[e] = Math.floor(Go(t[e] / 255) * 255))
            : (t[e] = Go(t[e]))
        return { data: t, width: e.width, height: e.height }
      }
      return (
        q(
          `ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`,
        ),
        e
      )
    }
  },
  Yo = 0,
  Xo = class {
    constructor(e = null) {
      ;((this.isTextureSource = !0),
        Object.defineProperty(this, 'id', { value: Yo++ }),
        (this.uuid = fo()),
        (this.data = e),
        (this.dataReady = !0),
        (this.version = 0))
    }
    getSize(e) {
      let t = this.data
      return (
        typeof HTMLVideoElement < `u` && t instanceof HTMLVideoElement
          ? e.set(t.videoWidth, t.videoHeight, 0)
          : typeof VideoFrame < `u` && t instanceof VideoFrame
            ? e.set(t.displayWidth, t.displayHeight, 0)
            : t === null
              ? e.set(0, 0, 0)
              : e.set(t.width || 0, t.height || 0, t.depth || 0),
        e
      )
    }
    set needsUpdate(e) {
      e === !0 && this.version++
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`
      if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid]
      let n = { uuid: this.uuid, url: `` },
        r = this.data
      if (r !== null) {
        let e
        if (Array.isArray(r)) {
          e = []
          for (let t = 0, n = r.length; t < n; t++)
            r[t].isDataTexture ? e.push(Zo(r[t].image)) : e.push(Zo(r[t]))
        } else e = Zo(r)
        n.url = e
      }
      return (t || (e.images[this.uuid] = n), n)
    }
  }
