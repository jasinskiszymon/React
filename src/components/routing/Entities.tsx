import {FC, useState} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {IState} from '../../reducers';
import {IUserReducers} from '../../reducers/apiReducers';
import settingsicon from '../../icon/setting.png';
import mozaic from '../../icon/mozaic.png';
import list from '../../icon/list.png';
import more1 from '../../icon/more1.png';
import more2 from '../../icon/more2.png';
import share from '../../icon/share.png';
import filter from '../../icon/filter.png';
import arrowdown from '../../icon/arrow-down.png';
import fullscrean from '../../icon/fullscreen.png';
import fallow from '../../icon/signal.png';
import sort from '../../icon/sort.png';
import {EmptyButton} from '../Common/Emptybutton';

interface valuebool{
  value: boolean;
}
  const Wrapper = styled.div<valuebool>`
  .fullscreen-enabled {
  background-color: rgb(255, 255, 255) !important; 
  }
  
  margin-top: 30px;
  width: 100%;
  font-size: 20px;
 
  #topsettings{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  #name{
  font-size: 23px;
  color: #505050;
  margin-right: 5px;
}
  #topic{
  display: flex;
  margin-left: 8.5%;
}
#mozaic, #list{
  display: flex;
  align-items: center;
}

#views{
  display: flex;
  width:160px;
  border-radius: 5px;
  margin-right: 24px;
}
#nameofview{
  padding-right: 12px;
  padding-left: 3px;
  ;
}
`;


  const Boxes = styled.div<valuebool>`
    width: 96%;
    height: 1000px;
    margin-left: 4%;
   
    #boxe{
      display: flex;
      flex-wrap: wrap;
      flex-direction:  ${props => (props.value === true? 'row' : 'column')};
      justify-content: center;
      align-items: center;

    
  } 
  #jpg{
    width: 120px;
    height: 120px;
    margin-left: 10px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 13px;
    box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
  }
  #box-right{
    width: 340px;
    height: 140px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    display: flex;
    margin-right: 10px;
    box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
    font-weight:bold
    
  } 

#box-left{
  width: 140px;
  height: 140px;
 
}
#right{
  width: 200px;
 
}
#top{
  color: #0000b4;
  height: 70%
}
#bottom{
  font-size: 16px;
  color: gray;
}
`;

const Filter = styled.div`
display: flex;
justify-content: space-between;

#left-filter{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 8.5%;

}
#pos{
  padding-left: 10px;
  padding-right: 10px;
}
#all{
 
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  height: 40px;
  width: 85px;
  background-color: #cbf2ff;
  box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
}
#all p{
  padding-left: 10px;
  padding-right: 10px;
}

div{
  display: flex;
  align-items: center;
}
#find{
background: url(./icons/search.png) no-repeat scroll 7px 7px;
  height: 30px;
  width: 200px;
  border-radius: 8px;
  text-align: center;
  margin: 15px;
}
#blue{
  color: #0909cfb9;
  font-weight: bold;
  padding-left: 8px;
  padding-right: 8px;
}
#right-filter img{
  margin-right: 6%;

}
#fullscreen {
  padding: 0;
  border: white;
  background: white;
}
`;
export const Entities: FC = () => {
  const {userComment} = useSelector<IState, IUserReducers> (globalState => ({
    ...globalState.users
}));

const {userPhoto} = useSelector<IState, IUserReducers> (globalState => ({
  ...globalState.users
 
}));
  const handle = useFullScreenHandle();

  const[view, setview] = useState(true);
  console.log(view);

  let [t, setTekst] = useState('')
    console.log(t);
    const urlsmall = userPhoto.slice(1).map(photo => photo.thumbnailUrl);
    const url = userPhoto.slice(1).map(photo => photo.url);
       const filtertext = userPhoto.filter(e => e.title.includes(t));
       let link = window.location.href;
    return(
     
         <Wrapper  value={view}> 
            <FullScreen handle={handle}>
           <div id="topsettings">
           <div id="topic">
             <p id="name">Entities</p>
             <img src={settingsicon}/>
           </div>
           <div id="views">
             <div id="mozaic" onClick={() => setview(true)}>
             <img src={mozaic}/><p id="nameofview">Mosaic</p>
           
             </div>
             <div id="list"onClick={() => setview(false)}>
             <img src={list}/><p id="nameofview">List</p></div>
           </div>
           </div>
           <Filter>
             <div id="left-filter">
             <div id="all">
               <img src={more1}/> <p>All</p>
               <img src={arrowdown}/>
             </div>
             <div>  
               <img id="pos" src={more2}/>
            </div>
             <div id="sort">
               
               <img id="pos" src={sort}/>Sort
               
            </div>
             <div id="filters">
               <img id="pos" src={filter}/> Filters
            </div>
             <div id="fullscr">
             <button id="fullscreen" onClick={handle.enter}>
                <img id="pos" src={fullscrean}/>
                </button>
            </div>
             <div id="share">
               <img id="pos" src={share}/> 
               <CopyToClipboard text={link}>
                 <button>Share</button>
               </CopyToClipboard>
            </div>
            </div>
            <div id="right-filter">
           <div id="input">
             
             <input type="text" id="find" placeholder="find u entities..." onChange={(e) => setTekst(e.target.value)}></input>
             <img id ="aa"src={fallow}/><p id="blue">Followed</p><img id="arrow"src={arrowdown}/>
             
             </div>
             </div>
           </Filter>
            <Boxes  value={view}>
              <div id="boxe">
            {filtertext.slice(0,24).map(photo =>
              <div id="box-right">
              <div id="box-left">
            <img id="jpg" src={url[13]}/>
              </div>
              <div id="right">
              <div id="top">
                {photo.title}
                </div>
                 <div id="bottom">
                  <p>Caracas 1050, Distrito Capital, Venezuela</p>
             </div>
            </div>
            </div>
              )} 
            </div>

            </Boxes>
            
            </FullScreen>
        </Wrapper>
        
    )};