import request from 'superagent';

export default async function getPlaces(message) {
    if (!message) return [];

    try {
       const response = await request.get(`http://localhost:3001/api/latest/places?input=${message}}`);
        
       return response;
    } catch (e) {
        console.log(`Unable to find places, error: ${e}`);

        return [];
    }
}
