const Redux = require('redux');
// ========= ACTION TYPE ==========


// ========= ACTION ==========
const actionNextColor = () => {
  store.dispatch({type: NEXT_COLOR})
}
const actionPreviousColor = () => {
  store.dispatch({type: PREVIOUS_COLOR})
}

// ========= REDUCER ==========
const INITIAL_STATE = {
  index: 0
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length -1 ? 0 : state.index + 1
      }
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length : state.index - 1
      }
    default:
      return INITIAL_STATE
  }
}

// ======== STORE =========
const store = Redux.createStore(reducer);



