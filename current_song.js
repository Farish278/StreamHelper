const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get('user');
// const api_key = urlParams.get('api_key');
let api_url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=f21088bf9097b49ad4e7f487abab981e&format=json`;
fetch(api_url)
    .then(response => response.json())
    .then(data => {
        // Process the fetched JSON data here
        console.log(data.recenttracks.track[0].artist['#text']);
        console.log(data.recenttracks.track[0].name);
        const artist = data.recenttracks.track[0].artist['#text'];
        const track = data.recenttracks.track[0].name;

        const artistElement = document.createElement('pre');
        artistElement.textContent = `${artist} - ${track}`;

        document.body.appendChild(artistElement);
    })
    .catch(error => {
        // Handle any errors that occur during the fetch request
        console.error(error);
    });
