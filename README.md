# CS-465-Full-Stack-Development-I

1) You worked with MongoDB, a NoSQL database, and developed structures using models and schema. Explain the role of middleware in implementing the coding tasks.

  Middleware plays a crucial role in NoSQL development, especially when using Mongoose with MongoDB. It acts as a bridge between your application code and the database, handling tasks like data validation, pre/post-processing of data, and simplifying complex operations. Middleware functions, executed before or after a database operation (like saving or updating a document), allow you to add custom logic to manage data integrity and behavior.
  I also used MongoDB atlas in order connect to the MongoDB database because for some reason my computer wouldn't allow me to connect to the MongoDB database locally.  So I had to do something different than the rest of the class and use a cluster to make it work.  In order to use the cluster I simply had to modify the URI of the program in VS Code to make it work.
