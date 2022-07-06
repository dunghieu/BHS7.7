module.exports = {
  // method of operation
  get: {
    tags: ["Product"], // operation's tag.
    description: "Get products", // operation's desc.
    operationId: "getProducts", // unique operation id.
    parameters: [], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: "Products were obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/product", // Todo model
            },
          },
        },
      },
      404: {
        description: "product not fount",
      },
    },
  },
};
