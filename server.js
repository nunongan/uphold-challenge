const express = require("express");
const sdk = require("./Initialization"); // Import your SDK initialization

const app = express();
const port = process.env.PORT || 3000; // Use the same port as the client-side React app

// Define a route to proxy your API request
app.get("/api/fetchRates/:currencyOne", async (req, res) => {
  const { currencyOne } = req.params;

  try {
    const response = await sdk.getTicker(currencyOne);
    res.json(response);
  } catch (error) {
    console.error("Error fetching rates:", error);
    res.status(500).json({ error: "Error fetching rates" });
  }
});

// Serve the static files from the React app
app.use(express.static("client/build"));

// All remaining requests return the React app, so it can handle routing
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
