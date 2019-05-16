import React from 'react';

const applyOnChangeText = onChangeTextPropFn => event => {
  onChangeTextPropFn(event.target.value);
};

const onKeyPressFn = (submitEditingFn, clearAfterSubmit) => e => {
  if (e.key === 'Enter') {
    submitEditingFn(e.target.value);
    if (clearAfterSubmit) {
      e.target.value = '';
    }
  }
};

export const TextInput = ({
  onChange,
  onSubmit,
  clearAfterSubmit,
  ...props
}) => (
  <input
    {...props}
    ref={props.setRef}
    onChange={onChange ? applyOnChangeText(onChange) : null}
    onKeyPress={onKeyPressFn(onSubmit, clearAfterSubmit)}
  />
);
export default TextInput;
