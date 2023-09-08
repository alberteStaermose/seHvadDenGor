
// Laver hook til html hvor points skal komme frem
let myPoints = document.getElementById("points");
// Deffinerer at count starter på 0
let count= 0;




// Forsøgt at lave css animation - insekter flyver rundt
// let myInstects = document.querySelector('#insects');

// Forsøgt at lave JS animation - insecter flyver rundt
// myInstects.classList.add("flyver")

// for(let i =0; i < myFlys.length; i++){
//     let id = null;
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         elem.style.top = pos + "px"; 
//         elem.style.left = pos + "px"; 
//       }
//     }
// }
    



// Definerer ny højde og bredde samt ny højde og bredde
let h,w,nh,nw; 




// Funktion der kaldes ved click som giver sommerfugle og fluer random postitioner
function placeObject(obj){
    console.log(obj, "er kommet ind i denne funktion");
    // Giver sommerfugle og fluer nye decimaler til ny plads
    h = window.innerHeight - 300;
    w = window.innerWidth - 300;
    nh = Math.floor(Math.random() * h);
    nw = Math.floor(Math.random() * w);
    console.log(nh, nw);
    // Definerer at decimalerne skal være i px
    obj.style.top = nh + 'px';
    obj.style.left = nw + 'px';
    // Viser sommerfugle og fluer igen
    obj.style.display = 'block';
    // s = Math.floor(Math.random()*1000) + 500
    // return [nh,nw,s]; 
    
    

    // Find en tilfældig xPosition
    // Find en tilfældig y position
    // Brug CSS til at placere den de nye steder
    // Vis den igen
    // i stands for "index". you could also call this banana or haircut. it's a variable

}





// Laver hook til firkanterne i html
let myFlys = document.getElementsByClassName("fluer");
// Sætter loops igang og definerer hvad der skal ske
for(let i =0; i < myFlys.length; i++){
    console.log(myFlys[i]);
// Laver en function, der fotæller at loopet skal ske ved click
    myFlys[i].addEventListener("click", (bib) => {
        console.log("Flue er clicket");

        // deffinerer at count skal stige med 1 ved hvert click
        count++;
        console.log(count);
        // Skubber count ud i dom
        myPoints.innerText = count ;

        // Får fluer til at forsvinde ved klik
        bib.target.style.display = "none";
        // Kalder function der skal vise flue igen på ny position
        placeObject(bib.target);
    })
// Forsøgt 
    // if (bib = false) {
    //     bib.target.style.display = "none";
    //     // Kalder function der skal vise flue igen på ny position
    //     placeObject(bib.target);
    // }
    
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