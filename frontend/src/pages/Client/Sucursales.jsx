import React, { useState, useEffect } from "react";
import {
  BasicModal,
  TableCallsHistory,
  HeaderPage,
  TestComponent,
} from "../../components/main";
import { Loader } from "semantic-ui-react";
import { Input, Button, Select } from "semantic-ui-react";

import { useCall } from "../../hooks/main";

export function Sucursales() {
  // Opciones para el Select
  const optionsSucursales = [
    { key: "Default", value: null, text: "Default" },
    { key: "Guasave", value: "Guasave", text: "Guasave" },
    { key: "Mochis", value: "Los Mochis", text: "Mochis" },
    { key: "Culiacan", value: "Culiacan", text: "Culiacan" },
  ];
  const optionsResponse = [
    { key: "default", value: null, text: "Default" },
    { key: "NO ANSWERED", value: "NO ANSWERED", text: "NO ANSWERED" },
    { key: "ANSWERED", value: "ANSWERED", text: "ANSWERED" },
    { key: "BUSY", value: "BUSY", text: "BUSY" },
  ];

  const handleFechaInicioChange = (e) => {
    setFechaInicioValue(e.target.value);
  };

  const handleFechaFinalChange = (e) => {
    setFechaFinalValue(e.target.value);
  };
  const handleOrigenChange = (e) => {
    setOrigenValue(e.target.value);
  };

  const handleDestinoChange = (e) => {
    setDestinoValue(e.target.value);
  };
  // Manejar el cambio de valor del Select
  const handleChangeSucursal = (e, { value }) => {
    setFiltroSucursal(value);
  };

  const handleChangeResponse = (e, { value }) => {
    setFiltroResponse(value);
  };

  // Manejar el click del botón
  const handleButtonClick = () => {
    getCalls({
      src: isNull(origenValue),
      dst: isNull(destinoValue),
      d1: isNull(FechaInicioValue),
      d2: isNull(FechaFinalValue),
      city: isNull(filtroSucursal),
      status: isNull(filtroResponse),
    });
  };
  const { loading, calls, error, getCalls } = useCall();

  const [refetch, setRefetch] = useState(false);
  const [filtroSucursal, setFiltroSucursal] = useState(null);
  const [filtroResponse, setFiltroResponse] = useState(null);

  const [origenValue, setOrigenValue] = useState("");
  const [destinoValue, setDestinoValue] = useState("");

  const [FechaInicioValue, setFechaInicioValue] = useState("");
  const [FechaFinalValue, setFechaFinalValue] = useState("");
  useEffect(() => {
    getCalls({
      src: isNull(origenValue),
      dst: isNull(destinoValue),
      d1: isNull(FechaInicioValue),
      d2: isNull(FechaFinalValue),
      city: isNull(filtroSucursal),
      status: isNull(filtroResponse),
    });
  }, [refetch]);

  const onRefetch = () => setRefetch((prev) => !prev);
  function isNull(value) {
    return value == "" ? null : value;
  }

  return (
    <>
      <div>
        <div>
          <h3>Extensiones</h3>

          <Input
            type="number"
            value={origenValue}
            onChange={handleOrigenChange}
            placeholder="Ingrese la extension de origen"
          ></Input>
          <Input
            type="number"
            value={destinoValue}
            onChange={handleDestinoChange}
            placeholder="Ingrese la extension destino"
          ></Input>

          <h3>Por Fecha</h3>
          <Input
            type="date"
            value={FechaInicioValue}
            onChange={handleFechaInicioChange}
            placeholder="Ingrese fecha de Inicio"
          ></Input>

          <Input
            type="date"
            value={FechaFinalValue}
            onChange={handleFechaFinalChange}
            placeholder="Ingrese fecha De Fin"
          ></Input>
        </div>
        <h3>Filtro por Sucursal</h3>
        <div>
          <Select
            placeholder="Selecciona una sucursal"
            value={filtroSucursal}
            options={optionsSucursales}
            onChange={handleChangeSucursal}
          />
        </div>
        <h3>Filtro por respuesta</h3>
        <div>
          <Select
            placeholder="Selecciona un estatus de respuesta"
            value={filtroResponse}
            options={optionsResponse}
            onChange={handleChangeResponse}
          />
        </div>
        <Button primary onClick={handleButtonClick}>
          Aplicar Filtros
        </Button>
      </div>

      {loading ? (
        <Loader active inline="centered">
          Loading ...
        </Loader>
      ) : (
        <TableCallsHistory
          calls={calls}
          sucursal={"Mochis"}
          filtroSucursal={filtroSucursal}
          filtroResponse={filtroResponse}
        />
      )}
    </>
  );}
  