const fs = require('fs');

fs.writeFileSync("notes.txt", "I love Javascript.");

fs.appendFileSync("notes.txt", " Learning Node for backend development.");