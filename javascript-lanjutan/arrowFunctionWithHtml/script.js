const box = document.querySelector('.box');

// this disini akan merunjuk kepada element box
box.addEventListener('click',function(){
    let satu = 'size';
    let dua = 'caption';
    let temp;
    if( this.classList.contains(satu)){
        [satu,dua] = [dua,satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    },1000);
})

