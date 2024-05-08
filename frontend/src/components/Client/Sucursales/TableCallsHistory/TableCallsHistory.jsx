import React, { useEffect } from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import { map } from 'lodash'
import './TableCallsHistory.scss'
import { CalendarRangeComponent } from '../../main'

export function TableCallsHistory(props) {
  const { calls, filtroSucursal, filtroResponse } = props

  filtroSucursal === '1'
    ? console.log('Guasave')
    : filtroSucursal === '2'
    ? console.log('Mochis')
    : filtroSucursal === '3'
    ? console.log('Culiacan')
    : null

  return (
    <>
      {/* <CalendarRangeComponent /> */}

      <Table className="table-calls-history-client">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>calldate</Table.HeaderCell>
            <Table.HeaderCell>duration</Table.HeaderCell>
            <Table.HeaderCell>disposition</Table.HeaderCell>
            <Table.HeaderCell>src</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {/* <Table.HeaderCell>Text</Table.HeaderCell>
          <Table.HeaderCell>T</Table.HeaderCell> */}

          {filtroResponse === null && filtroSucursal === null
            ? // Mostrar todos los datos
              calls.cdr_records.map((call, index) => (
                <Table.Row key={index}>
                  <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
                  <Table.HeaderCell>{call.duration}</Table.HeaderCell>
                  <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
                  <Table.HeaderCell>{call.src}</Table.HeaderCell>
                </Table.Row>
              ))
            : filtroResponse === null && filtroSucursal !== null
            ? // Mostrar solo los datos donde filtroSucursal sea igual al primer número de src
              calls.cdr_records
                .filter((call) => call.src.charAt(0) === filtroSucursal)
                .map((call, index) => (
                  <Table.Row key={index}>
                    <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
                    <Table.HeaderCell>{call.duration}</Table.HeaderCell>
                    <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
                    <Table.HeaderCell>{call.src}</Table.HeaderCell>
                  </Table.Row>
                ))
            : filtroResponse !== null && filtroSucursal === null
            ? // Mostrar solo los datos donde filtroResponse sea igual a call.disposition
              calls.cdr_records
                .filter((call) => call.disposition === filtroResponse)
                .map((call, index) => (
                  <Table.Row key={index}>
                    <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
                    <Table.HeaderCell>{call.duration}</Table.HeaderCell>
                    <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
                    <Table.HeaderCell>{call.src}</Table.HeaderCell>
                  </Table.Row>
                ))
            : // Mostrar solo los datos que coincidan con filtroResponse y filtroSucursal
              calls.cdr_records
                .filter(
                  (call) =>
                    call.disposition === filtroResponse &&
                    call.src.charAt(0) === filtroSucursal
                )
                .map((call, index) => (
                  <Table.Row key={index}>
                    <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
                    <Table.HeaderCell>{call.duration}</Table.HeaderCell>
                    <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
                    <Table.HeaderCell>{call.src}</Table.HeaderCell>
                  </Table.Row>
                ))}
          {map(calls.users, (call, index) => console.log(call.id))}
        </Table.Body>
      </Table>
    </>
  )
}
