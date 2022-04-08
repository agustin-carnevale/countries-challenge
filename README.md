# Countries App Challenge

## Instructions

To run the app in a dev/local environment:

1 - Clone this repository

2 - ``cd`` into the repository folder

3 - run ``npm install``

and finally:

```
  npm run start
```

To run tests:

```
  npm run test
```

## Initial setup and decisions

### Folders structure
For this challenge, I decided to face it as a small project but with good practices. 
For this reason, I chose a clear and intuitive, folder/files structure, that would allow the project to scale, but without going with more strictly strutured organization like Clean/Hexagonal arquitecture, etc.

### State management
Because of the size of the project and small amounts of features, I decided to go with Context, instead of Redux, for state management. However, it wouldn't be so complicated to migrate to redux with minimal code changes.

### UI lib/styles
For styles and UI elements I used material-ui, as it allowed me to use many ui elements out-of-the-box, and also keep the 'look and feel' somehow consistent along the views. It also allows me to set and customize a theme, easily toggle dark mode, and of course use css-in-js (as other libs like styled-components or emotion).

### Code formatting
I installed and configured Prettier with some basic rules for formatting the code. (``npm run format`` will run prettier).

## Notes and clarifications

- The idea was to optimize the amount of requests to the API, so for that reason, I only fetch all the countries once (when the app first renders). Then any filter action by the user is calculated/filtered locally, the same as navigating from one page to the other (countries are fetched only once). This was possible as the amount of countries (and data of each country) does not require pagination, etc.

- The filter functionality of the SearchBar (input + select) combines the input text of the user on the textfield with the selected region if any. Meaning you can filter by region, by input or both.

- For showing a particular country in the details page, I decided to search/identify it by a field called 'ccn3' provided by the API. However I am assuming this country code is unique (as an id), something that was not clear at all at the API documentation. If this was not the case, it can be easily changed to some other code among the provided by the API (or even just the name).

- As you can see I used 'useDebouncer' hook to debounce the input. This was not strictly needed here but was mainly to show that is a common and good practice, specially if the input triggers api calls or heavy calculations.

- Another thing to notice is that at 'index.tsx' file I used createRoot (from 'react-dom/client') to render the App, instead of using the old way ReactDom.render(). This is a new feature required by React v18.
 
- I did not pay special attention to details/styles.


## Next Steps: things to improve

Although a small project, there is still a lot of room for improvements, among others:

- Add clear region filter functionality (to avoid refresh/refetch), if the user wants to clear any previous selection.
- If the project grows, maybe use redux instead of just context.
- Improve/polish styles and UX details (for example: show a nice message/picture when there are no results for the current filter options).
- Better/more extensive test coverage (if I wanted to continue testing the app with more meaningful tests, I would probably need to add some tests config/utils file with a custom render, that handles all the Providers the App needs to work, in this case, the ThemeProvider, the CountriesProvider, etc).
