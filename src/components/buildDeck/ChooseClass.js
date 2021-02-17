import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {addCard} from '../../actions/';
import demonhunter from '../../resources/images/demonhunter.png';
import druid from '../../resources/images/druid.jpg';
import hunter from '../../resources/images/hunter.jpg';
import mage from '../../resources/images/mage.jpg';
import paladin from '../../resources/images/paladin.jpg';
import priest from '../../resources/images/priest.jpg';
import rogue from '../../resources/images/rogue.jpg';
import shaman from '../../resources/images/shaman.jpg';
import warlock from '../../resources/images/warlock.jpg';
import warrior from '../../resources/images/warrior.jpg';

export const ChooseClass = () =>{

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = 
    ['Demon Hunter', 'Druid', 'Hunter', 'Mage', 'Paladin', 
    'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'];
    const classesImages = 
    [demonhunter, druid, hunter, mage, paladin, priest, rogue, shaman, warlock, warrior];

    const chooseClass = (e) =>{

        let targetedClass = e.target.dataset.class;
        const targetedClassIndex = e.target.dataset.index;

        targetedClass = targetedClass === "Demon Hunter" ? 'demonhunter' : targetedClass;

        localStorage.setItem('deck', JSON.stringify([]));
        dispatch(addCard(undefined));

        const location = {
            pathname: '/build_deck/choose_class/create_deck',
            state: {
                class: targetedClass,
                index: targetedClassIndex
            }
        }
        history.push(location);
    }

    return(
        <div className="chooseClassMainContainer">
            {
            classes.map((value, index) =>{
                return <div 
                data-class = {value}
                data-index = {index}
                style = {{backgroundImage:`url(${classesImages[index]})`}}
                key={index} 
                onClick={chooseClass}><p>{value}</p>
                </div>
            }) 
            }
        </div>
    )
}