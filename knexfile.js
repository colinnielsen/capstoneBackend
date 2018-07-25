module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/models"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + "?ssl=true"
  }
};