# Global News Coding Exercise Repo

Thanks for taking an interest in Global News. This repo contains a coding exercise that is used in our recruitment process.

Please complete the coding exercise below, upload the code to a personal git repo, and share the link to your repo.

#### Please don't fork this repo. Download/Clone the repository, finish the exercise and upload it as a new repository to your github account. Share with us the link for that repository.

## Prerequisites
To build and run the sample code please make sure you have the following prerequisites
- NodeJS v13.0.1 or higher
- npm

## Requirements

- Given a JSON API payload ([https://globalnews.ca/gnca-ajax-redesign/sample-data/](https://globalnews.ca/gnca-ajax-redesign/sample-data/)) containing the election results for 10 ridings, display them in a carousel presentation that a user can rotate through to view all the results.
- There should be left and right arrows that users can click to "flip" through all of the 10 riding "cards", you can use the arrow icons provided.
- Each riding "card" should display the name of the riding and the ordered list of candidates for that riding with their vote totals and percentage of the total vote, ordered from most votes to least votes.
- The winner of the riding should also be highlighted.
- The listing for each candidate should incorporate the color of their party: ![#d71b1e](https://via.placeholder.com/15/d71b1e/000000?text=+) `#d71b1e` for Liberal, ![#1d4880](https://via.placeholder.com/15/1d4880/000000?text=+) `#1d4880` for PC, ![#f89921](https://via.placeholder.com/15/f89921/000000?text=+) `#f89921` for NDP, ![#3d9b35](https://via.placeholder.com/15/3d9b35/000000?text=+) `#3d9b35` for Green and ![#aaaaaa](https://via.placeholder.com/15/aaaaaa/000000?text=+) `#aaa` for any other party).
- The carousel should be responsive (i.e. it should work on a phone).

*TIP: Just focus on delivering the core carousel functionality, flipping through slides with forward and backward arrows. There's no need to add swipe gestures or looping. And there's no need to handle browser resize events, or worry about legacy browsers.*

Feel free to shoot us a message if you have any questions or require any clarifications.  Obviously these are some high level requirements, so it is open to some of your own interpretation. We suggest building something that would not look out of place on the [globalnews.ca](https://globalnews.ca) website.

We’d like you to create the logic to manage the carousel yourself instead of using an off the shelf component, but otherwise feel free to take advantage of whatever frameworks you feel would be appropriate, except jQuery.

Please do not use jQuery :)

## Getting started

Use `npm run dev` for development. This will spin up a dev server on `localhost:8080` which will update as you develop.

When you are ready to submit, run `npm run build`.

## How to submit code?
Please upload completed code to a personal git repository and share the link to your repository with us.
