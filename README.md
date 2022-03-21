# Budget Tracker

## description
These days majority of website traffic comes via mobile phones. With mobile phones comes with the issue of not so consistant internet connection. As a result functionality with poor or no internet connection is crucial to having a succesful user experince. 

For this budget tracker, offline functionality was added in order to allows users to have a seemless experinece regardless of their internet connection. To accomplish this, a service-worker, manifest, and idb.js were added to turn this into a progressive web application. This allows users to continue to use the application, cache their inputs, and upload them when internet connection is re-established.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)

## Installation
There is not installation required to run this application as it is fully deployed via heroku. Although if you wish to run it locally to test it via dev tools you will have to run a npm install to have all of the necissary dependancies such as compression, express, mongoose, and morgan.
## Usage
The application functions as presented. You plug in the name of your transaction, transcation amount, and hit add funds which will then populate the graph below. This will persist regardless of internet connection.
