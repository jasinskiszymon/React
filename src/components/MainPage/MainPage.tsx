import React, {FC, useEffect} from 'react';
import styled  from 'styled-components';
import {TopBar} from '../TopBar/TopBar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Wrapper} from '../../styledHelper/Components';
import {Publications} from '../routing/Publications';
import {Entities} from '../routing/Entities';
import {Workspaces} from '../routing/Workspaces';
import {Home} from '../routing/Home';
import {ProfileWebside} from '../routing/Profil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Import State
import {useDispatch} from 'react-redux';
import {getUser} from '../../actions/actionType/usersActions';
import {getPost} from '../../actions/actionType/postAction';
import {getPhoto} from '../../actions/actionType/photoAction';
import {getComment} from '../../actions/actionType/commentActions';



const Content = styled.div`
  display: flex;
  width: 50%;
  
  align-items: center;
   border: 1px solid red;
   
`;
const Main = styled.div`

display: flex; `

type GetUsers = ReturnType<typeof getUser>;
type GetPost = ReturnType<typeof getPost>;
type GetComment = ReturnType<typeof getComment>;
type GetPhoto = ReturnType<typeof getPhoto>;

const MainPage: FC = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUser());
    dispatch<GetPost>(getPost());
    dispatch<GetPhoto>(getPhoto());
    dispatch<GetComment>(getComment())
  }, [])

  return (
    <Router>
        <Wrapper> 

            <TopBar />
           <Main>
              <LeftMenu/>
              <Switch>
              <Route path="/Home" exact>
                  <Home/>
                  </Route>
                <Route path="/" exact>
                  <Home/></Route>
                  

                  <Route path="/publications" exact>
                    <Publications/>
                  </Route>
                  <Route path="/entities" exact>
                    <Entities/>
                  </Route>
                  <Route path="/ecosystem" exact>
                    <Workspaces/>
                  </Route>
                  <Route path="/profil" exact>
                    <ProfileWebside/>
                  </Route>
                </Switch>
                
                </Main>
        </Wrapper>
        </Router>
      
  );
}

export default MainPage;
