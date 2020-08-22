// Setting initial counter to 1
let count = 0;

// Selecting button and value field...

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){

        // console.log(e.currentTarget);
        
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')){
            count++;
        }else if(styles.contains('decrease')){
            count--;
        }
        else{
            count = 0;
        }

        if(count > 0){
            value.style.color = 'green';
        }else if(count < 0 ){
            value.style.color = 'red';
        }else{
            value.style.color = '#333';
        }
        value.textContent = count;
    });
});