export const Transaction = ({ transaction }) => {
  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <li className={sign === "+" ? "plus" : "minus"}>
      {transaction.text} Cash{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">X</button>
    </li>
  );
};
