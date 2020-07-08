const nextIcon = '<img src="./assets/images/group-2.png">'



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[
        ,
        nextIcon 
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
