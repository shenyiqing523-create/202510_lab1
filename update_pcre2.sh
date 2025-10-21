#!/bin/bash

echo "正在更新 PCRE2 套件以修復 CVE-2025-58050 漏洞..."

# 更新套件清單
apt update

# 更新 PCRE2 套件
apt install --only-upgrade pcre2

# 驗證版本
INSTALLED_VERSION=$(dpkg -l | grep pcre2 | awk '{print $3}')
REQUIRED_VERSION="10.46-r0"

if dpkg --compare-versions "$INSTALLED_VERSION" ge "$REQUIRED_VERSION"; then
    echo "PCRE2 已成功更新至 $INSTALLED_VERSION"
else
    echo "警告：PCRE2 版本 ($INSTALLED_VERSION) 仍低於要求版本 ($REQUIRED_VERSION)"
    exit 1
fi
