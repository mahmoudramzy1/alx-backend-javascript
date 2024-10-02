export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // When the Promise resolves
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => new Error());
}
