import React, { useEffect } from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import { map } from 'lodash'
import './TableCallsHistory.scss'

export function TableCallsHistory(props) {
  const { calls } = props

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
        {map(calls.users, (call, index) => (
          <Table.Row key={index}>
            <Table.Cell>{call.id}</Table.Cell>
            <Table.Cell>{call.name}</Table.Cell>
          </Table.Row>
        ))}
        {map(calls.users, (call, index) => console.log(call.id))}
      </Table.Body>
    </Table>
  )
}
