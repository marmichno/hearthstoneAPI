import {postToken} from './requests/postToken';
import {ChooseMode} from './components/ChooseMode';
import {ChooseClass} from './components/buildDeck/ChooseClass';
import {CreateDeck} from './components/buildDeck/CreateDeck';
import {ChooseCardSet} from './components/openPacks/ChooseCardSet';
import {OpenPacks} from './components/openPacks/OpenPacks';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import './resources/styles.scss';


function App() {

  if(localStorage.getItem('token') === null || localStorage.getItem('token_expire_date') === null || Date.now() > localStorage.getItem('token_expire_date')){
    postToken();
    axios.defaults.params = 
        {
            "access_token":localStorage.getItem('token')
        }
  }else{
    axios.defaults.params = 
        {
            "access_token":localStorage.getItem('token')
        }
  }
  
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ChooseMode}/>
        <Route path='/build_deck_mode/choose_class' exact component={ChooseClass}/>
        <Route path='/build_deck/choose_class/create_deck' exact component={CreateDeck}/>
        <Route path='/choose_card_set' exact component={ChooseCardSet}/>
        <Route path='/choose_card_set/open_packs' exact component={OpenPacks}/>
      </Switch>
    </Router>
  );
}

export default App;
