//music
let musiccounter = 0;
const musicimgs = [
  "https://cdn.glitch.global/d2538452-5dce-4f34-9ebb-a589a04122dd/music-rainbow.jpg?v=1745809429661",
  "https://cdn.glitch.global/d2538452-5dce-4f34-9ebb-a589a04122dd/l_RiiEHQmsBGeqHMNFw5VH632eeb-r8JE4L7i0LnXaU.jpg?v=1745809433038",
  "https://cdn.glitch.global/d2538452-5dce-4f34-9ebb-a589a04122dd/a362273509f7eccdcf362bb73b3b006d.avif?v=1745809443217",
];



function changeimagemusic() {
  musiccounter++;
  if (musiccounter >= musicimgs.length) {
    musiccounter = 0;
  }
  document.getElementById("musicimgs").src = musicimgs[musiccounter];
}





document.getElementById("musicimgs").addEventListener("click", changeimagemusic);
