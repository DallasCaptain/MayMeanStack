[6,2,5,7,8]
[2,6,5,7,8]
[2,5,6,7,8]
[2,5,6,7,8]

//selection
arr = [6,3,8,5,9,0,4,2]
[0,3,8,5,9,6,4,2]
[0,2,8,5,9,6,4,3]



temp = arr[i]
arr[i] = arr[mini]
arr[mini] = temp

//es6 swap
//i = 0 , y = 5
[arr[i],arr[y]] = [arr[y],arr[i]]