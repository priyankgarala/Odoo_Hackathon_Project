import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

cloudinary.config({
  cloud_name: "dtxiapgsx",
  api_key: "841229174947778",
  api_secret: "Xhv_h1rttMfPnjjCyIWr-tnpuDk",
});

/**
 * Upload buffer to Cloudinary
 */
export const uploadToCloudinary = (fileBuffer, filename = "upload") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "re-wear/items",
        public_id: filename.split(".")[0],
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};
