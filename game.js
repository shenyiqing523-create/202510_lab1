// 儲存紀錄到 Cookie（預設保存 1 年）
function saveRecordToCookie(record, days = 365) {
	try {
		const json = encodeURIComponent(JSON.stringify(record));
		document.cookie = `gameRecord=${json};max-age=${days*24*60*60};path=/`;
	} catch (e) {
		console.error('saveRecordToCookie error', e);
	}
}

// 從 Cookie 讀取紀錄
function loadRecordFromCookie() {
	const m = document.cookie.match('(?:^|; )gameRecord=([^;]*)');
	if (!m) return null;
	try {
		return JSON.parse(decodeURIComponent(m[1]));
	} catch (e) {
		console.error('loadRecordFromCookie parse error', e);
		return null;
	}
}

// 刪除紀錄 Cookie
function clearRecordCookie() {
	document.cookie = 'gameRecord=;max-age=0;path=/';
}

// 在頁面載入時還原紀錄
window.addEventListener('load', () => {
	const saved = loadRecordFromCookie();
	if (saved) {
		gameRecord = saved;
		if (typeof updateRecordDisplay === 'function') updateRecordDisplay();
	}
});

// 修改更新紀錄的函式
function updateRecord(result) {
    // ...existing code...
    saveRecordToCookie(gameRecord); // 儲存更新後的紀錄
    updateRecordDisplay();
}