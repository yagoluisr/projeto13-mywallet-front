import dayjs from 'dayjs';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from './Contexts/ContextAPI';
import { Container } from './InsertEntry';
import { Form } from './Login';
import { insertOutput } from './Services/Service';

export default function InsertOutput() {
    const { token } = useContext(UserContext);
    const { userId } = useContext(UserContext);
    
    const navigate = useNavigate();

    const [data, setData] = useState({
        userId,
        date: dayjs().format('DD/MM'),
        value: '',
        description: '',
        type: 'debit'
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

        insertOutput(data, token).then(res => {
            console.log(res.data)
            navigate('/');
        }).catch(error => {
            console.log(error);
        });
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