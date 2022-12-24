const { Router, json } = require("express"); // router expressdan keladi;
const router = Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find(); //modelkalani hammasini topib qoyib beradi
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // id ga qarab modelkadan get qladi
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
// add POST - devices
router.post("/", async (req, res) => {
  const { name } = req.body;

  let user = await User.findOne({ name });
  if (user) return res.send("This user already exists");

  user = new User(req.body);
  await user.save();

  res.send("User added: OK");
});

//  edit device
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updDevice = req.body;

    const result = await User.findByIdAndUpdate(id, updDevice);
    res.send(result);
  } catch (error) {
    console.log({
      err,
      message: "Patch metod ishlamadi, Nmadur noto'g'ri ketdi!",
    });
  }
});

// delete device
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });

    res.send(`User with id: ${req.params.id} deleted: ok`);
  } catch (error) {
    console.log({
      err,
      message: "Delete metod ishlamadi, Nmadur noto'g'ri ketgan!",
    });
  }
});

module.exports = router; //export router qlinadi !Routermas;
