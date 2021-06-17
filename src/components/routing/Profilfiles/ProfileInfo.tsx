import React, {FC, useState} from 'react'
import {Corespond} from './Corespond';
import { useSelector } from "react-redux";
import { IState } from "../../../reducers/index";
import {IUserReducers} from '../../../reducers/apiReducers';
import Pen from '../../../icon/pencil.png';
import styled from 'styled-components';
export const ProfileInfoWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
   
    padding-bottom: 20px;
    border-bottom: 1px solid lightgray;
    margin-bottom: 50px;
    font-size: 22px;
         
        ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        #profile{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 40px 0 100px;;
        img{
            width: 100px;
            height: 100px;
            border-radius: 50px;
            margin-bottom: 5px;
        }
        p{
            font-weight: bold;
            font-size: 20px;

            color: gray;
        }
    }
    
    #list{
        li:nth-child(1), li:nth-child(2){
            font-weight: 600;
        }
        li{
            margin-bottom: 5px;
        }
    }
    #input{
            height: 20px;
            margin-bottom: 5px; 
            border: 1px solid black;
            border-radius: 8px;
            padding-left: 5px;
            outline: none;
        }
        #connectinfo{
        width: 165px;
        position: absolute;
        top: 40px;
        right: 120px;
        text-align: center;
        #listconnect{
            li{
            margin-bottom: 5px;
            }
        }
        input{
           text-align: center;
           padding-left: 0;
        }
    }
    
`;
//Icon Import

export const ProfileInfo: FC = () => {

    const {usersList} = useSelector<IState, IUserReducers>((globalState) => ({
        ...globalState.users
    }));
    const {userPhoto} = useSelector<IState, IUserReducers> (globalState => ({
        ...globalState.users
       
    }));
    const url = userPhoto.slice(1).map(photo => photo.url);
    
    let [name, setName] = useState('Leanne Graham');
    let [company, setCompany] = useState('Romaguera-Crona');
    let [city, setCity] = useState('Rio');
    let [partner, setPartner] = useState('Partner');
      
    let [isEdit, showEdit] = useState(false);
 
    return(
        <ProfileInfoWrapper>
            <img className= 'edit' src = {Pen} 
                onClick={()=> 
            {showEdit(isEdit == false ? isEdit = true : isEdit = false)}}>
            </img>
            <div id = 'profile'>
                <img src={url[1]}/>
                <p>See profil</p>
            </div>
            <div>
                {isEdit == false? (
                    <ul id = 'list'>
                        <li>{name}</li>
                        <li>{company}</li>
                        <li>{city}</li>
                        <li>{partner}</li>
                    </ul>
                ):(
                    <ul>
                        <li><input type = 'text' value = {name} onChange={event => setName(event.target.value)}/></li>
                        <li><input type = 'text' value = {company} onChange={event => setCompany(event.target.value)}/></li>
                        <li><input type = 'text' value = {city} onChange={event => setCity(event.target.value)}/></li>
                        <li><input type = 'text' value = 'Partner' onChange={event => setPartner(event.target.value)}/></li>
                    </ul>
                )
                }
            </div>
            <div id = 'connectinfo'>
                {isEdit == false? (
                    <ul id = 'listconnect'>
                        <li>{usersList?.slice(0,1).map(user => user.email)}</li>
                        <li>+48 183324112</li>
                    </ul>
                ):(
                    <ul>
                         <li><input type = 'text' placeholder = ''></input></li> 
                        <li><input type = 'text' placeholder = 'U numer set here..'/></li>
                    </ul>
                )
                }
            </div>
        </ProfileInfoWrapper>
    )
}