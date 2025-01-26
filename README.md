# Expensive Tracker App

Web app destinate to handle income and debts balances and show charts deciding ranges of days.
implementing `React` and `React Router` for frontend. `Tailwind Css` for styling and `Firebase` for Backend.

## Quick start

**_Note:_** In order to run this project you must have instaled `Nodejs v22.12` or avobe, `npm v10.9` or avobe.

``` bash
# clone the repo
git clone https://github.com/Annimus1/expensive-tracker-app.git
# get into the folder
cd expensive-tracker-app
# install all dependencies
npm install
```

At this point you should have the file structure.

**_Note:_** in order to this project works properly, need to create a `.env` file that contains conection information from [Firebase]("https://"), with the folowing strucure inside

```
VITE_apiKey=your_info_here
VITE_authDomain=your_info_here
VITE_projectId=your_info_here
VITE_storageBucket=your_info_here
VITE_messagingSenderId=your_info_here
VITE_appId=your_info_here
```

Finally you can up the environment.

```bash
# run development environment
npm run dev
# or
npm run host # run dev environment exposing port in the same network
```


