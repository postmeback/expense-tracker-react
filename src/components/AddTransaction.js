
import { useState } from "react"

export const AddTransaction = () => {

const [text, setText] = useState('');
const [amount, setAmount] = useState(0);

    return(
        <>
            <h3>
                <form>
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
                </form>
            </h3>
        </>
    )
}