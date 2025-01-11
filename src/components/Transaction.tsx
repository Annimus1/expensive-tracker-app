import React from "react"
let date = new Date();

type Props = {
  title: string,
}

function Transaction({title}:Props) {
  return (
    <li className="flex justify-between items-center rounded-md bg-gray-200 p-2">
      <div className="flex gap-4">
        <img className=" h-16 w-16 rounded-md" src="https://placehold.co/60" alt="icon" />
        <div>
          <h3 className="text-lg font-semibold text-black">{title}</h3>
          <span className="text-sm text-gray-900">Account</span>
        </div>
      </div>

      <div className="text-right h-16">
        <h3 className="text-lg font-semibold text-green-500">230</h3>
        <span className="text-sm text-gray-900">{date.toDateString()}</span>
      </div>
    </li>
  );
}

export default Transaction;