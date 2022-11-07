const authModels = require("../models/auth.models")

exports.getLogin = (req,res,next)=>{
    // authModels.creatAdmin("masder", "masder@gmail.com", "ahmed015").then((result)=>{
    //     console.log(result);
    // }).catch(err=>{
    //     console.log(err);
    // })

    res.render("login");
}
exports.postLogin = (req,res,next)=>{
    let email = req.body.email
    let password = req.body.password
    
    authModels.login(email,password).then((result)=>{
        req.session.userId = result.id;
        console.log(result);
        res.redirect("/dashbord")

    }).catch(err=>{
        // console.log(err);
        res.redirect("/login")
    })


}

