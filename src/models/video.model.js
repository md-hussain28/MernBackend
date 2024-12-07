import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //Cloudinary Url
      required: [true, "Video file is required"],
    },
    thumbnail: {
      type: String, //Cloudinary Url
      required: [true, "Thumbnail is required"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Video title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    duration: {
      type: Number, //Cloudinary Url
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Video = mongoose.model("Video", videoSchema);
