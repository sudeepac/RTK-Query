import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// import { DateTime } from 'luxon'

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

//use bcryptjs method 'compare' to check if entered password (plain text) matched this.password (user's hashed password)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//middleware to encrypt password before saving the data from user registration
//check if the password is new data or modified to avoid creating a new hash if there's a profile update only

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export const User = mongoose.model("User", userSchema);
