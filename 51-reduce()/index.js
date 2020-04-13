// Hàm tính tổng viết bằng for ... of

const sumFor = (numberList) => {
  let sum = 0;
  for (const number of numberList) {
    const newSum = sum + number;
    // để sử dụng ở bước sau
    sum = newSum;
  }

  return sum;
};

console.log(sumFor([1, 2, 3, 4, 5]));

// 1. Xac dinh gia tri khoi tao
// 2. Xac dinh cong thuc voi KQ cua buoc truoc do
// --
// 0
// result = prevResult + current

// return numberList.reduce((resultFromLastStep, curValue) => { }, 0);

//   [1, 2, 3]
// sum = 0, number = 1 --> 0 + 1 = 1
// sum = 1, number = 2 --> 1 + 2 = 3
// sum = 3, number = 3 --> 3 + 3 = 6

const sumReduce = (numberList) =>
  numberList.reduce((sum, number) => sum + number, 0);
console.log(sumReduce([1, 2, 3, 4, 5]));

// Find the first longest word in list
// Input: ['love', 'easy', 'frontend']
// Output: frontend

const findTheLongestWord = (wordList) => {
  if (!Array.isArray(wordList) || wordList.length === 0) return null;

  return wordList.reduce((theLongestWord, currentWord) => {
    return theLongestWord.length > currentWord.length
      ? theLongestWord
      : currentWord;
  }, wordList[0]);
};
const wordList = ["love", "easy", "frontend"];
console.log(findTheLongestWord(wordList));

const arrayToObject = (itemList) => {
  return itemList.reduce((itemMap, item) => {
    itemMap[item.id] = item.value;
    return itemMap;
  }, {});
};

const itemList = [
  { id: "key1", value: "Superman" },
  { id: "key2", value: "Wonder Wonman" },
  { id: "key3", value: "Spider man" },
];

console.log(arrayToObject(itemList));
