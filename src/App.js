
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addClientAction,removeClientAction } from './store/customerReducer';
import { addCashAction,getAddAction } from './store/cashReducer';
import { fetchCustomers } from './asincAction/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state=>state.customers.customers);

  const addCash = (cash) => {
   dispatch(addCashAction(cash));
  };
  const getCash = (cash) => {
   dispatch(getAddAction(cash));
  };
  const addClient = (name) => {
    const client ={
      name,
      id:Date.now(),
    }
    dispatch(addClientAction(client));
   };
   const deleteClient = (client) => {
     dispatch(removeClientAction(client.id));
   };

  return (
    <div className="App">
      <h2 style={{fontSize:'3rem'}}>Balance:{cash}</h2>
     <div className='div-btn'>
      <button className='btn' onClick={()=>addCash(Number(prompt()))}>Add cash</button>
      <button className='btn' onClick={()=>getCash(Number(prompt()))}>Get cash</button>
      <button className='btn' onClick={()=>addClient(prompt())}>Add client</button>
      <button className='btn' onClick={()=>dispatch(fetchCustomers())}>Get client</button>
     </div>
     {customers.length > 0     
      ? <div>
       {customers.map(client=>
        <div key={client.id} onClick={()=>{deleteClient(client)}}
         className='customers'
        >{client.name}</div>
       )}
       </div>   
      : <div>
         <h3>NO CLIENTS</h3></div>}
       </div>
  );
}

export default App;
