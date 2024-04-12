// Import the necessary modules
const { parseQuery } = require('./src/queryParser');
const executeSELECTQuery = require('./src/index');

// Define the query string
const query = "SELECT course, COUNT(*) FROM enrollment GROUP BY course";

async function main() {
    try {
        // Parse the query
        const parsedQuery = parseQuery(query);
        // console.log("Parsed Query:", parsedQuery);

        // Execute the query
        const result = await executeSELECTQuery(query);
        // console.log("Execution Result:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the main function to execute the code
main();
