const heroSlides = [
  { label: "概览", src: "/assets/hero-slide-overview.png" },
  { label: "图片", src: "/assets/hero-slide-image.png" },
  { label: "网页", src: "/assets/hero-slide-webpage.png" },
  { label: "文件", src: "/assets/hero-slide-file.png" },
  { label: "表情包", src: "/assets/hero-slide-emoji.png" },
  { label: "代码", src: "/assets/hero-slide-code.png" },
  { label: "颜色", src: "/assets/hero-slide-color.png" },
  { label: "翻译", src: "/assets/hero-slide-translation.png" },
];

const featureDecks = [
  [
    { title: "从任何地方开始", copy: "无论正在使用浏览器、编辑器还是聊天工具，都可以随时调出 TieTie，继续使用刚刚复制的内容。", video: "/assets/feature-start-anywhere.mp4", poster: "/assets/posters/feature-start-anywhere.jpg", duration: 7000 },
    { title: "多种内容，各有合适展示", copy: "代码、网页、颜色、图片、文本和文件，会根据内容类型以更清楚的形式呈现。", video: "/assets/feature-content-types.mp4", poster: "/assets/posters/feature-content-types.jpg", duration: 15700 },
    { title: "分组", copy: "把内容整理到清晰的分组中，需要时更容易找到。", video: "/assets/demos/demo-app-groups.mp4", poster: "/assets/posters/demo-app-groups.jpg", duration: 12700 },
    { title: "标签", copy: "给内容添加标签，用更明确的方式整理和筛选。", video: "/assets/demos/demo-tags.mp4", poster: "/assets/posters/demo-tags.jpg", duration: 13400 },
    { title: "重命名", copy: "把难以辨认的文件名和内容标题改成更清楚、更容易再次找到的名称。", video: "/assets/demos/demo-rename.mp4", poster: "/assets/posters/demo-rename.jpg", duration: 9900 },
    { title: "列表、网格、瀑布流", copy: "在列表、网格和瀑布流之间切换，按自己的习惯浏览内容。", video: "/assets/demos/demo-browse-modes.mp4", poster: "/assets/posters/demo-browse-modes.jpg", duration: 19200 },
    { title: "批量编辑", copy: "一次选择多个内容并统一处理，减少重复操作。", video: "/assets/demos/demo-batch-edit.mp4", poster: "/assets/posters/demo-batch-edit.jpg", duration: 13700 },
  ],
  [
    { title: "全文快速搜索", copy: "输入记得住的任意关键词，从文字、链接和文件内容中快速找到需要的结果。", video: "/assets/demos/demo-search.mp4", poster: "/assets/posters/demo-search.jpg", duration: 7100 },
    { title: "提取文本", copy: "从图片中提取文字，让截图里的内容也可以搜索和使用。", video: "/assets/demos/demo-extract-text.mp4", poster: "/assets/posters/demo-extract-text.jpg", duration: 5100 },
    { title: "空格快速预览", copy: "按下空格即可快速查看当前内容，不必打开完整详情。", video: "/assets/demos/demo-quick-preview.mp4", poster: "/assets/posters/demo-quick-preview.jpg", duration: 12700 },
    { title: "翻译", copy: "在不离开当前工作流的情况下翻译复制的内容，并直接使用处理后的结果。", video: "/assets/demos/demo-translate.mp4", poster: "/assets/posters/demo-translate.jpg", duration: 9600 },
    { title: "识别二维码", copy: "识别二维码并取出其中的链接或文字内容。", video: "/assets/demos/demo-qrcode.mp4", poster: "/assets/posters/demo-qrcode.jpg", duration: 13100 },
    { title: "置顶", copy: "把重要内容置顶，让它始终在更容易找到的位置。", video: "/assets/demos/demo-pin.mp4", poster: "/assets/posters/demo-pin.jpg", duration: 5500 },
    { title: "拖拽排序", copy: "拖动内容调整顺序，让常用内容保持在顺手的位置。", video: "/assets/demos/demo-drag-sort.mp4", poster: "/assets/posters/demo-drag-sort.jpg", duration: 8100 },
  ],
];

const tags = [
  ["#本地优先", "#数据安全检查"],
  ["#隐私保护", "#全文快速搜索"],
  ["#背景色自由搭配", "#OCR 文字识别"],
  ["#跟随当前 App", "#一键翻译"],
  ["#列表 · 网格 · 瀑布流", "#二维码转换"],
  ["#数据管理器", "#文件保管"],
];

const capabilities = [
  ["本地优先", "日常剪贴内容保存在自己的 Mac 上。"],
  ["隐私保护", "敏感内容无需交给额外的在线服务处理。"],
  ["文件保管", "为复制的文件保存可继续使用的本地副本。"],
  ["按 App 自动归类", "根据内容来源快速回到对应的工作场景。"],
  ["多种浏览方式", "在列表、网格和瀑布流之间选择合适的视图。"],
  ["自定义分组", "把常用内容整理到自己的分组中。"],
  ["类型与格式筛选", "按内容类型和格式缩小查找范围。"],
  ["收藏与置顶", "让重要内容保持在更容易找到的位置。"],
];

const scenes = [
  { title: "Vibe Coding", copy: "在编辑器、终端和 AI 对话之间，快速找回代码、命令、日志与 API 示例。", src: "/assets/hero-webpage.png" },
  { title: "整理设计素材", copy: "集中保存颜色值、截图、SVG、图片与设计参考，需要时直接搜索使用。", src: "/assets/hero-image.png" },
  { title: "快速回复消息", copy: "找回常用回复、链接和之前发送过的信息，减少重复输入和来回查找。", src: "/assets/hero-product.png" },
  { title: "写作与 Prompt", copy: "整理文案片段、参考资料和提示词，在不同工具之间继续创作。", src: "/assets/hero-webpage.png" },
  { title: "填写常用信息", copy: "快速调用邮箱、地址和常用链接，让重复填写更轻松。", src: "/assets/hero-product.png" },
];

const faqs = [
  ["TieTie 是什么？", "TieTie 是一款为 macOS 设计的剪贴板管理工具，自动保存复制过的文字、链接、图片和文件，让需要的内容可以再次快速找到和使用。"],
  ["TieTie 支持保存哪些内容？", "TieTie 可以整理文字、链接、代码、颜色、图片和文件，并根据内容类型提供更合适的展示、筛选和使用方式。"],
  ["以前复制的内容要怎么找回来？", "可以通过全文搜索、来源 App、内容类型、分组和收藏快速缩小范围；图片中识别出的文字也可以参与搜索。"],
  ["复制的文件会不会失效？", "TieTie 可以为复制过的文件保存本地副本，减少原文件被移动或删除后无法继续使用的情况。文件副本可以在数据管理器中查看、修复或清理。"],
  ["TieTie 如何保护我的数据？", "日常剪贴记录以本机存储为主，并提供数据安全检查、存储占用查看和清理工具，让保存了什么、占用了多少空间都更容易掌握。"],
  ["TieTie 可以识别图片里的文字和二维码吗？", "可以。TieTie 能通过 OCR 提取图片中的文字，也可以识别二维码内容，或将文字和链接转换成二维码。"],
  ["TieTie 支持哪些 macOS 版本？", "TieTie 支持 macOS 14 或更高版本；系统翻译功能需要 macOS 15 或更高版本。"],
  ["可以备份或迁移 TieTie 数据吗？", "可以通过数据备份功能导出记录、图片、文件副本、分组和收藏，并在需要时重新导入。"],
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const tagRotationInterval = 3000;
const tagRotationStagger = 100;
const tagRotationDuration = 800;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function createVisual(item, active = false) {
  const wrapper = el("div", `carousel-visual${active ? " is-active" : ""}`);
  if (item.video) {
    const video = document.createElement("video");
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = active ? "auto" : "none";
    video.poster = item.poster || "";
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    const source = document.createElement("source");
    source.src = item.video;
    source.type = "video/mp4";
    video.append(source);
    wrapper.append(video);
  } else {
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.title || item.label || "TieTie 功能展示";
    image.loading = active ? "eager" : "lazy";
    wrapper.append(image);
  }
  return wrapper;
}

function switchVisual(visuals, fromIndex, toIndex) {
  if (fromIndex === toIndex) return;
  const outgoing = visuals[fromIndex];
  const incoming = visuals[toIndex];
  incoming.style.transition = "none";
  incoming.classList.remove("is-active", "is-exiting");
  incoming.style.transform = "translateY(100%)";
  void incoming.offsetWidth;
  incoming.style.removeProperty("transition");
  incoming.style.removeProperty("transform");
  outgoing.classList.remove("is-active");
  outgoing.classList.add("is-exiting");
  incoming.classList.add("is-active");
  window.setTimeout(() => {
    outgoing.style.transition = "none";
    outgoing.classList.remove("is-exiting");
    void outgoing.offsetWidth;
    outgoing.style.removeProperty("transition");
  }, 460);
}

function initializeHero() {
  const stage = document.querySelector("[data-hero-stage]");
  const tabs = document.querySelector("[data-hero-tabs]");
  if (!stage || !tabs) return;
  const viewport = el("div", "hero-viewport");
  stage.append(viewport);
  const visuals = heroSlides.map((item, index) => {
    const visual = createVisual({ ...item, title: `${item.label}内容展示` }, index === 0);
    viewport.append(visual);
    const button = el("button", index === 0 ? "is-active" : "", item.label);
    button.type = "button";
    button.addEventListener("click", () => activate(index, true));
    tabs.append(button);
    return visual;
  });
  const buttons = [...tabs.querySelectorAll("button")];
  let active = 0;
  let timer;
  function activate(index, reset = false) {
    if (index === active) return;
    switchVisual(visuals, active, index);
    buttons[active].classList.remove("is-active");
    buttons[index].classList.add("is-active");
    active = index;
    if (reset) start();
  }
  function start() {
    window.clearInterval(timer);
    if (!reduceMotion.matches) timer = window.setInterval(() => activate((active + 1) % heroSlides.length), 4200);
  }
  start();
}

function initializeTags() {
  const container = document.querySelector("[data-tag-columns]");
  if (!container) return;
  const columns = tags.map((items) => {
    const column = el("div", "tag-column");
    const nodes = items.map((text, index) => {
      const item = el("div", `tag-item${index === 0 ? " is-active" : ""}`, text);
      column.append(item);
      return item;
    });
    container.append(column);
    return nodes;
  });
  if (reduceMotion.matches || columns.some((nodes) => nodes.length < 2)) return;
  let active = 0;
  window.setInterval(() => {
    const leavingIndex = active;
    const next = (leavingIndex + 1) % columns[0].length;
    columns.forEach((nodes, columnIndex) => {
      window.setTimeout(() => {
        const leaving = nodes[leavingIndex];
        const incoming = nodes[next];
        leaving.classList.remove("is-active");
        leaving.classList.add("is-leaving");
        incoming.classList.remove("is-leaving");
        incoming.classList.add("is-active");
        window.setTimeout(() => leaving.classList.remove("is-leaving"), tagRotationDuration);
      }, columnIndex * tagRotationStagger);
    });
    active = next;
  }, tagRotationInterval);
}

function initializeFeatureDeck(section, items, reversed) {
  const container = el("div", "container");
  const shell = el("div", `feature-shell${reversed ? " is-reversed" : ""}`);
  const media = el("div", "feature-media");
  const content = el("div", "feature-content");
  const nav = el("div", "feature-nav");
  const copy = el("div", "feature-copy");
  const progress = el("div", "feature-progress");
  const progressBar = el("span");
  progress.append(progressBar);
  const visuals = items.map((item, index) => {
    const visual = createVisual(item, index === 0);
    media.append(visual);
    return visual;
  });
  const buttons = items.map((item, index) => {
    const button = el("button", index === 0 ? "is-active" : "", item.title);
    button.type = "button";
    button.addEventListener("click", () => activate(index, true));
    nav.append(button);
    const description = el("div", `feature-description${index === 0 ? " is-active" : ""}`);
    description.append(el("h3", "", item.title), el("p", "", item.copy));
    copy.append(description);
    return button;
  });
  content.append(nav, copy, progress);
  shell.append(media, content);
  container.append(shell);
  section.append(container);
  let active = 0;
  let timer;
  let progressAnimation;
  function prepareVideos() {
    const next = (active + 1) % visuals.length;
    visuals.forEach((visual, index) => {
      const video = visual.querySelector("video");
      if (!video) return;
      const preload = index === active || index === next ? "auto" : "none";
      if (video.preload === preload) return;
      video.preload = preload;
      if (preload === "auto") video.load();
    });
  }
  function playActiveVideo() {
    prepareVideos();
    visuals.forEach((visual, index) => {
      const video = visual.querySelector("video");
      if (!video) return;
      if (index === active && !reduceMotion.matches && !document.hidden) video.play().catch(() => {});
      else video.pause();
    });
  }
  function restartProgress(duration) {
    progressAnimation?.cancel();
    progressBar.style.width = "0";
    if (reduceMotion.matches) return;
    progressAnimation = progressBar.animate([{ width: "0" }, { width: "100%" }], { duration, easing: "linear", fill: "forwards" });
  }
  function schedule() {
    window.clearTimeout(timer);
    const duration = items[active].duration || 5000;
    restartProgress(duration);
    if (!reduceMotion.matches) timer = window.setTimeout(() => activate((active + 1) % items.length), duration);
  }
  function activate(index, manual = false) {
    if (index !== active) {
      switchVisual(visuals, active, index);
      buttons[active].classList.remove("is-active");
      buttons[index].classList.add("is-active");
      copy.children[active].classList.remove("is-active");
      copy.children[index].classList.add("is-active");
      active = index;
      playActiveVideo();
    }
    if (manual || index >= 0) schedule();
  }
  document.addEventListener("visibilitychange", playActiveVideo);
  playActiveVideo();
  schedule();
}

function initializeCapabilities() {
  const list = document.querySelector("[data-capability-list]");
  if (!list) return;
  capabilities.forEach(([title, copy]) => {
    const item = el("article", "capability-item");
    const icon = el("div", "capability-icon");
    icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 12h10M12 7v10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    item.append(icon, el("h3", "", title), el("p", "", copy));
    list.append(item);
  });
}

function initializeScenes() {
  const track = document.querySelector("[data-scene-track]");
  const caption = document.querySelector("[data-scene-caption]");
  const previous = document.querySelector("[data-scene-prev]");
  const next = document.querySelector("[data-scene-next]");
  if (!track || !caption || !previous || !next) return;
  const slides = scenes.map((scene, index) => {
    const slide = el("article", `scene-slide${index === 0 ? " is-active" : ""}`);
    const media = el("div", "scene-slide-media");
    const image = document.createElement("img");
    image.src = scene.src;
    image.alt = `${scene.title} 使用场景`;
    image.loading = index === 0 ? "eager" : "lazy";
    media.append(image);
    slide.append(media);
    track.append(slide);
    return slide;
  });
  let active = 0;
  function render() {
    slides.forEach((slide, index) => slide.classList.toggle("is-active", index === active));
    const slideWidth = slides[0].getBoundingClientRect().width + 24;
    track.style.transform = `translateX(${-active * slideWidth}px)`;
    caption.replaceChildren(el("h3", "", scenes[active].title), el("p", "", scenes[active].copy));
  }
  previous.addEventListener("click", () => { active = (active - 1 + scenes.length) % scenes.length; render(); });
  next.addEventListener("click", () => { active = (active + 1) % scenes.length; render(); });
  window.addEventListener("resize", render);
  render();
}

function initializeFaqs() {
  const list = document.querySelector("[data-faq-list]");
  if (!list) return;
  const items = faqs.map(([question, answer], index) => {
    const item = el("div", `faq-item${index === 0 ? " is-open" : ""}`);
    const button = el("button", "faq-question");
    button.type = "button";
    button.setAttribute("aria-expanded", String(index === 0));
    const icon = el("span", "faq-icon");
    icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    button.append(el("span", "", question), icon);
    const panel = el("div", "faq-answer");
    const inner = el("div", "faq-answer-inner");
    inner.append(el("p", "", answer));
    panel.append(inner);
    button.addEventListener("click", () => {
      const open = !item.classList.contains("is-open");
      items.forEach((candidate) => {
        const isOpen = candidate === item && open;
        candidate.classList.toggle("is-open", isOpen);
        candidate.querySelector("button").setAttribute("aria-expanded", String(isOpen));
      });
    });
    item.append(button, panel);
    list.append(item);
    return item;
  });
}

function initializeReveal() {
  const nodes = [...document.querySelectorAll(".reveal")];
  nodes.forEach((node) => node.style.setProperty("--reveal-delay", `${Number(node.dataset.delay || 120)}ms`));
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0 });
  nodes.forEach((node) => observer.observe(node));
}

function initializeMenu() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!button || !nav) return;
  function setOpen(open) {
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "关闭导航菜单" : "打开导航菜单");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  }
  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (event) => { if (event.target.closest("a")) setOpen(false); });
}

function initializeHeaderGlass() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  let scheduled = false;
  function update() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
    header.classList.toggle("is-footer", window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 1);
    scheduled = false;
  }
  function onScroll() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  }
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initializeFooterLogoMarquee() {
  const viewport = document.querySelector("[data-footer-logo-marquee]");
  const track = document.querySelector("[data-footer-logo-track]");
  const firstTile = track?.firstElementChild;
  if (!viewport || !track || !firstTile || reduceMotion.matches) return;
  let tileSize = 0;
  let target = window.scrollY * 0.6;
  let current = target;
  let frame = 0;
  let previousTime = 0;
  let lastScrollY = window.scrollY;
  function measureViewport() {
    document.documentElement.style.setProperty("--page-width", `${document.documentElement.clientWidth}px`);
  }
  function measure() {
    measureViewport();
    const styles = window.getComputedStyle(track);
    tileSize = firstTile.getBoundingClientRect().width + parseFloat(styles.columnGap || styles.gap || "0");
  }
  function render(time = performance.now()) {
    const elapsed = previousTime ? Math.min(64, time - previousTime) : 16;
    previousTime = time;
    const distance = target - current;
    if (Math.abs(distance) < 0.25) {
      current = target;
      frame = 0;
      previousTime = 0;
      if (tileSize > 0) {
        const loopOffset = ((current % tileSize) + tileSize) % tileSize;
        track.style.transform = `translate3d(${-loopOffset}px, 0, 0)`;
      }
      return;
    }
    current += distance * (1 - Math.pow(0.5, elapsed / 120));
    if (tileSize > 0) {
      const loopOffset = ((current % tileSize) + tileSize) % tileSize;
      track.style.transform = `translate3d(${-loopOffset}px, 0, 0)`;
    }
    frame = window.requestAnimationFrame(render);
  }
  function requestRender() {
    if (!frame) frame = window.requestAnimationFrame(render);
  }
  function onScroll() {
    const nextScrollY = window.scrollY;
    target += (nextScrollY - lastScrollY) * 0.6;
    lastScrollY = nextScrollY;
    requestRender();
  }
  function atPageEnd() {
    return window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 1;
  }
  function onWheel(event) {
    if (event.deltaY <= 0 || !atPageEnd()) return;
    event.preventDefault();
    target += event.deltaY * 0.6;
    requestRender();
  }
  let touchY = 0;
  function onTouchStart(event) {
    touchY = event.touches[0]?.clientY ?? 0;
  }
  function onTouchMove(event) {
    if (!atPageEnd()) return;
    const nextTouchY = event.touches[0]?.clientY ?? touchY;
    const delta = touchY - nextTouchY;
    touchY = nextTouchY;
    if (delta <= 0) return;
    event.preventDefault();
    target += delta * 0.6;
    requestRender();
  }
  measure();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: false });
  window.addEventListener("resize", () => { measure(); requestRender(); }, { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(() => { measure(); requestRender(); }).observe(viewport);
  render();
}

function initializeFooterHeight() {
  const footer = document.querySelector(".site-footer");
  if (!footer) return;
  const sync = () => {
    document.documentElement.style.setProperty("--footer-height", `${Math.ceil(footer.scrollHeight)}px`);
  };
  sync();
  window.addEventListener("resize", sync, { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(sync).observe(footer);
}

function startLiveReload() {
  let version = null;
  window.setInterval(async () => {
    try {
      const response = await fetch("/__tietie_version", { cache: "no-store" });
      if (!response.ok) return;
      const result = await response.json();
      if (version === null) version = result.version;
      else if (version !== result.version) window.location.reload();
    } catch {}
  }, 750);
}

initializeHeaderGlass();
initializeMenu();
initializeHero();
initializeTags();
document.querySelectorAll("[data-feature-deck]").forEach((section) => {
  const index = Number(section.dataset.featureDeck);
  initializeFeatureDeck(section, featureDecks[index], index === 1);
});
initializeCapabilities();
initializeScenes();
initializeFaqs();
initializeReveal();
initializeFooterHeight();
initializeFooterLogoMarquee();
startLiveReload();
