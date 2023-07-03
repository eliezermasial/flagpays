const body= document.querySelector('body')

async function chengedFlag(){

    const buttons=document.querySelectorAll('a').forEach(buttons=>{
        
        buttons.addEventListener('click',(e)=>{
            const value = e.target.innerHTML;
            
            if (value === "RDC"){

                body.style.backgroundImage= 'url("./flag/Flag_of_the_Democratic_Republic_of_the_Congo.svg")';
                body.style.backgroundSize= 'cover'

            } else if (value === 'IVOIR'){

                body.style.backgroundImage = 'url("./flag/cote ivoir.png")'
                body.style.backgroundSize= 'cover'

            } else if (value === 'BRAZZA'){

                body.style.backgroundImage= ' url("./flag/Flag_of_the_Republic_of_the_Congo.svg.png")';
                body.style.backgroundSize= 'cover';

            }
        }) 
    })
}

chengedFlag()