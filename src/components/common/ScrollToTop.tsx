import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const handleInternalLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");

      if (!link || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      const url = new URL(link.href, window.location.href);

      if (url.origin === window.location.origin && url.pathname === window.location.pathname) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    document.addEventListener("click", handleInternalLinkClick, true);
    return () => document.removeEventListener("click", handleInternalLinkClick, true);
  }, []);

  return null;
}