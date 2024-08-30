# solarvergleich

It is a web site that allows price comparaison between articles of solar panels, which are collected from several e-commerce web sites (amazon.de, conrad.de, ...).

## Steps to install the project locally :

1. Clone the repo locally

    `git clone https://github.com/MarouaneAyech/solarvergleich.git`

2. Go to the project root

    `cd solarvergleich`

3. Install the dependencies (listed in package.json)

    `npm install`

4. Start the dev server (connect to the recat app at http://localhost:3000)

    `npm start`

## Steps to deploy the project in firebase hosting :

1. Install Firebase CLI

    `npm install -g firebase-tools`

2. Log into Firebase

    `firebase login`

3. Create a firebase project

    `firebase projects:create solarvergleich --display-name "solarvergleich"`
`
4. Init Firebase in the project

    `firebase init`

    Note : Answer to the questions as follows :

    - Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices : Hosting
    
    Project setup :

    - Please select an option: Use an existing project
    - Select a default Firebase project for this directory: solarvergleich

    Hosting Setup

    - What do you want to use as your public directory: build
    - Configure as a single-page app (rewrite all urls to /index.html): Yes
    - Set up automatic builds and deploys with GitHub : No

5. Build the project (create an optimized production build of the project)
    
    `npm run build`

6. Deploy to the firebase Hosting

    `firebase deploy`

    -> Hosting URL: https://solarvergleich.web.app