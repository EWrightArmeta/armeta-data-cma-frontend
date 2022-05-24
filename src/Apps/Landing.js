//Landing page, contains the tiles of the 3 applications

import './Landing.css';
import AppTile from '../Components/AppTile.js';
import ArmetaLogo from '../Graphics/Armeta_White.png';
import {React} from 'react';

const Landing = () => {
    return (
        <>
        <div class='landingHeader'>
            Cloud Migration Accelerator
        </div>
        <div class='landingMain'>
            <div class='container'>
                    <AppTile  
                        name= "Migration"
                        route= "/SourceSetup"
                    >
                    </AppTile>
                    <AppTile  
                        name= "Validation" 
                        route= "/Validation"
                    >
                            
                    </AppTile>
                    <AppTile  
                        name= "Health" 
                        route= "/Health"
                        >
                    </AppTile>
            </div>
            <img class='armetalogo' src={ArmetaLogo} alt="ArmetaLogo"/>
        </div>
        </>
    );
};
export default Landing;