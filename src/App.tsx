import { Github, Iphone, Mail } from '@icon-park/vue-next'
import { defineComponent } from 'vue'
import CvCard from './components/CvCard'

export default defineComponent(() => {
  let timer: number | null = null

  const handleClick = (ev: MouseEvent) => {
    ev.preventDefault()
    if (timer) {
      return // throttle
    }
    const classList = (ev.target as HTMLHeadElement).classList
    classList.add('animate__animated', 'animate__bounceIn')
    timer = setTimeout(() => {
      classList.remove('animate__animated', 'animate__bounceIn')
      timer = null
    }, 3000)
  }

  return () => (
    <div>
      <div class="flex flex-col items-center">
        <h1
          class="mt-[20px] cursor-pointer text-[30px]"
          onClick={(ev) => handleClick(ev)}
          onContextmenu={(ev) => handleClick(ev)}
        >
          杭天铖
        </h1>
        <div class="my-[20px] flex items-center gap-[10px]">
          <Iphone theme="outline" size="24" fill="#4a90e2" strokeWidth={3} />
          <a href="tel:153****7789" class="hover:bg-[#c4d9ff]">
            15395377789
          </a>
          <Mail theme="outline" size="24" fill="#4a90e2" strokeWidth={3} />
          <a href="mailto:161043261@qq.com" class="hover:bg-[#c4d9ff]">
            161043261@qq.com
          </a>
          <Github theme="outline" size="24" fill="#4a90e2" strokeWidth={3} />
          <a
            href="https://github.com/161043261"
            class="hover:bg-[#c4d9ff]"
            target="_blank"
            rel="noopener"
          >
            Github
          </a>
        </div>
        <a
          href="https://161043261.github.io/"
          class="hover:bg-[#c4d9ff] underline"
          target="_blank"
          rel="noopener"
        >
          161043261.github.io
        </a>
      </div>

      <CvCard header="个人信息">
        <div>男, 2002</div>
      </CvCard>

      <CvCard header="求职意向">
        <ul class="ml-[20px] list-disc">
          <li>目标岗位: 前端实习 (Vue/React)</li>
          <li>目标地点: 不限</li>
        </ul>
      </CvCard>

      <CvCard header="教育经历">
        <ul>
          <li class="grid grid-cols-3">
            <div>本科: 2019 - 2023</div>
            <div>西安电子科技大学</div>
            <div>微电子科学与工程</div>
          </li>
          <li class="grid grid-cols-3">
            <div>硕士: 2024 至今</div>
            <div>南京邮电大学</div>
            <div>计算机技术</div>
          </li>
        </ul>
      </CvCard>

      <CvCard header="技能清单">
        <ul class="ml-[20px] list-disc">
          <li>熟悉 CSS, tailwindcss, Sass, 了解 CSS 原子化, CSS 模块化</li>
          <li>熟悉 JS/TS, 熟悉 ES6 语法, monorepo, 了解 Node.js, pm2, 熟悉 express.js</li>
          <li>
            熟悉 vue3, pinia, vue-router, 了解 Vue3 响应式原理, 性能优化, 了解 AST 的遍历转换过程
          </li>
          <li>熟悉 JSX/TSX, 了解 react</li>
          <li>熟悉数据结构, 计算机网络, 设计模式</li>
          <li>熟悉 git, 有良好的开发习惯, 了解 husky, CI/CD</li>
          <li>熟悉 vite, 包括双引擎架构, 依赖预处理, 模块热更新, CSS 模块化等; 了解 webpack</li>
          <li>了解 Web 性能优化, 了解 FCP 等 Web 性能指标, 有 Vue3 前端监控插件开发经验</li>
          <li>对 SEO, 服务器端渲染有一定的了解</li>
          <li>对创建前端 UI 有强烈的兴趣和成就感</li>
        </ul>
      </CvCard>

      {/* 工作经历 */}
      <CvCard header="实习经历">暂无</CvCard>

      <CvCard header="项目经历">
        <div>
          <div class="my-[20px] flex gap-[20px]">
            <div class="font-bold">Vue3 后台管理系统</div>
            <div>
              项目地址:
              <a
                href="https://github.com/161043261/chahan"
                class="hover:bg-[#c4d9ff] ml-[10px] underline duration-500"
                target="_blank"
                rel="noopener"
              >
                github.com/161043261/chahan
              </a>
            </div>
          </div>
          <div>
            技术栈: vite, vue3, vue-router, axios, pinia, sass, tailwind, element-plus, mockjs,
            高德地图, husky, ua-parser-js 获取 ua 信息, web-vitals 获取性能指标等
          </div>

          <ul class="ml-[20px] list-disc">
            <li>单例模式的事件总线</li>
            <li>使用 vite 插件模拟后端接口</li>
            <li>封装自定义指令, 实现可拖拽窗口</li>
            <li>封装全局toast (使用 vue3 插件和全局 provide/inject 两种方式实现)</li>
            <li>性能优化: 缓存组件, 手写虚拟滚动列表</li>
            <li>
              开发 vue3 全链路监控插件, 包括 xhr/fetch aop 跟踪, 点击事件跟踪, 运行时错误,
              异步错误上报, 路由 (hash 模式, history 模式) 跟踪, performance 性能指标上报,
              白屏检测等
            </li>
            <li>使用 web worker 处理计算密集型任务</li>
          </ul>

          <div>
            <div class="my-[20px] flex gap-[20px]">
              <div class="font-bold">React web-rtc 实时聊天</div>
              <div>
                项目地址:
                <a
                  href="https://github.com/161043261/ito"
                  class="hover:bg-[#c4d9ff] ml-[10px] underline duration-500"
                  target="_blank"
                  rel="noopener"
                >
                  github.com/161043261/ito
                </a>
              </div>
            </div>
            基于 websocket 的实时消息推送
            <div>
              技术栈: vite, react, react-router, axios, zustand, dayjs, sass, tailwind, antd,
              WebSocket, express, express-ws, mysql, redis 等
            </div>
            <ul>
              <li>使用 react-router和 HOC 高阶组件实现前端路由守卫, 路由重定向等功能</li>
              <li>对于大文件传输场景, 实现了分片上传, 断点续传, 重传, 秒传和下载功能</li>
            </ul>
          </div>
        </div>
      </CvCard>

      <CvCard header="科研经历">目前的研究方向是 BBR 拥塞控制协议, ns3 仿真</CvCard>
    </div>
  )
})
