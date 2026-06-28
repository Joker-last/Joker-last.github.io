import type { FullscreenWallpaperConfig } from "../types/config";

// 批量导入图片
const bgList = [
  new URL('../assets/desktop-banner/bg1.png', import.meta.url).href,
  new URL('../assets/desktop-banner/bg2.png', import.meta.url).href,
  new URL('../assets/desktop-banner/bg3.png', import.meta.url).href,
  new URL('../assets/desktop-banner/bg4.png', import.meta.url).href,
  new URL('../assets/desktop-banner/bg5.png', import.meta.url).href,
];

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: true,
	src: {
		desktop: bgList,
		mobile: bgList,
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 5,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1,
	switchable: true,
	overlay: {
		opacity: 0.8, // 壁纸不透明度，0-1
		blur: 1.5, // 背景模糊半径（px）
		cardOpacity: 0.8, // 卡片不透明度，0-1
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
	},
	fullscreen: {
		switchable: {
			opacity: true,
			blur: true,
		},
	},
};
