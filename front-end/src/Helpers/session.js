import request from 'superagent';

// TODO move baseUrl to .env after MVP stage
const baseUrl = 'http://localhost:3001/api/latest/session';

// Log session information to back-end database 'user_sessions'
const handleSessionEnd = async () => {
  // Get session uuid for user
  const userId = localStorage.getItem('user_session_id');
  let sessionStart = localStorage.getItem('start_time');

  if (!userId || !sessionStart) return;

  // Convert local storage string datetime to date object
  sessionStart = new Date(sessionStart);
  const sessionEnd = new Date();
  const startTime = Math.floor(sessionStart.getTime() / 1000);
  // Calculate session length
  const sessionLength = Math.floor(sessionEnd.getTime() / 1000) - startTime;

  try {
    await request.post(`${baseUrl}/`)
      .type('application/json')
      .send({
        user_id: userId,
        sessionStart,
        sessionEnd,
        sessionLength,
      });
  } catch (e) {
    console.log('unable to update user session information', e);
  }
};

export default handleSessionEnd;
