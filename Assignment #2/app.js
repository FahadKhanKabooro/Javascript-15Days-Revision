            // Assignment#2  Code 
            // 1. Write a function that creates a closure and returns a function that can add
            // a specific number to any number passed to it. For example, if the closure is
            // created with 5, the returned function should add 5 to any number passed
            // to it.

// function add(num1){
//     return function(num2){
//         console.log(num1 + num2)
//     }
// }
// let firstFunction =add(5);
// let secondFunction =add(6);
// firstFunction(10)
// secondFunction(10)

            // 2. Write a recursive function that searches an array for a specific value. The
            // function should return true if the value is found, and false if it is not. You
            // can assume that the array is not nested.


            // function searchArray(arr, value) {
            //     if (arr.length === 0) {
            //       return false; 
            //     } else if (arr[0] === value) {
            //       return true; 
            //     } else {
            //       return searchArray(arr.slice(1), value); 
            //     }
            //   }
            //   const myArray = [1, 2, 3, 4, 5];
            // console.log(searchArray(myArray, 8));
            // console.log(searchArray(myArray, 2)); 

            // 3. Write a function that adds a new paragraph element to the bottom of an
            // HTML document. The function should take a string argument that will be
            // used as the text content of the new paragraph element.

            // function addParagraph(text) {
            //     const paragraph = document.createElement('p'); 
            //     paragraph.textContent = text; 
            //     document.body.appendChild(paragraph); 
            //   }
            
            //   addParagraph("Adding a Paragraph with Dom ")

            // 4. Write a function that adds a new list item to an unordered list in an HTML
            // document. The function should take a string argument that will be used as
            // the text content of the new list item.

            // function addListItem(text) {
            //     const listItem = document.createElement('li'); 
            //     listItem.textContent = text; 
            //     const unorderedList = document.querySelector('ul'); 
            //     unorderedList.appendChild(listItem); 
            //   }
            // addListItem("List item 1")
            // addListItem("List item 2")
            // addListItem("List item 3")




            // 5. Write a function that changes the background color of an HTML element.
            // The function should take two arguments: the first argument is a reference
            // to the HTML element, and the second argument is a string representing
            // the new background color.

            // function changeBackgroundColor(element, color) {
            //     element.style.backgroundColor = color; 
            //   }
            //   const myElement = document.getElementById('my-element'); 
            // changeBackgroundColor(myElement, 'yellow');



            // 6. Write a function that saves an object to localStorage. The function should
            // take two arguments: the first argument is a string representing the key to
            // use for storing the object, and the second argument is the object to store.

            // function saveToLocalStorage(key, object) {
            //     localStorage.setItem(key, JSON.stringify(object)); 
            //   }
            //   const myObject = { name: 'Fahad', age: 32, course: 'Javascript', teacher: 'Ishaq Bhojani' };
            // saveToLocalStorage('my-object', myObject);
            // console.log(myObject)


            // 7. Write a function that retrieves an object from localStorage. The function
            // should take one argument, which is a string representing the key used to
            // store the object. The function should return the object.

            // function getFromLocalStorage(key) {
            //     const item = localStorage.getItem(key); 
            //     return JSON.parse(item); 
            //   }
            //   const myObject = getFromLocalStorage('my-object');
            // console.log(myObject);


            // 8. Write a function that takes an object and saves each property to
            // localStorage using the property name as the key and the property value as
            // the value. The function should also retrieve the object from localStorage
            // and return it as a new object.

            // function saveObjectToLocalStorage(object) {
                
            //     for (const [key, value] of Object.entries(object)) {
            //       localStorage.setItem(key, JSON.stringify(value));
            //     }
              
                
            //     const retrievedObject = {};
            //     for (const key in localStorage) {
            //       if (localStorage.hasOwnProperty(key)) {
            //         retrievedObject[key] = JSON.parse(localStorage.getItem(key));
            //       }
            //     }
            //     return retrievedObject;
            //   }
            //   const myObject = { name: 'Fahad', age: 32, course: 'Javascript', teacher: 'Ishaq Bhojani' }
            // const retrievedObject = saveObjectToLocalStorage(myObject);
            // console.log(retrievedObject);