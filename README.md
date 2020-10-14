## How's My Airport?

[How's My Airport?](https://hows-my-airport.netlify.app/ "How's My Airport")

## Description

This app takes the busiest airports in the US and provides details for each of them all in one place. The US has a bunch of busy airports, and sometimes their websites are not as nice to navigate, so this app will be a place to house easy-to-access information. No more having to wonder what restaurants are at the airport, or which airlines fly into a particular airport. A user can also enter their own airport's info under the "Add New Airport" page, which allows for user submission to the API.

## Wireframes

![Mobile Wireframe](https://github.com/corysmith1522/location-react-app/blob/master/images/Mobile%20Wireframe.png)
![Desktop Wireframe](https://github.com/corysmith1522/location-react-app/blob/master/images/Desktop%20Wireframe.png)
![Table Wireframe](https://github.com/corysmith1522/location-react-app/blob/master/images/Tablet%20Wireframe.png)

## Component Hierarchy

![Component Hierarchy](https://github.com/corysmith1522/location-react-app/blob/master/images/Component%20Hierarchy.jpg)

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
| October 8  | Prompt / Wireframes / Component Hierarchy/ Timeframes              | Complete   |
| October 9  | Project Approval/Pseudocode/Set up Components/Add data to Airtable | Complete   |
| October 10 | Add functions and states to Home, Image and Header components      | Complete   |
| October 11 | Add functions and states to Create, Airports & List Components     | Complete   |
| October 12 | Link and Route, Establish all JSX is working                       | Complete   |
| October 13 | CSS, Media Queries, styling                                        | Complete   |
| October 14 | Finish MVP and complete all CSS styling                            | Complete   |
| October 15 | Post-MVP - second API, button styling, animations                  | Incomplete |
| October 16 | Presentations                                                      | Incomplete |

## Timeframes

| Component                                    | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Pseudocode                                   |    L     |      2hrs      |     3hrs      |    3hrs     |
| Set up Components                            |    L     |      1hr       |      30m      |     30m     |
| Enter Data into Airtable                     |    M     |      3hrs      |     6hrs      |    6hrs     |
| Home Page Component - JSX, functions, states |    H     |      3hrs      |      1hr      |     1hr     |
| Header Component - JSX, functions, states    |    M     |      3hrs      |      30m      |     30m     |
| Images Component - JSX, functions, states    |    M     |      3hrs      |      1hr      |     1hr     |
| Airports Component - JSX, functions, states  |    H     |      3hrs      |     2hrs      |    2hrs     |
| List Component - JSX, functions, states      |    H     |      3hrs      |     7+hrs     |    7+hrs    |
| Create Component - JSX, functions, states    |    H     |      3hrs      |     4hrs      |    4hrs     |
| Link and Route                               |    H     |      3hrs      |      1hr      |     1hr     |
| JSX Testing and Functionality                |    H     |      3hrs      |     6hrs      |    6hrs     |
| Establish global CSS styling                 |    M     |      3hrs      |     6hrs      |    6hrs     |
| Make desktop media query                     |    M     |      3hrs      |     2hrs      |    2hrs     |
| CSS debugging                                |    H     |      3hrs      |     3hrs      |    3hrs     |
| Post-MVP                                     |    L     |      3hrs      |               |             |
| Total                                        |          |     42hrs      |     45hrs     |    45hrs    |

## SWOT Analysis

### Strengths:

I feel like I have a visual idea in my head of what I want to accomplish. I feel like I have a good understanding of how to make React components functional. I also know myself and know I will work hard and be determined to make this project the best it can be.

### Weaknesses:

The one concept with React i'll need to brush up on is Link and Route, but this project I feel like will force me to get better with that concept. I also feel like I will be tempted to take more time than I should on CSS, so I need to remind myself to try not to do that as much.

### Opportunities:

This presents a chance for me to make a really useful app that I feel like is not existent on a large scale, specifically the type of information I am wanting to incorporate into my app. This also gives me a great chance to show my skills with React and to challenge myself with a tougher project.

### Threats:

Time will definitely be a factor, and I need to really make sure I spend my time over the weekend wisely. I will also need to be mindful that it's ok to get stuck on something and not be afraid to reach out for help when needed.
