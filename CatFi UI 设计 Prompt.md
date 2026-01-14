# CatFi UI 设计 Prompt

## Master Prompt（整体设计指引）

```markdown
You are a senior mobile UI/UX designer. I need you to design a complete mobile app called "CatFi" - a gamified DeFi learning app where users raise a virtual AI cat that learns to invest based on the owner's guidance.

## App Overview

CatFi is a mobile app that makes learning DeFi feel like a game. Users adopt a virtual cat, feed it daily crypto news (swipe right to mark as trustworthy, left to mark as suspicious), and the cat uses its "pocket money" to make autonomous investment decisions based on what it learned. It's a simulation/education tool with real market data but virtual currency.

## Design Style

**Overall Aesthetic:**
- Clean, minimal, flat design
- Friendly and approachable, not intimidating like traditional trading apps
- Soft, rounded corners on all elements
- Generous white space
- Subtle shadows for depth (not harsh drop shadows)
- Modern and playful, but not childish

**Color Palette:**
- Primary: Warm orange (#FF8C42) - represents the orange cat, energy, optimism
- Secondary: Soft teal (#4ECDC4) - trust, stability, growth
- Success: Mint green (#7ED4AD)
- Warning: Soft coral (#FF6B6B)
- Background: Off-white (#FAFAFA)
- Card background: Pure white (#FFFFFF)
- Text primary: Dark gray (#2D3436)
- Text secondary: Medium gray (#636E72)
- Text muted: Light gray (#B2BEC3)

**Typography:**
- Headlines: Bold, rounded sans-serif (like Nunito, Poppins, or SF Pro Rounded)
- Body: Regular weight, same font family
- Numbers/Money: Medium weight, slightly larger for emphasis
- Chinese characters should use a friendly rounded font (like 思源黑体 Rounded or 苹方)

**Iconography:**
- Line icons with rounded caps
- 2px stroke weight
- Consistent 24x24 grid
- Filled versions for selected/active states

**Components:**
- Buttons: Fully rounded (pill shape), primary buttons are solid orange, secondary are outlined
- Cards: 16px corner radius, subtle shadow (0 2px 8px rgba(0,0,0,0.08))
- Input fields: Rounded, light gray border, focus state with orange border
- Progress bars: Rounded, gradient fill from orange to teal
- Tags/Chips: Small rounded pills with light background tint

**Spacing System:**
- Base unit: 4px
- Common spacing: 8px, 12px, 16px, 24px, 32px
- Card padding: 16px
- Screen edge padding: 20px

**The Cat Character:**
- Simple, flat illustration style
- Orange tabby cat as the default
- Large expressive eyes
- Minimal details, easily recognizable at small sizes
- Different expressions and outfits based on state:
  - Default: Neutral, cute expression
  - Happy/Winning: Sunglasses, suit, confident smirk
  - Sad/Losing: Messy fur, sad eyes, cardboard box
  - Excited: Sparkle eyes, perked ears
  - Thinking: Paw on chin, tilted head

## Screen Specifications

Design for iPhone 14 Pro dimensions (393 x 852 px) as the primary canvas.

All screens should include:
- Status bar (time, signal, battery)
- Bottom navigation bar with 4 tabs: News (📰), Cat Home (🐱), Vault (💰), Chat (💬)
- Safe area considerations
```

---

## Page 1: Daily Report Popup（每日弹窗）

```markdown
## Page: Daily Report Popup

**Context:** This popup appears when users first open the app each day. It shows what the cat did with its pocket money yesterday.

**Layout:**
- Modal overlay with semi-transparent dark background
- Centered card with rounded corners (20px radius)
- Card width: ~90% of screen width
- Scrollable content if needed

**Content Structure (top to bottom):**

1. **Close button** (X) - top right corner of card

2. **Header Section:**
   - Cat emoji with speech bubble icon (🐱💬)
   - Title: "小橘的日报" (Cat's Daily Report)
   - Subtitle showing the date

3. **Summary Line:**
   - "昨日零花钱：50 CAT"
   - Thin divider line below

4. **Activity Cards:**
   Each activity is a small card showing:
   - News icon (📰) 
   - News headline in quotes
   - Arrow (→) followed by action taken
   - Result indicator (📈 green for profit, 📉 red for loss, or "错过" for missed opportunity)
   
   Example:📰 看到「BTC突破7万美元」花了 30 CAT 买入 0.0004 BTC 当前 +3.2% 📈

5. **Bottom Summary:**
- 💰 剩余零花钱: XX CAT
- 📊 昨日操作盈亏: +$X.XX (green) or -$X.XX (red)

6. **CTA Button:**
- Full-width rounded button
- Text: "知道了"
- Primary orange color

**Visual Notes:**
- Use subtle background colors to differentiate profit (light green tint) vs loss (light red tint) activities
- The cat emoji at top could be animated (subtle bounce)
- Numbers should be prominent
- Green for profits, red for losses, orange for neutral

**Figma/Design Deliverable:**
- Default state with mixed results (some wins, some losses)
- State with all profits (cat looking smug)
- State with all losses (cat looking sad)

```

---

## Page 2: News Feed（新闻页）

```mark
## Page: News Feed (Main Tab 1)

**Context:** Users swipe through 20 daily crypto news cards, marking each as "trustworthy" (right swipe) or "suspicious" (left swipe) to train their cat's investment instincts.

**Layout:**
- Standard screen with top navigation and bottom tab bar
- Single card dominates the center of screen (Tinder-style)
- Progress indicator at top
- Instructional hint at bottom

**Top Section:**
- Left: Hamburger menu icon (≡)
- Center: "新闻" title
- Right: Settings gear icon
- Below: Progress bar showing "今日新闻 ████████░░ 16/20"

**News Card (Center):**
- Large card taking up ~60% of screen height
- Rounded corners (16px)
- Shadow for "floating" effect
- Content inside:
  - Headline text (large, bold, 2-3 lines max)
  - Source + timestamp at bottom (e.g., "CoinDesk · 2小时前")
  - Coin tags as small pills (e.g., [BTC] [ETH])
- Card should look slightly tilted when being swiped

**Swipe Feedback:**
When swiping RIGHT:
- Green overlay appears on left side of card
- Checkmark icon (✓) 
- Text: "关注"
- Small cat paw stamp animation
- Cat speech bubble: "记下了喵！"

When swiping LEFT:
- Red overlay appears on right side of card
- X icon (✗)
- Text: "存疑"
- Cat shaking head
- Cat speech bubble: "有点假喵..."

**Bottom Hint:**
- "← 左滑存疑    右滑关注 →"
- Subtle, gray text
- Could include small arrow animations

**Empty State (All 20 done):**
- Card area replaced with:
  - Cute cat illustration (happy, relaxed pose)
  - Cat text face: /ᐠ. ｡.ᐟ\ᵐᵉᵒʷˎˊ˗
  - Text: "今天的功课做完啦！"
  - Subtext: "小橘会好好消化这些信息的"
  - Smaller: "明天见，主人～"

**Figma/Design Deliverable:**
- Default state (card ready to swipe)
- Mid-swipe right state (showing green overlay)
- Mid-swipe left state (showing red overlay)
- Empty/completed state
```

---

## Page 3: Cat Home（猫窝页）

```markdown
## Page: Cat Home (Main Tab 2)

**Context:** The emotional center of the app. Shows the cat's current state, level, and daily check-in.

**Layout:**
- Full screen with gradient or subtle pattern background
- Cat illustration prominently centered
- Stats card below
- Check-in button at bottom

**Top Section:**
- Left: Hamburger menu (≡)
- Center: "猫窝"
- Right: Settings (⚙️)
- Greeting text below based on time: "☀️ 早上好" / "🌙 晚上好"

**Cat Display Area (Center, ~40% of screen):**
- Large cat illustration centered
- Cat changes based on 7-day P&L:
  
  **Winning Cat (profit >5%):**
  - Wearing tiny sunglasses and suit/tie
  - Confident pose
  - Maybe a small briefcase or money bag
  - Speech: "最近手感不错喵~"
  - Background could have subtle sparkles
  
  **Normal Cat (±5%):**
  - Cute neutral expression
  - Standard sitting pose
  - Speech: "稳扎稳打喵"
  
  **Losing Cat (loss >5%):**
  - Messy/ruffled fur
  - Sad droopy eyes
  - Sitting in/near a cardboard box
  - Speech: "喵......"
  - Background could have subtle rain/clouds

- Below cat: Name and level badge
  - 「小橘  Lv.7」
- Below that: Experience bar
  - ████████████░░░░ 320/500

**Stats Card:**
- Rounded card with cat's current status
- Grid of 4 items:💰 零花钱 45 CAT
😊 心情 开心 / 低落 / 自信
📊 风格 有点激进 / 稳健 / 谨慎
📈 近7日 +8.3% (green) / -5.2% (red)

- "风格" row should be tappable (→ leads to personality detail page)

**Check-in Button:**
- Large pill-shaped button
- Before check-in: "🎁 签到领 100 CAT" (orange, prominent)
- After check-in: "✓ 今日已签到" (gray, subdued)

**Figma/Design Deliverable:**
- State 1: Not checked in, normal cat
- State 2: Checked in, winning cat (sunglasses)
- State 3: Checked in, losing cat (cardboard box)
- State 4: Allocation popup after check-in (see next)
```

---

## Page 4: CAT Allocation Popup（分配弹窗）

```markdown
## Page: CAT Allocation Popup

**Context:** Appears after daily check-in. User decides how to split the 100 CAT between pocket money, vault, and bank.

**Layout:**
- Modal overlay (same style as daily report)
- Centered card

**Content:**

1. **Header:**
   - 🎁 领取成功！
   - "今天获得 100 CAT"

2. **Divider**

3. **Instruction:**
   - "怎么分配？"

4. **Three Sliders/Input Rows:**

   Each row has:
   - Icon + Label + Description
   - Slider OR number input with +/- buttons
   - Current value displayed prominently
   
🐱 零花钱（猫可自由支配）
[－] ████░░░░░░ 30 [＋]

🔒 金库（锁定存储）
[－] █████░░░░░ 50 [＋]

🏦 银行（年化8%）
[－] ██░░░░░░░░ 20 [＋]


5. **Total Check:**
- "合计：100 CAT" 
- Should update in real-time
- Show warning if not equal to 100

6. **CTA Button:**
- "确认分配"
- Disabled if total ≠ 100

**Visual Notes:**
- Sliders should have orange fill
- Numbers should be easy to adjust (big tap targets)
- Maybe include small educational tooltips (?) icons

**Figma/Design Deliverable:**
- Default state (suggested split)
- State with user-adjusted values
- Error state (total ≠ 100, button disabled)
```

---

## Page 5: Vault Page（金库页）

```markdown
## Page: Vault (Main Tab 3)

**Context:** Asset management hub. Shows CAT distribution, cat's holdings, and farming.

**Layout:**
- Scrollable page
- Toggle at top for Simulation/Real modes
- Multiple card sections

**Top Section:**
- Standard header: ≡ 金库 ⚙️
- Toggle switch:[🎮 模拟盘] [💵 真实盘]

(Simulation selected by default, Real unlocks at Lv.10)

**Total Assets Card:**
- Prominent display
- Large number: "$ 2,847.32"
- Subtitle: "昨日 +$23.50 (+0.83%)" in green
or "昨日 -$15.20 (-0.53%)" in red

**CAT Distribution Card:**
- Title: "🪙 CAT 分布"
- Visual bar chart showing three buckets:

┌────────┬──────────┬────────┐
│ 零花钱 │ 金库 │ 银行 │
│ 45 │ 800 │ 500 │
│ │ │+8%APY │
└────────┴──────────┴────────┘

- Could be a horizontal stacked bar with different colors
- Or three vertical bars side by side
- Button below: "重新分配"

**Cat's Holdings Section:**
- Title: "🐱 小橘买的币"
- List of holding cards, each showing:
- Coin icon + symbol (₿ BTC)
- Amount + USD value ("0.0012 BTC ≈ $82.40")
- Buy reason with news icon (📰 「BTC突破历史新高」)
- P&L percentage (+12.3% green or -23.1% red)

- Empty state if cat hasn't bought anything:
- "小橘还没有买任何币"
- "帮它刷新闻培养投资眼光吧"

**Farming Section (Lv.5+ only):**
- Title: "🌾 我的农田"
- Farm cards:

**Active Farm:**

🦄 Uniswap
ETH / USDC
[🌱][🌱][🌱][🌱][🌱] (visual growing plants)
═══════════════════
已投入: 200 CAT
累计收成: 3.2 CAT
APY: 24.5%
[收割] [追加]


**Locked Farm:**
🔒 PancakeSwap
Lv.10 解锁
当前 Lv.7 → 还需 3 级
(Grayed out, with lock icon)

**Figma/Design Deliverable:**
- Full page, simulation mode, with holdings and farms
- Empty state (no holdings yet)
- Real money mode (Lv.10+) with warning indicators
```

---

## Page 6: Real Money Confirmation Popup（真钱确认弹窗）

```markdown
## Page: Real Money Confirmation Popup

**Context:** Critical safety popup when user tries to give real money to the cat as pocket money.

**Layout:**
- Modal with warning styling
- More prominent warning indicators than other popups

**Content:**

1. **Warning Icon + Title:**
   - ⚠️ 确定要给小橘真金白银吗？
   - Orange/yellow warning color treatment

2. **Amount Display:**
   - "你正在分配 $100 给小橘当零花钱"

3. **Warning List:**
   - ⚠️ 小橘会根据新闻自主决策
   - ⚠️ 可能赚钱，也可能亏损
   - ⚠️ 这是真实资金交易
   (Each with subtle red/orange background)

4. **Divider**

5. **Reference Stats:**
   - 📊 小橘的参考数据
   - 投资风格: 有点激进
   - 模拟盘胜率: 62%
   - 模拟盘累计收益: +$234.50

6. **Two Buttons (side by side):**
   - [我再想想] - Secondary, gray outline
   - [确认给它] - Primary, orange (maybe with slight warning feel)

**Visual Notes:**
- This popup should feel more serious than others
- Use warning colors but don't make it feel scary
- The cat reference data should build trust
- Consider adding a checkbox: "我已了解风险" before enabling confirm button

**Figma/Design Deliverable:**
- Default state
- State with "了解风险" checkbox checked, confirm enabled
```

---

## Page 7: Chat Page（聊天页）

```markdown
## Page: Chat (Main Tab 4)

**Context:** Messenger-style interface where users can chat with their cat, teach it things, and receive proactive messages from the cat.

**Layout:**
- Standard chat interface (like iMessage/WeChat)
- Messages at top, input at bottom
- Cat's avatar on left side of its messages

**Header:**
- Back arrow (←)
- Cat's name centered: "小橘"
- More options (⋯)

**Chat Area:**
- Scrollable message history
- Date separators ("今天 09:32")

**Message Bubbles:**

Cat Messages (left side):
- Light gray background
- Cat avatar (small circle) next to first message in sequence
- Rounded corners (tail on left)
- Can include emojis: 😊 🤔 😿 ✨ 📝

User Messages (right side):
- Orange background
- White text
- Rounded corners (tail on right)
- Small user icon optional

**Quick Reply Buttons:**
When cat asks a question, show tappable options:

┌────────────────┐ ┌────────────────┐
│ 可以买一点 │ │ 再观察一下 │
└────────────────┘ └────────────────┘
┌────────────────┐ ┌────────────────┐
│ 别买了 │ │ 你自己决定 │
└────────────────┘ └────────────────┘

(2x2 grid of rounded buttons)

**Learning Moment:**
When cat learns something, show a special banner:✨ 小橘学会了「LP」！经验 +50

(Centered, celebratory styling, maybe with subtle animation)

**Personality Update:**
When cat's personality changes:🐱 小橘的「meme币谨慎度」+1

(Smaller, informational banner)

**Input Area:**
- Rounded input field: "输入消息..."
- Send button (➤) on right
- Maybe a "+" button for attaching educational content (future)

**Empty State (First Chat):**
- Cat in center with speech bubble
- "主人好！有什么想教我的吗？"
- Maybe some suggested conversation starters as chips

**Figma/Design Deliverable:**
- Active conversation with mixed messages
- State with quick reply buttons visible
- State showing learning moment banner
- Empty/first-time state
```

---

## Page 8: Cat Personality Detail（性格详情页）

```markdown
## Page: Cat Personality Detail

**Context:** Deep dive into the cat's current investment personality, shaped by user's news swipes and chat history.

**Layout:**
- Full page, accessed from Cat Home stats card
- Back navigation

**Header:**
- ← 小橘的性格 ⚙️

**Cat Header:**
- Medium-sized cat illustration (current mood)
- Name below

**Personality Dimensions:**
Each dimension shows:
- Label
- Visual scale (1-10 dots/circles)
- Current position highlighted
- Description text

📊 投资性格分析

风险偏好
保守 ○○○○○○○●○○ 激进
"愿意尝试新币种"

决策速度
谨慎 ○○○○●○○○○○ 冲动
"会观察一段时间再买"

信息辨别
易骗 ○○○○○○●○○○ 怀疑
"对小道消息保持警惕"

持仓耐心
短线 ○○○○○○○○●○ 长线
"相信长期持有"


- Filled circles (●) show position
- Empty circles (○) show range
- Description text is dynamic based on position

**Coin Preferences:**
💚 偏好币种
[BTC] [ETH] [SOL]

💔 不感兴趣
[SHIB] [DOGE]

- Tags with coin colors if possible
- Show top 3-5 in each category

**How It's Formed:**
- Small info section explaining:
- "性格由你的新闻标记和聊天内容塑造"
- Maybe show recent influences

**Figma/Design Deliverable:**
- Example with varied personality scores
- Different description texts based on extreme positions
```

---

## Page 9: Onboarding Flow（新用户引导）

```markdown
## Pages: Onboarding Flow (4-5 screens)

**Context:** First-time user experience, from app open to first check-in.

### Screen 1: Welcome

- App logo/name: "CatFi"
- Cute cat illustration
- Tagline: "🐱 ～ ～ ～"
- Subtitle: "养猫学投资"
- CTA: [开始养猫]
- Background: Subtle gradient or pattern

### Screen 2: Choose Your Cat

- Title: "选一只小猫吧"
- Three cat options in a row:[🐱 橘猫] [😺 白猫] [😸 黑猫]

- Selection indicator (border/checkmark)
- Name input field below:
"给它起个名字吧"
[______小橘______]
- CTA: [确认领养]

### Screen 3-5: Feature Intro (Swipeable Carousel)

**Screen 3 (1/3):**
- Cat illustration with speech bubble
- "你好呀，主人！"
- Body: "我是小橘，我会帮你学习投资"
- "每天给我看新闻，培养我的认知"
- "我会用零花钱自己决定买什么币"
- Dots: ● ○ ○
- CTA: [下一步]

**Screen 4 (2/3):**
- Three account icons: 💰 🔒 🏦
- Title: "三个账户，分开管理"
- Explanation cards:
- 💰 零花钱 - 我可以自由支配买币
- 🔒 金库 - 锁起来，我碰不到
- 🏦 银行 - 存进去赚利息
- Dots: ○ ● ○
- CTA: [下一步]

**Screen 5 (3/3):**
- Swipe gesture illustration: ← 📰 →
- Title: "左滑右滑教我辨别"
- Explanation:
- → 右滑 - 这条新闻值得关注
- ← 左滑 - 这条新闻可能是假的
- "我会根据你的标记来学习判断！"
- Dots: ○ ○ ●
- CTA: [开始使用]

### Screen 6: First Check-in

- 🎁 Gift box icon
- "欢迎礼物！"
- "100 CAT 代币"
- "(价值 $100 模拟币)"
- 💡 Tip: "不要把所有钱都给我当零花钱哦，存一部分在金库更安全！"
- CTA: [领取并分配]

**Figma/Design Deliverable:**
- All 6 screens in sequence
- Show the carousel dots/indicators
- Consistent illustration style throughout
```

---

## Page 10: Tab Bar & Navigation（底部导航）

```mark
## Component: Bottom Tab Bar

**Layout:**
- Fixed at bottom
- Safe area padding for iPhone notch
- 4 equal-width tabs

**Tabs:**
┌──────────┬──────────┬──────────┬──────────┐
│ 📰 │ 🐱 │ 💰 │ 💬 │
│ 新闻 │ 猫窝 │ 金库 │ 聊天 │
└──────────┴──────────┴──────────┴──────────┘

**States:**
- Default: Gray icon, gray text
- Active: Orange icon (filled version), orange text, maybe subtle indicator dot above

**Visual Notes:**
- Icons should be custom-designed line icons, not just emoji
- Active state could have a subtle glow or background pill
- Consider slight elevation/shadow on the entire tab bar

**Notification Badges:**
- News: Could show count of unread news (●)
- Chat: Could show if cat has new message (●)
- Red dot, small, positioned top-right of icon

**Figma/Design Deliverable:**
- Tab bar as reusable component
- All four states (each tab active)
- With and without notification badges
```

---

## Additional Components（其他组件）

```markdown
## Additional UI Components to Design

### 1. News Card Component
- Default state
- Coin tag variations
- Different source indicators

### 2. Holding Card Component
- With profit (green)
- With loss (red)
- With news source attribution

### 3. Farm Card Component
- Active with plants growing
- Locked state
- Ready to harvest state

### 4. Progress Bar Component
- News completion progress
- Experience bar
- Generic loading

### 5. Button Components
- Primary (orange, filled)
- Secondary (outline)
- Disabled state
- Destructive (red)
- With loading spinner

### 6. Cat Expressions Set
- Happy (default)
- Excited (sparkle eyes)
- Thinking (paw on chin)
- Sad (droopy eyes)
- Very sad (cardboard box)
- Rich (sunglasses + suit)
- Very rich (gold chains)

### 7. Empty States
- No holdings yet
- No chat history
- All news completed

### 8. Toast/Snackbar
- Success message
- Error message
- Info message

### 9. Alert/Confirmation Dialogs
- Single button
- Two buttons
- With icon (warning, success, info)

### 10. Input Components
- Text field (default, focus, error)
- Number input with +/- buttons
- Slider

### 11. Loading States
- Full page loader
- Skeleton screens for cards
- Pull-to-refresh indicator
```

---

## Design Tokens Summary（设计令牌）

```markdown
## Design Tokens (for Design System)

### Colors
--color-primary: #FF8C42
--color-primary-light: #FFB380
--color-primary-dark: #E67325
--color-secondary: #4ECDC4
--color-success: #7ED4AD
--color-warning: #FFB347
--color-error: #FF6B6B
--color-background: #FAFAFA
--color-surface: #FFFFFF
--color-text-primary: #2D3436
--color-text-secondary: #636E72
--color-text-muted: #B2BEC3
--color-border: #E0E0E0
--color-divider: #F0F0F0

### Typography
--font-family: 'SF Pro Rounded', 'PingFang SC', sans-serif
--font-size-xs: 12px
--font-size-sm: 14px
--font-size-md: 16px
--font-size-lg: 18px
--font-size-xl: 24px
--font-size-xxl: 32px
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-bold: 700

### Spacing
--space-xs: 4px
--space-sm: 8px
--space-md: 12px
--space-lg: 16px
--space-xl: 24px
--space-xxl: 32px
--space-screen-edge: 20px

### Border Radius
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 20px
--radius-full: 9999px

### Shadows
--shadow-sm: 0 1px 3px rgba(0,0,0,0.08)
--shadow-md: 0 2px 8px rgba(0,0,0,0.08)
--shadow-lg: 0 4px 16px rgba(0,0,0,0.12)
--shadow-card: 0 2px 8px rgba(0,0,0,0.06)

### Animation
--transition-fast: 150ms ease-out
--transition-normal: 250ms ease-out
--transition-slow: 400ms ease-out
```

---

## Export Checklist（导出清单）

```markdown
## Design Deliverables Checklist

### Screens (Light Mode)
□ Splash/Loading screen
□ Onboarding - Welcome
□ Onboarding - Choose cat
□ Onboarding - Intro 1/3
□ Onboarding - Intro 2/3
□ Onboarding - Intro 3/3
□ Onboarding - First check-in
□ Daily Report Popup
□ News Feed - Default
□ News Feed - Swiping right
□ News Feed - Swiping left
□ News Feed - Completed
□ Cat Home - Normal cat, not checked in
□ Cat Home - Winning cat
□ Cat Home - Losing cat
□ CAT Allocation Popup
□ Vault - Simulation mode
□ Vault - Real money mode (Lv.10+)
□ Real Money Confirmation Popup
□ Chat - Conversation
□ Chat - With quick replies
□ Chat - Learning moment
□ Cat Personality Detail
□ Settings (if needed)

### Components
□ Tab bar (all states)
□ News card
□ Holding card (profit/loss)
□ Farm card (active/locked)
□ Buttons (all variants)
□ Input fields
□ Progress bars
□ Cat expressions (6+ variations)
□ Toast messages
□ Empty states

### Assets
□ App icon
□ Cat illustrations (all moods)
□ Icon set (24x24)
□ Coin icons (BTC, ETH, etc.)
□ Onboarding illustrations
```

