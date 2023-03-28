import React from 'react';
import{
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRadio
}
from 'mdb-react-ui-kit';

function UserRegister() {
  return (
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
              </MDBCol>

            </MDBRow>
            <MDBRow>

              <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='New Password' size='lg' id='form1' type='password'/>
            </MDBCol>

             <MDBCol md='6'>
             <MDBInput wrapperClass='mb-4' label='Confirm Password' size='lg' id='form2' type='password'/>
             </MDBCol>

            </MDBRow>
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Country' size='lg' id='form3' type='text'/>
              </MDBCol>

              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold">Existing Pet Owner </h6>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Yes' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Not' inline />
               
              </MDBCol>

             </MDBRow>
             <MDBRow>

             <MDBCol md='6'>
             <MDBInput wrapperClass='mb-4' label='Province' size='lg' id='form3' type='text'/>
             </MDBCol>

             <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='City' size='lg' id='form3' type='text'/>
              </MDBCol>
              </MDBRow>
              <MDBRow>

             <MDBCol md='6'>
             <MDBInput wrapperClass='mb-4' label='Street' size='lg' id='form3' type='text'/>
             </MDBCol>

              <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Age' size='lg' id='form3' type='text'/>
                   </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>

            
            <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
  );
}

export default UserRegister;