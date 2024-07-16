import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import themes from '../../../helpers/themes';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { FormInput, Button } from '../../../components/components';
import * as Yup from "yup";


const StyledElement = styled.section`
    background-color: ${themes.common.login_background_color};
    min-height:100vh;
    display: flex;
    flex-direction:column;

    
   
    & > .navbar {
        padding-inline:2rem;
        padding-block:1rem;
        color:white;
        font-size:3rem;
        font-weight:bold;
    }
   
    
    & > .login_container {
        max-width:fit-content;
        padding: 3rem;
        margin-block:3rem;
        margin-inline:auto;
        background-color:white;
        border-radius:2rem;
        display:grid;
        grid-template-columns: 1fr 1fr;
        column-gap:50px;
        place-items:center;
        justify-content: center;
        align-items: center;
        
        & > .omu_logo {
            width:300px;
            height:auto;
            
        }

        & > .login_form > .form{
            display:flex;
            flex-direction:column;
            gap:1rem;
        }
        
        @media screen and (max-width:967px){
            &{
                grid-template-columns:initial;
            }
        }
       
    }
`;


function Login() {
    let navigate = useNavigate();
    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current?.focus();
    }, [])


    const login = async () => {

    }

    const initialValuesForLogin = {
        email: '',
        password: '',
        authenticatorCode: '0',
    };

    const schemaForLogin = Yup.object().shape({
        email: Yup.string().required("Email cannot be empty").email("Please enter a valid email address"),
        password: Yup.string().required("Password cannot be empty").min(6, "Password must consist of at least 6 characters"),

    })

    return (
        <StyledElement>
            <div className='navbar'>OMU UBS</div>

            <div className='login_container'>
                <img className='omu_logo' src="/assets/images/omu_logo_blue.png" />
                <div className='login_form'>
                    <h3>WELCOME !</h3>
                    <Formik
                        initialValues={initialValuesForLogin}
                        validationSchema={schemaForLogin}
                        onSubmit={(values) => login(values)}
                    >
                        {({ handleChange }) => (
                            <Form className='form'>
                                <FormInput
                                    ref={emailRef}
                                    label="Email"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    placeholder="Mail address"
                                    required
                                />
                                <FormInput
                                    label="Password"
                                    onChange={handleChange}
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                                <Button
                                    text="Login"
                                    fontSize="16px"
                                    fontWeight={600}
                                    padding="16px"
                                    backgroundColor={themes.common.login_background_color}
                                />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

        </StyledElement>
    )
}

export default Login;