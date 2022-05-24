//Target Setup NavBar Step

import '../../Components/Migration.css';
import AppTile from '../../Components/AppTile.js';
import MigrationStep from '../../Components/MigrationStep.js';
import {React} from 'react';


const TargetSetup = () => {
    return (
        <>
        <MigrationStep></MigrationStep>
        <div class = 'rightSide'>
            <div class='header'></div>
            <div class='migrationBody'>
                <div class = 'selectTitle'>Select a data target...</div>
                <div class='mTileChoices'>
                    <AppTile name = 'Snowflake' route = '/SnowflakeTarget'></AppTile>
                    <AppTile name = 'Synapse'   route = '/SynapseTarget'></AppTile>
                </div>
            </div>
        </div>
        </>
    );
};
export default TargetSetup;