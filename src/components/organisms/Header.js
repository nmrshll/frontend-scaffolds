import React from 'react'
import styled from 'styled-components'
//
import ContentWidth from '~/components/molecules/ContentWidth'
import { Heading } from '~/components/atoms/Heading'
import {Media} from '~/styles'
//

const ContentSection = styled.div`
  ${ContentWidth}
`

const HeaderStyle = styled.header`
  position: relative;
  min-height: 30rem;
  padding-bottom: 5rem;
  > .content {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding: 5rem 0 2rem 0;
    color: #fff;
    text-align: left;
    > .name-row {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      > h1 {
        margin-right: 3rem;
      }
      > .contact-button-aspect-ratio {
        @media print {
          display: none;
        }
      }
    }
    > .location-social {
      display: flex;
      flex-flow: column wrap;
      ${Media.desktop`flex-flow:row nowrap; align-items:center;`};
      margin-top: 1.5rem;
      ${Media.desktop`margin-top:3rem; `};
      > .location-phones {
        display:flex;
        align-items: center;
        > .location {
          ${Media.desktop`padding-right:2rem; margin-right:2rem; border-right:1px solid #fff9;`};
          @media print {
            padding-right:2rem; margin-right:2rem; border-right:1px solid #fff9;
          }
        }
      }
      @media print {
        margin-top: 4rem;
      }
    }
    > .picture {
      position: absolute;
      ${Media.mobile`position:relative; margin-bottom:1rem;`};
      @media print {
        position: absolute;
        margin: 0;
      }
    }
  }
  > svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`
const Header = () => (
  <HeaderStyle>
    <ContentSection large className="content">
      <div className="name-row">
        <Heading level={1} bold>Hello React static</Heading>
      </div>
    </ContentSection>
  </HeaderStyle>
)

export default Header
