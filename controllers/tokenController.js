const Token = require("../model/Token");

const saveToken = async (req, res) => {
  const { token } = req.body;

  const tokens = await Token.find();

  if (tokens.map((i) => i.token).includes(token)) {
    return res.status(400).json({ message: "Token mevcut" });
  } else {
    await Token.create({
      token: token,
    });
    return res
      .status(202)
      .json({ status: 200, message: "Başarıyla kaydedildi!" });
  }
};

module.exports = { saveToken };
