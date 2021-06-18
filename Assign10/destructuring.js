/* On one hand, destructuring an array, is like doing a one-to-one comparison. Notably, 
in array destructuring, when you want to ignore some unpacked variables, 
you leave it blank with a comma to note that you are not matching that index.

On the other hand, in destructuring an object, you have to match the key name. 
If the key name is not matched it will not understand which property is being destructured.
Also notable is when you want to ignore a property of the unpacked objec, you just leave without
indicating as is the case with arrays.
*/

// Array destructuring use case
/*
 unpacking values of a regular expression
 when the regular expression exec() method is executed, it returns an array of the entire matched
 expression and parts of the string that matches the expressions in the parenthesis
*/
function parseUrl(validUrl) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(validUrl);

  const [entireUrl, , host, path] = parsedURL;
  console.log(host);
}

parseUrl(
  "https://www.pirple.com/courses/take/keeping-up-with-the-javascripts-part-1/assignments/9455651-homework-10-destructuring"
);

//Destructurng object use case
/*
Setting the default values of function parameters can be achieved using object destructuring
*/

function getBookDetails({
  title = "JavaSript",
  author = "Pirple",
  address = "Online Store",
}) {
  console.log(
    `Am reading the book ${title}, authored by ${author} and is accessible from ${address}`
  );
}

const myBookDetails = getBookDetails({
  author: "Sam",
  address: "Nairobi, Kenya",
});

/*
Destructuring Nested Arrays and Objects
Unpacking variables from arrays and object keeping in mind the array indexes and key names 
of the object properties
*/
const myBook = {
  title: "Keeping Up With ES",
  author: [
    {
      name: "Sam",
      address: "680 Koinange St",
      phone: "+2547 000 000",
    },
  ],
  revisions: [2015, ["Jan 2016", "Nov 2016", "Dec 2016"], 2020],
  copiesSold: 1000,
};
const {
  title,
  author: [{ name, address: addr }],
  revisions: [first, [x, , z], third],
  copiesSold,
} = myBook;
console.log(addr);
console.log(`Third revision first round was done on ${x}`);


