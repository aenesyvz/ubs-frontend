import React, { useState } from 'react'
import styled from 'styled-components'
import { FormInput } from '../../../../../../../components/components';
import { Form, Formik } from 'formik';
import themes from '../../../../../../../helpers/themes';

const StyledElement = styled.div`
  box-shadow: ${themes.teacher.primary_shadow};
  border-radius: 16px;
  padding: 30px;
  gap: 1rem;

  & > Form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 15px;
    column-gap: 40px;

    @media screen and (max-width:967px){
      grid-template-columns: 1fr;
    }
  }

  & > Form > button {
    grid-column: 1/-1;
       background-color: ${themes.teacher.primary};
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    padding: 12px 16px;
    outline: none;
    border: none;
    margin-top: 8px;
  }
`;

function TabbarSecurityViewItem() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <StyledElement>
            <Formik
                key={null}
                initialValues={{
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                }}
                validationSchema={null}
                onSubmit={(values) => console.log({ values })}
            >
                {({ setFieldValue, values }) => {


                    return (
                        <Form>
                            <FormInput
                                name="oldPassword"
                                label="Old Password"
                                type="password"
                                primaryColor={themes.teacher.primary}
                            ></FormInput>
                            <FormInput
                                name="newPassword"
                                label="New Password"
                                type="password"
                                primaryColor={themes.teacher.primary}
                            ></FormInput>
                            <FormInput
                                name="confirmNewPassword"
                                label="Password Verification"
                                type="password"
                                primaryColor={themes.teacher.primary}
                            ></FormInput>
                            <button>Change Password</button>
                        </Form>
                    );
                }}
            </Formik>
        </StyledElement>
    )
}

export default TabbarSecurityViewItem