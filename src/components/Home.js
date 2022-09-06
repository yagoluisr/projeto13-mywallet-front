import styled from 'styled-components';
import { ReactComponent as Exit } from './Assets/Exit.svg';
import { ReactComponent as More } from './Assets/More.svg';
import { ReactComponent as Less } from './Assets/Less.svg';

export default function Home() {
    return (
        <Container>
            <Header>
                <span>Olá, Fulano</span>
                <Exit />
            </Header>

            <Historic>
                {/* <span>Não há registros de entrada ou saída</span> */}

            </Historic>

            <Buttons>
                <div>
                    <More />
                    <span>Nova entrada</span>
                </div>
                <div>
                    <Less />
                    <span>Nova saída</span>
                </div>
            </Buttons>

        </Container>
    )
}

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

const Buttons = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    div {
        width: 48%;
        height: 114px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 11px;

        margin-top: 15px;

        border-radius: 5px;
        background-color: #A328D6;

        span {
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
        }

    }
`