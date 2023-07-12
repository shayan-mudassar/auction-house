# Auction Point

Auction Point is a website where users can buy and sell items. My aim with this Full Stack project was the design and development of an online auction platform, similar to eBay. The implementation follows a REST-api architecture and some of the key features are:

- **Secure Authorisation and Authentication**
- **Role-based Access Control**
- **Mail Client within the Application**
- **Recommendations using Matrix Factorisation**

## Requirements & Setup

### Back-end

1. For the back-end MySQL or a similar relational database is required as well as the installation of [Node.js and npm]

2. In the [config.json](api/config/config.json) file add your personal MySQL settings.

3. To install express, cors and other necessary modules, in the [api](api/) folder run: `npm install`

4. To connect sequelize to the database, run the command: `sequelize init`

5. The transactions are encrypted through the SSL/TLS protocol. To create the certificate locally you can use `mkcert` and then add the path in:

```js
const sslServer = https.createServer(
  {
    key: fs.readFileSync("/yourpath/key.pem"),
    cert: fs.readFileSync("/yourpath/cert.pem"),
  },
  app
);
```

- When the server starts with a "clean" database, the tables are automatically created based on the object-oriented models defined in [models](api/models/).
- Also, a user with the administrator role is automatically created with the username: admin and initial password: 1234, which can be changed.
- Nodemon is also set up, so that the server automatically restarts every time the code of back-end is changed, while the server is running.

To start up the server simply run in the [api](api/) directory:

```
npm start
```

### Front-end

For the front-end all the necessary dependencies are defined in the `package.json` file. To install them simply run in the [front](front/) directory: `npm install`

To start up the front-end in the [front](front/) directory run:

```
npm start
```
