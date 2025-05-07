//tech
let techcounter = 0;

const techimgs = [
  
   'https://cdn.glitch.global/d2538452-5dce-4f34-9ebb-a589a04122dd/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg?v=1745809398718',
   'https://cdn.glitch.global/d2538452-5dce-4f34-9ebb-a589a04122dd/tech.webp?v=1745809419744',
   'https://cdn.glitch.global/d2538452-5dce-4f34-9ebb-a589a04122dd/icon-internet-world-hands-businessman-network-technology-communication-scaled.webp?v=1745809435976'
  
];

function changeimagetech() {
  techcounter++;
  if (techcounter >= techimgs.length) {
    techcounter = 0;
  }
  document.getElementById("techimgs").src = techimgs[techcounter];
}

document.getElementById("techimgs").addEventListener("click", changeimagetech);