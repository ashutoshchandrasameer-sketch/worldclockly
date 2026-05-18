import { Q as reactExports } from "./server-Dl1L1aMT.js";
function useNow(intervalMs = 1e3) {
  const [now, setNow] = reactExports.useState(() => /* @__PURE__ */ new Date());
  reactExports.useEffect(() => {
    const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}
export {
  useNow as u
};
