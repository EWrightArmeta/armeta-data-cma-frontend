//Source Setup NavBar Step

import '../../../Components/Migration.css';
import './OracleSource.css';
import AppTile from '../../../Components/AppTile.js';
import Input from '../../../Components/Input.js';
import MigrationStep from '../../../Components/MigrationStep.js';
import {React} from 'react';
import styled, { createGlobalStyle, css} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #f05053, #e1eec3);
    height: 100%;
    margin: 0;
    color: #ffffff;
  }
`;

const sharedStyles = css`
  background-color: #ffffff;
  height: 12%;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 30%;
  padding: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  ${sharedStyles}
`;

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
    font-size: 3vmin;
    color: white;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const StyledLabel = styled.label`
    height: 50%;
    text-align: left;
    font-size: 3vmin;
    color: white;
`;

const initalState = {
  name: '',
  email: '',
  message: '',
  gender: ''
};

const OracleSource = () => {
    return (
        <>
        <MigrationStep></MigrationStep>
        <div class = 'rightSide'>
            <div class='header'></div>
                <GlobalStyle/>
                <StyledFormWrapper>
                    <StyledForm>
                        <StyledFieldSet>
                            <StyledLabel>
                                <input type="radio" value="DNS" name="select"/>
                            </StyledLabel>
                            <StyledLabel htmlFor="DSN">DSN</StyledLabel>
                            <StyledSelect type="text" name="DSN"/>
                        </StyledFieldSet>
                        <StyledFieldSet>
                            <StyledLabel>
                                <input type="radio" value="Driver" name="select"/>
                            </StyledLabel>
                            <StyledLabel htmlFor="driver">Driver</StyledLabel>
                            <StyledSelect type="text" name="driver"/>
                        </StyledFieldSet>
                        
                        
                        <StyledFieldSet>
                            <legend>Login</legend>
                            <StyledLabel htmlFor="username">Username</StyledLabel>
                            <StyledInput type="text" name="username"/>
                            <StyledLabel htmlFor="password">Password</StyledLabel>
                            <StyledInput type="text" name="password"/>
                            <StyledLabel htmlFor="tns">TNS/DBQ</StyledLabel>
                            <StyledInput type="text" name="tns"/>
                        </StyledFieldSet>
                    </StyledForm>
                </StyledFormWrapper>
            </div>
        </>
    );
};
export default OracleSource;