# SleepTracker [![Netlify Status](https://api.netlify.com/api/v1/badges/c86d0bab-7025-4f3a-bc1d-1ae16a329884/deploy-status)](https://app.netlify.com/sites/sleeptracker-chingu/deploys)

Irregular sleeping patterns are a common problem. Research has shown that sleeping and getting up at a certain time is a good sleeping practice and can improve mood quality. **SleepTracker** allows you to set a sleep goal and track your sleeping patterns.

# Overview

Our goal behind this project is to emulate the teamwork in developing professional real-world apps.

[LIVE LINK](https://sleeptracker-chingu.netlify.app/) to the app.

## Features

- See graphic visualizations of your sleeping habits
- See how your mood changes as your sleeping habits change
- View a history of all your sleep data in table

## All you have to do to start tracking your sleep:

1. Click on the `Start Sleep` button on your Dashboard.
2. Select the required `date`, sleep `time`, your `mood`, and an optional entry for `notes`.
3. Once you hit `Ok`, your sleep is being tracked and the button changes to `Stop Sleep`.
4. When you wake up, just select your `mood` and enter any additional `notes` if you wish.
5. That's it! Keep tracking your sleep and over time you'll see how your sleeping habits affect your mood, and hopefully find ways to improve how much sleep and the quality of sleep you're getting!

## How We Built the App

- Task management with [ClickUp](https://app.clickup.com/14237492/v/b/li/128371368) to create, manage, and assign tasks to each team member throughout the project
- Agile Sprint methodology providing a framework for continuous iterative development with deployment at the end of each sprint
- We used [Figma](https://www.figma.com/file/92LgIOSuhwGfoKAAbpy5uP/Chingu-Sleep-Tracker-App?node-id=0%3A1) to design all the pages

## Project Highlights

- We implemented best practices for state management with `Redux Toolkit (RTK)`. While this is a simple CRUD App, utilizing RTK enhances scalability and provides a centralized way to handle state throughout the component tree.
- Components created with `styled-components` and `antd` provides us with the flexibility to create unique UIs.
- The tech stack includes technologies like `MongoDB`, `Express`, `React`, and `Node`.
- `CI/CD` is handled with Netlify platform for the frontend and Heroku for the backend.

## Running the Project

[Live Version](https://sleeptracker-chingu.netlify.app/)

### Running this project locally

1. Clone this repo locally
2. Go to the `server` and `frontend` directories and install the dependencies (`npm install`).
3. Run both `server` and `frontend` with `npm start`.
4. Enjoy!

## Future Improvements

- add integration tests
