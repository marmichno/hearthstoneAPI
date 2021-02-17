import axios from 'axios';

export const postToken = async () =>{

    const client_id = 'd32b586a88724c99950ee09c05b9139c';
    const client_secret = 'yHXPXCQul6RDQaGakEM8bg3XEXIluTfL';

    try{
        let request = await axios.post(`https://us.battle.net/oauth/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`);
        let response = await request.data;
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('token_expire_date', response.expires_in + Date.now());
        axios.defaults.params = 
        {
            "access_token":localStorage.getItem('token')
        }
    }
    catch (error){
        console.log(error);
    }
}