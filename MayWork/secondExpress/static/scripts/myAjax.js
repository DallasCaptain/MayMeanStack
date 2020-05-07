$( document ).ready(()=>{
    $('#getem').click(()=>{
        $.get('https://jsonplaceholder.typicode.com/todos/',(data)=>{
            //console.log('from api:', data)
            for(let i = 0; i < 10; i++){
                 $('#list').append(`<li>${data[i].title}</li>`)
            }
           
        })
    })
})