import {FC, useState} from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { Inside } from './Inside';

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
    button{
        background-color: white;
        border: 2px solid red;
        height: 10px;

        
    }
 `;





export const EmptyButton: FC = () => {
   
const [wrapperRef, dropdownOpen,toogleDropdown] = useDropdown();
    const menuHandler = () => {
        toogleDropdown();
    };



    return(
      
        <Wrapper>
       <div ref={wrapperRef}>
                    <button onClick={menuHandler}>
                        
                    </button>
                    {dropdownOpen && <Inside/>}
               </div>
               
         </Wrapper>   


    )
    };
  





