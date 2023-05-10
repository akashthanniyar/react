import React  from "react";
const ExpenseDetails=(props)=>{

  // const [amount, setAmount] = useState(props.amount);

  // const clickHandler = ()=>{  
  //   setAmount("100"); 
  //   console.log(amount);
  // };  
    return (
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          {/* <h2>{props.LocationOfExpenditure}</h2> */}
          <div className="expense-item__price">${props.amount}</div>
          {/* <button onClick={clickHandler}>Change Expense</button>   */}
        </div>
    );
}
export default ExpenseDetails;