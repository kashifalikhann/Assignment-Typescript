function makeAlbum(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three different album objects using the makeAlbum function
const album1 = makeAlbum("Taylor Swift", "1989", 16);
const album2 = makeAlbum("Taylor Swift", "Folklore", 16);
const album3 = makeAlbum("Taylor Swift", "Midnights");

// Print the album objects to verify the information
console.log(album1);
console.log(album2);
console.log(album3);

export{};