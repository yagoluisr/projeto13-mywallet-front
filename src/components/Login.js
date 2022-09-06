import styled from 'styled-components';


export default function Login() {
    return (
        <Sign_in>  
            <span>MyWallet</span>

            <Form>
                <input 
                    name = 'email' 
                    placeholder='E-mail' >
                </input>

                <input
                    name='password'
                    placeholder='Senha'
                ></input>

                <button type='submit'>Entrar</button>
            </Form>

            <p>Primeira vez? Cadastre-se!</p>

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