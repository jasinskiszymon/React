import {FC, useState} from 'react';
import styled from 'styled-components';

//import icon 
import home from '../../icon/house2.png';
import entities from '../../icon/entities.png';
import eco from '../../icon/ecosystem.png';
import people from '../../icon/people.png';
import entities2 from '../../icon/entities2.png';
import administration from '../../icon/administration.png';
import write from '../../icon/write.png';
import group from '../../icon/group.png';
import face from '../../icon/face2.png';
import setting from '../../icon/settings.png';
import privacy from '../../icon/privacy.png'
import logout from '../../icon/logout.png';

import {useSelector} from 'react-redux';
import {IState} from '../../reducers';
import {IUserReducers} from '../../reducers/apiReducers';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { settings } from 'node:cluster';
const ExpantedWrapper = styled.div`
  
  margin-top: 30px;
  margin-left: 20px;
  width: 300px;
  font-size: 20px;
  border: 1px solid black;
  position: absolute;
  z-index: 1;
  background-color: white;
  a, a:hover{
	color: black;
    text-decoration: none;
}
  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    
  }
  input{
    height: 30px;
    border-radius: 3px;
    border: 1px solid #e6e3e3;
    width: 290px;
    padding-left: 6px;
  }
  
  #corpo{
   display: flex;
   align-items: center;
   padding-left: 6px;
   padding-top: 6px;
   

}
  #title {
   padding-left: 10px;
   font-size: 20px;

}
#category{
   color:grey;
   font-size: 20px;
   padding-left: 6px;
   padding-top: 5px;
}
hr{
   border: 1px solid #e6e3e3;
}
#platform2{
   display: flex;
   align-items: center;
   padding-left: 6px;
   padding-top: 6px;
}
#platform2 p{
   padding-left: 14px;
}
#face{
    border-radius: 100%;
}

#platform-special-face{
   display: flex;
   align-items: center;
   padding-left: 6px;
   padding-top: 6px;
}
#platform-special-face p{
   padding-left: 10px;
   text-align: center;
}
#logout{
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 18px;
   height: 30px;
   color:#8f8f8f;
   padding-bottom: 8px;
}
#logout p {
   padding-left: 10px;
}
#cat{
  color:grey;
   font-size: 20px;
   padding-left: 3px;
   padding-top: 5px;
   padding-bottom: 5px;
}
`;






export const ExpantedMenu: FC = () => {
   const {usersList} = useSelector<IState, IUserReducers> (globalState => ({
      ...globalState.users
  }));
   let a = [
    
      {Icon: <p id="cat">Platforms</p>, Name: '' },
      {Icon: <img src={home}/>, Name: 'Home', Link: '"/Workspaces"'},
      {Icon: <img src={eco}/>, Name: 'Publications' ,Link: '"/Workspaces"'},
      {Icon: <img src={people}/>, Name: 'People', Link: '"/Workspaces"'},
      {Icon: <img src={entities2}/>, Name: 'Entities', Link: '"/Workspaces"'},
      {Icon: <img src={administration}/>, Name: 'Administration', Link: '"/Workspaces"'},
      {Icon: <p id="cat">Workspaces</p>, Name: '', Link: '"/Workspaces"'},
      {Icon: <img src={write}/>, Name: 'Client contract', Link: '"/Workspaces"'},
      {Icon: <img src={write}/>, Name: 'Supplier contract',Link: '"/Workspaces"'},
      {Icon: <img src={entities2}/>, Name: 'Corporate',Link: '"/Workspaces"'},
      {Icon: <img src={group}/>, Name: 'Group Norms',Link: '"/Workspaces"'},
      {Icon: <img src={write}/>, Name: 'Real estate contracts',Link: '"/Workspaces"'},
    ];
    
    let [t, getTekst] = useState('')
    console.log(t);
     return(

        <ExpantedWrapper>
           <ul >
            <li id="corpo">
              <img src={entities}></img>
               <p id="title">Corporate</p>
            </li> 
            <hr></hr>

            <input type="text" placeholder="Filter..." onChange={(e) => getTekst(e.target.value)}></input>
            <ul>
            <li id="category">
               
            </li>
              {a.filter(e => e.Name.includes(t)).map(gen =><li>{gen.Icon}<Link to="/ecosystem">
                {gen.Name}
                </Link> </li>)}
            </ul>
            <hr></hr>
            <li id="category">
               <p>Account</p>
            </li>
            <li id="platform-special-face">
              <img src={face} id="face"></img>
               <p>Logged in as: <u> {usersList.slice(0,1).map(users => users.name)}</u></p>
            </li>
            <li id="platform2">
                <img src={privacy}></img>
                <p>Privacy</p>
            </li>
            <li id="platform2">
            <img src={setting}></img>
                <Link to="/profil">
                <p>Settings</p>
                </Link>
            </li>
            <hr></hr>
            <li id="logout">
            <img src={logout}></img>
                <p>Logout</p>
            </li>
            </ul>
        </ExpantedWrapper>
 );
 };