import React from 'react'
import Form from '../../components/shared/Form/Form'

const register = () => {
  return (
    <>
      <div className='row g-0'>
        <div className='col-md-8 form-banner'>
          <img src='./assets/images/regImage.PNG' alt='registerImage' ></img>
        </div>
        <div className='col-md-4 form-container'>
          <Form formTitle={'Register'} submitButton={'Register'} formType={'register'}/> 
        </div>
      </div>
    </>
  )
}

export default register

