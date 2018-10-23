import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
//
import '~/styles/tailwind.build.css';

injectGlobal`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-size: 16px;
    margin:0;
  }
  @media print {
    html, body {
      /*changing width to 100% causes huge overflow and wrap*/
      height:100vh; 
      overflow: hidden;
    }
    ::-webkit-scrollbar { 
      display: none;
      position:absolute; 
    }
  }
`

const AppStyles = styled.div`
  background-color: hsl(240, 100%, 99.3%);
`

const App = () => (
  <Router>
    <AppStyles>
      <Routes />
    </AppStyles>
  </Router>
)

export default hot(module)(App)
