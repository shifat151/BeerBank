export function beer(state = [], action) {
  switch (action.type) {
    case 'GET_BEERS':
      return action.beers
    default:
      return {
        ...state, 'beers': []
      }
  }
}
