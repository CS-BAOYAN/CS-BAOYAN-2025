# XJTU-RMV

XJTU 视觉组 公开教程。

## 本地部署与调试

安装 [Node.js](https://nodejs.org/zh-cn)/[Git](https://git-scm.com/)。

```shell
git clone https://github.com/XJTU-RMV/XJTU-RMV.github.io.git
cd XJTU-RMV.github.io
npm install -g pnpm
pnpm i
pnpm dev
```

## 编译 PDF

```shell
pnpm run export-pdf
```

不过暂时编译并不是很优雅，导出的 PDF 也并未按照理想的顺序，暂不推荐。

## 贡献者

<a href="https://github.com/XJTU-RMV/XJTU-RMV.github.io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=XJTU-RMV/XJTU-RMV.github.io" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
