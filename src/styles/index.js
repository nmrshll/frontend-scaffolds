import { css } from 'styled-components'

export const Media = {
  desktop: (...args) => css`
    @media (min-width: ${665 / 12}em) {
      @media not print {
        ${css(...args)};
      }
    }
  `,
  mobile: (...args) => css`
    @media (max-width: ${664 / 12}em) {
      @media not print {
        ${css(...args)};
      }
    }
  `,
}
