import React, {FC} from 'react';
import styled from 'styled-components';

import {useSelector} from 'react-redux';
import {IState} from '../../reducers';
import {IUserReducers} from '../../reducers/apiReducers';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Wrapper = styled.div`
   // border: 1px solid red;
    width: 300px;
    height: 450px;
    margin: 30px;
    a, a:hover{
	color: black;
    text-decoration: none;
}
    #optioncategory{
        display: flex;
        font-size: 19px;
        margin-top: 10px;
        margin-left: 14px;
        align-items: center;
    } 
    #optioncategory p{
        padding-left: 10px;
        margin-top: 1px;

    }
`;
const AccountBox = styled.div `
    border: 1px solid #e6e3e3;
    height: 270px;
    display: flex;
    //align-items: center;
    justify-content: center;
    -webkit-box-shadow: 1px 17px 16px -16px rgba(0,0,0,0.07);
    -moz-box-shadow: 1px 17px 16px -16px rgba(0,0,0,0.07);
    box-shadow: 1px 17px 16px -16px rgba(0,0,0,0.07);
    border-radius: 10px;

    ul{
       // margin-left: 30px;
    }

    #face{
        width: 70px;
        border-radius: 100%;
        margin-top: 30px;
        //margin-left: 15px;
    }
    #nameaccount{
    font-size: 20px;    
    color: blue;
    //margin-top: 5px;
    }
    
    #logo{
        display: block;
        justify-content: center;
        text-align: center;

    }
    #nameaccount{
        display: block;
        justify-content: center;
        text-align: center;
    }
    #jobcategory{
        padding-top: 8px;
        display: block;
        justify-content: center;
        text-align: center;
    }
    #jobcategory p{
        font-size: 15px;
        color: gray;
        padding-top: 3px;
    }
    hr{
        border: 1px solid #e6e3e3;
        margin-top: 16px;
        margin-bottom: 10px;
        width: 290px;
    }
    #options{
        display: flex;
        align-items: center;
        margin-left: 10px;
        padding-top: 3px;
    }
    #options p{
        padding-left: 10px;
        font-size: 18px;
    }
    #add{
        border: 1px solid black;
        border-radius: 6px;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: 90px
    }

    #options2{
        margin-top: 20px;
        display: flex;
        align-items: center;
        margin-left: 10px;
    }
    #options2 p{
        padding-left: 12px;
        font-size: 18px;
    }
    #add2{
        border: 1px solid black;
        border-radius: 6px;
        padding-top: 6px;
        padding-bottom: 6px;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: 67px
    }
    
`;


export const LeftMenu: FC = () => {

    const {usersList} = useSelector<IState, IUserReducers> (globalState => ({
        ...globalState.users
    }));
    const {userPhoto} = useSelector<IState, IUserReducers> (globalState => ({
        ...globalState.users
       
    }));
    const url = userPhoto.slice(1).map(photo => photo.url);
    return(
        <Wrapper>
            <AccountBox>
            <Link to="/profil">
            <ul>
                <li id="logo">
                    <img src={url[1]} id="face" alt="face"/>
                 </li>
                 <li id="nameaccount">
                    <p id="name">
                    {usersList.slice(0,1).map(users => users.name)}
                    </p>
                 </li> 
                 <li id="jobcategory">
                    <p id="job">Job title: {usersList.slice(0,1).map(users => users.company.name)}</p>
                 </li>
                 <hr></hr>
                 <li id="options">
                    <img src="./icons/network.png" id="network" alt="network"/>
                    <p>Your network</p>
                    <img src="./icons/user-plus.png" id="add" alt="add"/>
                 </li>
                 <li id="options2">
                    <img src="./icons/publications.png" id="network" alt="publication"/>
                    <p>Your Publication</p>
                    <img src="./icons/plus.png" id="add2" alt="plus"/>
                 </li>
            </ul>
            </Link>
            </AccountBox>
            <ul>
                <li id="optioncategory">
                    <img src="./icons/publications2.png" id="network" alt="publication"/>
                    <Link to="/publications">
                    <p>Publications</p>
                    </Link>
                </li>
                <li id="optioncategory">
                    <img src="./icons/ecosystem.png" id="network" alt="eco"/>
                    <Link to="/ecosystem">
                    <p>Workspaces</p>
                    </Link>
                </li >
                <li id="optioncategory">
                    <img src="./icons/entities2.png" id="network" alt="etnities"/>
                    <Link to="/entities">
                    <p>Entities</p>
                    </Link>
                </li>
            </ul>
        </Wrapper>
    )
}