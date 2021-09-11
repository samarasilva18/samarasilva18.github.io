import './App.css';
import React from 'react';
import Header from '../Header/Header.jsx';
import Inicio from '../Inicio/Inicio.jsx';
import Mitologia from '../Mitologia/Mitologia.jsx';
import Monumentos from '../Monumentos/Monumentos.jsx';
import Realeza from '../Realeza/Realeza.jsx'
import Cadastro from '../Cadastro/Cadastro.jsx' 
import Arte from '../Arte/Arte.jsx';
import { Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <div>
    <div>
        <main>
        <Switch>
          <Route exact path ="/">
            <Header />
            <Inicio/>

          </Route>
          <Route exact path="/arte">
            <Header />
            <Arte/>

          </Route>
          <Route exact path="/mitologia">
            <Header />
            <Mitologia/>

          </Route>
          <Route exact path="/realeza">
            <Header />
            <Realeza/>

          </Route>
          <Route exact path="/monumentos">
            <Header />
            <Monumentos/>

          </Route>
          <Route exact path="/cadastro">

            <Cadastro/>

          </Route>
        
        </Switch>

        </main>
    </div>
  </div>
  );
}

export default App;
