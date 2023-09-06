
// Laver hook til html hvor points skal komme frem
let myPoints = document.getElementById("points");
// Deffinerer at count starter på 0
let count= 0;




var myInstects = document.querySelectorAll('img');
var newq;
let h,w,nh,nw,s; 


// Funktion der kaldes ved click som giver sommerfugle og fluer random postitioner
function placeObject(obj){
    console.log(obj, "er kommet ind i denne funktion");
    // h = window.innerHeight - 50;
    // w = window.innerWidth - 50;
    // nh = Math.floor(Math.random() * h);
    // nw = Math.floor(Math.random() * w);
    // s = Math.floor(Math.random()*1000) + 500
    // return [nh,nw,s]; 
    
    

    // Find en tilfældig xPosition
    // Find en tilfældig y position
    // Brug CSS til at placere den de nye steder
    // Vis den igen
    // i stands for "index". you could also call this banana or haircut. it's a variable

}

// myInstects.forEach(function myInstects(myclass) {
//     var newq = placeObject();
//     $(myclass).animate({ 
//       top: newq[0], left: newq[1] 
//       },
//       newq[2],   function(){
//         myInstects(myclass);        
//     });
//   });



// Laver hook til firkanterne i html
let myFlys = document.getElementsByClassName("fluer");
// Sætter loops igang og definerer hvad der skal ske
for(let i =0; i < myFlys.length; i++){
    console.log(myFlys[i]);
// Laver en function, der fotæller at loopet skal ske ved click
    myFlys[i].addEventListener("click", (e) => {
        console.log("Flue er clicket");

        // deffinerer at count skal stige med 1 ved hvert click
        count++;
        console.log(count);
        // Skubber count ud i dom
        myPoints.innerText = count ;

        // Får fluer til at forsvinde ved klik
        e.target.style.display = "none";
        // Kalder function der skal vise flue igen på ny position
        placeObject(e.target);
    })
    
}

// Laver hook til firkanterne i html
let myButterflys = document.getElementsByClassName("sommerfugle");
// Sætter loops igang og definerer hvad der skal ske
for(let i =0; i < myButterflys .length; i++){
    console.log(myButterflys [i]);
// Laver en function, der fotæller at loopet skal ske ved click
    myButterflys [i].addEventListener("click", (e) => {
        console.log("Firkant er clicket");

        // deffinerer at count skal stige med 1 ved hvert click
        count--;
        console.log(count);
        // Skubber count ud i dom
        myPoints.innerText = count ;

        // Får sommerfugle til at forsvinde ved klik
        e.target.style.display = "none";
        // Kalder function der skal vise flue igen på ny position
        placeObject(e.target);
    })
    
}







// Deffinerer hvordan points skal tælle
// Få dem ud på dom


// mySquares.addEventListener("click", () =)s