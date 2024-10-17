// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://csbaoyan.top/',
	base: '/',
	integrations: [
		starlight({
			components: {
				// 重写默认的 `SocialIcons` 组件。
				Footer: './src/components/Footer.astro',
			  },
			title: 'CSWiki',
			social: {
				github: 'https://github.com/CS-BAOYAN/CS-BAOYAN-2025',
			},
			editLink: {
			  baseUrl: 'https://github.com/CS-BAOYAN/CS-BAOYAN-2025/edit/main/',
			},
			logo: {
			  src: './src/assets/houston.png',
			},
			favicon: '/favicon.ico',
			sidebar: [
				{
					label: '关于我们',
					slug: '关于我们',
				},
				{
					label: '贡献指南',
					slug: '贡献指南',
				},
				{
					label: '保研经验贴',
					items: [
						{ label: '总览', slug: '保研经验贴/总览' },
						{ label: '2024年保研总结贴', slug: '保研经验贴/2024年' },
						{ label: '2023年保研总结贴', slug: '保研经验贴/2023年' },
						{ label: '2022年保研总结贴', slug: '保研经验贴/2022年' },
						{ label: '2021年保研总结贴', slug: '保研经验贴/2021年' },
						{ label: '2020年保研总结贴', slug: '保研经验贴/2020年' },
						{ label: '2019年保研总结贴', slug: '保研经验贴/2019年' },
						{ label: '2018年保研总结贴', slug: '保研经验贴/2018年' },
						{ label: '2017年保研总结贴', slug: '保研经验贴/2017年' },
					],
				},
				{
					label: '保研指南',
					autogenerate: { directory: '保研指南' },
				},
				{
					label: '保研工具箱',
					autogenerate: { directory: '保研工具箱' },
				},
				{
					label: '信息汇总',
					autogenerate: { directory: '信息汇总' },
				},
			],
		}),
	],
});
