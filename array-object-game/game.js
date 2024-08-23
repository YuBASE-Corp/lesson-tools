const variableNames = ['data', 'info', 'item', 'element', 'value'];

function getRandomVariableName() {
    return variableNames[Math.floor(Math.random() * variableNames.length)];
}

let currentQuestion = {};
let currentMode = 'array';
let currentVariableName = '';

let timeAttackMode = false;
let correctCount = 0;
let incorrectCount = 0;
let timeLeft = 60;
let timer;
let countdownTimer;
let questionHistory = [];

function startGame() {
    currentMode = document.getElementById('mode').value;
    localStorage.setItem('selectedMode', currentMode); // モードをlocalStorageに保存
    generateQuestion();
    
    // シンタックスハイライトを初期化
    hljs.highlightAll();

    // タイムアタックモード時は回答欄をクリア
    if (timeAttackMode) {
        document.getElementById('answer').textContent = '';
    }
    
    // 答えにフォーカス
    focusAnswer();
}

function generateQuestion() {
    let questionText = '';
    currentVariableName = getRandomVariableName();
    if (currentMode === 'array') {
        currentQuestion = generateArrayQuestion();
        questionText = `配列から値を取り出して！: <pre><code class="language-javascript">let ${currentVariableName} = ${JSON.stringify(currentQuestion.array)}</code></pre>`;
    } else if (currentMode === 'object') {
        currentQuestion = generateObjectQuestion();
        questionText = `オブジェクトから値を取り出して！: <pre><code class="language-javascript">let ${currentVariableName} = ${JSON.stringify(currentQuestion.object, null, 2)}</code></pre>`;
    } else if (currentMode === 'mixed') {
        currentQuestion = generateMixedQuestion();
        questionText = `配列とオブジェクトの組み合わせから値を取り出して！: <pre><code class="language-javascript">let ${currentVariableName} = ${JSON.stringify(currentQuestion.mixed, null, 2)}</code></pre>`;
    }
    document.getElementById('question').innerHTML = `<p class="mb-2">${questionText}</p><p class="font-bold">取り出す値: ${currentQuestion.answer}</p>`;
    document.getElementById('result').innerText = '';
    
    // シンタックスハイラを適用
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });

    questionHistory.push({
        question: questionText,
        correctAnswer: currentQuestion.answer,
        userAnswer: null
    });
}

function generateUniqueRandomNumbers(count, max) {
    const numbers = new Set();
    while(numbers.size < count) {
        numbers.add(Math.floor(Math.random() * max));
    }
    return Array.from(numbers);
}

function generateArrayQuestion() {
    const length = Math.floor(Math.random() * 2) + 2; // 2から3の要素数
    const array = generateUniqueRandomNumbers(length, 100); // 0から99のランダムな数値
    const index = Math.floor(Math.random() * array.length);
    return { array, index, answer: array[index] };
}

function generateObjectQuestion() {
    const keys = ['a', 'b', 'c', 'd', 'e'];
    const objectLength = Math.floor(Math.random() * 2) + 2; // 2から3のキー数
    const selectedKeys = keys.slice(0, objectLength);
    const values = generateUniqueRandomNumbers(objectLength, 100);
    const object = {};
    selectedKeys.forEach((key, index) => {
        object[key] = values[index];
    });
    const key = selectedKeys[Math.floor(Math.random() * selectedKeys.length)];
    return { object, key, answer: object[key] };
}

function generateMixedQuestion() {
    const isArrayOutside = Math.random() < 0.5;
    let mixed;
    let answer;

    if (isArrayOutside) {
        const length = Math.floor(Math.random() * 2) + 2; // 2から3の要素数
        mixed = [];
        for (let i = 0; i < length; i++) {
            mixed.push(generateObjectQuestion().object);
        }
        const arrayIndex = Math.floor(Math.random() * mixed.length);
        const objectKey = Object.keys(mixed[arrayIndex])[Math.floor(Math.random() * Object.keys(mixed[arrayIndex]).length)];
        answer = mixed[arrayIndex][objectKey];
        return { mixed, arrayIndex, objectKey, answer };
    } else {
        mixed = generateObjectQuestion().object;
        Object.keys(mixed).forEach(key => {
            if (Math.random() < 0.5) {
                mixed[key] = generateArrayQuestion().array;
            }
        });
        const objectKey = Object.keys(mixed)[Math.floor(Math.random() * Object.keys(mixed).length)];
        if (Array.isArray(mixed[objectKey])) {
            const arrayIndex = Math.floor(Math.random() * mixed[objectKey].length);
            answer = mixed[objectKey][arrayIndex];
            return { mixed, objectKey, arrayIndex, answer };
        } else {
            answer = mixed[objectKey];
            return { mixed, objectKey, answer };
        }
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').textContent.trim();
    let correctAnswer = '';
    if (currentMode === 'array') {
        correctAnswer = `${currentVariableName}[${currentQuestion.index}]`;
    } else if (currentMode === 'object') {
        correctAnswer = `${currentVariableName}.${currentQuestion.key}` + (currentQuestion.key.includes('-') ? ` または ${currentVariableName}['${currentQuestion.key}']` : '');
    } else if (currentMode === 'mixed') {
        if (Array.isArray(currentQuestion.mixed[currentQuestion.key])) {
            correctAnswer = `${currentVariableName}.${currentQuestion.key}[${currentQuestion.index}]`;
        } else {
            correctAnswer = `${currentVariableName}.${currentQuestion.key}.${currentQuestion.subKey}` + 
                (currentQuestion.subKey.includes('-') ? ` または ${currentVariableName}.${currentQuestion.key}['${currentQuestion.subKey}']` : '');
        }
    }
    
    const isCorrect = userAnswer === correctAnswer || (correctAnswer.includes(' または ') && correctAnswer.split(' または ').includes(userAnswer));
    
    if (isCorrect) {
        document.getElementById('result').innerHTML = '<p class="text-green-600 font-bold">正解！</p>';
        if (timeAttackMode) correctCount++;
    } else {
        document.getElementById('result').innerHTML = `<p class="text-red-600 font-bold">不正解。</p><p>正解は: ${correctAnswer}</p>`;
        if (timeAttackMode) incorrectCount++;
    }

    questionHistory[questionHistory.length - 1].userAnswer = userAnswer;

    if (timeAttackMode) {
        setTimeout(() => {
            document.getElementById('result').innerHTML = '';
            startGame();
        }, 1000);
    }
}

let currentSuggestions = [];
let selectedSuggestionIndex = 0;

function updateSuggestions() {
    const answerElement = document.getElementById('answer');
    const suggestionsElement = document.getElementById('suggestions');
    const currentText = answerElement.textContent.trim();
    const lastWord = currentText.split(/[.\[\]]+/).pop();

    if (lastWord) {
        currentSuggestions = getSuggestions(lastWord);
        if (currentSuggestions.length > 0) {
            suggestionsElement.innerHTML = currentSuggestions.map((suggestion, index) => 
                `<div class="suggestion p-2 hover:bg-gray-100 cursor-pointer${index === selectedSuggestionIndex ? ' bg-gray-200' : ''}">${suggestion}</div>`
            ).join('');
            suggestionsElement.classList.remove('hidden');
            selectedSuggestionIndex = 0;
        } else {
            suggestionsElement.classList.add('hidden');
            selectedSuggestionIndex = -1;
        }
    } else {
        suggestionsElement.classList.add('hidden');
        selectedSuggestionIndex = -1;
    }
}

function getSuggestions(prefix) {
    const allSuggestions = [currentVariableName, ...Object.keys(currentQuestion.mixed || currentQuestion.object || {})];
    return allSuggestions.filter(suggestion => suggestion.toLowerCase().startsWith(prefix.toLowerCase()));
}

document.getElementById('answer').addEventListener('input', updateSuggestions);
document.getElementById('answer').addEventListener('keydown', function(e) {
    const suggestionsElement = document.getElementById('suggestions');
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        checkAnswer();
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (e.key === 'ArrowDown') {
            selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, currentSuggestions.length - 1);
        } else {
            selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, 0);
        }
        updateSuggestions();
    } else if (e.key === 'Tab' || e.key === 'Enter') {
        if (selectedSuggestionIndex !== -1 && currentSuggestions.length > 0) {
            e.preventDefault();
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);
            const lastWord = this.textContent.split(/[.\[\]]+/).pop();
            const suggestionToInsert = currentSuggestions[selectedSuggestionIndex].slice(lastWord.length);
            const textNode = document.createTextNode(suggestionToInsert);
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            range.setEndAfter(textNode);
            selection.removeAllRanges();
            selection.addRange(range);
            suggestionsElement.classList.add('hidden');
            updateSuggestions();
        }
    }
});

document.getElementById('suggestions').addEventListener('click', function(e) {
    if (e.target.classList.contains('suggestion')) {
        document.getElementById('answer').textContent = e.target.textContent;
        this.classList.add('hidden');
    }
});

function focusAnswer() {
    const answerElement = document.getElementById('answer');
    answerElement.focus();
    // カーソルを末尾に移動
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(answerElement);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
}

document.getElementById('answer').addEventListener('keydown', function(e) {
    if (e.key === 'Tab' || e.key === 'Enter') {
        const suggestion = document.querySelector('#suggestions .suggestion.selected');
        if (suggestion) {
            e.preventDefault();
            this.textContent = suggestion.textContent;
            document.getElementById('suggestions').classList.add('hidden');
            focusAnswer();
        }
    }
});

function startTimeAttack() {
    timeAttackMode = true;
    correctCount = 0;
    incorrectCount = 0;
    timeLeft = 60;
    let countdown = 3;
    
    currentMode = document.getElementById('mode').value;
    
    document.getElementById('question').innerHTML = `<h2 class="text-3xl font-bold text-center">準備してください...</h2>`;
    document.getElementById('result').innerHTML = '';
    document.getElementById('answer').textContent = '';
    document.getElementById('timer').textContent = '';
    
    countdownTimer = setInterval(function() {
        if (countdown > 0) {
            document.getElementById('question').innerHTML = `
                <h2 class="text-3xl font-bold text-center">準備してください...</h2>
                <p class="text-6xl font-bold text-center mt-4">${countdown}</p>
            `;
        } else if (countdown === 0) {
            document.getElementById('question').innerHTML = `
                <h2 class="text-3xl font-bold text-center">スタート！</h2>
            `;
        } else {
            clearInterval(countdownTimer);
            document.getElementById('timer').textContent = `残り時間: ${timeLeft}秒`;
            startGame();
            timer = setInterval(function() {
                timeLeft--;
                updateTimerDisplay();
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    endTimeAttack();
                }
            }, 1000);
        }
        countdown--;
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timer').textContent = `残り時間: ${timeLeft}秒`;
}

function endTimeAttack() {
    timeAttackMode = false;
    clearInterval(timer);
    clearInterval(countdownTimer);
    let resultHTML = `
        <h2 class="text-2xl font-bold mb-4">タイムアタック結果</h2>
        <p class="text-xl">正解数: ${correctCount}</p>
        <p class="text-xl">不正解数: ${incorrectCount}</p>
        <h3 class="text-xl font-bold mt-4 mb-2">問題履歴:</h3>
    `;
    questionHistory.forEach((q, index) => {
        resultHTML += `
            <div class="mb-4 p-4 bg-gray-100 rounded">
                <p class="font-bold">問題 ${index + 1}:</p>
                <p>${q.question}</p>
                <p class="text-green-600">正解: ${q.correctAnswer}</p>
                <p class="${q.userAnswer === q.correctAnswer ? 'text-green-600' : 'text-red-600'}">
                    あなたの回答: ${q.userAnswer || '未回答'}
                </p>
            </div>
        `;
    });
    document.getElementById('question').innerHTML = resultHTML;
    document.getElementById('result').innerHTML = '';
    document.getElementById('timer').textContent = '';
    questionHistory = []; // 履歴をリセット
}

// ページロード時にモードを読み込む
window.addEventListener('load', function() {
    const savedMode = localStorage.getItem('selectedMode');
    if (savedMode) {
        document.getElementById('mode').value = savedMode;
    }
});