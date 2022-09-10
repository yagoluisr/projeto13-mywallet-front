import styled from 'styled-components';
import { Form, Sign_in } from './Login';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from './Services/Service';


export default function Register() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: '',
        password: ''
    });

    function updateData(e) {
        
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleRegister(e) {
        e.preventDefault();

        if(data.password !== data.confirmPassword){
            return alert('A senha não confere');
        }


        register(data).then((res) => {
            alert('Usuário criado com sucesso !');
            navigate('/sign-in');
        }).catch((error) => {
            alert(error.response.data)
        })
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
                    required
                ></input>

                <input 
                    name = 'email' 
                    placeholder='E-mail' 
                    type='email'
                    value={data.email}
                    onChange={updateData}
                    required
                ></input>

                <input
                    name='password'
                    placeholder='Senha'
                    type='password'
                    value={data.password}
                    onChange={updateData}
                    required
                ></input>

                <input
                    name='confirmPassword'
                    placeholder='Confirmar a senha'
                    type='password'
                    value={data.confirmPassword}
                    onChange={updateData}
                    required
                ></input>

                <button type='submit'>Cadastrar</button>
        </Form>


        <Link to='/sign-in'>
            <p>Já tem uma conta? Entre agora!</p>
        </Link>

        </Sign_in>
    )
}