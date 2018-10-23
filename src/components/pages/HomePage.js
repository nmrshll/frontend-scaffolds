import React from 'react'
// import styled from 'styled-components'
//
// import ContentWidth from '~/components/molecules/ContentWidth'
// import Header from '~/components/organisms/Header'
// import { Media } from '~/styles'

// const ContentSection = styled.div`
//   ${ContentWidth}
//   display: flex;
//   flex-flow: column nowrap;
//   ${Media.desktop`flex-flow:row-reverse wrap;`};
//   @media print {
//     flex-flow: row-reverse wrap;
//   }
// `

const logo="http://placekitten.com/200/300"

export default () => (
<div className="text-center">
  <header className="bg-purple-darker m-6 p-6 rounded shadow-lg">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="text-white text-3xl">Welcome to React</h1>
  </header>
  <p className="text-base">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>
)
