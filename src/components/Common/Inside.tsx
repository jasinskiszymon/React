import {FC, useState} from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
//import icon 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { isPropertySignature } from 'typescript';
import { useScrollTrigger } from '@material-ui/core';

const Wrapper = styled.div`
     margin-top: 30px;
     position: absolute;
    width: 120px;
    z-index: 1;
    height: 80px;
    box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
    background-color: #e5e8f1;
    border-radius: 5px;
    p{
        text-align: center;
        margin-left: 12px;
        font-size: 15px;
        
    }
 `;





export const Inside: FC = () => {
   

    return(
      
        <Wrapper>
            
        <p>Nothing to see..</p>
        
    
        
               
         </Wrapper>   


    )
    };
  





