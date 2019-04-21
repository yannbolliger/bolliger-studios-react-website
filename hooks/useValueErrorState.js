import { useReducer } from "react"

export default initialState => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "error":
        return { ...state, error: action.error }
      default:
        return { ...state, value: action.value }
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    value: initialState,
    error: ""
  })

  return {
    ...state,
    setValue: value => dispatch({ type: "value", value }),
    hasError: state.error !== "",
    setError: error => dispatch({ type: "error", error })
  }
}
