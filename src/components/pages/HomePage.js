import React from 'react'
import styled from 'styled-components'
//
import ContentWidth from '~/components/molecules/ContentWidth'
import Header from '~/components/organisms/Header'
import { Media } from '~/styles'

const ContentSection = styled.div`
  ${ContentWidth}
  display: flex;
  flex-flow: column nowrap;
  ${Media.desktop`flex-flow:row-reverse wrap;`};
  @media print {
    flex-flow: row-reverse wrap;
  }
`

export default () => (
  <div>
    <Header />
    <ContentSection large>
      hello react
    </ContentSection>
  </div>
)
