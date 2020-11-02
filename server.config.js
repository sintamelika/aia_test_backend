module.exports = {
  apps : [{
    name        : "AIA-TEST-API",
    script      : "./index.js",
    watch       : true,
    ignore_watch: [".git", "node_modules"],
    watch_options: {
      "followSymlinks": false
    },
    env: {
      "NODE_ENV": "development"
    }
  }]
}

