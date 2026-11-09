/** Re-mounts on every navigation, replaying a subtle CSS page-enter transition. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
