const manageCardsReducer = (state = localStorage.getItem('deck'), action) => {

    switch(action.type){
        case 'ADDCARD':
            const card = action.payload;
            state = JSON.parse(localStorage.getItem('deck'));

            if(card === undefined){
                return [];
            }

            const amountOfCards = () =>{

                if(state.length > 2){
                    const numberOfCards = state
                    .map(value => value.numberInDeck)
                    .reduce((a, b) => a + b);

                    if((numberOfCards + 1) === 31){
                        return false;
                    }else{
                        return true;
                    }
                }else{
                    return true;
                }

            }

            

            //check how many cards are already in deck
            const checkIfCouldBeAdd = () =>{

                if(!amountOfCards()){
                    return false;
                }

                const counter = state.filter(value =>{
                    if(card.name === value.name){
                        return true
                    }else{
                        return false;
                    }
                })

                //if card isnt legendary there could be two card in deck
                if(counter.length === 0 && parseInt(card.rarity) !== 5){
                    return true;
                //if card is legendary there could be only one card in deck
                }else if(counter.length === 0 && parseInt(card.rarity) === 5){
                    return true;
                }else if(counter.length === 1 && parseInt(card.rarity) !== 5){
                    return 'modify'
                }
                else{
                    return false;
                }
            }

            if(checkIfCouldBeAdd() === true){

                state.push(card);
                localStorage.setItem('deck', JSON.stringify(state));
                return state;

            }else if(checkIfCouldBeAdd() === 'modify'){
                state = state.map(value =>{
                    if(value.name === card.name){
                        value.numberInDeck = 2;
                        return value;
                    }else{
                        return value;
                    }
                })
            }

            localStorage.setItem('deck', JSON.stringify(state));
            return state;

        case 'REMOVECARD':
            const cardFromDeck = action.payload;
            console.log(cardFromDeck);
            state = JSON.parse(localStorage.getItem('deck'));

            state = state.map(value => {
                if(value.name === cardFromDeck && value.numberInDeck === 2){
                    value.numberInDeck = 1;
                    return value;
                }else if(value.name === cardFromDeck && value.numberInDeck === 1){
                    return 'delete';
                }else{
                    return value;
                }
            }).filter(value => (value === 'delete') ? false : true);

            localStorage.setItem('deck', JSON.stringify(state));

            return state;

        default:
            return JSON.parse(state);
    }
}

export default manageCardsReducer