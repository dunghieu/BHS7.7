module.exports = {
  // operation's method.
  delete: {
    tags: ["Product"], // operation's tag
    description: "Deleting a product", // short desc
    operationId: "deleteProduct", // unique operation id
    parameters: [
      // expected parameters
      {
        name: "id", // name of param
        in: "path", // location of param
        required: true, // mandatory
        description: "Deleting a done todo", // param desc
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "ERASED!", // response desc
      },
      // response code
      404: {
        description: "Product not found", // response desc
      },
    },
  },
};
