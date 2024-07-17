import { Form, Formik } from 'formik';
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { FormInput } from '../../../../../../../../../components/components';
import themes from '../../../../../../../../../helpers/themes';


const StyledElement = styled.div`
    box-shadow: ${themes.admin.primary_shadow};
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
    background-color: ${themes.admin.primary};
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


function GeneralForm() {
    const [isLoading, setIsLoading] = useState(false);




    return (
        <StyledElement>
            <Formik
                key={null}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    nationalityNumber: '',
                    cityId: '',  // Bu alanın ve diğer alanların başlangıç değerleri boş olmalı
                    districtId: '',
                    neighborhood: '',
                    street: '',
                    address: '',
                    address2: '',
                    addressNote: '',
                }}
                validationSchema={null}
                onSubmit={(values) => console.log({ values })}
            >
                {({ setFieldValue, values }) => {

                    return (
                        <Form>
                            <FormInput
                                name="firstName"
                                label="Name"
                                isLoading={false}
                                primaryColor={themes.admin.primary}
                            />
                            <FormInput
                                name="lastName"
                                label="Surname"
                                isLoading={false}
                                primaryColor={themes.admin.primary}

                            />
                            <FormInput
                                name="nationalityNumber"
                                label="T.C. Identity Number"
                                isLoading={false}
                                primaryColor={themes.admin.primary}

                            />
                            <FormInput
                                name='cityId'
                                label='City ID'
                                isLoading={isLoading}
                                primaryColor={themes.admin.primary}
                                onChange={(value) => {
                                    setFieldValue('cityId', value);
                                    setFieldValue('address', `${values.neighborhood} ${values.street}, ${value}/${values.districtId}`);
                                }}
                            />
                            <FormInput
                                name="districtId"
                                label="District ID"
                                isLoading={false}
                                onChange={(value) => {
                                    setFieldValue('districtId', value);
                                    setFieldValue('address', `${values.neighborhood} ${values.street}, ${values.cityId}/${value}`);
                                }}
                                primaryColor={themes.admin.primary}
                            />
                            <FormInput
                                name="neighborhood"
                                label="Neighborhood"
                                isLoading={false}
                                onChange={(value) => {
                                    setFieldValue('neighborhood', value);
                                    setFieldValue('address', `${value} ${values.street}, ${values.cityId}/${values.districtId}`);
                                }}
                                primaryColor={themes.admin.primary}


                            />
                            <FormInput
                                name="street"
                                label="Street"
                                isLoading={false}
                                onChange={(value) => {
                                    setFieldValue('street', value);
                                    setFieldValue('address', `${values.neighborhood} ${value}, ${values.cityId}/${values.districtId}`);
                                }}
                                primaryColor={themes.admin.primary}

                            />
                            <FormInput
                                name="address"
                                label="Full Address 1"
                                isLoading={false}
                                primaryColor={themes.admin.primary}

                            />
                            <FormInput
                                name="address2"
                                label="Full Address 2"
                                isLoading={false}
                                primaryColor={themes.admin.primary}
                            />
                            <FormInput
                                name="addressNote"
                                label="Address Note"
                                isLoading={false}
                                primaryColor={themes.admin.primary}
                            />
                            <button type="submit">Update Address Information</button>
                        </Form>
                    );
                }}
            </Formik>
        </StyledElement>
    )
}

export default GeneralForm