/* eslint-disable no-unused-vars */
const router = require('express').Router();


<<<<<<< HEAD
  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true})
    res.status(200).json(updatedUser)
  } catch(err){
    res.status(500).json(err)
  }
})

//DELETE A USER

router.delete("/:id", verifyTokenandAuth, async (req, res) => {
  try{
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted")
  }catch(err){
    res.status(500).json(err)
  }
})


//ADMIN GET 1 USER
router.get("/find/:id", verifyTokenandAdmin, async (req, res) => {
  try{
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc;
    //use the spread operator to only res.json everything in the object EXCEPT the password. Added ._doc because the obj returned without had more key value pairs

      res.status(200).json(others)
  }catch(err){
    res.status(500).json(err)
  }
});

//ADMIN GET ALL USERS
// router.get("/", verifyTokenandAdmin, async (req, res) => {
//   try{
//     const users = await User.find()
//     res.status(200).json(users)
//   }catch(err){
//     res.status(500).json(err)
//   }
// })

=======
>>>>>>> parent of 94f8aa5 (added functins to verify tokens for users and admin - postman route testing)

module.exports = router;
