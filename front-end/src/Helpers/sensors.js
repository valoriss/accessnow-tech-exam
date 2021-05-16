import request from 'superagent';

/* TODO move baseUrl to .env after MVP stage */
const baseUrl = 'http://localhost:3001/api/latest/sensors';

/* Log accelerometer device information to back-end database 'accelerometers' */
export const handleAccelerometer = async ({ x, y, z }) => {
  console.log('CREATING ACCELEROMETER LOG', x, y, z);

  const userId = localStorage.getItem('user_session_id');

  try {
    await request.post(`${baseUrl}/accelerometer`)
      .type('application/json')
      .send({
        x, y, z, userId,
      });
  } catch (e) {
    console.log('Something went wrong when trying to update accelerometer data', e);
  }
};

/* Log orientation device information to back-end database 'orientations' */
export const handleOrientation = async ({
  absolute, gamma, beta, alpha,
}) => {
  console.log('CREATING ORIENTATION LOG', absolute, gamma, beta, alpha);

  const userId = localStorage.getItem('user_session_id');

  try {
    await request.post(`${baseUrl}/orientation`)
      .type('application/json')
      .send({
        absolute, gamma, beta, alpha, userId,
      });
  } catch (e) {
    console.log('Something went wrong when trying to update accelerometer data', e);
  }
};
