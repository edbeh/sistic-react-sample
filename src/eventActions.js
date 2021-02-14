import axios from 'axios'

export const fetchEvent = (url) => {
  const apiUrl =
    url ||
    'https://sistic-react-sample.s3-ap-southeast-1.amazonaws.com/apis/page1.json'
  return (dispatch) => {
    dispatch(fetchEventBegin())
    return axios
      .get(apiUrl)
      .then((resp) => {
        dispatch(fetchEventSuccess(resp.data))
        return resp.data
      })
      .catch((error) => dispatch(fetchEventFailure(error)))
  }
}

export const FETCH_EVENT_BEGIN = 'FETCH_EVENT_BEGIN'
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS'
export const FETCH_EVENT_FAILURE = 'FETCH_EVENT_FAILURE'

export const fetchEventBegin = () => ({ type: FETCH_EVENT_BEGIN })

export const fetchEventSuccess = (event) => ({
  type: FETCH_EVENT_SUCCESS,
  payload: { event },
})

export const fetchEventFailure = (error) => ({
  type: FETCH_EVENT_FAILURE,
  payload: { error },
})
