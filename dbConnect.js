const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongodb+srv://sujitpandey1409:Qu5P18D2JUB4GQgk@cluster0.zxnma8s.mongodb.net/?retryWrites=true&w=majority";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
