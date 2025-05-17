document.getElementById('dataForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;

  const response = await fetch('http://localhost:8080/api/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });

  const result = await response.json();
  document.getElementById('result').textContent = `Saved: ${result.name}`;
});
