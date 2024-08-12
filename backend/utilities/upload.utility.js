const cloudinary = require('cloudinary');

const uploadFile = async (filepath, folder="") => {
  const result = await cloudinary.uploader.upload(filepath, {
    folder: folder,
    public_id: `${folder}/${Date.now()}`,
    require_type: "auto",
  });
  return result;
};

module.exports = {
  uploadFile
};