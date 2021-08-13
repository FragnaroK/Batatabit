var countR = 0;
var countL = 2;

document.ready = goLeft();

function goLeft() {
    if (countL != 2) {
        
        let carrousel = document.getElementById('carrousel');
        let scrollPosition =  carrousel.scrollLeft;
            carrousel.scrollTo({
                left: scrollPosition - 250,
                behavior: 'smooth'
            });
            document.getElementById('btnR').style.opacity = 1;    
            document.getElementById('btnL').style.opacity = 1;    
            countL++;
            countR--;
        if (countL == 2) {
            document.getElementById('btnL').style.opacity = 0.5;
        }
    } else {
        document.getElementById('btnL').style.opacity = 0.5;
    }
        
}
function goRight() {
    if(countR != 2){

        let carrousel = document.getElementById('carrousel');
        let scrollPosition =  carrousel.scrollLeft;
        carrousel.scrollTo({
            left: scrollPosition + 250,
            behavior: 'smooth'
        });
        document.getElementById('btnR').style.opacity = 1;
        document.getElementById('btnL').style.opacity = 1;
        countR++;
        countL--;
        if (countR == 2) {
            document.getElementById('btnR').style.opacity = 0.5;
        }
    }
        
}