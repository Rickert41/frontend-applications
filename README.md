# Frontend Applications
A repository for Frontend Appications, subject of the Information Design semester of CMD.    

[*LINK TO SOURCES*](https://github.com/Rickert41/frontend-applications/blob/main/sources.md)

# Student information
```javascript
const name = "Rick Groot";
const student_nmbr = "N/A";
const school_mail = "rick.groot2@hva.nl";
let age = 19;

let ID_info = {
        year: 2020,
        semester: 1,
        course: "Tech"
};
```

# Research topic
Are parking garages in The Netherlands high enough for Hummers.

## Sub-topics
In which area's are more low parking garages?  
Are there many parking garages outside cities?  

## Required variables
* ID of parking space
* Location of parking garages
* Capacity and other garage information, for better visualisation
* Maximumheight of parking garage

All this data is from RDW datasets. For location of parking garages I use [GEO Parkeer Garages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34), and for capacity and maximumvehicleheight I use [Open Data Parkeren: SPECIFICATIES PARKEERGEBIED](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s).

## Expectations
I think that lots of parking garages are perfectly compatible with most cars. But if you have a Hummer you might have a problem with a lot of garages.

### Sub-topic expectations
I think there are more low parking garages in older cities, because back then they might not have thought of taller vehicles. I also think there won't be many parking garages outside cities, because there is no need for them, and there is more space for regular parking lots.

# Concept
A map with all parking garages, with information about the heigt of a garage. This way it will become clear where Hummers can park in The Netherlands.
Map of the Netherlands    |    Bar graph of most common heights
:------------------------:|:------------------------|
![](https://github.com/Rickert41/frontend-applications/blob/main/utils/map.jpg)  |  ![](https://github.com/Rickert41/frontend-applications/blob/main/utils/bar.jpg)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)