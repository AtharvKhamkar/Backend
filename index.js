require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "AtharvKhamkar",
    "id": 96619172,
    "node_id": "U_kgDOBcJKpA",
    "avatar_url": "https://avatars.githubusercontent.com/u/96619172?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AtharvKhamkar",
    "html_url": "https://github.com/AtharvKhamkar",
    "followers_url": "https://api.github.com/users/AtharvKhamkar/followers",
    "following_url": "https://api.github.com/users/AtharvKhamkar/following{/other_user}",
    "gists_url": "https://api.github.com/users/AtharvKhamkar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AtharvKhamkar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AtharvKhamkar/subscriptions",
    "organizations_url": "https://api.github.com/users/AtharvKhamkar/orgs",
    "repos_url": "https://api.github.com/users/AtharvKhamkar/repos",
    "events_url": "https://api.github.com/users/AtharvKhamkar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AtharvKhamkar/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 37,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-12-24T11:09:50Z",
    "updated_at": "2024-01-04T08:22:17Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("khamkaratharv2002@gmail.com")
})

app.get('/login', (req, res) => {
    res.send("<h1>My name is Atharv</h1>")
})

app.get("/youtube", (req, res) => {
    res.send("<h2>Chai aur Code</h2>")
})

app.get("/facebook", (req, res) => {
    res.send("<h2>Logged in facebook</h2>")
})

app.get("/github", (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})