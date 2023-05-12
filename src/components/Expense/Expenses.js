import React, {useState} from "react"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from "./ExpenseList";
import './ExpenseList.css'
import ExpensesChart from './ExpensesChart'

const Expenses=(props)=>{

  const [filteredYear,setFilteredYear]= useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // console.log(filteredValue);
    setFilteredYear(selectedYear);
  }

  const filteredExpense= props.items.filter(expense =>{
      return expense.date.getFullYear().toString() === filteredYear;
      
  })

    return (
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filteredExpense}/>
        <ExpenseList items={filteredExpense} />
        {filteredExpense.length === 1 && (
          <p className="expenses-list__fallback ">
            Only single Expense here. Please add more...
          </p>
        )}
      </Card>
    );
}

export default Expenses;