'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
let removedNumber = 0;
let pushedNumber = 0;

let stacks = {
  a: [
    4, 3, 2, 1
  ],
  b: [],
  c: []
};

function resetGame(reset) {
  if (reset === 'yes') {
    stacks = {
      a: [
        4, 3, 2, 1
      ],
      b: [],
      c: []
    };
    getPrompt()
  } else {
    console.log('ctrl + c to quit')

  }
}
function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  if (stacks[startStack] && stacks[endStack]) {
    removedNumber = stacks[(startStack)].pop();
    pushedNumber = stacks[(endStack)].push(removedNumber) - 2
    isLegal(startStack, endStack);

  } else {
    getPrompt()
  }
}

function isLegal(startStack, endStack) {
  if (removedNumber > stacks[(endStack)][pushedNumber]) {
    stacks[(startStack)].push(stacks[(endStack)].pop());
    getPrompt();
  }
  if (!removedNumber) {
    stacks[(endStack)].pop();
    getPrompt();
  } else {
    checkForWin();
  }
}

function checkForWin() {
  // Your code here
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log('!!!!!!   You Win  !!!!!!');
    rl.question("Would you like to reset?", (reset) => {
      resetGame(reset);
    });

  } else {
    getPrompt();
  }

}

function towersOfHanoi(startStack, endStack) {
  // Your code here

  movePiece(startStack, endStack);
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);

    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [
          4, 3, 2
        ],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [
          4, 3, 2
        ],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [
          4, 3, 2, 1
        ],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = {
        a: [],
        b: [
          4, 3, 2, 1
        ],
        c: []
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [
          4, 3, 2
        ],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
