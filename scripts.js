document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
        {name: 'Jorge & Matheus', image: './img/artista-jorge-mateus.jpg' },
        {name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
        {name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg' },
        {name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
        {name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' }
    ];

    const albumsData = [
        {name: 'White Noise', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
        {name: 'O Céu Explica Tudo', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
        {name: 'Nada Como Um Dia...', artist: 'Racionais', image: './img/album-vida-loka.jpg' },
        {name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg' },
        {name: 'SCORPION', artist: 'Drake', image: './img/album-scorpion.jpg'},
        {name: '÷ (Divide)', artist: 'Ed Sheeran', image: './img/album-divide.jpg'},
    ];

    const artistGrid = document.querySelector('.artist-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    artistsData.forEach(artist => {
        if (artist.name && artist.image) {
            const artistCard = document.createElement('div');
            artistCard.classList.add('artistCard');

            artistCard.innerHTML = `
                <img src="${artist.image}" alt="Imagem de ${artist.name}">
                <h3>${artist.name}</h3>
                <p>Artista</p>
                <button class="play-button"><i class="fa-solid fa-play"></i></button>
            `;
            artistGrid.appendChild(artistCard);
        }
    });

    albumsData.forEach(album => {
        if (album.name && album.image) {
            const albumCard = document.createElement('div');
            albumCard.classList.add('artistCard');

            albumCard.innerHTML = `
                <img src="${album.image}" alt="Capa do álbum ${album.name}">
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
                <button class="play-button"><i class="fa-solid fa-play"></i></button>
            `;
            albumsGrid.appendChild(albumCard);
        }
    });
});