'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {
  // makes array that split the passed in word into an array
  const wordArray = word.split("");
  // make
  const vowels = ['a','e','i','o','u'];

  if(vowels.includes(word[0])){
    // adds way to the end of words that start with a vowel
    return word += 'way';
  }else{
    //loop startes at the 0 in the array until it get to a vowel
    for(let i = 0; i < word.length; i++){
      if(!vowels.includes(word[i])) {
        //pushes the last element to the end and shift removes the first item
        wordArray.push(wordArray.shift());
      }else{
        // push "ay" to the end of the array
        wordArray.push('ay');
        return wordArray.join('');
      }
    }
  }
};


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
