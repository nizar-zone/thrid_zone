let move = 1;
function run() {
    const no = document.getElementById('no');
    if (move === 1) {
        no.style.bottom= '100px';
        no.style.right= '300px';
        move = 2;
        } else if (move === 2 ) {
                no.style.bottom= '50px';
                no.style.right= '50px';
                move = 3;
         }else  {
            no.style.bottom= '70px';
            no.style.right= '166px';
            move= 1;
         }
}


