function dh(e, t, n, r, i, a, o, s, c) {
  ;((this.tag = 1),
    (this.containerInfo = e),
    (this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode =
      this.next =
      this.pendingContext =
      this.context =
      this.cancelPendingCommit =
        null),
    (this.callbackPriority = 0),
    (this.expirationTimes = it(-1)),
    (this.entangledLanes =
      this.shellSuspendCounter =
      this.errorRecoveryDisabledLanes =
      this.expiredLanes =
      this.warmLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = it(0)),
    (this.hiddenUpdates = it(null)),
    (this.identifierPrefix = r),
    (this.onUncaughtError = i),
    (this.onCaughtError = a),
    (this.onRecoverableError = o),
    (this.pooledCache = null),
    (this.pooledCacheLanes = 0),
    (this.formState = c),
    (this.transitionTypes = null),
    (this.incompleteTransitions = new Map()))
}
