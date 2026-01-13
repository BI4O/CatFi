// --- State Management ---
let appState = {
    currentTab: 'home',
    onboardingStep: 1,
    catName: '小橘',
    pocketMoney: 45,
    vaultMoney: 800,
    bankMoney: 500,
    totalCat: 100, // Daily allowance
    isFirstOpen: true
};

// --- Navigation & Core UI ---
function navTo(tab) {
    appState.currentTab = tab;

    // Update Header
    const titles = {
        news: '新闻训练',
        home: '猫窝',
        vault: '我的资产',
        chat: '小橘',
        personality: '性格详情'
    };
    document.getElementById('header-title').innerText = titles[tab] || 'CatFi';

    // Update Nav bar
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.onclick.toString().includes(tab)) item.classList.add('active');
    });

    // Update Screens
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen-${tab}`).classList.add('active');
}

// Onboarding Logic
function nextOnboarding(step) {
    document.getElementById(`onboarding-step${step - 1}`).style.display = 'none';
    const next = document.getElementById(`onboarding-step${step}`);
    next.style.display = 'flex';
    next.classList.add('fade-in');
}

function finishOnboarding() {
    document.getElementById('onboarding-step3').style.display = 'none';
    navTo('home');
}

// Clock Update
function updateClock() {
    const now = new Date();
    document.getElementById('clock-display').innerText =
        `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}
setInterval(updateClock, 1000);
updateClock();

// --- News Swipe Logic (Premium Implement) ---
let touchData = { startX: 0, startY: 0, currentX: 0, card: null };

function initNewsDeck() {
    const deck = document.getElementById('news-deck');
    const newsFeed = [
        { title: "Solana 推出全新开发者代币激励计划", coin: "SOL", source: "BlockBeats" },
        { title: "美联储维持利率不变，比特币维持高位震荡", coin: "BTC", source: "CoinDesk" },
        { title: "某 DeFi 协议被曝存在关键漏洞，请注意风险", coin: "SCAM", source: "AuditLab" },
        { title: "以太坊坎昆升级正式上线，L2 手续费大幅下降", coin: "ETH", source: "The Block" }
    ];

    newsFeed.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'news-item';
        card.style.zIndex = newsFeed.length - idx;
        card.innerHTML = `
            <h3>"${item.title}"</h3>
            <div class="meta">
                <span class="coin-tag">${item.coin}</span>
                <span>${item.source} · 15m前</span>
            </div>
        `;

        card.addEventListener('mousedown', dragStart);
        card.addEventListener('touchstart', dragStart, { passive: false });
        deck.appendChild(card);
    });
}

function dragStart(e) {
    touchData.card = e.currentTarget;
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    touchData.startX = clientX;

    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchmove', dragMove, { passive: false });
    document.addEventListener('touchend', dragEnd);
}

function dragMove(e) {
    if (!touchData.card) return;
    if (e.type.includes('touch')) e.preventDefault();

    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const diffX = clientX - touchData.startX;
    const rotate = diffX / 15;

    touchData.card.style.transform = `translateX(${diffX}px) rotate(${rotate}deg)`;

    // Labels
    const likeLabel = document.querySelector('.swipe-label.like');
    const unlikeLabel = document.querySelector('.swipe-label.dislike');

    if (diffX > 40) {
        likeLabel.style.opacity = Math.min(diffX / 100, 1);
        unlikeLabel.style.opacity = 0;
    } else if (diffX < -40) {
        unlikeLabel.style.opacity = Math.min(Math.abs(diffX) / 100, 1);
        likeLabel.style.opacity = 0;
    } else {
        likeLabel.style.opacity = 0;
        unlikeLabel.style.opacity = 0;
    }
}

function dragEnd(e) {
    if (!touchData.card) return;
    const clientX = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
    const diffX = clientX - touchData.startX;

    const likeLabel = document.querySelector('.swipe-label.like');
    const unlikeLabel = document.querySelector('.swipe-label.dislike');
    likeLabel.style.opacity = 0;
    unlikeLabel.style.opacity = 0;

    if (Math.abs(diffX) > 120) {
        const outX = diffX > 0 ? 1000 : -1000;
        touchData.card.style.transition = 'all 0.4s ease-out';
        touchData.card.style.transform = `translateX(${outX}px) rotate(${diffX / 10}deg)`;
        setTimeout(() => touchData.card.remove(), 400);
    } else {
        touchData.card.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        touchData.card.style.transform = '';
    }

    touchData.card = null;
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
    document.removeEventListener('touchmove', dragMove);
    document.removeEventListener('touchend', dragEnd);
}

// --- Check-in & Allocation System ---
document.getElementById('btn-checkin-main').addEventListener('click', showAllocation);

function showAllocation() {
    const modal = document.getElementById('modal-global');
    const container = document.getElementById('modal-container');

    container.innerHTML = `
        <div style="text-align:center; margin-bottom:24px;">
            <div style="font-size:48px; margin-bottom:12px;">🎁</div>
            <h2 style="font-weight:800; font-size:22px;">领取成功！</h2>
            <p style="color:var(--text-sec); font-size:14px;">今日获得 100 CAT 代币</p>
        </div>
        <div style="background:#F9F9F9; padding:20px; border-radius:24px; margin-bottom:24px;">
            <p style="font-size:13px; font-weight:700; margin-bottom:16px;">怎么分配？</p>
            <div class="alloc-item" style="margin-bottom:16px;">
                <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; margin-bottom:8px;">
                    <span>🐱 零花钱</span> <span id="val1">30</span>
                </div>
                <input type="range" min="0" max="100" value="30" class="slider-p" oninput="updateAllocVal(1, this.value)">
            </div>
            <div class="alloc-item" style="margin-bottom:16px;">
                <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; margin-bottom:8px;">
                    <span>🔒 金库</span> <span id="val2">50</span>
                </div>
                <input type="range" min="0" max="100" value="50" class="slider-p" oninput="updateAllocVal(2, this.value)">
            </div>
            <div class="alloc-item">
                <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; margin-bottom:8px;">
                    <span>🏦 银行</span> <span id="val3">20</span>
                </div>
                <input type="range" min="0" max="100" value="20" class="slider-p" oninput="updateAllocVal(3, this.value)">
            </div>
        </div>
        <button class="btn-pill" onclick="closeModal()">确认分配</button>
    `;
    modal.style.display = 'flex';
}

function updateAllocVal(id, val) {
    document.getElementById(`val${id}`).innerText = val;
}

function closeModal() {
    document.getElementById('modal-global').style.display = 'none';
    const btn = document.getElementById('btn-checkin-main');
    btn.innerText = '✓ 今日已签到';
    btn.style.background = '#EFEFEF';
    btn.style.color = '#B2BEC3';
    btn.style.boxShadow = 'none';
    btn.disabled = true;
}

// Slider Styling Injection
const sliderStyle = document.createElement('style');
sliderStyle.innerHTML = `
    .slider-p { -webkit-appearance: none; width: 100%; height: 6px; background: #E2E2E2; border-radius: 3px; outline: none; }
    .slider-p::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; background: var(--primary); border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.1); cursor: pointer; }
`;
document.head.appendChild(sliderStyle);

// --- Chat System ---
function initChatSystem() {
    const stream = document.getElementById('chat-stream');
    const input = document.getElementById('chat-input');
    const btn = document.getElementById('send-trigger');

    const history = [
        { role: 'cat', text: "哈喽主人！今天又是充满活力的一天喵～" },
        { role: 'user', text: "今天有什么投资建议吗？" },
        { role: 'cat', text: "我刚刚看了 Solana 的新闻，感觉得关注一下喔！📈" }
    ];

    function appendMsg(role, text) {
        const node = document.createElement('div');
        node.className = `message-node ${role}`;
        node.innerHTML = `
            ${role === 'cat' ? '<div class="cat-msg-avatar"></div>' : ''}
            <div class="bubble">${text}</div>
        `;
        stream.appendChild(node);
        stream.scrollTop = stream.scrollHeight;
    }

    history.forEach(m => appendMsg(m.role, m.text));

    btn.onclick = () => {
        if (!input.value.trim()) return;
        const txt = input.value;
        appendMsg('user', txt);
        input.value = '';

        setTimeout(() => {
            if (txt.toLowerCase().includes('lp')) {
                appendMsg('cat', "LP (Liquidity Provider)？我知道！就是给市场提供流动性喵，像开个小超市一样赚手续费！✨");
            } else {
                appendMsg('cat', "喵，好的！我记在本本上了～ 📝");
            }
        }, 1000);
    };

    input.onkeypress = (e) => { if (e.key === 'Enter') btn.onclick(); };
}

// --- Simulated Farming Logic ---
let yieldVal = 0.42;
function simulateYield() {
    if (appState.currentTab === 'vault') {
        yieldVal += 0.001;
        const display = document.getElementById('farm-yield-val');
        if (display) display.innerText = `${yieldVal.toFixed(4)} CAT`;
    }
}
setInterval(simulateYield, 1000);

function harvestFarm() {
    alert(`🎉 成功收割 ${yieldVal.toFixed(2)} CAT！已存入金库。`);
    yieldVal = 0;
    const display = document.getElementById('farm-yield-val');
    if (display) display.innerText = `0.0000 CAT`;
}

// --- Init All ---
document.addEventListener('DOMContentLoaded', () => {
    initNewsDeck();
    initChatSystem();
});
