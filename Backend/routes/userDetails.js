 const express = require("express");
const router = express.Router();
const UserDetails = require("../models/userDetails");

router.post("/", async (req, res) => {
    if(!req.body.name || !req.body.phoneNo || !req.body.mwauraNo){
        res.status(400).send({
            "message": "Please enter the required fields"
        })
        return;
    }

    try{
        var user_details = {
            name: req.body.name,
            phoneNo: req.body.phoneNo,
            mwauraNoNo: req.body.mwauraNoNo,
        }
        const details = new UserDetails(user_details)
        await details.save()
        res.status(200).send({
            "message": "User Details saved successfully"
        })
    } catch (error) {
        res.status(400).send({
            "message": "Error "+ error.message
        })
    }
});

// 3️⃣ SEED USERS (for testing)
router.post('/seed', async (req, res) => {
  const seedUsers = [
    {
      name: "Peterson Chege",
      phoneNo: "+254700123456",
      mwauraNo: "123456789012"
    },
    {
      name: "John Mwangi", 
      phoneNo: "+254722334455",
      mwauraNo: "987654321098"
    }
  ];

  try {
    await UserDetails.deleteMany({});
    await UserDetails.insertMany(seedUsers);
    res.json({ 
      message: "✅ Seeded 2 users!",
      count: 2 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});




module.exports = router;