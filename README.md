# React-Based Contentful UI Extension

This is a boilerplate for a React-based UI Extension for [Contentful](https://www.contentful.com/developers/docs/concepts/uiextensions/).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project was "ejected" from `create-react-app` in order to add the `HtmlWebpackInlineSourcePlugin` plugin for our 
production webpack configuration, which allows us to inline all Javascript and CSS into our `index.html` file. This is a
requirement since Contentful expects all content to be in one `.html` file.

## Using this boilerplate

Follow the [Setup](#setup) instructions below.

Configure your `extension.json`. More info [here](#configuration) .

Build up your extension out in `App.js`. More info [here](#building-your-extension).   

Change the `origin` remote for this project to your own Git repository and push it up.

## Setup

Clone this project.

Install dependencies with `yarn`.

Configure an `.env` file:

```
SPACE_ID={space id from contentful admin}
CONTENTFUL_MANAGEMENT_ACCESS_TOKEN={management token from contentful admin}
```

## Configuration

Configuration is done via a descriptor file called `extension.json`.
 
Details on configuring this file can be found [here](https://github.com/contentful/contentful-extension-cli#descriptor-files).

## Building your extension

By default, all `App.js` does is initialize the [Contentful UI Extensions SDK](https://github.com/contentful/ui-extensions-sdk) 
and pass the value down to `App.js`. So when your start this app for the first time, all you will see is a simple form field
and Update button:

```
<input type="text" value="A value" />
<button>Update</button>
```

When you are running this app in development mode, locally, you'll see the value as "A value". "A value" comes from a call to our SDK wrapper, `api.js`.

There are two methods on `api.js`, `getValue` and `setValue`. These are used to interact with Contentful. The wrapper
is set up so that when running locally in development mode, those methods are simply stubbed out. Calls to `getValue` 
will always return a static value configured inside of `api.js`. `setValue` will simply return an empty Promise.
 
As your app grows, you'll want to evolve that mock to include behavior consistent with what you'd actually experience 
when deployed.

### Styling

Use styles provided by `https://contentful.github.io/ui-extensions-sdk/cf-extension.css`

## Available commands

- `yarn start` - Start server in development mode for local development
- `yarn build` - Builds deployable UI extension
- `yarn deploy` - Deploys extension to Contentful
