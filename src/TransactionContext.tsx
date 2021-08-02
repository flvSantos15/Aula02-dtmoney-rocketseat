import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
 id: number;
 title: string;
 amount: number;
 type: string;
 category: string;
 createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionproviderProps {
 children: ReactNode;
}

interface TransactionContextData {
 transactions: Transaction[];
 createTransaction: (transactions: TransactionInput) => void
}

export const TransactionContext = createContext<TransactionContextData>(
 {} as TransactionContextData
 )

export function TransactionProvider({children}: TransactionproviderProps){
 const [transactions, setTransactions] = useState<Transaction[]>([])

 useEffect(() => {
 //utilizo esse formato pensando numa possivel futura rota
 //Trago o api de axios pra cá e utilizo pra fazer a requisiçoes
  api.get('/transactions')
 .then(response => setTransactions(response.data.transactions))
 }, [])

 function createTransaction(transaction: TransactionInput){
  api.post('/transactions', transaction)
 }

 return(
  <TransactionContext.Provider value={{ transactions, createTransaction }}>
   {children}
  </TransactionContext.Provider>
 )
}