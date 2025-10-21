// 不安全的做法 - 容易導致 XSS 攻擊
function unsafeUpdate(userInput) {
    // 危險：直接將使用者輸入寫入 innerHTML
    document.getElementById('output').innerHTML = userInput;
}

// 安全的做法
function safeUpdate(userInput) {
    // 安全：使用 textContent 或建立 Text 節點
    const element = document.getElementById('output');
    element.textContent = userInput;
    
    // 或者使用 createTextNode
    const text = document.createTextNode(userInput);
    element.appendChild(text);
}

// 如果需要插入 HTML，請使用 DOMPurify 等消毒函式庫
function sanitizedUpdate(userInput) {
    const clean = DOMPurify.sanitize(userInput);
    document.getElementById('output').innerHTML = clean;
}
