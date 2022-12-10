import Home from "./routes/home/home.component";
import { Naviagtion } from "./routes/navigation/naviagtion.component";
import { Authentication } from "./routes/Auth/Auth.component";
import { Routes, Route } from "react-router-dom";
import { Shop } from "./routes/shop/shop.component";
import { CheckOut } from "./routes/checkOut/checkout.component";
const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Naviagtion />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  )
}

export default App;
