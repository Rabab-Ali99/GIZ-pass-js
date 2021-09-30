    // fix the issues in code

  let numbers = [5,8,0,1,9,11,15,16];

  /* create a new array and cloning the original array to it to keep 
  the original one immutable by dealing with this copy */
  let copyOfNumbers = [...numbers]
  
  
  /**
   * Returns ascending sorted array.
   *
   * @param {array} numbersArray the array to be sort.
   * @return {array} numbersArray sorted array.
   */
  function ascendingSorting(numbersArray) {
  
      // variable to check if the sort is kept going inside the inner loop 
      let elementsSwap 
  
      do {
          elementsSwap = false
          for(let j = 0 ; j < numbersArray.length  ; j++)
          {
              if(numbersArray[j] > numbersArray[j + 1])
              {   
                  /* when the condition is fulfilled we perform the swapping between the two elements and set the flag (elements swap) to true */
                  /* But when the condition doesn't pass then we will check the next elements for swap if no swap happen at all this mean that the sort is ended and we exit the loop 
                  (the elementsSwap will remain false after the for loop ends so the do-while loop stops )  */
                  let temp = numbersArray[j]
                  numbersArray[j] = numbersArray[j + 1]
                  numbersArray[j + 1] = temp;
                  elementsSwap = true
              }
          }  
      } while (elementsSwap);
      return numbersArray
  }
  
  
  /**
   * Returns descending sorted array.
   *
   * @param {array} numbersArray the array to be sort.
   * @return {array} numbersArray sorted array.
   */
  function descendingSorting(numbersArray) {
      let elementsSwap 
      do {   
          elementsSwap = false
          for(let j = 0 ; j < numbersArray.length  ; j++)
          {
              if(numbersArray[j] < numbersArray[j + 1])
              {
                  let temp = numbersArray[j]
                  numbersArray[j] = numbersArray[j + 1]
                  numbersArray[j + 1] = temp;
                  elementsSwap = true
              }
          }
      } while (elementsSwap);
      return numbersArray
  }
  
  // print the original, ascending sorted, and descending stored arrays
  console.log("Original numbers list: ", numbers)
  console.log("Numbers list After ascending sorting: ", ascendingSorting(copyOfNumbers))
  console.log("Numbers list After descending sorting: ", descendingSorting(copyOfNumbers))
  

// read the array from data text file  and sort it
const requesthandler =  function () {
    let ArrayFromFile = this.responseText.split(',').map(Number);
    let ascendingSortedArray = ascendingSorting(ArrayFromFile);
    console.log(ascendingSortedArray);
}
  
  var fileRequest = new XMLHttpRequest();
  fileRequest.addEventListener("load", requesthandler);
  fileRequest.open("GET", "http://127.0.0.1:5500//data.txt");
  fileRequest.send();

  
  
