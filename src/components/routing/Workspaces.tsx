import {FC} from 'react';
import styled from 'styled-components';
import home from '../../icon/smallh.png';
import structure from '../../icon/structure.png';
import calendar from '../../icon/calendar.png'
import {useSelector} from 'react-redux';
import {IState} from '../../reducers';
import {IUserReducers} from '../../reducers/apiReducers';
import {Returnuwork} from'../MainPage/Returnuwork_workspace_edition';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation

  } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 30px;
  width: 70%;
 
  font-size: 20px;
  #container{
    margin-left: 8%;
    width: 90%;

  }
  #top{
    border: 1px solid gray;
    margin-bottom: 10px;
    border-radius: 10px;

  }
  #topic{
    font-weight:bold;
    padding-bottom: 5px;

  }
  #bottom{
  display:flex;
}
  #right-b{
    padding: 20px 10px 10px 10px;

  }
  #left-b{
    padding: 10px;
  }

  #text_gray{
    font-size: 16px;
    color: gray;

  }
  #box{
    background-color: #f1f1f1;
    height:350px;
    border-radius: 10px;
    border: 1px solid gray;

  }
  #tripleinfo{
    display: flex;
    justify-content: space-between;
    padding: 15px 10px 10px 10px;
    font-size: 16px;
    border-radius: 10px;
    font-weight: bold;
    color: gray;
  }
   #triplebox{
    display: flex;
    justify-content: space-between;
    padding: 30px;
  }
  #entiteis{
    height: 190px;
    width: 320px;
    background-color: white;
    border-radius: 14px;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 3px 9px -1px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 0px 3px 9px -1px rgba(0,0,0,0);
    border-radius: 10px;
  }
  #ownership{
    height: 190px;
    width: 320px;
    background-color: white;
    border-radius: 14px;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 3px 9px -1px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 0px 3px 9px -1px rgba(0,0,0,0);
    border-radius: 10px;

  }
  #calendar{
    height: 190px;
    width: 320px;
    
    background-color: white;
    border-radius: 14px;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 3px 9px -1px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 0px 3px 9px -1px rgba(0,0,0,0);
    border-radius: 10px;
  }
  #text{
    font-size: 16px;
  }
  #one{
    padding: 30px 10px 10px 10px;
  }
  #two{
    padding: 40px 10px 10px 10px;
  }
  #three{
    padding: 25px 10px 10px 10px;
  }  
  #back{
    width: 100%;
    height:200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
export const Workspaces: FC = () => {
  const {userPhoto} = useSelector<IState, IUserReducers> (globalState => ({
    ...globalState.users
   
}));
  const url = userPhoto.slice(1).map(photo => photo.url);
  console.log(useLocation());
    return(

      <Wrapper>
        <div id="container">
        <div id="top">
        <div id="image"><img id="back" src={url[0]}/></div>
        <div id="bottom">
        <div id="left-b"><img src={home}/></div>
        <div id="right-b">
          <ul>
            <li><p id="topic">Corporate holdings</p></li>
            <li><p id="text_gray">Workspace purpose and a bit of context. This much needed descriptions is here to remind people where they are, if they are new or habe poor memory.</p></li>
          </ul>
        </div>
        </div>


        </div>

        <div id="box">
        <div id="tripleinfo">
      <p id="left"> Start working on corporate matters</p>
      <p id="right"> Hide</p>
      </div>
      <div id="triplebox">

         <div id="entiteis">
        <ul id="one">
          <li><img src={home}/></li>
          <li><p id="topic">Explore your <b>entities</b></p></li>
          <li><p id="text">Take a few minutes to look at the most important element and specificiteis of your entities.</p></li>
        </ul>
            </div>
         <div id="ownership">
         <ul id="two">
          <li><img src={structure}/></li>
          <li><p id="topic">Structure the <b>ownership</b></p></li>
          <li><p id="text">Get a clear view of the ownership by looking at the relations between individuals and entities.</p></li>
        </ul>
   </div>
            <div id="calendar">
            <ul id="three">
          <li><img src={calendar}/></li>
          <li><p id="topic">Define the <b>calendar</b></p></li>
          <li><p id="text">Prepare future events by creating detailed plans around the life of your entity</p></li>

        </ul>


            </div>
      </div>  
      </div>
      


        


      </div>
      <Returnuwork/>
      </Wrapper>

    )};