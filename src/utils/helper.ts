import VanillaJsSmoothScroll from "smooth-scroll";

export const SmoothScroll = (y = 0): void => {
  const options: {
    [key: string]: string | number | boolean;
  } = {
    // selector: "[data-scroll]", // Note: スムーススクロールが有効なリンクに付ける属性
    // selectorHeader: "[data-scroll-header]", // Note: 固定ナビに付ける属性
    speed: 240, // Note: 到達するまでの総時間(ミリ秒)
    easing: "easeInOutCubic", // Note: スピードの種類
    offset: y, // Note: 到達場所からズラすピクセル数
    updateURL: false, // Note: URLを[#〜]に変更するか？
    // callback: function () {}, // Note: コールバック関数 (到達時に実行される関数)};
    speedAsDuration: true,
    clip: false,
    emitEvents: false,
  };

  new VanillaJsSmoothScroll('a[href*="#"]', options);
};
