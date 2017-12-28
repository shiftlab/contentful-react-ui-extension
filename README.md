# Contentful Backlink UI Extension

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project was "ejected" from `create-react-app` in order to add the `HtmlWebpackInlineSourcePlugin` plugin for our 
production webpack configuration, which allows us to inline all Javascript and CSS into our `index.html` file. This is a
requirement since Contentful expects all content to be in one `.html` file.

## Setup

Clone project

`yarn`

Configure `.env`
```
SPACE_ID={space id from contentful admin}
CONTENTFUL_MANAGEMENT_ACCESS_TOKEN={management token from contentful admin}
```

## Contentful Extension Configuration

Contained in `extension.json`

(See [Contentful UI Extensions](https://www.contentful.com/developers/docs/concepts/uiextensions/) from more info)

## Running locally

`yarn start`

The content API is mocked when running locally.

Mock is configured at `api.js` 

## Deploy

```
yarn deploy
```