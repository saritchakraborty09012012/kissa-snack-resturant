function bh() {
  this._document.hidden === !1 && this.reset()
}
var xh = new Y(),
  Sh = new Io(),
  Ch = new Y(),
  wh = new Y(),
  Th = new Y(),
  Eh = class extends Is {
    constructor() {
      ;(super(),
        (this.type = `AudioListener`),
        (this.context = lh.getContext()),
        (this.gain = this.context.createGain()),
        this.gain.connect(this.context.destination),
        (this.filter = null),
        (this.timeDelta = 0),
        (this._timer = new yh()))
    }
    getInput() {
      return this.gain
    }
    removeFilter() {
      return (
        this.filter !== null &&
          (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination),
          this.gain.connect(this.context.destination),
          (this.filter = null)),
        this
      )
    }
    getFilter() {
      return this.filter
    }
    setFilter(e) {
      return (
        this.filter === null
          ? this.gain.disconnect(this.context.destination)
          : (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination)),
        (this.filter = e),
        this.gain.connect(this.filter),
        this.filter.connect(this.context.destination),
        this
      )
    }
    getMasterVolume() {
      return this.gain.gain.value
    }
    setMasterVolume(e) {
      return (this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this)
    }
    updateMatrixWorld(e) {
      ;(super.updateMatrixWorld(e), this._timer.update())
      let t = this.context.listener
      if (
        ((this.timeDelta = this._timer.getDelta()),
        this.matrixWorld.decompose(xh, Sh, Ch),
        wh.set(0, 0, -1).applyQuaternion(Sh),
        Th.set(0, 1, 0).applyQuaternion(Sh),
        t.positionX)
      ) {
        let e = this.context.currentTime + this.timeDelta
        ;(t.positionX.linearRampToValueAtTime(xh.x, e),
          t.positionY.linearRampToValueAtTime(xh.y, e),
          t.positionZ.linearRampToValueAtTime(xh.z, e),
          t.forwardX.linearRampToValueAtTime(wh.x, e),
          t.forwardY.linearRampToValueAtTime(wh.y, e),
          t.forwardZ.linearRampToValueAtTime(wh.z, e),
          t.upX.linearRampToValueAtTime(Th.x, e),
          t.upY.linearRampToValueAtTime(Th.y, e),
          t.upZ.linearRampToValueAtTime(Th.z, e))
      } else
        (t.setPosition(xh.x, xh.y, xh.z), t.setOrientation(wh.x, wh.y, wh.z, Th.x, Th.y, Th.z))
    }
  },
  Dh = class extends Is {
    constructor(e) {
      ;(super(),
        (this.type = `Audio`),
        (this.listener = e),
        (this.context = e.context),
        (this.gain = this.context.createGain()),
        this.gain.connect(e.getInput()),
        (this.autoplay = !1),
        (this.buffer = null),
        (this.detune = 0),
        (this.loop = !1),
        (this.loopStart = 0),
        (this.loopEnd = 0),
        (this.offset = 0),
        (this.duration = void 0),
        (this.playbackRate = 1),
        (this.isPlaying = !1),
        (this.hasPlaybackControl = !0),
        (this.source = null),
        (this.sourceType = `empty`),
        (this._startedAt = 0),
        (this._progress = 0),
        (this._connected = !1),
        (this.filters = []))
    }
    getOutput() {
      return this.gain
    }
    setNodeSource(e) {
      return (
        (this.hasPlaybackControl = !1),
        (this.sourceType = `audioNode`),
        (this.source = e),
        this.connect(),
        this
      )
    }
    setMediaElementSource(e) {
      return (
        (this.hasPlaybackControl = !1),
        (this.sourceType = `mediaNode`),
        (this.source = this.context.createMediaElementSource(e)),
        this.connect(),
        this
      )
    }
    setMediaStreamSource(e) {
      return (
        (this.hasPlaybackControl = !1),
        (this.sourceType = `mediaStreamNode`),
        (this.source = this.context.createMediaStreamSource(e)),
        this.connect(),
        this
      )
    }
    setBuffer(e) {
      return (
        (this.buffer = e),
        (this.sourceType = `buffer`),
        this.autoplay && this.play(),
        this
      )
    }
    play(e = 0) {
      if (this.isPlaying === !0) {
        q(`Audio: Audio is already playing.`)
        return
      }
      if (this.hasPlaybackControl === !1) {
        q(`Audio: this Audio has no playback control.`)
        return
      }
      this._startedAt = this.context.currentTime + e
      let t = this.context.createBufferSource()
      return (
        (t.buffer = this.buffer),
        (t.loop = this.loop),
        (t.loopStart = this.loopStart),
        (t.loopEnd = this.loopEnd),
        (t.onended = this.onEnded.bind(this)),
        t.start(this._startedAt, this._progress + this.offset, this.duration),
        (this.isPlaying = !0),
        (this.source = t),
        this.setDetune(this.detune),
        this.setPlaybackRate(this.playbackRate),
        this.connect()
      )
    }
    pause() {
      if (this.hasPlaybackControl === !1) q(`Audio: this Audio has no playback control.`)
      else
        return (
          this.isPlaying === !0 &&
            ((this._progress +=
              Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate),
            this.loop === !0 && (this._progress %= this.duration || this.buffer.duration),
            this.source.stop(),
            (this.source.onended = null),
            (this.isPlaying = !1)),
          this
        )
    }
    stop(e = 0) {
      if (this.hasPlaybackControl === !1) q(`Audio: this Audio has no playback control.`)
      else
        return (
          (this._progress = 0),
          this.source !== null &&
            (this.source.stop(this.context.currentTime + e), (this.source.onended = null)),
          (this.isPlaying = !1),
          this
        )
    }
    connect() {
      if (this.filters.length > 0) {
        this.source.connect(this.filters[0])
        for (let e = 1, t = this.filters.length; e < t; e++)
          this.filters[e - 1].connect(this.filters[e])
        this.filters[this.filters.length - 1].connect(this.getOutput())
      } else this.source.connect(this.getOutput())
      return ((this._connected = !0), this)
    }
    disconnect() {
      if (this._connected !== !1) {
        if (this.filters.length > 0) {
          this.source.disconnect(this.filters[0])
          for (let e = 1, t = this.filters.length; e < t; e++)
            this.filters[e - 1].disconnect(this.filters[e])
          this.filters[this.filters.length - 1].disconnect(this.getOutput())
        } else this.source.disconnect(this.getOutput())
        return ((this._connected = !1), this)
      }
    }
    getFilters() {
      return this.filters
    }
    setFilters(e) {
      return (
        e || (e = []),
        this._connected === !0
          ? (this.disconnect(), (this.filters = e.slice()), this.connect())
          : (this.filters = e.slice()),
        this
      )
    }
    setDetune(e) {
      return (
        (this.detune = e),
        this.isPlaying === !0 &&
          this.source.detune !== void 0 &&
          this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01),
        this
      )
    }
    getDetune() {
      return this.detune
    }
    getFilter() {
      return this.getFilters()[0]
    }
    setFilter(e) {
      return this.setFilters(e ? [e] : [])
    }
    setPlaybackRate(e) {
      if (this.hasPlaybackControl === !1) q(`Audio: this Audio has no playback control.`)
      else
        return (
          (this.playbackRate = e),
          this.isPlaying === !0 &&
            this.source.playbackRate.setTargetAtTime(
              this.playbackRate,
              this.context.currentTime,
              0.01,
            ),
          this
        )
    }
    getPlaybackRate() {
      return this.playbackRate
    }
    onEnded() {
      ;((this.isPlaying = !1), (this._progress = 0))
    }
    getLoop() {
      return this.hasPlaybackControl === !1
        ? (q(`Audio: this Audio has no playback control.`), !1)
        : this.loop
    }
    setLoop(e) {
      if (this.hasPlaybackControl === !1) q(`Audio: this Audio has no playback control.`)
      else
        return ((this.loop = e), this.isPlaying === !0 && (this.source.loop = this.loop), this)
    }
    setLoopStart(e) {
      return ((this.loopStart = e), this)
    }
    setLoopEnd(e) {
      return ((this.loopEnd = e), this)
    }
    getVolume() {
      return this.gain.gain.value
    }
    setVolume(e) {
      return (this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this)
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        e.sourceType === `buffer`
          ? ((this.autoplay = e.autoplay),
            (this.buffer = e.buffer),
            (this.detune = e.detune),
            (this.loop = e.loop),
            (this.loopStart = e.loopStart),
            (this.loopEnd = e.loopEnd),
            (this.offset = e.offset),
            (this.duration = e.duration),
            (this.playbackRate = e.playbackRate),
            (this.hasPlaybackControl = e.hasPlaybackControl),
            (this.sourceType = e.sourceType),
            (this.filters = e.filters.slice()),
            this)
          : (q(`Audio: Audio source type cannot be copied.`), this)
      )
    }
    clone(e) {
      return new this.constructor(this.listener).copy(this, e)
    }
  },
  Oh = new Y(),
  kh = new Io(),
  Ah = new Y(),
  jh = new Y(),
  Mh = class extends Dh {
    constructor(e) {
      ;(super(e),
        (this.panner = this.context.createPanner()),
        (this.panner.panningModel = `HRTF`),
        this.panner.connect(this.gain))
    }
    connect() {
      return (super.connect(), this.panner.connect(this.gain), this)
    }
    disconnect() {
      return (super.disconnect(), this.panner.disconnect(this.gain), this)
    }
    getOutput() {
      return this.panner
    }
    getRefDistance() {
      return this.panner.refDistance
    }
    setRefDistance(e) {
      return ((this.panner.refDistance = e), this)
    }
    getRolloffFactor() {
      return this.panner.rolloffFactor
    }
    setRolloffFactor(e) {
      return ((this.panner.rolloffFactor = e), this)
    }
    getDistanceModel() {
      return this.panner.distanceModel
    }
    setDistanceModel(e) {
      return ((this.panner.distanceModel = e), this)
    }
    getMaxDistance() {
      return this.panner.maxDistance
    }
    setMaxDistance(e) {
      return ((this.panner.maxDistance = e), this)
    }
    setDirectionalCone(e, t, n) {
      return (
        (this.panner.coneInnerAngle = e),
        (this.panner.coneOuterAngle = t),
        (this.panner.coneOuterGain = n),
        this
      )
    }
    updateMatrixWorld(e) {
      if ((super.updateMatrixWorld(e), this.hasPlaybackControl === !0 && this.isPlaying === !1))
        return
      ;(this.matrixWorld.decompose(Oh, kh, Ah), jh.set(0, 0, 1).applyQuaternion(kh))
      let t = this.panner
      if (t.positionX) {
        let e = this.context.currentTime + this.listener.timeDelta
        ;(t.positionX.linearRampToValueAtTime(Oh.x, e),
          t.positionY.linearRampToValueAtTime(Oh.y, e),
          t.positionZ.linearRampToValueAtTime(Oh.z, e),
          t.orientationX.linearRampToValueAtTime(jh.x, e),
          t.orientationY.linearRampToValueAtTime(jh.y, e),
          t.orientationZ.linearRampToValueAtTime(jh.z, e))
      } else (t.setPosition(Oh.x, Oh.y, Oh.z), t.setOrientation(jh.x, jh.y, jh.z))
    }
  },
  Nh = class {
    constructor(e, t = 2048) {
      ;((this.analyser = e.context.createAnalyser()),
        (this.analyser.fftSize = t),
        (this.data = new Uint8Array(this.analyser.frequencyBinCount)),
        e.getOutput().connect(this.analyser))
    }
    getFrequencyData() {
      return (this.analyser.getByteFrequencyData(this.data), this.data)
    }
    getAverageFrequency() {
      let e = 0,
        t = this.getFrequencyData()
      for (let n = 0; n < t.length; n++) e += t[n]
      return e / t.length
    }
  },
  Ph = class {
    constructor(e, t, n) {
      ;((this.binding = e), (this.valueSize = n))
      let r, i, a
      switch (t) {
        case `quaternion`:
          ;((r = this._slerp),
            (i = this._slerpAdditive),
            (a = this._setAdditiveIdentityQuaternion),
            (this.buffer = new Float64Array(n * 6)),
            (this._workIndex = 5))
          break
        case `string`:
        case `bool`:
          ;((r = this._select),
            (i = this._select),
            (a = this._setAdditiveIdentityOther),
            (this.buffer = Array(n * 5)))
          break
        default:
          ;((r = this._lerp),
            (i = this._lerpAdditive),
            (a = this._setAdditiveIdentityNumeric),
            (this.buffer = new Float64Array(n * 5)))
      }
      ;((this._mixBufferRegion = r),
        (this._mixBufferRegionAdditive = i),
        (this._setIdentity = a),
        (this._origIndex = 3),
        (this._addIndex = 4),
        (this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0),
        (this.useCount = 0),
        (this.referenceCount = 0))
    }
    accumulate(e, t) {
      let n = this.buffer,
        r = this.valueSize,
        i = e * r + r,
        a = this.cumulativeWeight
      if (a === 0) {
        for (let e = 0; e !== r; ++e) n[i + e] = n[e]
        a = t
      } else {
        a += t
        let e = t / a
        this._mixBufferRegion(n, i, 0, e, r)
      }
      this.cumulativeWeight = a
    }
    accumulateAdditive(e) {
      let t = this.buffer,
        n = this.valueSize,
        r = n * this._addIndex
      ;(this.cumulativeWeightAdditive === 0 && this._setIdentity(),
        this._mixBufferRegionAdditive(t, r, 0, e, n),
        (this.cumulativeWeightAdditive += e))
    }
    apply(e) {
      let t = this.valueSize,
        n = this.buffer,
        r = e * t + t,
        i = this.cumulativeWeight,
        a = this.cumulativeWeightAdditive,
        o = this.binding
      if (((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), i < 1)) {
        let e = t * this._origIndex
        this._mixBufferRegion(n, r, e, 1 - i, t)
      }
      a > 0 && this._mixBufferRegionAdditive(n, r, this._addIndex * t, 1, t)
      for (let e = t, i = t + t; e !== i; ++e)
        if (n[e] !== n[e + t]) {
          o.setValue(n, r)
          break
        }
    }
    saveOriginalState() {
      let e = this.binding,
        t = this.buffer,
        n = this.valueSize,
        r = n * this._origIndex
      e.getValue(t, r)
      for (let e = n, i = r; e !== i; ++e) t[e] = t[r + (e % n)]
      ;(this._setIdentity(), (this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0))
    }
    restoreOriginalState() {
      let e = this.valueSize * 3
      this.binding.setValue(this.buffer, e)
    }
    _setAdditiveIdentityNumeric() {
      let e = this._addIndex * this.valueSize,
        t = e + this.valueSize
      for (let n = e; n < t; n++) this.buffer[n] = 0
    }
    _setAdditiveIdentityQuaternion() {
      ;(this._setAdditiveIdentityNumeric(),
        (this.buffer[this._addIndex * this.valueSize + 3] = 1))
    }
    _setAdditiveIdentityOther() {
      let e = this._origIndex * this.valueSize,
        t = this._addIndex * this.valueSize
      for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n]
    }
    _select(e, t, n, r, i) {
      if (r >= 0.5) for (let r = 0; r !== i; ++r) e[t + r] = e[n + r]
    }
    _slerp(e, t, n, r) {
      Io.slerpFlat(e, t, e, t, e, n, r)
    }
    _slerpAdditive(e, t, n, r, i) {
      let a = this._workIndex * i
      ;(Io.multiplyQuaternionsFlat(e, a, e, t, e, n), Io.slerpFlat(e, t, e, t, e, a, r))
    }
    _lerp(e, t, n, r, i) {
      let a = 1 - r
      for (let o = 0; o !== i; ++o) {
        let i = t + o
        e[i] = e[i] * a + e[n + o] * r
      }
    }
    _lerpAdditive(e, t, n, r, i) {
      for (let a = 0; a !== i; ++a) {
        let i = t + a
        e[i] = e[i] + e[n + a] * r
      }
    }
  },
  Fh = `\\[\\]\\.:\\/`,
  Ih = RegExp(`[\\[\\]\\.:\\/]`, `g`),
  Lh = `[^\\[\\]\\.:\\/]`,
  Rh = `[^` + Fh.replace(`\\.`, ``) + `]`,
  zh = `((?:WC+[\\/:])*)`.replace(`WC`, Lh),
  Bh = `(WCOD+)?`.replace(`WCOD`, Rh),
  Vh = `(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`, Lh),
  Hh = `\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`, Lh),
  Uh = RegExp(`^` + zh + Bh + Vh + Hh + `$`),
  Wh = [`material`, `materials`, `bones`, `map`],
  Gh = class {
    constructor(e, t, n) {
      let r = n || Kh.parseTrackName(t)
      ;((this._targetGroup = e), (this._bindings = e.subscribe_(t, r)))
    }
    getValue(e, t) {
      this.bind()
      let n = this._targetGroup.nCachedObjects_,
        r = this._bindings[n]
      r !== void 0 && r.getValue(e, t)
    }
    setValue(e, t) {
      let n = this._bindings
      for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)
        n[r].setValue(e, t)
    }
    bind() {
      let e = this._bindings
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
    }
    unbind() {
      let e = this._bindings
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
    }
  },
  Kh = class e {
    constructor(t, n, r) {
      ;((this.path = n),
        (this.parsedPath = r || e.parseTrackName(n)),
        (this.node = e.findNode(t, this.parsedPath.nodeName)),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound))
    }
    static create(t, n, r) {
      return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r)
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, `_`).replace(Ih, ``)
    }
    static parseTrackName(e) {
      let t = Uh.exec(e)
      if (t === null) throw Error(`THREE.PropertyBinding: Cannot parse trackName: ` + e)
      let n = {
          nodeName: t[2],
          objectName: t[3],
          objectIndex: t[4],
          propertyName: t[5],
          propertyIndex: t[6],
        },
        r = n.nodeName && n.nodeName.lastIndexOf(`.`)
      if (r !== void 0 && r !== -1) {
        let e = n.nodeName.substring(r + 1)
        Wh.indexOf(e) !== -1 && ((n.nodeName = n.nodeName.substring(0, r)), (n.objectName = e))
      }
      if (n.propertyName === null || n.propertyName.length === 0)
        throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: ` + e)
      return n
    }
    static findNode(e, t) {
      if (t === void 0 || t === `` || t === `.` || t === -1 || t === e.name || t === e.uuid)
        return e
      if (e.skeleton) {
        let n = e.skeleton.getBoneByName(t)
        if (n !== void 0) return n
      }
      if (e.children) {
        let n = function (e) {
            for (let r = 0; r < e.length; r++) {
              let i = e[r]
              if (i.name === t || i.uuid === t) return i
              let a = n(i.children)
              if (a) return a
            }
            return null
          },
          r = n(e.children)
        if (r) return r
      }
      return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName]
    }
    _getValue_array(e, t) {
      let n = this.resolvedProperty
      for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r]
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t)
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t]
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      ;((this.targetObject[this.propertyName] = e[t]), (this.targetObject.needsUpdate = !0))
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      ;((this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0))
    }
    _setValue_array(e, t) {
      let n = this.resolvedProperty
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++]
    }
    _setValue_array_setNeedsUpdate(e, t) {
      let n = this.resolvedProperty
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++]
      this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      let n = this.resolvedProperty
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++]
      this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t]
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      ;((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.needsUpdate = !0))
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      ;((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0))
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t)
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      ;(this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0))
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      ;(this.resolvedProperty.fromArray(e, t), (this.targetObject.matrixWorldNeedsUpdate = !0))
    }
    _getValue_unbound(e, t) {
      ;(this.bind(), this.getValue(e, t))
    }
    _setValue_unbound(e, t) {
      ;(this.bind(), this.setValue(e, t))
    }
    bind() {
      let t = this.node,
        n = this.parsedPath,
        r = n.objectName,
        i = n.propertyName,
        a = n.propertyIndex
      if (
        (t || ((t = e.findNode(this.rootNode, n.nodeName)), (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      ) {
        q(`PropertyBinding: No target node found for track: ` + this.path + `.`)
        return
      }
      if (r) {
        let e = n.objectIndex
        switch (r) {
          case `materials`:
            if (!t.material) {
              no(
                `PropertyBinding: Can not bind to material as node does not have a material.`,
                this,
              )
              return
            }
            if (!t.material.materials) {
              no(
                `PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,
                this,
              )
              return
            }
            t = t.material.materials
            break
          case `bones`:
            if (!t.skeleton) {
              no(
                `PropertyBinding: Can not bind to bones as node does not have a skeleton.`,
                this,
              )
              return
            }
            t = t.skeleton.bones
            for (let n = 0; n < t.length; n++)
              if (t[n].name === e) {
                e = n
                break
              }
            break
          case `map`:
            if (`map` in t) {
              t = t.map
              break
            }
            if (!t.material) {
              no(
                `PropertyBinding: Can not bind to material as node does not have a material.`,
                this,
              )
              return
            }
            if (!t.material.map) {
              no(
                `PropertyBinding: Can not bind to material.map as node.material does not have a map.`,
                this,
              )
              return
            }
            t = t.material.map
            break
          default:
            if (t[r] === void 0) {
              no(`PropertyBinding: Can not bind to objectName of node undefined.`, this)
              return
            }
            t = t[r]
        }
        if (e !== void 0) {
          if (t[e] === void 0) {
            no(
              `PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,
              this,
              t,
            )
            return
          }
          t = t[e]
        }
      }
      let o = t[i]
      if (o === void 0) {
        let e = n.nodeName
        no(
          `PropertyBinding: Trying to update property for track: ` +
            e +
            `.` +
            i +
            ` but it wasn't found.`,
          t,
        )
        return
      }
      let s = this.Versioning.None
      ;((this.targetObject = t),
        t.isMaterial === !0
          ? (s = this.Versioning.NeedsUpdate)
          : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate))
      let c = this.BindingType.Direct
      if (a !== void 0) {
        if (i === `morphTargetInfluences`) {
          if (!t.geometry) {
            no(
              `PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,
              this,
            )
            return
          }
          if (!t.geometry.morphAttributes) {
            no(
              `PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,
              this,
            )
            return
          }
          t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a])
        }
        ;((c = this.BindingType.ArrayElement),
          (this.resolvedProperty = o),
          (this.propertyIndex = a))
      } else
        o.fromArray !== void 0 && o.toArray !== void 0
          ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = o))
          : Array.isArray(o)
            ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = o))
            : (this.propertyName = i)
      ;((this.getValue = this.GetterByBindingType[c]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[c][s]))
    }
    unbind() {
      ;((this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound))
    }
  }
;((Kh.Composite = Gh),
  (Kh.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (Kh.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }),
  (Kh.prototype.GetterByBindingType = [
    Kh.prototype._getValue_direct,
    Kh.prototype._getValue_array,
    Kh.prototype._getValue_arrayElement,
    Kh.prototype._getValue_toArray,
  ]),
  (Kh.prototype.SetterByBindingTypeAndVersioning = [
    [
      Kh.prototype._setValue_direct,
      Kh.prototype._setValue_direct_setNeedsUpdate,
      Kh.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      Kh.prototype._setValue_array,
      Kh.prototype._setValue_array_setNeedsUpdate,
      Kh.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      Kh.prototype._setValue_arrayElement,
      Kh.prototype._setValue_arrayElement_setNeedsUpdate,
      Kh.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      Kh.prototype._setValue_fromArray,
      Kh.prototype._setValue_fromArray_setNeedsUpdate,
      Kh.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]))
var qh = class {
    constructor() {
      ;((this.isAnimationObjectGroup = !0),
        (this.uuid = fo()),
        (this._objects = Array.prototype.slice.call(arguments)),
        (this.nCachedObjects_ = 0))
      let e = {}
      this._indicesByUUID = e
      for (let t = 0, n = arguments.length; t !== n; ++t) e[arguments[t].uuid] = t
      ;((this._paths = []),
        (this._parsedPaths = []),
        (this._bindings = []),
        (this._bindingsIndicesByPath = {}))
      let t = this
      this.stats = {
        objects: {
          get total() {
            return t._objects.length
          },
          get inUse() {
            return this.total - t.nCachedObjects_
          },
        },
        get bindingsPerObject() {
          return t._bindings.length
        },
      }
    }
    add() {
      let e = this._objects,
        t = this._indicesByUUID,
        n = this._paths,
        r = this._parsedPaths,
        i = this._bindings,
        a = i.length,
        o,
        s = e.length,
        c = this.nCachedObjects_
      for (let l = 0, u = arguments.length; l !== u; ++l) {
        let u = arguments[l],
          d = u.uuid,
          f = t[d]
        if (f === void 0) {
          ;((f = s++), (t[d] = f), e.push(u))
          for (let e = 0, t = a; e !== t; ++e) i[e].push(new Kh(u, n[e], r[e]))
        } else if (f < c) {
          o = e[f]
          let s = --c,
            l = e[s]
          ;((t[l.uuid] = f), (e[f] = l), (t[d] = s), (e[s] = u))
          for (let e = 0, t = a; e !== t; ++e) {
            let t = i[e],
              a = t[s],
              o = t[f]
            ;((t[f] = a), o === void 0 && (o = new Kh(u, n[e], r[e])), (t[s] = o))
          }
        } else
          e[f] !== o &&
            no(
              `AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.`,
            )
      }
      this.nCachedObjects_ = c
    }
    remove() {
      let e = this._objects,
        t = this._indicesByUUID,
        n = this._bindings,
        r = n.length,
        i = this.nCachedObjects_
      for (let a = 0, o = arguments.length; a !== o; ++a) {
        let o = arguments[a],
          s = o.uuid,
          c = t[s]
        if (c !== void 0 && c >= i) {
          let a = i++,
            l = e[a]
          ;((t[l.uuid] = c), (e[c] = l), (t[s] = a), (e[a] = o))
          for (let e = 0, t = r; e !== t; ++e) {
            let t = n[e],
              r = t[a],
              i = t[c]
            ;((t[c] = r), (t[a] = i))
          }
        }
      }
      this.nCachedObjects_ = i
    }
    uncache() {
      let e = this._objects,
        t = this._indicesByUUID,
        n = this._bindings,
        r = n.length,
        i = this.nCachedObjects_,
        a = e.length
      for (let o = 0, s = arguments.length; o !== s; ++o) {
        let s = arguments[o].uuid,
          c = t[s]
        if (c !== void 0) {
          if ((delete t[s], c < i)) {
            let o = --i,
              s = e[o],
              l = --a,
              u = e[l]
            ;(c !== o && (t[s.uuid] = c),
              (e[c] = s),
              o !== l && (t[u.uuid] = o),
              (e[o] = u),
              e.pop())
            for (let e = 0, t = r; e !== t; ++e) {
              let t = n[e],
                r = t[o],
                i = t[l]
              ;((t[c] = r), (t[o] = i), t.pop())
            }
          } else {
            let i = --a,
              o = e[i]
            ;(c !== i && (t[o.uuid] = c), (e[c] = o), e.pop())
            for (let e = 0, t = r; e !== t; ++e) {
              let t = n[e]
              ;((t[c] = t[i]), t.pop())
            }
          }
        }
      }
      this.nCachedObjects_ = i
    }
    subscribe_(e, t) {
      let n = this._bindingsIndicesByPath,
        r = n[e],
        i = this._bindings
      if (r !== void 0) return i[r]
      let a = this._paths,
        o = this._parsedPaths,
        s = this._objects,
        c = s.length,
        l = this.nCachedObjects_,
        u = Array(c)
      ;((r = i.length), (n[e] = r), a.push(e), o.push(t), i.push(u))
      for (let n = l, r = s.length; n !== r; ++n) {
        let r = s[n]
        u[n] = new Kh(r, e, t)
      }
      return u
    }
    unsubscribe_(e) {
      let t = this._bindingsIndicesByPath,
        n = t[e]
      if (n !== void 0) {
        let e = this._paths,
          r = this._parsedPaths,
          i = this._bindings,
          a = i.length - 1,
          o = i[a],
          s = e[a]
        ;((t[s] = n), (i[n] = o), i.pop(), (r[n] = r[a]), r.pop(), (e[n] = e[a]), e.pop())
      }
    }
  },
  Jh = class {
    constructor(e, t, n = null, r = t.blendMode) {
      ;((this._mixer = e), (this._clip = t), (this._localRoot = n), (this.blendMode = r))
      let i = t.tracks,
        a = i.length,
        o = Array(a),
        s = { endingStart: sa, endingEnd: sa }
      for (let e = 0; e !== a; ++e) {
        let t = i[e].createInterpolant(null)
        ;((o[e] = t), (t.settings = s))
      }
      ;((this._interpolantSettings = s),
        (this._interpolants = o),
        (this._propertyBindings = Array(a)),
        (this._cacheIndex = null),
        (this._byClipCacheIndex = null),
        (this._timeScaleInterpolant = null),
        (this._restoreTimeScale = null),
        (this._weightInterpolant = null),
        (this.loop = ta),
        (this._loopCount = -1),
        (this._startTime = null),
        (this.time = 0),
        (this.timeScale = 1),
        (this._effectiveTimeScale = 1),
        (this.weight = 1),
        (this._effectiveWeight = 1),
        (this.repetitions = 1 / 0),
        (this.paused = !1),
        (this.enabled = !0),
        (this.clampWhenFinished = !1),
        (this.zeroSlopeAtStart = !0),
        (this.zeroSlopeAtEnd = !0))
    }
    play() {
      return (this._mixer._activateAction(this), this)
    }
    stop() {
      return (this._mixer._deactivateAction(this), this.reset())
    }
    reset() {
      return (
        (this.paused = !1),
        (this.enabled = !0),
        (this.time = 0),
        (this._loopCount = -1),
        (this._startTime = null),
        this.stopFading().stopWarping()
      )
    }
    isRunning() {
      return (
        this.enabled &&
        !this.paused &&
        this.timeScale !== 0 &&
        this._startTime === null &&
        this._mixer._isActiveAction(this)
      )
    }
    isScheduled() {
      return this._mixer._isActiveAction(this)
    }
    startAt(e) {
      return ((this._startTime = e), this)
    }
    setLoop(e, t) {
      return ((this.loop = e), (this.repetitions = t), this)
    }
    setEffectiveWeight(e) {
      return (
        (this.weight = e),
        (this._effectiveWeight = this.enabled ? e : 0),
        this.stopFading()
      )
    }
    getEffectiveWeight() {
      return this._effectiveWeight
    }
    fadeIn(e) {
      return this._scheduleFading(e, 0, 1)
    }
    fadeOut(e) {
      return this._scheduleFading(e, 1, 0)
    }
    crossFadeFrom(e, t, n = !1) {
      if ((e.fadeOut(t), this.fadeIn(t), n === !0)) {
        let n = this._clip.duration,
          r = e._clip.duration,
          i = r / n,
          a = n / r
        ;((e._restoreTimeScale = e.timeScale),
          (this._restoreTimeScale = this.timeScale),
          e.warp(1, i, t),
          this.warp(a, 1, t))
      }
      return this
    }
    crossFadeTo(e, t, n = !1) {
      return e.crossFadeFrom(this, t, n)
    }
    stopFading() {
      let e = this._weightInterpolant
      return (
        e !== null &&
          ((this._weightInterpolant = null), this._mixer._takeBackControlInterpolant(e)),
        this
      )
    }
    setEffectiveTimeScale(e) {
      return (
        (this.timeScale = e),
        (this._effectiveTimeScale = this.paused ? 0 : e),
        this.stopWarping()
      )
    }
    getEffectiveTimeScale() {
      return this._effectiveTimeScale
    }
    setDuration(e) {
      return ((this.timeScale = this._clip.duration / e), this.stopWarping())
    }
    syncWith(e) {
      return ((this.time = e.time), (this.timeScale = e.timeScale), this.stopWarping())
    }
    halt(e) {
      return this.warp(this._effectiveTimeScale, 0, e)
    }
    warp(e, t, n) {
      let r = this._mixer,
        i = r.time,
        a = this.timeScale,
        o = this._timeScaleInterpolant
      o === null && ((o = r._lendControlInterpolant()), (this._timeScaleInterpolant = o))
      let s = o.parameterPositions,
        c = o.sampleValues
      return ((s[0] = i), (s[1] = i + n), (c[0] = e / a), (c[1] = t / a), this)
    }
    stopWarping() {
      let e = this._timeScaleInterpolant
      return (
        e !== null &&
          ((this._timeScaleInterpolant = null), this._mixer._takeBackControlInterpolant(e)),
        (this._restoreTimeScale = null),
        this
      )
    }
    getMixer() {
      return this._mixer
    }
    getClip() {
      return this._clip
    }
    getRoot() {
      return this._localRoot || this._mixer._root
    }
    _update(e, t, n, r) {
      if (!this.enabled) {
        this._updateWeight(e)
        return
      }
      let i = this._startTime
      if (i !== null) {
        let r = (e - i) * n
        r < 0 || n === 0 ? (t = 0) : ((this._startTime = null), (t = n * r))
      }
      t *= this._updateTimeScale(e)
      let a = this._updateTime(t),
        o = this._updateWeight(e)
      if (o > 0) {
        let e = this._interpolants,
          t = this._propertyBindings
        switch (this.blendMode) {
          case da:
            for (let n = 0, r = e.length; n !== r; ++n)
              (e[n].evaluate(a), t[n].accumulateAdditive(o))
            break
          case ua:
          default:
            for (let n = 0, i = e.length; n !== i; ++n)
              (e[n].evaluate(a), t[n].accumulate(r, o))
        }
      }
    }
    _updateWeight(e) {
      let t = 0
      if (this.enabled) {
        t = this.weight
        let n = this._weightInterpolant
        if (n !== null) {
          let r = n.evaluate(e)[0]
          ;((t *= r),
            e > n.parameterPositions[1] && (this.stopFading(), r === 0 && (this.enabled = !1)))
        }
      }
      return ((this._effectiveWeight = t), t)
    }
    _updateTimeScale(e) {
      let t = 0
      if (!this.paused) {
        t = this.timeScale
        let n = this._timeScaleInterpolant
        if (n !== null) {
          let r = n.evaluate(e)[0]
          ;((t *= r),
            e > n.parameterPositions[1] &&
              (t === 0
                ? (this.paused = !0)
                : (this._restoreTimeScale !== null && (t = this._restoreTimeScale),
                  (this.timeScale = t)),
              this.stopWarping()))
        }
      }
      return ((this._effectiveTimeScale = t), t)
    }
    _updateTime(e) {
      let t = this._clip.duration,
        n = this.loop,
        r = this.time + e,
        i = this._loopCount,
        a = n === na
      if (e === 0) return i === -1 ? r : a && (i & 1) == 1 ? t - r : r
      if (n === 2200) {
        i === -1 && ((this._loopCount = 0), this._setEndings(!0, !0, !1))
        handle_stop: {
          if (r >= t) r = t
          else if (r < 0) r = 0
          else {
            this.time = r
            break handle_stop
          }
          ;(this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (this.time = r),
            this._mixer.dispatchEvent({
              type: `finished`,
              action: this,
              direction: e < 0 ? -1 : 1,
            }))
        }
      } else {
        if (
          (i === -1 &&
            (e >= 0
              ? ((i = 0), this._setEndings(!0, this.repetitions === 0, a))
              : this._setEndings(this.repetitions === 0, !0, a)),
          r >= t || r < 0)
        ) {
          let n = Math.floor(r / t)
          ;((r -= t * n), (i += Math.abs(n)))
          let o = this.repetitions - i
          if (o <= 0)
            (this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
              (r = e > 0 ? t : 0),
              (this.time = r),
              this._mixer.dispatchEvent({
                type: `finished`,
                action: this,
                direction: e > 0 ? 1 : -1,
              }))
          else {
            if (o === 1) {
              let t = e < 0
              this._setEndings(t, !t, a)
            } else this._setEndings(!1, !1, a)
            ;((this._loopCount = i),
              (this.time = r),
              this._mixer.dispatchEvent({ type: `loop`, action: this, loopDelta: n }))
          }
        } else ((this._loopCount = i), (this.time = r))
        if (a && (i & 1) == 1) return t - r
      }
      return r
    }
    _setEndings(e, t, n) {
      let r = this._interpolantSettings
      n
        ? ((r.endingStart = ca), (r.endingEnd = ca))
        : ((r.endingStart = e ? (this.zeroSlopeAtStart ? ca : sa) : la),
          (r.endingEnd = t ? (this.zeroSlopeAtEnd ? ca : sa) : la))
    }
    _scheduleFading(e, t, n) {
      let r = this._mixer,
        i = r.time,
        a = this._weightInterpolant
      a === null && ((a = r._lendControlInterpolant()), (this._weightInterpolant = a))
      let o = a.parameterPositions,
        s = a.sampleValues
      return ((o[0] = i), (s[0] = t), (o[1] = i + e), (s[1] = n), this)
    }
  },
  Yh = new Float32Array(1),
  Xh = class extends oo {
    constructor(e) {
      ;(super(),
        (this._root = e),
        this._initMemoryManager(),
        (this._accuIndex = 0),
        (this.time = 0),
        (this.timeScale = 1),
        typeof __THREE_DEVTOOLS__ < `u` &&
          __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`, { detail: this })))
    }
    _bindAction(e, t) {
      let n = e._localRoot || this._root,
        r = e._clip.tracks,
        i = r.length,
        a = e._propertyBindings,
        o = e._interpolants,
        s = n.uuid,
        c = this._bindingsByRootAndName,
        l = c[s]
      l === void 0 && ((l = {}), (c[s] = l))
      for (let e = 0; e !== i; ++e) {
        let i = r[e],
          c = i.name,
          u = l[c]
        if (u !== void 0) (++u.referenceCount, (a[e] = u))
        else {
          if (((u = a[e]), u !== void 0)) {
            u._cacheIndex === null && (++u.referenceCount, this._addInactiveBinding(u, s, c))
            continue
          }
          let r = t && t._propertyBindings[e].binding.parsedPath
          ;((u = new Ph(Kh.create(n, c, r), i.ValueTypeName, i.getValueSize())),
            ++u.referenceCount,
            this._addInactiveBinding(u, s, c),
            (a[e] = u))
        }
        o[e].resultBuffer = u.buffer
      }
    }
    _activateAction(e) {
      if (!this._isActiveAction(e)) {
        if (e._cacheIndex === null) {
          let t = (e._localRoot || this._root).uuid,
            n = e._clip.uuid,
            r = this._actionsByClip[n]
          ;(this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, n, t))
        }
        let t = e._propertyBindings
        for (let e = 0, n = t.length; e !== n; ++e) {
          let n = t[e]
          n.useCount++ === 0 && (this._lendBinding(n), n.saveOriginalState())
        }
        this._lendAction(e)
      }
    }
    _deactivateAction(e) {
      if (this._isActiveAction(e)) {
        let t = e._propertyBindings
        for (let e = 0, n = t.length; e !== n; ++e) {
          let n = t[e]
          --n.useCount === 0 && (n.restoreOriginalState(), this._takeBackBinding(n))
        }
        this._takeBackAction(e)
      }
    }
    _initMemoryManager() {
      ;((this._actions = []),
        (this._nActiveActions = 0),
        (this._actionsByClip = {}),
        (this._bindings = []),
        (this._nActiveBindings = 0),
        (this._bindingsByRootAndName = {}),
        (this._controlInterpolants = []),
        (this._nActiveControlInterpolants = 0))
      let e = this
      this.stats = {
        actions: {
          get total() {
            return e._actions.length
          },
          get inUse() {
            return e._nActiveActions
          },
        },
        bindings: {
          get total() {
            return e._bindings.length
          },
          get inUse() {
            return e._nActiveBindings
          },
        },
        controlInterpolants: {
          get total() {
            return e._controlInterpolants.length
          },
          get inUse() {
            return e._nActiveControlInterpolants
          },
        },
      }
    }
    _isActiveAction(e) {
      let t = e._cacheIndex
      return t !== null && t < this._nActiveActions
    }
    _addInactiveAction(e, t, n) {
      let r = this._actions,
        i = this._actionsByClip,
        a = i[t]
      if (a === void 0)
        ((a = { knownActions: [e], actionByRoot: {} }), (e._byClipCacheIndex = 0), (i[t] = a))
      else {
        let t = a.knownActions
        ;((e._byClipCacheIndex = t.length), t.push(e))
      }
      ;((e._cacheIndex = r.length), r.push(e), (a.actionByRoot[n] = e))
    }
    _removeInactiveAction(e) {
      let t = this._actions,
        n = t[t.length - 1],
        r = e._cacheIndex
      ;((n._cacheIndex = r), (t[r] = n), t.pop(), (e._cacheIndex = null))
      let i = e._clip.uuid,
        a = this._actionsByClip,
        o = a[i],
        s = o.knownActions,
        c = s[s.length - 1],
        l = e._byClipCacheIndex
      ;((c._byClipCacheIndex = l), (s[l] = c), s.pop(), (e._byClipCacheIndex = null))
      let u = o.actionByRoot,
        d = (e._localRoot || this._root).uuid
      ;(delete u[d], s.length === 0 && delete a[i], this._removeInactiveBindingsForAction(e))
    }
    _removeInactiveBindingsForAction(e) {
      let t = e._propertyBindings
      for (let e = 0, n = t.length; e !== n; ++e) {
        let n = t[e]
        --n.referenceCount === 0 && this._removeInactiveBinding(n)
      }
    }
    _lendAction(e) {
      let t = this._actions,
        n = e._cacheIndex,
        r = this._nActiveActions++,
        i = t[r]
      ;((e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i))
    }
    _takeBackAction(e) {
      let t = this._actions,
        n = e._cacheIndex,
        r = --this._nActiveActions,
        i = t[r]
      ;((e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i))
    }
    _addInactiveBinding(e, t, n) {
      let r = this._bindingsByRootAndName,
        i = this._bindings,
        a = r[t]
      ;(a === void 0 && ((a = {}), (r[t] = a)),
        (a[n] = e),
        (e._cacheIndex = i.length),
        i.push(e))
    }
    _removeInactiveBinding(e) {
      let t = this._bindings,
        n = e.binding,
        r = n.rootNode.uuid,
        i = n.path,
        a = this._bindingsByRootAndName,
        o = a[r],
        s = t[t.length - 1],
        c = e._cacheIndex
      ;((s._cacheIndex = c),
        (t[c] = s),
        t.pop(),
        delete o[i],
        Object.keys(o).length === 0 && delete a[r])
    }
    _lendBinding(e) {
      let t = this._bindings,
        n = e._cacheIndex,
        r = this._nActiveBindings++,
        i = t[r]
      ;((e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i))
    }
    _takeBackBinding(e) {
      let t = this._bindings,
        n = e._cacheIndex,
        r = --this._nActiveBindings,
        i = t[r]
      ;((e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i))
    }
    _lendControlInterpolant() {
      let e = this._controlInterpolants,
        t = this._nActiveControlInterpolants++,
        n = e[t]
      return (
        n === void 0 &&
          ((n = new Gp(new Float32Array(2), new Float32Array(2), 1, Yh)),
          (n.__cacheIndex = t),
          (e[t] = n)),
        n
      )
    }
    _takeBackControlInterpolant(e) {
      let t = this._controlInterpolants,
        n = e.__cacheIndex,
        r = --this._nActiveControlInterpolants,
        i = t[r]
      ;((e.__cacheIndex = r), (t[r] = e), (i.__cacheIndex = n), (t[n] = i))
    }
    clipAction(e, t, n) {
      let r = t || this._root,
        i = r.uuid,
        a = typeof e == `string` ? sm.findByName(r, e) : e,
        o = a === null ? e : a.uuid,
        s = this._actionsByClip[o],
        c = null
      if ((n === void 0 && (n = a === null ? ua : a.blendMode), s !== void 0)) {
        let e = s.actionByRoot[i]
        if (e !== void 0 && e.blendMode === n) return e
        ;((c = s.knownActions[0]), a === null && (a = c._clip))
      }
      if (a === null) return null
      let l = new Jh(this, a, t, n)
      return (this._bindAction(l, c), this._addInactiveAction(l, o, i), l)
    }
    existingAction(e, t) {
      let n = t || this._root,
        r = n.uuid,
        i = typeof e == `string` ? sm.findByName(n, e) : e,
        a = i ? i.uuid : e,
        o = this._actionsByClip[a]
      return o === void 0 ? null : o.actionByRoot[r] || null
    }
    stopAllAction() {
      let e = this._actions,
        t = this._nActiveActions
      for (let n = t - 1; n >= 0; --n) e[n].stop()
      return this
    }
    update(e) {
      e *= this.timeScale
      let t = this._actions,
        n = this._nActiveActions,
        r = (this.time += e),
        i = Math.sign(e),
        a = (this._accuIndex ^= 1)
      for (let o = 0; o !== n; ++o) t[o]._update(r, e, i, a)
      let o = this._bindings,
        s = this._nActiveBindings
      for (let e = 0; e !== s; ++e) o[e].apply(a)
      return this
    }
    setTime(e) {
      this.time = 0
      for (let e = 0; e < this._actions.length; e++) this._actions[e].time = 0
      return this.update(e)
    }
    getRoot() {
      return this._root
    }
    uncacheClip(e) {
      let t = this._actions,
        n = e.uuid,
        r = this._actionsByClip,
        i = r[n]
      if (i !== void 0) {
        let e = i.knownActions
        for (let n = 0, r = e.length; n !== r; ++n) {
          let r = e[n]
          this._deactivateAction(r)
          let i = r._cacheIndex,
            a = t[t.length - 1]
          ;((r._cacheIndex = null),
            (r._byClipCacheIndex = null),
            (a._cacheIndex = i),
            (t[i] = a),
            t.pop(),
            this._removeInactiveBindingsForAction(r))
        }
        delete r[n]
      }
    }
    uncacheRoot(e) {
      let t = e.uuid,
        n = this._actionsByClip
      for (let e in n) {
        let r = n[e].actionByRoot[t]
        r !== void 0 && (this._deactivateAction(r), this._removeInactiveAction(r))
      }
      let r = this._bindingsByRootAndName[t]
      if (r !== void 0)
        for (let e in r) {
          let t = r[e]
          ;(t.restoreOriginalState(), this._removeInactiveBinding(t))
        }
    }
    uncacheAction(e, t) {
      let n = this.existingAction(e, t)
      n !== null && (this._deactivateAction(n), this._removeInactiveAction(n))
    }
  },
  Zh = class extends rs {
    constructor(e = 1, t = 1, n = 1, r = {}) {
      ;(super(e, t, r), (this.isRenderTarget3D = !0), (this.depth = n))
      for (let r = 0; r < this.textures.length; r++) {
        let i = new ss(null, e, t, n)
        ;((i.isRenderTargetTexture = !0), (i.renderTarget = this), (this.textures[r] = i))
      }
      this._setTextureOptions(r)
    }
  },
  Qh = class e {
    constructor(e) {
      this.value = e
    }
    clone() {
      return new e(this.value.clone === void 0 ? this.value : this.value.clone())
    }
  },
  $h = 0,
  eg = class extends oo {
    constructor() {
      ;(super(),
        (this.isUniformsGroup = !0),
        Object.defineProperty(this, 'id', { value: $h++ }),
        (this.name = ``),
        (this.usage = Da),
        (this.uniforms = []))
    }
    add(e) {
      return (this.uniforms.push(e), this)
    }
    remove(e) {
      let t = this.uniforms.indexOf(e)
      return (t !== -1 && this.uniforms.splice(t, 1), this)
    }
    setName(e) {
      return ((this.name = e), this)
    }
    setUsage(e) {
      return ((this.usage = e), this)
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` })
    }
    copy(e) {
      ;((this.name = e.name), (this.usage = e.usage))
      let t = e.uniforms
      this.uniforms.length = 0
      for (let e = 0, n = t.length; e < n; e++) {
        let n = t[e]
        Array.isArray(n)
          ? this.uniforms.push(n.map((e) => e.clone()))
          : this.uniforms.push(n.clone())
      }
      return this
    }
    clone() {
      return new this.constructor().copy(this)
    }
  },
  tg = class extends $c {
    constructor(e, t, n = 1) {
      ;(super(e, t), (this.isInstancedInterleavedBuffer = !0), (this.meshPerAttribute = n))
    }
    copy(e) {
      return (super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this)
    }
    clone(e) {
      let t = super.clone(e)
      return ((t.meshPerAttribute = this.meshPerAttribute), t)
    }
    toJSON(e) {
      let t = super.toJSON(e)
      return (
        (t.isInstancedInterleavedBuffer = !0),
        (t.meshPerAttribute = this.meshPerAttribute),
        t
      )
    }
  },
  ng = class {
    constructor(e, t, n, r, i, a = !1) {
      ;((this.isGLBufferAttribute = !0),
        (this.name = ``),
        (this.buffer = e),
        (this.type = t),
        (this.itemSize = n),
        (this.elementSize = r),
        (this.count = i),
        (this.normalized = a),
        (this.version = 0))
    }
    set needsUpdate(e) {
      e === !0 && this.version++
    }
    setBuffer(e) {
      return ((this.buffer = e), this)
    }
    setType(e, t) {
      return ((this.type = e), (this.elementSize = t), this)
    }
    setItemSize(e) {
      return ((this.itemSize = e), this)
    }
    setCount(e) {
      return ((this.count = e), this)
    }
  },
  rg = new ls(),
  ig = class {
    constructor(e, t, n = 0, r = 1 / 0) {
      ;((this.ray = new Ml(e, t)),
        (this.near = n),
        (this.far = r),
        (this.camera = null),
        (this.layers = new bs()),
        (this.params = {
          Mesh: {},
          Line: { threshold: 1 },
          LOD: {},
          Points: { threshold: 1 },
          Sprite: {},
        }))
    }
    set(e, t) {
      this.ray.set(e, t)
    }
    setFromCamera(e, t) {
      t.isPerspectiveCamera
        ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
          this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(),
          (this.camera = t))
        : t.isOrthographicCamera
          ? (this.ray.origin.set(e.x, e.y, t.projectionMatrix.elements[14]).unproject(t),
            this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
            (this.camera = t))
          : no(`Raycaster: Unsupported camera type: ` + t.type)
    }
    setFromXRController(e) {
      return (
        rg.identity().extractRotation(e.matrixWorld),
        this.ray.origin.setFromMatrixPosition(e.matrixWorld),
        this.ray.direction.set(0, 0, -1).applyMatrix4(rg),
        this
      )
    }
    intersectObject(e, t = !0, n = []) {
      return (og(e, this, n, t), n.sort(ag), n)
    }
    intersectObjects(e, t = !0, n = []) {
      for (let r = 0, i = e.length; r < i; r++) og(e[r], this, n, t)
      return (n.sort(ag), n)
    }
  }
