import styled,{css} from 'styled-components'
//
import { Media } from '~/styles'

export const ContentWidth = css`
  width: 86%;
  ${Media.desktop`max-width:${({ large, fullWidth }) =>
    fullWidth ? '75%' : large ? '70rem' : '50rem'}`};
  margin: 0 auto 0 auto;
`

export default ContentWidth
