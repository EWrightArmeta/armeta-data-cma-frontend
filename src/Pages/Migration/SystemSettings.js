//System Settings NavBar Step

import '../../Components/Migration.css';
import AppTile from '../../Components/AppTile.js';
import MigrationStep from '../../Components/MigrationStep.js';
import {React} from 'react';


const SystemSettings = () => {
    return (
        <>
        <MigrationStep></MigrationStep>
        <div class = 'rightSide'>
            <div class='header'></div>
            <div class='migrationBody'>
                <div class='mTileChoices'>
                <div class = 'selectTitle'>This is a placeholder for future System Settings development...</div>
                </div>
            </div>
        </div>
        </>
    );
};
export default SystemSettings;