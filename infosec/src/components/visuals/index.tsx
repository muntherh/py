import { Link } from "react-router-dom";
import { FlaskConical } from "lucide-react";
import { railEncrypt, routeEncrypt } from "../../crypto/ciphers";
import { AlphabetTable } from "../crypto/AlphabetTable";
import { RailGrid } from "../crypto/RailWorksheet";
import { RouteGrid } from "../crypto/RouteWorksheet";
import * as D from "./Diagrams";
import { EventViewerSim } from "./EventViewerSim";
import { InheritanceSim, NtfsSim } from "./NtfsSim";

function LabLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className="btn-primary">
      <FlaskConical size={16} /> {label}
    </Link>
  );
}

function RailDemo() {
  const t = railEncrypt("MUSCAT", 3);
  return (
    <div className="space-y-3">
      <RailGrid grid={t.grid} pattern={t.pattern} upto={6} />
      <p className="text-sm">Rails: <span className="font-mono">{t.rails.join(" | ")}</span> → <b className="font-mono">{t.output}</b></p>
      <LabLink to="/crypto?tab=rail&cipher=rail&mode=encrypt&text=CIPHERTEXT&depth=3" label="Try the manual's question: CIPHERTEXT, depth 3" />
    </div>
  );
}

function RouteDemo() {
  const t = routeEncrypt("HIDETHEGOLD", 4, 3, "rows", "spiral-tl");
  return (
    <div className="space-y-3">
      <RouteGrid grid={t.grid} order={t.order} upto={12} showNumbers padding={new Set(["3,2"])} />
      <p className="text-sm">Spiral order → <b className="font-mono">{t.output}</b></p>
      <LabLink to="/crypto?tab=route&cipher=route&mode=encrypt&text=HIDETHEGOLD&rows=4&cols=3&fill=rows&route=spiral-tl" label="Step through it in the Crypto Lab" />
    </div>
  );
}

const VISUALS: Record<string, () => React.ReactNode> = {
  "cia-triangle": () => <D.CiaTriangle />,
  "risk-chain": () => <D.RiskChain />,
  "attack-types": () => <D.AttackTypes />,
  "risk-cycle": () => <D.RiskCycle />,
  "ir-cycle": () => <D.IrCycle />,
  "did-rings": () => <D.DidRings />,
  "iaa-flow": () => <D.IaaFlow />,
  factors: () => <D.Factors />,
  mitm: () => <D.Mitm />,
  "biometric-steps": () => <D.BiometricSteps />,
  "far-frr": () => <D.FarFrr />,
  "least-privilege": () => <D.LeastPrivilege />,
  "access-components": () => <D.AccessComponents />,
  "rwx-decoder": () => <D.RwxDecoder />,
  "access-models": () => <D.AccessModels />,
  "blp-biba": () => <D.BlpBiba />,
  "accountability-stack": () => <D.AccountabilityStack />,
  "ids-ips": () => <D.IdsIps />,
  "log-chain": () => <D.LogChain />,
  "event-types": () => <D.EventTypes />,
  "inheritance-sim": () => <InheritanceSim />,
  "ntfs-sim": () => <NtfsSim />,
  "event-viewer-sim": () => <EventViewerSim />,
  "alphabet-table": () => (
    <div className="space-y-3">
      <AlphabetTable />
      <LabLink to="/crypto?tab=alphabet" label="Practise building the table" />
    </div>
  ),
  "caesar-demo": () => <LabLink to="/crypto?tab=caesar&cipher=caesar&mode=encrypt&text=CRYPTO&key=7" label="Solve CRYPTO, K = 7 cell by cell" />,
  "vigenere-demo": () => <LabLink to="/crypto?tab=vigenere&cipher=vigenere&mode=encrypt&text=SECRET&key=WORD" label="Rebuild the SECRET / WORD table yourself" />,
  "rail-demo": () => <RailDemo />,
  "route-demo": () => <RouteDemo />,
};

export const VISUAL_KEYS = Object.keys(VISUALS);

export function Visual({ name }: { name: string }) {
  const v = VISUALS[name];
  if (!v) return null;
  return <div className="rounded-2xl border border-line bg-surface-2/40 p-4">{v()}</div>;
}
