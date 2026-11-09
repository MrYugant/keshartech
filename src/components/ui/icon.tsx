import {
  AppWindow,
  Blocks,
  Bot,
  BrainCircuit,
  Building,
  Cloud,
  CodeXml,
  Compass,
  Factory,
  Gauge,
  Handshake,
  Landmark,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Megaphone,
  MonitorSmartphone,
  Network,
  Palette,
  PencilRuler,
  Plug,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * Central icon registry. Data files reference icons by name so content stays
 * serialisable and free of JSX; components resolve the name here.
 */
const icons = {
  appWindow: AppWindow,
  blocks: Blocks,
  bot: Bot,
  brain: BrainCircuit,
  building: Building,
  cloud: Cloud,
  code: CodeXml,
  compass: Compass,
  factory: Factory,
  gauge: Gauge,
  handshake: Handshake,
  landmark: Landmark,
  layers: Layers,
  dashboard: LayoutDashboard,
  support: LifeBuoy,
  megaphone: Megaphone,
  devices: MonitorSmartphone,
  network: Network,
  palette: Palette,
  design: PencilRuler,
  plug: Plug,
  rocket: Rocket,
  search: Search,
  server: Server,
  shield: ShieldCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
  store: Store,
  target: Target,
  growth: TrendingUp,
  users: Users,
  workflow: Workflow,
  wrench: Wrench,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, className, strokeWidth = 1.6 }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}
