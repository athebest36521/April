let aviationcounter = 0
const aviationimgs = [
  'https://cdn.glitch.global/d2538452-5dce-4f34-9ebb-a589a04122dd/smallplane2.jpg?v=1745809426298',
  'https://cdn.glitch.global/d2538452-5dce-4f34-9ebb-a589a04122dd/9aa576_376d6f8c28d242718ae70c2e8d1fdda7~mv2.png?v=1745893624233',
  'https://cdn.glitch.global/d2538452-5dce-4f34-9ebb-a589a04122dd/cessna-172-history-1.jpg?v=1745893635136'
  
] 

function changeimageaviation(){
  aviationcounter++
  if (aviationcounter>=aviationimgs.length){
    aviationcounter = 0;
  }
  document.getElementById("aviationimgs").src = aviationimgs[aviationcounter];
}


document.getElementById("aviationimgs").addEventListener("click", changeimageaviation);

