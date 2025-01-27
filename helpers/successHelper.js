/**
 * Generates a success response object.
 * @param {string} message - The success message.
 * @param {any} data - The data to include in the response.
 * @returns {object} The success response object.
 */
export default function success(message, data) {
  return {
    message,
    data,
  };
}
