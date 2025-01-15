import React, { useContext } from "react";
import { createTransaction } from "../../firebase.config";

function AddTransaction() {
  const [visible, setVisible] = React.useState(false);  
  const user = JSON.parse(localStorage.getItem("user")); 

  const [type, setType] = React.useState("income");
  const [account, setAccount] = React.useState("own");
  const [method, setMethod] = React.useState("cash");
  const [date, setDate] = React.useState(new Date());
  const [category, setCategory] = React.useState("test1");
  const [desc, setDesc] = React.useState("");
  const [amount, setAmount] = React.useState(0);

  const showModal = () => setVisible(true);

  const handleClick = () => setVisible(!visible);

  const handleSubmit = (event) => {
    event.preventDefault();
    // add compobations
    createTransaction({type, account, method, date, category, desc, amount});
    // test
    handleClick();
  };

  return (
    <div>
      {/* pop-up */}
      <form
        onSubmit={ (e) => handleSubmit(e)}
        className={`
        ${visible ? "absolute" : "hidden"} top-16 left-14  w-3/4  h-[80%] bg-slate-200 p-4 rounded-md shadow-md shadow-gray-700 overflow-scroll
        md:left-72 md:w-[101.5rem] md:h-[50rem]
        `}
      >
        <div className="flex flex-col gap-8">
          {/* title & exit button */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl select-none"> Add New Transaction</h2>
            <span className="hover:bg-red-400 p-2" onClick={() => handleClick()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </span>
          </div>

          {/* Account type own, deudas, prestamo */}
          <div className="flex flex-col bg-slate-300 p-2 rounded-md">
            <label className="text-lg select-none" htmlFor="account">Account</label>
            <select
              onChange={ (text)=> setAccount(text.target.value)}
              defaultValue={account}
              className="bg-slate-200 rounded-md px-2"
              id="account"
            >
              <option value="own">Own</option>
              <option value="debts">Debts</option>
              <option value="loans">Loans</option>
            </select>
          </div>

          {/* type{income, egress} */}
          <div className="flex flex-col bg-slate-300 p-2 rounded-md">
            <label className="text-lg select-none" htmlFor="type">Type of Transaction</label>
            <select
              onChange={ (text)=> setType(text.target.value)}
              defaultValue={type}
              className="bg-slate-200 rounded-md px-2"
              id="type"
            >
              <option value="income">Income</option>
              <option value="egress">Egress</option>
            </select>
          </div>

          {/* method */}
          <div className="flex flex-col bg-slate-300 p-2 rounded-md">
            <label className="text-lg select-none" htmlFor="method">Method</label>
            <select
              onChange={ (text)=> setMethod(text.target.value)}
              defaultValue={method}
              className="bg-slate-200 rounded-md px-2"
              id="method"
            >
              <option value="cash">Cash</option>
              <option value="transfer">Transfer</option>
            </select>
          </div>

          {/* date */}
          <div className="flex flex-col bg-slate-300 p-2 rounded-md">
            <label className="text-lg select-none" htmlFor="date">Date</label>
            <input
              onChange={ text => setDate(new Date(text.target.value.replace("-","/"))) }
              className="bg-slate-200 rounded-md px-2"
              type="date"
              id="date"
            />
          </div>

          {/* category */}
          <div className="flex flex-col bg-slate-300 p-2 rounded-md">
            <label className="text-lg select-none" htmlFor="">Category</label>
            <select
              onChange={ (text)=> setCategory(text.target.value)}
              defaultValue={category}
              className="bg-slate-200 rounded-md px-2"
              id=""
            >
              <option value={"test1"}>test1</option>
              <option value={"test2"}>test2</option>
              <option value={"test3"}>test3</option>
              <option value={"add"}>add</option>
            </select>
          </div>

          {/* nota/descripcion */}
          <div className="flex flex-col bg-slate-300 p-2 rounded-md">
            <label className="text-lg select-none" htmlFor="desc">Description</label>
            <textarea
              value={desc}
              onChange={ text => setDesc(text.target.value)}
              className="bg-slate-200 rounded-sm px-2"
              id="desc"></textarea>
          </div>

          {/* Amount */}
          <div className="flex flex-col bg-slate-300 p-2 rounded-md">
            <label className="text-lg select-none" htmlFor="amount">Amount</label>
            <input
              value={amount}
              onChange={(text) => setAmount(Number.parseFloat(text.target.value))}
              required
              className="bg-slate-200 rounded-md px-2"
              type="number"
              step=".01"
              // min={0.01}
              name=""
              id="amount"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-between items-center p-2 rounded-md">
            <input
              className="py-4 px-6 rounded-md bg-red-300 hover:cursor-pointer "
              type="reset"
              value="Reset"
            />

            <input
              className="py-4 px-6 rounded-md bg-green-300 hover:cursor-pointer "
              type="submit"
              value="Submit"
            />

          </div>

        </div>
      </form>

      {/* Button */}
      <button
        className="flex gap-x-2 items-center border border-slate-300 rounded-full py-2 px-4"
        onClick={() => showModal()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add
      </button>
    </div>
  );
}



export default AddTransaction;
