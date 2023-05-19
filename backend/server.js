import express from "express";
import data from "./data.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api/products", (req, res) => {
  console.log("Sending Products Data");
  res.send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
  console.log("Sending Slug Data");
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
