import MeetingPage from "@/components/MeetingPage/MeetingPage.vue";
import MeetingEntrance from "@/components/MeetingPage/element/MeetingEntrance.vue";
import MeetingHeader from "@/views/Header/MeetingHeader.vue";
import LiveMapPage from "@/components/LiveMapPage/LiveMapPage.vue";
// import LiveMapHeader from "@/views/Header/LiveMapHeader.vue";
import ChattingPage from "@/components/ChattingPage/ChattingPage.vue";
// import LiveMap from "@/components/LiveMapPage/element/LiveMap.vue";
import StartPlace from "@/components/MeetingPage/element/StartPlace.vue";

const meeting = [
  {
    path: "/entrance/:roomCode",
    name: "entrance",
  },
  {
    path: "/entrance-denied",
    name: "entrance-denied",
    components: {
      default: MeetingEntrance,
    },
  },
  {
    path: "/meeting/:id",
    name: "meeting",
    components: {
      header: MeetingHeader,
      default: MeetingPage,
    },
  },
  {
    path: "/live-map/:id",
    name: "live-map",
    components: {
      // header: LiveMapHeader,
      default: LiveMapPage,
    },
  },
  {
    path: "/chat/:id",
    name: "chat",
    components: {
      default: ChattingPage,
    },
  },
  // {
  //   path: "/live-map-temp/:id",
  //   name: "live-map-temp",
  //   components: {
  //     header: LiveMapHeader,
  //     default: LiveMap,
  //   },
  // },
  {
    path: "/start-place/:id",
    name: "start-place",
    components: {
      default: StartPlace,
    },
  },
];

export default meeting;
