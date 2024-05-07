import React, { useState, useEffect } from 'react'
import { TableCallsHistory } from '../../components/Client/Sucursales/TableCallsHistory/TableCallsHistory'
import { useCall } from '../../hooks/main'

export function Mochis() {
  const { loading, calls, error, getCalls } = useCall()
  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    getCalls()
  }, [refetch])

  const onRefetch = () => setRefetch((prev) => !prev)

  return (
    <div>
      <TableCallsHistory calls={calls} />
    </div>
  )
}
