import Avatar from '../components/Avatar';
import Card from '../components/Card';
import TransactionList from '../components/TransactionList';

export default function Transactions() {   
  return (
    <div className="w-full h-[100vh] bg-gray-800 overflow-scroll">

      {/* Avatar */}
      <Avatar />

      <div>

        {/* card */}
        <Card /> 

        {/* tansactions */}
        <TransactionList />
        
      </div>
    </div>
  );
}