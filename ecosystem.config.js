module.exports = {
  apps: [
    {
      name: "GitHubActions",
      script: "app.js",
      instances: 1,
      autorestart: true,
      watch: false
    }
  ]
};
