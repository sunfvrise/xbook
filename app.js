const stages = {
  preop: {
    label: "术前预康复 / 手术前",
    title: "提前准备，让术后恢复更从容。",
    description: "术前先熟悉康复过程，与手术团队确认适用方案。原指南的预康复包括下肢近端肌力、冷敷方法和助行器具使用，也关注心理准备。",
    goals: ["与团队确认手术方式、术后固定及负重安排，预览早期保护阶段。", "由康复师确认适合的髋部训练体位与动作，留意当前踝关节症状。", "提前学习冷敷、充气靴和拐杖或助行器的使用，准备居家防跌倒环境。"],
    boundary: "术前预康复不是术后训练许可。新近肿痛或不稳加重时先复核，不把术后周数表理解为自动进阶安排。"
  },
  protect: {
    label: "保护期 / 术后 0–14 天",
    title: "先让修复组织得到保护。",
    description: "这一阶段的重点是固定保护。不要急着练站立或走路；固定、伤口护理与复诊安排，按手术团队的要求执行。",
    goals: ["保持规定的石膏或固定保护，不自行拆除。", "患侧不负重；移动与辅助工具使用按医嘱。", "与团队确认近端及对侧肌力维护的许可。"],
    boundary: "不要把筷子等硬物伸入石膏。此阶段不使用下方站立或去靴训练卡。"
  },
  restore: {
    label: "恢复控制 / 术后 2–6 周",
    title: "在保护中，慢慢找回控制。",
    description: "靴保护下的行走、许可范围内的活动和感觉训练，是这个阶段的阅读重点。负重程度与是否可以去靴训练，需要单独确认。",
    goals: ["6 周以内不无保护行走；负重限制以医嘱为准。", "获准后，了解坐位感觉输入与中立位等长外翻。", "避免足内翻，留意疼痛、肿胀与伤口状态。"],
    boundary: "获准脱靴坐位练习，不等于获准脱靴行走。不要按周数自行增加负重。"
  },
  balance: {
    label: "早期康复 / 术后 6 周以后",
    title: "从走路质量和基础平衡开始。",
    description: "先确认已获准去靴全负重，并适合基础平衡训练。关注步态、活动范围和动作质量，逐步恢复日常行走的信心。",
    goals: ["有许可且症状稳定时，从稳定地面的双脚平衡起步。", "让足第 2 趾与膝中点朝前，使用稳固支撑防跌倒。", "当天与次日复核身体反应，再与康复师讨论进阶。"],
    boundary: "满 6 周不代表自动去靴。单脚、闭眼、跳跃或跑步需要额外评估与许可。"
  },
  late: {
    label: "后期康复 / 术后 8–12 周",
    title: "先评估，再考虑慢跑与强化。",
    description: "这一章节面向有运动恢复目标的人群。先由康复师评估肌力、平衡和步态，再安排动态控制及跳跃等训练。",
    goals: ["肌力至少达到健侧 90%，并具备良好静态平衡。", "正常步态下改变方向或转向时无痛。", "跳跃须单独获准并由康复师指导，普通生活恢复不必完成。"],
    boundary: "连续 25 次单腿提踵只是原文开启强化训练的一项条件，不能替代其他评估或直接授权跳跃。"
  },
  sport: {
    label: "重返运动 / 术后 12–16 周",
    title: "从功能评估，走向专项运动。",
    description: "根据运动目标与测试结果讨论加速、变向和灵敏训练。已有基础训练是否继续，由康复师结合当前功能安排。",
    goals: ["由专业人员评估 SEBT / YEBT 和跳跃测试。", "原文要求相关测试准确性超过 90%，测量方法需专业解释。", "专项训练根据动作质量和症状反应逐步安排。"],
    boundary: "到达 12 周不代表可以直接跑跳或变向。本地资料没有这些专项动作的视频，不用其他示范替代。"
  },
  competition: {
    label: "重返竞技 / 术后 16 周以后",
    title: "先适应全面训练，再讨论比赛。",
    description: "回到竞技需要功能与心理准备共同达标。日常生活恢复者可与团队复核生活目标，无需照搬竞技训练。",
    goals: ["无动态控制障碍，远近端力量和动作质量恢复。", "能够完成全量训练，且症状不增加。", "本人准备充分，并与治疗团队共同决定重返比赛。"],
    boundary: "满 16 周不等于康复完成。竞技环境、疲劳或复杂地面训练需要个体安排。"
  }
};

const stageContent = {
  preop: { exercises: [], featured: ["hip"], extra: [], heading: "术前预康复 · 近端肌力与生活准备", note: "下方为原指南术前髋部示范。先由康复师确认当前状态、动作和体位；次数、幅度和速度个体安排，出现疼痛、肿胀或不稳加重时停止并联系团队。" },
  protect: { exercises: [], featured: ["hip", "protected"], extra: [], heading: "保护期 · 先确认固定与近端训练", note: "患侧不负重。下方仅供理解近端肌力与缩足动作；固定内如何练习须先由团队确认。" },
  restore: { exercises: ["sensory", "control"], featured: [], extra: ["angles", "hip"], heading: "恢复控制 · 坐位感觉与等长训练", note: "先获准去靴坐位训练；负重、活动角度与阻力分别按医嘱确认。" },
  balance: { exercises: ["balance"], featured: [], extra: ["progress", "strength", "hip"], heading: "早期康复 · 步态与基础平衡", note: "先取得去靴全负重及基础平衡训练许可。单腿与不稳定表面属于额外进阶。" },
  late: { exercises: [], featured: ["sport"], extra: ["strength", "progress"], heading: "后期康复 · 专业指导下的动态控制", note: "下方跳跃示范仅供获准后在康复师指导下使用。不能根据日期直接开始。" },
  sport: { exercises: [], featured: [], extra: [], heading: "重返运动 · 先完成专业测试", note: "当前章节重点是功能测试和专项安排。原始资料未提供对应专项视频，请由康复师示教；可通过上方阶段导航复习基础动作。" },
  competition: { exercises: [], featured: [], extra: [], heading: "重返竞技 · 核对全面训练反应", note: "本阶段以训练耐受、动作质量和准备度复核为主，没有对应原始媒体。请与团队制定比赛安排；可通过阶段导航复习已有动作。" }
};

const exercises = {
  sensory: {
    title: "找回足部的感觉",
    permission: "适用阅读阶段：术后 2–6 周。先确认医生允许去靴坐位感觉训练，且伤口与皮肤状态适合接触。脱靴训练不等于脱靴行走。",
    steps: ["在稳固的椅子上坐好，依团队要求取下靴。不要自行拆除石膏。", "在许可范围内让足平放，保持位置，避免足向内翻。", "由康复师先示教原文的足底轻柔摩擦、足上下轻拍，确认接触部位与力度后再练习；避开伤口及异常皮肤。", "注意足部感觉及疼痛、肿胀的变化。出现不适加重时停止。"],
    note: "不把坐位接触地面理解为允许站立负重。次数、时长与力度由治疗团队确定。来源：原始指南第（二）阶段。"
  },
  control: {
    title: "轻轻用力，保持位置",
    permission: "适用阅读阶段：术后 2–6 周。仅在团队明确允许中立位等长外翻后练习；中立位、支撑方式和阻力需先由康复师确认。",
    steps: ["坐稳，按康复师示教支撑小腿与足部，将踝放在中立位。", "用康复师指定的方式提供外侧支撑，轻轻尝试向外侧用力，同时保持踝关节的位置。", "观察足的位置：等长用力时关节不发生明显运动，不做大范围主动翻转，也不向内翻。", "出现疼痛、肿胀增加或不能保持位置时停止，请康复师重新检查。"],
    note: "此卡帮助理解动作，不规定阻力或保持时长；首次操作请接受示教。来源：原始指南第（二）阶段。"
  },
  balance: {
    title: "从双脚站稳开始",
    permission: "适用阅读阶段：术后 6 周以后。已获准脱靴全负重及基础平衡训练，且适合站立、没有新近肿痛加重，才能尝试。",
    steps: ["选择平坦、稳定、防滑的地面，旁边放稳固支撑，并请旁人保护。", "双脚站立，在康复师允许的范围内适度缩窄两脚距离。这里是缩窄脚距，不是站在狭窄台面上。", "保持双脚足第 2 趾与膝中点朝向前方，眼睛睁开；必要时扶稳支撑。", "专注于站稳和姿势。疼痛、肿胀增加、身体不稳或动作变形时，停止当次练习。"],
    note: "不自行加上单脚站立、闭眼或平衡垫。练习时长由康复师确定，练后及次日核对反应。来源：原始指南第（三）阶段“平衡”。"
  }
};

const media = [
  { id: "rub", group: "basic", exercise: "sensory", type: "video", file: "7视频足摩擦.mp4", title: "足底摩擦", label: "2–6 周 · 坐位感觉训练", permission: "获准去靴坐位训练且皮肤适合接触后；避免内翻，去靴训练不等于去靴行走。" },
  { id: "tap", group: "basic", exercise: "sensory", type: "video", file: "8视频足上下轻拍.mp4", title: "足上下轻拍", label: "2–6 周 · 坐位感觉训练", permission: "获准后坐位练习，保持足平放、避免内翻；不根据视频自行增加负重。" },
  { id: "neutral", group: "basic", exercise: "control", type: "image", file: "图1 在中立位练习等长外翻收缩.jpg", title: "中立位等长外翻", label: "2–6 周 · 获准等长外翻后", permission: "支撑方式与阻力由康复师确认，保持关节位置，不做明显翻转。", alt: "原指南图1：坐位，用毛巾支撑足部，在中立位练习等长外翻收缩。" },
  { id: "narrow", group: "basic", exercise: "balance", type: "image", file: "图4 窄支撑面站立.jpg", title: "双脚窄支撑面站立", label: "6 周后 · 获准脱靴全负重及平衡训练", permission: "平坦稳定地面缩窄脚距，旁边有稳固支撑与旁人保护；不要照搬图中无扶持姿势。", alt: "原指南图4：示范者在平坦地面上缩窄脚距、双脚站立。居家练习需稳固支撑和旁人保护。" },
  ...[
    ["1视频髋关节前屈.mp4", "髋关节前屈"],
    ["2视频髋关节后伸.mp4", "髋关节后伸"],
    ["3视频髋关节外展.mp4", "髋关节外展"],
    ["4视频髋关节内收.mp4", "髋关节内收"],
    ["5视频髋部屈伸轮替运动.mp4", "髋部屈伸轮替运动"]
  ].map(([file, title], index) => ({ id: `hip-${index}`, group: "hip", type: "video", file, title, label: "原文预康复 / 术后近端肌力维护", permission: "术后需确认体位、患侧保护与动作许可；不按视频的速度自行训练，不让患侧违规负重。" })),
  { id: "short-foot", group: "protected", type: "video", file: "6视频缩足.mp4", title: "缩足内在肌训练", label: "原文即刻阶段 · 先确认固定内训练许可", permission: "视频用于理解足弓收缩；术后不得为了模仿示范而拆石膏或脱离固定，先由团队确认如何执行。" },
  ...[
    ["图2在背伸位练习等长外翻收缩.jpg", "背伸位等长外翻"],
    ["图3在跖屈位练习等长外翻收缩.jpg", "跖屈位等长外翻"]
  ].map(([file, title], index) => ({ id: `angle-${index}`, group: "angles", type: "image", file, title, label: "2–6 周 · 角度变化需单独许可", permission: "获准中立位训练不等于获准所有角度；由康复师确定活动角度、支撑和阻力。", alt: `原指南图${index + 2}：${title}的坐位支撑示范。` })),
  ...[
    ["图5串联站立.jpg", "串联站立"],
    ["图6 单腿站立.jpg", "单腿站立"],
    ["图7 平衡垫.jpg", "平衡垫"],
    ["图8 不稳定支撑面训练.jpg", "不稳定支撑面训练"]
  ].map(([file, title], index) => ({ id: `progress-${index}`, group: "progress", type: "image", file, title, label: "6 周后 · 平衡进阶需额外评估", permission: "只有基础平衡适合且康复师批准后才增加难度。需防跌倒保护，不自行闭眼或站平衡垫。", alt: `原指南图${index + 5}：${title}示例，需要康复师评估和防跌倒保护。` })),
  ...[
    ["图 9 等长外翻强化训练进阶的初始阶段.jpg", "外翻强化 · 初始阶段"],
    ["图 10 训练进阶阶段.jpg", "外翻强化 · 阻力带进阶"]
  ].map(([file, title], index) => ({ id: `strength-${index}`, group: "strength", type: "image", file, title, label: "6 周后 · 强化训练需额外许可", permission: "由康复师确定姿势和阻力。早期中立位动作许可不能直接用于强化训练。", alt: `原指南图${index + 9}：${title}示范。` })),
  { id: "heel", group: "strength", type: "video", file: "19视频单足平地提踵.mp4", title: "单足平地提踵", label: "6 周后 · 从双足进阶需专业确认", permission: "需先具备双足提踵的动作质量并获准进阶；保持后足力线，避免内翻和重心偏到前足外侧。此视频不能代替双足基础示范。" },
  { id: "jump", group: "sport", type: "video", file: "24视频双侧跳跃训练.mp4", title: "双侧跳跃训练", label: "8–12 周后期 · 康复师指导下", permission: "肌力至少健侧 90%、静态平衡良好、正常步态转向无痛等条件均需满足，并取得跳跃许可。满 8 周不自动开始跳跃。" }
];
const mediaGroups = [
  ["hip", "近端肌力维护", "原文预康复及术后近端训练参考；先确认术后体位与保护要求。"],
  ["protected", "固定期动作理解", "视频中的暴露足部用于示范概念，不代表允许拆除固定。"],
  ["angles", "不同角度的等长训练", "角度变化由康复师安排，不从中立位自动进阶。"],
  ["progress", "平衡进阶", "单腿与不稳定表面训练需要额外评估和防跌倒保护。"],
  ["strength", "肌力强化", "先保证基础动作质量，再讨论阻力与单足进阶。"],
  ["sport", "后期运动训练", "普通生活恢复不必完成运动员训练；跳跃由康复师指导。"]
];
const preopHipNotes = [
  "仰卧，躯干贴稳床面，一侧直腿抬起后放下；减少左右摆动，另一侧腿放松。幅度与速度由康复师确认。",
  "俯卧，躯干贴稳床面，足部超出床沿自然放松；一侧腿抬起后放下，保持双腿间距，避免左右摆动。",
  "侧卧，躯干和骨盆稳定，上侧腿抬起后放下，保持腿与躯干在同一直线上。足踝位置先由康复师示教，避免诱发不稳。",
  "侧卧，上侧腿屈膝支撑，下侧直腿抬起后放下；保持躯干和骨盆稳定，避免左右摆动。",
  "仰卧，躯干与骨盆贴稳床面，交替屈伸髋膝，足踝放松。活动幅度与节奏由康复师确认，不照搬视频速度。"
];
function stageMedia(item, key) {
  if (key !== "preop" || item.group !== "hip") return item;
  return { ...item, label: "术前预康复 · 获准近端肌力训练后", permission: `${preopHipNotes[Number(item.id.split("-")[1])]} 疼痛、肿胀或不稳加重时停止并复核。` };
}
function mediaMarkup(item) {
  const url = `./resources/media/${encodeURIComponent(item.file)}`;
  const visual = item.type === "video"
    ? `<div class="media-player"><video controls playsinline webkit-playsinline muted preload="metadata" aria-label="${item.title}原始示范"><source src="${url}" type="video/mp4">浏览器不支持视频，请使用下方链接打开。</video></div>`
    : `<a class="media-image-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="查看${item.title}原始大图（新窗口）"><img src="${url}" alt="${item.alt}" loading="lazy" width="716" height="1274"></a>`;
  const mediaAction = item.type === "image" ? `<a href="${url}" target="_blank" rel="noopener noreferrer">查看大图 ↗</a>` : "";
  return `<figure class="media-card"><div class="media-copy"><span class="tag">${item.label}</span><h4>${item.title}</h4><p>${item.permission}</p></div><div class="media-visual">${visual}</div><figcaption><span>原指南 · ${item.type === "video" ? "视频" : "图片"}示范</span>${mediaAction}</figcaption>${item.type === "video" ? '<p class="media-error" hidden role="status">视频暂时无法播放，请稍后重试。</p>' : ""}</figure>`;
}
const manuallyPaused = new WeakSet();
const automaticPauses = new WeakSet();
const blockedAutoplay = new WeakSet();
const fullscreenVideos = new WeakSet();
const returningVideos = new WeakSet();
function finishFullscreen(video) {
  fullscreenVideos.delete(video);
  returningVideos.add(video);
  // Native fullscreen dismissal changes viewport geometry asynchronously.
  setTimeout(() => {
    returningVideos.delete(video);
    scheduleVideoFocus();
  }, 400);
}
let videoFrame;
function pauseVideo(video) {
  if (!video.paused) {
    automaticPauses.add(video);
    video.pause();
  }
}
function pauseAllVideos() {
  document.querySelectorAll("video").forEach(pauseVideo);
}
function updateVideoFocus() {
  videoFrame = null;
  const openDialog = document.querySelector("dialog[open]");
  const scope = openDialog || document.querySelector("#practice");
  const headerBottom = openDialog ? 0 : Math.max(0, document.querySelector(".header").getBoundingClientRect().bottom);
  const viewportHeight = window.innerHeight;
  const scopeBounds = openDialog?.getBoundingClientRect();
  const top = Math.max(headerBottom, scopeBounds?.top || 0);
  const bottom = Math.min(viewportHeight, scopeBounds?.bottom || viewportHeight);
  const center = (top + bottom) / 2;
  let candidate;
  let nearest = Infinity;
  let nativePlayback = false;
  document.querySelectorAll("video").forEach(video => {
    // Fullscreen is owned by the browser, not the page's sticky navigation.
    if (video.webkitDisplayingFullscreen || fullscreenVideos.has(video) || returningVideos.has(video) || document.fullscreenElement?.contains(video)) {
      candidate = video;
      nearest = -1;
      nativePlayback = true;
      return;
    }
    const player = video.closest(".media-player");
    const rect = player.getBoundingClientRect();
    const visibleHeight = Math.max(0, Math.min(rect.bottom, bottom) - Math.max(rect.top, top));
    const visibleWidth = Math.max(0, Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0));
    const visible = !document.hidden && scope.contains(video) && rect.height > 0 && visibleHeight / rect.height >= 0.55 && visibleWidth / rect.width >= 0.55;
    if (!visible) {
      pauseVideo(video);
      manuallyPaused.delete(video);
      blockedAutoplay.delete(video);
      return;
    }
    const distance = Math.abs((rect.top + rect.bottom) / 2 - center);
    // A video must be near the center, not merely peeking into the viewport.
    if (distance < (bottom - top) * 0.32 && distance < nearest) {
      nearest = distance;
      candidate = video;
    }
  });
  document.querySelectorAll("video").forEach(video => {
    if (video !== candidate) {
      pauseVideo(video);
      blockedAutoplay.delete(video);
    }
  });
  // Do not restart, mute or pause a native fullscreen session based on inline geometry.
  if (nativePlayback) return;
  if (candidate?.paused && !candidate.ended && !manuallyPaused.has(candidate) && !blockedAutoplay.has(candidate)) {
    candidate.muted = true;
    blockedAutoplay.add(candidate);
    candidate.play()?.catch(() => {
      // Native controls remain available when the browser refuses autoplay.
    });
  }
}
function scheduleVideoFocus() {
  if (!videoFrame) videoFrame = requestAnimationFrame(updateVideoFocus);
}
const videoObserver = "IntersectionObserver" in window ? new IntersectionObserver(scheduleVideoFocus, { threshold: [0, 0.25, 0.55, 0.75, 1] }) : null;
window.addEventListener("scroll", scheduleVideoFocus, { passive: true });
window.addEventListener("resize", scheduleVideoFocus);
document.querySelectorAll("dialog").forEach(element => element.addEventListener("scroll", scheduleVideoFocus, { passive: true }));
function setupMedia(root) {
  root.querySelectorAll("video").forEach(video => {
    video.addEventListener("webkitbeginfullscreen", () => {
      fullscreenVideos.add(video);
    });
    video.addEventListener("webkitendfullscreen", () => {
      finishFullscreen(video);
    });
    video.addEventListener("play", () => {
      manuallyPaused.delete(video);
      document.querySelectorAll("video").forEach(other => {
        if (other !== video) pauseVideo(other);
      });
      scheduleVideoFocus();
    });
    video.addEventListener("pause", () => {
      if (automaticPauses.has(video)) automaticPauses.delete(video);
      else manuallyPaused.add(video);
    });
    const showError = () => { video.closest("figure").querySelector(".media-error").hidden = false; };
    video.addEventListener("error", showError);
    video.querySelector("source").addEventListener("error", showError);
    video.addEventListener("loadedmetadata", () => {
      if (video.videoWidth && video.videoHeight) video.style.aspectRatio = `${video.videoWidth} / ${video.videoHeight}`;
      scheduleVideoFocus();
    });
    videoObserver?.observe(video);
  });
  scheduleVideoFocus();
}
let standardFullscreenVideo;
document.addEventListener("fullscreenchange", () => {
  const element = document.fullscreenElement;
  if (element) {
    standardFullscreenVideo = element.matches("video") ? element : element.querySelector("video");
    if (standardFullscreenVideo) {
      fullscreenVideos.add(standardFullscreenVideo);
    }
  } else if (standardFullscreenVideo) {
    finishFullscreen(standardFullscreenVideo);
    standardFullscreenVideo = null;
  }
  scheduleVideoFocus();
});
document.querySelector(".media-library").addEventListener("toggle", event => {
  if (!event.currentTarget.open) event.currentTarget.querySelectorAll("video").forEach(pauseVideo);
  scheduleVideoFocus();
});

const tabs = [...document.querySelectorAll('[role="tab"]')];
const panel = document.querySelector("#stage-panel");
function selectStage(key, focus = false) {
  const stage = stages[key];
  pauseAllVideos();
  videoObserver?.disconnect();
  if (document.querySelector("#exercise-dialog").open) document.querySelector("#exercise-dialog").close();
  tabs.forEach(tab => {
    const selected = tab.dataset.stage === key;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
    tab.classList.toggle("recommended", tab.dataset.stage === recommendedStage);
  });
  const selectedTab = tabs.find(tab => tab.dataset.stage === key);
  if (selectedTab) {
    const tablist = selectedTab.parentElement;
    const bounds = tablist.getBoundingClientRect();
    const selectedBounds = selectedTab.getBoundingClientRect();
    tablist.scrollTo({ left: tablist.scrollLeft + selectedBounds.left - bounds.left - (bounds.width - selectedBounds.width) / 2, behavior: "instant" });
  }
  const returnButton = document.querySelector("#recommended-stage");
  returnButton.hidden = !recommendedStage || key === recommendedStage;
  document.querySelector("#practice").hidden = !stage;
  if (!stage) {
    panel.setAttribute("aria-labelledby", "stage-heading");
    panel.innerHTML = "<p>请填写有效的手术日期，或选择上方阶段手动浏览资料。</p>";
    return;
  }
  panel.setAttribute("aria-labelledby", `tab-${key}`);
  panel.innerHTML = `<div><span class="stage-label">${stage.label}</span><h3>${stage.title}</h3><p>${stage.description}</p></div><div class="stage-goals"><h4>这一阶段，记住三件事</h4><ul>${stage.goals.map(goal => `<li>${goal}</li>`).join("")}</ul><p class="stage-boundary">${stage.boundary}</p></div>`;
  const content = stageContent[key];
  document.querySelector("#practice-heading").textContent = content.heading;
  document.querySelector("#practice-context").textContent = `${stage.label}。${content.note}`;
  document.querySelector("#featured-exercises").innerHTML = content.exercises.map(exerciseKey => {
    const exercise = exercises[exerciseKey];
    return `<article class="exercise-feature"><div class="exercise-instructions"><span class="stage-label">重点动作 · ${stage.label}</span><h3>${exercise.title}</h3><p class="permission">${exercise.permission}</p><ol class="steps">${exercise.steps.map(step => `<li>${step}</li>`).join("")}</ol><p class="dialog-note">${exercise.note}</p><button class="card-button" data-exercise="${exerciseKey}">聚焦查看动作与示范 <span aria-hidden="true">↗</span></button></div><div class="exercise-media">${media.filter(item => item.exercise === exerciseKey).map(mediaMarkup).join("")}</div></article>`;
  }).join("");
  const featured = media.filter(item => content.featured.includes(item.group));
  document.querySelector("#basic-media").innerHTML = featured.map(item => mediaMarkup(stageMedia(item, key))).join("");
  document.querySelector("#preop-preparation").hidden = key !== "preop";
  document.querySelector(".media-heading").hidden = !featured.length;
  document.querySelector(".practice-footnote").hidden = !featured.length && !content.exercises.length;
  const library = document.querySelector(".media-library");
  library.open = false;
  library.hidden = !content.extra.length;
  document.querySelector("#additional-media").innerHTML = mediaGroups.filter(([group]) => content.extra.includes(group)).map(([group, title, description]) => `<section class="media-group"><h3>${title}</h3><p>${description}</p><div class="media-grid">${media.filter(item => item.group === group).map(mediaMarkup).join("")}</div></section>`).join("");
  document.querySelector(".media-credit").hidden = !featured.length && !content.extra.length && !content.exercises.length;
  document.querySelector(".playback-hint").hidden = !featured.some(item => item.type === "video") && !content.extra.length && !content.exercises.some(key => media.some(item => item.exercise === key && item.type === "video"));
  setupMedia(document.querySelector("#practice"));
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    selectStage(tab.dataset.stage);
    document.querySelector("#stage-panel").scrollIntoView({ block: "start" });
  });
  tab.addEventListener("keydown", event => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectStage(tabs[next].dataset.stage, true);
    }
  });
});

const dateInput = document.querySelector("#surgery-date");
const dateResult = document.querySelector("#date-result");
const dateStorageKey = "ankle-rehab-start-date";
const dateConfirmationKey = "ankle-rehab-date-confirmed";
const dateDialog = document.querySelector("#date-dialog");
let confirmedDate = "";
let recommendedStage = null;
let dateSubmissionPending = false;
let dateStorageAvailable = true;
function localDateString(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function calendarDay(date) {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000;
}
function parseStartDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return year >= 1900 && date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
}
function saveStartDate(value, confirmed = false) {
  try {
    localStorage.setItem(dateStorageKey, value);
    if (confirmed) localStorage.setItem(dateConfirmationKey, value);
    dateStorageAvailable = true;
  } catch {
    dateStorageAvailable = false;
  }
}
function showCurrentStage() {
  document.querySelector("#stages").scrollIntoView({ block: "start", behavior: "instant" });
  panel.focus({ preventScroll: true });
}
function refreshDate(jump = false) {
  const now = new Date();
  const storageNotice = dateStorageAvailable ? "日期已在本机记住，可随时修改。" : "本次可使用日期；浏览器未允许本地保存。";
  const chosen = parseStartDate(confirmedDate);
  recommendedStage = null;
  if (!chosen) {
    selectStage(null);
    dateResult.textContent = "请在右上角确认手术日期，或点击阶段自由浏览资料。";
    return;
  }
  const days = calendarDay(now) - calendarDay(chosen);
  const count = Math.abs(days);
  document.querySelector("#date-status-label").textContent = days < 0 ? `距手术还有 ${count} 天` : `手术已结束 ${days} 天`;
  document.querySelector("#date-status-detail").textContent = `${Math.floor(count / 7)} 周 ${count % 7} 天 · ${confirmedDate} · 修改 ↗`;
  if (days < 0) {
    recommendedStage = "preop";
    selectStage(recommendedStage);
    dateResult.textContent = `计划手术日 ${confirmedDate}，还有 ${count} 天（${Math.floor(count / 7)} 周 ${count % 7} 天）。${storageNotice}`;
    if (jump) showCurrentStage();
    return;
  }
  recommendedStage = days < 14 ? "protect" : days < 42 ? "restore" : days < 56 ? "balance" : days < 84 ? "late" : days < 112 ? "sport" : "competition";
  selectStage(recommendedStage);
  dateResult.textContent = `按本机今天（${localDateString(now)}）计算：距手术 ${days} 天，已过 ${Math.floor(days / 7)} 周 ${days % 7} 天。${storageNotice}已定位阅读章节，不能据此取得练习许可。`;
  if (jump) showCurrentStage();
}
dateInput.value = localDateString(new Date());
try {
  const saved = localStorage.getItem(dateStorageKey);
  if (parseStartDate(saved)) dateInput.value = saved;
  if (parseStartDate(saved) && localStorage.getItem(dateConfirmationKey) === saved) confirmedDate = saved;
  // Old automatically saved dates need one explicit confirmation.
  if (saved === null) saveStartDate(dateInput.value);
} catch {
  dateStorageAvailable = false;
}
function openDateDialog() {
  pauseAllVideos();
  dateSubmissionPending = false;
  if (confirmedDate) dateInput.value = confirmedDate;
  document.querySelector("#date-title").textContent = confirmedDate ? "修改手术日期" : "先确认你的手术日期";
  document.querySelector("#date-error").hidden = true;
  dateDialog.showModal();
  document.body.classList.add("modal-open");
  dateInput.focus();
}
document.querySelector("#edit-date").addEventListener("click", openDateDialog);
document.querySelector("#close-date").addEventListener("click", () => dateDialog.close());
dateDialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  const submitted = dateSubmissionPending;
  dateSubmissionPending = false;
  if (submitted) setTimeout(() => refreshDate(true), 0);
  else document.querySelector("#edit-date").focus({ preventScroll: true });
  scheduleVideoFocus();
});
document.querySelector("#date-form").addEventListener("submit", event => {
  event.preventDefault();
  if (!parseStartDate(dateInput.value)) {
    document.querySelector("#date-error").textContent = "请选择有效的手术日期。";
    document.querySelector("#date-error").hidden = false;
    return;
  }
  confirmedDate = dateInput.value;
  saveStartDate(confirmedDate, true);
  dateSubmissionPending = true;
  dateDialog.close();
});
document.querySelector("#recommended-stage").addEventListener("click", () => {
  selectStage(recommendedStage);
  document.querySelector("#stages").scrollIntoView({ block: "start" });
});
// Refresh against the local calendar when returning to a page left open overnight.
document.addEventListener("visibilitychange", () => {
  if (document.hidden) pauseAllVideos();
  if (!document.hidden) refreshCalendar();
  scheduleVideoFocus();
});
let lastCalendarDate = localDateString(new Date());
let midnightTimer;
function refreshCalendar() {
  const now = new Date();
  const today = localDateString(now);
  if (today !== lastCalendarDate) {
    lastCalendarDate = today;
    refreshDate();
  }
  clearTimeout(midnightTimer);
  midnightTimer = setTimeout(refreshCalendar, new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now + 100);
}
window.addEventListener("focus", refreshCalendar);
refreshCalendar();
refreshDate(Boolean(confirmedDate) && (!location.hash || location.hash === "#stages"));
if (!confirmedDate) openDateDialog();

const dialog = document.querySelector("#exercise-dialog");
let dialogTrigger;
document.querySelector("#featured-exercises").addEventListener("click", event => {
    const button = event.target.closest("[data-exercise]");
    if (!button) return;
    const exercise = exercises[button.dataset.exercise];
    pauseAllVideos();
    dialog.querySelectorAll("video").forEach(video => videoObserver?.unobserve(video));
    dialogTrigger = button;
    document.querySelector("#dialog-content").innerHTML = `<h2 id="dialog-title">${exercise.title}</h2><p class="permission">${exercise.permission}</p><ol class="steps">${exercise.steps.map(step => `<li>${step}</li>`).join("")}</ol><div class="dialog-media">${media.filter(item => item.exercise === button.dataset.exercise).map(mediaMarkup).join("")}</div><p class="dialog-note">${exercise.note}</p>`;
    setupMedia(document.querySelector("#dialog-content"));
    dialog.showModal();
    document.body.classList.add("modal-open");
    document.querySelector("#close-dialog").focus();
});
document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
document.querySelector("#dialog-done").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener("close", () => {
  dialog.querySelectorAll("video").forEach(video => {
    pauseVideo(video);
    videoObserver?.unobserve(video);
  });
  document.body.classList.remove("modal-open");
  dialogTrigger?.focus({ preventScroll: true });
  scheduleVideoFocus();
});
