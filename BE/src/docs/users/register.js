module.exports = {
  // operation's method
  post: {
    tags: ["User"], // operation's tag.
    description: "Register", // operation's desc.
    operationId: "register", // unique operation id
    parameters: [],
    // expected responses
    responses: {
      // response code
      201: {
        description: "Created successfully", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/User", // todo data model
            },
          },
        },
      },
      // response code
      401: {
        description: "Missing required params", // response desc.
      },
      400: {
        description: "User already exist",
      },
    },
  },
};
