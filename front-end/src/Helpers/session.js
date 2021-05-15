import request from 'superagent';

export const handleSessionEnd = () => {
    // get session uuid for user
    const sessionId = localStorage.getItem('user_session_id');
    const startTime = localStorage.getItem('start_time');

    if (!sessionId || !startTime) return;

    const sessionTimeLength = Math.floor((new Date()).getTime() / 1000) - startTime;

    try {
        // call user session 
        // POST/ /user_session
    } catch (e) {
        console.log('unable to update user session information');
    }
}