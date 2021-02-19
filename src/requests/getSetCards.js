import axios from 'axios';

export const getSetCards = async (slug, pageSize) =>{
    
    try{
        const request = await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=${slug}&collectible=1&pageSize=${pageSize}`);
        const response = await request;
        const cards = response.data;
        return cards;
    }
    catch (error){
        console.log(error);
    }
}