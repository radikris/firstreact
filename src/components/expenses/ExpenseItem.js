import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

import React, {useState} from 'react';
import Card from 'components/UI/Card';

function ExpenseItem(props) {

    
    const clickHandler = () => {
        console.log("clickedloool");
        setTitle("Updated name");
    }
    
    const [title, setTitle] = useState(props.title);
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Edit</button>
        </Card>
    );
}

export default ExpenseItem;