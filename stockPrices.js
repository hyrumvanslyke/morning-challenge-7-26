function best (p){// function that takes a array of prices and returns when it would be best to buy and sell
    let max = 0// set max to 0
    let lowestRN = undefined// as we dont have a lowest before the loop it is undefined
    for(let i = 0; i < p.length; i++){// loop through the array
        if(p[i] < lowestRN || lowestRN === undefined){// if lowest doesnt have a value or i's value is lower it takes i's value
            lowestRN= p[i]
        }
        let d = p[i] - lowestRN// set difference(or d) equal to the current index minus lowest
        if(d > max){// if d is greater than the max value set d equal too max
            max = d
        }
    }
    return max// return max
}
console.log(best([2, 3, 10, 6, 4, 8, 1]))// logged for testing
console.log(best([7, 9, 5, 6, 3, 2]))// logged for testing
console.log(best([5, 4 , 3, 2, 1]))// logged for testing