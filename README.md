## How's Your Airport?

## Description

This app takes the busiest airports in the US and provides details for each of them all in one place. No more having to wonder what restaurants are at the airport, or which airlines fly into a particular airport. A user can also enter their own airport's info under the "Add New Airport" page, which allows for user submission to the API.

## Wireframes

![Mobile Wireframe](https://github.com/corysmith1522/location-react-app/blob/master/Mobile%20Wireframe.png)
![Desktop Wireframe](https://github.com/corysmith1522/location-react-app/blob/master/Desktop%20Wireframe.png)
![Table Wireframe](https://github.com/corysmith1522/location-react-app/blob/master/Tablet%20Wireframe.png)

## Component Hierarchy

![Component Hierarchy](https://github.com/corysmith1522/location-react-app/blob/master/Component%20Hierarchy.jpg)

## API and Data Sample

This project utilizes Airtable to store initial airport data values such as name, abbreviation, airlines, top flight destinations, restaurants, amenities and review.

Sample data:

```json
{
  "records": [
    {
      "id": "recLfJGKdtN35rZYx",
      "fields": {
        "airport": "Philadelphia International Airport",
        "abbreviation": "PHL",
        "review": "Feels like you have a 75 percent chance of losing your luggage when you go through Philly.",
        "airlines": "Air Canada, Alaska, American, British, Delta, Frontier, JetBlue, Lufthansa, Southwest, Spirit, United",
        "flights": "Top 10 Flight Destinations: Orlando, Atlanta, Chicago, Dallas-Fort Worth, Charlotte, Boston, Denver, Tampa, Minneapolis, Detroit",
        "restaurants": "Jack Duggan's, Subway, Chick-fil-A, Starbucks, Sky Asian Bistro, Chickie's & Pete's, Auntie Anne's, Jamba Juice, Sbarro, Smashburger, Tony Luke's, Au ...",
        "amenities": "Free Wifi, Charging Stations, Animal Relief Areas, Art Exhibitions, Marriott Airport Hotel, Long-term Parking, Short-term Parking, Express Spa Station..."
      },
      "createdTime": "2020-10-08T15:47:06.000Z"
    },
    {
      "id": "recwF4Og6qDFWwSmX",
      "fields": {},
      "createdTime": "2020-10-08T15:47:06.000Z"
    },
    {
      "id": "recusSlM9lnHRx2tY",
      "fields": {},
      "createdTime": "2020-10-08T15:47:06.000Z"
    }
  ],
  "offset": "recusSlM9lnHRx2tY"
}
```

#### MVP

- Use Link and Route to navigate between the home, airport and create pages
- Establish working components for the Home page, Airports page, List of Airports, Create Page, Header, and Images
- Import from Airtable API data on the airports that will be rendered on the pages
- Make a working create page with form and submit button that allows users to add to the airport Airtable database and render to the working list as well
- Make three media queries -- app is primarily mobile-based but will also have modifications for desktop and tablet viewing
- Implement flex CSS design and compile all CSS styles in a global sheet that is well organized
- Deploy website on Netlify once completed

#### PostMVP

- Incorporate actual data from an airport API into the app to return different data types to the app
- Fancy styling for the buttons
- Add animations for loading all the data onto the page upon user click

## Project Schedule

| Day        | Deliverable                                                        | Status     |
| ---------- | ------------------------------------------------------------------ | ---------- |
| October 8  | Prompt / Wireframes / Component Hierarchy/ Timeframes              | Incomplete |
| October 9  | Project Approval/Pseudocode/Set up Components/Add data to Airtable | Incomplete |
| October 10 | Add functions and states to Home, Image and Header components      | Incomplete |
| October 11 | Add functions and states to Create, Airports & List Components     | Incomplete |
| October 12 | Link and Route, Establish all JSX is working                       | Incomplete |
| October 13 | CSS, Media Queries, styling                                        | Incomplete |
| October 14 | Finish MVP and complete all CSS styling                            | Incomplete |
| October 15 | Post-MVP - second API, button styling, animations                  | Incomplete |
| October 16 | Presentations                                                      | Incomplete |

## Timeframes

| Component                     | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | :------: | :------------: | :-----------: | :---------: |
| Pseudocode                    |    L     |      2hrs      |               |             |
| Set up Components             |    L     |      1hr       |               |             |
| Enter Data into Airtable      |    M     |      3hrs      |               |             |
| Home Page Component           |    H     |      3hrs      |               |             |
| Header Component              |    M     |      3hrs      |               |             |
| Images Component              |    M     |      3hrs      |               |             |
| Airports Component            |    H     |      3hrs      |               |             |
| List Component                |    H     |      3hrs      |               |             |
| Create Component              |    H     |      3hrs      |               |             |
| Link and Route                |    H     |      3hrs      |               |             |
| JSX Testing and Functionality |    H     |      3hrs      |               |             |
| Establish global CSS styling  |    M     |      3hrs      |               |             |
| Make desktop media query      |    M     |      3hrs      |               |             |
| CSS debugging                 |    H     |      3hrs      |               |             |
| Post-MVP                      |    L     |      3hrs      |               |             |
| Total                         |          |     42hrs      |               |             |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
