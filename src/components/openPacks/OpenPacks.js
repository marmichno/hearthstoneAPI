import {useState, useEffect} from 'react';
import {getSetCards} from '../../requests/getSetCards';
import {randomCards} from './randomCards';
import {getCardBacks} from '../../requests/getCardBacks';

export const OpenPacks = (state) => {

    const set = state.location.state.set;
    const cardPack = state.location.state.cardPack;
    const [cards, setCards] = useState(undefined);
    const [fiveCards, setFiveCards] = useState(undefined);
    const [cardBack, setCardBack] = useState(undefined);
    const [showPack, setShowPack] = useState(true);
    const [classicCardBack, setClassicCardBack] = useState(undefined);
    const [cardsFlipped, setCardsFlipped] = useState(0);
    const [packsOpenedData, setPacksOpenedData] = useState(
        {
        packsOpened:0,
        commons: 0,
        rares: 0,
        epics: 0,
        legendaries: 0,
        dustValue: 0
    });

    const getCards = async () => {
        const getCardsResponse = await getSetCards(set.slug, set.collectibleCount);
        setCards(getCardsResponse);
    }

    useEffect( async () => {
        getCards();
        const response = await getCardBacks('classic');
        setClassicCardBack(response);
    },[]);

    const openFirstPack = (e) => {
        e.target.classList.add('openPack');
        setFiveCards(randomCards(cards));

        setTimeout(() => {
            setShowPack(false);
        }, 1500)
    }

    const openPack = () =>{
        if(cardsFlipped !== 5){
            return null;
        }

        setPacksOpenedData(
            {
                ...packsOpenedData,
                packsOpened:packsOpenedData.packsOpened + 1,
            }
        )

        setCardsFlipped(0);

        setTimeout(() => {
            setFiveCards(randomCards(cards))
        }, 800);
                
        const cardsHTML = document.querySelectorAll('.card').forEach(element => element.classList.remove('flipOnClick'));
        const cardsFront = document.querySelectorAll('.front').forEach(element => element.classList.remove('fadeOutOnClick'));
        const cardsBack = document.querySelectorAll('.back').forEach(element => element.classList.remove('fadeInOnClick'));
    }

    const flipCard = (e) =>{
        const card = e.target.dataset.index;
        const cardsHTML = document.querySelectorAll('.card');

        if(cardsHTML[card].classList.length === 1){

            switch(fiveCards[card].rarityId){
                case 1:
                    setPacksOpenedData(
                        {
                            ...packsOpenedData,
                            commons: packsOpenedData.commons + 1,
                            dustValue: packsOpenedData.dustValue + 5
                        }
                    )
                    break;
                case 3:
                    setPacksOpenedData(
                        {
                            ...packsOpenedData,
                            rares: packsOpenedData.rares + 1,
                            dustValue: packsOpenedData.dustValue + 20
                        }
                    )
                    break;
                case 4:
                    setPacksOpenedData(
                        {
                            ...packsOpenedData,
                            epics: packsOpenedData.epics + 1,
                            dustValue: packsOpenedData.dustValue + 100
                        }
                    )
                    break;
                case 5:
                    setPacksOpenedData(
                        {
                            ...packsOpenedData,
                            epics: packsOpenedData.legendaries + 1,
                            dustValue: packsOpenedData.dustValue + 400
                        }
                    )
                    break;
            }

            const cardsFront = document.querySelectorAll('.front');
            const cardsBack = document.querySelectorAll('.back');
            cardsFront[card].classList.toggle('fadeOutOnClick');
            cardsBack[card].classList.toggle('fadeInOnClick');
            cardsHTML[card].classList.toggle('flipOnClick');
            setCardsFlipped(cardsFlipped + 1);
        }else{
            return;
        }
    }

    return(
        <div className="packMainContainer">
            <div className="packContainer">
                {showPack === true ? 
                <div className="pack"
                onClick={openFirstPack}
                style = {{backgroundImage: `url(${cardPack})`}}
                >
                </div>
                :
                <div className="openPacksDataContainer">
                    <h1>Collected cards</h1>
                    <p>packs opened: {packsOpenedData.packsOpened}</p>
                    <p>commons: {packsOpenedData.commons}</p>
                    <p>rares: {packsOpenedData.rares}</p>
                    <p>epics: {packsOpenedData.epics}</p>
                    <p>legendaries: {packsOpenedData.legendaries}</p>
                    <p>dust value: {packsOpenedData.dustValue}</p>
                    {cardsFlipped === 5 ? <button className="buttonActive" onClick={openPack}>Open another pack</button> : <button className="buttonNotActive" onClick={openPack}>Open another pack</button>}
                </div>
                
            }
                


                {fiveCards === undefined ? null : fiveCards.map((value, index) => {
                    return(
                        <div className="cardContainer">
                            <div className="cardClicker" onClick={flipCard} data-index={index}></div>
                                <div className="card">
                                    {value === undefined ? null : <div className="back" style = {{backgroundImage: `url(${value.image})`}}></div>}
                                    <div className="front" style = {{backgroundImage: `url(${classicCardBack.cardBacks[0].image})`}}></div>
                                </div>
                        </div>
                    ) 
                })}
            </div>
        </div>
    )
}