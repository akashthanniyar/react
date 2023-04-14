import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import './Expenses.css'

function Expenses(props){
    return (
        <Card className="expenses">
              <ExpenseItem 
              title={props.items.title} 
              amount={props.items.amount} 
              date={props.items.date}
              LocationOfExpenditure={props.items.LocationOfExpenditure}
              />
        </Card>
    )
}

export default Expenses;