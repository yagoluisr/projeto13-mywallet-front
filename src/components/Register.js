import styled from 'styled-components';
import { Form, Sign_in } from './Login';
import { Link } from 'react-router-dom';


export default function Register() {
    return (
        <Sign_in>
            
            <span>MyWallet</span>

            <Form>

                <input
                    name='name'
                    placeholder='Nome'
                ></input>

                <input 
                    name = 'email' 
                    placeholder='E-mail' >
                </input>

                <input
                    name='password'
                    placeholder='Senha'
                ></input>

                <input
                    name='confirm password'
                    placeholder='Confirmar a senha'
                ></input>

                <button type='submit'>Cadastrar</button>
        </Form>


        <Link to='/sign-in'>
            <p>Já tem uma conta? Entre agora!</p>
        </Link>

        </Sign_in>
    )
}