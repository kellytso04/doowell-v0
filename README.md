# 🐙 Doowell
An integrated to-do list, habit tracker, reminder-keeper, and journal.

__Doowell__ is a passion project of mine that I've been thinking up for a little while now. For a long time, my workflow was missing a single central application that kept track of my tasks, important reminders for the week, and good habits. When the opportunity arose, I decided to build one as my submission for our MVP sprint.

## Using the repository
Setup to use this repository is very simple.

To create the database with its tables, navigate to `db/config.example.js`, make a copy of it, and replace the placeholders with your MySQL login information.
Then go to the scripts in `package.json` and change the username in `schema` script to your MySQL username. Once that is done, you can run `npm run schema` in the terminal to create our Doowell database and its tables.

After you've got the database up and running, Doowell's setup is complete!

## The planning phase
### Application overview

<img width="1440" alt="feature map" src="https://user-images.githubusercontent.com/47910950/144663955-1443b759-4ebc-4ec9-bd7e-c3328ebb34f4.png">

<img width="615" alt="schema designs" src="https://user-images.githubusercontent.com/47910950/144663094-def2a1c9-e3fa-43cb-9001-f35aa3ed1dba.png">


These diagrams made on [Excalidraw](https://excalidraw.com/) were the foundations for my very first iteration of Doowell. The main portion is a simple, clean dashboard that greets the user and presents them with an overview of all the many things on their plate.
It's intended to display all the clutter and messiness of a busy workweek in the most convenient, sensible fashion possible.

Originally I planned out many features that I wanted Doowell to support, but I had to put many of these (such as the Journal) on the backburner because of MVP's tight deadline (2 days, whew!). The features I've circled in yellow are the ones that I prioritized getting done before my presentation in two days.
