import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyles } from "./styles/global";
import { TransactionProvider } from "./TransactionContext";

Modal.setAppElement('#root') //estou dizendo ao Modal que o root é o id do html da aplicaçao dentro do public

export function App() {
  const [isNewTransacitonModalOpen, setIsNewTransacitonModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransacitonModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransacitonModalOpen(false)
    }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> {/*importaçao do componente header*/}
      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransacitonModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyles/> {/*importaçao do componente de estilo global*/}
    </TransactionProvider>
  );
}