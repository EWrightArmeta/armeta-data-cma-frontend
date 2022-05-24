//Migration App Under Development

import './Migration.css';
import NavItem from './NavItem.js';
import AppTile from './AppTile.js';
import CMALogo from '../Graphics/CMA_White.png';
import {React} from 'react';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import {useNavigate} from "react-router-dom";


const MigrationStep = () => {
    let navigate = useNavigate();
    return (
        <>
        <div class='navBar'>
            <div class = 'homeIcon'>
                <CloudDoneIcon 
                    style={{ fontSize: 125, color: '#FFFFFF' }}
                    onClick={() => {
                        navigate("/");
                    }}
                ></CloudDoneIcon>
            </div>
            
            <div class='navItems'>
                    <NavItem  class = 'navItem' name="Source Setup"      route="/SourceSetup"></NavItem>
                    <NavItem  class = 'navItem' name="Target Setup"      route="/TargetSetup"></NavItem>
                    <NavItem  class = 'navItem' name="System Settings"   route="/SystemSettings"></NavItem>
                    <NavItem  class = 'navItem' name="Table Options"     route="/TableOptions"></NavItem>
                    <NavItem  class = 'navItem' name="Migration Summary" route="/MigrationSummary"></NavItem>
                    <NavItem  class = 'navItem' name="Object Select"     route="/ObjectSelect"></NavItem>
            </div>
            <img class='logo' src={CMALogo} alt="CMALogo"/>
        </div>
        </>
    );
};
export default MigrationStep;