const mongoose = require("mongoose");
const DB_URL = require("./DB_URL").DB_URL;
const bcrypt = require("bcrypt")
const admanSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
})
const Adman = mongoose.model("adman", admanSchema)


exports.creatAdmin = async (username, email, password) => {
    // check the acount existle
    // yes => error
    // no => create Acount

    try {
        await mongoose.connect(DB_URL);
        const findAdmin = await Adman.findOne({ email: email });
        if (findAdmin) {
            throw "The account is in the verb"
        } else {
            const hashPassword = await bcrypt.hash(password, 10);
            let admin = {
                username: username,
                email: email,
                password: hashPassword
            }
            let item = await Adman.create(admin);

            return item
        }
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }

}


exports.login = async (email, password) => {
    try {
        await mongoose.connect(DB_URL);
        const findAdmin = await Adman.findOne({ email: email })
        
        if (!findAdmin) {
            throw "This account does not exist"
        } else {
            const same = await bcrypt.compare(password, findAdmin.password);
            if (same) {
                return { id: findAdmin._id }
            } else {
                throw "The password is incorrect"
            }
        }
    } catch (error) {
        throw error
    } finally {
        mongoose.disconnect()
    }
}


