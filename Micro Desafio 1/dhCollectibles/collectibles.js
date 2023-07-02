function importar (marca){
    switch (marca){
        case 'hotToys':
            const stock1 = require('./datos/figuras1.json');
            return stock1;
            break;

        case 'bandai': 
            const stock2 = require('./datos/figuras2.json');
            return stock2;
            break;

        case 'starWars':
            const stock3 = require('./datos/figuras3.json');
            return stock3;
            break;
    }
}

module.exports = importar;