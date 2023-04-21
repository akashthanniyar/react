import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate"
import Card from '../UI/Card'
import "./ExpenseItem.css"

import React from "react";
const ExpenseItem=(props)=>{
  return (
       <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails amount={props.amount} LocationOfExpenditure={props.LocationOfExpenditure} title={props.title}/>
      <button>Delete Expense</button>  
    </Card>
  );
}
export default ExpenseItem;
