import User from "../../../databases/models/User";

const createUser = async (body: any) => {
    return await User.create(body);
}

const getUsers = async (userId: string) => {
    return await User.find({userId})
}

const getAllRegisteredUsers = async () => {
    return await User.find()
}

const updateUserById = async (id:any,body:any) => {
    return await User.findByIdAndUpdate(id,{
        name:body.name,
        email:body.email
    },{
        new:true
    });
}

const findUserByEmail = async(email:any)=>{
    return await User.findOne({email})
}

const findUserById = async (id: string) => {
    return await User.findOne({_id: id});
}

const deleteUserByEmail = async (email: string) => {
    return await User.deleteOne({email});
}

const updateUserByEmail = async (email: string, data: any) => {
    return await User.updateOne({email}, data)
}

export {
    createUser,
    findUserByEmail,
    getUsers,
    updateUserById,
    deleteUserByEmail,
    updateUserByEmail,
    getAllRegisteredUsers,
    findUserById
}