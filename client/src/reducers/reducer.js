import { GET_ITEMS } from "../actions/actionCity";

export const saveUserDataEnd = (data) => {
    return {
      type: 'SAVE_USER_DATA_END',
      payload: data
    }
  }
  
const initialState = { mostrar: false }
export default (state = initialState, action) => {
    switch (action.type){
        case GET_ITEMS: 
            return {
                ...state,
                mostrar: true
            }
        default:
            return state;
    }
}

export const selectActiveMostrar = state => state.reducer.mostrar;