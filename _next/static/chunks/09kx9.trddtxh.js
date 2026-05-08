(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  36880,
  (e) => {
    "use strict";
    var t = e.i(78344),
      a = e.i(97192);
    e.s([
      "HeroSection",
      0,
      function () {
        let [e, l] = (0, a.useState)(!1),
          r = "abcd",
          s = async () => {
            try {
              (await navigator.clipboard.writeText(r),
                l(!0),
                setTimeout(() => l(!1), 2e3));
            } catch {}
          };
        return (0, t.jsxs)("section", {
          className:
            "relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center pt-10",
          children: [
            (0, t.jsxs)("div", {
              className: "absolute inset-0 z-0",
              children: [
                (0, t.jsx)("img", {
                  src: "/hebbkx1anhila5yf.public.blob.vercel-storage.com/duncban%20%282%29-LsCDgKPJRDQLCIBDqdFHwxAuCArMfm.png",
                  alt: "",
                  className: "w-full h-full object-cover object-center",
                  style: { opacity: 0.68 },
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/88",
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className:
                "absolute top-16 left-4 md:left-10 z-10 sign-flicker pointer-events-none",
              style: { animationDelay: "0.3s" },
              "aria-hidden": "true",
              children: (0, t.jsx)("span", {
                className:
                  "font-bold text-xl md:text-3xl tracking-widest text-[#FFD700]",
                style: {
                  fontFamily: "var(--font-anton)",
                  textShadow:
                    "0 0 18px #FFD700, 0 0 38px #FFD700, 0 0 60px #B8960C",
                },
                children: "Alien Trump",
              }),
            }),
            (0, t.jsx)("div", {
              className:
                "absolute top-16 right-4 md:right-10 z-10 sign-flicker pointer-events-none",
              style: { animationDelay: "1.4s" },
              "aria-hidden": "true",
              children: (0, t.jsx)("span", {
                className:
                  "font-bold text-xl md:text-3xl tracking-widest text-[#FFD700]",
                style: {
                  fontFamily: "var(--font-anton)",
                  textShadow:
                    "0 0 18px #FFD700, 0 0 38px #FFD700, 0 0 60px #B8960C",
                },
                children: "MAGA",
              }),
            }),
            (0, t.jsx)("div", {
              className: "relative z-10 mb-2 md:mb-4",
              children: (0, t.jsx)("img", {
                src: "/hebbkx1anhila5yf.public.blob.vercel-storage.com/duncban%20%284%29-cOToio2bPknS74tCApfvSSZERRaAK1.png",
                alt: "$ALIENTRUMP logo",
                className: "logo-shake",
                style: {
                  width: "clamp(220px, 32vw, 440px)",
                  filter:
                    "drop-shadow(0 0 18px rgba(212,175,55,0.65)) drop-shadow(0 0 38px rgba(212,175,55,0.35))",
                },
              }),
            }),
            (0, t.jsx)("div", {
              className: "relative z-10",
              style: { width: "clamp(280px, 36vw, 480px)" },
              children: (0, t.jsx)("img", {
                src: "/hebbkx1anhila5yf.public.blob.vercel-storage.com/dunc%20%286%29-eXBqEGlqewp71Pe4r7RLFUnMiDLInG.png",
                alt: "WUNC mascot - cool guy with sunglasses and gold chain",
                className: "character-idle w-full",
                style: { filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.9))" },
              }),
            }),
            (0, t.jsxs)("div", {
              className:
                "relative z-10 mt-6 flex flex-col items-center gap-4 w-full px-4 max-w-md",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "ca-field flex items-center gap-2 px-4 py-3 rounded-lg border border-[#D4AF37]/55 bg-black/72 backdrop-blur-sm w-full",
                  children: [
                    (0, t.jsxs)("span", {
                      className:
                        "text-[#D4AF37] text-xs font-mono flex-1 truncate opacity-85 select-all",
                      children: ["CA: ", r],
                    }),
                    (0, t.jsx)("button", {
                      onClick: s,
                      className:
                        "shrink-0 text-xs font-bold border border-[#D4AF37] text-[#D4AF37] px-3 py-1 rounded hover:bg-[#D4AF37] hover:text-black transition-all duration-150",
                      "aria-label": "Copy contract address",
                      children: e ? "COPIED!" : "COPY",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "flex flex-wrap items-center justify-center gap-3",
                  children: [
                    (0, t.jsx)("a", {
                      href: "https://dexscreener.com/solana/abcd",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "buy-btn px-7 py-3 bg-[#D4AF37] text-black font-bold rounded-lg text-sm uppercase tracking-widest hover:bg-[#FFD700] transition-all duration-150",
                      style: { fontFamily: "var(--font-anton)" },
                      children: "BUY $ALIENTRUMP",
                    }),
                    (0, t.jsx)("a", {
                      href: "https://x.com/alientrumpX",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "social-btn px-5 py-3 border border-[#D4AF37]/65 text-[#D4AF37] font-bold rounded-lg text-sm uppercase tracking-wider",
                      children: "X (Twitter)",
                    }),
                   
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className:
                "absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-40 pointer-events-none",
              "aria-hidden": "true",
              children: [
                (0, t.jsx)("span", {
                  className: "text-[#D4AF37] text-xs tracking-widest uppercase",
                  children: "Scroll",
                }),
                (0, t.jsx)("span", {
                  className: "text-[#D4AF37] text-base leading-none",
                  children: "↓",
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
  46178,
  (e) => {
    "use strict";
    var t = e.i(78344),
      a = e.i(97192);
    let l = [
      { text: "WIN", color: "#FFD700" },
      { text: "LOSE", color: "#C41E3A" },
      { text: "Alien Trump", color: "#FFD700" },
      { text: "REKT", color: "#C41E3A" },
      { text: "ALL IN", color: "#FFD700" },
      { text: "BUST", color: "#C41E3A" },
      { text: "SEND IT", color: "#FFD700" },
      { text: "REKT", color: "#C41E3A" },
    ];
    e.s([
      "WinLoseFlash",
      0,
      function () {
        let [e, r] = (0, a.useState)(null);
        return ((0, a.useEffect)(() => {
          let e,
            t = () => {
              e = setTimeout(
                () => {
                  (r({
                    ...l[Math.floor(Math.random() * l.length)],
                    key: Date.now(),
                  }),
                    setTimeout(() => r(null), 1400),
                    t());
                },
                7e3 * Math.random() + 5e3,
              );
            };
          return (t(), () => clearTimeout(e));
        }, []),
        e)
          ? (0, t.jsx)(
              "div",
              {
                className:
                  "fixed inset-0 flex items-center justify-center pointer-events-none",
                style: { zIndex: 40 },
                "aria-hidden": "true",
                children: (0, t.jsx)("span", {
                  style: {
                    fontFamily: "var(--font-anton)",
                    fontSize: "clamp(72px, 18vw, 190px)",
                    color: e.color,
                    textShadow: `0 0 40px ${e.color}, 0 0 80px ${e.color}80`,
                    animation: "win-flash 1.4s ease-out forwards",
                    letterSpacing: "0.08em",
                    opacity: 0,
                    userSelect: "none",
                  },
                  children: e.text,
                }),
              },
              e.key,
            )
          : null;
      },
    ]);
  },
]);
