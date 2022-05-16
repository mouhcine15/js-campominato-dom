const griglia = document.getElementById("grid");
let livello = prompt("scegli il livello: 1 - 2 - 3")

// FUNZIONI
// funzione per creare griglia da 100
function creazione100 () {
    const node = document.createElement("div");
    node.className = "square100";
    return node;
};
// funzione per creare griglia da 81
function creazione81 () {
    const node = document.createElement("div");
    node.className = "square81";
    return node;
};
// funzione per creare griglia da 49
function creazione49 () {
    const node = document.createElement("div");
    node.className = "square49";
    return node;
};
// funzione per generare numero casuale 
function randomNumMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
};
// funzione per creare numero casuale all'interno di ogni casella
function createRandomUniqueNumArr (numItems, min, max) {
    const arrInt = [];
    while (arrInt.length < numItems) {
        let NumRandomInt = randomNumMinMax(min, max);
        if (!arrInt.includes(NumRandomInt)) {
            arrInt.push(NumRandomInt);
        };
    }

    const numBomb = crateRandomBomb(16, 1, 100);
    console.log(numBomb);
    return arrInt;
    
};
// funzione per creare le 16 bombe
function crateRandomBomb(numItems, min, max) {
    const arrBomb = [];
    while (arrBomb.length < numItems) {
        let NumRandomBomb = randomNumMinMax(min, max);
        if (!arrBomb.includes(NumRandomBomb)) {
            arrBomb.push(NumRandomBomb);
        }

    }
    return arrBomb;
}

// griglia di primo livello 
if (livello == "1") {
    
    // richiamare la funzione per numero random 
    const num = createRandomUniqueNumArr(100, 1, 100);
    console.log(num);

    // creare le caselle
    for (let i = 0; i < num.length; i++) {
        // richiamare la funzione per le caselle
        const quadrato = creazione100();
        
        let arr = num[i];
        // cliccare casella per cambio colore 
        quadrato.addEventListener ("click",
        function () {
                // mostare numeri 
                quadrato.append(arr);

                console.log(this);
                if (crateRandomBomb(arrBomb) == createRandomUniqueNumArr(arrInt)) {
                    this.classList.add("clickedBomb");
                } else {

                    this.classList.add("clicked");
                };
            }
        )
        griglia.append(quadrato);
    
    }       

 // griglia di secondo livello 
} else if (livello == "2") {

    const num = createRandomUniqueNumArr(81, 1, 81);
    console.log(num);

    const numBomb = crateRandomBomb(16, 1, 81);
    console.log(numBomb);
    
    for (let i = 0; i < 81; i++) {
    
        const quadrato = creazione81();

        let arr = num[i]; 
        quadrato.append(arr);

        quadrato.addEventListener ("click",
            function () {
                console.log(this);
                this.classList.add("clicked");
            }
        )
        griglia.append(quadrato);
    
    } 
// griglia di terzo livello 
} else if (livello == "3") {
    
    const num = createRandomUniqueNumArr(49, 1, 49);
    console.log(num);

    const numBomb = crateRandomBomb(16, 1, 49);
    console.log(numBomb);
        
        for (let i = 0; i < 49; i++) {
        
            const quadrato = creazione49();

            let arr = num[i]; 
            quadrato.append(arr);

            quadrato.addEventListener ("click",
                function () {
                    console.log(this);
                    this.classList.add("clicked");
                }
            )
            griglia.append(quadrato);
        
        }   
    };
