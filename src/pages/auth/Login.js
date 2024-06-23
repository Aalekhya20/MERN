import React from 'react'
import Formss from '../../components/shared/Form/Form'

const login = () => {
  return (
    <>
      <div className='row g-0'>
        <div className='col-md-8 form-banner' >
          <img src='./assets/images/loginImage.jpg' alt='loginImage' />
        </div>
        <div className='col-md-4 form-container' >
          <Formss formTitle={'Login Page'} submitButton={'Login'}  formType={'login'}/>
        </div>


      </div>
    </>
  )
}

export default login
