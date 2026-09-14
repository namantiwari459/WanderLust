const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
    },
    image : {
        type : String,
        default : "https://unsplash.com/photos/needle-tower-among-small-buildings-g8DI2ZZFt8I",
        set : (v) => v === "" ? "https://unsplash.com/photos/needle-tower-among-small-buildings-g8DI2ZZFt8I" : v,
    },
    price : {
        type : Number,
    },
    location : {
        type : String,
    },
    country : {
        type : String,
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;