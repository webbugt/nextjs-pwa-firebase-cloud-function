# Next.js serverless PWA with Firebase and React Hooks, hosted on Firebase, Firestore & Cloud Functions

\_Note: This is still a work in progress

### Planned:

- implement typescript
- implement stitches for css-in-js styling (offer it as branch alternative with styling)
- implement FireCMS as simpler solution for database entry
- implement more complex article entity
- nextjs app temp files:
  - population from google bucket on instance creation
  - syncing with google bucket on instance closure
- implement keepalive function to avoid dry runs
- implement support for additional cloud function

\_Note: this is my first boilerplate for React web apps on Firebase. Initially based on https://github.com/tomsoderlund/nextjs-pwa-firebase-boilerplate.git

## Magic sauce

The issue with all other guides for hosting Next.js app as a Cloud Function was that temporary next data would error out

## Why is this awesome?

This is a great template for a any project where you want **React (with Hooks)** (with **static site generation (SSG)** or **server-side rendering (SSR)**, powered by [Next.js](https://github.com/zeit/next.js)) as frontend and **Firebase** as backend. _Lightning fast, all JavaScript._

- Great starting point for a [PWA (Progressive Web App)](https://en.wikipedia.org/wiki/Progressive_web_applications), which you can add to your Home Screen and use as a full-screen app.
- PWA features such as `manifest.json` and offline support (`next-offline`).
- Can be deployed as [serverless functions on Vercel/Zeit Now](#deploying).
- Uses the new Firebase [Firestore](https://firebase.google.com/docs/firestore) database, but easy to replace/remove database.
- Login/Signup with Firebase Authentication.
- Can use SSG `getStaticProps` or SSR `getServerSideProps`.
- React Hooks for business logic.
- Free-form database model. No GraphQL or REST API, just add React Hooks and modify `getStaticProps`/`getServerSideProps` when changing/adding database tables.
- Easy to style the visual theme using CSS (e.g. using [Design Profile Generator](https://tomsoderlund.github.io/design-profile-generator/)).
- SEO support with `sitemap.xml` and `robots.txt`.
- Google Analytics and `google-site-verification` support (see `config/config.js`).
- Flexible configuration with `config/config.js` and `.env.local` file.
- Code linting and formatting with StandardJS (`yarn lint`/`yarn fix`).
- Unit testing with Jasmine (`yarn unit`, not yet included).
- Deploy whole app on Firebase, static on Firstore, db on Firebase, app on Cloud Functions
- Great page speed, see [Lighthouse](https://developers.google.com/web/tools/lighthouse) score:

## How to use

TODO: write how to use

- create repo from template
- create firebase services and APIs
  - raise cloud function ram limit to 521mb (maybe unneccesary)
- fill env files/ci configs
- test run
- how to develop

## Modifying the app to your needs

### Change app name and description

Do search/replace for the `name` “nextjs-pwa-firebase-boilerplate” and `description` “Next.js serverless PWA with Firebase and React Hooks” to something else.

Change the `name` and `short_name` in `public/manifest.json`.

Change the `version` in `package.json` to `0.1.0` or similar.

### Renaming “Article” to something else

The main database item is called `Article`, but you probably want something else in your app.

Rename the files:

    mv hooks/articles.js hooks/{newName}s.js

    mkdir -p components/{newName}s
    mv components/articles/AddArticleForm.js components/{newName}s/Add{NewName}Form.js
    mv components/articles/ArticleDetails.js components/{newName}s/{NewName}Details.js
    mv components/articles/ArticleList.js components/{newName}s/{NewName}List.js
    mv components/articles/ArticleListItem.js components/{newName}s/{NewName}ListItem.js
    rm -r components/articles

    mkdir pages/{newName}s
    mv "pages/articles/[slug].js" "pages/{newName}s/[slug].js"
    rm -r pages/articles

Then, do search/replace inside the files for different casing: `article`, `Article`, `ARTICLE`.

### Change port number

Do search/replace for `3004` to something else.

### How to remove/replace Firebase as database

Delete `lib/data/firebase.js` and modify `hooks/articles.js`.

### Change visual theme (CSS)

1. Change included CSS files in `pages/_app.js`
2. Change CSS in `public/app.css`
3. Change font(s) in `PageHead.js`
4. Change colors in `public/manifest.json`

### Login/Signup with Firebase Authentication

You need to enable Email/Password authentication in https://console.firebase.google.com/project/YOURAPP/authentication/providers

## Deploying on Firebase

Todo: write more detailed deployment guide
