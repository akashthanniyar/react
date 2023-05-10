import React, {useState} from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");

    const titleValue = (event)=>{
        setEnteredTitle(event.target.value);
    }
    const [enteredAmount, setEnteredAmount] = useState("");

    const amountValue = (event)=>{
        setEnteredAmount(event.target.value);
    }
    const [enteredDate, setEnteredDate] = useState("");

    const dateValue = (event)=>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event)=>{

        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Expense Title</label>
                <input type="text" value ={enteredTitle} onChange={titleValue}/>
            </div> 
            <div className="new-expense__controls">
                <label>Expense Amount</label>
                <input type="number" min="0.01" step="0.01"  value ={enteredAmount} onChange={amountValue}/>
            </div> 
            <div className="new-expense__controls">
                <label>Expense Date</label>
                <input type="Date" min="2019-01-01" max="2023-12-31"  value ={enteredDate} onChange={dateValue}/>
            </div> 
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
            
        </div>
    </form>
    )
   
};
export default ExpenseForm;