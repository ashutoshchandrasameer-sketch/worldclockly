import { useState, useEffect } from "react";
function useNow(intervalMs = 1e3) {
  const [now, setNow] = useState(() => /* @__PURE__ */ new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}
export {
  useNow as u
};
