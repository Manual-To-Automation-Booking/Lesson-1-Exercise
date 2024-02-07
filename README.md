<p float="left">
  <img src="https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780" width="400" height="100" title="BS_Logo">
    <div></div>
  <img src="https://logos-world.net/wp-content/uploads/2021/08/Booking-Logo.png" width="400" height="200" title="Booking_Logo">
</p>

# Booking.com - Web - Lesson 1 - Exercise

This repository contains the solution to the first practical exercise related to logging in to a website.

There are 2 solutions, one which is simple and does everything in one function, and another that splits it into 2 functions.

## Necessary Tools

There are a few things that you will need before you can get started.

* NodeJS - Use [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) multiplatform guide to installing NodeJS and NPM.
* Git for pulling down the code - follow [this](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) guide for installing Git on all platforms. There are other useful guides on the website mentioned previously. Start [here](https://github.com/git-guides) anad follow through to the various links to learn more about Git. It will be very useful on your automation journey. If you have any issues with tokens or user credentials, let me know as this can trip a lot of people up.
* Visual Studio Code which can be downloaded from [here](https://code.visualstudio.com/download) or WebStorm which can be downloaded from [here](https://www.jetbrains.com/webstorm/). There are plenty of others, but these are the main 2.

## Installation / How To Run

To get the project ready to run on your machine, follow the steps below:

* Open a terminal. (Terminal on Mac, Command Prompt on Windows)
* Go to the directory where you want to place the code using [cd](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cd) for Windows, and it functions mostly the same for Mac. You just use "cd" but the folder structure on Mac is different (/Users/username/Documents instead of C:/Users/username/Documents)
* Copy the following command into the terminal, (remember, you must have [Git](https://git-scm.com/downloads) installed)

```sh
git clone https://github.com/Manual-To-Automation-Booking/Lesson-1-Exercise.git
```

Move into the directory:

```sh
cd Lesson-1-Exercise
```

Type the following commands:

Install the dependencies:

```sh
npm install
```
Run the test:

```sh
npm run test
```

OR:

```sh
node tests/login-test.js
```


There are obviously many ways to grab this repository and this is just one way. Some of the others are:

 - GitHub Desktop application
 - Download the Zip file of the repository
 - Clone it through Visual Studio Code