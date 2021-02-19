import axios from 'axios';

export const getCardBacks = async (sets) =>{

    try{
            const cardBacks = [];
            const cardSets = [];
            sets.map(value => {
                cardBacks.push(axios.get(`https://us.api.blizzard.com/hearthstone/cardbacks?locale=en-us&textFilter=${value.name}`));
            });

            const request = await axios.all(cardBacks);
            const response = await request.map(value => value.data).filter((value, index) => {
                if(value.cardCount === 0){
                    return false;
                }else{
                    cardSets.push(sets[index]);
                    return true;
                }
            }).map( (value, index) => {
                if(index === 12){
                    return {
                        cardBack: value.cardBacks[1]
                    }
                }else if(index === 13 || index === 14){
                    return {
                        cardBack: value.cardBacks[2],
                    }
                }else{
                    return {
                        cardBack: value.cardBacks[0]
                    }
                }
            })
            
            return {
                cardSets: cardSets,
                cardBacks: response
            };
        }
    catch (error){
        console.log(error);
    }
}