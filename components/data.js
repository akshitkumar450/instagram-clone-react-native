export const data = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    name: "elon musk",
  },
  {
    id: 2,
    image:
      "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg",
    name: "jeff bezos",
  },
  {
    id: 3,
    image:
      "https://cdn.vox-cdn.com/thumbor/PW7iXZ5hfZYgeqJNDfSDgnW2nU4=/0x0:2040x1360/1200x800/filters:focal(722x96:1048x422)/cdn.vox-cdn.com/uploads/chorus_image/image/51810311/DSC01391.0.0.jpg",
    name: "Mark Zuckerberg",
  },
  {
    id: 4,
    image:
      "https://yt3.ggpht.com/JGFKbcaC0Wh8dU5GcY4KXESw6KPvoO2K5ptiNvGLrrWU7Vs9nhNHDnJofDWh-fQorjbg-VQw=s400-c-k-c0x00ffffff-no-rj",
    name: "Alan walker",
  },
  {
    id: 5,
    image: "https://variety.com/wp-content/uploads/2020/12/David-Guetta.jpg",
    name: "David guetta",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzvdFquxXDtbaMdtQE53Az4G7y4QAZXL1-cpmimFooujeyVJz0recr1TD0hvtokLbWMc&usqp=CAU",
    name: "daddy yankee",
  },
];

export const postsData = [
  {
    id: 1,
    user: data[0].name,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    profileUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    caption: "Let's goo🌟🌟🌟",
    likes: 78,
    comments: [
      {
        user: "elon musk",
        comment: "very good elon",
      },
    ],
  },
  {
    id: 2,
    imageUrl:
      "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg",
    profileUrl:
      "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg",
    user: data[1].name,
    caption: "Let's goo🌟🌟🌟",
    likes: 150,
  },
  {
    id: 3,
    imageUrl:
      "https://yt3.ggpht.com/JGFKbcaC0Wh8dU5GcY4KXESw6KPvoO2K5ptiNvGLrrWU7Vs9nhNHDnJofDWh-fQorjbg-VQw=s400-c-k-c0x00ffffff-no-rj",
    profileUrl:
      "https://yt3.ggpht.com/JGFKbcaC0Wh8dU5GcY4KXESw6KPvoO2K5ptiNvGLrrWU7Vs9nhNHDnJofDWh-fQorjbg-VQw=s400-c-k-c0x00ffffff-no-rj",
    user: data[3].name,
    caption: "Let's goo🌟🌟🌟",
    likes: 789,
    comments: [
      {
        user: "Alan walker",
        comment: "very good alan",
      },
      {
        user: "Alan walker",
        comment: "very good alan",
      },
    ],
  },
];

export const bottomTabIcons = [
  {
    id: 1,
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    id: 2,
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    id: 3,

    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png",
  },
  {
    id: 4,
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png",
  },
  {
    id: 5,
    name: "Profile",
    active:
      "https://yt3.ggpht.com/JGFKbcaC0Wh8dU5GcY4KXESw6KPvoO2K5ptiNvGLrrWU7Vs9nhNHDnJofDWh-fQorjbg-VQw=s400-c-k-c0x00ffffff-no-rj",
    inactive:
      "https://yt3.ggpht.com/JGFKbcaC0Wh8dU5GcY4KXESw6KPvoO2K5ptiNvGLrrWU7Vs9nhNHDnJofDWh-fQorjbg-VQw=s400-c-k-c0x00ffffff-no-rj",
  },
];
