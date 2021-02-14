import {
  FETCH_EVENT_BEGIN,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILURE,
} from './eventActions'

const initialState = {
  event: null,
  loading: false,
  error: null,
}

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENT_BEGIN:
      return {
        ...state,
        event: null,
        loading: true,
        error: null,
      }
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        event: action.payload.event,
        loading: false,
      }
    case FETCH_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    default:
      return state
  }
}
