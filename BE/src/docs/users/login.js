module.exports = {
  // method of operation
  post: {
    tags: ["User"], // operation's tag.
    description: "Login", // operation's desc.
    operationId: "login", // unique operation id.
    parameters: [], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: "Login success", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/user", // Todo model
            },
          },
        },
      },
      401: {
        description: "Missing required params",
      },
      400: {
        description: "Invalid email or password",
      },
    },
  },
};
