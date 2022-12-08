import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    age: Number,
    profileImage: {
      type: String,
      default:
        'https://pixlok.com/wp-content/uploads/2021/03/default-user-profile-picture.jpg'
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'moderators'],
      default: 'user'
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true
  }
)

const User = model('User', userSchema)

module.exports = User