let musiccounter=0
const technologyimgs=["icon-internet-world-hands-businessman-network-technology-communication-scaled.webp", "tech.webp"];
function changeimage(){
    techcounter++
if(techcounter>=technologyimgs.length){
techcounter=0
} 
document.getElementById('techimgs').src=technologyimgs[techcounter];
}
let techcounter=0
document.getElementById('techimgs').addEventListener('click', changeimage)
const musicimgs=['music-rainbow.jpg', 'l_RiiEHQmsBGeqHMNFw5VH632eeb-r8JE4L7i0LnXaU.jpg', 'a362273509f7eccdcf362bb73b3b006d.avif'];

function changeimagemusic(){
    musiccounter++
if(musiccounter>=musicimgs.length){
musiccounter=0
} 
document.getElementById('musicimgs').src=musicimgs[musiccounter];
}

document.getElementById('musicimgs').addEventListener('click', changeimagemusic )