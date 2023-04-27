import React from "react";
import "./ExpenseForm.css"

const ExpenseForm = () => {

    const titleValue = (event)=>{
        console.log(event.target.value);
    }
    const amountValue = (event)=>{
        console.log(event.target.value);
    }
    const dateValue = (event)=>{
        console.log(event.target.value);
    }

    return (
        <form>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Expense Title</label>
                <input type="text" onChange={titleValue}/>
            </div> 
            <div className="new-expense__controls">
                <label>Expense Amount</label>
                <input type="number" min="0.01" step="0.01"  onChange={amountValue}/>
            </div> 
            <div className="new-expense__controls">
                <label>Expense Date</label>
                <input type="Date" min="2023-01-01" max="2023-12-31" onChange={dateValue}/>
            </div> 
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
   
};
export default ExpenseForm;