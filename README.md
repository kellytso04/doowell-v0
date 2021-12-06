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

## Site demo
### Two days later
A very long two days later, and we have the very first iteration of Doowell:

![site-demo](https://user-images.githubusercontent.com/47910950/144932112-ecb03676-354b-4491-84fe-f46e392bc0b1.gif)

### A closer look at each feature

The **Dashboard**:

![dashboard-demo](https://user-images.githubusercontent.com/47910950/144933325-8fec7baa-9bab-4e0e-997e-a70c03df4b94.gif)


The **Notes** feature takes the place of the aforementioned Journal. One of the most productive things in the world is a scratchpad in front of you, so Doowell provides one. 
I'd originally built this component with a 'Save' button, but after using it a few times, I found the need to click 'Save' every time you wrote anything was tedious, and I once even lost data because I'd forgotten to Save it. After that, I decided to replace the button with an auto-save implementation, which updates the database with your notes a 1-second interval if you've added to the text area.

![notes-demo](https://user-images.githubusercontent.com/47910950/144933721-2845883b-c281-425d-aaa0-c9edc079f23e.gif)

**Habit-tracker, tasks, and reminders**

![habit_demo_SparkVideo](https://user-images.githubusercontent.com/47910950/144934506-50bb19e4-aeef-4050-be53-bff82c5d2ea5.gif)

![task-reminder-demo](https://user-images.githubusercontent.com/47910950/144934556-20c59ddf-6e7c-4cd4-9517-a6e520d1af40.gif)


## Doowell will continue to be iterated on and revised in future updates. Deployment coming soon.

[Click here to visit my engineering journal](https://cute-yak-17c.notion.site/Doowell-Engineering-journal-03faba2afd5c4c7abb2277fadfeaf76a).
