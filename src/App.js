import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

const Hats = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop/:what" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
