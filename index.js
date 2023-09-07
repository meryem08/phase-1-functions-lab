// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42); 
  }

  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation); 
    return blocks * 264; 
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTraveled = Math.abs(startBlock - endBlock); 
    return blocksTraveled * 264; 
  }

  function calculatesFarePrice(startBlock, endBlock) {
    const feetTraveled = distanceTravelledInFeet(startBlock, endBlock);
  
    if (feetTraveled <= 400) {
      return 0; 
    } else if (feetTraveled > 400 && feetTraveled <= 2000) {
      return (feetTraveled - 400) * 0.02;
    } else if (feetTraveled > 2000 && feetTraveled <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }