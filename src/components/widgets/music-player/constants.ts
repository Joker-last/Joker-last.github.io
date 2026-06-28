import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "Happy Happy Party!",
		artist: "Poppin'Party",
		cover: "assets/music/cover/poppinparty.webp",
		url: "assets/music/url/poppinparty.mp3",
		duration: 210,
	},
	{
		id: 2,
		title: "BLACK SHOUT",
		artist: "Roselia",
		cover: "assets/music/cover/roselia.webp",
		url: "assets/music/url/roselia.mp3",
		duration: 246,
	},
	{
		id: 3,
		title: "Hey-day 狂騒曲 (カプリチオ)",
		artist: "Afterglow",
		cover: "assets/music/cover/afterglow.webp",
		url: "assets/music/url/afterglow.mp3",
		duration: 235,
	},
	{
		id: 4,
		title: "ゴーカ！ごーかい！？ファントムシーフ！",
		artist: "Hello,Happy World!",
		cover: "assets/music/cover/hellohappyworld.webp",
		url: "assets/music/url/hellohappyworld.mp3",
		duration: 228,
	},
	{
		id: 5,
		title: "きゅ～まい * flower",
		artist: "Pastel * Palettes",
		cover: "assets/music/cover/pastelpalettes.webp",
		url: "assets/music/url/pastelpalettes.mp3",
		duration: 242,
		},
	{
		id: 6,
		title: "R·I·O·T",
		artist: "RAISE A SUILEN",
		cover: "assets/music/cover/ras.webp",
		url: "assets/music/url/ras.mp3",
		duration: 200,
  	},
	{
		id: 7,
		title: "寄る辺の Sunny,Sunny",
		artist: "Morfonica",
		cover: "assets/music/cover/morfonica.webp",
		url: "assets/music/url/morfonica.mp3",
		duration: 238,
	},
	{
		id: 8,
		title: "影色舞",
		artist: "MyGO!!!!!",
		cover: "assets/music/cover/mygo.webp",
		url: "assets/music/url/mygo.mp3",
		duration: 256,
	},
	{
		id: 13,
		title: "KiLLKiSS",
		artist: "Ave Mujica",
		cover: "assets/music/cover/avemujica.webp",
		url: "assets/music/url/avemujica.mp3",
		duration: 249,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: "/favicon/favicon.ico",
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
