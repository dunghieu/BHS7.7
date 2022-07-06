import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductList from "./screens/ProductList";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ProductDetail from "./screens/ProductDetail";
import ProductEdit from "./screens/ProductEdit";
import ProductNew from "./screens/ProductNew";

function App() {
  return (
    <Router>
      <Route path="/" component={ProductList} exact />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route
        path="/product/:id"
        render={(props) => <ProductDetail {...props} />}
      />
      <Route path="/product-new" component={ProductNew} />
      <Route path="/edit-product/:id" component={ProductEdit} />
    </Router>
  );
}

export default App;
