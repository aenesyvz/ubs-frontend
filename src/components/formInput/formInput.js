import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themes from '../../helpers/themes';
import { useField } from 'formik';
import { Skeleton } from '@mui/material';

const StyledElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  & > label {
    font-weight: bold;
    font-size: 12px;
  }

  & > div {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: start;
    border: 0.25px solid ${(props) => props.primaryColor};
    border-radius: 12px;
    background-color: ${themes.common.input_background_color};
  }

  .icon-box {
    border-right: 0.25px solid ${(props) => props.primaryColor};
    padding: 12px 16px;
    display: flex;
    width: 18px;
    height: 18px;
  }

  & > div > input {
    padding: 12px 16px;
    width: 100%;
    outline: none;
    color: ${(props) => props.primaryColor};
    font-size: 16px;
    font-weight: 600;
    border: none;
    outline: none;
    background-color: transparent;
  }

  .invalid-feedback {
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: initial;
    font-size: 12px;
    color: red;
  }
`;
const FormInput = React.forwardRef(
  ({ name, label, type = 'text', icon = null, primaryColor = themes.common.login_background_color, isLoading = false, onChange = null }, ref = null) => {
    const [field, meta, helpers] = useField(name);

    const handleChange = (event) => {
      field.onChange(event); // Formik alanının değerini güncelleyin

      // onChange prop'unu çağır, eğer varsa
      if (onChange) {
        onChange(event.target.value);
      }

      // helpers.setValue ile değeri güncelle
      helpers.setValue(event.target.value);

    };


    return (
      <StyledElement primaryColor={primaryColor}>
        <label>{label}</label>
        <div>

          {
            isLoading ? <Skeleton variant='rounded' width="100%" height={44} animation="wave" style={{ 'borderRadius': 12 }} />
              : <>
                {icon && <div className="icon-box">{icon}</div>}
                <input {...field} type={type} onChange={handleChange} ref={ref}></input>
              </>
          }

          <div className="invalid-feedback">
            {meta.touched && !!meta.error ? <div>{meta.error}</div> : null}
          </div>
        </div>
      </StyledElement>
    );
  }
);
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormInput;
