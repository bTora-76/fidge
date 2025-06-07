const errorMW = (err, req, res, next) => {
  console.log(err);
  res.status(500).send("There's an error");
};

export default errorMW;
