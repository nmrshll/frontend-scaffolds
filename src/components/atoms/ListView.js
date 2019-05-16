import React from 'react';
import PropTypes from 'prop-types';
import { branch, renderNothing } from 'recompose';

const getItem = ({ renderItem, getItemKey }) => (dataItem, idx, arr) => ({
  ...renderItem(dataItem, idx, arr),
  key:
    (typeof getItemKey === 'function' && getItemKey(dataItem, idx, arr)) || idx,
});

const noDataNoRender = branch(({ data }) => !data, renderNothing);

export const ListView = noDataNoRender(
  ({ data, renderItem, getItemKey, style, ...rest }) => (
    <div style={style} {...rest}>
      {data.map(getItem({ renderItem, getItemKey }))}
    </div>
  ),
);
ListView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ListView;

// import React from 'react'
// import PropTypes from 'prop-types'

// const getRow = ({ renderItem }) => (dataItem, idx, arr) => (
//   <div key={idx}>{renderItem(dataItem, idx, arr)}</div>
// )

// export const ListView = ({ data, renderItem, ...rest }) => (
//   <div {...rest}>{data.map(getRow({ renderItem }))}</div>
// )
// ListView.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.any).isRequired,
// }
