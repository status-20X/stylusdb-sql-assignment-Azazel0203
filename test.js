// Import the necessary modules
const { parseQuery } = require('./src/queryParser');
const executeSELECTQuery = require('./src/index');

// Define the query string
const query = "SELECT COUNT(id) as count, age FROM student GROUP BY age ORDER BY age DESC";

async function main() {
    try {
        // Parse the query
        const parsedQuery = parseQuery(query);
        console.log("Parsed Query:", parsedQuery);

        // Execute the query
        const result = await executeSELECTQuery(query);
        console.log("Execution Result:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the main function to execute the code
main();
