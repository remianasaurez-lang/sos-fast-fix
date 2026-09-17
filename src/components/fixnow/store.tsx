import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

export type Screen =
  | "splash" | "auth" | "home" | "service" | "location" | "summary" | "matching"
  | "confirmed" | "tracking" | "progress" | "payment" | "completed" | "rating"
  | "bookings" | "wallet" | "profile" | "help" | "sos" | "bookingDetail";

export type Service = {
  id: string; name: string; icon: string; desc: string; visit: number;
  range: string; problems: string[];
};

export const SERVICES: Service[] = [
  { id: "mobile", name: "Mobile Repair", icon: "📱", desc: "Screen, battery, charging, software", visit: 99, range: "₹499–₹2,999", problems: ["Broken Screen", "Battery Problem", "Charging Problem", "Phone Not Turning On", "Speaker/Microphone", "Software Issue", "Water Damage", "Other"] },
  { id: "laptop", name: "Laptop & Computer", icon: "💻", desc: "Hardware, software, overheating", visit: 149, range: "₹599–₹4,999", problems: ["Not Booting", "Overheating", "Keyboard Issue", "Screen Damage", "Slow Performance", "Virus / OS Issue", "Battery Backup", "Other"] },
  { id: "tv", name: "TV Repair", icon: "📺", desc: "Display, sound, power issues", visit: 149, range: "₹699–₹5,999", problems: ["No Display", "No Sound", "Power Issue", "Lines on Screen", "Smart TV Software", "Other"] },
  { id: "fridge", name: "Refrigerator", icon: "🧊", desc: "Cooling, compressor, electrical", visit: 199, range: "₹499–₹3,999", problems: ["Not Cooling", "Water Leakage", "Compressor Noise", "Ice Build-up", "Not Turning On", "Other"] },
  { id: "washing", name: "Washing Machine", icon: "🧺", desc: "Motor, drainage, vibration", visit: 199, range: "₹499–₹3,499", problems: ["Not Draining", "Excess Vibration", "Drum Not Spinning", "Water Not Filling", "Error Code", "Other"] },
  { id: "ac", name: "AC Repair", icon: "❄️", desc: "Cooling, gas, installation", visit: 199, range: "₹799–₹3,999", problems: ["Not Cooling", "Gas Refill", "Water Dripping", "Noisy Unit", "Installation", "Other"] },
  { id: "electrical", name: "Electrical", icon: "⚡", desc: "Power failures, wiring, faults", visit: 99, range: "₹199–₹2,999", problems: ["Power Failure", "Short Circuit", "Switch / Socket", "Fan Not Working", "Wiring Fault", "Other"] },
  { id: "plumbing", name: "Plumbing", icon: "🚰", desc: "Leakage, pipe, fittings", visit: 99, range: "₹199–₹2,999", problems: ["Pipe Leakage", "Tap Repair", "Blocked Drain", "Tank Overflow", "Fittings", "Other"] },
  { id: "car", name: "Car Breakdown", icon: "🚗", desc: "Battery, tyre, towing, fuel", visit: 249, range: "₹499–₹6,999", problems: ["Battery Dead", "Flat Tyre", "Towing Needed", "Out of Fuel", "Engine Not Starting", "Other"] },
  { id: "other", name: "Other Electronics", icon: "🔌", desc: "Router, microwave, speaker, etc.", visit: 99, range: "₹299–₹2,499", problems: ["Router / Wifi", "Microwave", "Speaker", "Geyser", "Mixer Grinder", "Other"] },
];

export const TECHNICIANS = [
  { id: "t1", name: "Rohit Kumar", role: "Car & Electronics Technician", rating: 4.8, jobs: 124, distance: "2.4 km", eta: 8 },
  { id: "t2", name: "Aman Verma", role: "Appliance Technician", rating: 4.7, jobs: 98, distance: "3.1 km", eta: 9 },
  { id: "t3", name: "Vikas Singh", role: "Electrical & Plumbing Expert", rating: 4.9, jobs: 210, distance: "1.8 km", eta: 6 },
  { id: "t4", name: "Neeraj Sharma", role: "Mobile & Laptop Technician", rating: 4.6, jobs: 87, distance: "4.0 km", eta: 10 },
];

export const ADDRESSES = [
  { id: "home", label: "Home", line: "Sanjay Place, Agra" },
  { id: "college", label: "College", line: "St. John's College, Agra" },
  { id: "office", label: "Office", line: "MG Road, Agra" },
];

export type Booking = {
  id: string; service: string; serviceId: string; problem: string; note: string;
  address: string; status: string; eta: number; tech: (typeof TECHNICIANS)[number];
  visit: number; repair: number; charge: number; total: number; paid: boolean;
  txn?: string; rating?: number; tags?: string[]; comment?: string;
  diagnosis: string; createdAt: string;
};

type Draft = { serviceId?: string; problem?: string; note?: string; address?: string };

type State = {
  user: { name: string; email: string; phone: string } | null;
  bookings: Booking[];
  activeId: string | null;
  wallet: number;
  txns: { id: string; label: string; amount: number }[];
};

const seed = (): State => ({
  user: null,
  activeId: null,
  wallet: 1250,
  txns: [
    { id: "w1", label: "Wallet top-up", amount: 500 },
    { id: "w2", label: "Mobile Repair", amount: -848 },
    { id: "w3", label: "Electrical Repair", amount: -199 },
  ],
  bookings: [
    { id: "FN739821", service: "Laptop & Computer", serviceId: "laptop", problem: "Overheating", note: "", address: "Sanjay Place, Agra", status: "completed", eta: 0, tech: TECHNICIANS[3], visit: 149, repair: 1050, charge: 50, total: 1249, paid: true, diagnosis: "Thermal paste replaced", createdAt: "12 Sep, 4:10 PM", rating: 5 },
    { id: "FN728491", service: "AC Repair", serviceId: "ac", problem: "Not Cooling", note: "", address: "MG Road, Agra", status: "completed", eta: 0, tech: TECHNICIANS[2], visit: 199, repair: 1650, charge: 50, total: 1899, paid: true, diagnosis: "Gas refill + coil clean", createdAt: "28 Aug, 11:20 AM", rating: 4 },
    { id: "FN711204", service: "Plumbing", serviceId: "plumbing", problem: "Pipe Leakage", note: "", address: "St. John's College, Agra", status: "cancelled", eta: 0, tech: TECHNICIANS[1], visit: 99, repair: 0, charge: 0, total: 0, paid: false, diagnosis: "", createdAt: "19 Aug, 9:05 AM" },
  ],
});

const KEY = "fixnow-sos-v1";

type Ctx = {
  screen: Screen; go: (s: Screen) => void;
  state: State; set: (u: Partial<State>) => void;
  draft: Draft; setDraft: (d: Draft) => void;
  active: Booking | null;
  updateBooking: (id: string, u: Partial<Booking>) => void;
  createBooking: () => Booking;
  toast: (m: string) => void; toasts: { id: number; m: string }[];
  detailId: string | null; setDetailId: (id: string | null) => void;
  reset: () => void;
};

const C = createContext<Ctx | null>(null);
export const useApp = () => useContext(C)!;

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(seed);
  const [screen, setScreen] = useState<Screen>("splash");
  const [draft, setDraftState] = useState<Draft>({});
  const [toasts, setToasts] = useState<{ id: number; m: string }[]>([]);
  const [detailId, setDetailId] = useState<string | null>(null);
  const loaded = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const p = JSON.parse(raw);
        setState(p.state);
        if (p.state?.user) setScreen(p.screen && p.screen !== "splash" && p.screen !== "auth" ? p.screen : "home");
        if (p.draft) setDraftState(p.draft);
      }
    } catch { /* ignore */ }
    loaded.current = true;
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    localStorage.setItem(KEY, JSON.stringify({ state, screen, draft }));
  }, [state, screen, draft]);

  const set = (u: Partial<State>) => setState((s) => ({ ...s, ...u }));
  const setDraft = (d: Draft) => setDraftState((p) => ({ ...p, ...d }));
  const toast = (m: string) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, m }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600);
  };

  const active = state.bookings.find((b) => b.id === state.activeId) ?? null;

  const updateBooking = (id: string, u: Partial<Booking>) =>
    setState((s) => ({ ...s, bookings: s.bookings.map((b) => (b.id === id ? { ...b, ...u } : b)) }));

  const createBooking = () => {
    const svc = SERVICES.find((s) => s.id === draft.serviceId) ?? SERVICES[0];
    const tech = TECHNICIANS[Math.floor(Math.random() * TECHNICIANS.length)];
    const b: Booking = {
      id: "FN" + Math.floor(100000 + Math.random() * 899999),
      service: svc.name, serviceId: svc.id,
      problem: draft.problem ?? svc.problems[0], note: draft.note ?? "",
      address: draft.address ?? ADDRESSES[0].line,
      status: "searching", eta: tech.eta, tech,
      visit: svc.visit, repair: 699, charge: 50, total: svc.visit + 699 + 50,
      paid: false, diagnosis: "", createdAt: new Date().toLocaleString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }),
    };
    setState((s) => ({ ...s, bookings: [b, ...s.bookings], activeId: b.id }));
    return b;
  };

  const reset = () => {
    localStorage.removeItem(KEY);
    setState(seed());
    setDraftState({});
    setScreen("splash");
  };

  return (
    <C.Provider value={{ screen, go: setScreen, state, set, draft, setDraft, active, updateBooking, createBooking, toast, toasts, detailId, setDetailId, reset }}>
      {children}
    </C.Provider>
  );
}
