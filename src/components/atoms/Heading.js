import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { font, palette } from 'styled-theme'

export const Heading = styled(({ level, children, white, color, ...props }) =>
  React.createElement(`h${level}`, props, children),
)`
  font-size: ${({ level }) => `${0.75 + 1.4 * (1 / level)}rem`};
  color: ${({ white, color }) =>
    white ? '#fff !important' : color ? `${color}` : 'inherit'};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  letter-spacing: 0.1rem;
  margin-bottom: ${({ level }) => `${0.3 + 0.7 * (1 / level)}rem`};
`;

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
};

Heading.defaultProps = {
  level: 1,
};

const UnderlinedTitleStyle = styled.div`
  > .underline {
    margin: 0.7rem 0 0 0;
    width: 50%;
    background-color: hsl(180, 100%, 35%);
    height: 2px;
    border-radius: 999em;
  }
`;
export default ({ children, underlined, ...props }) => (
  <UnderlinedTitleStyle>
    <Heading {...props}>{children}</Heading>
    {underlined ? <div className="underline" /> : null}
  </UnderlinedTitleStyle>
);
