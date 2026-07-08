import User from '../models/usersModel.js'


export const getUser = async(req, res) => {
  try {
    const respon = await User.findAll();
    res.status(200).json(respon)
  } catch (err) {
    console.log(err.message)
  }
}


export const getUserById = async(req, res) => {
  try {
    const respon = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(respon)
  } catch (err) {
    console.log(err.message)
  }
}


export const CreateUser = async(req, res) => {
  try {
    await User.create(req.body)
    res.status(201).json({msg: 'user created'})
  } catch (err) {
    console.log(err.message)
  }
}

export const UpdateUser = async(req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({msg: 'user updated'})
  } catch (err) {
    console.log(err.message)
  }
}

export const DeleteUser = async(req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
   })
    res.status(200).json({msg: 'user deleted'})
  } catch (err) {
    console.log(err.message)
  }
}

