// a Monte Carlo simulaiton to estimate Pi by randomly generating points within a unit square and checking how many of those points fall inside a quarter circle inscribed within that square.

// number of samples
let samples = 500000000;

// number of hits inside circle
let circleHits;

function main(samples) {
    let circleHits = 0;

    // generate a random hit point for each sample hit
    for (let i = 0; i < samples; i++) {
        let x = Math.random();
        let y = Math.random();

        // if the hit point is less than 1, it's inside the circle
        if ((x * x + y * y) < 1) {
            circleHits++;
        }
    }

    // pi will approach 3.14159.... with higher sample number
    // calculate pi by dividing the # of hit points inside the circle by the total sample size, multiplied by 4(because since our "hit" coordinate falls within 0 and 1 each time, it's only including 1/4 of the actual circle)
    let pi = (circleHits / samples) * 4;
    console.log(pi);
}

// give this a chance to compute, it takes a few seconds.
main(samples);