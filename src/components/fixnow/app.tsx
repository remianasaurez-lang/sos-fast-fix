import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowLeft, ArrowRight, Bell, Phone, MessageSquare, X, Star, MapPin, Check, Shield,
  Clock, Zap, Wallet, User, Home as HomeIcon, ClipboardList, ChevronRight, Settings2,
  CreditCard, HelpCircle, Info, LogOut, Search, Mail, Navigation, IndianRupee, Camera,
} from "lucide-react";
import {
  AppProvider, useApp, SERVICES, ADDRESSES, type Screen, type Booking,
} from "./store";

/* ---------- shared bits ---------- */

function Btn({ children, onClick, variant = "primary", className = "" }: {
  children: ReactNode; onClick?: () => void; variant?: "primary" | "dark" | "ghost" | "outline" | "danger"; className?: string;
}) {
  const v = {
    primary: "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]",
    dark: "bg-navy text-primary-foreground",
    ghost: "bg-secondary text-secondary-foreground",
    outline: "border border-border bg-card text-foreground",
    danger: "border border-primary/40 bg-primary/10 text-primary",
  }[variant];
  return (
    <button onClick={onClick} className={`fx-press inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold ${v} ${className}`}>
      {children}
    </button>
  );
}

function Head({ title, onBack, right }: { title: string; onBack?: () => void; right?: ReactNode }) {
  return (
    <div className="sticky top-0 z-20 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border bg-card/95 px-4 py-3 backdrop-blur">
      {onBack ? (
        <button onClick={onBack} className="fx-press rounded-full p-1.5 text-foreground"><ArrowLeft className="size-5" /></button>
      ) : <span className="size-8" />}
      <h1 className="truncate text-center text-base font-bold">{title}</h1>
      <span className="flex min-w-8 justify-end">{right}</span>
    </div>
  );
}

function Stars({ value, onChange, size = "size-6" }: { value: number; onChange?: (n: number) => void; size?: string }) {
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} onClick={() => onChange?.(n)} disabled={!onChange} className="fx-press">
          <Star className={`${size} ${n <= value ? "fill-amber-400 text-amber-400" : "text-border"}`} />
        </button>
      ))}
    </div>
  );
}

function TechCard({ b, compact = false }: { b: Booking; compact?: boolean }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)]">
      <div className="grid size-12 shrink-0 place-items-center rounded-full bg-navy text-lg font-bold text-primary-foreground">
        {b.tech.name.charAt(0)}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-bold">{b.tech.name}</p>
        <p className="truncate text-xs text-muted-foreground">{b.tech.role}</p>
        <p className="mt-0.5 flex items-center gap-1 text-xs font-semibold">
          <Star className="size-3.5 fill-amber-400 text-amber-400" /> {b.tech.rating}
          <span className="font-normal text-muted-foreground">({b.tech.jobs} jobs)</span>
        </p>
      </div>
      {!compact && (
        <div className="shrink-0 text-right">
          <p className="text-[11px] text-muted-foreground">Arriving in</p>
          <p className="text-lg font-black text-primary">{b.eta} min</p>
        </div>
      )}
    </div>
  );
}

function Row({ icon, label, onClick }: { icon: ReactNode; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="fx-press flex w-full items-center gap-3 border-b border-border px-4 py-3.5 text-left last:border-0">
      <span className="text-muted-foreground">{icon}</span>
      <span className="min-w-0 flex-1 truncate text-sm font-medium">{label}</span>
      <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
    </button>
  );
}

function StatusPill({ s }: { s: string }) {
  const label = s.replace(/_/g, " ");
  const tone = s === "completed" ? "bg-success/15 text-success" : s === "cancelled" ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary";
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold capitalize ${tone}`}>{label}</span>;
}

/* ---------- screens ---------- */

function Splash() {
  const { go } = useApp();
  const items = [
    { i: <Zap className="size-5" />, t: "Fast Response" },
    { i: <Shield className="size-5" />, t: "Verified Technicians" },
    { i: <Clock className="size-5" />, t: "24/7 Support" },
    { i: <MapPin className="size-5" />, t: "Real-Time Tracking" },
  ];
  return (
    <div className="flex min-h-full flex-col justify-between p-7 text-primary-foreground" style={{ background: "var(--gradient-night)" }}>
      <div className="fx-fade pt-10">
        <div className="flex items-end gap-2">
          <span className="text-5xl font-black tracking-tight">FixNow</span>
          <span className="rounded-lg bg-primary px-2.5 py-1 text-xl font-black">SOS</span>
        </div>
        <p className="mt-3 text-sm text-primary-foreground/70">Emergency Repair. One Tap Away.</p>
        <h2 className="mt-10 border-l-4 border-primary pl-4 text-3xl font-black leading-tight">
          When waiting<br />isn't an option.
        </h2>
      </div>
      <div className="fx-fade my-8 grid gap-4">
        {items.map((x) => (
          <div key={x.t} className="flex items-center gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/50 bg-primary/15 text-primary">{x.i}</span>
            <span className="font-semibold">{x.t}</span>
          </div>
        ))}
      </div>
      <div className="grid gap-3 pb-4">
        <Btn onClick={() => go("auth")}>Get Started <ArrowRight className="size-4" /></Btn>
        <button onClick={() => go("auth")} className="fx-press text-sm font-semibold underline underline-offset-4">Log In</button>
      </div>
    </div>
  );
}

function Auth() {
  const { go, set, toast } = useApp();
  const [f, setF] = useState({ name: "Ayushman Sharma", phone: "9876543210", email: "ayushman99@gmail.com" });
  const [loc, setLoc] = useState(true);
  const submit = () => {
    if (!f.name.trim()) return toast("Please enter your name.");
    if (!/^\d{10}$/.test(f.phone)) return toast("Enter a valid 10-digit phone number.");
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return toast("Enter a valid email address.");
    if (!loc) return toast("Location permission is required for emergency service.");
    set({ user: { ...f } });
    toast("Welcome to FixNow SOS, " + f.name.split(" ")[0] + "!");
    go("home");
  };
  const input = "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary";
  return (
    <div className="min-h-full bg-background">
      <Head title="Continue" onBack={() => go("splash")} />
      <div className="fx-fade space-y-4 p-5">
        <div>
          <h2 className="text-2xl font-black">Help is on the way.</h2>
          <p className="text-sm text-muted-foreground">Create your demo account in seconds.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Btn variant="outline"><Phone className="size-4" /> Phone</Btn>
          <Btn variant="outline"><Mail className="size-4" /> Email</Btn>
        </div>
        <Btn variant="ghost" onClick={() => toast("Google sign-in is simulated in demo mode.")}>Continue with Google</Btn>
        <div className="flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-border" />or fill details<span className="h-px flex-1 bg-border" /></div>
        <input className={input} placeholder="Full name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
        <input className={input} placeholder="Phone number" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
        <input className={input} placeholder="Email address" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
        <button onClick={() => setLoc(!loc)} className="fx-press flex w-full items-center gap-3 rounded-2xl border border-border bg-card p-4 text-left">
          <Navigation className="size-5 shrink-0 text-primary" />
          <span className="min-w-0 flex-1 text-sm font-medium">Allow location access<span className="block text-xs text-muted-foreground">Agra, Uttar Pradesh</span></span>
          <span className={`grid size-6 shrink-0 place-items-center rounded-full ${loc ? "bg-success text-primary-foreground" : "border border-border"}`}>{loc && <Check className="size-4" />}</span>
        </button>
        <Btn onClick={submit}>Continue <ArrowRight className="size-4" /></Btn>
      </div>
    </div>
  );
}

function HomeScreen() {
  const { go, state, setDraft, toast } = useApp();
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good Morning," : hour < 17 ? "Good Afternoon," : "Good Evening,";
  return (
    <div className="fx-fade min-h-full bg-background pb-4">
      <div className="rounded-b-3xl px-5 pb-6 pt-5 text-primary-foreground" style={{ background: "var(--gradient-night)" }}>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="text-xs text-primary-foreground/70">{greet}</p>
            <p className="truncate text-xl font-black">{state.user?.name ?? "Guest"}</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-primary-foreground/80"><MapPin className="size-3.5 text-primary" /> Agra ▾</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button onClick={() => toast("No new notifications.")} className="fx-press"><Bell className="size-5" /></button>
            <button onClick={() => go("profile")} className="fx-press grid size-10 place-items-center rounded-full bg-primary font-bold">{(state.user?.name ?? "A").charAt(0)}</button>
          </div>
        </div>
        <div className="fx-pulse mt-5 rounded-2xl p-4" style={{ background: "var(--gradient-emergency)" }}>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2">
            <div className="min-w-0">
              <p className="text-base font-black leading-tight">Emergency? We're Just a Tap Away.</p>
              <p className="mt-1 text-xs text-primary-foreground/85">Get a technician to your location in minutes.</p>
              <button onClick={() => go("sos")} className="fx-press mt-3 inline-flex items-center gap-2 rounded-xl bg-card px-4 py-2 text-xs font-bold text-foreground">Book Now <ArrowRight className="size-3.5" /></button>
            </div>
            <span className="self-end text-2xl font-black opacity-80">24/7</span>
          </div>
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-bold">Select a Service</h2>
          <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-bold text-success">DEMO MODE</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {SERVICES.map((s) => (
            <button key={s.id} onClick={() => { setDraft({ serviceId: s.id, problem: undefined, note: "" }); go("service"); }}
              className="fx-press grid gap-1.5 rounded-2xl border border-border bg-card p-3 text-center shadow-[var(--shadow-card)]">
              <span className="text-2xl">{s.icon}</span>
              <span className="text-[11px] font-semibold leading-tight">{s.name}</span>
            </button>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-border bg-card p-3 text-center text-[10px] font-semibold">
          <span className="grid gap-1"><Shield className="mx-auto size-4 text-success" />Verified Technicians</span>
          <span className="grid gap-1"><IndianRupee className="mx-auto size-4 text-info" />Transparent Pricing</span>
          <span className="grid gap-1"><MapPin className="mx-auto size-4 text-primary" />Live Tracking</span>
        </div>
      </div>
    </div>
  );
}

function ServiceScreen() {
  const { go, draft, setDraft, toast } = useApp();
  const svc = SERVICES.find((s) => s.id === draft.serviceId) ?? SERVICES[0]!;
  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title={svc.name} onBack={() => go("home")} />
      <div className="space-y-5 p-5">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)]">
          <p className="text-sm font-bold">{svc.icon} {svc.desc}</p>
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-secondary p-3"><p className="text-muted-foreground">Inspection fee</p><p className="text-base font-black">₹{svc.visit}</p></div>
            <div className="rounded-xl bg-secondary p-3"><p className="text-muted-foreground">Repair estimate</p><p className="text-base font-black">{svc.range}</p></div>
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">Technician arrival: 10–20 min · Final price may vary after diagnosis.</p>
        </div>

        <div>
          <h3 className="mb-2 font-bold">What's the problem?</h3>
          <div className="flex flex-wrap gap-2">
            {svc.problems.map((p) => (
              <button key={p} onClick={() => setDraft({ problem: p })}
                className={`fx-press rounded-full border px-3.5 py-2 text-xs font-semibold ${draft.problem === p ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>{p}</button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-bold">Describe your problem</h3>
          <textarea value={draft.note ?? ""} onChange={(e) => setDraft({ note: e.target.value })} rows={4}
            placeholder="Tell us what is wrong..." className="w-full rounded-2xl border border-border bg-card p-4 text-sm outline-none focus:border-primary" />
          <button onClick={() => toast("Photo attached (demo).")} className="fx-press mt-2 flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-2.5 text-xs font-semibold text-muted-foreground">
            <Camera className="size-4" /> Add a photo (optional)
          </button>
        </div>

        <Btn onClick={() => { if (!draft.problem) return toast("Please select a problem first."); go("location"); }}>
          Continue <ArrowRight className="size-4" />
        </Btn>
      </div>
    </div>
  );
}

function LocationScreen() {
  const { go, draft, setDraft, toast } = useApp();
  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title="Confirm Location" onBack={() => go("service")} />
      <div className="space-y-4 p-5">
        <h2 className="text-lg font-black">Where should we send the technician?</h2>
        <div className="fx-map relative h-40 overflow-hidden rounded-2xl border border-border">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-primary"><MapPin className="size-8 fill-primary/20" /></span>
          <span className="absolute bottom-2 left-2 rounded-lg bg-card px-2 py-1 text-[10px] font-semibold">Agra, Uttar Pradesh</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Btn variant="outline" onClick={() => { setDraft({ address: ADDRESSES[0]!.line }); toast("Using current location."); }}><Navigation className="size-4" /> Current</Btn>
          <Btn variant="outline" onClick={() => toast("Search is simulated in demo mode.")}><Search className="size-4" /> Search</Btn>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {ADDRESSES.map((a) => (
            <button key={a.id} onClick={() => setDraft({ address: a.line })}
              className="fx-press flex w-full items-center gap-3 border-b border-border p-4 text-left last:border-0">
              <MapPin className="size-5 shrink-0 text-primary" />
              <span className="min-w-0 flex-1"><span className="block text-sm font-bold">{a.label}</span><span className="block truncate text-xs text-muted-foreground">{a.line}</span></span>
              <span className={`grid size-5 shrink-0 place-items-center rounded-full ${draft.address === a.line ? "bg-success text-primary-foreground" : "border border-border"}`}>{draft.address === a.line && <Check className="size-3" />}</span>
            </button>
          ))}
        </div>
        <Btn onClick={() => { if (!draft.address) return toast("Please confirm your location."); go("summary"); }}>Confirm Location</Btn>
      </div>
    </div>
  );
}

function Summary() {
  const { go, draft, createBooking, toast } = useApp();
  const svc = SERVICES.find((s) => s.id === draft.serviceId) ?? SERVICES[0]!;
  const rows = [
    ["Service", svc.name], ["Problem", draft.problem ?? "—"], ["Location", draft.address ?? "—"],
    ["Response", "10–15 minutes"], ["Estimated visit fee", `₹${svc.visit}`], ["Estimated repair cost", svc.range],
  ];
  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title="Booking Summary" onBack={() => go("location")} />
      <div className="space-y-4 p-5">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          {rows.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-b border-border p-4 last:border-0">
              <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{k}</span>
              <span className="text-right text-sm font-semibold">{v}</span>
            </div>
          ))}
        </div>
        <p className="rounded-xl bg-secondary p-3 text-xs text-muted-foreground">Final repair cost will be confirmed by the technician after inspection.</p>
        <Btn onClick={() => { createBooking(); toast("Emergency booking created."); go("matching"); }}><Zap className="size-4" /> Confirm Emergency Booking</Btn>
        <Btn variant="ghost" onClick={() => go("location")}>Back</Btn>
      </div>
    </div>
  );
}

function Matching() {
  const { go, active, updateBooking } = useApp();
  const [found, setFound] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => { setFound(true); if (active) updateBooking(active.id, { status: "technician_assigned" }); }, 2600);
    return () => clearTimeout(t);
  }, [active?.id]);
  if (!active) return <Empty />;
  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-6 bg-background p-6 text-center">
      {!found ? (
        <>
          <div className="relative grid size-44 place-items-center">
            <span className="fx-radar absolute size-40 rounded-full bg-primary/25" />
            <span className="fx-radar absolute size-40 rounded-full bg-primary/25 [animation-delay:.6s]" />
            <span className="grid size-20 place-items-center rounded-full bg-primary text-primary-foreground"><Zap className="size-9" /></span>
          </div>
          <div>
            <h2 className="text-xl font-black">Finding the nearest technician...</h2>
            <p className="mt-1 text-sm text-muted-foreground">Verified help. Fast response.</p>
          </div>
        </>
      ) : (
        <div className="fx-pop w-full space-y-4">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-success text-primary-foreground"><Check className="size-9" /></span>
          <h2 className="text-xl font-black">Technician Found!</h2>
          <TechCard b={active} />
          <div className="grid gap-2 rounded-2xl border border-border bg-card p-4 text-left text-xs font-semibold">
            <span className="flex items-center gap-2"><Check className="size-4 text-success" /> Identity Verified</span>
            <span className="flex items-center gap-2"><Check className="size-4 text-success" /> Background Verified</span>
            <span className="flex items-center gap-2"><Check className="size-4 text-success" /> {active.tech.jobs}+ Services</span>
          </div>
          <Btn onClick={() => { updateBooking(active.id, { status: "confirmed" }); go("confirmed"); }}>Track Technician</Btn>
        </div>
      )}
    </div>
  );
}

function Confirmed() {
  const { go, active, updateBooking } = useApp();
  if (!active) return <Empty />;
  const rows = [["Booking ID", "#" + active.id], ["Service", active.service], ["Problem", active.problem], ["Technician", active.tech.name], ["Rating", `⭐ ${active.tech.rating} (${active.tech.jobs} jobs)`], ["Arrival", `${active.eta} min approx.`], ["Location", active.address]];
  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title={"Booking #" + active.id} onBack={() => go("home")} />
      <div className="space-y-4 p-5 text-center">
        <span className="fx-pop mx-auto grid size-16 place-items-center rounded-full bg-success text-primary-foreground"><Check className="size-9" /></span>
        <div>
          <h2 className="text-2xl font-black">Booking Confirmed!</h2>
          <p className="text-sm text-muted-foreground">Your technician is on the way. You'll get updates in real-time.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[var(--shadow-card)]">
          {rows.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-b border-border px-4 py-3 last:border-0">
              <span className="text-xs text-muted-foreground">{k}</span>
              <span className="text-right text-sm font-semibold">{v}</span>
            </div>
          ))}
        </div>
        <Btn onClick={() => { updateBooking(active.id, { status: "technician_on_way" }); go("tracking"); }}>Track Live</Btn>
        <Btn variant="ghost" onClick={() => { setTimeout(() => {}, 0); go("tracking"); }}>View Service Details</Btn>
      </div>
    </div>
  );
}

function Tracking() {
  const { go, active, updateBooking, toast } = useApp();
  const [cancelOpen, setCancel] = useState(false);

  useEffect(() => {
    if (!active || active.status !== "technician_on_way") return;
    const t = setInterval(() => {
      const next = active.eta - 2;
      if (next <= 0) { updateBooking(active.id, { eta: 0, status: "technician_arrived" }); }
      else updateBooking(active.id, { eta: next });
    }, 3500);
    return () => clearInterval(t);
  }, [active?.eta, active?.status]);

  if (!active) return <Empty />;
  const startEta = active.tech.eta || 8;
  const prog = Math.min(1, Math.max(0, 1 - active.eta / startEta));
  const arrived = active.status === "technician_arrived";

  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title="Live Tracking" onBack={() => go("home")} />
      <div className="fx-map relative h-72 border-b border-border">
        <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M18,82 C38,72 45,45 78,22" fill="none" stroke="oklch(0.55 0.18 250)" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
        <span className="absolute bottom-[14%] left-[14%] -translate-x-1/2 text-primary"><MapPin className="size-6 fill-primary/25" /></span>
        <span className="absolute right-[18%] top-[16%] text-primary"><MapPin className="size-6 fill-primary/25" /></span>
        <span className="absolute left-[10%] top-[8%] rounded bg-card px-1.5 py-0.5 text-[10px] font-semibold">Agra Fort</span>
        <span className="absolute bottom-[6%] left-[6%] rounded bg-card px-1.5 py-0.5 text-[10px] font-semibold">Agra Cantt.</span>
        <span
          className="absolute grid size-9 place-items-center rounded-full border-2 border-card bg-navy text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-1000"
          style={{ left: `${18 + prog * 60}%`, top: `${82 - prog * 60}%` }}
        >🔧</span>
        <div className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
          {arrived ? "Technician has arrived" : `Technician Arriving in ${active.eta} min`}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <TechCard b={active} />
        <div className="grid grid-cols-3 gap-2">
          <Btn variant="outline" onClick={() => toast("Calling " + active.tech.name + "...")}><Phone className="size-4" /> Call</Btn>
          <Btn variant="outline" onClick={() => toast("Message sent to technician.")}><MessageSquare className="size-4" /> Chat</Btn>
          <Btn variant="danger" onClick={() => setCancel(true)}><X className="size-4" /> Cancel</Btn>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4">
          <div className="grid grid-cols-3 text-center text-[11px]">
            {[["Booked", "9:41 AM", true], ["On the way", "9:43 AM", true], ["Arriving", "9:51 AM", arrived]].map(([l, t, done]) => (
              <div key={l as string} className="grid gap-1">
                <span className={`mx-auto size-3 rounded-full ${done ? "bg-primary" : "bg-border"}`} />
                <span className="font-bold">{l as string}</span>
                <span className="text-muted-foreground">{t as string}</span>
              </div>
            ))}
          </div>
        </div>

        {arrived ? (
          <>
            <p className="text-center text-sm font-semibold">{active.tech.name} is at your location.</p>
            <Btn onClick={() => { updateBooking(active.id, { status: "repair_started", diagnosis: "Charging port damaged" }); go("progress"); }}>Start Service</Btn>
          </>
        ) : (
          <p className="text-center text-xs text-muted-foreground">Your technician is nearby. Track every step.</p>
        )}
      </div>

      {cancelOpen && (
        <Modal onClose={() => setCancel(false)} title="Cancel this booking?" body="Your technician has already started travelling.">
          <Btn variant="ghost" onClick={() => setCancel(false)}>Keep Booking</Btn>
          <Btn onClick={() => { updateBooking(active.id, { status: "cancelled", eta: 0 }); setCancel(false); toast("Booking cancelled."); go("bookings"); }}>Cancel Booking</Btn>
        </Modal>
      )}
    </div>
  );
}

function Modal({ title, body, children, onClose }: { title: string; body: string; children: ReactNode; onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-40 grid place-items-end bg-navy/50 p-4" onClick={onClose}>
      <div className="fx-pop w-full space-y-3 rounded-3xl bg-card p-5" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg font-black">{title}</h3>
        <p className="text-sm text-muted-foreground">{body}</p>
        <div className="grid gap-2 pt-1">{children}</div>
      </div>
    </div>
  );
}

function Progress() {
  const { go, active, updateBooking, toast } = useApp();
  if (!active) return <Empty />;
  const steps = [
    ["Technician Arrived", true], ["Diagnosis Started", true],
    ["Repair In Progress", active.status === "repair_started" || active.status === "repair_approved"],
    ["Payment", active.paid], ["Completed", active.status === "completed" || active.status === "rated"],
  ] as [string, boolean][];
  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title="Repair in Progress" onBack={() => go("tracking")} />
      <div className="space-y-4 p-5">
        <TechCard b={active} compact />
        <div className="rounded-2xl border border-border bg-card p-4">
          <h3 className="mb-3 font-bold">Repair Status</h3>
          <div className="grid gap-3">
            {steps.map(([l, done]) => (
              <div key={l} className="flex items-center gap-3 text-sm">
                <span className={`grid size-5 shrink-0 place-items-center rounded-full ${done ? "bg-success text-primary-foreground" : "border border-border"}`}>{done && <Check className="size-3" />}</span>
                <span className={done ? "font-semibold" : "text-muted-foreground"}>{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Diagnosis</p>
          <p className="text-base font-bold">{active.diagnosis || "Inspecting your device..."}</p>
          <p className="mt-2 text-xs text-muted-foreground">Estimated repair</p>
          <p className="text-2xl font-black text-primary">₹{active.repair}</p>
        </div>
        <Btn onClick={() => { updateBooking(active.id, { status: "payment_pending" }); toast("Repair approved. Work completed."); go("payment"); }}>Approve Repair</Btn>
        <Btn variant="ghost" onClick={() => toast("Connecting you to " + active.tech.name + "...")}>Contact Technician</Btn>
      </div>
    </div>
  );
}

function Payment() {
  const { go, active, updateBooking, state, set, toast } = useApp();
  const [method, setMethod] = useState("UPI");
  const [done, setDone] = useState(false);
  if (!active) return <Empty />;
  const pay = () => {
    const txn = "FNTRX" + Math.floor(100000 + Math.random() * 899999);
    updateBooking(active.id, { paid: true, txn, status: "payment_completed" });
    set({ wallet: method === "Cash" ? state.wallet : state.wallet - active.total, txns: [{ id: txn, label: active.service, amount: -active.total }, ...state.txns] });
    setDone(true);
    toast("Payment successful.");
  };
  if (done) {
    return (
      <div className="flex min-h-full flex-col items-center justify-center gap-4 bg-background p-6 text-center">
        <span className="fx-pop grid size-20 place-items-center rounded-full bg-success text-primary-foreground"><Check className="size-11" /></span>
        <h2 className="text-2xl font-black">Payment Successful</h2>
        <p className="text-sm text-muted-foreground">Transaction ID<br /><span className="font-bold text-foreground">{active.txn}</span></p>
        <Btn onClick={() => { updateBooking(active.id, { status: "repair_completed" }); go("completed"); }}>Continue</Btn>
      </div>
    );
  }
  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title="Payment" onBack={() => go("progress")} />
      <div className="space-y-4 p-5">
        <div className="rounded-2xl border border-border bg-card p-4 text-sm">
          {[["Inspection Fee", active.visit], ["Repair Cost", active.repair], ["Service Charge", active.charge]].map(([k, v]) => (
            <div key={k as string} className="flex justify-between border-b border-border py-2"><span className="text-muted-foreground">{k as string}</span><span className="font-semibold">₹{v as number}</span></div>
          ))}
          <div className="flex justify-between pt-3 text-lg font-black"><span>Total</span><span>₹{active.total}</span></div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {["UPI", "Credit/Debit Card", "Cash"].map((m) => (
            <button key={m} onClick={() => setMethod(m)} className="fx-press flex w-full items-center gap-3 border-b border-border p-4 text-left last:border-0">
              <CreditCard className="size-5 shrink-0 text-muted-foreground" />
              <span className="min-w-0 flex-1 text-sm font-semibold">{m}</span>
              <span className={`grid size-5 shrink-0 place-items-center rounded-full ${method === m ? "bg-primary text-primary-foreground" : "border border-border"}`}>{method === m && <Check className="size-3" />}</span>
            </button>
          ))}
        </div>
        <Btn onClick={pay}>Pay ₹{active.total}</Btn>
        <p className="text-center text-[11px] text-muted-foreground">Demo payment — no real gateway is used.</p>
      </div>
    </div>
  );
}

function Completed() {
  const { go, active, setDraft, toast } = useApp();
  if (!active) return <Empty />;
  return (
    <div className="fx-fade flex min-h-full flex-col justify-center gap-4 bg-background p-6 text-center">
      <span className="fx-pop text-5xl">🎉</span>
      <h2 className="text-2xl font-black">Repair Completed!</h2>
      <p className="text-sm text-muted-foreground">Your device is working again. Repair. Pay. Done.</p>
      <TechCard b={active} compact />
      <div className="rounded-2xl bg-secondary p-4"><p className="text-xs text-muted-foreground">Total Paid</p><p className="text-3xl font-black">₹{active.total}</p></div>
      <Btn onClick={() => go("rating")}>Rate Technician</Btn>
      <Btn variant="outline" onClick={() => toast("Receipt " + active.txn + " downloaded (demo).")}>View Receipt</Btn>
      <Btn variant="ghost" onClick={() => { setDraft({ serviceId: undefined, problem: undefined, note: "" }); go("home"); }}>Book Another Service</Btn>
    </div>
  );
}

function Rating() {
  const { go, active, updateBooking, toast } = useApp();
  const [stars, setStars] = useState(5);
  const [tags, setTags] = useState<string[]>(["On Time"]);
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);
  if (!active) return <Empty />;
  const all = ["On Time", "Professional", "Polite", "Helpful", "Clean Work", "Good Service", "Other"];
  if (sent) {
    return (
      <div className="flex min-h-full flex-col items-center justify-center gap-4 p-6 text-center">
        <span className="fx-pop grid size-16 place-items-center rounded-full bg-success text-primary-foreground"><Check className="size-9" /></span>
        <h2 className="text-xl font-black">Thank you for your feedback!</h2>
        <Btn onClick={() => go("bookings")}>View My Bookings</Btn>
      </div>
    );
  }
  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title="Rate Your Technician" onBack={() => go("completed")} />
      <div className="space-y-4 p-5">
        <div className="grid justify-items-center gap-3 rounded-2xl border border-border bg-card p-5">
          <span className="grid size-14 place-items-center rounded-full bg-navy text-xl font-bold text-primary-foreground">{active.tech.name.charAt(0)}</span>
          <p className="font-bold">{active.tech.name}</p>
          <p className="text-xs text-muted-foreground">⭐ {active.tech.rating} ({active.tech.jobs} jobs)</p>
          <Stars value={stars} onChange={setStars} size="size-8" />
        </div>
        <div>
          <h3 className="mb-2 font-bold">Your Feedback</h3>
          <div className="flex flex-wrap gap-2">
            {all.map((t) => (
              <button key={t} onClick={() => setTags((p) => p.includes(t) ? p.filter((x) => x !== t) : [...p, t])}
                className={`fx-press rounded-full border px-3.5 py-2 text-xs font-semibold ${tags.includes(t) ? "border-navy bg-navy text-primary-foreground" : "border-border bg-card"}`}>{t}</button>
            ))}
          </div>
        </div>
        <textarea rows={3} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment (optional)..."
          className="w-full rounded-2xl border border-border bg-card p-4 text-sm outline-none focus:border-primary" />
        <Btn variant="dark" onClick={() => {
          updateBooking(active.id, { rating: stars, tags, comment, status: "completed" });
          setSent(true); toast("Review submitted.");
        }}>Submit Review</Btn>
      </div>
    </div>
  );
}

function Bookings() {
  const { state, go, set, setDetailId } = useApp();
  const [tab, setTab] = useState<"Active" | "Completed" | "Cancelled">("Active");
  const isActive = (s: string) => !["completed", "cancelled"].includes(s);
  const list = state.bookings.filter((b) => tab === "Active" ? isActive(b.status) : tab === "Completed" ? b.status === "completed" : b.status === "cancelled");
  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title="My Bookings" />
      <div className="grid grid-cols-3 gap-2 p-4">
        {(["Active", "Completed", "Cancelled"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`fx-press rounded-xl px-3 py-2 text-xs font-bold ${tab === t ? "bg-navy text-primary-foreground" : "bg-secondary"}`}>{t}</button>
        ))}
      </div>
      <div className="grid gap-3 px-4 pb-6">
        {list.length === 0 && <p className="py-14 text-center text-sm text-muted-foreground">No {tab.toLowerCase()} bookings yet.</p>}
        {list.map((b) => (
          <button key={b.id} onClick={() => { set({ activeId: b.id }); setDetailId(b.id); go("bookingDetail"); }}
            className="fx-press rounded-2xl border border-border bg-card p-4 text-left shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-muted-foreground">#{b.id}</span>
              <StatusPill s={b.status} />
            </div>
            <p className="mt-1 font-bold">{b.service}</p>
            <p className="text-xs text-muted-foreground">{b.problem} · {b.tech.name}</p>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{b.createdAt}</span>
              <span className="font-bold">{b.paid ? `₹${b.total}` : isActive(b.status) ? `${b.eta} min` : "—"}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function BookingDetail() {
  const { state, detailId, go, toast } = useApp();
  const b = state.bookings.find((x) => x.id === detailId);
  if (!b) return <Empty />;
  const rows = [["Booking ID", "#" + b.id], ["Service", b.service], ["Problem", b.problem], ["Technician", b.tech.name], ["Location", b.address], ["Status", b.status.replace(/_/g, " ")], ["Booked", b.createdAt], ["Payment", b.paid ? `Paid ₹${b.total}` : "Pending"]];
  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title="Booking Details" onBack={() => go("bookings")} />
      <div className="space-y-4 p-5">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {rows.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-b border-border px-4 py-3 last:border-0">
              <span className="text-xs text-muted-foreground">{k}</span>
              <span className="truncate text-right text-sm font-semibold capitalize">{v}</span>
            </div>
          ))}
        </div>
        {b.note && <p className="rounded-xl bg-secondary p-3 text-xs">"{b.note}"</p>}
        {!["completed", "cancelled"].includes(b.status) && <Btn onClick={() => go("tracking")}>Track Live</Btn>}
        {b.rating ? <div className="flex items-center gap-2 text-sm"><span className="font-semibold">Your rating:</span><Stars value={b.rating} size="size-4" /></div> : null}
        <Btn variant="ghost" onClick={() => toast("Invoice sent to your email (demo).")}>Email Invoice</Btn>
      </div>
    </div>
  );
}

function WalletScreen() {
  const { state, set, toast } = useApp();
  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title="Wallet" />
      <div className="space-y-4 p-5">
        <div className="rounded-3xl p-5 text-primary-foreground" style={{ background: "var(--gradient-night)" }}>
          <p className="text-xs opacity-70">Wallet Balance</p>
          <p className="text-4xl font-black">₹{state.wallet.toLocaleString("en-IN")}</p>
          <button onClick={() => { set({ wallet: state.wallet + 500, txns: [{ id: String(Date.now()), label: "Wallet top-up", amount: 500 }, ...state.txns] }); toast("₹500 added to wallet."); }}
            className="fx-press mt-4 rounded-xl bg-primary px-4 py-2 text-xs font-bold">+ Add Money</button>
        </div>
        <div>
          <h3 className="mb-2 font-bold">Transactions</h3>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {state.txns.map((t) => (
              <div key={t.id} className="flex items-center justify-between gap-3 border-b border-border p-4 last:border-0">
                <span className="min-w-0 truncate text-sm font-medium">{t.label}</span>
                <span className={`shrink-0 text-sm font-bold ${t.amount > 0 ? "text-success" : "text-foreground"}`}>{t.amount > 0 ? "+" : "-"}₹{Math.abs(t.amount)}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-bold">Payment Methods</h3>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <Row icon={<IndianRupee className="size-4" />} label="UPI  ****4821" onClick={() => toast("UPI set as default.")} />
            <Row icon={<CreditCard className="size-4" />} label="Credit Card  ****2198" onClick={() => toast("Card set as default.")} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  const { state, go, reset, toast, set } = useApp();
  const done = state.bookings.filter((b) => b.status === "completed").length;
  return (
    <div className="fx-fade min-h-full bg-background">
      <div className="rounded-b-3xl px-5 pb-6 pt-6 text-primary-foreground" style={{ background: "var(--gradient-night)" }}>
        <div className="flex items-center gap-4">
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-primary text-2xl font-black">{(state.user?.name ?? "A").charAt(0)}</span>
          <div className="min-w-0">
            <p className="truncate text-lg font-black">{state.user?.name ?? "Guest User"}</p>
            <p className="truncate text-xs opacity-75">{state.user?.email ?? "demo@fixnow.in"}</p>
            <span className="mt-1 inline-block rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-navy">★ Premium Member</span>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 rounded-2xl bg-navy-2 p-3 text-center">
          {[[String(9 + state.bookings.length), "Total Bookings"], ["4.8", "Avg. Rating"], [String(Math.max(3, done)), "Services Used"]].map(([v, l]) => (
            <div key={l}><p className="text-lg font-black">{v}</p><p className="text-[10px] opacity-70">{l}</p></div>
          ))}
        </div>
      </div>
      <div className="m-5 overflow-hidden rounded-2xl border border-border bg-card">
        <Row icon={<ClipboardList className="size-4" />} label="My Bookings" onClick={() => go("bookings")} />
        <Row icon={<MapPin className="size-4" />} label="Saved Addresses" onClick={() => { toast("3 saved addresses in Agra."); go("location"); }} />
        <Row icon={<CreditCard className="size-4" />} label="Payment Methods" onClick={() => go("wallet")} />
        <Row icon={<HelpCircle className="size-4" />} label="Help & Support" onClick={() => go("help")} />
        <Row icon={<Info className="size-4" />} label="About FixNow SOS" onClick={() => toast("FixNow SOS — Emergency Repair. One Tap Away.")} />
        <Row icon={<Settings2 className="size-4" />} label="Reset Demo Data" onClick={reset} />
        <Row icon={<LogOut className="size-4" />} label="Log Out" onClick={() => { set({ user: null }); go("splash"); }} />
      </div>
    </div>
  );
}

function Help() {
  const { go, toast } = useApp();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const faqs: [string, string][] = [
    ["How does FixNow work?", "Pick a service, describe the problem, confirm your location and we dispatch the nearest verified technician."],
    ["How quickly will a technician arrive?", "Most emergency jobs in Agra are attended within 10–20 minutes."],
    ["Are technicians verified?", "Yes — identity and background checks are mandatory for every technician."],
    ["How is pricing calculated?", "A fixed inspection fee plus a repair estimate confirmed after diagnosis."],
    ["Can I cancel a booking?", "Yes, you can cancel any time before the repair starts, free of charge."],
    ["What if the technician cannot fix my device?", "You only pay the inspection fee, and we suggest an authorised service option."],
  ];
  const list = faqs.filter(([k]) => k.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="fx-fade min-h-full bg-background">
      <Head title="Help & Support" onBack={() => go("profile")} />
      <div className="space-y-4 p-5">
        <h2 className="text-xl font-black">How can we help?</h2>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search help articles..." className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {list.map(([k, v]) => (
            <div key={k} className="border-b border-border last:border-0">
              <button onClick={() => setOpen(open === k ? null : k)} className="fx-press flex w-full items-center gap-3 p-4 text-left text-sm font-semibold">
                <span className="min-w-0 flex-1">{k}</span><ChevronRight className={`size-4 shrink-0 transition ${open === k ? "rotate-90" : ""}`} />
              </button>
              {open === k && <p className="px-4 pb-4 text-xs text-muted-foreground">{v}</p>}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          <Btn variant="outline" onClick={() => toast("Calling 1800-FIXNOW...")}><Phone className="size-4" /></Btn>
          <Btn variant="outline" onClick={() => toast("Support chat opened.")}><MessageSquare className="size-4" /></Btn>
          <Btn variant="outline" onClick={() => toast("Email sent to care@fixnow.in")}><Mail className="size-4" /></Btn>
        </div>
      </div>
    </div>
  );
}

function SOS() {
  const { go, setDraft, createBooking, toast } = useApp();
  const quick: [string, string][] = [["mobile", "Phone"], ["laptop", "Laptop"], ["tv", "TV"], ["fridge", "Appliance"], ["electrical", "Electrical"], ["car", "Car"], ["other", "Other"]];
  const [pick, setPick] = useState<string | null>(null);
  return (
    <div className="fx-fade min-h-full p-5 text-primary-foreground" style={{ background: "var(--gradient-night)" }}>
      <button onClick={() => go("home")} className="fx-press mb-4 rounded-full p-1.5"><ArrowLeft className="size-5" /></button>
      <h2 className="text-2xl font-black">⚡ SOS — Need Help Now</h2>
      <p className="mt-1 text-sm opacity-75">What's wrong? One tap. One technician. One solution.</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {quick.map(([id, label]) => (
          <button key={id} onClick={() => setPick(id)} className={`fx-press rounded-full px-4 py-2.5 text-sm font-semibold ${pick === id ? "bg-primary" : "bg-navy-2"}`}>{label}</button>
        ))}
      </div>
      <div className="mt-6 rounded-2xl bg-navy-2 p-4">
        <p className="text-xs opacity-70">Use my saved location</p>
        <p className="font-bold">Sanjay Place, Agra</p>
      </div>
      <div className="mt-6">
        <Btn onClick={() => {
          if (!pick) return toast("Please select a service first.");
          setDraft({ serviceId: pick, problem: "Emergency — " + (SERVICES.find((s) => s.id === pick)?.problems[0] ?? "Urgent issue"), address: ADDRESSES[0]!.line, note: "SOS emergency request" });
          setTimeout(() => { createBooking(); go("matching"); }, 0);
        }}>Find Technician Now</Btn>
      </div>
    </div>
  );
}

function Empty() {
  const { go } = useApp();
  return (
    <div className="grid min-h-full place-items-center gap-4 p-8 text-center">
      <div>
        <p className="font-bold">No active booking</p>
        <p className="mt-1 text-sm text-muted-foreground">Start a new emergency booking to see this screen.</p>
      </div>
      <Btn onClick={() => go("home")}>Go Home</Btn>
    </div>
  );
}

/* ---------- shell ---------- */

const TABS: [Screen, string, ReactNode][] = [
  ["home", "Home", <HomeIcon className="size-5" key="h" />],
  ["bookings", "Bookings", <ClipboardList className="size-5" key="b" />],
  ["wallet", "Wallet", <Wallet className="size-5" key="w" />],
  ["profile", "Profile", <User className="size-5" key="p" />],
];

function BottomNav() {
  const { screen, go } = useApp();
  return (
    <nav className="sticky bottom-0 z-20 grid grid-cols-4 border-t border-border bg-card/95 backdrop-blur">
      {TABS.map(([s, l, i]) => (
        <button key={s} onClick={() => go(s)} className={`fx-press grid justify-items-center gap-1 py-2.5 text-[10px] font-semibold ${screen === s ? "text-primary" : "text-muted-foreground"}`}>
          {i}{l}
        </button>
      ))}
    </nav>
  );
}

function DemoControls() {
  const { active, updateBooking, go, toast, reset } = useApp();
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute bottom-20 right-3 z-30 grid justify-items-end gap-2">
      {open && (
        <div className="fx-pop grid w-52 gap-1.5 rounded-2xl border border-border bg-card p-3 text-xs shadow-[var(--shadow-card)]">
          <p className="font-bold">Demo Controls</p>
          {[
            ["Simulate Arrived", () => active && (updateBooking(active.id, { status: "technician_arrived", eta: 0 }), go("tracking"))],
            ["Simulate Repair Started", () => active && (updateBooking(active.id, { status: "repair_started", diagnosis: "Charging port damaged" }), go("progress"))],
            ["Simulate Repair Completed", () => active && (updateBooking(active.id, { status: "payment_pending" }), go("payment"))],
            ["Reset Demo", reset],
          ].map(([l, fn]) => (
            <button key={l as string} onClick={() => { if (!active && l !== "Reset Demo") return toast("Create a booking first."); (fn as () => void)(); }}
              className="fx-press rounded-lg bg-secondary px-3 py-2 text-left font-medium">{l as string}</button>
          ))}
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="fx-press rounded-full bg-navy px-3 py-2 text-[10px] font-bold text-primary-foreground">Demo Controls</button>
    </div>
  );
}

function Toasts() {
  const { toasts } = useApp();
  return (
    <div className="pointer-events-none absolute inset-x-4 top-4 z-50 grid gap-2">
      {toasts.map((t) => (
        <div key={t.id} className="fx-pop rounded-xl bg-navy px-4 py-3 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-card)]">{t.m}</div>
      ))}
    </div>
  );
}

function Screens() {
  const { screen } = useApp();
  const map: Record<Screen, ReactNode> = {
    splash: <Splash />, auth: <Auth />, home: <HomeScreen />, service: <ServiceScreen />,
    location: <LocationScreen />, summary: <Summary />, matching: <Matching />, confirmed: <Confirmed />,
    tracking: <Tracking />, progress: <Progress />, payment: <Payment />, completed: <Completed />,
    rating: <Rating />, bookings: <Bookings />, wallet: <WalletScreen />, profile: <Profile />,
    help: <Help />, sos: <SOS />, bookingDetail: <BookingDetail />,
  };
  return <>{map[screen]}</>;
}

function Shell() {
  const { screen } = useApp();
  const chrome = !["splash", "auth", "sos", "matching"].includes(screen);
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden bg-background">
      <Toasts />
      <div className="flex-1 overflow-y-auto">
        <Screens />
      </div>
      {chrome && <DemoControls />}
      {chrome && <BottomNav />}
    </div>
  );
}

export default function FixNowApp() {
  return (
    <AppProvider>
      <div className="min-h-screen lg:grid lg:place-items-center lg:p-8" style={{ background: "var(--gradient-night)" }}>
        <div className="hidden lg:mb-6 lg:block lg:text-center lg:text-primary-foreground">
          <p className="text-3xl font-black">FixNow <span className="rounded bg-primary px-2">SOS</span></p>
          <p className="text-sm opacity-70">Emergency Repair. One Tap Away. — interactive demo</p>
        </div>
        <div className="mx-auto h-screen w-full max-w-[420px] overflow-hidden bg-background lg:h-[860px] lg:rounded-[2.5rem] lg:border-8 lg:border-navy-2 lg:shadow-2xl">
          <Shell />
        </div>
      </div>
    </AppProvider>
  );
}
