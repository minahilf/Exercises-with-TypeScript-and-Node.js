function makeAlbum(artist: string, title: string, tracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = makeAlbum("Arigit Singh", "Animal");
let album2 = makeAlbum("Jagjit Singh", "Saher", 14); 
let album3 = makeAlbum("Rahat Fateh Ali Khan", "O re Piya");
console.log(album1);
console.log(album2);
console.log(album3);
