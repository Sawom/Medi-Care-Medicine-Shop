import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase';
import SocialAccount from '../SocialAccount/SocialAccount';
import { useCreateUserWithEmailAndPassword,
        useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[confirmpass,setconfirmPass] = useState('');
    const[error,setError] = useState('');
    const[user] = useAuthState(auth);
    const navigate = useNavigate();
    
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true} );

    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handlePass = (event) =>{
        setPassword(event.target.value);
    }
    const handleConfirmPass = (event) =>{
        setconfirmPass(event.target.value);
    }
    const handleError = (event)=>{
        setError(event.target.value);
    }
    if(user){
        console.log('user', user);
        navigate('/home');
    }

    const handleCreateUser  = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        if(password !== confirmpass){
            setError("Password did not match!");
            return;
        }
        if(password.length < 6){
            setError("Password should be greater than 6 character.");
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated Profile');
        navigate('/home');
    }

    return (
        <div className='container'>
            <br /><br />
            <h2 className='text-primary' >Register Here</h2> <br />
            <div className='formStyle'>
                <br /> 
                <Form onSubmit={handleCreateUser} className='textStyle' >
                    <br /> 
                    {/* name */}
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control   type="text" placeholder="Enter name" />
                    </Form.Group>
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
                    {/* confirm password */}
                    <Form.Group className="mb-3" controlId="confirmformBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPass} type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <br /> <br />
                    <p className='text-danger' > {error} </p> 
                    <p>Already Have an account? <Link as={Link} to="/login" className='textDec'>Login</Link> </p>
                    <SocialAccount></SocialAccount>
                </Form>
                <br /> 
            </div>
            <br />
        </div>
    );
};

export default Register;