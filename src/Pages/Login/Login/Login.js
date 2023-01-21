import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import auth from '../../../Firebase/Firebase';
import SocialAccount from '../SocialAccount/SocialAccount';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword, loading, error,] = useSignInWithEmailAndPassword(auth);
    const[user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handlePass = (event) =>{
        setPassword(event.target.value);
    }
    const handleLogin = (event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    // navigate
    if(user){
       console.log('user', user);
         navigate('/home');
   }
    // reset password
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div className='container'>
            <br /><br />
            <h2 className='text-primary' >Login Here</h2> <br />
            <div className='formStyle'>
                <br /> 
                <Form onSubmit={handleLogin} className='textStyle' >
                    <br /> 
                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePass} type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br /> <br />
                    <p>New to Medi Care? <Link as={Link} to="/register" className='textDec'>Register Here</Link> </p>
                    <SocialAccount></SocialAccount>
                    <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'
             onClick={resetPassword}>Reset Password</button> </p>
              <ToastContainer />
                </Form>
                <br /> 
            </div>
            <br />
        </div>
    );
};

export default Login;