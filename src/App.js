import Expenses from "./components/Expense/Expenses";
import React, {useState} from "react";
import AddExpense from "./components/AddExpense/AddExpense";


const App=()=> {
  const [expense, setExpense] = useState(
    [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
        // LocationOfExpenditure:"Bangalore"
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)
      // , LocationOfExpenditure:"Bangalore" 
    },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
        // LocationOfExpenditure:"Bangalore"
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),   
        // LocationOfExpenditure:"Bangalore" 
      },

    ]);
   
    const addExpenseHandler = (newExpense) => {
      setExpense([
        ...expense,
        newExpense
      ])
    }
    return (
      <div>
        <AddExpense onAddExpense={addExpenseHandler} />
        {
        expense.map((exp)=>{  
          return (
            <Expenses key ={exp.id} items={exp}/>
          )
          
        })}
      </div>
    );
  }
export default App;
