import axios from 'axios';

export const getCardBacks = async (cardBack) =>{

    try{
            
        const request = await axios.get(`https://eu.api.blizzard.com/hearthstone/cardbacks?locale=en-gb&textFilter=${cardBack}`);
        const response = await request.data;
        return response;
        }
    catch (error){
        console.log(error);
    }
}