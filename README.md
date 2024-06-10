# Custom Response Handler

A simple and effective response handler for Express.js applications. It provides utilities for sending standardized success and error responses, along with enhanced error logging.

## Features

- Standardized JSON responses for success and error
- Custom error handling with stack traces
- Default parameters for easy usage

## Installation

Install the package via npm:

npm i api-simple-res

## Success Response
Send a success response with optional status code, message, and data:

const apiRes = require('api-simple-res');
apiRes.success(res, 200, 'Data fetched successfully', { id: 1, name: 'Sample' });

## Error Response
Send an error response with optional status code and error message:

const apiRes = require('api-simple-res');
try {
    //your code
} catch (err) {
    apiRes.error(res, err.statusCode, err);
}