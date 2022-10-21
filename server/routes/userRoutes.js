const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = "one-love-keeps-us-going";
const JWT_EXPIRE = "1d";

module.exports = (app) => {
  app.post("/api/signup", async (req, res) => {
    const { username, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 5);
    try {
      const oldUsername = await User.findOne({ username });

      if (oldUsername) {
        return res.json({ error: "User already exist" });
      }
      await User.create({
        username,
        password: encryptedPassword,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
  });

  app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username, password }, JWT_SECRET);

      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "Invalid Password" });

    app.get("/api/content", async (req, res) => {
      const { token } = req.body;
      try {
        const user = jwt.verify(token, JWT_SECRET);
        const { username } = user;
        User.findOne(username)
          .then((data) => {
            res.send({ status: "ok", data });
          })
          .catch((error) => {
            res.send({ status: "error", data: error });
          });
      } catch (error) {}
    });
  });
};
