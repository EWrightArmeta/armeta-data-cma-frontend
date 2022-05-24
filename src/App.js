import logo from './logo.svg';
import './App.css';
import Landing from './Apps/Landing.js';
import Health from './Apps/Health.js';
import Validation from './Apps/Validation.js';

import SourceSetup from './Pages/Migration/SourceSetup.js';
import OracleSource from './Pages/Migration/Source/OracleSource.js';
import SQLSource from './Pages/Migration/Source/SQLSource.js';
import SynapseSource from './Pages/Migration/Source/SynapseSource.js';
import WarehouseSource from './Pages/Migration/Source/WarehouseSource.js';

import TargetSetup from './Pages/Migration/TargetSetup.js';
import SnowflakeTarget from './Pages/Migration/Target/SnowflakeTarget.js';
import SynapseTarget from './Pages/Migration/Target/SynapseTarget.js';

import SystemSettings from './Pages/Migration/SystemSettings.js';
import TableOptions from './Pages/Migration/TableOptions.js';
import MigrationSummary from './Pages/Migration/MigrationSummary.js';
import ObjectSelect from './Pages/Migration/ObjectSelect.js';
import background from "./Graphics/CMABackground.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
      <div class='App' style={{ backgroundImage: `url(${background})` }}>
        <BrowserRouter>
          <Routes>
            <Route path="/"                 element={<Landing />} />
            <Route path="/Validation"       element={<Validation />} />
            <Route path="/Health"           element={<Health />} />

            <Route path="/SourceSetup"      element={<SourceSetup />} />
            <Route path="/OracleSource"     element={<OracleSource />} />
            <Route path="/SQLSource"        element={<SQLSource />} />
            <Route path="/SynapseSource"    element={<SynapseSource />} />
            <Route path="/WarehouseSource"  element={<WarehouseSource />} />

            <Route path="/TargetSetup"      element={<TargetSetup />} />
            <Route path="/SnowflakeTarget"  element={<SnowflakeTarget />} />
            <Route path="/SynapseTarget"  element={<SynapseTarget />} />

            <Route path="/SystemSettings"   element={<SystemSettings />} />
            <Route path="/TableOptions"     element={<TableOptions />} />
            <Route path="/MigrationSummary" element={<MigrationSummary />} />
            <Route path="/ObjectSelect"     element={<ObjectSelect />} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}


export default App;
