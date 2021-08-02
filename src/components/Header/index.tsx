import logoImg from '../../assets/logo.svg' //importaçao da logo como variavel

import { Container, Content } from './styles' //importaçao das estilizacoes

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){
    

    return(
        //o container é o header, foi nomeado desse jeito pq é esse o nome da estilizaçao dele
        //por isso todo componente vai receber o msm nome da estilizaçao correspondente
        <Container> {/* A explicaçao esta acima */}
            <Content>
                <img src={logoImg} alt="dt money"/> {/*importaçao da logo*/}

                <button 
                    type="button"
                    onClick={onOpenNewTransactionModal}
                >
                    Nova Transaçao
                </button>
            </Content>
        </Container>
    )
}