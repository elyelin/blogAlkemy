import { Toaster } from "react-hot-toast";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import DetailsPage from "./pages/DetailsPage";
import EditPostPage from "./pages/EditPostPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewPostPage from "./pages/NewPostPage";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Switch>
          <Route path="/login" component={LoginPage} exact />
          <PrivateRoute path="/" component={HomePage} exact />
          <PrivateRoute path="/post/new" component={NewPostPage} exact />
          <PrivateRoute path="/post/:id" component={DetailsPage} exact />
          <PrivateRoute path="/post/:id/edit" component={EditPostPage} exact />
        </Switch>
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
