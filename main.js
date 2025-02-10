const knopka=document.querySelector('.picclick')
const box=document.querySelector('.right')
const links=document.querySelectorAll('.link')
const knopka1=document.querySelector('.btnn')


knopka.addEventListener('click',function(){
    console.log("ishladi");
    
    if(box.classList.contains('new')){
        box.classList.remove('new')
        knopka.src="img/bx-menu-alt-right.svg.png"
        knopka1.classList.remove('newbtn')
        links.forEach(link =>{
            link.classList.remove('newlink')

        })

        


    }
    else{
        box.classList.add('new')
        knopka1.classList.add('newbtn')
        knopka.src="img/Chess_xxt45.svg.png"
        links.forEach(link =>{
            link.classList.add('newlink')

        })
    }
})