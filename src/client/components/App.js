import React from 'react'
import MainPage from '../pages/MainPage'
import WaitPage1 from '../pages/WaitPage1'
import WaitPage2 from '../pages/WaitPage2'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import VerifyContent from './MainPage/Main/VerifyContent'
import SettingsContent from './MainPage/SettingsContent'
import HelpContent from './MainPage/HelpContent'
import styled, { keyframes } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0); 
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

const Page = styled.div`
  
`;

const HomePageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 0.5s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.5s forwards;
  }
`;
const DetailsPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInRight} 0.5s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.5s forwards;
  }
`;

const App = () => {
  return (
    <HashRouter>
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup component={null}>
              <CSSTransition
                timeout={500}
                classNames="page"
                key={location.pathname}
              >
                <Switch location={location}>
                  <Route exact path="/" render={() => (
                    <HomePageElm>
                      <WaitPage1/>
                    </HomePageElm>
                  )} />
                  <Route path="/next" render={() => (
                    <DetailsPageElm>
                      <WaitPage2/>
                    </DetailsPageElm>
                  )} />
                  <Route path="/main" render={() => (
                    <DetailsPageElm>
                      <MainPage>
                        <VerifyContent/>
                      </MainPage>
                    </DetailsPageElm>
                  )} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    </HashRouter>
  );
}
export default App