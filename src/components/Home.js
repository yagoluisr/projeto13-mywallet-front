import styled from 'styled-components';
import { ReactComponent as Exit } from './Assets/Exit.svg';
import { ReactComponent as More } from './Assets/More.svg';
import { ReactComponent as Less } from './Assets/Less.svg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function Home() {
    const [result, setResult] = useState(10);


    
    const extract = [
        {
            date: '30/11',
            description: 'Mercado',
            value: -542.54
        },
        {
            date: '27/11',
            description: 'Compras Churrasco',
            value: -67.60
        },
        {
            date: '15/11',
            description: 'Salário',
            value: 3000.00
        }
    ]

    let a = 0;

    extract.forEach( obj => {
        a += obj.value
    })

    return (
        <Container>
            <Header>
                <span>Olá, Fulano</span>
                <Exit />
            </Header>

            <Historic>
                { extract.length === 0 ? 
                    <span>Não há registros de entrada ou saída</span>
                :
                <>
                    <Extract>
                        
                        {extract.map((obj,key) => (
                            <div key={key}>
                                <Date>{obj.date}</Date>
                                <Description>
                                    <h6>{obj.description}</h6>
                                    <h5>{obj.value}</h5>
                                </Description>
                            </div>
                        ))}

                    </Extract>
                
                    <Balance>
                        <Result>Saldo</Result>
                        <Value result={result} >{ a }</Value>
                    </Balance>
                </>
                }

            </Historic>

            <Buttons>
                <Link to='/novaentrada'>
                    <div >
                        <More />
                        <span>Nova entrada</span>
                    </div>
                </Link>
                
                <Link to='/novasaida'>
                    <div>
                        <Less />
                        <span>Nova saída</span>
                    </div>
                </Link>
                
            </Buttons>

        </Container>
    )
}

const Balance = styled.div`
    width: 95%;

    display: flex;
    justify-content: space-between;
`

const Result = styled.div`
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
`

const Value = styled.div`
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #000000;  // #C70000
    color: ${ props => props.result === 0 ?
     '#000000' 
    : 
    props.result < 0 ?
     '#C70000' 
     : 
     '#03AC00' }
`

const Date = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`

export const Container = styled.div`
    width: 90%;
    height: 98vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: auto;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;

    span {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;

        color: #FFFFFF;
    }

`

const Historic = styled.div`
    width: 100%;
    height: 65vh;

    border-radius: 5px;
    margin-top: 25px;

    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        display: flex;
        width: 150px;
        
        font-weight: 400;
        font-size: 20;
        line-height: 23px;

        color: #868686;
    }

`

const Extract = styled.div`
    width: 95%;
    height: 90%;

    div {
        display: flex;
        margin-bottom: 5px;
    } 
     
`
const Description = styled.div`
    width: 100%;
    padding-left: 15px;

    display: flex;
    justify-content: space-between;

    h6 {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    }

    h5 {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C70000 //#03AC00; 
    }
`



const Buttons = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    a {
        width: 48%;
        height: 114px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin-top: 15px;

        border-radius: 5px;
    }

    div {
        
        width: 100%;
        height: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        padding: 10px;

        border-radius: 5px;
        background-color: #A328D6;

        span {
            width: 20px;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
        }

    }
`