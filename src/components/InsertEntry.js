import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Form } from './Login';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { insertEntry } from './Services/Service';
import UserContext from './Contexts/ContextAPI';

export default function InsertEntry() {
    const { token } = useContext(UserContext);
    const { userId } = useContext(UserContext);
    
    const navigate = useNavigate();

    //let token = 'be924665-afd6-4dfc-bcb2-434051c015ba'
    //'c3b1cc6d-0095-40b4-b157-99fd5c0e37a2'    test
    //'be924665-afd6-4dfc-bcb2-434051c015ba'    Thor

    const [data, setData] = useState({
        userId,
        date: dayjs().format('DD/MM'),
        description: '',
        value: '',
        type: 'credit'
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
        insertEntry(data, token).then(res => {
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        });
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