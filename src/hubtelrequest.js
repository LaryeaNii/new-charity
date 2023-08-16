const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const mobileNumber = event.queryStringParameters.mobileNumber;
  const amount = event.queryStringParameters.amount;
  const clientId = 'gzcfmchn'; // Your client id
  const clientSecret = 'liaitapi'; // Your client secret

  const authHeader = 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await fetch(
      `https://devp-reqsendmoney-230622-api.hubtel.com/request-money/bulk`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader,
          'Access-Control-Allow-Origin': '*', // Adjust this to your frontend domain
        },
        body: JSON.stringify({
          amount: amount,
          title: 'charity',
          description: 'thank you for paying',
          clientReference: 'string',
          audience: [mobileNumber],
        }),
      }
    );

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error sending payment:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' }),
    };
  }
};
