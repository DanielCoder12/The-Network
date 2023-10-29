export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class
    this.graduated = data.graduated

    // TODO add additional properties if needed
  }
}

const account = {
  "_id": "653bf1c0bc54cb6626c876ef",
  "subs": [
    "auth0|653bf1bf4ed9a649d103840e"
  ],
  "email": "minecraft@minecraft.com",
  "name": "minecraft",
  "picture": "https://s.gravatar.com/avatar/c679f0317f1920dc6165123424752ae1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmi.png",
  "bio": "",
  "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
  "github": "",
  "linkedin": "",
  "resume": "",
  "class": "",
  "graduated": false,
  "createdAt": "2023-10-27T17:22:13.650Z",
  "updatedAt": "2023-10-27T17:22:13.650Z",
  "__v": 0,
  "id": "653bf1c0bc54cb6626c876ef"
}
