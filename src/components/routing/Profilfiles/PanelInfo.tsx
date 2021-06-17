import React, {FC, useState} from 'react'
import {Corespond} from './Corespond';
import {useSelector} from 'react-redux';
import {IState} from '../../../reducers';
import {IUserReducers} from '../../../reducers/apiReducers';
import styled from 'styled-components';
import FileIcon from '../../../icon/bell.png';
const PanelInfoWrapper = styled.div`
    width: 90%;
    margin-left: 15px;
    padding-bottom: 20px;
   
    h1{
        color: green;
        font-weight: bold;
        font-size: 23px;
        margin-bottom: 20px;
        margin-top: 50px;
    }
    h2{
        font-size: 20px;
        margin: 5px 0;
    }
    p{
        margin-top: 10px;
        margin-bottom: 15px;
        font-size: 18px;
        
    }
    input{
        height: 25px;
        display: inline-block;
        margin-bottom: 7px;
        outline: none;
        border: 1px solid gray;
        border-radius: 8px;
        padding: 5px;
    }
    .terms-input{
        width: 280px;
        margin-bottom: 12px;
    }
    .loaded-file{
        display: flex;
        align-items: center;
        width: 45%;
        height: 35px;
        margin: 0 0 25px;
        padding: 5px;
        border: none;
        border-radius: 5px;
        outline: none;
        background-color: yellow;
        img{
            width: 15px;
            height: 15px;
            margin: 0 10px 0 5px;
        }
    }
    input::file-selector-button{
        margin: 2px 5px;
    }
    .services-input{
        width: 276px;
    }
    .correspondent{
        width: 80%;
        height: 30px;
        margin: 10px 0;
        background-color: gray;
    }
`;
interface ValueEdit{
    isOpen: boolean;
}
export const PanelInfo: FC<ValueEdit> = (props) => {

    const {usersPost} = useSelector<IState, IUserReducers> (globalState => ({
        ...globalState.users
      }));
    let [hourly, setHourly] = useState('610€/hour (Negociated)')
    let [terms, setTerms] = useState('Monthly 10k€ retainer - see with Jeanny Smith')
    let [file, setFile] = useState('No file loaded!')
    let [services, setServices] = useState('Corporate M&A and international asquisitions')
    return(
        <PanelInfoWrapper>
           <h1>Panel Information</h1>
           <h2>Hourly fee</h2>
           {props.isOpen === false? <p>{hourly}</p> : <input type='text' placeholder={hourly} onChange={(e)=>setHourly(e.target.value)}/>}
           <h2>Terms &amp; conditions</h2>
           {props.isOpen === false? <p>{terms}</p> : <input className='terms-input' type='text' placeholder={terms} onChange={(e)=>setTerms(e.target.value)}/>}
           {props.isOpen === false? <p className = 'loaded-file' ><img src = {FileIcon} alt='IconFile'/>{file}</p> : <input className = 'loaded-file' type='file' onChange={(e)=>setFile(e.target.value)}/>}
           <h2>Services &amp; projects</h2>
           {props.isOpen === false? <p>{services}</p> : <input className = 'services-input' type='text' placeholder={services} onChange={(e)=>setServices(e.target.value)}/>}
           <h2>International correspondents</h2>
        </PanelInfoWrapper>
    )
}
