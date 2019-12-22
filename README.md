# Issue

See [Github#1744](https://github.com/feathersjs/feathers/issues/1744) for more info.

This is an attempt to reproduce an issue whereby the rest-client cannot submit `multipart/form-data` using `fetch` and possible others

Note: May need to create `public/uploads` directory in `client`

# Run

This reproduce is split into two part, client and server.

To run the server, navigate to `feathers-upload`

1. Run `npm ci`
2. Run `npm run dev`

To run the client, navigate to `react-upload`

1. Run `npm ci`
2. Run `npm start`

# Usage

## Client

1. Navigate to the homepage (http://localhost:3000)
2. Input `name` and `type`
3. Choose one or more `files`
4. Click `Submit`

# Expected Behavior

Using `feathers-rest-client` with `fetch` should allow to `POST` data with `FormData` without the need to specify the `Content-Type`? Similar to how `window.fetch` is.