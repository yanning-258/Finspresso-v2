// Fetch API example
fetch('/api/hello')
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    document.getElementById('app').textContent = data.message;
  });

// Hot Module Replacement (HMR)
if (import.meta.hot) {
    import.meta.hot.accept();
}