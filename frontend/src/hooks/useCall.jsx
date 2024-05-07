import React, { useState } from 'react'
import { getCallsApi } from '../api/call'
// import { useAuth } from './main'

export function useCall() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [calls, setCalls] = useState([])
  // const { auth } = useAuth()

  const getCalls = async () => {
    try {
      setLoading(true)
      const response = await getCallsApi()
      setLoading(false)
      setCalls(response)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }
  return { error, calls, loading, getCalls }
}
