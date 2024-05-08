import React from 'react'
import { Button, Select } from 'semantic-ui-react'

export function Filtros(props) {
  const { setFiltroSucursal, setFiltroResponse } = props

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

  // Manejar el cambio de valor del Select
  const handleChangeSucursal = (e, { value }) => {
    // console.log(value + 'AAAA')
    setFiltroSucursal(value)
  }

  const handleChangeResponse = (e, { value }) => {
    console.log(value)
    setFiltroResponse(value)
  }

  // Manejar el click del botón
  const handleButtonClick = () => {
    console.log('Valor seleccionado:') // Imprime el valor seleccionado del Select
  }

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
      {/* <Button primary onClick={handleButtonClick}>
        Aplicar Filtros
      </Button> */}
    </div>
  )
}
