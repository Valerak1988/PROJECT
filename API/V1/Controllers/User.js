const user = require('../Models/User'); 
const bcrypt = require('bcrypt');

module.exports = {

    getAllUsers:(req, res) =>{
        user.find().then((data) =>{
            return res.status(200).json(data);
        });
    },
    getUserById:(req, res) =>{
        let userid = req.params.id;
        user.findOne({userid}).then((data) =>{
            return res.status(200).json(data);
        });
    },

    addUser:(req, res) =>{
        let body = req.body;
        user.insertMany(body).then((data) =>{
            return res.status(200).json(data);
        });
    },

    updataUserById:(req, res) =>{
        let userid = req.params.id;
        let body = req.body;
        user.updateMany({userid}, body).then((data) =>{
            return res.status(200).json(data);
        });
    },

    deleteUserById:(req, res) =>{
        let userid = req.params.id;
        user.deleteOne({userid}).then((data) =>{
            return res.status(200).json(data);
        });
    },


    Register:(req,res)=>{
        const {
            userid,
            email,
            pass,
            fullname,
            phone
        } = req.body; 

        user.find({email}).then((results)=>{
            if (results.length > 0) 
                return res.status(200).json({msg:"User alreadt exist"}); 

                bcrypt.hash(pass,10).then((hashpass)=>{ 
                    user.insertMany({fullname,email,pass:hashpass,userid,phone}).then((results)=>{
                        return res.status(200).json({results});
                    });
                });
        });
    },


    Login:(req,res)=>{
        const{email,pass} = req.body;
        user.find({email}).then((results)=>{
            if (results.length == 0) 
                return res.status(200).json({msg:"User or pass are wrong"}); 

            const hashpass = results[0].pass; 
            bcrypt.compare(pass,hashpass).then((status)=>{
                if (!status)
                   return res.status(200).json({msg:"User or pass are wrong"});
                return res.status(200).json({msg:"User Login succsessfully "}); 
            });
        });
    }


};
