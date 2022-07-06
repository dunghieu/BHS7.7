module.exports = {
  // operation's method
  put: {
    tags: ["Product"], // operation's tag
    description: "Update product", // short desc
    operationId: "updateProduct", // unique operation id
    parameters: [
      // expected params
      {
        name: "id", // name of param
        in: "path", // location of param
        required: true, // mandatory
        description: "Id of product to be updated", // short desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Product updated successfully", // response desc.
      },
      // response code
      404: {
        description: "Product not found", // response desc.
      },
    },
  },
};
