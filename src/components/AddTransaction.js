
import { useState, useContext } from "react"
import { GlobalContext } from "../context/GlobalState";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddTransaction = () => {

const [text, setText] = useState('');
const [amount, setAmount] = useState(0);

const {addTransaction} = useContext(GlobalContext);

const onSubmit = e => {
    e.preventDefault();

    if (text.trim() === "") {
        // Text is empty or contains only whitespace
        toast.error("Please enter a valid text.");
        return;
      }

    // if (amount <= 0) {
    //     // Amount is less than or equal to 0
    //     toast.error("Please enter a valid amount greater than 0.");
    //     return;
    //   }

    const newTransaction = {
        id : Math.floor(Math.random() * 100000000),
        text,
        amount : +amount
    }

    addTransaction(newTransaction);

    setText("");
    setAmount(0);
}

    return(
        <>
         <ToastContainer />
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input type="text" id="text" value={text} 
                        onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount
                        <br />
                        (negative - expense, positive - income)
                        </label>
                        
                        <input type="number" id="amount" value = {amount} onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
        </>
    )
}