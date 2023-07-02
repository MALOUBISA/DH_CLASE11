const stock = require ('./collectibles.js');
let hotToys = stock('hotToys');
let bandai = stock('bandai');
let starWars = stock('starWars');

//unico Array con todas las listas
let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

//objeto literal
let collectibles ={
    figuras: unifiedCollectibles,
    listFigures: function(){
       this.figuras.forEach(element => console.log(element)) 
    },
    figuresByBrand: function(marca){ 
        figurasDeLaMarca= this.figuras.filter(figura => figura.marca==marca);
        return figurasDeLaMarca;
    }
}

//*********************************  COMPROBACION  ***********************************
// FUNCIONALIDAD listFigures:
collectibles.listFigures();

// FUNCIONALIDAD figuresByBrand: 
console.log (collectibles.figuresByBrand('Hot Toys'));
console.log (collectibles.figuresByBrand('Bandai'));
console.log (collectibles.figuresByBrand('Star Wars'));