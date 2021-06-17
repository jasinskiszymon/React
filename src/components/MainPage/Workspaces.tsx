import React, {FC,} from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import {Slide} from './slider'

const Wrapper = styled.div`

  width: 90%;
  height: 300px;
  //position: relative;
  font-weight: bold;
  color: gray;
  margin-left: 8%;
  margin-top: 3%;
  border-radius: 10px;
#title{
  font-size: 25px;
  margin-bottom: 40px;
  padding-top: 10px;
  padding-left: 10px;


}
`;



export const Workspaces: FC = () => {
  return(
    
       <Wrapper>
        <p id="title">Workspaces</p>
         <Slide/>
         </Wrapper>
  )}