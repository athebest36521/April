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