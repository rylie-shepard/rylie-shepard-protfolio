const API_KEY = "TpkZUmxFfxzRwq0Df1LlVWY6XCoIBsTE";
const container = document.querySelector('.js-giphy');

async function searchGifs() {
    const query = document.getElementById('query').value.trim();
    if (!query) return;

    container.innerHTML = '<div id="results">Loading...</div>';
    const results = document.getElementById('results');
    results.innerHTML = 'Loading...';

    const url = new URL(`https://api.giphy.com/v1/gifs/search`);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('q', query);
    url.searchParams.set('limit', 20);

    const response = await fetch(url);
    const json = await response.json();

    results.innerHTML = '';
    json.data.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        results.appendChild(img);
    });
}

document.getElementById('searchBtn').addEventListener('click', searchGifs);
