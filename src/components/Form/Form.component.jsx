import React from 'react'
import { useState, useEffect } from 'react'
import './Form.css'
import axios from 'axios'
import { useNavigate } from 'react-router'
const Form = () => {

    // const [firstName, set] = useState(initialState)
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: "",
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post('https://my-json-server.typicode.com/Prophet-Bestman/Web3-test-server/users', user)
            console.log(res.data)
            setLoading(false)
            setSuccess(true)
            setTimeout(() => {
                navigate('/users')
            }, 2000);
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
            
        }

    }

    useEffect(() => {
        console.log(user.firstName)
    }, [user])
    return (
        <div className="limit">
            <div className="login-container">
                <div className="bb-login">
                    <form className="bb-form validate-form" onSubmit={(e) => handleSubmit(e)}> 
                        <span className="bb-form-title p-b-26"> Welcome </span> 
                        <span className="bb-form-title p-b-48"> 
                            <i className="mdi mdi-symfony"></i> 
                        </span>
                        <div className="danger text-center p-t-115"> 
                            {error && <span className="text-danger text-large"> Sign up failed </span> }
                            {success && <span className="text-success text-large"> Succsessfully Registered User</span> }
                            
                        </div>
                        <div className="wrap-input100 validate-input">    
                            <input value={user.firstName} onChange={((e) => setUser({...user, firstName: e.target.value}))} className="input100" type="text" name="first name" />    
                            <span className="bbb-input" data-placeholder="First Name"></span> 
                        </div>
                        <div className="wrap-input100 validate-input">    
                            <input value={user.lastName} onChange={((e) => setUser({...user, lastName: e.target.value}))} className="input100" type="text" name="last name" />    
                            <span className="bbb-input" data-placeholder="Last Name"></span> 
                        </div>
                        <div className="wrap-input100 validate-input">    
                            <input value={user.email} onChange={((e) => setUser({...user, email: e.target.value}))} className="input100" type="text" name="email" />    
                            <span className="bbb-input" data-placeholder="Email"></span> 
                        </div>
                        <div className="login-container-form-btn">
                            <div className="bb-login-form-btn">
                                <div className="bb-form-bgbtn"></div> 
                                <button onClick={() => setLoading(true)}  className="bb-form-btn"> 
                                    {loading ? "Loading..." : "Create"}
                                 </button>
                            </div>
                        </div>
                        
                    </form>
                    
                </div>
               </div>
            
        </div>
    )
}

export default Form
