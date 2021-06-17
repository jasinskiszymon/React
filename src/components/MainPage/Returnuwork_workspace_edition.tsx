 import React, {FC, useState} from 'react';
 import { makeStyles, createStyles } from '@material-ui/core/styles';
 import Pagination from '@material-ui/lab/Pagination'
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {IState} from '../../reducers';
import {IUserReducers} from '../../reducers/apiReducers';
import fallow from '../../icon/signal.png';
import arrow from '../../icon/arrow-down.png';
import eco from '../../icon/ecosystem.png'
import etnities from '../../icon/entities2.png'
import { Workspaces } from '../routing/Workspaces';
const Wrapper = styled.div`

  width: 90%;
  height: 1342px;
  position: relative;
  
  margin-left: 8%;
  margin-top: 3%;

 
  #find{
  background: url(./icons/search.png) no-repeat scroll 7px 7px;
  height: 30px;
  width: 200px;
  border-radius: 8px;
  text-align: center;
  margin: 15px;
}
#topic-info{
  display: flex;
  justify-content: space-between;

}
#input{
  display: flex;
  align-items: center;
  font-size: 20px;
}

#blue{
  color: #0909cfb9;
  font-weight: bold;
  padding-left: 8px;
  padding-right: 8px;
}
#bold{
  font-size: 25px;
  padding: 20px;
  font-weight: bold;
  color: gray;
}
#arrow{
  padding-right: 15px;
}




.MuiPagination-ul{
  display: flex;
  justify-content: center;
}




#comment{
    width:98,7%;
    margin-bottom: 6px;
    height: 110px;
    padding: 10px;
    border-radius: 8px;
    -webkit-box-shadow: 2px 2px 19px -4px #000000ca; 
    box-shadow: 2px 2px 19px -4px rgba(0,0,0,0.59); 
    

  }
  
  ul{
    height:940px;
    align-items: center;
    
  }
  
#name-main{
  font-size: 26px;
  color: #080874;
  padding-bottom: 3px;
}

#bottom-info{
  display: flex;
  padding-top: 10px;
  color: gray;
  
}
#tekst{
  padding-top: 3px;
  padding-left: 5px;
  padding-right: 5px;
}


`;


//https://picsum.photos/200
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);


export const Returnuwork: FC = () => {


  const {userComment} = useSelector<IState, IUserReducers> (globalState => ({
    ...globalState.users
}));

  const {usersList} = useSelector<IState, IUserReducers> (globalState => ({
    ...globalState.users
}));



const classes = useStyles();
  const [page, setPage] = useState(1);
    


  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);


  let [t, setTekst] = useState('')
    console.log(t);




       const filtertext = userComment.filter(e => e.name.includes(t));

  return(
    
       <Wrapper>

           

            <div id="topic-info"> 
            <div id="resume_p_styled"><p id="bold">Resume your work</p></div>
            <div id="input"><input type="text" id="find" placeholder="Filter..." onChange={(e) => setTekst(e.target.value)}></input>
            <img id ="aa"src={fallow}/><p id="blue">Followed</p><img id="arrow"src={arrow}/>
            </div>
            </div>
           <ul>
            {filtertext.slice((page-1)*10, (page)*10).map(comment =>

            <div id="comment">

              <li id="name-main">
            {comment.name}
            </li>
            <li id="body-comment">
              {comment.body}
              </li>
              <li id="bottom-info">
              <img src="./icons/ecosystem.png"/><p id='tekst'>Romaguera-Crona</p>
              <img src="./icons/entities2.png"/><p id='tekst'>Client contract</p>
              <p id='tekst'>Updated 3 days ago by {usersList.slice(0,1).map(users => users.name)}</p>
              </li>
            </div>
              )} 
            </ul>
                 {/* TEST:  {console.log(usersList)}     */}
        <Pagination count={50} page={page} onChange={handleChange}></Pagination>
        </Wrapper>
  )}