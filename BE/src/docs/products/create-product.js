module.exports = {
  // operation's method
  post: {
    tags: ["Product"], // operation's tag
    description: "Create product", // short desc
    operationId: "createProduct", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body

      content: {
        // content-type
        "application/json": {
          schema: {
            type: "object",
            $ref: "#/components/schemas/product", // todo input data model
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      201: {
        description: "Product created successfully", // response desc
      },
      // response code
      400: {
        description: "Err", // response desc
      },
      401: {
        description: "Missing required params",
      },
    },
  },
};
