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
        default : "https://images.unsplash.com/photo-1752951357889-1a6d4d4b5e0d?auto=format&fit=crop&w=800&q=60",
        set : (v) => v === "" ? "https://images.unsplash.com/photo-1752951357889-1a6d4d4b5e0d?auto=format&fit=crop&w=800&q=60" : v,
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