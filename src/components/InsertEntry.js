import { useState } from 'react';
import styled from 'styled-components';
import { Form } from './Login';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

export default function InsertEntry() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        date: dayjs().format('DD/MM'),
        description: '',
        value: ''
    });

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function handleInsert(e) {
        e.preventDefault();

        //promise back-end
        navigate('/');
    }

    console.log(data)

    return (
        <Container>
            <span>Nova entrada</span>

            <Form onSubmit={handleInsert}>
                <input
                    name='value'
                    placeholder='Valor'
                    type='number'
                    value={data.value}
                    onChange={updateData}
                    //required
                ></input>

                <input
                    name='description'
                    placeholder='Descrição'
                    type='text'
                    value={data.description}
                    onChange={updateData}
                    //required
                ></input>

                <button type='submit'>Salvar entrada</button>
            </Form>
        </Container>
    )
}

export const Container = styled.div`
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