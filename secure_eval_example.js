// 危險：使用 eval() 執行不安全的程式碼
function unsafeOperation(userInput) {
    // 不要這樣做！這可能導致程式碼注入
    // eval(userInput);  // 高風險！
}

// 安全：使用 JSON.parse 處理 JSON 資料
function safeJSONParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error('Invalid JSON format:', e);
        return null;
    }
}

// 安全：使用物件查找替代動態執行
const allowedOperations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : null
};

function safeOperation(operation, a, b) {
    const fn = allowedOperations[operation];
    if (typeof fn === 'function') {
        return fn(a, b);
    }
    throw new Error('不支援的操作');
}
