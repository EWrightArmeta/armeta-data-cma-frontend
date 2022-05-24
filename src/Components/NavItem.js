import React from 'react';
import './NavItem.css';
import DownloadIcon from '@mui/icons-material/Download';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';
import ListIcon from '@mui/icons-material/List';
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useNavigate} from "react-router-dom";

function Icon(props){
    const iconStyle = {
        fontSize: 45,
        color: '#7D91AB',
        paddingTop: 27,
        paddingRight: 35,
        paddingLeft: 10
    }

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive()
    }


    if (props.name === "Source Setup"){
        return <DownloadIcon style={iconStyle}></DownloadIcon>
    }
    if (props.name === "Target Setup"){
        return <CloudUploadIcon style={iconStyle}></CloudUploadIcon>
    }
    if (props.name === "System Settings"){
        return <SettingsIcon style={iconStyle}></SettingsIcon>
    }
    if (props.name === "Table Options"){
        return <ListIcon style={iconStyle}></ListIcon>
    }
    if (props.name === "Migration Summary"){
        return <CheckIcon style={iconStyle}></CheckIcon>
    }
    if (props.name === "Object Select"){
        return <ChevronRightIcon style={iconStyle}></ChevronRightIcon>
    }
    return;
}

const AppTile = (props) => {
    let navigate = useNavigate();
    return (
        <div 
            class='navItem' 
            onClick= {() => {
                navigate(props.route);
            }}
        >
            <Icon class= 'navIcon' name={props.name}/>
            <p class='navText'>{props.name}</p>
        </div>
    );
};
export default AppTile;
