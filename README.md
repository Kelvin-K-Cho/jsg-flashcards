<h1 align="center"><strong>Job Search Guide Flashcards</strong></h1>

## About

<center>Job Search Guide Flashcards (or "JSG-Flashcards" for short) is a semi-original, single-page, full-stack web application.

Inspired by App Academy's Job Search Guide curriculum, the application aims to be the single source of truth pertaining to job search guide materials.</center>

---

[Job Search Guide](https://github.com/appacademy/job-search-guide) (Private Repository)

---

<p align="center">
  <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/JSGF.gif">
</p>

---

## Technologies

<h4>Built using...</h4>

|                                                     PostgreSQL                                                     |                                                     Rails                                                     |                                                     jQuery                                                     |                                                     React                                                     |                                                     Redux                                                     |                                                     HTML5                                                     |                                                     CSS3                                                     |                                                     AWS                                                     |
| :----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/PostgreSQL.png" height="30"> | <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/Rails.png" height="30"> | <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/jQuery.png" height="30"> | <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/React.png" height="30"> | <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/Redux.png" height="30"> | <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/HTML5.png" height="30"> | <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/CSS3.png" height="30"> | <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/AWS.png" height="30"> |

---

## Features

* [User Authentication](#user-authentication)
* [Organized Flashcards](#organized-flashcards)
* [Search Bar](#search-bar)
* [Leave Suggestions](#leave-suggestions)

<a name="user-authentication">
  <h4 align='center'>
    <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/app/assets/images/favicon.png" height="30"> User Authentication
    </h4>
</a>

Custom-made, secure user authentication implemented using BCrypt to provide a stateful session across the client and server in this RESTful web architecture.

<p align="center">
  <br />
  <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/user-authentication.gif">
</p>

---

<a name="organized-flashcards">
<h4 align='center'>
  <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/app/assets/images/favicon.png" height="30"> Organized Flashcards
  </h4>
</a>
An extensive library of flashcards organized into **topics** and categorized under **subjects** or **weeks**.

<p align="center">
  <br />
  <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/organized-flashcards.gif">
</p>

---

<a name="search-bar">
<h4 align='center'>
  <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/app/assets/images/favicon.png" height="30"> Search By Topics
  </h4>
</a>
Developed a custom route utilizing Rails' ActiveRecord and PostgreSQL's syntax to implement a search bar that allows users to dynamically fetch different kinds of topics relating to the input query.

<p align="center">
  <br />
  <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/search-bar.gif">
</p>

---

<a name="leave-suggestions">
<h4 align='center'>
  <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/app/assets/images/favicon.png" height="30"> Leave Suggestions
  </h4>
</a>
In order to preserve the integrity of the flashcards' content and limit CSRF attacks, users can only __read__ flashcards.  Create/Update/Delete are disabled by default.  However, users can still contribute to the flashcards by leaving suggestions.  Suggestions are logged onto the application where they are reviewed and potentially incorporated into future versions of the application.

<p align="center">
  <br />
  <img src="https://raw.githubusercontent.com/Kelvin-K-Cho/jsg-flashcards/master/images/leave-suggestions.gif">
</p>

---

## Future Plans

* Cleaning up unnecessary code.
* Hosting on Heroku.
* Finish seeding all eight weeks.
* Hosting on AWS.

---

## Author

* Kelvin Cho - [GitHub](https://github.com/Kelvin-K-Cho)

---

## Acknowledgements

* Andy Luo - [GitHub](https://github.com/GreenRabite)
* Lu Fan - [GitHub](https://github.com/LuuuFan)
* Rose Lee - [GitHub](https://github.com/r-lee1)

---

## Contributing

If you're interested in adding flashcards to the application, please contact the author.
