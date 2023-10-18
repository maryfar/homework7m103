function aclean(arr) {
    const map = new Map();
  
    for (const word of arr) {
      const sortedWord = word.toLowerCase().split("").sort().join("");
      map.set(sortedWord, word);
      console.log(map);
    }
  
    return Array.from(map.values());
  }
  
  const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  console.log(aclean(arr));