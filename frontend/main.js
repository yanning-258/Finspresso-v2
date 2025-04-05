// Fetch API example
fetch('/api/hello')  // makes GET request to '/api/hello'
  .then(response => response.json())  // convert response to JSON
  .then(data => {
    console.log(data.message);     // update DOM element with ID 'app' with the message
    document.getElementById('app').textContent = data.message;
  });

// Hot Module Replacement (HMR)
if (import.meta.hot) {
    import.meta.hot.accept();
}

/* vite specific development feature 
allow updating modules without full page reload
preserves application state during development
only active in development mode (removed in production build)
'import.meta.hot' is Vite's HMR API

*/
