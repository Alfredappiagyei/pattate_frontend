import { BrowserRouter, Routes, Route } from "react-router-dom";


import InstitutionManagement from "./screens/institutionManagementPage/InstitutionManagement"
import OrderManagementLive from "./screens/ordermanagement/OrdermanagementLive"
import OrderManagementLocked from "./screens/ordermanagement/OrdermanagementLocked"
import OrderManagementDelivery from "./screens/ordermanagement/OrderManagementDelivery"



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<InstitutionManagement />} />  
       <Route path="ordermanagementLive" element={<OrderManagementLive />}  /> 
      <Route path="ordermanagementLocked" element={<OrderManagementLocked />}  />
      <Route path="ordermanagementDelivery" element={<OrderManagementDelivery />}  />
   


    </Routes>
    </BrowserRouter>
  );
}

export default App;
