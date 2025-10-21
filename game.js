// 說明：若要回復到 commit f8d3c153acee646ca82880542a30107fdd99a5ec 的版本，請在專案根目錄執行提供的腳本：
// ./scripts/revert_gamejs.sh
//
// 或手動執行：
// git fetch --all
// git checkout f8d3c153acee646ca82880542a30107fdd99a5ec -- /workspaces/202510_lab1/game.js
// git status --porcelain -- /workspaces/202510_lab1/game.js
// git diff -- /workspaces/202510_lab1/game.js   # 檢查差異
// git add /workspaces/202510_lab1/game.js
// git commit -m "Revert game.js to f8d3c153"
// git push origin <your-branch>   # 如需推到遠端請替換分支名稱
//
// 如果你希望我把還原後的檔案內容直接貼在這裡，請允許我讀取該 commit 的內容或把該 commit 的檔案貼上來。

// 新增：使用全域預設延遲（毫秒），可根據需求調整
const DEFAULT_MOVE_DELAY_MS = 0; // 將 prompt 移除後的預設值（0 表示無延遲）

// 原本程式可能在此處使用 prompt 讀取延遲並將其套用於下一步
// 例如： const input = prompt('輸入延遲時間（毫秒）', '0'); const delay = parseInt(input,10) || 0;
// 改為使用預設值，不再顯示對話框：
{
	// ...existing code...
	// 取代原有 prompt 的邏輯
	const delay = DEFAULT_MOVE_DELAY_MS;
	// 使用 delay 進行後續等待或排程
	// e.g. setTimeout(nextMove, delay);
	// ...existing code...
}

// 如果專案有一個專門的取得延遲的函式，也請改為回傳預設值，範例如下：
/*
// ...existing code...
function getMoveDelayMs() {
	// 原本可能彈出 prompt，現在直接回傳預設
	return DEFAULT_MOVE_DELAY_MS;
}
// ...existing code...
*/

// ...existing code...