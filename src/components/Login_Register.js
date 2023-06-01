import React from 'react';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
}
    from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
const Login_Register = ({ChangeFormVisible}) => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const checkPassword = (e) => {
        return password === e ? password : "not correct password";
    }
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    const login = () => {
        axios.get(`https://localhost:7203/api/Player/${email}/${password}`)
            .then(res => {
                console.log(res.data);
                sessionStorage.setItem('user', JSON.stringify(res.data));
                ChangeFormVisible(false);

            })
            .catch(err => {
                console.log(err);
                
            })
    }

    const register = () => {
        const user = {
            "playerID": 0,
            "playerName": name,
            "playerPassword": password,
            "playerEmail": email,
            "dateOfRegistration": "2023-05-03T22:02:33.445Z",
            "eloRating": 1500,
            "games": [
            ]
        };

        axios.post(`https://localhost:7203/api/Player`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
                sessionStorage.setItem('user', JSON.stringify(res.data));
                ChangeFormVisible(false);

            })
            .catch(err => {
                console.log(err);
                
            })
    }

    return <Form
        onSubmit={e => {
            e.preventDefault();
        }}>

        <MDBContainer className="p-3 my-5 d-flex flex-column w-50  try">

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

                <MDBTabsPane show={justifyActive === 'tab1'}>

                    <div className="text-center mb-3">
                        <p>Sign in with:</p>

                        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='facebook-f' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='twitter' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='google' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='github' size="sm" />
                            </MDBBtn>
                        </div>

                        <p className="text-center mt-3">or:</p>
                    </div>

                    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={e => setEmail(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={e => setPassword(e.target.value)} />

                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' className='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4 w-100" type='submit' value="SignIn" onClick={login}>Sign in</MDBBtn>
                    <p className="text-center">Not a member? <a href="#!">Register</a></p>

                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === 'tab2'}>

                    <div className="text-center mb-3">
                        <p>Sign un with:</p>

                        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='facebook-f' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='twitter' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='google' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='github' size="sm" />
                            </MDBBtn>
                        </div>

                        <p className="text-center mt-3">or:</p>
                    </div>

                    <MDBInput wrapperClass='mb-4' label='Name' className='form1' type='text' onChange={e => setName(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' label='Email' className='form1' type='email' onChange={e => setEmail(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' label='Password' className='form1' type='password' onChange={e => setEmail(e.target.value)} />

                    <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' className='flexCheckDefault' label='I have read and agree to the terms' />
                    </div>

                    <MDBBtn className="mb-4 w-100" type='submit' value="SignUp" onClick={register}>Sign up</MDBBtn>

                </MDBTabsPane>

            </MDBTabsContent>

        </MDBContainer>

    </Form>
}
export default Login_Register;





// <MDBContainer fluid>

// <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
//     <MDBCardBody>
//         <MDBRow>
//             <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

//                 <h3 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h3>

//                 <div className="d-flex flex-row align-items-center mb-4 ">
//                     <MDBIcon fas icon="user me-3" size='lg' />
//                     <MDBInput  id='form1' type='text' placeholder='Your Name' className='w-100' onChange={e => setName(e.target.value)} />
//                 </div>

//                 <div className="d-flex flex-row align-items-center mb-4">
//                     <MDBIcon fas icon="envelope me-3" size='lg' />
//                     <MDBInput  id='form2' type='email' name="name" placeholder='Your Email' onChange={e => setEmail(e.target.value)} />
//                 </div>

//                 <div className="d-flex flex-row align-items-center mb-4">
//                     <MDBIcon fas icon="lock me-3" size='lg' />
//                     <MDBInput  id='form3' type='password' name="name" placeholder='Password' onChange={e => setPassword(e.target.value)} />
//                 </div>

//                 <div className="d-flex flex-row align-items-center mb-4">
//                     <MDBIcon fas icon="key me-3" size='lg' />
//                     <MDBInput  id='form4' type='password' name="name" placeholder='Repeat Your Password' onChange={e => checkPassword(e.target.value)} />
//                 </div>

//                 <div className='mb-4'>
//                     <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//                 </div>

//                 <MDBBtn className='mb-4' size='lg' type="submit">Register</MDBBtn>

//             </MDBCol>

//             {/* <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
//                 <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
//             </MDBCol> */}

//         </MDBRow>
//     </MDBCardBody>
// </MDBCard>

// </MDBContainer >

