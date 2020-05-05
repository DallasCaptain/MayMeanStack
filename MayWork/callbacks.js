function step1(data,next){
    data.push('step 1 done')
return (next(data))
}


function step2(data){
    console.log(data)
}

step1([0,2,1,3,4],step2)



console.log('done')
//syncrounous
//runs a single line at a time waiting for its return

//async
//will continue past a line while waiting for its return