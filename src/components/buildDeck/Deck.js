import {useSelector, useDispatch} from 'react-redux';
import {removeCard} from '../../actions/index'
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

export const Deck = ({classIndex}) => {

    const rarities = ['gray', '', 'blue', 'purple', 'yellow'];
    const classesImages = 
    [demonhunter, druid, hunter, mage, paladin, priest, rogue, shaman, warlock, warrior];

    const deck = useSelector(state => state.manageCardsReducer);
    const dispatch = useDispatch();
    console.log(deck);

    const deleteCard = (e) =>{
        const card = e.target.dataset.name;
        dispatch(removeCard(card))
    }

    if(deck !== null){
    return(
        <div className="deckContainer">
            <div 
            style = {{backgroundImage:`url(${classesImages[classIndex]})`}}
            className="portrait"></div>
           {
            deck.map(value =>{
                let rarity = parseInt(value.rarity) - 1;
                return <div style = {{backgroundImage: `url(${value.cropImage})`}}>
                    <div><b>{value.manaCost}</b></div>
                    <div data-name={value.name} onClick={deleteCard}><p><b>{value.name}</b>{(value.numberInDeck === 1) ? '' : ' x2'}</p></div>
                    <div style = {{backgroundColor: `${rarities[rarity]}`}}></div>
                </div>
           })}
        </div>
    )
    }else{
        return null
    }
}