// import { method } from 'lodash'
import { json } from 'react-router-dom'
import { BASE_API } from '../utils/constants'

export async function getCallsApi(token) {
  try {
    const url = `${BASE_API}/cdr`
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, params)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}
