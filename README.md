# GDOU-Manual

**广海手册： Online manual for GDOUer.**

## 项目结构

    .
    ├─ .vitepress           # vitepress配置目录
    │  ├─ theme             # 自定义主题目录
    │  │  ├─ components     # 自定义vue组件目录
    │  │  │   └─ ...
    │  │  ├─ styles         # 自定义css目录
    │  │  │   └─ index.css
    │  │  └─ index.ts       # 主题入口
    │  └─ config.ts         # 配置文件
    ├─ docs                 # 文档源目录
    │  ├─ public            # 静态资源
    │  │  └─ ...
    │  └─ ...
    ├─ .gitignore
    ├─ env.d.ts
    ├─ package.json
    └─ tsconfig.json