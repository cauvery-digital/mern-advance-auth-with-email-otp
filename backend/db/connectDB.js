import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		// console.log("mongo_uri: ", process.env.MONGO_URI);
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`📚 [DB] Connected: ${conn.connection.host} 🧮\n    🧠 Database Name: ${conn.connection.name} ✔️`);
	} catch (error) {
		console.log(`\n❌ Error connection to MongoDB: ${error.message}\n`);
		process.exit(1); // 1 is failure, 0 status code is success
	}
};
