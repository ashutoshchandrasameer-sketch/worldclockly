import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-xl px-4 py-24 text-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold", children: "Country not found" }),
  /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-block text-primary underline", children: "Back home" })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
