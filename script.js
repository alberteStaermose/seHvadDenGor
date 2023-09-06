
// Laver hook til html hvor points skal komme frem
let myPoints = document.getElementById("points");
// Deffinerer at count starter på 0
let count= 0;



// Laver hook til firkanterne i html
let myFlys = document.getElementsByClassName("fluer");
// Sætter loops igang og definerer hvad der skal ske
for(let i =0; i < myFlys.length; i++){
    console.log(myFlys[i]);
// Laver en function, der fotæller at loopet skal ske ved click
    myFlys[i].addEventListener("click", () => {
        console.log("Flue er clicket");

        // deffinerer at count skal stige med 1 ved hvert click
        count++;
        console.log(count);
        // Skubber count ud i dom
        myPoints.innerText = count ;
    })
    
}

// Laver hook til firkanterne i html
let myButterflys = document.getElementsByClassName("sommerfugl");
// Sætter loops igang og definerer hvad der skal ske
for(let i =0; i < myButterflys .length; i++){
    console.log(myButterflys [i]);
// Laver en function, der fotæller at loopet skal ske ved click
    myButterflys [i].addEventListener("click", () => {
        console.log("Firkant er clicket");

        // deffinerer at count skal stige med 1 ved hvert click
        count--;
        console.log(count);
        // Skubber count ud i dom
        myPoints.innerText = count ;
    })
    
}



// Deffinerer hvordan points skal tælle
// Få dem ud på dom


// mySquares.addEventListener("click", () =)s