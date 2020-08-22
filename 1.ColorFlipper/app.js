const colors = ["green", "red","rgba(133,122,200)","#f15025","#322f3d","#62760c","#d9adad","blue"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // console.log(document.body);
    
    //Get random number between 0 and 3 for colors...
    const randomNumber = getRnadomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRnadomNumber(){
    return Math.floor(Math.random()*colors.length);
}
