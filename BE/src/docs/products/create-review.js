module.exports = {
  // operation's method
  post: {
    tags: ["Product"], // operation's tag
    description: "Create review", // short desc
    operationId: "createReview", // unique operation id
    parameters: [
      // expected parameters
      {
        name: "id", // name of param
        in: "path", // location of param
        required: true, // mandatory
        description: "Id of product to be reviewed", // param desc
      },
    ],
    requestBody: {
      // expected request body

      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/review", // todo input data model
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      201: {
        description: "Review created successfully", // response desc
      },
      // response code
      400: {
        description: "Product already review", // response desc
      },
      404: {
        description: "Product not fount",
      },
    },
  },
};
