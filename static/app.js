fetch('https://REPLACE_WITH_FUNCTION_URL/api/leaders')
  .then(r => r.json())
  .then(data => {
    const root = document.getElementById('leaders');
    root.innerHTML = '';

    data.categories.forEach(c => {
      const div = document.createElement('div');
      div.className = 'category';
      div.innerHTML = `<h2>${c.name}</h2><div>${c.leader}</div>`;
      root.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById('leaders').innerText = 'Failed to load data';
    console.error(err);
  });
