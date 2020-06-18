// Collabed with Chase Patrick, Sara Richardson, and Erick Walker

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

//Function to make headings for katas
function createHeadingElements(string) {
    const kataHeading = document.createElement('h3')
    kataHeading.append(string)
    parentElement.append(kataHeading)
}

const parentElement = document.querySelector('.katas-list')
//KATA 1
createHeadingElements('KATA 1')
const kata1List = document.createElement('ul')
for (let counter1 = 1; counter1 <= 20; counter1++) {
    let liElement = document.createElement('li')
    parentElement.append(kata1List)
    kata1List.append(liElement)
    liElement.append(counter1)
}

// KATA 2
createHeadingElements('KATA 2')
const kata2List = document.createElement('ul')
for (let counter2 = 2; counter2 <= 20; counter2 += 2) {
    let liElement = document.createElement('li')
    parentElement.append(kata2List)
    kata2List.append(liElement)
    liElement.append(counter2)
}

// KATA 3
createHeadingElements('KATA 3')
const kata3List = document.createElement('ul')
for (let counter3 = 1; counter3 <= 20; counter3 += 2) {
    let liElement = document.createElement('li')
    parentElement.append(kata3List)
    kata3List.append(liElement)
    liElement.append(counter3)
}

// KATA 4
createHeadingElements('KATA 4')
const kata4List = document.createElement('ul')
for (let counter = 5; counter <= 100; counter += 5) {
    let liElement = document.createElement('li')
    parentElement.append(kata4List)
    kata4List.append(liElement)
    liElement.append(counter)
}

//Kata 5
//Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
createHeadingElements('KATA 5')
const kata5List = document.createElement('ul')
for (let counter5 = 1; counter5 <= 100; counter5 += 1) {
    const counter5IsPerfectSquare = Number.isInteger(Math.sqrt(counter5))
    if (counter5IsPerfectSquare) {
        let liElement = document.createElement('li')
        parentElement.append(kata5List)
        kata5List.append(liElement)
        liElement.append(counter5)
    }
}

//Kata 6
//Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
createHeadingElements('KATA 6')
const kata6List = document.createElement('ul')
for (let counter6 = 20; counter6 >= 1; counter6 -= 1) {
    let liElement = document.createElement('li')
    parentElement.append(kata6List)
    kata6List.append(liElement)
    liElement.append(counter6)

}

//Kata 7
//Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
createHeadingElements('KATA 7')
const kata7List = document.createElement('ul')
for (let counter7 = 20; counter7 >= 1; counter7 -= 2) {
    let liElement = document.createElement('li')
    parentElement.append(kata7List)
    kata7List.append(liElement)
    liElement.append(counter7)

}

//Kata 8
//Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
createHeadingElements('KATA 8')
const kata8List = document.createElement('ul')
for (let counter8 = 19; counter8 >= 1; counter8 -= 2) {
    let liElement = document.createElement('li')
    parentElement.append(kata8List)
    kata8List.append(liElement)
    liElement.append(counter8)

}

//Kata 9
//Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
createHeadingElements('KATA 9')
const kata9List = document.createElement('ul')
for (let counter9 = 100; counter9 >= 5; counter9 -= 5) {
    let liElement = document.createElement('li')
    parentElement.append(kata9List)
    kata9List.append(liElement)
    liElement.append(counter9)

}

//Kata 10
//Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
createHeadingElements('KATA 10')
const kata10List = document.createElement('ul')
for (let counter10 = 100; counter10 >= 1; counter10 -= 1) {
    const counter10IsPerfectSquare = Number.isInteger(Math.sqrt(counter10))
    if (counter10IsPerfectSquare) {
        let liElement = document.createElement('li')
        parentElement.append(kata10List)
        kata10List.append(liElement)
        liElement.append(counter10)
    }
}

//Kata 11
// Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
createHeadingElements('KATA 11')
const kata11List = document.createElement('ul')
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    let liElement = document.createElement('li')
    parentElement.append(kata11List)
    kata11List.append(liElement)
    liElement.append(sampleArray[counter])
}

//Kata 12
// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
createHeadingElements('KATA 12')
const kata12List = document.createElement('ul')
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (sampleArray[counter] % 2 === 0) {
        let liElement = document.createElement('li')
        parentElement.append(kata12List)
        kata12List.append(liElement)
        liElement.append(sampleArray[counter])
    }
}

//Kata 13
// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
createHeadingElements('KATA 13')
const kata13List = document.createElement('ul')
for (index = 0; index < sampleArray.length; index++) {
    let currentIndex = sampleArray[index]

    if (currentIndex % 2 === 1) {
        let liElement = document.createElement('li')
        parentElement.append(kata13List)
        kata13List.append(liElement)
        liElement.append(currentIndex)
    }
}

//Kata 14
// Display the square of each element in sampleArray. (219961, 570025, …, 222784)
createHeadingElements('KATA 14')


// const kata14List = document.createElement('ul')

// for (index = 0; index < sampleArray.length; index++) {

//     const PerfectSquare = sampleArray[index] * sampleArray[index]


//     let liElement = document.createElement('li')
//     parentElement.append(kata14List)
//     kata14List.append(liElement)
//     liElement.append(PerfectSquare)

// }


const kata14List = document.createElement('ul')

for (index = 0; index < sampleArray.length; index++) {

    const square_it = (element) => element ** 2

    const sampleArray2 = sampleArray.map(square_it)

    let currentIndex2 = sampleArray2[index]

    let liElement = document.createElement('li')

    parentElement.append(kata14List)
    kata14List.append(liElement)
    liElement.append(currentIndex2)


    /*const PerfectSquare = Number.isInteger(Math.sqrt(index))
    if (PerfectSquare) {
        let liElement = document.createElement('li')
        parentElement.append(kata14List)
        kata14List.append(liElement)
        liElement.append(currentIndex)
    }   */

}

//Kata 15
// Display the sum of all the numbers from 1 to 20.
createHeadingElements("KATA 15");
const kata15List = document.createElement("ul");

let total15 = 0;
for (let counter = 1; counter <= 20; counter += 1) {
    if (counter < 20) {
        total15 = total15 + counter;
    } else {
        total15 = total15 + counter;
        let liElement = document.createElement("li");
        parentElement.append(kata15List);
        kata15List.append(liElement);
        liElement.append(total15);
    }
}

//Kata 16
// 16.Display the sum of all the elements in sampleArray.
createHeadingElements("KATA 16");
const kata16List = document.createElement("ul");

let total16 = 0;
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (counter < sampleArray.length - 1) {
        total16 = total16 + sampleArray[counter];
    } else {
        total16 = total16 + sampleArray[counter];
        let liElement = document.createElement("li");
        parentElement.append(kata16List);
        kata16List.append(liElement);
        liElement.append(total16);
    }
}

//Kata 17
// Display the smallest element in sampleArray.
createHeadingElements("KATA 17");
const min = Math.min(...sampleArray);

const kata17List = document.createElement("ul");
let liElement = document.createElement("li");
parentElement.append(kata17List);
kata17List.append(liElement);
liElement.append(min);

//Kata 18
//Display the largest element in sampleArray.
createHeadingElements('KATA 18')
const kata18List = document.createElement('ul')
let max = sampleArray.reduce(function (a, b) {
    return Math.max(a, b);

})
let liElement2 = document.createElement('li')
parentElement.append(kata18List)
kata18List.append(liElement2)
liElement2.append(max)

//Kata 19
//Display 20 solid gray rectangles, each 20px high and 100px wide.
createHeadingElements('KATA 19')
for (counter = 0; counter < 20; counter += 1) {
    const greyDiv = document.createElement('div')
    greyDiv.setAttribute('class', 'greyBlocks')
    parentElement.append(greyDiv)
}

//Kata 20
// Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).

createHeadingElements("KATA 20");
let blockwidth20 = 105;

for (counter = 0; counter < 20; counter += 1) {
    const greyDiv = document.createElement("div");
    greyDiv.setAttribute("class", "greyBlocks20");
    greyDiv.style.width = blockwidth20 + "px";
    blockwidth20 += 5;
    parentElement.append(greyDiv);
}

//Kata 21
// Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
createHeadingElements('KATA 21')
for (counter = 0; counter < 20; counter += 1) {
    let widthPixels = sampleArray[counter]
    const greyDiv = document.createElement('div')
    greyDiv.setAttribute('class', 'greyBlocks20')
    greyDiv.style.width = widthPixels + 'px'
    parentElement.append(greyDiv)
}
//Kata 22
// As in #21, but alternate colors so that every other rectangle is red.
createHeadingElements("KATA 22");
for (counter = 0; counter < 20; counter += 1) {
    let widthPixels = sampleArray[counter];
    const greyDiv = document.createElement("div");
    greyDiv.setAttribute("class", "greyBlocks22");
    greyDiv.style.width = widthPixels + "px";
    parentElement.append(greyDiv);
}
//Kata 23
//As in #21, but color the rectangles with even widths red.
createHeadingElements("KATA 23");
for (counter = 0; counter < 20; counter += 1) {
    let widthPixels = sampleArray[counter];
    const greyDiv = document.createElement("div");
    greyDiv.setAttribute("class", "greyBlocks23");
    greyDiv.style.width = widthPixels + "px";
    if (widthPixels % 2 === 0) {
        greyDiv.style.backgroundColor = "red";
    }
    parentElement.append(greyDiv);
}