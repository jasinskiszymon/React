import React, {FC, useState} from 'react'
import styled from 'styled-components';
import { TopBarinfo } from './Profilfiles/TopBarinfo';
import { ProfileInfo} from './Profilfiles/ProfileInfo';
import { Skill } from './Profilfiles/Skill';
import { Reviews} from './Profilfiles/Reviews'
import { Amont } from './Profilfiles/Amount';
import {PanelInfo} from './Profilfiles/PanelInfo';
export const ProfileWebsideWrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    width: 68%;
    margin-left: 2%;
    margin-top: 3%;
    padding-left: 5%;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
    font-size: 23px;
    .edit{
        width: 15px;
        height: 15px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;

export const ProfileWebside: FC = () =>{

    let [valueOfEdit, setEditValue] = useState(false);

    return(
        <ProfileWebsideWrapper>
            <TopBarinfo/>
            <ProfileInfo/>
            <Skill setEditValue={setEditValue}/>
             <PanelInfo isOpen={valueOfEdit}/> 
            <Reviews isOpen={valueOfEdit}/>
            <Amont isOpen={valueOfEdit}/> 
        </ProfileWebsideWrapper>
    );
};