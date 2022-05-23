<details>
  <summary><h3>Content</h3></summary><br>
  <ul>
    <li><a href="./Readme#DnDSheets">DnDSheets</a></li>
    <li><a href='./Readme#How%20To%20Use'>How to use</a></li>
    <li><a href='./Readme#CHANGELOG'>Changelog</a></li>
  </ul>
</details>

# DnDSheets

Have you ever found yourself in the situation of your D&D Character Sheets not saving, not being editable, or simply
being inconvenient to store?

This project aims to provide a solution to all of those problems:
- Locally stored in the browser
- Includes export function to transfer between devices
- In-browser automated form
  - Activated and deactivated on demand with simple checkbox
- Alerts you on leaving without saving
- An organized list of all your sheets

You can find it at http://www.dndsheets.tk

##### Notice:

As Heroku is used for deployment, the website might be asleep, and take a bit longer to load than usual.
- Heroku has currently disabled github deployment tokens while investigating a security breach. This means that the
website will not be updated until this is reimplemented.

# How To Use

- Download the DnDSheets.exe from the most recent [release](https://github.com/TheGameGamerInt/DnDSheets/releases/tag/EarlyAccess)
- Launch the DnDsheets.exe-file
- Go to http://localhost:8080/

# CHANGELOG

<details>
  <summary><h2>Alpha 3.0.0</h2></summary>
<br>
- Reconstructed previous IndexedDB layout, now requires less space
- Sheets successfully save and load, but only has limited options to add yet
- Using classes for object templates
- Added comments to code in various places
</details>

<details>
  <summary><h2>Alpha 2.0.0</h2></summary>
<br>
- Fixed varius bugs
- General progression on the workspace
- Added some functionality
- Changed to IndexedDB for storage solution
- Still figuring out data model and general layout of the sheet
- I need to get better at writing changelogs more often
</details>

<details>
  <summary><h2>Alpha 1.0.0</h2></summary>
<br>
- Introduced changelog
- Not much functionality yet
- 'New'-button to create new sheets implemented
- Still figuring out data model and general layout of the sheet
  </details>
