import dayjs from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './InsertEntry';
import { Form } from './Login';

export default function InsertOutput() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        date: dayjs().format('DD/MM'),
        value: '',
        description: ''
    })

    function updateDataValue(e) {
        setData({
            ...data,
            [e.target.name]: Number(e.target.value)
        })
    }

    function updateDataDescription(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function handleOutput(e) {
        e.preventDefault();

        //promise back-end
        navigate('/');
    }
    

    return (
        <Container>
            <span>Nova saída</span>

            <Form onSubmit={handleOutput}>
                <input
                    name='value'
                    placeholder='Valor'
                    type='text'
                    value={data.value}
                    onChange={updateDataValue}
                    //required
                ></input>

                <input
                    name='description'
                    placeholder='Descrição'
                    type='text'
                    value={data.description}
                    onChange={updateDataDescription}
                    //required
                ></input>

                <button type='submit'>Salvar saída</button>
            </Form>
        </Container>
    )
}