export const randomCards = (cards) => {
    
    // rarities:
    // 1 - common 75%
    // 3 - rare 20%
    // 4 - epic 4%
    // 5 - legendary 1%

    if(cards === undefined){
        return undefined;
    }

    let randomRarities = [];

    for(let i = 0; i < 5; i++){

        let randomNumber = Math.random() * 100;

        if(randomNumber <= 75){
            randomRarities.push(1);
        }else if(randomNumber <= 95){
            randomRarities.push(3);
        }else if(randomNumber <= 99){
            randomRarities.push(4)
        }else if(randomNumber > 99){
            randomRarities.push(5);
        }
    }

    randomRarities = randomRarities.map(rarity => {
        
        const rarityCards = cards.cards.filter(value => {
            if(value.rarityId === rarity){
                return true;
            }else{
                return false;
            }
        })

        let randomCard = Math.round(Math.random() * rarityCards.length - 1);

        if(randomCard < 0){
            randomCard = 0;
        }

        return rarityCards[randomCard];
    });
    
    return randomRarities;
}