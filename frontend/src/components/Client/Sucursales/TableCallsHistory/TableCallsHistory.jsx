import React, { useState, useEffect } from "react";
import { Table, Button, Icon, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
import "./TableCallsHistory.scss";

export function TableCallsHistory(props) {
  const { calls } = props;
  const [itemsPerPage, setItemsPerPage] = useState(10); // Número de elementos para mostrar por página
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el rango de índices para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Obtener las llamadas para mostrar en la página actual
  const callsToShow = calls.slice(startIndex, endIndex);

  // Handler para cambiar la cantidad de elementos por página
  const handleItemsPerPageChange = (event, { value }) => {
    setItemsPerPage(value);
    setCurrentPage(1); // Reiniciar a la primera página cuando cambia la cantidad de elementos por página
  };

  // Opciones para la cantidad de elementos por página
  const options = [
    { key: 5, text: "5", value: 5 },
    { key: 10, text: "10", value: 10 },
    { key: 20, text: "20", value: 20 },
    { key: 50, text: "50", value: 50 },
    { key: 100, text: "100", value: 100 },
    { key: "all", text: "Todos", value: calls.length }, // Opción para mostrar todos los elementos
  ];

  return (
    <>
      <Table className="table-calls-history-client">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>calldate</Table.HeaderCell>
            <Table.HeaderCell>src</Table.HeaderCell>
            <Table.HeaderCell>dst</Table.HeaderCell>
            <Table.HeaderCell>duration</Table.HeaderCell>
            <Table.HeaderCell>disposition</Table.HeaderCell>
            <Table.HeaderCell>ciudad</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {callsToShow.map((call, index) => (
            <Table.Row key={index}>
              <Table.HeaderCell>{call.calldate}</Table.HeaderCell>
              <Table.HeaderCell>{call.src}</Table.HeaderCell>
              <Table.HeaderCell>{call.dst}</Table.HeaderCell>
              <Table.HeaderCell>{call.duration}</Table.HeaderCell>
              <Table.HeaderCell>{call.disposition}</Table.HeaderCell>
              <Table.HeaderCell>{call.ciudad}</Table.HeaderCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* Información de paginación */}
      <div className="pagination-info">
        <span>
          Mostrando {startIndex + 1} -{" "}
          {endIndex > calls.length ? calls.length : endIndex} de{" "}
          {calls.length} elementos
        </span>
        <Dropdown 
          inline
          options={options}
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          size="large"
        />
      </div>
      {/* Controles de paginación */}
      <Button
        icon
        labelPosition="left"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icon name="left chevron" />
        Página Anterior
      </Button>
      <Button
        icon
        labelPosition="right"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={endIndex >= calls.length}
      >
        Siguiente Página
        <Icon name="right chevron" />
      </Button>
    </>
  );
}
``
