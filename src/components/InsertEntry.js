import styled from 'styled-components';
import { Form } from './Login';

export default function InsertEntry() {
    return (
        <Container>
            <span>Nova entrada</span>

            <Form>
                <input
                    name='value'
                    placeholder='Valor'
                ></input>

                <input
                    name='description'
                    placeholder='Descrição'
                ></input>

                <button type='submit'>Salvar entrada</button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    width: 90%;
    height: 98vh;

    display: flex;
    flex-direction: column;

    margin: auto;   

    span {
        font-weight: 700;
        font-size: 26px;
        line-height: 30px;

        margin: 27px 0 40px 0;

        
        color: #FFFFFF;
    }
`
