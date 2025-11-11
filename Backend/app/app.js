const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path")

// Init app
const app = express();
const port = 3000
app.use(express.json());

// Import routes
// const clientRoutes = require("./routes/clients");
const authRoutes = require("./routes/auth");

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "AnchorPoint API",
            version: "1.0.0",
            description: "API for the AnchorPoint application.",
        },
    },
    apis: [path.join(__dirname, "routes/*.js")], // absolute path based on this file
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use routes
// app.use(clientRoutes);
app.use(authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})