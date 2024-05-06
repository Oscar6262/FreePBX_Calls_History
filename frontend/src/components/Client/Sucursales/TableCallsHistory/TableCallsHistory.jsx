import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import { map } from 'lodash'
import './TableCallsHistory.scss'

export function TableCallsHistory(props) {
  const { id } = props
  return (
    <Table className="table-calls-history-client">
      <Table.Row>
        <Table.HeaderCell>Sucursal</Table.HeaderCell>
        <Table.HeaderCell>Sucursal</Table.HeaderCell>
      </Table.Row>
    </Table>
  )
}
