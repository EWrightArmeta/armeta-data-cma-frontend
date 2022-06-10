//System Settings NavBar Step

import '../../Components/Migration.css';
import AppTile from '../../Components/AppTile.js';
import MigrationStep from '../../Components/MigrationStep.js';
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
  background-color: #ffffff;
  color: #0C3260;
  font-size: 2vmin;
  border: 0;
  border-radius: 5px;
  height: 30px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
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


const SystemSettings = () => {
    return (
        <>
        <MigrationStep></MigrationStep>
        <div class = 'rightSide'>
            <div class='header'></div>
            <GlobalStyle/>
                <StyledFormWrapper>
                    <StyledForm>
                        <StyledLabel htmlFor="diskSpace">Disk Space (MB)</StyledLabel>
                        <StyledInput type="text" name="diskSpace"/>

                        <StyledLabel htmlFor="fileRentention">File Rentention</StyledLabel>
                        <StyledSelect type="text" name="fileRentention"/>

                        <StyledLabel htmlFor="filePath">
                            File Path
                            <StyledButton onClick={() => alert("Hello")}>Browse</StyledButton>
                        </StyledLabel>
                        <StyledInput type="text" name="filePath"/>
                    </StyledForm>
                    <StyledForm>
                        <StyledLabel htmlFor="fileSize">File Size (MB)</StyledLabel>
                        <StyledInput type="text" name="fileSize"/>

                        <StyledLabel htmlFor="threads">Threads</StyledLabel>
                        <StyledSelect type="text" name="filthreadseRentention"/>

                        <StyledLabel htmlFor="logFolder">
                            Log Folder
                            <StyledButton onClick={() => alert("Hello")}>Browse</StyledButton>
                        </StyledLabel>
                        <StyledInput type="text" name="logFolder"/>
                    </StyledForm>
                </StyledFormWrapper>
        </div>
        </>
    );
};
export default SystemSettings;