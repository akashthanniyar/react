import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

const Expenses=(props)=>{
    return (
        <Card className="expenses">
              <ExpensesFilter />
              {props.items.map((expense) => 
                <ExpenseItem 
                key = {expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
                />

              )} 
            {/* //   LocationOfExpenditure={props.items.LocationOfExpenditure} */}
        </Card>
    )
}

export default Expenses;