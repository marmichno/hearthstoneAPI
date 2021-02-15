import {getClassCards} from '../../requests/getClassCards';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {addCard} from '../../actions';

export const ShowCards = ({choosenClass}) => {

    const [cards, setCards] = useState(null);
    const [whichCards, setWhichCards] = useState(choosenClass);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const getCards = async () => {
        const response = await getClassCards(choosenClass.toLowerCase(), whichCards, page);
        setCards(response);
    }

    useEffect(() => {
        getCards();
    }, [page])

    useEffect(() => {
        getCards()
    }, [whichCards]);

    const changePage = (e) => {

        if(e.target.dataset.direction === "left"){
            if((page - 1) === 0){
                return null;
            }
            setPage(page - 1);
        }else if(e.target.dataset.direction === "right"){
            if((page + 1) > cards.pageCount){
                return null;
            }
            setPage(page + 1);
        }
    }

    const changeCards = (e) => {
        setWhichCards(e.target.innerText.toLowerCase());
        setPage(1);
    }

    const addCardToDeck = (e) => {
        const cardData = e.target.dataset;
        const card = {
            name: cardData.name,
            rarity: cardData.rarity,
            manaCost: cardData.manacost,
            cropImage: cardData.cropimage,
            numberInDeck: 1
        }
        dispatch(addCard(card));
    }


    if(cards !== null){
        return(
            <div className="cardsMainContainer">
                <div data-direction="left" className="arrows left" onClick={changePage}></div>

                <div className="cardsContainer">
                    {
                        cards.cards.map(value => {
                            return <div
                                style = {{backgroundImage: `url(${value.image})`}} 
                                key={value.id}
                                data-name={value.name}
                                data-rarity={value.rarityId}
                                data-manacost={value.manaCost}
                                data-cropimage={value.cropImage}
                                onClick={addCardToDeck}>
                            </div>
                        })
                    }
                </div>

                <div data-direction="right" className="arrows right" onClick={changePage}></div>
                <div className="changeCards">
                    <div onClick={changeCards}>Neutral</div>
                    <div onClick={changeCards}>{choosenClass}</div>
                </div>
            </div>
        )
    }else{
        return null;
    }
}