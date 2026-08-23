const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    status: {
        type: String,
        default: "COMPLETED",
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

module.exports = { OrdersSchema };