import React from "react";
import Transaction from "./Transaction";
import AddTransaction from "./AddTransaction";

function TransactionList() {
  let date = new Date();
  const [year, setYear] = React.useState(date.getFullYear());
  const [transactions, setTransactions] = React.useState([])

  return (
    <main className="bg-slate-100 mt-5 h-[59vh] px-5 pb-28
      md:mx-52 md:rounded-md md:h-[72vh] md:overflow-y-hidden
    ">
      {/* title */}
      <div className=" flex justify-between pt-2">
        <h1 className="md:text-lg md:font-semibold">Transactions</h1>
        <span className="text-slate-400 hover:cursor-pointer">View All</span>
      </div>

      {/* filters */}
      <div className=" flex justify-between my-2 gap-2">
        <div className="flex gap-5 md:gap-8">
          <select className="border border-slate-300 rounded-full p-2 bg-slate-100 pr-5">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>

          <input
            className="border border-slate-300 rounded-full p-2 bg-slate-100 pl-5"
            type="number"
            min="1900"
            max="2099"
            step="1"
            value={year}
            onChange={(text) => setYear(Number.parseInt(text.target.value))}
          />
        </div>

        <AddTransaction />
      </div>

      {/* list of Trnasactions */}
      <ul className="mt-2 flex flex-col gap-2 max-h-full overflow-y-scroll h-full">

        {
          transactions.length > 0 ? 
            transactions.map((text, index) => <Transaction key={index} title={text} />) :
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-md font-semibold text-gray-500">No Transactions have been done yet.</p>
            </div>
        }

      </ul>

    </main>
  );
}

export default TransactionList;
