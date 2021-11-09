import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import MyOrder from './components/MyOrder/MyOrder';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        <Footer></Footer>
      </Router>
  );
}

export default App;
