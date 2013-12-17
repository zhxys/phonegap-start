
/* Define the number of leaves to be used in the animation */
const NUMBER_OF_LEAVES = 5;

/* 
    Called when the "Falling Leaves" page is completely loaded.
*/
function init()
{
	
	var balloonPosition = [{left:281,top:293},{left:356,top:359},{left:400,top:292},{left:438,top:332},{left:495,top:290}];
	
    /* Get a reference to the element that will contain the leaves */
    var container = document.getElementById('leafContainer');
    /* Fill the empty container with new leaves */
    for (var i = 0; i < NUMBER_OF_LEAVES; i++) 
    {

		/* Start by creating a wrapper div, and an empty img element */
		var leafDiv = document.createElement('div');
			
		leafDiv.style.left = balloonPosition[i].left + "px";
	
		/* Position the leaf at a random location along the screen */
		leafDiv.style.top = balloonPosition[i].top + "px";		
		
		var image = document.createElement('img');
    
		/* Randomly choose a leaf image and assign it to the newly created element */
		image.src = 'images/balloon' + (i+1) + '.png';
	   //  image.src = 'images/sparkle.png';
  
        container.appendChild(createALeaf(leafDiv, image));
    }
}


/*
    Receives the lowest and highest values of a range and
    returns a random integer that falls within that range.
*/
function randomInteger(low, high)
{
    return low + Math.floor(Math.random() * (high - low));
}


/*
   Receives the lowest and highest values of a range and
   returns a random float that falls within that range.
*/
function randomFloat(low, high)
{
    return low + Math.random() * (high - low);
}


/*
    Receives a number and returns its CSS pixel value.
*/
function pixelValue(value)
{
    return value + 'px';
}


/*
    Returns a duration value for the falling animation.
*/

function durationValue(value)
{
    return value + 's';
}


/*
    Uses an img element to create each leaf. "Leaves.css" implements two spin 
    animations for the leaves: clockwiseSpin and counterclockwiseSpinAndFlip. This
    function determines which of these spin animations should be applied to each leaf.
    
*/
function createALeaf(leafDiv, image)
{
   
    /* Randomly choose a spin animation */
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    
    /* Set the -webkit-animation-name property with these values */
  //  leafDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;
    
    /* Figure out a random duration for the fade and drop animations */
    //var fadeAndDropDuration = durationValue(randomFloat(5, 11));
    
    /* Figure out another random duration for the spin animation */
    var spinDuration = "6s"; //durationValue(randomFloat(6, 10));
    /* Set the -webkit-animation-duration property with these values */
    //leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

    //var leafDelay = durationValue(randomFloat(0, 5));
    //leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;

    image.style.webkitAnimationDuration = spinDuration;

    // add the <img> to the <div>
    leafDiv.appendChild(image);
//   leafDiv.innerHTML = "+";

    /* Return this img element so it can be added to the document */
    return leafDiv;
}


/* Calls the init function when the "Falling Leaves" page is full loaded */
window.addEventListener('load', init, false);
