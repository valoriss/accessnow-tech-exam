import request from 'superagent';

export const handleAccelerometer = ({ x = 0, y = 0, z = 0}) => {
    try {
        // make call to update db
        // endpoint === POST/ accelerometer
    } catch (e) {
        console.log('Something went wrong when trying to update accelerometer data', e);
    }
};

export const handleOrientation = ({ absolute, gamma, beta, alpha }) => {
    try {
        // make call to update db
        // endpoint === POST/ orientation
    } catch (e) {
        console.log('Something went wrong when trying to update accelerometer data', e);
    }
};