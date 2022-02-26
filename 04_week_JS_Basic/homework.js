var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1] //Using control structures (if, for, while), do the following::

// display in the console the numbers from 1 to 20

for (i=0; i<array.length; i= i+1){
    if(array[i] >= 1 && array[i] <= 20){
        console.log(array[i]) 
    }
}


// display in the console the odd numbers from 1 to 20

for (i=0; i<array.length; i=i+1){
    if(array[i] >= 1 && array[i] <= 20 && array[i] % 2 === 1){
        console.log(array[i])
    }
}

// compute the sum of the elements of an array and display it in the console

var sum = 0
for (i=0; i<array.length; i=i+1){
    sum = sum + array[i]
}
console.log(sum)


// compute the maximum of the elements of an array and display it in the console

var maxElement = array[0]
for (i=1; i<array.length; i=i+1){
    if (array[i] > maxElement){
        maxElement = array[i]
    }
}
console.log(maxElement)

// compute how many times a certain element appears in an array - tips: use object, var element = 2

var element = 8
var count = 0
for (i=0; i<array.length; i=i+1){
    if (array[i] == element){
        count = count + 1
    }
}
console.log(count)

// Using nested control structures (doua for + if) for generate the following pattern

var result = ""
for (index = 0; index < 4; index ++){
    for (index2 = 0; index2 < 4; index2 ++){
        var element = (index + index2) % 2
        element = element.toString()
        result = result + element + " "

    } 
    result = result + "\n"
}
console.log(result)
