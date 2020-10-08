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

_These are examples only. Replace with your own MVP features._

- Find and use external api
- Render data on page
- Allow user to choose favorites

#### PostMVP

_These are examples only. Replace with your own Post-MVP features._

- Add second API
- Use local storage to save user favorites

## Project Schedule

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| October 8  | Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete |
| October 9  | Project Approval/Pseudocode/Set up Components      | Incomplete |
| October 10 | Make Header, Home, List Components                 | Incomplete |
| October 11 | Make Create, Airports Components                   | Incomplete |
| October 12 | Link and Route, Establish all JSX is working       | Incomplete |
| October 13 | CSS, Media Queries, styling                        | Incomplete |
| October 14 | Finish MVP, start post-mvp                         | Incomplete |
| October 15 | Post-MVP                                           | Incomplete |
| October 16 | Presentations                                      | Incomplete |

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Adding Form      |    H     |      3hrs      |    3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |    2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |     5hrs      |    5hrs     |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
