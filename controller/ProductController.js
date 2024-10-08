const Products = require("../models/ProductSchema");

exports.createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await Products.create(productData);
    res
      .status(201)
      .json({ message: "Product added successfully", data: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add product", error: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const companyId = req.params.company_id;

    const product = await Products.find({ company_id: companyId });
    if (product.length === 0) {
      return res.status(404).json({ message: "No Data" });
    }
    res
      .status(200)
      .json({ message: "Data retrieved successfully", data: product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to get product", error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Find the product by ID and remove it
    const deletedProduct = await Products.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res
      .status(200)
      .json({ message: "Product deleted successfully", data: deletedProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Product", error: error.message });
  }
};

exports.updateproducts = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedproductData = req.body;
    const updatedproduct = await Products.findByIdAndUpdate(
      productId,
      updatedproductData,
      {
        new: true, // Return the updated document
        runValidators: true, // Ensure the updated data is validated against the schema
      }
    );

    if (!updatedproduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res
      .status(200)
      .json({ message: "product updated successfully", data: updatedproduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update product", error: error.message });
  }
};
