let next = $('#next-but')
let left = $('#prev-but')
let container = $('#image-slider-container')

let x = 0
container.css({
    left: x+"%"
})

next.on('click',function(){
    x = (x<200) ? (x+100) : 0
    container.css({
        left: -x+"%"
    })
})

prev.on('click',function(){
    x = (x>0) ? (x-100) : 200
    container.css({
        left: -x+'%'
    })
})