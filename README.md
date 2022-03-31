# STARGAZER

STARGAZER is a web application built with [React](https://reactjs.org/) that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the a searchable term.

## API

The app uses the [GitHub GraphQL API](https://docs.github.com/en/graphql) for its API.

By default, `STARGAZER` will use the API at `https://api.github.com`.

## Set Up

To start, insert a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) into your `.env` at `REACT_APP_GITHUB_API_KEY=`.

- Any valid key can be used and does not require any special permissions. If you'd like a default key feel free to ping me and I can provide one.

#### Yarn

`yarn install`

#### API Host

The app will default to using the [GitHub GraphQL API](https://docs.github.com/en/graphql).

To set up, insert a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) into your `.env` at `REACT_APP_GITHUB_API_KEY=`.

- Any valid key can be used and does not require any special permissions. If you'd like a default key feel free to ping me and I can provide one.

## Run the App

### Web

`yarn start`

## Test

In live-reload, runs tests against new and edited files with option to run all tests.

`yarn test `

## Features:

STARGAZER displays "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application displays how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a related topic displays the topics related to that topic, and how many stargazers they have. And so forth.

The app has Search capability with autocomplete suggestions to search/query on any term or topic.

The app visualizes data from the [GitHub GraphQL API](https://docs.github.com/en/graphql)

## Dev Notes:

I used this basic outline as a feature roadmap when designing the app.

```
        StarGazerContent
          Search
            SearchBar *react-select
              autocomplete
            SearchButton
          Topic
            name
            link to github
            stargazer count
          RelatedTopicList
            RelatedItem
              name
              StargazerCount
              link to search
            RelatedItem
            RelatedItem
        LoadingPage
```

Bc the app has relatively limited functionality I went with the theme of "boutique" data visualizer.

### Content Page:

The Content Page holds the state that manages api calls and github data. Functionality is divided into three main catagories: Search, Topic, and Related Topics.

Search calls, Cached data, loading state, and error state for this page are all managed with [React Query](https://react-query.tanstack.com/)

### Search:

The Search Component leverages [React Select](https://react-select.com/home) for managing autocomplete for popular searchable topics.

### Topic & Related Topics:

The Topic Components are straight forward display components. They use a `setState` fnc passed as a prop to trigger `StargazerContentPage` calls and rerenders.

### API:

I used [GraphQL Request](https://github.com/prisma-labs/graphql-request) as the client over [Apollo](https://www.apollographql.com/docs/) so that I could enable [React Query](https://react-query.tanstack.com/) for state management and [Mock Serivice Worker](https://mswjs.io/) for testing.

### Testing:

The tests leverage [React Query](https://react-query.tanstack.com/) and [Mock Serivice Worker](https://mswjs.io/). I like using MSW because it let's you mock data and test the real API functions whereas both the data and function generally need to be mocked with jest only. I think that testing the real fnc allows for a much higher quality of test.

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- Code Structuring:

This was my first time using a GraphQL API. It was a really fun learning experience. I used a framework that I was familiar with and adapted it to GraphQL. I'd be excited to work on a professional GraphQL stack!

- Refactoring:

I made the `Error` component last, and used [Material UI](https://mui.com/) for the component. Since I ended up using Material UI I would have liked to have used it from the begining and leveraged more base components from them for the sake of simplicity.

- Additional Features:

  I would liked to have used a debounced query on the input so that the autocomplete suggestions would be based on possible searches and not a maintained list of suggestions. I choose to do it as is bc a search for like terms was only possible with the Github REST API and not with the GraphQL schema for the GraphQL API.
