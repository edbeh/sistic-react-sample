import {
  FETCH_EVENT_BEGIN,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILURE,
} from './eventActions'

const initialState = {
  event: null,
  error: null,
}

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENT_BEGIN:
      return {
        ...state,
        event: null,
        error: null,
      }
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        event: action.payload.event,
        error: null,
      }
    case FETCH_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }
    default:
      return state
  }
}
