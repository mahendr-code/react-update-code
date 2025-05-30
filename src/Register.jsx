import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const url = 'http://tutorials.codebetter.in:7084/auth/save'
  const NameRef = useRef()
  const MobileRef = useRef()
  const EmailRef = useRef()
  const PasswordRef = useRef()
  const GenderRef = useRef()

  const handleForm = async (e) => {
    e.preventDefault()

    const name = NameRef.current.value
    const phone = MobileRef.current.value
    const email = EmailRef.current.value
    const password = PasswordRef.current.value
    const gender = GenderRef.current.value

    if (!name || !phone || !email || !password || !gender) {
      alert("Please fill all the fields.")
      return
    }

    const form = { name, phone, email, password, gender }

    try {
      setLoading(true)
      const response = await axios.post(url, form)
      alert(response.data.message)
      if (response.data.status === true) navigate('/login')
    } catch (err) {
      console.log(err)
      alert("Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='auth-form'>
      <div className='main'>
        <h1 className='heading'>Registration Form</h1>
        <form onSubmit={handleForm} className='form'>
          <div className='mb-2'>
            <label className='form-label'>Enter your Name</label>
            <input type="text" className='form-control' ref={NameRef} />
          </div>
          <div className='mb-2'>
            <label className='form-label'>Enter your Number</label>
            <input type="tel" className='form-control' ref={MobileRef} />
          </div>
          <div className='mb-2'>
            <label className='form-label'>Enter your Email</label>
            <input type="email" className='form-control' ref={EmailRef} />
          </div>
          <div className='mb-2'>
            <label className='form-label'>Enter your Password</label>
            <input type="password" className='form-control' ref={PasswordRef} />
          </div>
          <div className='mb-2'>
            <label className='form-label'>Select your Gender</label>
            <select className='form-select' ref={GenderRef}>
              <option value="">Select One</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type='submit' className='btn btn-primary mt-3' disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
