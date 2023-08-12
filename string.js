// Slice

var numbers = [20, 50, 44, 80, 45, 75, 69, 12]

numbers.slice(1,5);
console.log(numbers);
console.log(numbers.slice(1,5));

// The slice works within the given limit. It includes the starting limit but excludes the ending limit


// Substring

var poem = 'Pakhi Paka Pepe Khay';
console.log(poem.substring(3)); // This Substring starts from the 3rd index and ends at the end on the string
console.log(poem.substring(6,15)); // This Substring got a limit where it starts from Index 6 and ends at Index 15

// "Include" Operation is used to check whether any Substring found within a String

var x = 'Lionel Messi is the Ultimate GOAT of Football';
console.log(x.includes('GOAT'));
console.log(x.includes('Ronaldo'));

// But be careful as it is case sensitive and the original result can be hampered if there is a spelling mistake or case sensitivity mistake

/* The difference between ARRAY and STRING is that in Array we can do GET and SET both operations.
But in String, we can only do Get Operation, but not the Set Operation */

/* That's why String is called IMMUTABLE */
