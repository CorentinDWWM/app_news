const Post = require("../models/Post");

const addPost = async (req, res) => {
  console.log(req.body);
  try {
    // on récupère l'ID de l'utilisateur
    const { user } = req.body;

    // on vérifie si l'utilisateur existe
    const author = user;
    if (!author) {
      return res.status(400).json({ message: "Utilisateur non trouvé" });
    }

    // on insère la dépense en BDD
    const post = await Post.create(req.body);

    // on la retourne à l'application WEB
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

const getAllPost = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addPost, getAllPost };
