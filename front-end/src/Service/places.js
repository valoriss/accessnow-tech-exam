import request from 'superagent';

export default async function getPlaces(message) {
    if (!message) {
        console.log('no input get places');
    }

    try {
       const response = await request.get(`http://localhost:3001/api/latest/places?input=${message}}`);
        
       return response;
    } catch (e) {
        console.log(`Unable to find places, error: ${e}`);
    }
}
