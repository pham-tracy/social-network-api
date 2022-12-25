const { Schema, model } = require("mongoose");
const Thought = require("./Thought");
// const User = require("../models");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //TODO: validate email with Mongoose' matching validation
    },
    thoughts: [
      // [thoughtSchema]
      {
        // Array of _id values referencing the Thought model
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      // [userSchema]
      {
        // Array of _id values referencing the User model (self-reference)
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// Virtual that retrieves length of user's friends array field on query
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize user model
const User = model("user", userSchema);

module.exports = User;
