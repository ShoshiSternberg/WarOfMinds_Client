import React, { useState } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import '../App.css';
import BackgroundLetterAvatars from './Avatar';

import MyHistory from './MyHistory';

const ProfilePage = ({ user, setName, setEmail, setAddress }) => {
    const [numOfGames,setNumOfGames]=useState(0);
    return (
        <section style={{ backgroundColor: '#eee', margin: '15px 40px 15px 40px', paddingTop: '0px' }}>
            <MDBContainer className="py-5">
          
                <MDBRow>
                    <MDBCol lg="4" >
                        <MDBCard className="mb-4 ">
                            <MDBCardBody className="text-center">
                                {/* <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid /> */}
                                    {/* <BackgroundLetterAvatars MyName={user.playerName}/> */}
                                <p className="big text-muted mb-1">{user.playerName}</p>
                                <p className="text-muted mb-4">{user.playerAddress}</p>



                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <div className="d-flex justify-content-center rounded-3 p-2 mb-2"
                                    style={{ backgroundColor: '#efefef', textAlign: "center" }}>                                  
                                    
                                    <div className="px-3">
                                        <p className="small text-muted mb-1">Rating</p>
                                        <p className="mb-0">{user.eloRating}</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="small text-muted mb-1">Games number</p>
                                        <p className="mb-0">{numOfGames}</p>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                   
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"><input type='text' placeholder={user.playerName} onChange={(e) => { setName(e.target.value) }} className='profileInputEdit' /> </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"><input type='email' placeholder={user.playerEmail} onChange={(e) => { setEmail(e.target.value) }} className='profileInputEdit' /></MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Registration Date</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"><input type='text' placeholder={user.dateOfRegistration} className='profileInputEdit' /><MDBIcon far icon="edit mb-5" /></MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Address</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"><input type='text' placeholder={user.playerAddress} onChange={(e) => { setAddress(e.target.value) }} className='profileInputEdit' /></MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />

                            </MDBCardBody>
                        </MDBCard>

                        <MDBRow>
                            <MDBCol md="12">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Games History</span></MDBCardText>
                  
                                        <MyHistory setNumOfGames={setNumOfGames}/>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                         
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default ProfilePage;