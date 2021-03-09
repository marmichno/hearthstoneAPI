import axios from 'axios';

export const getSets = async () =>{
    try{
            const request = await axios.get(`https://eu.api.blizzard.com/hearthstone/metadata/sets?locale=en_GB&`);
            const response = await request;
            const sets = response.data.filter(value => {
                if(value.type === "expansion" && value.id !== 1525 || value.name === "Classic"){
                    return true;
                }else{
                    return false;
                }
            });
            return sets;
        }
    catch (error){
        console.log(error);
    }
}