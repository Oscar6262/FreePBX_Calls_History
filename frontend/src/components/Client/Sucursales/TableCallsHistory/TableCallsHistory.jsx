import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import { map } from 'lodash'
import './TableCallsHistory.scss'

export function TableCallsHistory(props) {
  const { id } = props

  return (
    <Table className="table-calls-history-client">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Ext. Llama</Table.HeaderCell>
          <Table.HeaderCell>Ext. Recibe</Table.HeaderCell>
          <Table.HeaderCell>Inicio</Table.HeaderCell>
          <Table.HeaderCell>Terminacion</Table.HeaderCell>
          <Table.HeaderCell>Duracion</Table.HeaderCell>
          <Table.HeaderCell>Fecha</Table.HeaderCell>
          <Table.HeaderCell>Llamada Atendida</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>101</Table.Cell>
          <Table.Cell>202</Table.Cell>
          <Table.Cell>22:01:00</Table.Cell>
          <Table.Cell>22:20:00</Table.Cell>
          <Table.Cell>19:00</Table.Cell>
          <Table.Cell>01-06-2024</Table.Cell>
          <Table.Cell className="status">
            Atendida
            <Icon name="check" />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
