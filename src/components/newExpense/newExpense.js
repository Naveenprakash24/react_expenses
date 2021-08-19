import './newExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const addExpenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddexpense(addExpenseData)
}

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpensesDate={ saveExpenseDateHandler}/>
        </div>
        
    );
};

export default NewExpense;