module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-001": "#FFFFFF",
        "black-001": "#000000",
        "black-002": "#363636",
        "black-003": "#666666",
        "gray-001": "#969696",
        "gray-002": "#A5A5A5",
        "gray-003": "#DCDCDC",
        "gray-004": "#EBEBEB",
        "gray-005": "#F9F9F9",
        "gray-006": "#F5F5F5",
        "gray-007": "#fafafa",
        "blue-001": "#0094FF",
        "blue-002": "#00AFFF",
        "blue-003": "#5FCDFF",
        "blue-004": "#9ADFFF",
        "blue-005": "#BFEBFF",
        "sky-001": "#00CDFF",
        "sky-002": "#72E3FF",
        "sky-003": "#B4F0FF",
        "sky-004": "#D9F8FF",
        "sky-005": "rgba(0, 175, 255, 0.4)",
        "red-001": "#FF3232",
        "red-002": "#F84D4D",
        "red-003": "#F67D7D",
        "red-004": "#FEB2B2",
        "red-005": "#FFD7D7",
        "orange-001": "#FF8200",
        "orange-002": "#FFA74D",
        "orange-003": "#FFBE7B",
        "orange-004": "#FFD8AF",
        "orange-005": "#FFE8D0",
        "yellow-001": "#FFCD28",
        "yellow-002": "#FFD857",
        "yellow-003": "#FFE48A",
        "yellow-004": "#FFECAD",
        "green-001": "#64CD3C",
        "green-002": "#81DC5E",
        "green-003": "#A4F087",
        "green-004": "#C1FFAA",
        "green-005": "#DCFCD0",
        "platinum-001": "#5AD18F",
        "platinum-002": "#9BE3BB",
        "platinum-003": "#C6F1D9",
      },
      fontFamily: {
        BlackHanSans: ["Black Han Sans"],
        Jua: ["Jua"],
        DoHyeon: ["Do Hyeon"],
        NanumGothic: ["Nanum Gothic"],
        Dongle: ["Dongle"],
      },
      width: {
        commonSection: "68.75rem",
        planShareRoomSideBar: "21rem",
      },
      height: {
        banner: "calc(100vh - 5.5rem)",
        section: "calc(100vh - 7rem - 9rem)",
        tabInSection: "calc(100vh - 7rem - 9rem - 4.05rem)",
        planShareRoomHeader: "14rem",
        planShareRoomContent: "calc(100vh - 14rem)",
      },
      margin: {
        center: "0 auto",
      },
      minHeight: {
        content: "calc(100vh - 7rem - 9rem)",
      },
      transitionDuration: {
        "50": "50ms",
        "100": "100ms",
        "150": "150ms",
        "250": "250ms",
        "500": "500ms",
        "1000": "1000ms",
      },
      keyframes: {
        intro: {
          from: { color: "#FFFFFF" },
          to: { color: "000000" },
        },
        introBtn: {
          from: { backgroundColor: "#FBF7F2", color: "#FBF7F2" },
          to: { backgroundColor: "main-color", color: "#FFFFFF" },
        },
        modalShow: {
          from: { opacity: 0, marginTop: 0 },
          to: { opacity: 1, marginTop: "15rem" },
        },
        modalBgShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        daysDropDown: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        daysUp: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        sparkle: {
          "0%": {
            opacity: 0.5,
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        intro: "intro 1s ease-in-out",
        introBtn: "introBtn 1s ease-in-out",
        modalShow: "modalShow 0.2s ease-in-out",
        modalBgShow: "modalBgShow 0.3s",
        daysDropDown: "daysDropDown 0.4s",
        daysUp: "daysUp 0.4s",
        sparkle: "sparkle 100ms linear",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("tailwind-scrollbar-hide"),
  ],
};
