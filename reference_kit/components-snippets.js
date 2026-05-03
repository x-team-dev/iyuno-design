// Component snippets for the gallery — TSX (React), Tailwind, CSS
// Pretty-printed with very lightweight syntax tinting via class names.
window.IY_SNIPPETS = {
  button: {
    tsx: `<span class="tk-com">// Primary, secondary, ghost, danger</span>
<span class="tk-tag">&lt;Button</span> <span class="tk-attr">variant</span>=<span class="tk-str">"primary"</span><span class="tk-tag">&gt;</span>Start a build<span class="tk-tag">&lt;/Button&gt;</span>
<span class="tk-tag">&lt;Button</span> <span class="tk-attr">variant</span>=<span class="tk-str">"secondary"</span><span class="tk-tag">&gt;</span>Cancel<span class="tk-tag">&lt;/Button&gt;</span>
<span class="tk-tag">&lt;Button</span> <span class="tk-attr">variant</span>=<span class="tk-str">"ghost"</span><span class="tk-tag">&gt;</span>Skip<span class="tk-tag">&lt;/Button&gt;</span>
<span class="tk-tag">&lt;Button</span> <span class="tk-attr">variant</span>=<span class="tk-str">"danger"</span><span class="tk-tag">&gt;</span>Delete run<span class="tk-tag">&lt;/Button&gt;</span>`,
    tailwind: `<span class="tk-com">/* Primary */</span>
<span class="tk-tag">&lt;button</span> <span class="tk-attr">className</span>=<span class="tk-str">"font-medium text-sm py-2 px-3.5 rounded-[10px]
  bg-[--accent] text-[--accent-fg] hover:bg-amber-400
  transition-all duration-150"</span><span class="tk-tag">&gt;</span>
  Start a build
<span class="tk-tag">&lt;/button&gt;</span>`,
    css: `<span class="tk-com">/* Map to your design tokens */</span>
.btn { font-family: var(--font-body); font-weight: 600; font-size: 13px;
  padding: 8px 14px; border-radius: var(--r-md); border: 1px solid transparent;
  transition: all var(--d-fast) var(--ease); cursor: pointer; }
.btn-primary { background: var(--accent); color: var(--accent-fg); }
.btn-primary:hover { background: oklch(0.745 0.165 72); }`
  },
  input: {
    tsx: `<span class="tk-tag">&lt;label</span> <span class="tk-attr">className</span>=<span class="tk-str">"label"</span><span class="tk-tag">&gt;</span>Work email<span class="tk-tag">&lt;/label&gt;</span>
<span class="tk-tag">&lt;input</span>
  <span class="tk-attr">className</span>=<span class="tk-str">"input"</span>
  <span class="tk-attr">type</span>=<span class="tk-str">"email"</span>
  <span class="tk-attr">placeholder</span>=<span class="tk-str">"you@iyuno.com"</span> <span class="tk-tag">/&gt;</span>
<span class="tk-tag">&lt;p</span> <span class="tk-attr">className</span>=<span class="tk-str">"help"</span><span class="tk-tag">&gt;</span>We'll send a magic link.<span class="tk-tag">&lt;/p&gt;</span>`,
    tailwind: `<span class="tk-tag">&lt;input</span> <span class="tk-attr">className</span>=<span class="tk-str">"w-full py-2.5 px-3 text-sm rounded-[10px]
  bg-white border border-[--border-strong] text-[--fg]
  focus:border-[--accent] focus:ring-4 focus:ring-amber-200/40 focus:outline-none
  transition-all duration-150"</span> <span class="tk-tag">/&gt;</span>`,
    css: `.input { width: 100%; padding: 9px 12px; font-size: 14px;
  border-radius: var(--r-md); border: 1px solid var(--border-strong);
  background: #fff; transition: all var(--d-fast) var(--ease); }
.input:focus { border-color: var(--accent); box-shadow: var(--shadow-glow); }`
  },
  card: {
    tsx: `<span class="tk-tag">&lt;Card&gt;</span>
  <span class="tk-tag">&lt;Eyebrow&gt;</span>Contextual Memory Graph<span class="tk-tag">&lt;/Eyebrow&gt;</span>
  <span class="tk-tag">&lt;CardTitle&gt;</span>Squid Game · S03E04<span class="tk-tag">&lt;/CardTitle&gt;</span>
  <span class="tk-tag">&lt;CardBody&gt;</span>Default v2 · 312 cues · 4 locales.<span class="tk-tag">&lt;/CardBody&gt;</span>
<span class="tk-tag">&lt;/Card&gt;</span>`,
    tailwind: `<span class="tk-tag">&lt;div</span> <span class="tk-attr">className</span>=<span class="tk-str">"bg-white border border-[--border] rounded-[10px] p-5 shadow-xs"</span><span class="tk-tag">&gt;</span>
  <span class="tk-tag">&lt;p</span> <span class="tk-attr">className</span>=<span class="tk-str">"font-mono text-[11px] uppercase tracking-wider text-[--fg-3]"</span><span class="tk-tag">&gt;</span>...
  <span class="tk-tag">&lt;h3</span> <span class="tk-attr">className</span>=<span class="tk-str">"font-display text-[22px] -tracking-tight"</span><span class="tk-tag">&gt;</span>...
<span class="tk-tag">&lt;/div&gt;</span>`,
    css: `.card { background: #fff; border: 1px solid var(--border);
  border-radius: var(--r-md); padding: 20px; box-shadow: var(--shadow-xs); }
.card-eyebrow { font-family: var(--font-mono); font-size: 11px;
  text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-3); }
.card-title { font-family: var(--font-display); font-weight: 700;
  font-size: 22px; letter-spacing: -0.01em; }`
  },
  badge: {
    tsx: `<span class="tk-tag">&lt;Badge</span> <span class="tk-attr">tone</span>=<span class="tk-str">"success"</span><span class="tk-tag">&gt;</span>Completed<span class="tk-tag">&lt;/Badge&gt;</span>
<span class="tk-tag">&lt;Badge</span> <span class="tk-attr">tone</span>=<span class="tk-str">"info"</span><span class="tk-tag">&gt;</span>Running<span class="tk-tag">&lt;/Badge&gt;</span>
<span class="tk-tag">&lt;Badge</span> <span class="tk-attr">tone</span>=<span class="tk-str">"amber"</span><span class="tk-tag">&gt;</span>Awaiting review<span class="tk-tag">&lt;/Badge&gt;</span>
<span class="tk-tag">&lt;Badge</span> <span class="tk-attr">tone</span>=<span class="tk-str">"danger"</span><span class="tk-tag">&gt;</span>Failed<span class="tk-tag">&lt;/Badge&gt;</span>`,
    css: `.badge { display: inline-flex; align-items: center; gap: 6px;
  font-size: 12px; font-weight: 500; padding: 3px 9px;
  border-radius: var(--r-md); border: 1px solid; }
.badge-success { background: var(--success-bg); color: var(--success);
  border-color: oklch(0.85 0.05 145); }
.badge-amber { background: var(--amber-50); color: var(--amber-900);
  border-color: var(--amber-200); }`
  },
  nav: {
    tsx: `<span class="tk-tag">&lt;Nav&gt;</span>
  <span class="tk-tag">&lt;Logo /&gt;</span>
  <span class="tk-tag">&lt;NavLinks&gt;</span>
    <span class="tk-tag">&lt;NavLink</span> <span class="tk-attr">href</span>=<span class="tk-str">"/products"</span><span class="tk-tag">&gt;</span>Products<span class="tk-tag">&lt;/NavLink&gt;</span>
    <span class="tk-tag">&lt;NavLink</span> <span class="tk-attr">href</span>=<span class="tk-str">"/customers"</span><span class="tk-tag">&gt;</span>Customers<span class="tk-tag">&lt;/NavLink&gt;</span>
  <span class="tk-tag">&lt;/NavLinks&gt;</span>
  <span class="tk-tag">&lt;Button</span> <span class="tk-attr">variant</span>=<span class="tk-str">"primary"</span><span class="tk-tag">&gt;</span>Talk to us<span class="tk-tag">&lt;/Button&gt;</span>
<span class="tk-tag">&lt;/Nav&gt;</span>`,
    css: `.nav { display: flex; align-items: center; justify-content: space-between;
  padding: 14px 20px; background: #fff;
  border: 1px solid var(--border); border-radius: var(--r-md); }
.nav-link { padding: 6px 12px; border-radius: var(--r-sm);
  font-size: 13px; color: var(--fg-2); }
.nav-link:hover, .nav-link.on { background: var(--ink-100); color: var(--fg); }`
  },
  tabs: {
    tsx: `<span class="tk-tag">&lt;Tabs</span> <span class="tk-attr">defaultValue</span>=<span class="tk-str">"pipeline"</span><span class="tk-tag">&gt;</span>
  <span class="tk-tag">&lt;TabList&gt;</span>
    <span class="tk-tag">&lt;Tab</span> <span class="tk-attr">value</span>=<span class="tk-str">"pipeline"</span><span class="tk-tag">&gt;</span>Pipeline<span class="tk-tag">&lt;/Tab&gt;</span>
    <span class="tk-tag">&lt;Tab</span> <span class="tk-attr">value</span>=<span class="tk-str">"run"</span><span class="tk-tag">&gt;</span>Run details<span class="tk-tag">&lt;/Tab&gt;</span>
    <span class="tk-tag">&lt;Tab</span> <span class="tk-attr">value</span>=<span class="tk-str">"outputs"</span><span class="tk-tag">&gt;</span>Outputs<span class="tk-tag">&lt;/Tab&gt;</span>
  <span class="tk-tag">&lt;/TabList&gt;</span>
<span class="tk-tag">&lt;/Tabs&gt;</span>`,
    css: `.tabs { display: flex; border-bottom: 1px solid var(--border); }
.tab { padding: 10px 16px; font-size: 13px; font-weight: 500; color: var(--fg-3);
  border-bottom: 2px solid transparent; cursor: pointer; margin-bottom: -1px;
  transition: all var(--d-fast) var(--ease); }
.tab.on { color: var(--fg); border-bottom-color: var(--accent); }`
  },
  dialog: {
    tsx: `<span class="tk-tag">&lt;Dialog</span> <span class="tk-attr">open</span>=<span class="tk-str">{open}</span><span class="tk-tag">&gt;</span>
  <span class="tk-tag">&lt;DialogTitle&gt;</span>Approve this build?<span class="tk-tag">&lt;/DialogTitle&gt;</span>
  <span class="tk-tag">&lt;DialogDescription&gt;</span>
    Approving sends 312 cues across 4 locales to the client folder.
  <span class="tk-tag">&lt;/DialogDescription&gt;</span>
  <span class="tk-tag">&lt;DialogFooter&gt;</span>
    <span class="tk-tag">&lt;Button</span> <span class="tk-attr">variant</span>=<span class="tk-str">"secondary"</span><span class="tk-tag">&gt;</span>Cancel<span class="tk-tag">&lt;/Button&gt;</span>
    <span class="tk-tag">&lt;Button</span> <span class="tk-attr">variant</span>=<span class="tk-str">"primary"</span><span class="tk-tag">&gt;</span>Approve<span class="tk-tag">&lt;/Button&gt;</span>
  <span class="tk-tag">&lt;/DialogFooter&gt;</span>
<span class="tk-tag">&lt;/Dialog&gt;</span>`,
    css: `.dialog { background: #fff; border-radius: var(--r-md);
  box-shadow: var(--shadow-lg); max-width: 420px; overflow: hidden; }
.dialog-foot { padding: 14px 20px; background: var(--ink-50);
  display: flex; gap: 8px; justify-content: flex-end;
  border-top: 1px solid var(--border); }`
  },
  toast: {
    tsx: `<span class="tk-tag">&lt;Toast&gt;</span>
  <span class="tk-tag">&lt;ToastIcon</span> <span class="tk-attr">tone</span>=<span class="tk-str">"amber"</span> <span class="tk-tag">/&gt;</span>
  <span class="tk-tag">&lt;ToastContent&gt;</span>
    Build started for <span class="tk-tag">&lt;b&gt;</span>Squid Game · S03E04<span class="tk-tag">&lt;/b&gt;</span>.
    <span class="tk-tag">&lt;small&gt;</span>wf_8XK2Q · est. 4 min<span class="tk-tag">&lt;/small&gt;</span>
  <span class="tk-tag">&lt;/ToastContent&gt;</span>
<span class="tk-tag">&lt;/Toast&gt;</span>`,
    css: `.toast { background: var(--ink-950); color: var(--ink-50);
  border-radius: var(--r-md); padding: 12px 16px;
  box-shadow: var(--shadow-lg); display: flex; gap: 10px; align-items: center; }
.toast small { color: var(--ink-300); display: block;
  font-size: 11px; margin-top: 2px; }`
  },
  pricing: {
    tsx: `<span class="tk-tag">&lt;PricingGrid&gt;</span>
  <span class="tk-tag">&lt;Tier</span> <span class="tk-attr">name</span>=<span class="tk-str">"Studio"</span> <span class="tk-attr">price</span>=<span class="tk-str">"$24/mo"</span> <span class="tk-tag">/&gt;</span>
  <span class="tk-tag">&lt;Tier</span> <span class="tk-attr">name</span>=<span class="tk-str">"Network"</span> <span class="tk-attr">price</span>=<span class="tk-str">"$480/mo"</span> <span class="tk-attr">featured</span> <span class="tk-tag">/&gt;</span>
  <span class="tk-tag">&lt;Tier</span> <span class="tk-attr">name</span>=<span class="tk-str">"Enterprise"</span> <span class="tk-attr">price</span>=<span class="tk-str">"Custom"</span> <span class="tk-tag">/&gt;</span>
<span class="tk-tag">&lt;/PricingGrid&gt;</span>`,
    css: `.tier { background: #fff; border: 1px solid var(--border);
  border-radius: var(--r-md); padding: 18px;
  display: flex; flex-direction: column; gap: 8px; }
.tier.featured { border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft); }
.tier-price { font-family: var(--font-display); font-size: 28px;
  letter-spacing: -0.01em; }`
  },
};
