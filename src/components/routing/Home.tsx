import {FC} from 'react';
import styled from 'styled-components';
import {Workspaces} from '../MainPage/Workspaces';
import {Returnuwork} from '../MainPage/Returnuwork';
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
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 20px;
  width: 70%;
  font-size: 20px;


  
`;

  const Publication = styled.div`
      
      width: 90%;
      margin-left: 8%;
      border-radius: 25px;
      -webkit-box-shadow: 2px 2px 19px -4px rgba(0,0,0,0.59); 
      box-shadow: 2px 2px 19px -4px rgba(0,0,0,0.59);
      display: flex;
      
      
      #left{
        width: 500px;
        background-image: url("https://via.placeholder.com/400/f9cee5"); 
        color: #ffffff;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        

        #who{

          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 15px;
          
        } 
        #text{
          margin-top: 70%;
          width: 70%;
          font-size: 23px;
          margin-left: 15px;
          text-decoration: underline;
          font-weight: bolt;
          

        }
        
        #face{
        border-radius: 100%;
        width:30px;
        margin-left: 8px;
        margin-right: 8px;
        
        
}
        }
        
        #right{
        width: 70%;
        margin-left: 20px;
        margin-top: 20px;
        overflow:hidden;
       
        
        

        #face{
        border-radius: 100%;
        width:30px;
        margin-left: 8px;
        margin-right: 8px;
        
        
        }
        #who{

        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 15px;

        } 
        #textpost{
          margin-left: 15px;
        

        }

        #maintext{
          font-size: 25px;
        }
        #post{
          width: 15%;
        }
        #first{
          margin-top: 5px;
          display: flex;
        }
        }
       #more{
         color:#1f2057;
         font-size: 23px;
         margin-top: 15px;
       }
      #moretitle{
        height: 60px;

      }
  
  `;
 
  
  
  
  
export const Home: FC = () => {
  const {usersList} = useSelector<IState, IUserReducers> (globalState => ({
    ...globalState.users
    
}));
const {userPhoto} = useSelector<IState, IUserReducers> (globalState => ({
  ...globalState.users
}));
const {usersPost} = useSelector<IState, IUserReducers> (globalState => ({
  ...globalState.users
}));
const urlsmall = userPhoto.slice(1).map(photo => photo.thumbnailUrl);
const url = userPhoto.slice(1).map(photo => photo.url);
    return(
         <Wrapper>
           <Publication>
              <div id="left">
              <div id="text">
              <p>{usersPost.slice(0,1).map(users => users.body)} </p>
              </div>
              <div id="who">
                <p id="data">20.03.2009</p><img src={url[1]} id="face" alt="face"/><p id="Name"> {usersList.slice(0,1).map(users => users.name)}</p>
                </div>
              </div>
              
              <div id="right">
                
                <p id="maintext"> Latest publications</p>
                <div id="first">
                <img id="post" src={url[5]} alt="face"/>
               <div id="theme">

              <p id="textpost"> {usersPost.slice(0,1).map(users => users.body)}</p>
                
               <div id="who">
               
               <p id="data">20.03.2009</p><img src={url[1]} id="face" alt="face"/><p id="Name"> {usersList.slice(0,1).map(users => users.name)}</p>
               </div>
               </div>
                </div>
                <div id="first">
                <img id="post" src={url[2]} alt="face"/>
               <div id="theme">
                <p id="textpost">{usersPost.slice(0,1).map(users => users.body)}</p>
               <div id="who">
               <p id="data">20.03.2009</p><img src={url[1]} id="face" alt="face"/><p id="Name"> {usersList.slice(0,1).map(users => users.name)}</p>
               </div>
               </div>
                </div>
                <div id="first">
                <img id="post" src={url[6]} alt="face"/>
               <div id="theme">
                <p id="textpost">{usersPost.slice(0,1).map(users => users.body)}</p>
               <div id="who">
               <p id="data">20.03.2009</p><img src={url[1]} id="face" alt="face"/><p id="Name">{usersList.slice(0,1).map(users => users.name)}</p>
               </div>
               </div>
                </div>
                <div id="moretitle">
                <p id="more">See more publications</p>
                </div>


              </div>


           </Publication>


           <Workspaces/>
            
           <Returnuwork/>
        </Wrapper>

    )};