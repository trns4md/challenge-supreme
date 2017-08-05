var getNumber = document.getElementById("get-number"),
    displayArea = document.getElementById("diplay-area");

getNumber.addEventListener("click",function(){
    displayArea.innerHTML;
    for(var i = 1; i < 100; i++){
        console.log(i);
    
        
        if (i%3==0){
            displayArea.innerHTML+="Fizz"+ i+"<br>";
        }
        else if (i%5==0){
            displayArea.innerHTML+="Buzz"+ i+ "<br>";

        }else {
            displayArea.innerHTML+= i +"<br>"  ;
        }
    }
});    

