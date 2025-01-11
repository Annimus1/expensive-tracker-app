import React from "react";
import Transaction from "./Transaction";

function TransactionList() {
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
      <div className=" flex justify-between my-2">
        <span className="border border-slate-300 rounded-full p-2">Sat Jan 11</span>
        <span className="border border-slate-300 rounded-full p-2">2025</span>
      </div>

      {/* list of Trnasactions */}
      <ul className="mt-2 flex flex-col gap-2 max-h-full overflow-y-scroll h-full">
        
        <Transaction title={"Transaction"}/>
        <Transaction title={"Transaction 2"}/>
        <Transaction title={"Transaction 3"}/>
        <Transaction title={"Transaction 4"}/>
        <Transaction title={"Transaction 5"}/>
        <Transaction title={"Transaction 6"}/>
        <Transaction title={"Transaction 7"}/>
        <Transaction title={"Transaction 8"}/>
        <Transaction title={"Transaction 9"}/>
        <Transaction title={"Transaction 0"}/>
        <Transaction title={"Transaction 1"}/>
        <Transaction title={"Transaction 2"}/>
        <Transaction title={"Transaction 3"}/>
        <Transaction title={"Transaction 4"}/>
        <Transaction title={"Transaction 5"}/>
        <Transaction title={"Transaction 6"}/>
        <Transaction title={"Transaction 7"}/>
        <Transaction title={"Transaction 8"}/>
        <Transaction title={"Transaction 9"}/>
        <Transaction title={"Transaction 0"}/>
      </ul>

    </main>
  );
}

export default TransactionList;