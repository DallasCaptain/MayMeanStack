var number = 9
var name ="Bob"
var arr = []
var obj = {}

var whatis =  number + name
name += ' the great'
//console.log(name)

arr.push(9)
arr.push(8)
arr.push(7)
// arr = [9,8,7] asdf asdf asdf asfd a
arr[0] = 18
var last_value = arr.pop()

obj['name']='carl'
//console.log(obj['name'])

var bob = {
    'name':'bob',
    'age' : 45,
    'saying':saying('bob'),
    'favNumbs': [5,13,78]
}
var carl = {
    'name':'carl',
    'age' : 36,
    'saying':saying('carl'),
    'favNumbs': [4,19,22],
    'bestFriend': bob
}
bob['bestFriend'] = carl

var scott = function(){
    console.log('I am scott')
}

var students = [bob,carl]
//{'name':'nick','age' : 36},{'name':'charlie','age':11}
function saying(name){
    return ('I am '+name)
}

for(var i = 0; i < students.length; i++ ){
    console.log(students[i].name)
    console.log(students[i].saying)
    for( var y = 0; y < students[i].favNumbs.length; y++){
        console.log(students[i].favNumbs[y])
    }
        
}
console.log(carl.bestFriend.bestFriend.bestFriend.bestFriend)
scott()