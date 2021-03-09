import axios from 'axios';

export const getClassCards = async (choosenClass, whichCards, page) =>{
    try{
        if(whichCards !== "neutral"){
            const request = await axios.get(`https://eu.api.blizzard.com/hearthstone/cards?locale=en_GB&set=standard&page=${page}&pageSize=8&class=${choosenClass}`);
            const response = await request;
            const cards = response.data;
            return cards;
        }
        else{
            const request =  await axios.get(`https://eu.api.blizzard.com/hearthstone/cards?locale=en_GB&set=standard&page=${page}&pageSize=8&class=neutral`)
            const response = await request;
            const cards = response.data;
            return cards;
        }
    }
    catch (error){
        console.log(error);
    }
}