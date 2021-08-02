import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { TransactionContext } from "../../TransactionContext";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const { createTransaction } = useContext(TransactionContext)

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    //crio um estado pra saber se o botao de entrada ou saida de nova transaçao foi clicado
    const [type, setType] = useState('deposit')

    //funçao que adiciona uma nova transacao
    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        createTransaction({
            title,
            amount,
            category,
            type,
        })
    }

    return(
        <Modal //Modal de Nova Transacao
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar Modal"/>
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transaçao</h2>

                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        //pelo clique seto o estado para deposit
                        onClick={() => {
                            setType('deposit')
                        }}
                        //propriedade que diz se esta ativo o botao ou nao
                        //se o tipo for deposit vai retornar true
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        //pelo clique seto o estado para withdraw
                        onClick={() => {
                            setType('withdraw')
                        }}
                        //se o tipo for withdraw vai retornar true
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saida"/>
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )
}


//Parei no 04:15 do video salvando dados no form