function Lb(e) {
  try {
    return Object.defineProperties(e, {
      _currentRenderer: {
        get() {
          return null
        },
        set() {},
      },
      _currentRenderer2: {
        get() {
          return null
        },
        set() {},
      },
    })
  } catch {
    return e
  }
}
var Rb = Lb(v.createContext(null)),
  zb = class extends v.Component {
    render() {
      return v.createElement(Rb.Provider, { value: this._reactInternals }, this.props.children)
    }
  }
