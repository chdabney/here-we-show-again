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
createHeadingElements('Kata 5')
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

//Kata 19
//Display 20 solid gray rectangles, each 20px high and 100px wide.
createHeadingElements('KATA 19')
for (counter = 0; counter < 20; counter += 1) {
    const greyDiv = document.createElement('div')
    greyDiv.setAttribute('class', 'greyBlocks')
    parentElement.append(greyDiv)
}