//PUNTOS 2 Y 3
let numeros=[0,1,2,3,4,5,6,7,8,9];
let [pos0,,pos2,,pos4]=numeros;

nuevoArray=numeros.filter((num)=> num!=pos0 && num!=pos2 && num!=pos4);

console.log(numeros);
console.log(pos0);
console.log(pos2);
console.log(pos4);
console.log(nuevoArray);

// PUNTO 4
let mascota={
    nombre:'Bony',
    tipo: 'Perro',
    color:'Dorado',
    raza: 'Golden Retriver',
}
let {nombre,tipo,color,raza}= mascota;
console.log("Hola les presento a mi mascota su nombre es: "+ nombre + ", es un hermoso: "+ tipo + ", de color: " + color + " y su raza es: " + raza);