import React from 'react';
import './AppTile.css';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MailIcon from "@material-ui/icons/Mail";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import JoinLeftIcon from '@mui/icons-material/JoinLeft';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import {useNavigate} from "react-router-dom";

function Icon(props){
    if (props.name === "Migration"){
        return <CloudDoneIcon style={{ fontSize: 100, color: '#0C3260' }}></CloudDoneIcon>
    }
    if (props.name === "Validation"){
        return <CheckCircleOutlineIcon style={{ fontSize: 100, color: '#0C3260' }}></CheckCircleOutlineIcon>
    }
    if (props.name === "Health"){
        return <HealthAndSafetyIcon style={{ fontSize: 100, color: '#0C3260' }}></HealthAndSafetyIcon>
    }
    if (props.name === "Oracle"){
        return <AnalyticsIcon style={{ fontSize: 100, color: '#0C3260' }}></AnalyticsIcon>
    }
    if (props.name === "SQL Server"){
        return <JoinLeftIcon style={{ fontSize: 100, color: '#0C3260' }}></JoinLeftIcon>
    }
    if (props.name === "Synapse"){
        return <MicrowaveIcon style={{ fontSize: 100, color: '#0C3260' }}></MicrowaveIcon>
    }
    if (props.name === "Warehouse"){
        return <ShoppingCartIcon style={{ fontSize: 100, color: '#0C3260' }}></ShoppingCartIcon>
    }
    if (props.name === "Snowflake"){
        return <AcUnitIcon style={{ fontSize: 100, color: '#0C3260' }}></AcUnitIcon>
    }
    return;
}

const AppTile = (props) => {
    let navigate = useNavigate();
    return (
        <div 
            class='tile' 
            onClick= {() => {
                navigate(props.route);
            }}
        >
            <Icon class= 'icon' name={props.name}/>
            <p class='text'>{props.name}</p>
        </div>
    );
};
export default AppTile;