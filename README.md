# React-Based Contentful UI Extension

This is a boilerplate for React-based UI Extensions.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project was "ejected" from `create-react-app` in order to add the `HtmlWebpackInlineSourcePlugin` plugin for our 
production webpack configuration, which allows us to inline all Javascript and CSS into our `index.html` file. This is a
requirement since Contentful expects all content to be in one `.html` file.

## Using this boiler plate

Follow the Setup instructions below

Configure your `extension.json`

Build up your extension out in `App.js`

Change the `origin` remote for this project to your own Git repository and push it up

## Setup

Clone this project

Install dependencies with `yarn`

Configure an `.env` file

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