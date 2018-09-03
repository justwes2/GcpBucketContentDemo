## GCP Based Serverless App with Static Frontend

#### See the app [here](https://storage.googleapis.com/coffay-serverless-mvp-frontend/index.html)

***

This project was a quick mvp for a tool to host webinar videos out of a GCP bucket (current timestamp ~7 hrs). The design is a bucket to hold flat files- they will be video files, right now its just some images, a cloud function to query the bucket and return the name and download link, and a bucket for the front end, which is currently just a jQuery index page.

The cloud function is held in the `backend` directory. Right now GCP supports Node.js for cloud functions. The major gotcha for the backend was the CORS enablement. Once lines 16-27 were added, it addressed the issues. Future improvements will include locking down the request origin more tightly.

The front end is just a jQuery site- this was a proof of concept for GCP tools, the front end is just a placeholder- since GCP readily exposes an API, any JS framework would work, or any other tool that can hit the API.

Hosting the static site in another bucket works similarly to how it would in another CSP *coughcoughAWScough*- after making the bucket viewable by `allUsers`, the page can be accessed at the link provided. Unlike another CSP that won't be mentioned, without a domain name tied to the bucket, to access the site, the user must link directly to the `index.html` or equivalent. 
