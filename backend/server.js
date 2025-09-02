import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";  // ✅ import the router
import cors from "cors";
const app = express();


app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Server + DB
app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
