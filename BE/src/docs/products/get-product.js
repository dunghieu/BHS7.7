module.exports = {
  // operation's method
  get: {
    tags: ["Product"], // operation's tag.
    description: "Get a product", // operation's desc.
    operationId: "getProduct", // unique operation id
    parameters: [
      // expected params.
      {
        name: "id", // name of the param
        in: "path", // location of the param
        required: true, // Mandatory param
        description: "A single product id", // param desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Product is obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/product", // todo data model
            },
          },
        },
      },
      // response code
      404: {
        description: "Product not found", // response desc.
      },
    },
  },
};
