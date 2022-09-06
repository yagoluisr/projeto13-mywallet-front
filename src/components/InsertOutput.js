import styled from 'styled-components';
import { Container } from './InsertEntry';
import { Form } from './Login';

export default function InsertOutput() {
    return (
        <Container>
            <span>Nova saída</span>

            <Form>
                <input
                    name='value'
                    placeholder='Valor'
                ></input>

                <input
                    name='description'
                    placeholder='Descrição'
                ></input>

                <button type='submit'>Salvar saída</button>
            </Form>
        </Container>
    )
}