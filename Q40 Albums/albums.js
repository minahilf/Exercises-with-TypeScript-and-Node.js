function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("Arigit Singh", "Animal");
var album2 = makeAlbum("Jagjit Singh", "Saher", 14);
var album3 = makeAlbum("Rahat Fateh Ali Khan", "O re Piya");
console.log(album1);
console.log(album2);
console.log(album3);
