function US(e) {
  typeof queueMicrotask == `function`
    ? queueMicrotask(e)
    : typeof Promise < `u`
      ? Promise.resolve()
          .then(e)
          .catch((e) => {
            setTimeout(() => {
              throw e
            })
          })
      : setTimeout(e)
}
var WS = CS({
    isPrimaryRenderer: !1,
    warnsIfNotActing: !1,
    supportsMutation: !0,
    supportsPersistence: !1,
    supportsHydration: !1,
    createInstance: DS,
    removeChild: PS,
    appendChild: jS,
    appendInitialChild: jS,
    insertBefore: MS,
    appendChildToContainer(e, t) {
      let n = e.getState().scene.__r3f
      t && n && jS(n, t)
    },
    removeChildFromContainer(e, t) {
      let n = e.getState().scene.__r3f
      t && n && PS(n, t)
    },
    insertInContainerBefore(e, t, n) {
      let r = e.getState().scene.__r3f
      t && n && r && MS(r, t, n)
    },
    getRootHostContext: () => BS,
    getChildHostContext: () => BS,
    commitUpdate(e, t, n, r, i) {
      var a
      ES(t, r)
      let o = !1
      if (
        (e.type === `primitive` && n.object !== r.object
          ? (o = !0)
          : r.args?.length === n.args?.length
            ? (a = r.args) != null && a.some((e, t) => e !== n.args?.[t]) && (o = !0)
            : (o = !0),
        o)
      )
        IS.push([e, mx(r), i])
      else {
        let t = Cx(e, r),
          n = e.props.attach
        ;((e.props = mx(r)),
          n === void 0 ? delete e.props.attach : (e.props.attach = n),
          Object.keys(t).length && Ex(e.object, t))
      }
    },
    finalizeInitialChildren: () => !1,
    commitMount() {},
    getPublicInstance: (e) => e?.object,
    prepareForCommit: () => null,
    preparePortalMount: (e) => hx(e.getState().scene, e, ``, {}),
    resetAfterCommit: LS,
    shouldSetTextContent: () => !1,
    clearContainer: () => !1,
    hideInstance: OS,
    unhideInstance: kS,
    createTextInstance: zS,
    hideTextInstance: zS,
    unhideTextInstance: zS,
    supportsMicrotasks: !0,
    scheduleMicrotask: US,
    scheduleTimeout: typeof setTimeout == `function` ? setTimeout : void 0,
    cancelTimeout: typeof clearTimeout == `function` ? clearTimeout : void 0,
    noTimeout: -1,
    getInstanceFromNode: () => null,
    beforeActiveInstanceBlur() {},
    afterActiveInstanceBlur() {},
    detachDeletedInstance() {},
    prepareScopeUpdate() {},
    getInstanceFromScope: () => null,
    shouldAttemptEagerTransition: () => !1,
    trackSchedulerEvent: () => {},
    resolveEventType: () => null,
    resolveEventTimeStamp: () => -1.1,
    requestPostPaintCallback() {},
    maySuspendCommit: () => !1,
    preloadInstance: () => !0,
    suspendInstance() {},
    waitForCommitToBeReady: () => null,
    NotPendingTransition: null,
    HostTransitionContext: v.createContext(null),
    setCurrentUpdatePriority(e) {
      VS = e
    },
    getCurrentUpdatePriority() {
      return VS
    },
    resolveUpdatePriority() {
      if (VS !== wS) return VS
      let e = typeof window < `u` ? window.event?.type : void 0
      return e === void 0 ? tS : HS(e)
    },
    resetFormInstance() {},
    rendererPackageName: `@react-three/fiber`,
    rendererVersion: cS.version,
    applyViewTransitionName(e, t, n) {},
    restoreViewTransitionName(e, t) {},
    cancelViewTransitionName(e, t, n) {},
    cancelRootViewTransitionName(e) {},
    restoreRootViewTransitionName(e) {},
    InstanceMeasurement: null,
    measureInstance: (e) => null,
    wasInstanceInViewport: (e) => !0,
    hasInstanceChanged: (e, t) => !1,
    hasInstanceAffectedParent: (e, t) => !1,
    suspendOnActiveViewTransition(e, t) {},
    startViewTransition(e, t, n, r, i, a, o, s, c, l, u) {
      return (r(), i(), u?.(), o(), null)
    },
    startGestureTransition(e, t, n, r, i, a, o, s, c, l) {
      return (o(), s(), l?.(), null)
    },
    stopViewTransition(e) {},
    addViewTransitionFinishedListener(e, t) {
      t()
    },
    createViewTransitionInstance: (e) => null,
    getCurrentGestureOffset(e) {
      throw Error(`startGestureTransition is not yet supported in react-three-fiber.`)
    },
    cloneMutableInstance(e, t) {
      return e
    },
    cloneMutableTextInstance(e) {
      return e
    },
    cloneRootViewTransitionContainer(e) {
      throw Error(`Not implemented.`)
    },
    removeRootViewTransitionClone(e, t) {
      throw Error(`Not implemented.`)
    },
    createFragmentInstance: (e) => null,
    updateFragmentInstanceFiber(e, t) {},
    commitNewChildToFragmentInstance(e, t) {},
    deleteChildFromFragmentInstance(e, t) {},
    measureClonedInstance: (e) => null,
    maySuspendCommitOnUpdate: (e, t, n) => !1,
    maySuspendCommitInSyncRender: (e, t) => !1,
    startSuspendingCommit: () => null,
    getSuspendedCommitReason: (e, t) => null,
  }),
  GS = new Map()
