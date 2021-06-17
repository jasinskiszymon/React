import React, {FC} from 'react'
import styled from 'styled-components';
//Styled Import
const CorrespondantProfileWrapper = styled.div`
    width: 80%;
    height: 30px;
    display: flex;
    align-items: center;
    margin: 5px 0;
    border-radius: 5px;
    background-color: Gray;
    position: relative;
    p{
        font-size: 13px;
        margin: 5px 0;
        color: gray;
    }
    img{
        width: 20px;
        height: 20px;
        margin: 0 10px;
        border-radius: 50px;
    }
    .option-of-correspondents{
        height: 30px;
        display: flex;
        align-items: center;
        position: absolute;
        right: 70px;
        img{
            width: 15px;
            height: 15px;
            margin-left: 40px;
            margin-right: 5px;
            border-radius: 0;
        }
    }
`;

//Icon Import 
import Message from '../../../../../../icons/message.png';
import Person from '../../../../../../icons/user-profil-info.png';

interface UserData{
    userName: string;
    userPhoto: string;
}

export const Corespond: FC<UserData> = (props) => {
    return(
        <CorrespondantProfileWrapper>
                <img src={props.userPhoto} alt='UserPhoto'/>
                <p>{props.userName}</p>
                <div className = 'option-of-correspondents'>
                    <img src={Message} alt='IconMessage'/>
                    <p>Message</p>
                    <img src={Person} alt='IconPerson'/>
                    <p>Profile</p>
                </div>
        </CorrespondantProfileWrapper>
    )
}