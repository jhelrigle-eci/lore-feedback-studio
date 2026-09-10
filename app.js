const ITEMS = [
  {
    key: "CORP11-184",
    kind: "bug",
    title: "Factory work order stays in Review after the merge wait",
    happened: "The work order timer keeps running after the PR is merged. Review never flips to Done.",
    expected: "Elapsed time should skip the merge wait, and Review should settle once the PR lands.",
    steps: ["Open a work order waiting on auto-merge", "Merge the PR", "Watch the Review phase"],
    severity: "high",
    status: "progress",
    outcome: null,
    submitter: { name: "Avery Chen", email: "achen@eci", initials: "AC" },
    assignee: { name: "Jordan Hale", initials: "JH" },
    url: "/factory/work-orders/8f21",
    createdAt: "2026-09-09T12:10:00Z",
    age: "2h",
    shots: ["factory", "chat"],
    workOrder: { title: "Fix Review settle after merge wait", status: "draft" },
    comments: [
      { name: "Jordan Hale", initials: "JH", at: "1h ago", text: "Claimed. Reproduced on the overlap work order. The wait gate is still marked Running." },
      { name: "Avery Chen", initials: "AC", at: "40m ago", text: "Screenshot of the timer is the second attachment." },
    ],
    mine: false,
    claimHours: 1,
  },
  {
    key: "CORP11-221",
    kind: "bug",
    title: "Factory log drawer loses the selected step",
    happened: "I click a failed step, the run refreshes, and the drawer jumps back to the first event.",
    expected: "The selected step stays selected across refresh.",
    steps: ["Open a running work order", "Select a failed step", "Wait for the next log poll"],
    severity: "medium",
    status: "progress",
    outcome: null,
    submitter: { name: "You", email: "jhelrigle@eci", initials: "JH" },
    assignee: { name: "Riley Cho", initials: "RC" },
    url: "/factory/work-orders/8f21",
    createdAt: "2026-09-09T18:40:00Z",
    age: "6h",
    shots: ["factory"],
    workOrder: { title: "Keep Factory log selection across refresh", status: "running" },
    comments: [
      { name: "Riley Cho", initials: "RC", at: "3h ago", text: "Reproduced on the remount. Started a work order." },
    ],
    mine: true,
    claimHours: 3,
  },
  {
    key: "CORP11-214",
    kind: "enhancement",
    title: "Remember the last repo when I open Search",
    why: "I bounce between three repos a day. Search always dumps me on the org default.",
    want: "Open Search on the last repo I used, with a way to switch.",
    where: "Search.",
    severity: null,
    status: "progress",
    outcome: null,
    submitter: { name: "You", email: "jhelrigle@eci", initials: "JH" },
    assignee: { name: "Jordan Hale", initials: "JH" },
    url: "/search",
    createdAt: "2026-09-09T14:05:00Z",
    age: "12h",
    shots: ["search"],
    workOrder: null,
    comments: [
      { name: "Jordan Hale", initials: "JH", at: "8h ago", text: "Claimed. I'll pick this up after the path-filter bug." },
    ],
    mine: true,
    claimHours: 4,
  },
  {
    key: "CORP11-176",
    kind: "bug",
    title: "Zoekt drops the path filter on the second query",
    happened: "The first search respects path:web/src. The second search in the same session searches the whole repo.",
    expected: "Path filters stay until I clear them.",
    steps: ["Set a path filter", "Run a search", "Change the query and search again"],
    severity: "high",
    status: "todo",
    outcome: null,
    submitter: { name: "Sam Ortega", email: "sortega@eci", initials: "SO" },
    assignee: null,
    url: "/repos/eci-nexus/lore/search",
    createdAt: "2026-09-08T16:40:00Z",
    age: "1d",
    shots: ["search", "search"],
    workOrder: null,
    comments: [],
    mine: false,
  },
  {
    key: "CORP11-155",
    kind: "bug",
    title: "Submit dialog does not capture the page I was on",
    happened: "I filed from a broken Factory page. The item has no URL. Docs still say the page is attached automatically.",
    expected: "Context URL is recorded unless I clear it.",
    steps: ["Open any page", "Send feedback", "Look at the new item"],
    severity: "medium",
    status: "todo",
    outcome: null,
    submitter: { name: "You", email: "jhelrigle@eci", initials: "JH" },
    assignee: null,
    url: "",
    createdAt: "2026-09-08T09:15:00Z",
    age: "1d",
    shots: [],
    workOrder: null,
    comments: [{ name: "Riley Cho", initials: "RC", at: "5h ago", text: "This is the placeholder vs default mix-up. The field is empty on purpose right now." }],
    mine: true,
  },
  {
    key: "CORP11-191",
    kind: "enhancement",
    title: "Keep the Docs tab readable in Lore Synth",
    why: "Long-form docs wash out against the fuchsia haze. I stop reading and open the markdown in the repo instead.",
    want: "A reading width, calmer surfaces, and type that holds up in the neon themes.",
    where: "Docs tab, every theme in the neon family.",
    severity: null,
    status: "todo",
    outcome: null,
    submitter: { name: "Morgan Ellis", email: "mellis@eci", initials: "ME" },
    assignee: null,
    url: "/docs",
    createdAt: "2026-09-07T18:02:00Z",
    age: "2d",
    shots: ["docs"],
    workOrder: null,
    comments: [],
    mine: false,
  },
  {
    key: "CORP11-188",
    kind: "enhancement",
    title: "Attribute feedback to a product, not only a URL",
    why: "A URL is a moment. Triage needs the product. We already have product cohorts.",
    want: "An optional product picker on submit, defaulted from the page I am on.",
    where: "Feedback submit + list filters.",
    severity: null,
    status: "progress",
    outcome: null,
    submitter: { name: "Priya Nair", email: "pnair@eci", initials: "PN" },
    assignee: { name: "You", initials: "JH" },
    url: "/feedback",
    createdAt: "2026-09-06T14:20:00Z",
    age: "3d",
    shots: [],
    workOrder: { title: "Product attribution on feedback", status: "running" },
    comments: [{ name: "You", initials: "JH", at: "2d ago", text: "Started a work order. Filter comes after submit." }],
    mine: false,
    claimHours: 6,
  },
  {
    key: "CORP11-201",
    kind: "idea",
    title: "Slash command on the Teams bot for repo search",
    happened: "I want /lore search path:web feedback from a standup chat without opening the SPA.",
    expected: "",
    steps: [],
    severity: null,
    status: "todo",
    outcome: null,
    submitter: { name: "Chris Dalton", email: "cdalton@eci", initials: "CD" },
    assignee: null,
    url: "",
    createdAt: "2026-09-05T11:00:00Z",
    age: "9d",
    shots: [],
    workOrder: null,
    comments: [],
    mine: false,
  },
  {
    key: "CORP11-172",
    kind: "bug",
    title: "Feedback dashboard opens on Resolved",
    happened: "I submitted a bug and landed on a table of finished items. Unresolved is the other tab.",
    expected: "Inbox of open items is the default.",
    steps: ["Go to /feedback"],
    severity: "low",
    status: "todo",
    outcome: null,
    submitter: { name: "You", email: "jhelrigle@eci", initials: "JH" },
    assignee: null,
    url: "/feedback",
    createdAt: "2026-09-04T15:44:00Z",
    age: "5d",
    shots: [],
    workOrder: null,
    comments: [],
    mine: true,
  },
  {
    key: "CORP11-198",
    kind: "idea",
    title: "Dark mode per repository instead of per user",
    happened: "I want Docs in light and Factory in Synth without flipping the whole app.",
    expected: "",
    steps: [],
    severity: null,
    status: "done",
    outcome: "rejected",
    resolutionNote: "Themes stay per person. A repo-level override would fight the shared chrome, so we are not taking this.",
    submitter: { name: "You", email: "jhelrigle@eci", initials: "JH" },
    assignee: { name: "Riley Cho", initials: "RC" },
    url: "/docs",
    createdAt: "2026-08-25T11:20:00Z",
    age: "16d",
    shots: ["docs"],
    workOrder: null,
    comments: [
      { name: "Riley Cho", initials: "RC", at: "11d ago", text: "Looked at this with the theme work. One theme per user is the line we are holding." },
    ],
    mine: true,
    claimHours: 10,
    doneHours: 120,
    resolvedAt: "2026-09-02T16:00:00Z",
  },
  {
    key: "CORP11-210",
    kind: "idea",
    title: "Show Jira comments on the Lore feedback item",
    happened: "The conversation already lives on CORP11. Lore only shows the original message.",
    expected: "",
    steps: [],
    severity: null,
    status: "todo",
    outcome: null,
    submitter: { name: "Alex Kim", email: "akim@eci", initials: "AK" },
    assignee: null,
    url: "/feedback",
    createdAt: "2026-09-03T10:12:00Z",
    age: "8d",
    shots: [],
    workOrder: null,
    comments: [],
    mine: false,
  },
  {
    key: "CORP11-168",
    kind: "enhancement",
    title: "Keyboard shortcut to file feedback from any page",
    why: "The header icon is easy to miss once you are inside a long Factory run.",
    want: "Shift+F opens a type-aware compose sheet and keeps my page.",
    where: "Global header.",
    severity: null,
    status: "done",
    outcome: "implemented",
    resolutionNote: "Shipped as the header shortcut in desktop. Web still pending.",
    submitter: { name: "You", email: "jhelrigle@eci", initials: "JH" },
    assignee: { name: "Riley Cho", initials: "RC" },
    url: "/",
    createdAt: "2026-08-20T09:00:00Z",
    age: "20d",
    shots: [],
    workOrder: { title: "Feedback shortcut", status: "done" },
    comments: [{ name: "Riley Cho", initials: "RC", at: "12d ago", text: "Resolved in Lore as implemented. Desktop first." }],
    mine: true,
    claimHours: 20,
    doneHours: 264,
    resolvedAt: "2026-08-28T12:00:00Z",
  },
  {
    key: "CORP11-203",
    kind: "bug",
    title: "Spec chat has no retry after a stream fail",
    happened: "PR chat can retry. Spec chat just dies.",
    expected: "Same retry control as the other chat surfaces.",
    steps: ["Open spec chat", "Kill the stream"],
    severity: "medium",
    status: "done",
    outcome: "implemented",
    resolutionNote: "Retry now matches PR chat.",
    submitter: { name: "Dana Brooks", email: "dbrooks@eci", initials: "DB" },
    assignee: { name: "Jordan Hale", initials: "JH" },
    url: "/repos/eci-nexus/lore/specs",
    createdAt: "2026-08-12T13:30:00Z",
    age: "28d",
    shots: ["chat"],
    workOrder: { title: "Spec chat retry", status: "done" },
    comments: [],
    mine: false,
    claimHours: 36,
    doneHours: 336,
    resolvedAt: "2026-08-26T15:00:00Z",
  },
];

const PAST_MONTHS = [
  { id: "2026-04", label: "Apr", filed: 7, implemented: 5, rejected: 1, workOrders: 3, claimHours: 22, doneHours: 216 },
  { id: "2026-05", label: "May", filed: 9, implemented: 6, rejected: 2, workOrders: 4, claimHours: 16, doneHours: 192 },
  { id: "2026-06", label: "Jun", filed: 11, implemented: 8, rejected: 1, workOrders: 5, claimHours: 14, doneHours: 168 },
  { id: "2026-07", label: "Jul", filed: 8, implemented: 5, rejected: 2, workOrders: 3, claimHours: 18, doneHours: 240 },
  { id: "2026-08", label: "Aug", filed: 10, implemented: 7, rejected: 1, workOrders: 4, claimHours: 15, doneHours: 200 },
];

const KIND_LABEL = { bug: "Bug", enhancement: "Enhancement", idea: "Idea" };
const STATUS_LABEL = { todo: "Awaiting triage", progress: "In progress", done: "Done" };
const STATUS_CHIP = { todo: "st-todo", progress: "st-progress", done: "st-done" };
const OUTCOME_LABEL = { implemented: "Implemented", rejected: "Won't do" };
const REPORTER_PHASE = {
  waiting: { label: "Waiting", chip: "st-todo" },
  assigned: { label: "Assigned", chip: "st-assigned" },
  working: { label: "Being worked on", chip: "st-progress" },
  done: { label: "Done", chip: "st-done" },
};

const state = {
  selectedKey: "CORP11-184",
  inbox: "open",
  kindFilter: "all",
  query: "",
  studioRole: "you",
  studioDevPage: "queue",
  reportPeriod: "all",
  studioTicket: null,
  studioTone: "dark",
  compose: null,
  resolve: null,
  toast: "",
  items: ITEMS.map((item) => ({ ...item })),
};

function $(sel, root = document) {
  return root.querySelector(sel);
}

function kindChip(kind) {
  return `<span class="chip kind-${kind}">${KIND_LABEL[kind]}</span>`;
}

function isReporterView() {
  return state.studioRole === "you";
}

function statusChip(status) {
  return `<span class="chip ${STATUS_CHIP[status]}">${STATUS_LABEL[status]}</span>`;
}

function reporterPhase(item) {
  if (item.status === "done") return "done";
  if (item.workOrder) return "working";
  if (item.assignee) return "assigned";
  return "waiting";
}

function reporterStatusChip(item) {
  if (item.outcome) return outcomeChip(item.outcome);
  const phase = REPORTER_PHASE[reporterPhase(item)];
  return `<span class="chip ${phase.chip}">${phase.label}</span>`;
}

function sevChip(severity) {
  if (!severity) return "";
  return `<span class="chip sev-${severity}">${severity}</span>`;
}

function outcomeChip(outcome) {
  if (!outcome) return "";
  return `<span class="chip out-${outcome}">${OUTCOME_LABEL[outcome]}</span>`;
}

function shotMarkup(kind, compact) {
  const lines = compact
    ? `<div class="shot-line w80"></div><div class="shot-line w60"></div>`
    : `<div class="shot-line w80"></div><div class="shot-line w60"></div><div class="shot-line w40"></div>`;
  return `<div class="shot shot-${kind}"><div class="shot-bar"><span class="shot-dot"></span><span class="shot-dot"></span><span class="shot-dot"></span></div><div class="shot-body">${lines}</div></div>`;
}

function filtered() {
  const q = state.query.trim().toLowerCase();
  return state.items.filter((item) => {
    if (state.kindFilter !== "all" && item.kind !== state.kindFilter) return false;
    if (state.inbox === "open" && item.status === "done") return false;
    if (state.inbox === "mine" && item.assignee?.name !== "You") return false;
    if (state.inbox === "done" && item.status !== "done") return false;
    if (!q) return true;
    return [item.key, item.title, item.happened, item.want, item.why].filter(Boolean).join(" ").toLowerCase().includes(q);
  });
}

function toast(message) {
  state.toast = message;
  render();
  window.setTimeout(() => {
    if (state.toast === message) {
      state.toast = "";
      render();
    }
  }, 2200);
}

function claim(item) {
  item.assignee = { name: "You", initials: "JH" };
  item.status = "progress";
  item.claimHours = ageHours(item);
  toast(`Claimed ${item.key}. CORP11 moves to In Progress.`);
}

function resolveItem(item, outcome, note) {
  item.status = "done";
  item.outcome = outcome;
  item.resolutionNote = note;
  item.comments = [
    ...item.comments,
    { name: "You", initials: "JH", at: "just now", text: `Resolved in Lore as ${OUTCOME_LABEL[outcome]}. ${note}`.trim() },
  ];
  item.doneHours = ageHours(item);
  state.resolve = null;
  toast(`${item.key} marked ${OUTCOME_LABEL[outcome]}. Jira goes to Done.`);
}

function createItem(draft) {
  const n = 220 + state.items.length;
  const item = {
    key: `CORP11-${n}`,
    kind: draft.kind,
    title: draft.title,
    happened: draft.happened || "",
    expected: draft.expected || "",
    steps: draft.steps ? draft.steps.split("\n").filter(Boolean) : [],
    why: draft.why || "",
    want: draft.want || "",
    where: draft.where || "",
    severity: draft.severity || (draft.kind === "bug" ? "medium" : null),
    status: "todo",
    outcome: null,
    submitter: { name: "You", email: "jhelrigle@eci", initials: "JH" },
    assignee: null,
    url: draft.url || "/factory/work-orders/demo",
    createdAt: new Date().toISOString(),
    age: "just now",
    shots: draft.kind === "bug" ? ["factory"] : [],
    workOrder: null,
    comments: [],
    mine: true,
  };
  state.items.unshift(item);
  state.selectedKey = item.key;
  state.compose = null;
  state.inbox = "open";
  state.studioRole = "you";
  state.studioTicket = item.key;
  toast("Report submitted.");
}

function replyTo(item, text) {
  const note = String(text || "").trim();
  if (!note) return;
  item.comments = [...item.comments, { name: "You", initials: "JH", at: "just now", text: note }];
  toast(isReporterView() ? "Reply sent." : `Comment written to ${item.key} on CORP11.`);
}

function ageHours(item) {
  if (item.age === "just now") return 0;
  const n = Number.parseInt(item.age, 10);
  if (Number.isNaN(n)) return 0;
  if (String(item.age).endsWith("h")) return n;
  if (String(item.age).endsWith("d")) return n * 24;
  return 0;
}

function median(values) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function fmtHours(hours) {
  if (hours == null) return "—";
  if (hours < 1) return "<1h";
  if (hours < 24) return `${Math.round(hours)}h`;
  const days = hours / 24;
  return days < 10 && days % 1 ? `${days.toFixed(1)}d` : `${Math.round(days)}d`;
}

function studioMetrics() {
  const items = state.items;
  const open = items.filter((item) => item.status !== "done");
  const claims = items.map((item) => item.claimHours).filter((n) => n != null);
  const dones = items.map((item) => item.doneHours).filter((n) => n != null);
  return [
    { label: "Unclaimed", value: String(open.filter((item) => !item.assignee).length), hint: "Waiting on an owner" },
    { label: "Older than 7 days", value: String(open.filter((item) => ageHours(item) >= 168).length), hint: "Still open" },
    { label: "Median to claim", value: fmtHours(median(claims)), hint: "Submit to first owner" },
    { label: "Median to done", value: fmtHours(median(dones)), hint: "Submit to resolved" },
    { label: "Implemented", value: String(items.filter((item) => item.outcome === "implemented").length), hint: "Shipped this month" },
    { label: "Work orders", value: String(items.filter((item) => item.workOrder).length), hint: "Started from a report" },
  ];
}

function septemberRow() {
  const items = state.items;
  const sep = items.filter((item) => item.createdAt.startsWith("2026-09"));
  const claims = sep.map((item) => item.claimHours).filter((n) => n != null);
  const dones = items
    .filter((item) => (item.resolvedAt || "").startsWith("2026-09"))
    .map((item) => item.doneHours)
    .filter((n) => n != null);
  return {
    id: "2026-09",
    label: "Sep",
    filed: sep.length,
    implemented: items.filter((item) => item.outcome === "implemented" && (item.resolvedAt || "").startsWith("2026-09")).length,
    rejected: items.filter((item) => item.outcome === "rejected" && (item.resolvedAt || "").startsWith("2026-09")).length,
    workOrders: sep.filter((item) => item.workOrder).length,
    claimHours: median(claims),
    doneHours: median(dones),
  };
}

function historyMonths() {
  return [...PAST_MONTHS, septemberRow()];
}

function monthsForPeriod(months) {
  if (state.reportPeriod === "month") return months.filter((row) => row.id === "2026-09");
  if (state.reportPeriod === "90d") return months.filter((row) => ["2026-07", "2026-08", "2026-09"].includes(row.id));
  return months;
}

function periodLabel() {
  if (state.reportPeriod === "month") return "This month";
  if (state.reportPeriod === "90d") return "Last 90 days";
  return "All time";
}

function rollup(rows) {
  const sum = (key) => rows.reduce((n, row) => n + (row[key] || 0), 0);
  const claims = rows.map((row) => row.claimHours).filter((n) => n != null);
  const dones = rows.map((row) => row.doneHours).filter((n) => n != null);
  return [
    { label: "Filed", value: String(sum("filed")), hint: "Reports in this window" },
    { label: "Implemented", value: String(sum("implemented")), hint: "Shipped in this window" },
    { label: "Won't do", value: String(sum("rejected")), hint: "Closed, not taking it" },
    { label: "Work orders", value: String(sum("workOrders")), hint: "Started from a report" },
    { label: "Median to claim", value: fmtHours(median(claims)), hint: "Submit to first owner" },
    { label: "Median to done", value: fmtHours(median(dones)), hint: "Submit to resolved" },
  ];
}

function metricTiles(metrics) {
  return metrics
    .map(
      (metric) => `
      <div class="metric">
        <span>${metric.label}</span>
        <strong>${metric.value}</strong>
        <p>${metric.hint}</p>
      </div>`,
    )
    .join("");
}

function bodySections(item) {
  if (item.kind === "bug") {
    return `
      <section class="case-section"><h2>What happened</h2><p>${item.happened}</p></section>
      ${item.expected ? `<section class="case-section"><h2>Expected</h2><p>${item.expected}</p></section>` : ""}
      ${item.steps?.length ? `<section class="case-section"><h2>Steps</h2><ol>${item.steps.map((step) => `<li>${step}</li>`).join("")}</ol></section>` : ""}
    `;
  }
  if (item.kind === "enhancement") {
    return `
      <section class="case-section"><h2>Ask</h2><p>${item.want || item.happened}</p></section>
      ${item.why ? `<section class="case-section"><h2>Why</h2><p>${item.why}</p></section>` : ""}
      ${item.where ? `<section class="case-section"><h2>Where</h2><p>${item.where}</p></section>` : ""}
    `;
  }
  return `<section class="case-section"><h2>Idea</h2><p>${item.happened || item.want}</p></section>`;
}

function shots(item) {
  if (!item.shots.length) return "";
  return `<section class="case-section"><h2>Evidence</h2><div class="shot-row">${item.shots.map((kind) => shotMarkup(kind, false)).join("")}</div></section>`;
}

function thread(item) {
  const heading = isReporterView() ? "Conversation" : "Thread";
  if (!item.comments.length) {
    const empty = isReporterView()
      ? "No replies yet. A reply here reaches the person working on this."
      : "No Jira comments yet. A reply here would write a CORP11 comment.";
    return `<section class="case-section"><h2>${heading}</h2><p>${empty}</p></section>`;
  }
  return `<section class="case-section"><h2>${heading}</h2><div class="thread">${item.comments
    .map(
      (comment) => `
      <div class="thread-item">
        <div class="avatar">${comment.initials}</div>
        <div>
          <strong>${comment.name}</strong><time>${comment.at}</time>
          <p>${comment.text}</p>
        </div>
      </div>`,
    )
    .join("")}</div></section>`;
}

function workOrder(item) {
  if (!item.workOrder) {
    return `<section class="case-section"><h2>Work order</h2><p>None yet. Escalating creates a Factory draft anchored on ${item.key}.</p></section>`;
  }
  return `<section class="case-section"><h2>Work order</h2><div class="wo-card"><div><strong>${item.workOrder.title}</strong><span>Factory · ${item.workOrder.status}</span></div>${statusChip(item.workOrder.status === "done" ? "done" : "progress")}</div></section>`;
}

function actions(item, extra = "") {
  const canClaim = !item.assignee && item.status !== "done";
  const canResolve = item.status !== "done";
  const canWo = item.status !== "done" && !item.workOrder;
  return `
    <div class="case-actions">
      ${canClaim ? `<button class="btn" data-act="claim" data-key="${item.key}">Claim</button>` : ""}
      ${canResolve ? `<button class="btn btn-good" data-act="open-resolve" data-key="${item.key}">Resolve</button>` : ""}
      ${canWo ? `<button class="btn" data-act="wo" data-key="${item.key}">Start work order</button>` : ""}
      <button class="btn btn-ghost" data-act="jira" data-key="${item.key}">Open in Jira</button>
      ${extra}
    </div>`;
}

function studioToneToggle() {
  return `
    <div class="studio-tone" role="group" aria-label="Studio theme">
      <button type="button" data-tone="light" class="${state.studioTone === "light" ? "is-on" : ""}">Light</button>
      <button type="button" data-tone="dark" class="${state.studioTone === "dark" ? "is-on" : ""}">Dark</button>
    </div>`;
}

function studioRoleToggle() {
  return `
    <div class="studio-tone" role="group" aria-label="Studio role">
      <button type="button" data-role="you" class="${state.studioRole === "you" ? "is-on" : ""}">User</button>
      <button type="button" data-role="dev" class="${state.studioRole === "dev" ? "is-on" : ""}">Developer</button>
    </div>`;
}

function studioPageToggle() {
  if (state.studioRole !== "dev") return "";
  return `
    <div class="studio-tone" role="group" aria-label="Developer page">
      <button type="button" data-dev="queue" class="${state.studioDevPage === "queue" ? "is-on" : ""}">Queue</button>
      <button type="button" data-dev="report" class="${state.studioDevPage === "report" ? "is-on" : ""}">Report</button>
    </div>`;
}

function studioChrome(kicker) {
  return `
    <div class="studio-head">
      <div class="studio-head-left">
        <p class="studio-kicker">${kicker}</p>
        ${studioPageToggle()}
      </div>
      <div class="studio-head-right">
        ${studioRoleToggle()}
        ${studioToneToggle()}
      </div>
    </div>`;
}

function reporterAge(item) {
  return item.age === "just now" ? "just now" : `filed ${item.age} ago`;
}

function renderStudioYou() {
  const mine = state.items.filter((item) => item.mine);
  return `
    <div class="studio">
      ${studioChrome("Lore feedback")}
      <h1>What's broken, or what's missing?</h1>
      <p class="lede">Tell us what broke or what you want next. Open one of yours to see where it stands and talk to the person working it.</p>
      <div class="studio-choices">
        <button class="choice bug" data-act="compose-bug">
          <div class="mark">!</div>
          <h2>Report a bug</h2>
          <p>What happened, what you expected, and a screenshot if you have one.</p>
        </button>
        <button class="choice enh" data-act="compose-enh">
          <div class="mark">+</div>
          <h2>Request something</h2>
          <p>The change you want, why it matters, and where in Lore it lives.</p>
        </button>
      </div>
      <div class="studio-list">
        <h2>Your reports</h2>
        ${
          mine.length === 0
            ? `<div class="empty">Nothing filed yet.</div>`
            : mine
                .map(
                  (row) => `
          <button class="mine-row" data-ticket="${row.key}">
            <div>
              <h3>${row.title}</h3>
              <div class="sub">${KIND_LABEL[row.kind]} · ${reporterAge(row)}</div>
            </div>
            ${reporterStatusChip(row)}
          </button>`,
                )
                .join("")
        }
      </div>
    </div>`;
}

function renderStudioDev() {
  if (state.studioDevPage === "report") return renderStudioReport();
  const rows = filtered();
  const item = rows.find((row) => row.key === state.selectedKey) ?? rows[0];
  return `
    <div class="studio-work">
      ${studioChrome("Developer")}
      ${renderStudioMetrics()}
      <div class="studio-queue">
        <input class="case-search" data-bind="query" placeholder="Search CORP11 or text" value="${escapeAttr(state.query)}" />
        <div class="seg">
          <button data-inbox="open" class="${state.inbox === "open" ? "is-on" : ""}">Inbox</button>
          <button data-inbox="mine" class="${state.inbox === "mine" ? "is-on" : ""}">Mine</button>
          <button data-inbox="done" class="${state.inbox === "done" ? "is-on" : ""}">Done</button>
        </div>
        <div class="kind-row">
          ${["all", "bug", "enhancement", "idea"]
            .map((kind) => `<button data-kind="${kind}" class="${state.kindFilter === kind ? "is-on" : ""}">${kind === "all" ? "All types" : KIND_LABEL[kind]}</button>`)
            .join("")}
        </div>
        <div class="studio-queue-list">
          ${
            rows.length === 0
              ? `<div class="empty">Nothing in this queue.</div>`
              : rows
                  .map(
                    (row) => `
            <button class="studio-qrow ${item && row.key === item.key ? "is-on" : ""}" data-select="${row.key}">
              <div class="case-row-top"><span class="key">${row.key}</span><time>${row.age}</time></div>
              <h3>${row.title}</h3>
              <div class="case-row-meta">${kindChip(row.kind)} ${row.severity ? sevChip(row.severity) : ""} ${statusChip(row.status)}</div>
            </button>`,
                  )
                  .join("")
          }
        </div>
      </div>
      ${item ? renderStudioCase(item) : `<article class="studio-case"><p class="lede">Pick a ticket from the queue.</p></article>`}
    </div>`;
}

function renderStudioCase(item) {
  return `
    <article class="studio-case">
      <div class="case-kicker">${kindChip(item.kind)} ${statusChip(item.status)} ${item.outcome ? outcomeChip(item.outcome) : ""} <span class="key">${item.key}</span></div>
      <h1>${item.title}</h1>
      <p class="case-byline">${item.submitter.name} · ${item.age} · ${item.url ? item.url : "No page captured"}</p>
      <div class="studio-facts">
        <div><span>Owner</span><strong>${item.assignee ? item.assignee.name : "Awaiting triage"}</strong></div>
        <div><span>Reporter</span><strong>${item.submitter.name}</strong></div>
        <div><span>Page</span><strong>${item.url || "Not captured"}</strong></div>
        <div><span>Work order</span><strong>${item.workOrder ? item.workOrder.status : "None"}</strong></div>
      </div>
      ${bodySections(item)}
      ${shots(item)}
      ${thread(item)}
      ${workOrder(item)}
      ${item.resolutionNote ? `<section class="case-section"><h2>Resolution</h2><p>${item.resolutionNote}</p></section>` : ""}
      <div class="field"><label>Reply on CORP11</label><textarea name="reply" placeholder="This writes a Jira comment."></textarea></div>
      ${actions(item, `<button class="btn btn-primary" data-act="reply" data-key="${item.key}">Send reply</button>`)}
    </article>`;
}

function renderStudioMetrics() {
  return `
    <section class="studio-metrics">
      <div class="studio-metrics-head">
        <p class="studio-metrics-kicker">This month</p>
        <button type="button" class="studio-history-link" data-dev="report">History</button>
      </div>
      <div class="studio-metrics-grid">
        ${metricTiles(studioMetrics())}
      </div>
    </section>`;
}

function renderStudioReport() {
  const months = historyMonths();
  const visible = monthsForPeriod(months);
  const now = studioMetrics().slice(0, 2);
  const maxFiled = Math.max(...months.map((row) => row.filed), 1);
  return `
    <div class="studio-report">
      ${studioChrome("Developer")}
      <div class="studio-report-body">
        <div class="studio-report-title">
          <div>
            <h1>Feedback report</h1>
            <p class="lede">The queue strip is this month. This page is every month we have, plus a window if you need one.</p>
          </div>
          <div class="studio-tone" role="group" aria-label="Report period">
            <button type="button" data-period="month" class="${state.reportPeriod === "month" ? "is-on" : ""}">This month</button>
            <button type="button" data-period="90d" class="${state.reportPeriod === "90d" ? "is-on" : ""}">90 days</button>
            <button type="button" data-period="all" class="${state.reportPeriod === "all" ? "is-on" : ""}">All time</button>
          </div>
        </div>
        <p class="studio-metrics-kicker">Right now</p>
        <div class="studio-metrics-grid report-now">${metricTiles(now)}</div>
        <p class="studio-metrics-kicker">${periodLabel()}</p>
        <div class="studio-metrics-grid">${metricTiles(rollup(visible))}</div>
        <p class="studio-metrics-kicker">By month</p>
        <div class="report-legend">
          <span><i class="swatch filed"></i> Filed</span>
          <span><i class="swatch impl"></i> Implemented</span>
        </div>
        <div class="report-chart">
          ${months
            .map((row) => {
              const filedH = Math.max(8, Math.round((row.filed / maxFiled) * 100));
              const implH = Math.max(row.implemented ? 8 : 0, Math.round((row.implemented / maxFiled) * 100));
              return `
            <div class="report-col">
              <div class="bars">
                <div class="bar filed" style="height:${filedH}%"></div>
                <div class="bar impl" style="height:${implH}%"></div>
              </div>
              <span>${row.label}</span>
            </div>`;
            })
            .join("")}
        </div>
        <table class="studio-table report-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Filed</th>
              <th>Implemented</th>
              <th>Won't do</th>
              <th>Work orders</th>
              <th>Median claim</th>
              <th>Median done</th>
            </tr>
          </thead>
          <tbody>
            ${months
              .map(
                (row) => `
              <tr class="${visible.some((v) => v.id === row.id) ? "is-on" : ""}">
                <td>${row.label} 2026</td>
                <td>${row.filed}</td>
                <td>${row.implemented}</td>
                <td>${row.rejected}</td>
                <td>${row.workOrders}</td>
                <td>${fmtHours(row.claimHours)}</td>
                <td>${fmtHours(row.doneHours)}</td>
              </tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>`;
}

function renderStudio() {
  return state.studioRole === "dev" ? renderStudioDev() : renderStudioYou();
}

function renderStudioTicket() {
  if (state.studioRole !== "you" || !state.studioTicket) return "";
  const item = state.items.find((row) => row.key === state.studioTicket);
  if (!item) return "";
  return `
    <div class="modal-back" data-act="close-ticket">
      <div class="modal ticket" data-stop>
        <div class="case-kicker">${kindChip(item.kind)} ${reporterStatusChip(item)}</div>
        <h2>${item.title}</h2>
        <p class="hint">You ${item.age === "just now" ? "just filed this" : `filed this ${item.age} ago`}.</p>
        ${bodySections(item)}
        ${shots(item)}
        ${item.resolutionNote ? `<section class="case-section"><h2>What we decided</h2><p>${item.resolutionNote}</p></section>` : ""}
        ${thread(item)}
        <div class="field"><label>Reply</label><textarea name="reply" placeholder="Write a reply to the person working on this."></textarea></div>
        <div class="modal-actions">
          <button class="btn btn-ghost" data-act="close-ticket">Close</button>
          <button class="btn btn-primary" data-act="reply" data-key="${item.key}">Send reply</button>
        </div>
      </div>
    </div>`;
}

function renderCompose() {
  const draft = state.compose;
  if (!draft) return "";
  if (draft.step === "pick") {
    return `
      <div class="modal-back" data-act="close-compose">
        <div class="modal" data-stop>
          <h2>What are you filing?</h2>
          <p class="hint">${isReporterView() ? "The form changes based on what you pick." : "The form changes. CORP11 still gets one issue either way."}</p>
          <div class="pick-grid">
            <button class="pick" data-act="compose-bug"><strong>Bug</strong><span>Something is wrong.</span></button>
            <button class="pick" data-act="compose-enh"><strong>Enhancement</strong><span>Something is missing.</span></button>
          </div>
        </div>
      </div>`;
  }

  const isBug = draft.kind === "bug";
  return `
    <div class="modal-back" data-act="close-compose">
      <div class="modal" data-stop>
        <h2>${isBug ? "Report a bug" : "Request something"}</h2>
        <p class="hint">Page context is filled from where you opened this. Clear it if it is wrong.</p>
        <div class="field"><label>Title</label><input name="title" placeholder="${isBug ? "Short description of the failure" : "The change you want"}" /></div>
        ${
          isBug
            ? `<div class="field"><label>What happened</label><textarea name="happened"></textarea></div>
               <div class="field"><label>What you expected</label><textarea name="expected"></textarea></div>
               <div class="field"><label>Steps</label><textarea name="steps" placeholder="One step per line"></textarea></div>
               <div class="field"><label>Severity</label>
                 <select name="severity">
                   <option value="blocker">Blocker</option>
                   <option value="high" selected>High</option>
                   <option value="medium">Medium</option>
                   <option value="low">Low</option>
                 </select>
               </div>`
            : `<div class="field"><label>What do you want</label><textarea name="want"></textarea></div>
               <div class="field"><label>Why it matters</label><textarea name="why"></textarea></div>
               <div class="field"><label>Where in Lore</label><input name="where" placeholder="Docs, Factory, Search…" /></div>`
        }
        <div class="field"><label>Page</label><input name="url" value="/factory/work-orders/demo" /></div>
        <div class="modal-actions">
          <button class="btn btn-ghost" data-act="close-compose">Close</button>
          <button class="btn btn-primary" data-act="submit-compose">Submit</button>
        </div>
      </div>
    </div>`;
}

function renderResolve() {
  if (!state.resolve) return "";
  const item = state.items.find((row) => row.key === state.resolve);
  return `
    <div class="modal-back" data-act="close-resolve">
      <div class="modal" data-stop>
        <h2>Resolve ${item.key}</h2>
        <p class="hint">This transitions CORP11 to Done and writes the outcome on the issue property. The submitter is notified now.</p>
        <div class="field">
          <label>Outcome</label>
          <select name="outcome">
            <option value="implemented">Implemented</option>
            <option value="rejected">Won't do</option>
          </select>
        </div>
        <div class="field"><label>Note to the reporter</label><textarea name="note" placeholder="What changed, or why not."></textarea></div>
        <div class="modal-actions">
          <button class="btn btn-ghost" data-act="close-resolve">Cancel</button>
          <button class="btn btn-good" data-act="submit-resolve">Resolve</button>
        </div>
      </div>
    </div>`;
}

function escapeAttr(value) {
  return String(value).replaceAll('"', "&quot;");
}

function render() {
  const app = $("#app");
  app.dataset.variant = "studio";
  app.dataset.tone = state.studioTone;
  app.dataset.role = state.studioRole;
  app.dataset.page = state.studioRole === "dev" ? state.studioDevPage : "you";
  app.innerHTML = renderStudio();

  const modal = $("#modal-root");
  modal.innerHTML = `${renderCompose()}${renderResolve()}${renderStudioTicket()}${state.toast ? `<div class="toast">${state.toast}</div>` : ""}`;
}

function readForm(modal) {
  const data = {};
  modal.querySelectorAll("input, textarea, select").forEach((el) => {
    data[el.name] = el.value;
  });
  return data;
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-stop]") && event.target.closest(".modal") && !event.target.closest("[data-act]")) {
    return;
  }
  const t = event.target.closest("[data-inbox], [data-kind], [data-select], [data-act], [data-tone], [data-role], [data-ticket], [data-dev], [data-period]");
  if (!t) {
    if (event.target.matches(".modal-back")) return;
    return;
  }
  if (t.dataset.role) {
    state.studioRole = t.dataset.role;
    state.studioTicket = null;
    state.compose = null;
    state.resolve = null;
    if (state.studioRole === "dev") state.inbox = "open";
    render();
    return;
  }
  if (t.dataset.dev) {
    state.studioDevPage = t.dataset.dev;
    state.studioRole = "dev";
    state.studioTicket = null;
    state.compose = null;
    state.resolve = null;
    render();
    return;
  }
  if (t.dataset.period) {
    state.reportPeriod = t.dataset.period;
    render();
    return;
  }
  if (t.dataset.ticket) {
    state.selectedKey = t.dataset.ticket;
    state.studioTicket = t.dataset.ticket;
    state.compose = null;
    render();
    return;
  }
  if (t.dataset.inbox) {
    state.inbox = t.dataset.inbox;
    render();
    return;
  }
  if (t.dataset.kind) {
    state.kindFilter = t.dataset.kind;
    render();
    return;
  }
  if (t.dataset.tone) {
    state.studioTone = t.dataset.tone;
    render();
    return;
  }
  if (t.dataset.select) {
    state.selectedKey = t.dataset.select;
    render();
    return;
  }

  const act = t.dataset.act;
  const key = t.dataset.key;
  const item = state.items.find((row) => row.key === key);
  if (act === "compose") {
    state.compose = { step: "pick" };
    state.studioTicket = null;
  }
  if (act === "compose-bug") {
    state.compose = { step: "form", kind: "bug" };
    state.studioTicket = null;
  }
  if (act === "compose-enh") {
    state.compose = { step: "form", kind: "enhancement" };
    state.studioTicket = null;
  }
  if (act === "close-compose") state.compose = null;
  if (act === "close-resolve") state.resolve = null;
  if (act === "close-ticket") state.studioTicket = null;
  if (act === "reply" && item) {
    const formRoot = t.closest(".modal") || t.closest(".studio-case");
    replyTo(item, formRoot ? readForm(formRoot).reply : "");
    return;
  }
  if (act === "claim" && item) claim(item);
  if (act === "open-resolve") state.resolve = key;
  if (act === "wo" && item) {
    item.workOrder = { title: item.title, status: "draft" };
    toast(`Draft work order anchored on ${item.key}.`);
  }
  if (act === "jira") toast(`${key} would open CORP11 in Jira. Not wired in this sketch.`);
  if (act === "submit-compose") {
    const modal = t.closest(".modal");
    const form = readForm(modal);
    const kind = form.kind || state.compose.kind;
    createItem({
      kind,
      title: form.title || form.happened || form.want || "Untitled report",
      happened: form.happened || form.title,
      expected: form.expected,
      steps: form.steps,
      want: form.want || form.title,
      why: form.why,
      where: form.where,
      severity: form.severity,
      url: form.url,
    });
    return;
  }
  if (act === "submit-resolve") {
    const modal = t.closest(".modal");
    const form = readForm(modal);
    const target = state.items.find((row) => row.key === state.resolve);
    resolveItem(target, form.outcome, form.note);
    return;
  }
  render();
});

document.addEventListener("input", (event) => {
  if (event.target.dataset.bind === "query") {
    state.query = event.target.value;
    const pos = event.target.selectionStart;
    render();
    const next = document.querySelector("[data-bind=query]");
    if (next) {
      next.focus();
      next.setSelectionRange(pos, pos);
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input, textarea, select")) return;
  if (event.key === "n" || event.key === "N") {
    state.compose = { step: "pick" };
    state.studioTicket = null;
  }
  if (event.key === "y" || event.key === "Y") {
    state.studioRole = "you";
    state.studioTicket = null;
    state.resolve = null;
  }
  if (event.key === "d" || event.key === "D") {
    state.studioRole = "dev";
    state.studioTicket = null;
    state.compose = null;
    state.inbox = "open";
  }
  if (state.studioRole === "dev" && (event.key === "r" || event.key === "R")) {
    state.studioDevPage = "report";
  }
  if (state.studioRole === "dev" && (event.key === "q" || event.key === "Q")) {
    state.studioDevPage = "queue";
  }
  if (event.key === "Escape") {
    state.compose = null;
    state.resolve = null;
    state.studioTicket = null;
  }
  render();
});


const params = new URLSearchParams(location.search);
if (params.get("role") === "dev" || params.get("page") === "report") state.studioRole = "dev";
if (params.get("page") === "report") state.studioDevPage = "report";
if (params.get("page") === "queue") {
  state.studioRole = "dev";
  state.studioDevPage = "queue";
}

render();
