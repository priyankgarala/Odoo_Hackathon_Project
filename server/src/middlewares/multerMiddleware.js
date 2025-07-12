import multer from "multer";

const storage = multer.memoryStorage(); // We upload from buffer to Cloudinary
const upload = multer({ storage });

export default upload;
