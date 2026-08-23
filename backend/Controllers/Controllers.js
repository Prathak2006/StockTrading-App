const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");
const { User } = require("../model/UserModel");

module.exports.allHoldings = async (req, res) => {
  let allHoldings = await HoldingsModel.find({ userId: req.user.id });
  res.json(allHoldings);
};

module.exports.newOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Finding existing holding
    const existingHolding = await HoldingsModel.findOne({
      userId: req.user.id,
      name: name,
    });

    if (mode === "BUY") {
      if (existingHolding) {
        const oldQty = existingHolding.qty;
        const oldAvg = existingHolding.avg;

        const newQty = oldQty + qty;

        const newAvg =
          (oldQty * oldAvg + qty * price) / newQty;

        existingHolding.qty = newQty;
        existingHolding.avg = newAvg;
        existingHolding.price = price;

        await existingHolding.save();
      } else {
        const newHolding = new HoldingsModel({
           userId: req.user.id,
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });

        await newHolding.save();
      }
    }



    if (mode === "SELL") {

      if (!existingHolding) {
        return res.status(400).json({
          message: "You don't own this stock",
        });
      }

      if (existingHolding.qty < qty) {
        return res.status(400).json({
          message: `You only have ${existingHolding.qty} shares of ${name}`,
        });
      }

      const remainingQty = existingHolding.qty - qty;

      if (remainingQty === 0) {
        await HoldingsModel.deleteOne({
          name,
            userId: req.user.id,
        });
      } else {
        existingHolding.qty = remainingQty;
        existingHolding.price = price;

        await existingHolding.save();
      }
    }



    const newOrder = new OrdersModel({
        userId: req.user.id,
      name,
      qty,
      price,
      mode,
      status: "COMPLETED",
    });

    await newOrder.save();


    return res.status(201).json({
      message: "Order Placed",
    });

  } catch (error) {
    console.log("ORDER ERROR:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.allOrders = async (req, res) => {
  const orders = await OrdersModel.find({ userId: req.user.id });

  res.json(orders);
}

module.exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user);

    res.status(200).json({
      name: user.username,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports.allPositions =  async (req, res) => {
  let allPositions = await PositionsModel.find({});
   console.log(allPositions);
  res.json(allPositions);
 
};
