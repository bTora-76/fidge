const notFound = (req, res) => {
  res.status(404).json({ msg: "404 Page Not Found!" });
};

module.exports = notFound;
