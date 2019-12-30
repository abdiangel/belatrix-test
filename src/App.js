import React, { useState } from "react";

import Layout from "./components/Layout";
import Card from "./components/Card";
import List from "./components/List";
import ListItem from "./components/ListItem";

import data from "./utils/data";

import "./App.css";

const App = () => {
  const [testData, setData] = useState(data);
  console.log(testData);

  return (
    <div className="App">
      <header className="App__header">
        <h1>Belatrix Test by Abdiangel Urdaneta</h1>
      </header>
      <Layout>
        <Card heading="Departamentos">
          {testData.data.map((dpto, i) => (
            <List key={i}>
              <ListItem name="Codigo:" info={dpto.departamento.codigo} />
              <ListItem name="Nombre:" info={dpto.departamento.nombre} />
              <ListItem name="Codigo Padre:" info="" />
              <ListItem name="Descripción Padre:" info="" />
            </List>
          ))}
        </Card>
        <Card heading="Provincias">
          {testData.data.map((dpto, i) => {
            const dptoCode = dpto.departamento.codigo;
            const dptoNombre = dpto.departamento.nombre;

            return dpto.departamento.provincias.provincias.map(
              (provincia, i) => (
                <List key={i}>
                  <ListItem name="Codigo:" info={provincia.codigo} />
                  <ListItem name="Nombre:" info={provincia.nombre} />
                  <ListItem name="Codigo Padre:" info={dptoCode} />
                  <ListItem name="Descripción Padre:" info={dptoNombre} />
                </List>
              )
            );
          })}
        </Card>
        <Card heading="Distrito">
          {testData.data.map(dpto => {
            return dpto.departamento.provincias.provincias.map(provincia => {
              const provCode = provincia.codigo;
              const provName = provincia.nombre;

              return provincia.distritos.length > 0
                ? provincia.distritos.map((distrito, i) => (
                    <List key={i}>
                      <ListItem name="Codigo:" info={distrito.codigo} />
                      <ListItem name="Nombre:" info={distrito.nombre} />
                      <ListItem name="Codigo Padre:" info={provCode} />
                      <ListItem name="Descripción Padre:" info={provName} />
                    </List>
                  ))
                : null;
            });
          })}
        </Card>
      </Layout>
    </div>
  );
};

export default App;
