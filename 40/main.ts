function make_album(artist: string, tittle: string, tracks?: number){
    let album: {artist: string, tittle: string, tracks?: number} = {
        artist: artist,
        tittle: tittle,
    };

    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

make_album("Mushk", "album tittle 1");
let album1 = make_album("Mushk","album tittle 1");

let album2 = make_album("Hafsa","album tittle 2");

let album3 = make_album("Ahmed","album tittle 3",10)

console.log(album1);

console.log(album2);

console.log(album3);