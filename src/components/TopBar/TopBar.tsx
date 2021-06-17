import {FC} from 'react';
import styled from 'styled-components';
//import {Colors} from '../../styledHelper/Colors';
import {ExpantedMenu} from './ExpantedMenu';
import useDropdown from 'react-dropdown-hook';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 62px;
    
    a, a:hover{
	color: black;
    text-decoration: none;
}

    -webkit-box-shadow: 1px 17px 16px -16px rgba(0,0,0,0.07);
    -moz-box-shadow: 1px 17px 16px -16px rgba(0,0,0,0.07);
    box-shadow: 1px 17px 16px -16px rgba(0,0,0,0.07);


`;
const LeftIcons = styled.div`
    height: 62px;
   
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: space-between;
    flex-wrap: wrap;
    
    #logo{
        height: 62px;
        

    }
    p{
        
        left: 9%;
        font-size: 20px;
        
        
        
    
    }
    #home2{
        position: absolute;
        left: 6%;
    }
    button{
        border: none;
        background-color: white;
    }

`;


const RightIcons = styled.div`

       
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 10%;
        flex-wrap: wrap;
        margin-right: 3%;

`;

const InputWrapper = styled.div`
   
        height: 50px;
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: -17%;
        input{
            color: grey;
            height: 30px;
            width: 100%;
            border-radius: 5px; 
            text-align: center;
            border: 1px solid #e6e3e3;
            background: url(./icons/search.png) no-repeat scroll 7px 7px;
        }

        

    
    
`;
const ExpantedWrapper = styled.div`

`;
export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen,toogleDropdown] = useDropdown();
    const menuHandler = () => {
        toogleDropdown();
    };

    return(
        
        <Wrapper>
           <LeftIcons>

                <img src='./media/logo.png' id="logo" alt="logo"/>
                <Link to="Home">
                    <p>Home
                    </p>
                </Link> 
                <img src='./icons/house2.png' id="home2" alt="home2"/>
               <div ref={wrapperRef}>
                    <button onClick={menuHandler}>
                        <img src='./icons/arrow-down.png' id="button" alt="home"/>
                    </button>
                    {dropdownOpen && <ExpantedMenu/>}
               </div>
               </LeftIcons>

                <InputWrapper>
                <input type="text" id="search" placeholder="Search Legalcluster" />
                </InputWrapper>

                <RightIcons>
                <img src='./icons/house.png' alt="home"/>
                <img src='./icons/comments.png' alt="comments"/>
                <img src='./icons/bell.png' alt="sbell"/>
                </RightIcons>
                </Wrapper>

     

                );
    };