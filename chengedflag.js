
function chengedFlag(){

    const body= document.querySelector('body')
    const buttons=document.querySelectorAll('a').forEach(buttons=>{
        

        buttons.addEventListener('click',(e)=>{

            const result= e.currentTarget.firstChild.nodeValue;
            
            if(result.length <= 3){

                body.style.backgroundImage= 'url("./flag/Flag_of_the_Democratic_Republic_of_the_Congo.svg")';
                body.style.backgroundSize= 'cover'
            } 
            else if(result.length <= 6){
                body.style.backgroundImage= ' url("./flag/Flag_of_the_Republic_of_the_Congo.svg.png")';
                body.style.backgroundSize= 'cover';
            } 
            /* else if(result.length <= 5) {
                body.style.background= 'red'
            } */

        })
    })
}

chengedFlag()