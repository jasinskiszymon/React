import React, {FC} from 'react'
import styled from 'styled-components';
import icon from '../../../icon/house2.png';


const TopBar = styled.div`
    margin-top: 30px !important;
    margin-bottom: 30px;
    margin-right: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li{
        display: flex;
        float: left;
        margin: 0 20px;
        align-items: center;
    }
    img{
        width: 15px;
        height: 15px;
    }
    p{
        font-size: 22px;
        padding-left: 7px;
        
    }
`;


export const TopBarinfo: FC = () => {
    const InfoArray = [
        {Icon: icon, Name: 'Message'},
        {Icon: icon, Name: 'Create a request'},
        {Icon: icon, Name: 'Add a cluster'}
    ];
    return(
        <TopBar>
            <ul>{InfoArray.map(InfoArray =><li><img src={InfoArray.Icon}/> <p>{InfoArray.Name}</p></li>)}</ul>
        </TopBar>
    )
}