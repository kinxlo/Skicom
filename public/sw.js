if (!self.define) {
  let e,
    a = {};
  const i = (i, s) => (
    (i = new URL(i + ".js", s).href),
    a[i] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = a), document.head.appendChild(e);
        } else (e = i), importScripts(i), a();
      }).then(() => {
        let e = a[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, n) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[c]) return;
    let t = {};
    const r = (e) => i(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    a[c] = Promise.all(s.map((e) => o[e] || r(e))).then((e) => (n(...e), t));
  };
}
define(["./workbox-3c9d0171"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/404.gif", revision: "3bb676b803e95e7889a33a61a78acaae" },
        {
          url: "/_next/static/Mn6v7tK9ToYMMxGGg8Q7O/_buildManifest.js",
          revision: "d239e3dfb0267badf5c9d203b13a4c04",
        },
        {
          url: "/_next/static/Mn6v7tK9ToYMMxGGg8Q7O/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/102-bfabda3bd40257fd.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/193-648747c3af76403f.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/196-fd3dbd9706956971.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/306-9727c4e7b500d613.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/361-554a6d90737b622e.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/593-70872f7a05a47388.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/647-b2de58bd6ffd1314.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/653-b0c6b0d37918a526.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/676-eaece0f674714d66.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/732-0a89cb986f7dc7d2.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/793-4f7c6784b7c23d81.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/825-6d6dda473ebceb85.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/885-ec687598f9c4fc5f.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/889-f3f32badd6e9864c.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/986-68a6d3f0ad059f08.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(auth-routes)/forgot-password/page-2b2162b620d14bc7.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(auth-routes)/login/page-f2aa1cee62053e9d.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(auth-routes)/onboarding/page-7af6d0a55ca4cc00.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(auth-routes)/register/page-6ab128bda2bff425.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(auth-routes)/reset-password/page-125f062377f3468c.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(auth-routes)/reset-password/verify-otp/page-1c99781367dcf983.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(auth-routes)/sign-up/page-97c45424ac3c8acd.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(landing-routes)/(home)/page-b4fd0e3ab99387c8.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(landing-routes)/about/page-a54db3e57c7b0dc2.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(landing-routes)/articles/page-506c35eefb82fdce.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(landing-routes)/contact/page-4b66af5da944a8df.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(landing-routes)/customer-care/page-7c17b6df8bc0583f.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(landing-routes)/layout-6ac66f9ab65e6b47.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/(landing-routes)/services/page-a3c96e6a0c3a501b.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-a0dfd9389d329755.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/dashboard/(admin-dashboard)/admin/dashboard/page-9d3fd445fb4ccb99.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/dashboard/(admin-dashboard)/layout-030e82a0879adfe0.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/guides/page-998c4d475ba33d08.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/layout-206e9d50c8166488.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/app/not-found-c6b37f8e9a2f1bfb.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/b27dc69b-f1e3e2dffa7c58ab.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/dd65fad0-b18a2af8e8a16386.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/framework-6e06c675866dc992.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/main-2885bab5089d508b.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/main-app-2ddbb3855b0b57cc.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/pages/_app-6898d7d9a0e097f4.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/pages/_error-861c2f7b29f87f3c.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-d4e7ee8278dde06b.js",
          revision: "Mn6v7tK9ToYMMxGGg8Q7O",
        },
        {
          url: "/_next/static/css/5896f6776b1d06a7.css",
          revision: "5896f6776b1d06a7",
        },
        {
          url: "/_next/static/css/69cc9dc15dfbf8b9.css",
          revision: "69cc9dc15dfbf8b9",
        },
        {
          url: "/_next/static/css/776e00619151f400.css",
          revision: "776e00619151f400",
        },
        {
          url: "/_next/static/css/d55498c7556ffb38.css",
          revision: "d55498c7556ffb38",
        },
        {
          url: "/_next/static/media/1.800ac46c.png",
          revision: "c1ff627640aae21a61d5bb0d6db112aa",
        },
        {
          url: "/_next/static/media/2.41cbd162.png",
          revision: "43047d00ea23713ac688900fa5fc015a",
        },
        {
          url: "/_next/static/media/26a46d62cd723877-s.woff2",
          revision: "befd9c0fdfa3d8a645d5f95717ed6420",
        },
        {
          url: "/_next/static/media/3.7f299864.png",
          revision: "34cd6be475c85046755f71757a8b56de",
        },
        {
          url: "/_next/static/media/4.5a109d14.png",
          revision: "d66c2fa6063aec40cf725f7994981d4e",
        },
        {
          url: "/_next/static/media/5.9bd245cc.png",
          revision: "5b0b9ee955616f69d3e0707678071171",
        },
        {
          url: "/_next/static/media/55c55f0601d81cf3-s.woff2",
          revision: "43828e14271c77b87e3ed582dbff9f74",
        },
        {
          url: "/_next/static/media/581909926a08bbc8-s.woff2",
          revision: "f0b86e7c24f455280b8df606b89af891",
        },
        {
          url: "/_next/static/media/6.c1a190a0.png",
          revision: "785e33a651869d12e5a7f8ee6fbb1530",
        },
        {
          url: "/_next/static/media/6d93bde91c0c2823-s.woff2",
          revision: "621a07228c8ccbfd647918f1021b4868",
        },
        {
          url: "/_next/static/media/7.679a4cf3.png",
          revision: "6c4c1abfb478a7f3b00e87180670c53f",
        },
        {
          url: "/_next/static/media/8.4a58192d.png",
          revision: "88c5a34acc3e58300324c68f5c7cf88a",
        },
        {
          url: "/_next/static/media/97e0cb1ae144a2a9-s.woff2",
          revision: "e360c61c5bd8d90639fd4503c829c2dc",
        },
        {
          url: "/_next/static/media/Apple.195142a7.png",
          revision: "101484ce0b88b1b938f34cf217504330",
        },
        {
          url: "/_next/static/media/Check.f58b7aae.png",
          revision: "14f677ee4ccc8a07b4305666829b4802",
        },
        {
          url: "/_next/static/media/Playstore.098ad187.png",
          revision: "3a412da17fd96abe4e8d9df5b04547f9",
        },
        {
          url: "/_next/static/media/a34f9d1faa5f3315-s.p.woff2",
          revision: "d4fe31e6a2aebc06b8d6e558c9141119",
        },
        {
          url: "/_next/static/media/about-down.3a161e19.png",
          revision: "56d975b64669a8898b4a02fc0d3c752e",
        },
        {
          url: "/_next/static/media/about-hero.ade0ef2a.png",
          revision: "89b5fd717d4926621947fcf9d00d011a",
        },
        {
          url: "/_next/static/media/about-right.138dbedf.png",
          revision: "abaa82038d05582c41d91eea971a54ad",
        },
        {
          url: "/_next/static/media/bigCircle.dc6aacb6.png",
          revision: "37ab81767086b8e4bcc66b564cdffd60",
        },
        {
          url: "/_next/static/media/connection.67e980ea.png",
          revision: "d98a1afd4acbb324a3a2ec1f4b86df8b",
        },
        {
          url: "/_next/static/media/coverage.7de8fd33.png",
          revision: "e012d50e964f42a1869b52ba84301fb4",
        },
        {
          url: "/_next/static/media/covered.8663aec6.png",
          revision: "1b60d0da1698a1466452416e245ae6bd",
        },
        {
          url: "/_next/static/media/df0a9ae256c0569c-s.woff2",
          revision: "d54db44de5ccb18886ece2fda72bdfe0",
        },
        {
          url: "/_next/static/media/facebook.c7e1c961.png",
          revision: "12e700ffbd928bbbc7abb67e86d3b6e1",
        },
        {
          url: "/_next/static/media/four.ac96b881.png",
          revision: "6c94a96f9382bfe5bcb2c50b04b2d531",
        },
        { url: "/_next/static/media/help.df365dc2.png", revision: "df365dc2" },
        {
          url: "/_next/static/media/instagram.0ff5584b.png",
          revision: "d2b3381a2c421b808e47123f9725e85c",
        },
        {
          url: "/_next/static/media/left1.ef2e6934.png",
          revision: "d1eed4e52a30c679d728a0a24afd5dc4",
        },
        {
          url: "/_next/static/media/map.ec967901.png",
          revision: "df09c1c2f1202c727d6610947afe4024",
        },
        {
          url: "/_next/static/media/msg.18e9bd1f.png",
          revision: "6cea9e2cdf5fec1f535b5a42304bfcd8",
        },
        {
          url: "/_next/static/media/network.d5f0951d.png",
          revision: "a406d33f666b2ffbcc45638f47317315",
        },
        {
          url: "/_next/static/media/offer-ring-down.087a955d.png",
          revision: "1488b6b74a11735f74c094ef174881b5",
        },
        {
          url: "/_next/static/media/offer-ring-up.02451715.png",
          revision: "09ef69f53b0748f9765f57c1f775f8e4",
        },
        {
          url: "/_next/static/media/offerMiddle.5ded13c2.png",
          revision: "89131fdcbece184e5e296b65b0b534e8",
        },
        {
          url: "/_next/static/media/offerRight.93d6925a.png",
          revision: "79b8733834b569553a8164fa39a1e013",
        },
        {
          url: "/_next/static/media/one.52176b05.png",
          revision: "5034df390aede040dd6195b4a3c1f976",
        },
        {
          url: "/_next/static/media/payment.46a30ea3.png",
          revision: "46a30ea3",
        },
        { url: "/_next/static/media/rate.7e3a40cc.png", revision: "7e3a40cc" },
        {
          url: "/_next/static/media/reliability.0099f9ac.png",
          revision: "148a8421b8b9d24792ea0df3484fe7fa",
        },
        {
          url: "/_next/static/media/right1.d4ebb858.png",
          revision: "781295dca9c950465e10492371da444e",
        },
        {
          url: "/_next/static/media/role.e1259b2c.png",
          revision: "825ad48ae07e002264f46ba9b57b475a",
        },
        {
          url: "/_next/static/media/skicom.422977be.png",
          revision: "743f894c365a504040322c755ac35f25",
        },
        {
          url: "/_next/static/media/smallCircle.a784147c.png",
          revision: "b57678cc13c9b98eb6d0c3957dcde792",
        },
        {
          url: "/_next/static/media/speed.7b23fd9a.png",
          revision: "fa4e014fc87b4a921d1689ba033683eb",
        },
        {
          url: "/_next/static/media/support.91c6ceec.png",
          revision: "91c6ceec",
        },
        {
          url: "/_next/static/media/team-image.c69b0a1f.png",
          revision: "80b154bba6cb29e387f2c714b303fa9f",
        },
        {
          url: "/_next/static/media/teams.3e582f48.png",
          revision: "492ae4caedc4bf30f91859e906a88751",
        },
        {
          url: "/_next/static/media/three.24c348c4.png",
          revision: "c554d015759d373eaea4438c6d611182",
        },
        {
          url: "/_next/static/media/twitter.866a9cca.png",
          revision: "f773a907791829e2b94b85fffe8222a2",
        },
        {
          url: "/_next/static/media/two.e558074e.png",
          revision: "7ddde9dff72b8f0f587b01bb8116e7ef",
        },
        {
          url: "/_next/static/media/vision.d4cb4d45.png",
          revision: "dd5bbefc976ea4be3a3639a7967d44c0",
        },
        {
          url: "/_next/static/media/wifi-bold.6e0c5002.png",
          revision: "2457cfca5d9d75384562041c4ca92045",
        },
        {
          url: "/icons/android-chrome-192x192.png",
          revision: "a139e43acf7096b574796887bf940991",
        },
        {
          url: "/icons/android-chrome-512x512.png",
          revision: "24e74b07386232023fd4eee0f94b05ed",
        },
        {
          url: "/icons/apple-touch-icon.png",
          revision: "9cf0892da5cc51579581c789bc0986e4",
        },
        {
          url: "/icons/browserconfig.xml",
          revision: "68c9044fa4a08749efb85bb2a4edaede",
        },
        {
          url: "/icons/favicon-16x16.png",
          revision: "30654010918815a13f36ea27ea9541a6",
        },
        {
          url: "/icons/favicon-32x32.png",
          revision: "f996c4633147407078485cc561353e1a",
        },
        {
          url: "/icons/mstile-150x150.png",
          revision: "5f94de0199303a5f09dd5dc6708ce6eb",
        },
        {
          url: "/icons/safari-pinned-tab.svg",
          revision: "dec06a8d96b5bf2f1d04e0c70ba2b58b",
        },
        {
          url: "/images/about/about-down.png",
          revision: "56d975b64669a8898b4a02fc0d3c752e",
        },
        {
          url: "/images/about/about-hero.png",
          revision: "89b5fd717d4926621947fcf9d00d011a",
        },
        {
          url: "/images/about/about-right.png",
          revision: "abaa82038d05582c41d91eea971a54ad",
        },
        {
          url: "/images/about/connection.png",
          revision: "d98a1afd4acbb324a3a2ec1f4b86df8b",
        },
        {
          url: "/images/about/hero.png",
          revision: "18b9bbdd7da72266058ad6f80a859514",
        },
        {
          url: "/images/about/role.png",
          revision: "825ad48ae07e002264f46ba9b57b475a",
        },
        {
          url: "/images/about/teams.png",
          revision: "492ae4caedc4bf30f91859e906a88751",
        },
        {
          url: "/images/about/vision.png",
          revision: "dd5bbefc976ea4be3a3639a7967d44c0",
        },
        {
          url: "/images/article-card/article.png",
          revision: "43047d00ea23713ac688900fa5fc015a",
        },
        {
          url: "/images/auth/onboardImage.png",
          revision: "38dd4d25967f95dfb5c9b0ab1058d60b",
        },
        {
          url: "/images/auth/success.png",
          revision: "9aa8142736d0652caa9b6c3c21959822",
        },
        {
          url: "/images/contact/bigCircle.png",
          revision: "37ab81767086b8e4bcc66b564cdffd60",
        },
        {
          url: "/images/contact/hero.png",
          revision: "78b985dc65f6e5d69c77c725ad0d4d19",
        },
        {
          url: "/images/contact/smallCircle.png",
          revision: "b57678cc13c9b98eb6d0c3957dcde792",
        },
        {
          url: "/images/customer-care/1.png",
          revision: "c1ff627640aae21a61d5bb0d6db112aa",
        },
        {
          url: "/images/customer-care/2.png",
          revision: "43047d00ea23713ac688900fa5fc015a",
        },
        {
          url: "/images/customer-care/3.png",
          revision: "34cd6be475c85046755f71757a8b56de",
        },
        {
          url: "/images/customer-care/4.png",
          revision: "d66c2fa6063aec40cf725f7994981d4e",
        },
        {
          url: "/images/customer-care/5.png",
          revision: "5b0b9ee955616f69d3e0707678071171",
        },
        {
          url: "/images/customer-care/6.png",
          revision: "785e33a651869d12e5a7f8ee6fbb1530",
        },
        {
          url: "/images/customer-care/7.png",
          revision: "6c4c1abfb478a7f3b00e87180670c53f",
        },
        {
          url: "/images/customer-care/8.png",
          revision: "88c5a34acc3e58300324c68f5c7cf88a",
        },
        {
          url: "/images/customer-care/team-image.png",
          revision: "80b154bba6cb29e387f2c714b303fa9f",
        },
        {
          url: "/images/data-card/Check.png",
          revision: "14f677ee4ccc8a07b4305666829b4802",
        },
        {
          url: "/images/footer/Apple.png",
          revision: "101484ce0b88b1b938f34cf217504330",
        },
        {
          url: "/images/footer/Playstore.png",
          revision: "3a412da17fd96abe4e8d9df5b04547f9",
        },
        {
          url: "/images/footer/facebook.png",
          revision: "12e700ffbd928bbbc7abb67e86d3b6e1",
        },
        {
          url: "/images/footer/instagram.png",
          revision: "d2b3381a2c421b808e47123f9725e85c",
        },
        {
          url: "/images/footer/twitter.png",
          revision: "f773a907791829e2b94b85fffe8222a2",
        },
        {
          url: "/images/home/arrow.png",
          revision: "81cc08d463502047d91b4496aa39bef5",
        },
        {
          url: "/images/home/card-clip-bg.png",
          revision: "67ce04f5ce091fb809a6efa516df346c",
        },
        {
          url: "/images/home/center-offer.png",
          revision: "16cf0c3197effe0b88cee1c19e89763d",
        },
        {
          url: "/images/home/help.png",
          revision: "bb1e07cfc4b50bda1bf974a208d17ebb",
        },
        {
          url: "/images/home/hero.png",
          revision: "b465c304a20e8b83f645783599d263dd",
        },
        {
          url: "/images/home/offer-ring-down.png",
          revision: "1488b6b74a11735f74c094ef174881b5",
        },
        {
          url: "/images/home/offer-ring-up.png",
          revision: "09ef69f53b0748f9765f57c1f775f8e4",
        },
        {
          url: "/images/home/offer.png",
          revision: "9baba1b9913f6878501f36e56e7911eb",
        },
        {
          url: "/images/home/payment.png",
          revision: "a974caaa79574fc6c50004f98baf4933",
        },
        {
          url: "/images/home/rate.png",
          revision: "b30eadaf2863207490e245776217e987",
        },
        {
          url: "/images/home/support.png",
          revision: "85666a62b1bbb5b9e22eed76ee30ac1a",
        },
        {
          url: "/images/home/supportRing.png",
          revision: "1d86b6a9c02a2983a7f1dbd576453875",
        },
        {
          url: "/images/home/supports.png",
          revision: "4a6e3ad29e8bfad465e1f7c556265242",
        },
        {
          url: "/images/home/wifi-bold.png",
          revision: "2457cfca5d9d75384562041c4ca92045",
        },
        {
          url: "/images/home/wifi.png",
          revision: "ab5d801e3cabc55dffc18ac5b2bb7456",
        },
        {
          url: "/images/logo/skicom.png",
          revision: "743f894c365a504040322c755ac35f25",
        },
        {
          url: "/images/news-letter/left1.png",
          revision: "d1eed4e52a30c679d728a0a24afd5dc4",
        },
        {
          url: "/images/news-letter/right1.png",
          revision: "781295dca9c950465e10492371da444e",
        },
        {
          url: "/images/services/coverage.png",
          revision: "e012d50e964f42a1869b52ba84301fb4",
        },
        {
          url: "/images/services/covered.png",
          revision: "1b60d0da1698a1466452416e245ae6bd",
        },
        {
          url: "/images/services/hero.png",
          revision: "8971e8ae04fc2dd6c4e55b5a8e1bf8a8",
        },
        {
          url: "/images/services/map.png",
          revision: "df09c1c2f1202c727d6610947afe4024",
        },
        {
          url: "/images/services/network.png",
          revision: "a406d33f666b2ffbcc45638f47317315",
        },
        {
          url: "/images/services/offerMiddle.png",
          revision: "89131fdcbece184e5e296b65b0b534e8",
        },
        {
          url: "/images/services/offerRight.png",
          revision: "79b8733834b569553a8164fa39a1e013",
        },
        {
          url: "/images/services/reliability.png",
          revision: "148a8421b8b9d24792ea0df3484fe7fa",
        },
        {
          url: "/images/services/speed.png",
          revision: "fa4e014fc87b4a921d1689ba033683eb",
        },
        {
          url: "/images/testimonials/four.png",
          revision: "6c94a96f9382bfe5bcb2c50b04b2d531",
        },
        {
          url: "/images/testimonials/msg.png",
          revision: "6cea9e2cdf5fec1f535b5a42304bfcd8",
        },
        {
          url: "/images/testimonials/one.png",
          revision: "5034df390aede040dd6195b4a3c1f976",
        },
        {
          url: "/images/testimonials/three.png",
          revision: "c554d015759d373eaea4438c6d611182",
        },
        {
          url: "/images/testimonials/two.png",
          revision: "7ddde9dff72b8f0f587b01bb8116e7ef",
        },
        { url: "/manifest.json", revision: "c92d992103561cdc35dfdd4211f6ec92" },
        {
          url: "/swe-worker-5c72df51bb1f6ee0.js",
          revision: "5a47d90db13bb1309b25bdf7b363570e",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: a } }) =>
        !(!e || a.startsWith("/api/auth/callback") || !a.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: i }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        i &&
        !a.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: i }) =>
        "1" === e.headers.get("RSC") && i && !a.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: a }) => a && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0);
});
