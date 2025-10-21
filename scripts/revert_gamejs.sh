#!/usr/bin/env bash
set -euo pipefail

COMMIT="f8d3c153acee646ca82880542a30107fdd99a5ec"
TARGET_PATH="/workspaces/202510_lab1/game.js"

# 確保在 git repository 內
ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
if [ -z "$ROOT" ]; then
  echo "錯誤：請在 git 專案根目錄執行此腳本。"
  exit 1
fi

# 計算相對路徑（git checkout 接受相對路徑比較直觀）
REL_PATH="$(realpath --relative-to="$ROOT" "$TARGET_PATH")"

echo "Fetching all remotes..."
git fetch --all --quiet

# 檢查 commit 是否存在
if git cat-file -e "${COMMIT}^{commit}" 2>/dev/null; then
  echo "找到 commit ${COMMIT}，開始還原 ${REL_PATH} ..."
  git checkout "${COMMIT}" -- "${REL_PATH}"
  echo "已將 ${REL_PATH} 還原至 ${COMMIT} 的內容（僅還原工作樹）。"
  echo
  echo "請檢查差異："
  echo "  git diff -- ${REL_PATH}"
  echo
  echo "若滿意，請手動執行："
  echo "  git add ${REL_PATH}"
  echo "  git commit -m \"Revert ${REL_PATH} to ${COMMIT}\""
  echo "並視需要執行： git push origin <your-branch>"
  exit 0
else
  echo "錯誤：找不到 commit ${COMMIT}。請確認 SHA 或執行 git fetch 後再試。"
  exit 2
fi
