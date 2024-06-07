function make_album(artist, tittle, tracks) {
    var album = {
        artist: artist,
        tittle: tittle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
make_album("Mushk", "album tittle 1");
var album1 = make_album("Mushk", "album tittle 1");
var album2 = make_album("Hafsa", "album tittle 2");
var album3 = make_album("Ahmed", "album tittle 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
