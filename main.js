// Start Button 
let startButton = document.querySelector(".control-buttons span");
// Start Button Function
startButton.onclick = function () {
// Prompt Message
    let yourName = prompt("What Is Your Name?");
    let name = document.querySelector(".info-container span");

    if(yourName == null || yourName == ""){
        name.innerHTML = "Unknown";
    }else {
        name.innerHTML = yourName;
    }

    document.querySelector(".control-buttons").remove();
}

// Create Array From Memory Container
let duration = 1000;
let blockContainer = document.querySelector(".memory-container");
let blocks = Array.from(blockContainer.children);
let orderRange = [...Array(blocks.length).keys()];

// Add Shuffle Function on Children of Memory Container
shuffle(orderRange);

// Create loop To Add Order Range
blocks.forEach ((block, index) => {
    block.style.order = orderRange[index];
// Create Function When Clicked on Children of Memory Container 
    block.addEventListener(`click`, function(){
// Start Flip Block Function
        flipBlock(block);
    });

});
// Flip Block Function
function flipBlock(selectBlock){
// Add Class List To Block Click
    selectBlock.classList.add(`is-flipped`);
// Create Loop To Filter Blocks 
    let flipped = blocks.filter(flipped => flipped.classList.contains(`is-flipped`));

    if(flipped.length == 2 ){

        stopClicking()
        checkMatched(flipped[0], flipped[1])

    }
};

function checkMatched(first, second){
    let tries = document.querySelector(`.tries span`);

    if (first.dataset.technology === second.dataset.technology) {

        first.classList.remove(`is-flipped`);
        second.classList.remove(`is-flipped`);
// Add Class List On Similar Items
        first.classList.add(`has-match`);
        second.classList.add(`has-match`);
// Play Music If True
        document.getElementById(`success`).play();
    }else {
        
        tries.innerHTML = parseInt(tries.innerHTML) + 1;
// Wait 1 Second And Remove Class List
        setTimeout(() => {
            first.classList.remove(`is-flipped`);
            second.classList.remove(`is-flipped`);
        },duration);
// Play Music If False
        document.getElementById(`fail`).play();
    };
    
}
// Function To Stop Clicking
function stopClicking(){

    blockContainer.classList.add(`no-clicking`);

    setTimeout(() => {

        blockContainer.classList.remove(`no-clicking`);

    }, duration);
}
// Create Shuffle Function To Run Random
function shuffle(array){
    let current = array.length,
        temp,
        random;

    while(current > 0) {
// Select Random Number
        random = Math.floor(Math.random() * current);
        
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
        
    }
    
    return array;
}




function wordRepeat(word, n) {
  // write your code here
  let x = word.lenght;
  return word.repeat(n).split(word[x])
  
}
wordRepeat("CoderHub", 2)