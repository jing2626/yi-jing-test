// 原有的數據字典保持不變
const guaDict = {
  "111111": "乾",
  "011111": "姤",
  "001111": "遯",
  "000111": "否",
  "000011": "觀",
  "000001": "剝",
  "000101": "晉",
  "111101": "大有",
  "110110": "兌",
  "010110": "困",
  "000110": "萃",
  "001110": "咸",
  "001010": "蹇",
  "001000": "謙",
  "001100": "小過",
  "110100": "歸妹",
  "101101": "離",
  "001101": "旅",
  "011101": "鼎",
  "010101": "未濟",
  "010001": "蒙",
  "010011": "渙",
  "010111": "訟",
  "101111": "同人",
  "100100": "震",
  "000100": "豫",
  "010100": "解",
  "011100": "恒",
  "011000": "升",
  "011010": "井",
  "011110": "大過",
  "100110": "隨",
  "011011": "巽",
  "111011": "小畜",
  "101011": "家人",
  "100011": "益",
  "100111": "无妄",
  "100101": "噬嗑",
  "100001": "頤",
  "011001": "蠱",
  "010010": "習坎",
  "110010": "節",
  "100010": "屯",
  "101010": "既濟",
  "101110": "革",
  "101100": "豐",
  "101000": "夷",
  "010000": "師",
  "001001": "艮",
  "101001": "賁",
  "111001": "大畜",
  "110001": "損",
  "110101": "睽",
  "110111": "履",
  "110011": "中孚",
  "001011": "漸",
  "000000": "坤",
  "100000": "復",
  "110000": "臨",
  "111000": "泰",
  "111100": "大壯",
  "111110": "夬",
  "111010": "需",
  "000010": "比"
};

const shiYingDict = {
  "111111": ["世", "", "", "應", "", ""],
  "011111": ["", "", "應", "", "", "世"],
  "001111": ["", "應", "", "", "世", ""],
  "000111": ["應", "", "", "世", "", ""],
  "000011": ["", "", "世", "", "", "應"],
  "000001": ["", "世", "", "", "應", ""],
  "000101": ["", "", "世", "", "", "應"],
  "111101": ["應", "", "", "世", "", ""],
  "110110": ["世", "", "", "應", "", ""],
  "010110": ["", "", "應", "", "", "世"],
  "000110": ["", "應", "", "", "世", ""],
  "001110": ["應", "", "", "世", "", ""],
  "001010": ["", "", "世", "", "", "應"],
  "001000": ["", "世", "", "", "應", ""],
  "001100": ["", "", "世", "", "", "應"],
  "110100": ["應", "", "", "世", "", ""],
  "101101": ["世", "", "", "應", "", ""],
  "001101": ["", "", "應", "", "", "世"],
  "011101": ["", "應", "", "", "世", ""],
  "010101": ["應", "", "", "世", "", ""],
  "010001": ["", "", "世", "", "", "應"],
  "010011": ["", "世", "", "", "應", ""],
  "010111": ["", "", "世", "", "", "應"],
  "101111": ["應", "", "", "世", "", ""],
  "100100": ["世", "", "", "應", "", ""],
  "000100": ["", "", "應", "", "", "世"],
  "010100": ["", "應", "", "", "世", ""],
  "011100": ["應", "", "", "世", "", ""],
  "011000": ["", "", "世", "", "", "應"],
  "011010": ["", "世", "", "", "應", ""],
  "011110": ["", "", "世", "", "", "應"],
  "100110": ["應", "", "", "世", "", ""],
  "011011": ["世", "", "", "應", "", ""],
  "111011": ["", "", "應", "", "", "世"],
  "101011": ["", "應", "", "", "世", ""],
  "100011": ["應", "", "", "世", "", ""],
  "100111": ["", "", "世", "", "", "應"],
  "100101": ["", "世", "", "", "應", ""],
  "100001": ["", "", "世", "", "", "應"],
  "011001": ["應", "", "", "世", "", ""],
  "010010": ["世", "", "", "應", "", ""],
  "110010": ["", "", "應", "", "", "世"],
  "100010": ["", "應", "", "", "世", ""],
  "101010": ["應", "", "", "世", "", ""],
  "101110": ["", "", "世", "", "", "應"],
  "101100": ["", "世", "", "", "應", ""],
  "101000": ["", "", "世", "", "", "應"],
  "010000": ["應", "", "", "世", "", ""],
  "001001": ["世", "", "", "應", "", ""],
  "101001": ["", "", "應", "", "", "世"],
  "111001": ["", "應", "", "", "世", ""],
  "110001": ["應", "", "", "世", "", ""],
  "110101": ["", "", "世", "", "", "應"],
  "110111": ["", "世", "", "", "應", ""],
  "110011": ["", "", "世", "", "", "應"],
  "001011": ["應", "", "", "世", "", ""],
  "000000": ["世", "", "", "應", "", ""],
  "100000": ["", "", "應", "", "", "世"],
  "110000": ["", "應", "", "", "世", ""],
  "111000": ["應", "", "", "世", "", ""],
  "111100": ["", "", "世", "", "", "應"],
  "111110": ["", "世", "", "", "應", ""],
  "111010": ["", "", "世", "", "", "應"],
  "000010": ["應", "", "", "世", "", ""]
};

const ganToLiuShenSeq = {
  "甲乙": ["玄武", "白虎", "騰蛇", "勾陳", "朱雀", "青龍"],
  "丙丁": ["青龍", "玄武", "白虎", "騰蛇", "勾陳", "朱雀"],
  "戊": ["朱雀", "青龍", "玄武", "白虎", "騰蛇", "勾陳"],
  "己": ["勾陳", "朱雀", "青龍", "玄武", "白虎", "騰蛇"],
  "庚辛": ["騰蛇", "勾陳", "朱雀", "青龍", "玄武", "白虎"],
  "壬癸": ["白虎", "騰蛇", "勾陳", "朱雀", "青龍", "玄武"]
};

const upperGuaZhi = {
  "000": ["酉金", "亥水", "丑土"],
  "001": ["寅木", "子水", "戌土"],
  "010": ["子水", "戌土", "申金"],
  "011": ["卯木", "巳火", "未土"],
  "100": ["戌土", "申金", "午火"],
  "101": ["巳火", "未土", "酉金"],
  "110": ["未土", "酉金", "亥水"],
  "111": ["戌土", "申金", "午火"]
};

const lowerGuaZhi = {
  "000": ["卯木", "巳火", "未土"],
  "001": ["申金", "午火", "辰土"],
  "010": ["午火", "辰土", "寅木"],
  "011": ["酉金", "亥水", "丑土"],
  "100": ["辰土", "寅木", "子水"],
  "101": ["亥水", "丑土", "卯木"],
  "110": ["丑土", "卯木", "巳火"],
  "111": ["辰土", "寅木", "子水"]
};

const liuShouDict = {
  "111111": ["父母", "兄弟", "官鬼", "父母", "妻財", "子孫"],
  "011111": ["父母", "兄弟", "官鬼", "兄弟", "子孫", "父母"],
  "001111": ["父母", "兄弟", "官鬼", "兄弟", "官鬼", "父母"],
  "000111": ["父母", "兄弟", "官鬼", "妻財", "官鬼", "父母"],
  "000011": ["妻財", "官鬼", "父母", "妻財", "官鬼", "父母"],
  "000001": ["妻財", "子孫", "父母", "妻財", "官鬼", "父母"],
  "000101": ["官鬼", "父母", "兄弟", "妻財", "官鬼", "父母"],
  "111101": ["官鬼", "父母", "兄弟", "父母", "妻財", "子孫"],
  "110110": ["父母", "兄弟", "子孫", "父母", "妻財", "官鬼"],
  "010110": ["父母", "兄弟", "子孫", "官鬼", "父母", "妻財"],
  "000110": ["父母", "兄弟", "子孫", "妻財", "官鬼", "父母"],
  "001110": ["父母", "兄弟", "子孫", "兄弟", "官鬼", "父母"],
  "001010": ["子孫", "父母", "兄弟", "兄弟", "官鬼", "父母"],
  "001000": ["兄弟", "子孫", "父母", "兄弟", "官鬼", "父母"],
  "001100": ["父母", "兄弟", "官鬼", "兄弟", "官鬼", "父母"],
  "110100": ["父母", "兄弟", "官鬼", "父母", "妻財", "官鬼"],
  "101101": ["兄弟", "子孫", "妻財", "官鬼", "子孫", "父母"],
  "001101": ["兄弟", "子孫", "妻財", "妻財", "兄弟", "子孫"],
  "011101": ["兄弟", "子孫", "妻財", "妻財", "官鬼", "子孫"],
  "010101": ["兄弟", "子孫", "妻財", "兄弟", "子孫", "父母"],
  "010001": ["父母", "官鬼", "子孫", "兄弟", "子孫", "父母"],
  "010011": ["父母", "兄弟", "子孫", "兄弟", "子孫", "父母"],
  "010111": ["子孫", "妻財", "兄弟", "兄弟", "子孫", "父母"],
  "101111": ["子孫", "妻財", "兄弟", "官鬼", "子孫", "父母"],
  "100100": ["妻財", "官鬼", "子孫", "妻財", "兄弟", "父母"],
  "000100": ["妻財", "官鬼", "子孫", "兄弟", "子孫", "妻財"],
  "010100": ["妻財", "官鬼", "子孫", "子孫", "妻財", "兄弟"],
  "011100": ["妻財", "官鬼", "子孫", "官鬼", "父母", "妻財"],
  "011000": ["官鬼", "父母", "妻財", "官鬼", "父母", "妻財"],
  "011010": ["父母", "妻財", "官鬼", "官鬼", "父母", "妻財"],
  "011110": ["妻財", "官鬼", "父母", "官鬼", "父母", "妻財"],
  "100110": ["妻財", "官鬼", "父母", "妻財", "兄弟", "父母"],
  "011011": ["兄弟", "子孫", "妻財", "官鬼", "父母", "妻財"],
  "111011": ["兄弟", "子孫", "妻財", "妻財", "兄弟", "父母"],
  "101011": ["兄弟", "子孫", "妻財", "父母", "妻財", "兄弟"],
  "100011": ["兄弟", "子孫", "妻財", "妻財", "兄弟", "父母"],
  "100111": ["妻財", "官鬼", "子孫", "妻財", "兄弟", "父母"],
  "100101": ["子孫", "妻財", "官鬼", "妻財", "兄弟", "父母"],
  "100001": ["兄弟", "父母", "妻財", "妻財", "兄弟", "父母"],
  "011001": ["兄弟", "父母", "妻財", "官鬼", "父母", "妻財"],
  "010010": ["兄弟", "官鬼", "父母", "妻財", "官鬼", "子孫"],
  "110010": ["兄弟", "官鬼", "父母", "官鬼", "子孫", "妻財"],
  "100010": ["兄弟", "官鬼", "父母", "官鬼", "子孫", "兄弟"],
  "101010": ["兄弟", "官鬼", "父母", "兄弟", "官鬼", "子孫"],
  "101110": ["官鬼", "父母", "兄弟", "兄弟", "官鬼", "子孫"],
  "101100": ["官鬼", "父母", "妻財", "兄弟", "官鬼", "子孫"],
  "101000": ["父母", "兄弟", "官鬼", "兄弟", "官鬼", "子孫"],
  "010000": ["父母", "兄弟", "官鬼", "妻財", "官鬼", "子孫"],
  "001001": ["官鬼", "妻財", "兄弟", "子孫", "父母", "兄弟"],
  "101001": ["官鬼", "妻財", "兄弟", "妻財", "兄弟", "官鬼"],
  "111001": ["官鬼", "妻財", "兄弟", "兄弟", "官鬼", "妻財"],
  "110001": ["官鬼", "妻財", "兄弟", "兄弟", "官鬼", "父母"],
  "110101": ["父母", "兄弟", "子孫", "兄弟", "官鬼", "父母"],
  "110111": ["兄弟", "子孫", "父母", "兄弟", "官鬼", "父母"],
  "110011": ["官鬼", "父母", "兄弟", "兄弟", "官鬼", "父母"],
  "001011": ["官鬼", "父母", "兄弟", "子孫", "父母", "兄弟"],
  "000000": ["子孫", "妻財", "兄弟", "官鬼", "父母", "兄弟"],
  "100000": ["子孫", "妻財", "兄弟", "兄弟", "官鬼", "妻財"],
  "110000": ["子孫", "妻財", "兄弟", "兄弟", "官鬼", "父母"],
  "111000": ["子孫", "妻財", "兄弟", "兄弟", "官鬼", "妻財"],
  "111100": ["兄弟", "子孫", "父母", "兄弟", "官鬼", "妻財"],
  "111110": ["兄弟", "子孫", "妻財", "兄弟", "官鬼", "妻財"],
  "111010": ["妻財", "兄弟", "子孫", "兄弟", "官鬼", "妻財"],
  "000010": ["妻財", "兄弟", "子孫", "官鬼", "父母", "兄弟"]
};

const changedLiuShouDict = {
  "111111": ["父母", "父母", "父母", "父母", "父母", "父母"],
  "011111": ["父母", "父母", "父母", "官鬼", "官鬼", "子孫"],
  "001111": ["父母", "父母", "父母", "妻財", "子孫", "妻財"],
  "000111": ["父母", "父母", "父母", "兄弟", "父母", "子孫"],
  "000011": ["子孫", "子孫", "官鬼", "兄弟", "父母", "子孫"],
  "000001": ["兄弟", "官鬼", "兄弟", "兄弟", "父母", "子孫"],
  "000101": ["父母", "兄弟", "父母", "兄弟", "父母", "子孫"],
  "111101": ["父母", "兄弟", "父母", "父母", "父母", "父母"],
  "110110": ["父母", "兄弟", "兄弟", "父母", "妻財", "妻財"],
  "010110": ["父母", "兄弟", "兄弟", "兄弟", "官鬼", "官鬼"],
  "000110": ["父母", "兄弟", "兄弟", "兄弟", "父母", "子孫"],
  "001110": ["父母", "兄弟", "兄弟", "妻財", "子孫", "妻財"],
  "001010": ["妻財", "子孫", "子孫", "妻財", "子孫", "妻財"],
  "001000": ["妻財", "父母", "官鬼", "妻財", "子孫", "妻財"],
  "001100": ["官鬼", "兄弟", "父母", "妻財", "子孫", "妻財"],
  "110100": ["官鬼", "兄弟", "父母", "父母", "妻財", "妻財"],
  "101101": ["子孫", "妻財", "子孫", "子孫", "父母", "子孫"],
  "001101": ["子孫", "妻財", "子孫", "父母", "官鬼", "父母"],
  "011101": ["子孫", "妻財", "子孫", "兄弟", "兄弟", "官鬼"],
  "010101": ["子孫", "妻財", "子孫", "妻財", "兄弟", "兄弟"],
  "010001": ["妻財", "兄弟", "妻財", "妻財", "兄弟", "兄弟"],
  "010011": ["官鬼", "官鬼", "兄弟", "妻財", "兄弟", "兄弟"],
  "010111": ["子孫", "子孫", "子孫", "妻財", "兄弟", "兄弟"],
  "101111": ["子孫", "子孫", "子孫", "子孫", "父母", "子孫"],
  "100100": ["子孫", "官鬼", "妻財", "父母", "兄弟", "妻財"],
  "000100": ["子孫", "官鬼", "妻財", "官鬼", "妻財", "父母"],
  "010100": ["子孫", "官鬼", "妻財", "官鬼", "子孫", "子孫"],
  "011100": ["子孫", "官鬼", "妻財", "子孫", "子孫", "父母"],
  "011000": ["兄弟", "妻財", "子孫", "子孫", "子孫", "父母"],
  "011010": ["兄弟", "父母", "父母", "子孫", "子孫", "父母"],
  "011110": ["妻財", "官鬼", "官鬼", "子孫", "子孫", "父母"],
  "100110": ["妻財", "官鬼", "官鬼", "父母", "兄弟", "妻財"],
  "011011": ["父母", "父母", "子孫", "子孫", "子孫", "父母"],
  "111011": ["父母", "父母", "子孫", "妻財", "妻財", "妻財"],
  "101011": ["父母", "父母", "子孫", "妻財", "兄弟", "妻財"],
  "100011": ["父母", "父母", "子孫", "父母", "兄弟", "妻財"],
  "100111": ["妻財", "妻財", "妻財", "父母", "兄弟", "妻財"],
  "100101": ["妻財", "官鬼", "妻財", "父母", "兄弟", "妻財"],
  "100001": ["官鬼", "子孫", "官鬼", "父母", "兄弟", "妻財"],
  "011001": ["官鬼", "子孫", "官鬼", "子孫", "子孫", "父母"],
  "010010": ["子孫", "兄弟", "兄弟", "父母", "妻財", "妻財"],
  "110010": ["子孫", "兄弟", "兄弟", "官鬼", "子孫", "子孫"],
  "100010": ["子孫", "兄弟", "兄弟", "兄弟", "子孫", "官鬼"],
  "101010": ["子孫", "兄弟", "兄弟", "官鬼", "子孫", "官鬼"],
  "101110": ["官鬼", "父母", "父母", "官鬼", "子孫", "官鬼"],
  "101100": ["妻財", "父母", "官鬼", "官鬼", "子孫", "官鬼"],
  "101000": ["子孫", "官鬼", "妻財", "官鬼", "子孫", "官鬼"],
  "010000": ["子孫", "官鬼", "妻財", "父母", "妻財", "妻財"],
  "001001": ["子孫", "父母", "子孫", "官鬼", "妻財", "官鬼"],
  "101001": ["子孫", "父母", "子孫", "兄弟", "官鬼", "兄弟"],
  "111001": ["子孫", "父母", "子孫", "兄弟", "兄弟", "兄弟"],
  "110001": ["子孫", "父母", "子孫", "兄弟", "官鬼", "官鬼"],
  "110101": ["兄弟", "子孫", "兄弟", "兄弟", "官鬼", "官鬼"],
  "110111": ["兄弟", "兄弟", "兄弟", "兄弟", "官鬼", "官鬼"],
  "110011": ["妻財", "妻財", "父母", "兄弟", "官鬼", "官鬼"],
  "001011": ["妻財", "妻財", "父母", "官鬼", "妻財", "官鬼"],
  "000000": ["官鬼", "兄弟", "父母", "子孫", "兄弟", "妻財"],
  "100000": ["官鬼", "兄弟", "父母", "妻財", "官鬼", "兄弟"],
  "110000": ["官鬼", "兄弟", "父母", "兄弟", "官鬼", "官鬼"],
  "111000": ["官鬼", "兄弟", "父母", "兄弟", "兄弟", "兄弟"],
  "111100": ["父母", "子孫", "兄弟", "兄弟", "兄弟", "兄弟"],
  "111110": ["兄弟", "子孫", "子孫", "兄弟", "兄弟", "兄弟"],
  "111010": ["官鬼", "妻財", "妻財", "兄弟", "兄弟", "兄弟"],
  "000010": ["官鬼", "妻財", "妻財", "子孫", "兄弟", "妻財"]
};

function getChangedGua(code, dongYao) {
  if (dongYao < 1 || dongYao > 6) return code;
  const bits = code.split("");
  const index = dongYao - 1;
  bits[index] = bits[index] === "1" ? "0" : "1";
  return bits.join("");
}

// 輸入驗證函數
function validateInput() {
  const code = document.getElementById("guaCode").value;
  const dong = document.getElementById("dongYao").value;
  
  if (!code || code.length !== 6) {
    showError("請輸入6位數字的卦象六碼");
    return false;
  }
  
  if (!/^[01]+$/.test(code)) {
    showError("卦象六碼只能包含0和1");
    return false;
  }
  
  if (!dong || dong < 1 || dong > 6) {
    showError("請選擇動爻位置（1-6）");
    return false;
  }
  
  return true;
}

// 錯誤提示函數
function showError(message) {
  // 創建錯誤提示元素
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  errorDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ff4757;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(255, 71, 87, 0.3);
    z-index: 1001;
    animation: slideInRight 0.3s ease-out;
  `;
  
  document.body.appendChild(errorDiv);
  
  // 3秒後自動移除
  setTimeout(() => {
    errorDiv.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.parentNode.removeChild(errorDiv);
      }
    }, 300);
  }, 3000);
}

// 顯示載入動畫
function showLoading() {
  const overlay = document.getElementById('loadingOverlay');
  overlay.style.display = 'flex';
  overlay.style.animation = 'fadeIn 0.3s ease-out';
}

// 隱藏載入動畫
function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  overlay.style.animation = 'fadeOut 0.3s ease-out';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300);
}

// 主要計算函數
function calculate() {
  // 驗證輸入
  if (!validateInput()) {
    return;
  }
  
  // 顯示載入動畫
  showLoading();
  
  // 模擬計算時間
  setTimeout(() => {
    performCalculation();
    hideLoading();
  }, 1500);
}

function performCalculation() {
  const code = document.getElementById("guaCode").value;
  const dong = parseInt(document.getElementById("dongYao").value);
  const gan = document.getElementById("ganSelect").value;
  
  const guaName = guaDict[code] || "未知卦象";
  const shiYing = shiYingDict[code] || ["", "", "", "", "", ""];
  const shouList = liuShouDict[code] || ["", "", "", "", "", ""];
  const liuShenSeq = ganToLiuShenSeq[gan] || ["", "", "", "", "", ""];

  // 更新卦象名稱
  const guaNameElement = document.getElementById("guaName");
  guaNameElement.textContent = `卦象名稱：${guaName}`;
  guaNameElement.classList.add('glow-effect');
  
  // 移除發光效果
  setTimeout(() => {
    guaNameElement.classList.remove('glow-effect');
  }, 2000);

  // 計算地支
  const upperCode = code.substring(6, 3);
  const lowerCode = code.substring(3, 0);
  const upperZhi = upperGuaZhi[upperCode] || ["", "", ""];
  const lowerZhi = lowerGuaZhi[lowerCode] || ["", "", ""];
  const fullZhi = [...upperZhi, ...lowerZhi];

  // 計算變卦
  const changedCode = getChangedGua(code, dong);
  const changedUpper = changedCode.substring(6, 3);
  const changedLower = changedCode.substring(3, 0);
  const changedUpperZhi = upperGuaZhi[changedUpper] || ["", "", ""];
  const changedLowerZhi = lowerGuaZhi[changedLower] || ["", "", ""];
  const changedFullZhi = [...changedUpperZhi, ...changedLowerZhi];
  const changedShouList = changedLiuShouDict[code] || ["", "", "", "", "", ""];

  // 生成卦象圖表
  generateGuaDiagram(code, dong, shiYing, liuShenSeq, fullZhi, shouList, changedFullZhi, changedShouList);
}

function generateGuaDiagram(code, dong, shiYing, liuShenSeq, fullZhi, shouList, changedFullZhi, changedShouList) {
  const lines = code.split("").reverse(); // 上爻在最上方
  let diagram = `
    <div class="gua-table-container">
      <table class="gua-table">
        <tbody>
  `;

  lines.forEach((bit, i) => {
    const isDong = (6 - i === dong);
    const yao = bit === "1" ? `<img src="yang_yao.png" alt="陽爻" class="yao-image">` : `<img src="yin_yao.png" alt="陰爻" class="yao-image">`;
    const dot = isDong ? "●" : "";
    const label = shiYing[i] || "";
    const liuShen = liuShenSeq[i];
    const zhi = fullZhi[i];
    const shou = shouList[i];
    const changedZhi = isDong ? changedFullZhi[i] : "";
    const changedShou = isDong ? changedShouList[i] : "";

    diagram += `
      <tr class="yao-row ${isDong ? 'dong-yao' : ''}" style="animation-delay: ${i * 0.1}s">
        <td class="changed-shou"><div class="v-text">${changedShou}</div></td>
        <td class="changed-zhi"><div class="v-text">${changedZhi}</div></td>
        <td class="shou"><div class="v-text">${shou}</div></td>
        <td class="zhi"><div class="v-text">${zhi}</div></td>
        <td class="yao-line"><div class="v-text">${yao}</div></td>
        <td class="dong-dot"><div class="v-text">${dot}</div></td>
        <td class="shi-ying"><div class="v-text">${label}</div></td>
        <td class="liu-shen"><div class="v-text">${liuShen}</div></td>
      </tr>
    `;
  });

  diagram += `
        </tbody>
      </table>
    </div>
  `;

  const diagramElement = document.getElementById("guaDiagram");
  diagramElement.innerHTML = diagram;
  diagramElement.classList.add('fade-in');
  
  // 為每一行添加動畫
  const rows = diagramElement.querySelectorAll('.yao-row');
  rows.forEach((row, index) => {
    row.style.opacity = '0';
    row.style.transform = 'translateX(-20px)';
    setTimeout(() => {
      row.style.transition = 'all 0.5s ease-out';
      row.style.opacity = '1';
      row.style.transform = 'translateX(0)';
    }, index * 100);
  });
}

// --- 新增功能：更新日期與自動選擇天干 ---
function updateDateAndGanZhi() {
  try {
    // 1. 獲取當前時間
    const now = new Date();
    
    // 2. 使用 Lunar 庫進行轉換 (如果庫載入失敗，會跳到 catch)
    const solar = Solar.fromDate(now);
    const lunar = Lunar.fromDate(now);
    
    // 3. 格式化國曆日期
    const solarStr = `${solar.getYear()}年 ${solar.getMonth()}月 ${solar.getDay()}日`;
    
    // 4. 格式化農曆干支 (例如：乙巳蛇 年 己丑月 乙酉日)
    const yearGZ = lunar.getYearInGanZhi();   // 乙巳
    const shengXiao = lunar.getYearShengXiao(); // 蛇
    const monthGZ = lunar.getMonthInGanZhi(); // 己丑
    const dayGZ = lunar.getDayInGanZhi();     // 乙酉
    
    const lunarStr = `
      <span class="date-ganzhi">${yearGZ}${shengXiao}</span> 年 
      <span class="date-ganzhi">${monthGZ}</span> 月 
      <span class="date-ganzhi">${dayGZ}</span> 日
    `;

    // 5. 更新介面文字
    document.getElementById('solarDate').textContent = solarStr;
    document.getElementById('lunarDate').innerHTML = lunarStr;

    // 6. --- 自動選擇對應的天干 ---
    // 獲取日干 (例如 "乙")
    const dayGan = lunar.getDayGan(); 
    const ganSelect = document.getElementById('ganSelect');
    
    // 根據日干映射到下拉選單的值
    let targetValue = "";
    if (["甲", "乙"].includes(dayGan)) targetValue = "甲乙";
    else if (["丙", "丁"].includes(dayGan)) targetValue = "丙丁";
    else if (dayGan === "戊") targetValue = "戊";
    else if (dayGan === "己") targetValue = "己";
    else if (["庚", "辛"].includes(dayGan)) targetValue = "庚辛";
    else if (["壬", "癸"].includes(dayGan)) targetValue = "壬癸";
    
    if (targetValue) {
      ganSelect.value = targetValue;
      // 可選：添加一個視覺提示，告訴使用者已自動選擇
      // ganSelect.style.backgroundColor = "#fff9f0"; 
    }

  } catch (e) {
    console.error("農民曆工具庫載入失敗或出錯", e);
    // 備用顯示：如果沒有網路載入庫，至少顯示國曆
    const now = new Date();
    document.getElementById('solarDate').textContent = 
      `${now.getFullYear()}年 ${now.getMonth() + 1}月 ${now.getDate()}日`;
    document.getElementById('lunarDate').textContent = "（無法載入農曆資訊，請檢查網路連線）";
  }
}

// 頁面載入完成後的初始化
document.addEventListener('DOMContentLoaded', function() {
  // 為輸入框添加即時驗證
  const guaCodeInput = document.getElementById('guaCode');
  guaCodeInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/[^01]/g, '');
    if (value.length > 6) {
      value = value.substring(0, 6);
    }
    e.target.value = value;
  });
  
  // 添加回車鍵觸發計算
  document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      calculate();
    }
  });
  
  // 加入這一行來初始化日期
  updateDateAndGanZhi();
  // 添加頁面載入動畫
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.8s ease-out';
    document.body.style.opacity = '1';
  }, 100);
});
