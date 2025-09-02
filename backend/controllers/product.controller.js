import Product from "../models/product.model.js";

// ✅ Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({
      success: true,
      data: products,
      message: "Products retrieved successfully.",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// ✅ Create new product
export const createProducts = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const product = await Product.create(data);
    return res.status(201).json({
      success: true,
      data: product,
      message: "Product created successfully.",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// ✅ Update product by ID
export const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true, // return updated document
      runValidators: true, // validate against schema
    });

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });
    }

    return res.status(200).json({
      success: true,
      data: updatedProduct,
      message: "Product updated successfully.",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// ✅ Delete product by ID
export const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};
