//Source Setup NavBar Step

import '../../../Components/Migration.css';
import AppTile from '../../../Components/AppTile.js';
import MigrationStep from '../../../Components/MigrationStep.js';
import {React} from 'react';


const SynapseTarget = () => {
    return (
        <>
        <MigrationStep></MigrationStep>
        <div class = 'rightSide'>
            <div class='header'></div>
            <div class='migrationBody'>
                <div class = 'selectTitle'>This is a placeholder for future Synapse target development...</div>
            </div>
        </div>
        </>
    );
};
export default SynapseTarget;