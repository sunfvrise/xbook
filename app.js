const stages = {
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
  }
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
function mediaMarkup(item) {
  const url = `./resources/media/${encodeURIComponent(item.file)}`;
  const visual = item.type === "video"
    ? `<video controls playsinline preload="none" aria-label="${item.title}原始示范"><source src="${url}" type="video/mp4">浏览器不支持视频，请使用下方链接打开。</video>`
    : `<a class="media-image-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="查看${item.title}原始大图（新窗口）"><img src="${url}" alt="${item.alt}" loading="lazy" width="716" height="1274"></a>`;
  return `<figure class="media-card"><div class="media-copy"><span class="tag">${item.label}</span><h4>${item.title}</h4><p>${item.permission}</p></div><div class="media-visual">${visual}</div><figcaption><span>原指南 · ${item.type === "video" ? "视频" : "图片"}示范</span><a href="${url}" target="_blank" rel="noopener noreferrer">${item.type === "video" ? "打开原视频" : "查看大图"} ↗</a></figcaption>${item.type === "video" ? '<p class="media-error" hidden role="status">视频暂时无法播放，请使用“打开原视频”链接查看。</p>' : ""}</figure>`;
}
document.querySelector("#basic-media").innerHTML = media.filter(item => item.group === "basic").map(mediaMarkup).join("");
document.querySelector("#additional-media").innerHTML = mediaGroups.map(([key, title, description]) => `<section class="media-group"><h3>${title}</h3><p>${description}</p><div class="media-grid">${media.filter(item => item.group === key).map(mediaMarkup).join("")}</div></section>`).join("");
function setupMedia(root) {
  root.querySelectorAll("video").forEach(video => {
    video.addEventListener("play", () => {
      document.querySelectorAll("video").forEach(other => {
        if (other !== video) other.pause();
      });
    });
    const showError = () => { video.closest("figure").querySelector(".media-error").hidden = false; };
    video.addEventListener("error", showError);
    video.querySelector("source").addEventListener("error", showError);
  });
}
setupMedia(document);
document.querySelector(".media-library").addEventListener("toggle", event => {
  if (!event.currentTarget.open) event.currentTarget.querySelectorAll("video").forEach(video => video.pause());
});

const tabs = [...document.querySelectorAll('[role="tab"]')];
const panel = document.querySelector("#stage-panel");
function selectStage(key, focus = false) {
  const stage = stages[key];
  tabs.forEach(tab => {
    const selected = tab.dataset.stage === key;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });
  panel.setAttribute("aria-labelledby", `tab-${key}`);
  panel.innerHTML = `<div><span class="stage-label">${stage.label}</span><h3>${stage.title}</h3><p>${stage.description}</p></div><div class="stage-goals"><h4>这一阶段，记住三件事</h4><ul>${stage.goals.map(goal => `<li>${goal}</li>`).join("")}</ul><p class="stage-boundary">${stage.boundary}</p></div>`;
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectStage(tab.dataset.stage));
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
selectStage("protect");

const dateInput = document.querySelector("#surgery-date");
const dateResult = document.querySelector("#date-result");
const dateStorageKey = "ankle-rehab-start-date";
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
function saveStartDate() {
  try {
    localStorage.setItem(dateStorageKey, dateInput.value);
    dateStorageAvailable = true;
  } catch {
    dateStorageAvailable = false;
  }
}
function refreshDate() {
  const now = new Date();
  dateInput.max = localDateString(now);
  const storageNotice = dateStorageAvailable ? "日期已在本机记住，可随时修改。" : "本次可使用日期；浏览器未允许本地保存。";
  if (!dateInput.value) {
    dateResult.textContent = dateStorageAvailable ? "日期已清除，可重新选择；本机将记住清除状态。" : "请选择日期；浏览器未允许本地保存。";
    return true;
  }
  const chosen = parseStartDate(dateInput.value);
  if (!chosen) {
    dateResult.textContent = "请填写有效的手术日期。";
    return false;
  }
  const days = calendarDay(now) - calendarDay(chosen);
  if (days < 0) {
    dateResult.textContent = "手术日期晚于今天，请核对日期；术前不能按术后阶段练习。";
    return false;
  }
  const key = days < 14 ? "protect" : days < 42 ? "restore" : "balance";
  selectStage(key);
  dateResult.textContent = `按本机今天（${localDateString(now)}）计算：距手术 ${days} 天，已过 ${Math.floor(days / 7)} 周 ${days % 7} 天。${storageNotice}已定位阅读章节，不能据此取得练习许可。`;
  return true;
}
dateInput.min = "1900-01-01";
dateInput.value = localDateString(new Date());
try {
  const saved = localStorage.getItem(dateStorageKey);
  const savedDate = saved === null || saved === "" ? null : parseStartDate(saved);
  if (saved === "" || (savedDate && calendarDay(savedDate) <= calendarDay(new Date()))) dateInput.value = saved;
} catch {
  dateStorageAvailable = false;
}
// Keep the first visit's start date fixed when the patient returns on a later day.
saveStartDate();
dateInput.addEventListener("input", () => {
  if (refreshDate()) {
    saveStartDate();
    refreshDate();
  }
});
document.querySelector("#clear-date").addEventListener("click", () => {
  dateInput.value = "";
  saveStartDate();
  refreshDate();
  dateInput.focus();
});
// Refresh against the local calendar when returning to a page left open overnight.
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) refreshDate();
});
window.addEventListener("focus", refreshDate);
refreshDate();

const dialog = document.querySelector("#exercise-dialog");
let dialogTrigger;
document.querySelectorAll("[data-exercise]").forEach(button => {
  button.addEventListener("click", () => {
    const exercise = exercises[button.dataset.exercise];
    dialogTrigger = button;
    document.querySelector("#dialog-content").innerHTML = `<h2 id="dialog-title">${exercise.title}</h2><p class="permission">${exercise.permission}</p><div class="dialog-media">${media.filter(item => item.exercise === button.dataset.exercise).map(mediaMarkup).join("")}</div><ol class="steps">${exercise.steps.map(step => `<li>${step}</li>`).join("")}</ol><p class="dialog-note">${exercise.note}</p>`;
    setupMedia(document.querySelector("#dialog-content"));
    dialog.showModal();
    document.body.classList.add("modal-open");
    document.querySelector("#close-dialog").focus();
  });
});
document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
document.querySelector("#dialog-done").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener("close", () => {
  dialog.querySelectorAll("video").forEach(video => video.pause());
  document.body.classList.remove("modal-open");
  dialogTrigger?.focus();
});
