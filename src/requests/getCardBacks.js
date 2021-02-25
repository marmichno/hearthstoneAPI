import axios from 'axios';

export const getCardBacks = async (cardBack) =>{

    try{
            
        const request = await axios.get(`https://us.api.blizzard.com/hearthstone/cardbacks?locale=en-us&textFilter=${cardBack}`);
        const response = await request.data;
        return response;
        }
    catch (error){
        console.log(error);
    }
}