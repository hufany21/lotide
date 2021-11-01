const middle = require('../middle');
const assertEqual = require('../assertEqual');

assertEqual(middle([5,6,7]), 6);
assertEqual(middle(["Hello", "Lighthouse", "Labs"]), "Lighthouse");