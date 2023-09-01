import { Routes, Route } from 'react-router-dom';

import IndexPage from './pages/dashBoard';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import CustomerList from './pages/CustomerList';
import EditProduct  from './pages/EditCustomer';
import EditCustomer from './pages/EditCustomer';
import AddCustomer from './pages/AddCustomer';
import Aside from './components/Aside';
import OrdersList from './pages/OrdersList';
import EditOrder from './pages/EditOrder';
import OffersList from './pages/OffersList';
import AddOffer from './pages/AddOffer';
import EditOffer from './pages/EditOffer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customers/:id" element={<EditCustomer />} />

        <Route path="/addCustomer" element={<AddCustomer />} />
        <Route  path='/orders'  element={<OrdersList/>}/>
        <Route  path='/orders/:id'  element={<EditOrder/>}/>

        <Route  path='/offers'  element={<OffersList/>}/>
        <Route  path='/addOffer'  element={<AddOffer/>}/>
        <Route  path='/Offers/:id'  element={<EditOffer/>}/>
      </Routes>
    </>
  );
}

export default App;
