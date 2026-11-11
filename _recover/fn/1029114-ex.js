function ex({ set: e }) {
  return (Jb(() => (e(new Promise(() => null)), () => e(!1)), [e]), null)
}
var tx = ((e) => (
  (e = class extends v.Component {
    constructor(...e) {
      ;(super(...e), (this.state = { error: !1 }))
    }
    componentDidCatch(e) {
      this.props.set(e)
    }
    render() {
      return this.state.error ? null : this.props.children
    }
  }),
  (e.getDerivedStateFromError = () => ({ error: !0 })),
  e
))()
