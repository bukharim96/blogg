module.exports = (req, res) => {
  const {
    query: { name }
  } = req;

  console.log(name);

  res.send(`Hi ${name}!!!`);
};
