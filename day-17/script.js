let timer = 10;
let time = document.getElementById('display');


setTimeout(() => {
    time.className = "badge rounded-pill bg-danger";
    time.innerHTML = timer--;

    setTimeout(() => {
        time.className = "badge rounded-pill bg-light text-dark";
        time.innerHTML = timer--;

        setTimeout(() => {
            time.className = "badge rounded-pill bg-danger";
            time.innerHTML = timer--;

                setTimeout(() => {
                    time.className = "badge rounded-pill bg-light text-dark";
                    time.innerHTML = timer--;
                
                    setTimeout(() => {
                        time.className = "badge rounded-pill bg-danger";
                        time.innerHTML = timer--;

                        setTimeout(() => {
                            time.className = "badge rounded-pill bg-light text-dark";
                            time.innerHTML = timer--;    
                            
                            setTimeout(() => {
                                time.className = "badge rounded-pill bg-danger";
                                time.innerHTML = timer--;   
                                
                                setTimeout(() => {
                                    time.className = "badge rounded-pill bg-light text-dark";
                                    time.innerHTML = timer--;  
                                    
                                    setTimeout(() => {
                                        time.className = "badge rounded-pill bg-danger";
                                        time.innerHTML = timer--;

                                        setTimeout(() => {
                                            time.className = "badge rounded-pill bg-light text-dark";
                                            time.innerHTML = timer--;      
                                            
                                            setTimeout(() => {
                                                time.className = "badge rounded-pill bg-danger";
                                                time.innerHTML = "Happy Independence Day"                                               
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)                                
                            },1000)
                        },1000)
                   },1000)
            },1000)
        },1000)
   },1000)
},1000)













