# React-Based Contentful UI Extension

This is a boilerplate for a React-based UI Extension for [Contentful](https://www.contentful.com/developers/docs/concepts/uiextensions/).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It was then "ejected" in order to add the `HtmlWebpackInlineSourcePlugin` plugin to our 
production webpack configuration, which allows us to inline all Javascript and CSS into our `index.html` file. This is a
requirement since Contentful expects all content to be in one `.html` file.

![screenshot](https://user-images.githubusercontent.com/1427475/34419128-1f9a6662-ebd0-11e7-966d-7a9c09069a27.png)

## Features

- Fully fledged React app, which is ideal for non-trivial UI extensions where a simple static web page just won't cut it.
- Local development mode with mocked Extension SDK.
- Simple build and deploy scripts.

## Using this boilerplate

Clone this repository into a new project:

```
git clone git@github.com:shiftlab/contentful-react-ui-extension.git your-new-ui-extension
```

Follow the [Setup](#setup) instructions below.

Configure your `extension.json`. More info in the [Configuration](#configuration) section.

Change the `origin` remote for this project to your own Git repository and push it up.

Build up your extension out in `App.js`. More info in the [Building your extension](#building-your-extension) section.

## Setup

Clone this project.

Install dependencies by running `yarn`.

Configure an `.env` file:

```
SPACE_ID={space id from contentful admin}
CONTENTFUL_MANAGEMENT_ACCESS_TOKEN={management token from contentful admin}
```

## Configuration

UI Extension configuration options are provided with a descriptor file called `extension.json`.
 
Details on configuring this file can be found [here](https://github.com/contentful/contentful-extension-cli#descriptor-files).

## Building your extension

By default, all `App.js` does is:
1. Initialize the [Contentful UI Extensions SDK](https://github.com/contentful/ui-extensions-sdk) 
2. Retrieve the current value of the field from the SDK
3. Shows that value in an input field
4. Provides a simple "Update" button which updates the field

So when your start this app for the first time, all you will see is this:

```
<input type="text" value="A value" />
<button>Update</button>
```

When you are running this app in development mode, you'll see the value as "A value". "A value" comes from a call to our SDK wrapper, `api.js`.

There are two methods on `api.js`, `getValue` and `setValue`. These are used to interact with the Contentful SDK. The wrapper
is set up so that when running in development mode, those methods are simply stubbed out. Calls to `getValue` 
will always return a static value configured inside of `api.js`. `setValue` will simply return an empty Promise.
 
As your app grows, you'll want to evolve the mock api to include behavior consistent with what you'd actually experience 
when deployed.

### Styling

Use styles provided by `https://contentful.github.io/ui-extensions-sdk/cf-extension.css`

## Available commands

- `yarn start` - Start server in development mode for local development
- `yarn build` - Builds deployable UI extension
- `yarn deploy` - Deploys extension to Contentful
