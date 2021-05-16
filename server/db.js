const Sequelize = require('sequelize');

// Define sequelize database instance
const sequelizeInstance = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Database output can be found in root folder
});

const init = async () => {
  try {
    // Check if connection is successful
    await sequelizeInstance.authenticate();
    // drop and create tables on server init
    await sequelizeInstance.sync({ force: true });

    console.log('Database connection established successfully');
  } catch (e) {
    console.log('Unable to establish connection with database');
  }
};

const Accelerometer = sequelizeInstance.define('accelerometers', {
  id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
  user_id: { type: Sequelize.UUID, required: true, allowNull: false },
  x_position: { type: Sequelize.DOUBLE },
  y_position: { type: Sequelize.DOUBLE },
  z_position: { type: Sequelize.DOUBLE },
  created_at: { type: Sequelize.DATE },
});

const Orientation = sequelizeInstance.define('orientations', {
  id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
  user_id: { type: Sequelize.UUID, required: true, allowNull: false },
  absolute: { type: Sequelize.BOOLEAN },
  gamma: { type: Sequelize.DOUBLE },
  alpha: { type: Sequelize.DOUBLE },
  beta: { type: Sequelize.DOUBLE },
  created_at: { type: Sequelize.DATE },
});

const UserSession = sequelizeInstance.define('user_sessions', {
  id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
  session_start: { type: Sequelize.DATE, allowNull: false },
  session_end: { type: Sequelize.DATE },
  session_length: { type: Sequelize.DOUBLE },
  created_at: { type: Sequelize.DATE },
});

module.exports = {
  Accelerometer,
  Orientation,
  UserSession,
  init,
};
