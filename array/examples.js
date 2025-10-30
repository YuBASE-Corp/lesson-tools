export const methodExamples = {
    push: {
        js: `// As-Is（実行前）
const fruits = ['りんご', 'バナナ'];

// 実行
fruits.push('オレンジ');

// To-Be（実行後）
// fruits => ['りんご', 'バナナ', 'オレンジ']
// 戻り値: 3（新しい配列の長さ）`
    },
    pop: {
        js: `// As-Is（実行前）
const fruits = ['りんご', 'バナナ', 'オレンジ'];

// 実行
const removed = fruits.pop();

// To-Be（実行後）
// fruits => ['りんご', 'バナナ']
// removed => 'オレンジ'（削除された要素）`
    },
    unshift: {
        js: `// As-Is（実行前）
const fruits = ['バナナ', 'オレンジ'];

// 実行
fruits.unshift('りんご');

// To-Be（実行後）
// fruits => ['りんご', 'バナナ', 'オレンジ']
// 戻り値: 3（新しい配列の長さ）`
    },
    shift: {
        js: `// As-Is（実行前）
const fruits = ['りんご', 'バナナ', 'オレンジ'];

// 実行
const removed = fruits.shift();

// To-Be（実行後）
// fruits => ['バナナ', 'オレンジ']
// removed => 'りんご'（削除された要素）`
    },
    slice: {
        js: `// As-Is（実行前）
const fruits = ['りんご', 'バナナ', 'オレンジ', 'ぶどう', 'いちご'];

// 実行
const sliced = fruits.slice(1, 4);

// To-Be（実行後）
// fruits => ['りんご', 'バナナ', 'オレンジ', 'ぶどう', 'いちご']（元の配列は変更されない）
// sliced => ['バナナ', 'オレンジ', 'ぶどう']（新しい配列）`
    },
    splice: {
        js: `// As-Is（実行前）
const fruits = ['りんご', 'バナナ', 'オレンジ', 'ぶどう'];

// 実行
const removed = fruits.splice(1, 2, 'グレープ', 'キウイ');

// To-Be（実行後）
// fruits => ['りんご', 'グレープ', 'キウイ', 'ぶどう']
// removed => ['バナナ', 'オレンジ']（削除された要素）`
    },
    forEach: {
        js: `// As-Is（実行前）
const fruits = ['りんご', 'バナナ', 'オレンジ'];

// 実行
fruits.forEach((fruit, index) => {
    console.log(\`\${index}: \${fruit}\`);
});

// To-Be（実行後）
// コンソール出力:
// 0: りんご
// 1: バナナ
// 2: オレンジ
// 戻り値: undefined`
    },
    map: {
        js: `// As-Is（実行前）
const numbers = [1, 2, 3, 4, 5];

// 実行
const squared = numbers.map(num => num * num);

// To-Be（実行後）
// numbers => [1, 2, 3, 4, 5]（元の配列は変更されない）
// squared => [1, 4, 9, 16, 25]（新しい配列）`
    },
    filter: {
        js: `// As-Is（実行前）
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 実行
const evens = numbers.filter(num => num % 2 === 0);

// To-Be（実行後）
// numbers => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]（元の配列は変更されない）
// evens => [2, 4, 6, 8, 10]（新しい配列）`
    },
    reduce: {
        js: `// As-Is（実行前）
const numbers = [1, 2, 3, 4, 5];

// 実行
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

// To-Be（実行後）
// numbers => [1, 2, 3, 4, 5]（元の配列は変更されない）
// sum => 15（合計値）

// 処理の流れ:
// acc: 0, cur: 1 => 0 + 1 = 1
// acc: 1, cur: 2 => 1 + 2 = 3
// acc: 3, cur: 3 => 3 + 3 = 6
// acc: 6, cur: 4 => 6 + 4 = 10
// acc: 10, cur: 5 => 10 + 5 = 15`
    },
    find: {
        js: `// As-Is（実行前）
const fruits = ['りんご', 'バナナ', 'オレンジ', 'ぶどう'];

// 実行
const found = fruits.find(fruit => fruit.length > 3);

// To-Be（実行後）
// fruits => ['りんご', 'バナナ', 'オレンジ', 'ぶどう']（元の配列は変更されない）
// found => 'バナナ'（条件に合う最初の要素）`
    },
    some: {
        js: `// As-Is（実行前）
const numbers = [1, 2, 3, 4, 5];

// 実行
const hasEven = numbers.some(num => num % 2 === 0);

// To-Be（実行後）
// numbers => [1, 2, 3, 4, 5]（元の配列は変更されない）
// hasEven => true（1つでも条件を満たす要素がある）`
    },
    every: {
        js: `// As-Is（実行前）
const numbers = [2, 4, 6, 8, 10];

// 実行
const allEven = numbers.every(num => num % 2 === 0);

// To-Be（実行後）
// numbers => [2, 4, 6, 8, 10]（元の配列は変更されない）
// allEven => true（すべての要素が条件を満たす）`
    },
    includes: {
        js: `// As-Is（実行前）
const fruits = ['りんご', 'バナナ', 'オレンジ'];

// 実行
const hasBanana = fruits.includes('バナナ');
const hasGrape = fruits.includes('ぶどう');

// To-Be（実行後）
// fruits => ['りんご', 'バナナ', 'オレンジ']（元の配列は変更されない）
// hasBanana => true（要素が含まれている）
// hasGrape => false（要素が含まれていない）`
    },
    indexOf: {
        js: `// As-Is（実行前）
const fruits = ['りんご', 'バナナ', 'オレンジ', 'ぶどう'];

// 実行
const orangeIndex = fruits.indexOf('オレンジ');
const grapeIndex = fruits.indexOf('メロン');

// To-Be（実行後）
// fruits => ['りんご', 'バナナ', 'オレンジ', 'ぶどう']（元の配列は変更されない）
// orangeIndex => 2（要素のインデックス）
// grapeIndex => -1（要素が見つからない場合）`
    },
    concat: {
        js: `// As-Is（実行前）
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 実行
const newArr = arr1.concat(arr2);

// To-Be（実行後）
// arr1 => [1, 2, 3]（元の配列は変更されない）
// arr2 => [4, 5, 6]（元の配列は変更されない）
// newArr => [1, 2, 3, 4, 5, 6]（新しい配列）`
    }
};
