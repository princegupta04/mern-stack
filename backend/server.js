import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect DB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
    process.exit(1); // Stop app if DB connection fails
  });
