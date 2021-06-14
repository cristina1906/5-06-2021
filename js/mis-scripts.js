// anime({
//   targets: '.circulo, #estrella',
//   translateX: 250,
//   //scale: 1.5,
//   //duration: 5000,
//   // delay: 3000,
//   //rotate: '1turn',
//   loop: true,
//   //direction: 'alternate',
//   delay: anime.stagger(1000)
// });

// var enlaces = document.querySelectorAll('.nav-link');

// anime({
//   targets: enlaces,
//   duration:500,
//   translateX: [100,1000], 
//   rotate: 20,
// });

const texta01= document.querySelector('.text-1'); 
texta01.innerHTML = texta01.textContent.replace(/\S/g,"<span>$&</span>")

const animation= anime.timeline({
  targets : '.text-1 span',    
  loop:true,
});

animation
  .add({
      rotate:0,           
      scale:[5,1],  
      opacity: [0,.8],  
      easing: "easeOutBack", 
      duration:1500,      
      delay : anime.stagger(100),
  })

  .add({
    rotate:30,           
    scale:[5,1],  
    opacity: [0,.8],  
    easing: "easeOutBack", 
    duration:1500,  
    direction: 'alternate', 
    delay : anime.stagger(100),
})


// // Create a timeline with default parameters
// texta01 = anime.timeline({
//   easing: 'easeOutExpo',
//   duration: 750
// });

// // Add children
// texta01
// .add({
//   targets: '.text-1 span',
//   translateX: 250,
// })
// .add({
//   targets: '.text-1 span',
//   translateX: 250,
// })
// .add({
//   targets: '.text-1 span',
//   translateX: 250,
// });
