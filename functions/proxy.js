const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    // Asegúrate de que la URL a la que haces el fetch es correcta
    const targetUrl = 'https://raw.githubusercontent.com/BeToral/angel-gestor-react/main/src/main.jsx';
    
    // Opcional: Incluye los headers que necesites enviar
    const headers = {};

    // Si tu solicitud es un POST o requiere un cuerpo, inclúyelo aquí
    const body = event.httpMethod !== 'GET' ? event.body : undefined;

    const response = await fetch(targetUrl, {
      method: event.httpMethod, // El método de la solicitud original (GET, POST, etc.)
      headers: headers,
      body: body
    });

    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzar un error con el estado
      throw new Error(Failed to fetch: ${response.statusText});
    }

    // Aquí asumimos que la respuesta es texto, ajusta según lo que esperas recibir
    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        // Aquí añades el dominio desde el cual permitirás las solicitudes
        'Access-Control-Allow-Origin': 'https://adagmorelos.com',
        // Añade otros headers de CORS si son necesarios
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
      body: data
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        // Incluso en caso de error, debes incluir el header de CORS si la respuesta será manejada por el cliente
        'Access-Control-Allow-Origin': 'https://adagmorelos.com',
      },
      body: JSON.stringify({ error: error.message })
    };
  }
};
