import User from '../model/userModel.js'

export const createUserData = async(req, res) => {
    try {
        const userData = new User(req.body);
        if(!userData){
            return res.status(404).json({msg : "USER DATA NOT FOUND!!!"});
        }

        const savedData = await userData.save();
        res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getUserData = async(req,res) => {
    try {
        const userData = await User.find();
        if(!userData){
            return res.status(404).json({msg : "USERS DATA NOT FOUND!!!"});
        }

        res.status(200).json(userData);

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getOneUser = async(req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({msg : "ID DID NOT MATCH"});
        }

        res.status(200).json(userExist);

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const updateUser = async(req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({msg : "ID DID NOT MATCH"});
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedData);

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const deleteUser = async(req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({msg : "ID DID NOT MATCH"});
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "USER DELETED SUCCESSFULLY"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}