# Contentful Backlink UI Extension

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project was "ejected" from `create-react-app` in order to add the `HtmlWebpackInlineSourcePlugin` plugin for our 
production webpack configuration, which allows us to inline all Javascript and CSS into our `index.html` file. This is a
requirement since Contentful expects all content to be in one `.html` file.

## Contentful Configuration

Contained in `public/extension.json`

(See [Contentful UI Extensions](https://www.contentful.com/developers/docs/concepts/uiextensions/) from more info)

## Deploy to production

Build the production assets with:

```
yarn build
```

Get a Content Management token from the Contentful Dashboard 

If this is the first time deploying, using the following command:

```
cd build
export CONTENTFUL_MANAGEMENT_ACCESS_TOKEN={content_management_token}
contentful-extension create --space-id {space_id}
```

For subsequent additions, use this command:

```
cd build
export CONTENTFUL_MANAGEMENT_ACCESS_TOKEN={content_management_token}
contentful-extension update --space-id {space_id} --force
```