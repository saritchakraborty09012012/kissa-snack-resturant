function Ax(e) {
  return (e.eventObject || e.object).uuid + `/` + e.index + e.instanceId
}
