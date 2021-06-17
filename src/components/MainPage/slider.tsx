import React, {FC} from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import pc from '../../icon/komputer.png'
import doc from '../../icon/dokument.png'
import coin from '../../icon/coin.png'
import calc from '../../icon/kalkulator.png'
import dlon from '../../icon/dlon.png'
import card from '../../icon/card.png'
import handcoin from '../../icon/handcoin.png'
import {useSelector} from 'react-redux';
import {IState} from '../../reducers';
import {IUserReducers} from '../../reducers/apiReducers';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { render } from 'react-dom';
import { findByLabelText } from '@testing-library/dom';
 
const SliderWrapper = styled(Slider)`
    width: 100%;
    position: relative ;
    user-select: text ;
    p{
        user-select: text;
    }
    a, a:hover{
	color: black;
    text-decoration: none;
}
`;
 const BoxWrapper = styled.div`
    width: 25%;
    height: 250px;
    position: relative;
    margin-left: 40px;
`;
 const Box = styled.div`
    width: 97%;
    height: 220px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
    position: absolute;
    z-index: -1;
    left: 0;
    #background{
        width: 100%;
        height: 45%;
        border-radius: 10px 10px 0 0;
        position: absolute;
        z-index: -1;
    }
    //Title and Title of Tail
    #iconbox{
        display: flex;
        align-items: center;
        margin: 70px 0 10px 10px;
    }
    #iconbox img{
        width: 70px;
        height: 70px;
        border-radius: 5px;
        box-shadow: 0px 0px 5px 0px #bbbbbb;
        background-color: #ffffff;
        padding: 10px;
    }
    #iconbox p{
        font-size: 20px;
        font-weight: 900;
        margin: 0;
        padding: 10px;
            
        
    }
    //Description of tile
    #descbox{
        width: 80%;
        height: 20px;
        margin-left: 10px;
        display: flex;
        align-items: center;
    }
    #descbox p{
        font-size: 13px;
        display: flex;
        align-items: center;
        color: grey;
        margin-left: 4px;
        margin-right: 10px;
    }
    #icon{
        
        width: 15px;
        height: 15px;
        margin-left: 4px;
        margin-right: 10px;
        
    }
    #dot-spaces{
        width: 4px;
        height: 4px;
        margin-left: 4px;
        margin-right: 10px;
        
    }
    #update-info{
        font-size: 12px;
        margin: 8px 0 0 10px;
        color: grey;
    }
    
`;
export const Slide: FC = () => {
    const {userPhoto} = useSelector<IState, IUserReducers> (globalState => ({
        ...globalState.users
       
    }));
const url = userPhoto.slice(1).map(photo => photo.url);
let Array = [
  {Name: 'Client contract', specification : 'Contract', updatetime : '2', image :url[0], icon: pc},
  {Name: 'Supplier contract', specification : 'Contract', updatetime : '3',image :url[1], icon: coin},
  {Name: 'Corporate', specification : 'Corporate', updatetime : '4',image :url[2], icon:calc },
  {Name: 'Customers', specification : 'Customers', updatetime : '5',image :url[3], icon:doc },
  {Name: 'Documents', specification : 'Documents', updatetime: '1',image :url[4],icon:dlon },
  {Name: 'Institutions', specification : 'Institutions', updatetime : '2',image :url[5],icon: card },
  {Name: 'Business meeting', specification : 'Meeting', updatetime : '3',image :url[6],icon: handcoin }
];


    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 5
      };
    return(
      <SliderWrapper {...settings}>
      {Array.map(Sliderbox => 
      <BoxWrapper>
         
          <Box>
            
              <img id='background' src={Sliderbox.image}></img>  
        
              <div id= 'iconbox'>
                  <img src = {Sliderbox.icon}/>
                  
                <Link to ={{ 
                         pathname: "/courses",
                        state: Sliderbox.Name
                           }}> 
                     <p>{Sliderbox.Name}</p>                             
                    
                </Link>
                      
              </div>   
              <div id= 'descbox'>
           
                  <img id= 'icon' src = "./icons/network.png"/>
                  <p>{Sliderbox.specification}</p>
                  <img id='dot-spaces' src = "./icons/network.png"/>
                  <img id= 'icon' src = "./icons/group.png"/>
                  <p>150 users</p>
                  
                    
              </div>    
              <p id= 'update-info'>Last update {Sliderbox.updatetime} days ago</p> 
          </Box>
      </BoxWrapper>
      )}
  </SliderWrapper>
);
};