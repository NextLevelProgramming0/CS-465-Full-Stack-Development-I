// app_server/models/db.cjs

const mongoose = require('mongoose');

const uri = "mongodb+srv://Superdarry0:Justice01!@cluster0.xstfwgd.mongodb.net/travlr?retryWrites=true&w=majority";
// Ensure your connection options are set correctly
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Fail fast if MongoDB is down
});

// Connection events
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${uri}`);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Graceful shutdown setup
if (process.platform === 'win32') {
  const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  r1.on('SIGINT', () => {
    process.emit('SIGINT');
  });
}

const gracefulShutdown = (msg) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
  });
};

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart');
  process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', () => {
  gracefulShutdown('app termination');
  process.exit(0);
});

process.on('SIGTERM', () => {
  gracefulShutdown('app shutdown');
  process.exit(0);
});

// Import schema to register with Mongoose
require('./travlr.cjs');

module.exports = mongoose;