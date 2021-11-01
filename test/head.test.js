const assertEqual = require('../assertEqual');

const head = require('../head');

assertEqual(head([6,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");