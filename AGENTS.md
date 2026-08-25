# 商陆网站项目（shanglu-site）

> 本文档是项目的“开发状态书”，新会话/开发者先读这里再接续工作。

## 项目定位

- 商陆的个人长期独立博客/知识站：炫酷可视化 + Obsidian 知识库，零服务器
- 内容全部中文

## 技术栈

- Astro（minimal 模板）+ ECharts（可视化）
- 内容源：Obsidian Markdown（不锁死，随时可迁移）
- 托管：GitHub Pages / Cloudflare Pages（免费）

## 当前状态（2026-08-25 晚）

- [x] 环境：Node v24.19.0 / Git 2.55.0 / VS Code 1.134.0 / GitHub Chen-Master-ZW
- [x] 项目创建、依赖安装、git init
- [x] 本地预览跑通（npm run dev → localhost:4321）
- [x] **方案 C 框架确定**（商陆选定）：首页 / 文章 / 知识库 / 可视化 / 关于我
- [x] **页面骨架完成**：BaseLayout + Header(导航) + Footer + 五个页面全部 200
- [x] **首页已含 ECharts 示例图**（认知积累曲线，深色科技风）
- [x] **已部署上线**：https://chen-master-zw.github.io/shanglu-site/（GitHub Actions 自动部署，push main 即发布）
- [x] 「忌」专属页面（2026-08-26 建成：/ji 突破认知板块，含四个主题方向待填充）
- [ ] 内容填充（文章从公众号搬入、知识库整理）
- [ ] 真实可视化作品（ECharts 交互）
- [ ] 关于我放公众号二维码
- [ ] GitHub 部署上线

## 代码结构

- src/layouts/BaseLayout.astro —— 全局布局（深色主题 + 导航 + 页脚）
- src/components/Header.astro / Footer.astro
- src/pages/index.astro（首页：标语+图表+入口）/ articles.astro / knowledge.astro / visuals.astro / about.astro
- 依赖：echarts 已装；全局样式在 BaseLayout <style is:global>

## 常用命令

- 开发预览：`npm run dev`（astro dev --background 可后台）
- 构建：`npm run build`
- 预览构建产物：`npm run preview`

## 文档

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
