import ExpenseItem from "./ExpenseItems";
import './ExpenseList.css'

const ExpenseList = (props) => {

  if (props.item.length === 0) {
    return <h2 className='expenses-list__fallback'>No Expense Found</h2>;
  }
  return (
    <ul className='expenses-list'>
      {props.item.map((items) => (
        <ExpenseItem
          key={items.id}
          title={items.title}
          date={items.date}
          amount={items.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
