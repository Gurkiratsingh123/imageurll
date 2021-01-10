const image= require('../model/schema');

exports.getURL = async (req, res) => {
  const images = await image.find();
  res.status(200).json({ image });
};

exports.postURL = async (req, res) => {
  const { name } = req.body;
  const imagePath = 'http://localhost:3000/images/' + req.file.filename; // Note: set path dynamically
  const images = new image({
    name,
    imagePath,
  });
  const createdProfile = await profile.save();
  res.status(201).json({
    image: {
      ...createdProfile._doc,
    },
  });
};