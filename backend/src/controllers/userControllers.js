let list = [];
const userController  = {
    createUser: async(req,res)=> {
        const postData = req.body;
        list.push(postData);
        console.log('Received data:', postData);
        res.send(list);
    },
    deleteUser: async(req,res)=> {
    },
    updateUser:async(req,res)=> {

    },
    readUser:async(req,res)=> {

    }
}

export default userController