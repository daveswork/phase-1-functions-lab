// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const location = 42;
    let distance;
    distance = someValue - location;
    if (distance<0){
      return  distance * -1
    } else {
      return distance
    }
  }

function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);

    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return blocks * 264
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let blocks = destination - start;
    if(blocks<0){
      blocks = blocks * -1;
    } 
    return blocks * 264;
  }

function calculatesFarePrice(start, destination) {
//returns the fare for the customer
  let total_distance = distanceTravelledInFeet(start, destination)
  if(total_distance>2500){
    return('cannot travel that far')
  } else if((total_distance>2000)&&(total_distance<=2500)){
    return 25
  }else if((total_distance>400)&&(total_distance<=2000)){
    return (total_distance - 400) * 0.02
  } else {
    return 0
  }

}
