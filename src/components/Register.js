import styled from 'styled-components';
import { Form, Sign_in } from './Login';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Register() {

    const [data, setData] = useState({
        name: '',
        password: ''
    });

    console.log(data)

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleRegister(e) {
        e.preventDefault();

        //promise p/ back-end
    }

    return (
        <Sign_in>
            
            <span>MyWallet</span>

            <Form onSubmit={handleRegister}>

                <input
                    name='name'
                    placeholder='Nome'
                    type='text'
                    value={data.name}
                    onChange={updateData}
                    //required
                ></input>

                <input 
                    name = 'email' 
                    placeholder='E-mail' 
                    type='email'
                    value={data.email}
                    onChange={updateData}
                    //required
                ></input>

                <input
                    name='password'
                    placeholder='Senha'
                    type='text'
                    value={data.password}
                    onChange={updateData}
                    //required
                ></input>

                <input
                    name='confirm password'
                    placeholder='Confirmar a senha'
                    type='text'
                    value={data.confirmPassword}
                    onChange={updateData}
                    //required
                ></input>

                <button type='submit'>Cadastrar</button>
        </Form>


        <Link to='/sign-in'>
            <p>Já tem uma conta? Entre agora!</p>
        </Link>

        </Sign_in>
    )
}