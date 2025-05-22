var userModel = require('./userModel');

module.exports.getDataFromDBService = (userDetails) => {

    return new Promise(function checkURL(resolve, reject) {

        userModel.findOne({ username: userDetails.username, password: userDetails.password }).then((existingUser) => {

            if (existingUser) {
                resolve(existingUser);
                return;
            }
            reject(false);
        }).catch((err) => {
            reject(false);
        });

    });

}

module.exports.createUserDBService = (userDetails) => {
    return new Promise((resolve, reject) => {
        const { username, password, email, gender } = userDetails;
        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!regex.test(email)) {
            return reject(new Error("Make sure the domain is @gmail.com"));
        }

        if (!username || !password || !email || !gender) {
            return reject(new Error("Missing details"));
        }

        userModel.findOne({ username }).then(existingUser => {
            if (existingUser) {
                return reject(new Error("User already exists"));
            }

            const userModelData = new userModel({
                username,
                password,
                email,
                gender
            });

            userModelData.save()
                .then(result => resolve(result))
                .catch(err => reject(err));
        }).catch(err => reject(err));
    });
};


module.exports.addIncomeDBService = async (userId, incomeData) => {
    try {

        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $push: { incomes: incomeData } },
            { new: true }
        );

        if (!updatedUser) {
            console.log("User not found.");
            return false;
        }

        console.log("Income added successfully:", updatedUser);
        return true;
    } catch (err) {
        console.error("Error adding income:", err);
        return false;
    }
};

module.exports.deleteIncomeDBService = async (userId, idData) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $pull: { incomes: { _id: idData.incomeId } } },
            { new: true }
        );

        if (!updatedUser) {
            console.log("User not found.");
            return false;
        }

        console.log("Income deleted successfully:", updatedUser);
        return true;
    } catch (err) {
        console.error("Error deleting income:", err);
        return false;
    }
};

module.exports.getAllIncomesDBService = async (userId) => {
    try {
        const user = await userModel.findById(userId, { incomes: 1, _id: 0 });

        if (!user) {
            console.log("User not found.");
            return null;
        }

        // Sort the incomes by date in descending order (newest first)
        const sortedIncomes = user.incomes.sort((a, b) => new Date(b.date) - new Date(a.date));

        return sortedIncomes;
    } catch (err) {
        console.error("Error fetching incomes:", err);
        throw err;
    }
};
