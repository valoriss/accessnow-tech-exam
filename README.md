# PlacesNow (AccessNow Technical Exam)

PlacesNow is a web app build in React (front-end), node (back-end), javascript, sequelize, sqlite3, and external API's like Google's Place API.

## Installation

First, clone this repo.
```
git clone <url>
```

From root folder, in CLI of your choice, use the npm scripts to install and run PlacesNow.

```bash
npm start
```

Troubleshoot: If npm start doesn't work because modules aren't installed, you can do it manually:
```
// cd into root folder
npm i
npm start

cd front-end
npm i
npm start
```

## Usage
You can input your own location search values in the "Find Location" input field. This field is populated by default.
You can clear all input by pressing the "X" button in the input field.

All output for locations (limit to 5 list items) will appear beneath the "Find Location" input field.

The List of places will have a "SELECT" button. Pressing this button will create a new Card Item with your selected choice.

## Sensors
PlacesNow can test *two different sensors*, "Accelerometer" and "Device Orientations" (measuring tilt and movement of device). 

On device orientation shift or change in velocity/acceleration, PlacesNow will begin to log information to the database.

PlacesNow stores acceleration in the `x, y, z` fields. Orientation is stored as `absolute, gamma, alpha, beta`. 

## User Session
PlacesNow assigns persisted local storage user session data. A uuidv4 is assigned to each new session and data for session length is logged on session end. 

## Database
All output for data can be found in the root folder, in the file `database.sqlite`. This is for ease of access to the tester for the sake of the technical exam.

Download [Sqlite db browser](https://sqlitebrowser.org/dl/). This will let you view the contents of this file easily.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
