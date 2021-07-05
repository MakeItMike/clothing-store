// Allow relative paths when requiring.
process.env.NODE_PATH = __dirname;
require("module").Module._initPaths();

// Get readline module.
const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});

// Create an Express app/
const express = require("express");
const app     = express();

// Log errors.
process.on('uncaughtException', function (err) {
	console.log('Uncaught exception: ' + err.stack); // Log the error.
	shutdown(); // Shut down the server.
});

// Serve the globally-used static website files.
app.use("/index", express.static("public/index"));
app.use("/new-arrivals", express.static("public/pages/new-arrivals"));
app.use("/men", express.static("public/pages/men"));
app.use("/women", express.static("public/pages/women"));
app.use("/boys", express.static("public/pages/boys"));
app.use("/girls", express.static("public/pages/girls"));
app.use("/gender-neutral", express.static("public/pages/gender-neutral"));

// Start the server listening for requests.
let server = app.listen(process.env.PORT || 3000, () => console.log("SERVER OPEN ON PORT " + (process.env.PORT || 3000)));

// Shuts down the server.
function shutdown() {
	if (!server || server.closing) {
		console.log("Shutdown forced.");
		process.exit(42);
	} else {
		console.log('Shutting down...');
		// Close server.
		server.close(() => {
			// Close process with success.
			console.log("Server shut down.");
			process.exit(0);
		});

		// Handle timeouts.
		setTimeout(() => {
			console.log("Shutdown timed out.");
			process.exit(0);
		}, 1000);
	}
}

// Console input handling.
readline.on('line', (input) => {
	switch (input) {
		case "shutdown": case "exit": case "close": case "stop": // Shuts down the server.
			shutdown();
			break;
		case "forcekill": case "kill": case "forcestop": case "forceclose": // Force kills the server.
			process.exit(0);
			break;
		default: // Unrecognized command.
			console.log("Unrecognized command.");
	}
});

// Shutdown signals.
process.on("SIGTERM", shutdown);
process.on("SIGINT",  shutdown);