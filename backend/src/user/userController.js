var userService = require('./userService');

var getDataConntrollerfn = async (req, res) => {
    var status = await userService.getDataFromDBService(req.body).then(result => {
        res.send({ "status": true, "data": result, "message": "Hello " + req.body.username + "!" });
    })
        .catch(error => {
            res.send({ "status": false, "message": "User does not exist!" });
        });
}

var createUserControllerFn = async (req, res) => {
    const { username, password, email, gender } = req.body;

    if (!username || !password || !email || !gender) {
        return res.send({
            status: false,
            message: "One or more details are missing!"
        });
    }

    await userService.createUserDBService(req.body)
        .then(result => {
            res.send({ status: true, data: result, message: "User created successfully" });
        })
        .catch(error => {
            let message = error.message || "Something went wrong";
            res.send({ status: false, message });
        });
};

var addIncomeControllerFn = async (req, res) => {
    await userService.addIncomeDBService(req.params.id, req.body).then(result => {
        res.send({ "status": true, "message": "Added Income" });
    })
        .catch(error => {
            res.send({ "status": false, "message": "One or more details are empty!" });
        });
}

var deleteIncomeControllerFn = async (req, res) => {
    await userService.deleteIncomeDBService(req.params.id, req.body).then(result => {
        res.send({ "status": true, "message": "Income Deleted" });
    })
        .catch(error => {
            res.send({ "status": false, "message": "Error Deleting Income" });
        });
}

var getAllIncomesControllerFn = async (req, res) => {
    await userService.getAllIncomesDBService(req.params.id).then(result => {
        res.send({ "status": true, "incomes": result, "message": "Incomes Fetched" });
    })
        .catch(error => {
            res.send({ "status": false, "message": "Error fetching incomes" });
        });
}
module.exports = { getDataConntrollerfn, createUserControllerFn, addIncomeControllerFn, deleteIncomeControllerFn, getAllIncomesControllerFn };