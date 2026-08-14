# Edge 商店上架文案（中文）

以下内容供你在 Microsoft Partner Center 提交时复制粘贴。

---

## 一、商店列表（Store Listings）- 简体中文

### 扩展名称（Extension Name）
```
Bilibili Link Cleaner
```

### 描述（Description，最少 250 字符，最多 10000 字符）
```
Bilibili Link Cleaner 是一款用于自动净化哔哩哔哩（B站）视频分享链接的浏览器扩展。

【核心功能】
当你点击 B 站视频页面的"分享"按钮时，本扩展会自动将纯净版链接复制到剪贴板，自动移除链接中多余的参数（如 share_source、vd_source 等），格式为：

[视频标题] https://www.bilibili.com/video/BVxxxxxxxx/

【主要特性】
- 自动清理：点击分享按钮即自动复制纯净链接，无需手动编辑
- 智能标题：自动获取视频标题，与纯净链接组合成完整分享文本
- 短链支持：可选开启 b23.tv 短链格式（https://b23.tv/BVxxxxxxxx）
- 设置面板：点击工具栏图标即可打开设置，可控制总开关、复制提示、短链模式
- 轻量安全：不收集任何个人数据，所有设置仅保存在本地设备

【使用方法】
1. 安装扩展后，打开任意 B 站视频页面
2. 点击视频下方的"分享"按钮
3. 纯净链接已自动复制到剪贴板，直接粘贴即可分享

【隐私说明】
本扩展不收集、不存储、不传输任何个人数据，不包含广告与分析代码。设置仅保存在浏览器本地。
```

### 搜索词（Search Terms，最多 7 个，每个最多 30 字符）
```
bilibili,链接净化,纯净链接,B站,分享链接,去除参数,链接清理
```

### 网站（Website，可选）
```
https://github.com/s-j-y-m/bilibili-link-cleaner
```

### 支持联系方式（Support contact detail，可选）
```
https://github.com/s-j-y-m/bilibili-link-cleaner/issues
```

---

## 二、隐私页面（Privacy）

### 单一用途说明（Single Purpose Description）
```
自动净化哔哩哔哩视频页面的分享链接，移除多余参数并复制纯净链接到剪贴板。
```

### 权限说明（Permission justification）

**clipboardWrite**：
```
用于将生成的纯净分享链接写入系统剪贴板，这是扩展的核心功能。
```

**storage**：
```
用于在浏览器本地保存用户设置（总开关、复制提示、短链模式），数据仅存储于本地设备。
```

### 远程代码（Are you using remote code?）
```
No, I am not using remote code.
```

### 数据使用（Data usage）
- 不收集任何用户数据
- 不使用第三方服务
- 无广告、无追踪

### 隐私政策 URL（Privacy Policy URL）
```
https://raw.githubusercontent.com/s-j-y-m/bilibili-link-cleaner/main/PRIVACY.md
```

---

## 三、可用性（Availability）

### 可见性（Visibility）
```
Public（公开）
```

### 市场（Markets）
- 建议：全球所有市场（All markets），或根据需要选择
- 如仅面向中文用户，可只选中国（China）、中国台湾、中国香港、新加坡等

---

## 四、认证测试说明（Notes for certification，可选）
```
测试步骤：
1. 打开任意 B 站视频页面（如 https://www.bilibili.com/video/BV1F7421T7dr/）
2. 点击视频下方工具栏的"分享"按钮（元素 ID: share-btn-outer）
3. 确认右上角弹出"已复制纯净链接"提示
4. 粘贴剪贴板内容，确认格式为：[视频标题] https://www.bilibili.com/video/BVxxxx/
5. 点击工具栏图标打开设置面板，测试三个开关功能

无需登录账号，无需测试凭据。
```