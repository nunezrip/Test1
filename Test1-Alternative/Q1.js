// Push an array containing 'John' and 35 as its only two values to the end of
// the people array, using JavaScript's push method.

var people = [ ['jose', 28], ['francis', 20], ['henrietta', 25] ];

function getNames(){
    let names =[]
    for (i in this.people){
        names.push(this.people[i].name)
    }
    return names;
}

console.log(peoples);