module.exports = {
  components: {
    schemas: {
      //user model
      user: {
        type: "object", //data type
        properties: {
          email: {
            type: "string",
            description: "User email",
            example: "example@email.com",
          },
          password: {
            type: "string",
            description: "User password",
            example: "123456",
          },
          token: {
            type: "string",
            description: "User authorize token",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
        },
      },
      product: {
        type: "object",
        properties: {
          user: {
            description: "user id",
            $ref: "#/components/schemas/user",
          },
          img: {
            type: "string",
            description: "product image",
          },
          name: {
            type: "string",
            description: "product name",
            example: "product1",
          },
          price: {
            type: "number",
            description: "product price",
            example: "100",
          },
          description: {
            type: "string",
            description: " product description",
            example:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis venenatis turpis quis posuere. Etiam aliquam tempor nibh quis efficitur. Cras aliquam ornare neque, eget egestas nibh auctor vitae. Praesent blandit ante et diam ultrices feugiat. Aliquam erat volutpat. Morbi dapibus sollicitudin mi vel molestie.",
          },
          category: {
            type: "string",
            description: "product category",
            example: "Bottle",
          },
          reviews: {
            type: "array",
            description: "product reviews",
            $ref: "#/components/schemas/review",
          },
          rating: {
            type: "number",
            description: "product rating",
            example: "3",
          },
          totalReviews: {
            type: "number",
            description: "num of reviews",
            example: "69",
          },
        },
      },
      review: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "reviewer name",
          },
          rating: {
            type: "number",
            description: "reviewer rating",
          },
          comment: {
            type: "string",
            description: "reviewer comment",
          },
          user: {
            $ref: "#components/schemas/user",
          },
        },
      },
    },
  },
};
