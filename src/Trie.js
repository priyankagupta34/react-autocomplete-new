function Trie() {
  this.trie = this.createNode();
}

Trie.prototype.createNode = function () {
  return {
    val: undefined,
    children: {}
  };
};

Trie.prototype.addWord = function (word) {
  let node = this.trie;
  for (let char of word) {
    node.children[char] = node.children[char] || this.createNode();
    node = node.children[char];
  }
  node.val = word;
};

Trie.prototype.autocompleteresult = function (word) {
  console.log("word", word);
  if (!word) return [];
  const result = [];
  let node = this.trie;
  for (let char of word) {
    if (!node) return result;
    // if(node.val) result.push(node.val);
    node = node.children[char];
  }

  const bt = function (node) {
    if (!node) return;
    if (node.val) result.push(node.val);

    for (let key in node.children) {
      bt(node.children[key]);
    }
  };
  bt(node);
  return result;
};

let trie = new Trie();

// function automcomplete(valueSet) {
//   valueSet.forEach((element) => {
//     trie.addWord(element);
//   });
//   return trie.autocompleteresult();
// };

export default trie;
