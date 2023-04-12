console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = arr.reduce((sum, number) => {
        return sum + number;
}, 0);

return sum;

}


console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]));

//Exercise 2: Book
let favBook = {};

favBook.title = "The Hobbit";
favBook.author = "J.R.R Tolkien"
favBook.pageCount = 295
favBook.readCount = 2

console.log(favBook);

function info() {
    return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`;

};

favBook.info = info;

console.log(favBook.info());

let favBook2 = {
    title: "Red Seas Under Red Skies",
    author: "Scott Lynch",
    pageCount: 700,
    readCount: 2,
    info,

}

console.log(favBook2.info());

//Exercise 3: Reverse every word in a sentence

let sentence = "The little red bird flew over the tree"

function reverseWords(sentence) {

    let words = sentence.split(" ");

    let result = words.map((word) => {
        let letters = word.split(""); 
        letters.reverse();
        return letters.join("");
    })
    return result.join(" ");
}

console.log(reverseWords(sentence));
console.log(reverseWords("My name is Jake"))
console.log(reverseWords("My dogs name is Tyson"));


// Exercise 4 Section

let csvData = "name,age\nJake,24\nNick,25\n,Jerry,32\nMike 50";

function csvConverter(data) {
    let headers =data.slice(0, data.indexOf("\n")).split(",");

    let valuesList = data.slice(data.indexOf("\n")+ 1).split("\n");

    const output = valuesList.map((row) => {
        let values = row.split(",");
        let obj = {};

        values.forEach((value, idx) => {
            if (idx < headers.length) {
                obj[headers[idx]] = values;
            } else {
                obj[`misc${idx- headers.length + 1}`] = values;
            }
        });

        return obj;
    });

    return output;
}
console.log (csvConverter(csvData));
console.log(
    csvConverter("name,city,occupation\nJake,St. Petersburg, Student, Some Value")
);

function converter(fileData) {

    let rows = fileData.split("\n");
    let headers = rows[0].split(",");

    for (let i =1; i < rows.length; i++) {
        let obj ={};
        let data = rows[i].split(",");
        data.forEach((value,index) => {
            let headerName = headers[index];
            obj[headerName] = value;
        });
        result.push(obj);
    }
    return result;
}

console.log(converter(csvData));

function reduceConvert(fileData) {

    return fileData.split("\n").reduce((output, row, index, arr) =>{
        let values = row.split(",")
        if (index == 0) {
            output.headers = values;
        } else {
            let obj = {};
            values.forEach((val,index)=>{
                if (index < output.headers.length){
                    obj[headers[index]] = val;
                } else {
                    obj[`misc${index -output.headers.length + 1}`]= val;
                }
            });

            if (!output.records) {
                output.records = [];
            }

            output.records.push(obj);
        }
        return output;
    },{});

    console.log


}


