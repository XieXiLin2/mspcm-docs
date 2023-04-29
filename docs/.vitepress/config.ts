import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
    // STEP 1 ---- 站点配置
    lang: 'zh-CN',
    title: '微软电脑管家文档',
    description: '微软电脑管家使用及问题帮助文档',
    appearance: true,
    lastUpdated: true,
    cleanUrls: true,

    // STEP 2 ---- 目录配置
    base: '/',
    srcDir: '.',
    outDir: '../dist',
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh',
            link: '/',
            dir: '/'
        },
        en: {
            label: 'English',
            lang: 'en',
            link: '/en/',
            dir: '/en/'
        },
    },

    themeConfig: {
        // STEP 3 ---- 相关组件汉化
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '多语言',
        outlineTitle: '当前页',
        logo: '/assets/logo.png',
        lastUpdatedText: '最近更新时间',
        siteTitle: '微软电脑管家文档',
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },

        // STEP 4 ---- 链接配置
        nav: [{
            text: '官方网站',
            link: 'https://pcmanager.microsoft.com'
        },
        {
            text: '关注我们',
            items: [
                { text: '官方微博', link: 'https://weibo.com/mspcmanager' },
                { text: '官方公众号', link: 'http://weixin.qq.com/r/VyhzazfExmq5rXMI931F' },
                { text: '官方 QQ 群', link: 'https://forms.office.com/pages/responsepage.aspx?id=v4j5cvGGr0GRqy180BHbR7Jc7yMooGtIh8-T51_PVotUNkZSWVJSQVo4SFZVUUtDSDVHRjA4MTFMWi4u' },
                { text: '官方 QQ 频道', link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=2bVm80&from=246610&biz=ka#/pc' },
                { text: '官方 Discord', link: 'https://discord.com/invite/FTDTddsPgd' }
            ]
        }],

        sidebar: [
            {
                text: '起步',
                items: [
                    { text: '协议与声明', link: '/get-started/agreements-and-declarations' },
                    { text: '关于软件', link: '/get-started/about' }
                ]
            },
            {
                text: '下载与安装问题',
                items: [
                    { text: '安装前', link: '/problem-solving/before-installing' },
                    { text: '安装过程中的问题', link: '/problem-solving/while-installing' },
                    { text: '使用过程中的问题', link: '/problem-solving/while-using' },
                    { text: 'Microsoft Defender 防病毒问题', link: '/problem-solving/MDA' },
                    { text: '其它尚未解决的问题', link: '/problem-solving/unresolved-issues' }
                ]
            },
            {
                text: '附录',
                items: [
                    { text: '公开最新版本号及查询方式', link: '/appendix/check-version' },
                    { text: '提交日志', link: '/appendix/feedback-bugs' },
                    { text: '友情提示', link: '/appendix/OUCH' },
                    { text: '提交建议与反馈及信息采集', link: '/appendix/connect-with-us' },
                    { text: '修复损坏的系统映像', link: '/appendix/repair-system-image' },
                    { text: '如何更换 DNS', link: '/appendix/change-DNS' },
                    { text: '后记', link: '/appendix/postscript' }
                ]
            }
        ],

        editLink: {
            pattern: 'https://github.com/mspcmanager/mspcm-docs/edit/main/docs/:path',
            text: '在 Github 上编辑此页'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/mspcmanager/mspcm-docs' }
        ],

        footer: {
            message: '本文档基于 Apache 2.0 协议发布',
            copyright: 'Copyright © 2023 Microsoft PC Manager Administrators'
        },

        search: {
            provider: 'local'
        }
    }
})
