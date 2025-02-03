Files Structure

/app
 ├── /core            # 核心模組 (單例服務、認證、守衛)
 │   ├── /services    # API、WebSocket、日誌、身份驗證
 │   │   ├── auth.service.ts
 │   ├── /guards      # 路由守衛 (RBAC 權限控制)
 │   │   ├── auth.guard.ts
 │   ├── /interceptors # HTTP 攔截器 (API Token、錯誤處理)
 │   │   ├── token.interceptor.ts
 │   │   ├── error.interceptor.ts
 │   ├── core.module.ts
 │
 ├── /shared          # 共用模組 (共用元件、指令、管道)
 │   ├── /components  # UI 元件 (Modal、Chart、Loading)
 │   │   ├── button/
 │   │   ├── modal/
 │   │   ├── chart/
 │   │   ├── loading-spinner/
 │   ├── /directives  # 自訂指令 (Lazy Load、Autofocus)
 │   ├── /pipes       # 自訂管道 (AI 資料格式化)
 │   ├── /models      # TypeScript 介面 (AI 輸入/輸出)
 │   ├── shared.module.ts
 │
 ├── /layout          # 全局佈局 (側邊欄、頂部導航等)
 │   ├── sidebar/
 │   ├── topbar/
 │   ├── layout.component.ts
 │   ├── layout.component.html
 │   ├── layout.module.ts
 │
 ├── /features        # 主要功能模組 (獨立載入)
 │
 ├── /pages           # 主要頁面 (路由對應的頁面)
 │   ├── home/
 │   ├── dashboard/
 │   ├── profile/
 │   ├── login/
 │
 ├── /services        # 全域服務 (API 請求、資料管理)
 │   ├── content.service.ts
 │
 ├── app.component.ts
 ├── app.module.ts
 ├── app-routing.module.ts
 ├── main.ts
 ├── index.html
 ├── styles.scss

