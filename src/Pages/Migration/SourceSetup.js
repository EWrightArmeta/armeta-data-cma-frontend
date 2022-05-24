//Source Setup NavBar Step

import '../../Components/Migration.css';
import AppTile from '../../Components/AppTile.js';
import MigrationStep from '../../Components/MigrationStep.js';
import {React} from 'react';


const SourceSetup = () => {
    return (
        <>
        <MigrationStep></MigrationStep>
        <div class = 'rightSide'>
            <div class='header'></div>
            <div class='migrationBody'>
                <div class = 'selectTitle'>Select a data source...</div>
                <div class='mTileChoices'>
                    <AppTile name = 'Oracle'     route = "/OracleSource"></AppTile>
                    <AppTile name = 'SQL Server' route = "/SQLSource"></AppTile>
                    <AppTile name = 'Synapse'    route = "/SynapseSource"></AppTile>
                    <AppTile name = 'Warehouse'  route = "/WarehouseSource"></AppTile>
                </div>
            </div>
        </div>
        </>
    );
};
export default SourceSetup;