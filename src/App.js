import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Account = React.lazy(() => import("./pages/Account"));
const Shop = React.lazy(() => import("./pages/Shop"));
const Studio = React.lazy(() => import("./pages/Studio"));
const Workshops = React.lazy(() => import("./pages/Workshops"));

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/studio">
            <Studio />
          </Route>
          <Route path="/workshops">
            <Workshops />
          </Route>
        </Switch>
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default App;