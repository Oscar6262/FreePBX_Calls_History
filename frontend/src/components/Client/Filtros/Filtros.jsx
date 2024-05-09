import React from 'react'
import { Button, Select } from 'semantic-ui-react'

export function Filtros(props) {
  const {
    setFiltroSucursal,
    setFiltroResponse,
    setFiltroDateOne,
    setFiltroDateTwo,
    setFiltroExtencionDst,
    setFiltroExtencionSrc,
  } = props

  // Opciones para el Select
  const optionsSucursales = [
    { key: 'Default', value: null, text: 'Default' },
    { key: '1', value: '1', text: 'Guasave' },
    { key: '2', value: '2', text: 'Mochis' },
    { key: '3', value: '3', text: 'Culiacan' },
  ]
  const optionsResponse = [
    { key: 'default', value: null, text: 'Default' },
    { key: 'NO ANSWER', value: 'NO ANSWER', text: 'NO ANSWER' },
    { key: 'ANSWERED', value: 'ANSWERED', text: 'ANSWERED' },
  ]

  const optionsExtencionDst = [
    { key: 'default', value: null, text: 'Default' },
    { key: '101', value: '101', text: '101' },
    { key: '201', value: '201', text: '201' },
    { key: '200', value: '200', text: '200' },
  ]
  const optionsExtencionSrc = [
    { key: 'default', value: null, text: 'Default' },
    { key: '101', value: '101', text: '101' },
    { key: '201', value: '201', text: '201' },
    { key: '200', value: '200', text: '200' },
  ]

  const optionsDateOne = [
    { key: 'default', value: null, text: 'Default' },
    { key: '2024-04-01', value: '2024-04-01', text: '2024-04-01' },
    { key: '2024-03-15', value: '2024-03-15', text: '2024-03-15' },
  ]

  const optionsDateTwo = [
    { key: 'default', value: null, text: 'Default' },
    { key: '2024-04-15', value: '2024-04-15', text: '2024-04-15' },
    { key: '2024-04-07', value: '2024-04-07', text: '2024-04-07' },
  ]

  // Manejar el cambio de valor del Select
  const handleChangeSucursal = (e, { value }) => {
    // console.log(value)
    setFiltroSucursal(value)
  }

  const handleChangeResponse = (e, { value }) => {
    // console.log(value)
    setFiltroResponse(value)
  }

  const handleChangeExtencionSrc = (e, { value }) => {
    // console.log(value)
    setFiltroExtencionSrc(value)
  }
  const handleChangeExtencionDst = (e, { value }) => {
    // console.log(value)
    setFiltroExtencionDst(value)
  }

  const handleChangeDateOne = (e, { value }) => {
    console.log(value)
    setFiltroDateOne(value)
  }

  const handleChangeDateTwo = (e, { value }) => {
    console.log(value)
    setFiltroDateTwo(value)
  }

  // // Manejar el click del botón
  // const handleButtonClick = () => {
  //   console.log('Valor seleccionado:') // Imprime el valor seleccionado del Select
  // }

  return (
    <div>
      <h3>Filtro por Sucursal</h3>
      <div>
        <Select
          placeholder="Selecciona una sucursal"
          options={optionsSucursales}
          onChange={handleChangeSucursal}
        />
      </div>
      <h3>Filtro por respuesta</h3>
      <div>
        <Select
          placeholder="Selecciona un estatus de respuesta"
          options={optionsResponse}
          onChange={handleChangeResponse}
        />
      </div>

      <h3>Filtro por src extencion</h3>
      <div>
        <Select
          placeholder="Selecciona un estatus de respuesta"
          options={optionsExtencionSrc}
          onChange={handleChangeExtencionSrc}
        />
      </div>

      <h3>Filtro por dst extencion</h3>
      <div>
        <Select
          placeholder="Selecciona un estatus de respuesta"
          options={optionsExtencionDst}
          onChange={handleChangeExtencionDst}
        />
      </div>

      <h3>Filtro por fecha de inicio</h3>
      <div>
        <Select
          placeholder="Selecciona un estatus de respuesta"
          options={optionsDateOne}
          onChange={handleChangeDateOne}
        />
      </div>

      <h3>Filtro por fecha de final</h3>
      <div>
        <Select
          placeholder="Selecciona un estatus de respuesta"
          options={optionsDateTwo}
          onChange={handleChangeDateTwo}
        />
      </div>
      {/* <Button primary onClick={handleButtonClick}>
        Aplicar Filtros
      </Button> */}
    </div>
  )
}
