import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function handleLogin(e) {
        e.preventDefault();
        //promise p/ back-end
    }

    return (
        <Sign_in>  
            <span>MyWallet</span>

            <Form onSubmit={handleLogin}>
                <input 
                    name = 'email' 
                    placeholder='E-mail' 
                    type='text'
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

                <button type='submit'>Entrar</button>
            </Form>

            <Link to='/sign-up'>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Sign_in>
    )
}

export const Sign_in = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 0 auto;

    width: 90%;


    span {
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        margin-bottom: 25px;
        color: #ffffff;
        font-family: 'Saira Stencil One', cursive;
    }

    p {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #ffffff;
    }
    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    input {
        height: 45px;
        padding: 16px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 15px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
    }

    button {
        height: 46px;
        background: #A328D6;
        border: none;
        border-radius: 5px;

        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #ffffff;
        margin-bottom: 36px;
    }

`