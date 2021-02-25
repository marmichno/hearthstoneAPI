import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {HorizontalBar} from 'react-chartjs-2';

export const DeckStatsPopUp = () =>{
    const [deckRarities, setDeckRarities] = useState([]);

    const deck = useSelector(state => state.manageCardsReducer);

    useEffect(() => {
        if(deck.length !== 0){
            const raritiesArr = [];
    
            deck.map(value => {
                if(value.numberInDeck === 2){
                    raritiesArr.push(parseInt(value.rarity));
                    raritiesArr.push(parseInt(value.rarity));
                }else{
                    raritiesArr.push(parseInt(value.rarity));
                }
            })
            
            setDeckRarities(raritiesArr);
        }else{
            setDeckRarities([]);
        }
    },[deck]);

    const getDustCost = () =>{
        if(deckRarities.length > 0){
            return deckRarities.map(value => {
                if(value === 1){
                    return 50;
                }else if(value === 2){
                    return 0;
                }else if(value === 3){
                    return 100;
                }else if(value === 4){
                    return 400;
                }else if(value === 5){
                    return 1600;
                }
            }).reduce((a,b) => a + b);
        }else{
            return 0;
        }
    }

    const sortCardRarities = (rarity) =>{
        const sortedArr = deckRarities.filter(value =>{
            if(value === rarity){
                return true;
            }else{
                return false;
            }
        })

        if(sortedArr.length > 0){
            return sortedArr.map(value => {
                return 1;
            }).reduce((a,b) => a + b);
        }else{
            return 0;
        }
    }

    return(
        <div className="deckDataPopUp">
                {/* <h1>Deck data:</h1>
                <p>free: {sortCardRarities(2)}</p>
                <p>commons: {sortCardRarities(1)}</p>
                <p>rares: {sortCardRarities(3)}</p>
                <p>epics: {sortCardRarities(4)}</p>
                <p>legendaries: {sortCardRarities(5)}</p>
                <p>Crafting cost: {getDustCost()}</p> */}
                                            {/* free: sortCardRarities(2),
                            commons: sortCardRarities(1),
                            rares: sortCardRarities(3),
                            epics: sortCardRarities(4),
                            legendaries: sortCardRarities(5), */}



                <HorizontalBar 
                data={{
                    labels: ['Free', 'Commons', 'Rares', 'Epics', 'Legendaries'],
                    datasets:[
                        {
                            label:`Number of cards in deck`,

                            data:[sortCardRarities(2), sortCardRarities(1), 
                                sortCardRarities(3), sortCardRarities(4), 
                                sortCardRarities(5)
                            ],
                            backgroundColor:[
                                'cyan', 'gray', 'blue', 'purple', 'yellow'
                            ]
                        }
                    ]
                }}
                options={{
                    title:{
                        display:true,
                        text:`Crafting Cost: ${getDustCost()} dust`,
                        fontSize:25,
                        fontColor:'white'
                    },
                    scales: {
                        xAxes: [{
                            type: 'linear',
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 12
                            }
                        }]
                    },
                    legend:{
                        display:false
                    }
                }}
                />
        </div>
    )
}