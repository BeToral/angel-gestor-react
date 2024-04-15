const fetch = require('node-fetch'); // Import the fetch module
const babel = require('@babel/core'); // Import Babel for transpilation

exports.handler = async (event, context) => {
  try {
    // Make a request to fetch the script from GitHub
    const response = await fetch('https://raw.githubusercontent.com/BeToral/angel-gestor-react/main/src/main.jsx');
  
    if (!response.ok) {
      throw new Error(`Failed to fetch script: ${response.statusText}`);
    }

    // Extract the script content from the GitHub response
    let scriptContent = await response.text();

    // Transpile JSX to JavaScript
    scriptContent = babel.transformSync(scriptContent, {
      presets: ['@babel/preset-react']
    }).code;

    // Return the script content with CORS headers
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'adagmorelos.com',
        'Content-Type': 'application/javascript'
      },
      body: scriptContent
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
