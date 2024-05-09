import React, { useState, useEffect } from 'react'
import {
  BasicModal,
  TableCallsHistory,
  HeaderPage,
  // CalendarRangeComponent,
  Filtros,
  TestComponent,
} from '../../components/main'
import { Loader } from 'semantic-ui-react'
import { useCall } from '../../hooks/main'

export function Sucursales() {
  const { loading, calls, error, getCalls } = useCall()
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [refetch, setRefetch] = useState(false)
  const [filtroSucursal, setFiltroSucursal] = useState(null)
  const [filtroResponse, setFiltroResponse] = useState(null)
  const [filtroExtencionDst, setFiltroExtencionDst] = useState(null)
  const [filtroExtencionSrc, setFiltroExtencionSrc] = useState(null)
  const [filtroDateOne, setFiltroDateOne] = useState(null)
  const [filtroDateTwo, setFiltroDateTwo] = useState(null)

  useEffect(() => {
    getCalls()
  }, [refetch])

  const openCloseModal = () => setShowModal((prev) => !prev)
  const onRefetch = () => setRefetch((prev) => !prev)

  const filtrosModal = () => {
    setTitleModal('Filtros')
    setContentModal(
      <Filtros
        onClose={openCloseModal}
        onRefetch={onRefetch}
        setFiltroSucursal={setFiltroSucursal}
        setFiltroResponse={setFiltroResponse}
        setFiltroExtencionDst={setFiltroExtencionDst}
        setFiltroExtencionSrc={setFiltroExtencionSrc}
        setFiltroDateOne={setFiltroDateOne}
        setFiltroDateTwo={setFiltroDateTwo}
      />
    )
    openCloseModal()
  }

  return (
    <>
      <HeaderPage
        title="Sucursales"
        btnTitle="Filtros"
        btnClick={filtrosModal}
      />

      {loading ? (
        <Loader active inline="centered">
          Loading ...
        </Loader>
      ) : (
        <TableCallsHistory
          calls={calls}
          filtroSucursal={filtroSucursal}
          filtroResponse={filtroResponse}
          filtroExtencionDst={filtroExtencionDst}
          filtroExtencionSrc={filtroExtencionSrc}
          filtroDateOne={filtroDateOne}
          filtroDateTwo={filtroDateTwo}
        />
      )}
      <BasicModal
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  )
}
