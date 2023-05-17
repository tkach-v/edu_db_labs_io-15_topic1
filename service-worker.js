/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7516a3dbcf43b967a3182be6bd41af45"
  },
  {
    "url": "assets/css/0.styles.1aac174a.css",
    "revision": "03e841001bb061aa678cc552d7f0ef77"
  },
  {
    "url": "assets/img/delete_quiz.f25ac68a.png",
    "revision": "f25ac68a32c35c8da834b6a74bab0795"
  },
  {
    "url": "assets/img/delete_user.d22a7d02.png",
    "revision": "d22a7d0207708716c3b353f00c9fe052"
  },
  {
    "url": "assets/img/get_allquizzes.988e4847.png",
    "revision": "988e4847fc503d0559d65f3c69ac5c39"
  },
  {
    "url": "assets/img/get_allusers.e80a3beb.png",
    "revision": "e80a3beb9d03566694fa1e53b7380a69"
  },
  {
    "url": "assets/img/get_questions.3a70520f.png",
    "revision": "3a70520f1973ef478d7bab99a59b4f1c"
  },
  {
    "url": "assets/img/get_quiz.e80a5b5d.png",
    "revision": "e80a5b5d2823bb66726f5b99d9b6ad4e"
  },
  {
    "url": "assets/img/get_user.ece986ae.png",
    "revision": "ece986ae20625657a6339a442b54f26b"
  },
  {
    "url": "assets/img/img.6f9fd78c.png",
    "revision": "6f9fd78ca9ff64414a0bb98de19b736a"
  },
  {
    "url": "assets/img/post_addquiz.2ecb7f89.png",
    "revision": "2ecb7f89d63c5f1f9d4e33dfb27e1cd2"
  },
  {
    "url": "assets/img/post_adduser.e92414ed.png",
    "revision": "e92414edbd85ba0a58d1cb15431b66b9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eb16c742.js",
    "revision": "0462b08e2d13728ec9c2fb460bfc2ff7"
  },
  {
    "url": "assets/js/11.3ef95339.js",
    "revision": "5c1a5e44a92ea9fcdc8a43ef0f74dab7"
  },
  {
    "url": "assets/js/12.21fae77a.js",
    "revision": "141802a57741398351f7dafa27475b53"
  },
  {
    "url": "assets/js/13.8978cdf0.js",
    "revision": "9c3f797d4394e94eccf1f1d8dd17de2a"
  },
  {
    "url": "assets/js/14.82b0bc53.js",
    "revision": "630e959d9f1bec10e7ad5d11b34fd4d5"
  },
  {
    "url": "assets/js/15.65813135.js",
    "revision": "e549b130b1db4f16ceedf0f36f0e6467"
  },
  {
    "url": "assets/js/16.10c6304d.js",
    "revision": "671bd44cb7f728a98377b412da93f39d"
  },
  {
    "url": "assets/js/17.fecc531e.js",
    "revision": "914f62e45eec6d62f5e92a9fe84d4954"
  },
  {
    "url": "assets/js/18.99656196.js",
    "revision": "59101f0b7fd88cbc62fc1ce0c9c12e8c"
  },
  {
    "url": "assets/js/19.73d95e54.js",
    "revision": "3ad89f8de331d96327d82f63e770e516"
  },
  {
    "url": "assets/js/2.b846dfa6.js",
    "revision": "aa6fe3dcfc573a6474566605081f04be"
  },
  {
    "url": "assets/js/20.5a9f28a4.js",
    "revision": "ff21f4ea7f239abdd047b1e0e694eaba"
  },
  {
    "url": "assets/js/21.295b39b6.js",
    "revision": "aefa2c25f3262b2badbf8506a0accc38"
  },
  {
    "url": "assets/js/22.1cca73bd.js",
    "revision": "e2c32642b7ba47766eb7808abed5c8de"
  },
  {
    "url": "assets/js/23.d18b12a1.js",
    "revision": "ad42b10e67710e68607ab279dc1034f1"
  },
  {
    "url": "assets/js/24.57cc5001.js",
    "revision": "956422292d163f7a7bef471e13260723"
  },
  {
    "url": "assets/js/25.bbb0c378.js",
    "revision": "24e201c71cb9b77c66ff78caa725e4ed"
  },
  {
    "url": "assets/js/26.b1b09b4c.js",
    "revision": "62d4fb6a55511486f243a67160eaff59"
  },
  {
    "url": "assets/js/28.2845a563.js",
    "revision": "9ef94b75d08a0bd43397cdaa45a533f4"
  },
  {
    "url": "assets/js/3.a3e5ab8b.js",
    "revision": "04f57edf67ee74320051ada3d5a06ec9"
  },
  {
    "url": "assets/js/4.88f26a93.js",
    "revision": "b86fb27ebbc57eac9a5a160b56807c51"
  },
  {
    "url": "assets/js/5.7bbcf190.js",
    "revision": "aed10e58c032a8a2fbae97806c5eedc4"
  },
  {
    "url": "assets/js/6.aaabfb21.js",
    "revision": "ac284043d9ba5434fc4c9215afb417c3"
  },
  {
    "url": "assets/js/7.1dbca0e9.js",
    "revision": "3d6d0b025515a286dd0513064dca4f30"
  },
  {
    "url": "assets/js/8.1dc9239d.js",
    "revision": "09256e52f33fb70a797f6d299feeb43e"
  },
  {
    "url": "assets/js/9.06a604d1.js",
    "revision": "d440ccdf5d18e2a8bcef51c081450e6d"
  },
  {
    "url": "assets/js/app.6b2a1679.js",
    "revision": "7bfcee1873b226b4281ffa51e0848a09"
  },
  {
    "url": "conclusion/index.html",
    "revision": "279dfb66e23b32b7fbc206bb87b48231"
  },
  {
    "url": "design/index.html",
    "revision": "d3f2592df45cee994dec61755d2d1662"
  },
  {
    "url": "index.html",
    "revision": "d0afed138ec96124f737ae05442d8135"
  },
  {
    "url": "intro/index.html",
    "revision": "a39a13b77dac23800c688b4d3f63f7cc"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8780868241906afc7e0a1b406e5a34a5"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "9dd77dd0442aec9bef2a81d74102c100"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "976ad99445e0f2411e4e5fda78d18a33"
  },
  {
    "url": "software/index.html",
    "revision": "781738eac8d1eb6462c97d8473b1753b"
  },
  {
    "url": "software/RESTfull.html",
    "revision": "532a566588f2a12e1d77cdbae185db98"
  },
  {
    "url": "software/SQL.html",
    "revision": "cd9f8c4a772074b667179ae1a33aaa62"
  },
  {
    "url": "test/index.html",
    "revision": "dd76d33fa807a80b43ce02c0ea379229"
  },
  {
    "url": "use cases/index.html",
    "revision": "c6fc515c926a88230d3103ed7ee721ce"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
