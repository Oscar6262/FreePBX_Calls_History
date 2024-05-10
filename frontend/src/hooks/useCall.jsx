import  { useState } from 'react'
import { getCallsApi } from '../api/call'
// import { useAuth } from './main'

export function useCall() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [calls, setCalls] = useState([])
  // const { auth } = useAuth()

  const getCalls = async (form) => {
    try {
      setLoading(true)
      const response = await getCallsApi(form)
      setLoading(false)
      setCalls(response)
    } catch (error) {
      setLoading(false)
      setError(error)
      console.log(error)
    }
  }
  return { error, calls, loading, getCalls }
}
