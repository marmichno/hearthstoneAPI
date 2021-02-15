import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {addCard} from '../../actions/';

export const ChooseClass = () =>{

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = 
    ['Demon Hunter', 'Druid', 'Hunter', 'Mage', 'Paladin', 
    'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'];

    const chooseClass = (e) =>{

        localStorage.setItem('deck', JSON.stringify([]));
        dispatch(addCard(undefined));

        const location = {
            pathname: '/build_deck/choose_class/create_deck',
            state: {
                class: e.target.innerHTML
            }
        }
        history.push(location);
    }

    return(
        <div className="chooseClassMainContainer">
            {
            classes.map((value, index) =>{
                return <div key={index} onClick={chooseClass}>{value}</div>
            }) 
            }
        </div>
    )
}