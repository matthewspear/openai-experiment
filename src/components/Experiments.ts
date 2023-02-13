import {
  RocketLaunchIcon,
  TagIcon,
  LinkIcon,
  BookmarkIcon,
  GlobeEuropeAfricaIcon,
  PuzzlePieceIcon,
  ArrowsRightLeftIcon,
  PencilSquareIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

export const experiments = [
  {
    title: "Startup Name Generator",
    description: `Generate a name for your startup / latest project`,
    url: "/startup-generator",
    icon: RocketLaunchIcon,
    color: "teal",
    active: false,
  },
  {
    title: "Tagline Generator",
    description: `Taglines, value propositions, and elevator pitches`,
    url: "/tagline-generator",
    icon: TagIcon,
    color: "rose",
    active: false,
  },
  {
    title: "URL Generator",
    description: `Generate and validate the latest domains based off your startup name or proposed field`,
    url: "/url-generator",
    icon: LinkIcon,
    color: "sky",
    active: false,
  },
  {
    title: "Journal Prompt",
    description: `Get inspired by customised journalling prompts generated just for you`,
    url: "/journal-prompt",
    icon: BookmarkIcon,
    color: "yellow",
    active: true,
  },
  {
    title: "Holiday Destination",
    description: `Unsure where to go on your next holiday? Let the AI decide for you. Pick a continent, length and preferences and we'll give you a random destination.`,
    url: "/holiday-destination",
    icon: GlobeEuropeAfricaIcon,
    color: "teal",
    active: true,
  },
  //   {
  //     title: "Summary",
  //     description: `Summarise a text`,
  //     url: "/summary",
  //     icon: ArrowsPointingInIcon,
  //     color: "indigo",
  //     active: false,
  //   },
  //   {
  //     title: "Expander",
  //     description: `Expand a text`,
  //     url: "/expand",
  //     icon: ArrowsPointingOutIcon,
  //     color: "teal",
  //     active: false,
  //   },
  {
    title: "Explain Like I Am 5",
    description: `Explain a text in simple terms`,
    url: "/eli5",
    icon: PuzzlePieceIcon,
    color: "indigo",
    active: false,
  },
  {
    title: "This or That",
    description: `Help making decisions`,
    url: "/this-that",
    icon: ArrowsRightLeftIcon,
    color: "teal",
    active: false,
  },
  {
    title: "Planner",
    description: `Help scheduling out your day / week`,
    url: "/planner",
    icon: PencilSquareIcon,
    color: "yellow",
    active: false,
  },
  {
    title: "First Step",
    description: `Break down big tasks by identifying the first step and where to start`,
    url: "/first-step",
    icon: QueueListIcon,
    color: "rose",
    active: false,
  },
];