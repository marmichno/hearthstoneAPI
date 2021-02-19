import {useState, useEffect} from 'react';
import {getSetCards} from '../../requests/getSetCards';

export const OpenPacks = (state) => {

    const set = state.location.state.set;
    const cardPack = state.location.state.cardPack;
    const [cards, setCards] = useState(undefined);

    const getCards = async () => {
        const getCardsResponse = await getSetCards(set.slug, set.collectibleCount);
        setCards(getCardsResponse);
    }

    useEffect(() => {
        getCards();
    },[])

    useEffect(() => {
        console.log(cards);
    }, [cards])

    const openPack = (e) =>{
        e.target.classList.add('openPack')
    }

    return(
        <div className="packMainContainer">
            <div className="pack"
                onClick={openPack}
                style = {{backgroundImage: `url(${cardPack})`}}
            >

            </div>
        </div>
    )
}