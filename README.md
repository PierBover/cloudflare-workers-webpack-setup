# cloudflare-workers-webpack-setup

Usually Cloudflare's Wrangler triggers a webpack build when a file is changed. This seems to be slow so I created this setup. Webpack builds to `dist/index.js` which triggers a restart of the worker when using `wrangler dev` from the `dist` folder.

This requires to have two terminal shells open. One for running `npm run webpack-dev` and another `npm run wrangler-dev`.

To test this you need to add `dist/wrangler.toml` with your own ids:
```
name = "test-webpack"
route = "example.com/*"
type = "javascript"
account_id = "XXXXXXXX"
zone_id= "XXXXXXX"
workers_dev = false
```