const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    Menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }]
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
