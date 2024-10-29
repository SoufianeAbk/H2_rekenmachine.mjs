import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

const rekenmachine = {
    optellen: function(a, b) {
      return a + b;
    },
    aftrekken: function(a, b) {
      return a - b;
    },
    vermenigvuldigen: function(a, b) {
      return a * b;
    },
    delen: function(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return 'Kan niet door nul delen';
      }
    }
  };
  
  console.log(rekenmachine.optellen(5, 3));       
  console.log(rekenmachine.aftrekken(10, 4));     
  console.log(rekenmachine.vermenigvuldigen(6, 7)); 
  console.log(rekenmachine.delen(12, 4));         
  console.log(rekenmachine.delen(5, 0));          
  
  

process.exit()