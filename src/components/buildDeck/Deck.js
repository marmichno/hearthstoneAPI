import {useSelector, useDispatch} from 'react-redux';
import {removeCard} from '../../actions/index'

export const Deck = () => {

    const rarities = ['gray', '', 'blue', 'purple', 'yellow']

    const deck = useSelector(state => state.manageCardsReducer);
    const dispatch = useDispatch();
    console.log(deck);

    const deleteCard = (e) =>{
        const card = e.target.dataset.name;
        console.log(card);
        dispatch(removeCard(card))
    }

    if(deck !== null){
    return(
        <div className="deckContainer">
            <div className="portrait">Warrior</div>
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