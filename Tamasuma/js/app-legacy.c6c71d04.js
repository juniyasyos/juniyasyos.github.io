(function () {
  var e = {
      6053: function (e, t, n) {
        "use strict";
        var a = n(5577),
          i = n.n(a),
          o =
            (n(9237),
            n(813),
            n(1982),
            n(9403),
            {
              apiKey: "AIzaSyCOl0qzkhCDmyWeeIT8AZe4xyJJlIfU5gE",
              authDomain: "myaurapp.firebaseapp.com",
              databaseURL: "https://myaurapp.firebaseio.com",
              projectId: "myaurapp",
              storageBucket: "myaurapp.appspot.com",
              messagingSenderId: "419511997060",
              appId: "1:419511997060:web:ce7aa0d308f6b484f868d1",
            });
        i().initializeApp(o),
          i()
            .firestore()
            .enablePersistence({ synchronizeTabs: !0 })
            .catch(function () {
              console.warn("DB offline support not available");
            }),
          (t.A = {
            notificationSupported: i().messaging.isSupported(),
            messaging: i().messaging.isSupported() ? i().messaging() : null,
            firestore: i().firestore(),
            auth: i().auth(),
            storage: i().storage(),
          });
      },
      9377: function (e, t, n) {
        "use strict";
        n(3792), n(3362), n(9085), n(9391);
        var a = n(5471),
          i = function () {
            var e = this,
              t = e._self._c;
            return t(
              "v-app",
              { staticClass: "aura-hidden-x" },
              [
                t(
                  "v-snackbar",
                  {
                    staticClass: "snack",
                    attrs: { timeout: e.timeout, bottom: "", left: "" },
                    model: {
                      value: e.snackWithButtons,
                      callback: function (t) {
                        e.snackWithButtons = t;
                      },
                      expression: "snackWithButtons",
                    },
                  },
                  [
                    e._v(" " + e._s(e.snackWithBtnText) + " "),
                    t("v-spacer"),
                    t(
                      "v-btn",
                      {
                        attrs: { dark: "", text: "", color: "#00f500" },
                        nativeOn: {
                          click: function (t) {
                            return e.refreshApp.apply(null, arguments);
                          },
                        },
                      },
                      [e._v(e._s(e.snackBtnText))]
                    ),
                    t(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function (t) {
                            e.snackWithButtons = !1;
                          },
                        },
                      },
                      [t("v-icon", [e._v("mdi-close")])],
                      1
                    ),
                  ],
                  1
                ),
                e.noData || e.isLoading || e.$route.meta.isEvent
                  ? e._e()
                  : t("Toolbar"),
                e.noData || e.isLoading || e.$route.meta.isEvent
                  ? e._e()
                  : t("AppSidebar"),
                e.noData || e.isLoading || e.$route.meta.isEvent
                  ? e._e()
                  : t("Drawer"),
                e.isLoading
                  ? t(
                      "v-main",
                      {},
                      [
                        t(
                          "v-container",
                          { staticClass: "fill-height" },
                          [
                            t(
                              "v-row",
                              { attrs: { justify: "center", align: "center" } },
                              [
                                t(
                                  "v-col",
                                  {
                                    staticClass: "text-center",
                                    attrs: { cols: "12", md: "12" },
                                  },
                                  [
                                    t("v-progress-circular", {
                                      staticClass: "aura-text",
                                      attrs: {
                                        width: 5,
                                        size: 50,
                                        color: "primary",
                                        indeterminate: "",
                                      },
                                    }),
                                    t(
                                      "p",
                                      {
                                        staticClass: "google-font mb-0 mt-4",
                                        staticStyle: { "font-size": "140%" },
                                      },
                                      [
                                        e._v(" Based on "),
                                        t(
                                          "span",
                                          { staticClass: "aura-text" },
                                          [e._v("Project Aura")]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : e._e(),
                !e.isLoading && e.noData
                  ? t(
                      "v-main",
                      {},
                      [
                        t(
                          "v-container",
                          { staticClass: "fill-height" },
                          [
                            t(
                              "v-row",
                              { attrs: { justify: "center", align: "center" } },
                              [
                                t(
                                  "v-col",
                                  {
                                    staticClass: "text-center",
                                    attrs: { cols: "12", md: "12" },
                                  },
                                  [
                                    t("p", { staticClass: "google-font" }, [
                                      e._v(
                                        " Either Your Internet is not Working or Site is not Configured "
                                      ),
                                    ]),
                                    t("p", { staticClass: "google-font" }, [
                                      e._v(" Follow the Docs for "),
                                      t(
                                        "a",
                                        {
                                          attrs: {
                                            target: "_blank",
                                            href: "https://github.com/gdg-x/aura",
                                          },
                                        },
                                        [e._v("Aura")]
                                      ),
                                      e._v(" & "),
                                      t(
                                        "a",
                                        {
                                          attrs: {
                                            target: "_blank",
                                            href: "https://github.com/gdg-x/aura-admin",
                                          },
                                        },
                                        [e._v("Aura Admin")]
                                      ),
                                    ]),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : e._e(),
                e.isLoading || e.noData ? e._e() : t("Views"),
                e.noData || e.isLoading || e.$route.meta.isEvent
                  ? e._e()
                  : t("Footer"),
              ],
              1
            );
          },
          o = [],
          r = n(5051),
          s = (n(2010), n(9432), n(6099), n(7764), n(3500), n(2953), n(8839)),
          c = n(5353),
          d = {
            name: "App",
            components: {
              AppSidebar: function () {
                return n.e(639).then(n.bind(n, 7639));
              },
              Toolbar: function () {
                return n.e(85).then(n.bind(n, 7085));
              },
              Drawer: function () {
                return n.e(539).then(n.bind(n, 8539));
              },
              Views: function () {
                return n.e(903).then(n.bind(n, 903));
              },
              Footer: function () {
                return n.e(27).then(n.bind(n, 2027));
              },
            },
            data: function () {
              return {
                isLoading: !0,
                refreshing: !1,
                registration: null,
                noData: !1,
                snackBtnText: "",
                snackWithBtnText: "",
                snackWithButtons: !1,
                timeout: 15e3,
              };
            },
            computed: (0, r.A)({}, (0, c.aH)(["config"])),
            created: function () {
              var e = this;
              document.addEventListener("swUpdated", this.showRefreshUI, {
                once: !0,
              }),
                navigator.serviceWorker.addEventListener(
                  "controllerchange",
                  function () {
                    e.refreshing ||
                      ((e.refreshing = !0), window.location.reload());
                  }
                );
            },
            beforeCreate: function () {
              "true" == localStorage.getItem("darkMode")
                ? (this.$vuetify.theme.dark = !0)
                : (this.$vuetify.theme.dark = !1);
            },
            mounted: function () {
              (Object.keys(this.config.generalConfig).length <= 0 ||
                Object.keys(this.config.keysandsecurity).length <= 0 ||
                Object.keys(this.config.footerConfig).length <= 0) &&
                this.getData();
            },
            methods: (0, r.A)(
              (0, r.A)(
                {},
                (0, c.PY)([
                  "setGeneralConfig",
                  "setKeysAndSecutityConfig",
                  "setFooterConfig",
                ])
              ),
              {},
              {
                showRefreshUI: function (e) {
                  (this.registration = e.detail),
                    (this.snackBtnText = "Refresh"),
                    (this.snackWithBtnText = "New version available!"),
                    (this.snackWithButtons = !0);
                },
                refreshApp: function () {
                  (this.snackWithButtons = !1),
                    this.registration &&
                      this.registration.waiting &&
                      this.registration.waiting.postMessage("skipWaiting");
                },
                getData: function () {
                  var e = this;
                  (this.isLoading = !0),
                    s.A.getAllConfig().then(function (t) {
                      t.success
                        ? (t.data.forEach(function (t) {
                            "footer" == t.name
                              ? e.setFooterConfig(t.data.links)
                              : "general" == t.name
                              ? e.setGeneralConfig(t.data)
                              : "keysandsecurity" == t.name &&
                                e.setKeysAndSecutityConfig(t.data);
                          }),
                          (e.noData = !1),
                          (e.isLoading = !1))
                        : ((e.noData = !0), (e.isLoading = !1));
                    });
                },
              }
            ),
          },
          u = d,
          m = n(1656),
          l = (0, m.A)(u, i, o, !1, null, null, null),
          p = l.exports,
          g = n(3723);
        (0, g.k)("".concat("/", "service-worker.js"), {
          ready: function () {
            console.log(
              "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
            );
          },
          registered: function (e) {
            console.log("Service worker has been registered."),
              setInterval(function () {
                e.update();
              }, 36e5);
          },
          cached: function () {
            console.log("Content has been cached for offline use.");
          },
          updatefound: function () {
            console.log("New content is downloading.");
          },
          updated: function (e) {
            console.log("New content is available; please refresh.");
          },
          offline: function () {
            console.log(
              "No internet connection found. App is running in offline mode."
            );
          },
          error: function (e) {
            console.error("Error during service worker registration:", e);
          },
        });
        var h = n(173);
        a["default"].use(h.Ay);
        var f = [
            {
              path: "/",
              name: "Home",
              component: function () {
                return n.e(962).then(n.bind(n, 2503));
              },
              meta: { title: "Home ", color: "#0277bd" },
            },
            {
              path: "/about",
              name: "About",
              component: function () {
                return n.e(594).then(n.bind(n, 2322));
              },
              meta: { title: "About ", color: "#0277bd" },
            },
            {
              path: "/team",
              name: "Team",
              component: function () {
                return n.e(632).then(n.bind(n, 4941));
              },
              meta: { title: "Team ", color: "#0277bd" },
            },
            {
              path: "/team/:id",
              name: "Team Details",
              component: function () {
                return n.e(89).then(n.bind(n, 7395));
              },
              meta: { title: "Team Details", color: "#0277bd" },
            },
            {
              path: "/events",
              name: "Events",
              component: function () {
                return n.e(268).then(n.bind(n, 1500));
              },
              meta: { title: "Events ", color: "#0277bd" },
            },
            {
              path: "/events/:id",
              name: "CustomEvent",
              component: function () {
                return n.e(198).then(n.bind(n, 4176));
              },
              children: [
                {
                  path: "/",
                  name: "CustomEventHome",
                  component: function () {
                    return n.e(385).then(n.bind(n, 3194));
                  },
                  meta: { isEvent: !0 },
                },
                {
                  path: "speakers",
                  name: "CustomEventSpeaker",
                  component: function () {
                    return n.e(865).then(n.bind(n, 7898));
                  },
                  meta: { isEvent: !0 },
                },
                {
                  path: "team",
                  name: "CustomEventTeam",
                  component: function () {
                    return n.e(193).then(n.bind(n, 8081));
                  },
                  meta: { isEvent: !0 },
                },
                {
                  path: "schedule",
                  name: "CustomEventSchedule",
                  component: function () {
                    return n.e(877).then(n.bind(n, 6267));
                  },
                  meta: { isEvent: !0 },
                },
                {
                  path: "partners",
                  name: "CustomEventPartners",
                  component: function () {
                    return n.e(191).then(n.bind(n, 7623));
                  },
                  meta: { isEvent: !0 },
                },
                {
                  path: "",
                  name: "redirectCustomEvent",
                  redirect: { path: "about" },
                  meta: { isEvent: !0 },
                },
              ],
            },
            {
              path: "/speakers",
              name: "Speakers",
              component: function () {
                return n.e(593).then(n.bind(n, 9153));
              },
              meta: { title: "Speakers ", color: "#0277bd" },
            },
            {
              path: "/speakers/:id",
              name: "Speakers-Details",
              component: function () {
                return n.e(824).then(n.bind(n, 1303));
              },
              meta: { title: "Speakers ", color: "#0277bd" },
            },
            {
              path: "/volunteers",
              name: "Volunteers",
              component: function () {
                return n.e(771).then(n.bind(n, 6665));
              },
              meta: { title: "Volunteers ", color: "#0277bd" },
            },
            {
              path: "/partners",
              name: "Partners",
              component: function () {
                return n.e(866).then(n.bind(n, 1273));
              },
              meta: { title: "Partners ", color: "#0277bd" },
            },
            {
              path: "/contact",
              name: "Contact",
              component: function () {
                return n.e(353).then(n.bind(n, 9469));
              },
              meta: { title: "Contact ", color: "#0277bd" },
            },
            {
              path: "/blogs",
              name: "Blogs",
              component: function () {
                return n.e(386).then(n.bind(n, 5570));
              },
              meta: { title: "Blogs ", color: "#0277bd" },
            },
            {
              path: "*",
              name: "redirect",
              redirect: { path: "/" },
              meta: { title: "Redirect ", color: "#0277bd" },
            },
          ],
          b = new h.Ay({
            mode: "history",
            base: "/",
            scrollBehavior: function () {
              return { x: 0, y: 0 };
            },
            routes: f,
          });
        b.beforeEach(function (e, t, n) {
          e.meta.title &&
            (document.title =
              e.meta.title + " | " + localStorage.getItem("name")),
            n();
        });
        var v = b;
        n(6053);
        a["default"].use(c.Ay);
        var k = new c.Ay.Store({
            state: {
              drawer: !1,
              eventDrawer: !0,
              config: {
                generalConfig: { socialLinks: {} },
                keysandsecurity: {},
                footerConfig: {},
              },
              items: [
                {
                  text: "Home",
                  to: "/",
                  icon: "mdi-circle-double",
                  meta: { showToolbar: !0, showBottomNav: !0 },
                },
                {
                  text: "Events",
                  to: "/events",
                  icon: "mdi-flag-outline",
                  meta: { showToolbar: !0, showBottomNav: !0 },
                },
                {
                  text: "Team",
                  to: "/team",
                  icon: "mdi-account-group-outline",
                  meta: { showToolbar: !0, showBottomNav: !0 },
                },
                {
                  text: "Speakers",
                  to: "/speakers",
                  icon: "mdi-account-multiple-outline",
                  meta: { showToolbar: !0, showBottomNav: !1 },
                },
                {
                  text: "About",
                  to: "/about",
                  icon: "mdi-lightbulb-outline",
                  meta: { showToolbar: !0, showBottomNav: !0 },
                },
                {
                  text: "Contact",
                  to: "/contact",
                  icon: "mdi-card-account-mail-outline",
                  meta: { showToolbar: !0, showBottomNav: !0 },
                },
                {
                  text: "Partners",
                  to: "/partners",
                  icon: "mdi-currency-usd",
                  meta: { showToolbar: !1, showBottomNav: !1 },
                },
                {
                  text: "Blogs",
                  to: "/blogs",
                  icon: "mdi-newspaper-variant-multiple-outline",
                  meta: { showToolbar: !0, showBottomNav: !1 },
                },
              ],
            },
            getters: {
              links: function (e) {
                return e.items;
              },
            },
            mutations: {
              setDrawer: function (e, t) {
                return (e.drawer = t);
              },
              toggleDrawer: function (e) {
                return (e.drawer = !e.drawer);
              },
              setEventDrawer: function (e, t) {
                return (e.eventDrawer = t);
              },
              toggleEventDrawer: function (e) {
                return (e.eventDrawer = !e.eventDrawer);
              },
              setGeneralConfig: function (e, t) {
                return (
                  (e.config.generalConfig = t),
                  localStorage.setItem("name", t.name)
                );
              },
              setKeysAndSecutityConfig: function (e, t) {
                return (e.config.keysandsecurity = t);
              },
              setFooterConfig: function (e, t) {
                return (e.config.footerConfig = t);
              },
            },
            modules: {},
            actions: {},
          }),
          y = n(5651),
          w = n.n(y),
          A = (n(4301), n(689));
        a["default"].use(w());
        var j = new (w())({
            icons: { iconfont: "mdi" },
            theme: {
              themes: {
                light: {
                  primary: A.A.blue,
                  secondary: A.A.grey.darken1,
                  accent: A.A.shades.black,
                  error: A.A.red.accent3,
                },
                dark: { primary: A.A.blue },
              },
            },
          }),
          S = {
            methods: {
              checkExistance: function (e, t) {
                return e && e.length > t;
              },
              getCharString: function (e) {
                var t = e.split(" ");
                return t.length > 1
                  ? (
                      t[0].substring(0, 1) +
                      "" +
                      t[1].substring(0, 1)
                    ).toUpperCase()
                  : t[0].substring(0, 1).toUpperCase();
              },
              getImgUrl: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "noimage.jpg";
                return e.length > 0 ? e : n(7461)("./" + t);
              },
              convtDate: function (e) {
                var t = new Date(e),
                  n = t.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  });
                return n;
              },
              summeryText: function (e, t) {
                return e.length > t ? e.substring(0, t) + ".." : e;
              },
            },
          };
        (a["default"].config.productionTip = !1),
          a["default"].mixin(S),
          new a["default"]({
            router: v,
            store: k,
            vuetify: j,
            render: function (e) {
              return e(p);
            },
          }).$mount("#app");
      },
      8839: function (e, t, n) {
        "use strict";
        n.d(t, {
          A: function () {
            return p;
          },
        });
        n(113), n(9432), n(6099);
        var a = n(5051),
          i =
            (n(2008),
            n(2062),
            JSON.parse(
              '[{"id":"123","designation":"123","uid":"eifHLxFVJnh5yla4f0yJ5PYhAJu1","socialLinks":{"web":"","medium":"","github":"","linkedin":"","twitter":"","facebook":""},"lastUpdatedOn":{"seconds":1708111951,"nanoseconds":220000000},"image":"","role":"Organizing Team","name":"123","email":"test@goo.com","active":true,"visible":true,"lastUpdatedBy":{"name":"Vrijraj Singh","id":"vrijraj_singh"},"bio":"","password":"","mbnumber":""},{"id":"bharat_agarwal","uid":"fX9kT4e3nPQNgzrUDkaTJBJopOB3","lastUpdatedOn":{"seconds":1616843650,"nanoseconds":556000000},"designation":"Developer ","image":"https://avatars.githubusercontent.com/u/43988371","role":"Core Team","email":"agarwalbharat68@gmail.com","name":"Bharat Agarwal","visible":true,"active":true,"mbnumber":"","lastUpdatedBy":{"id":"bharat_agarwal","name":"Bharat Agarwal"},"socialLinks":{"twitter":"https://twitter.com/bharatagsrwal","medium":"https://medium.com/@agarwalbharat68/","facebook":"https://facebook.com/bharatagsrwal","web":"https://iambharat.me","linkedin":"https://linkedin.com/in/bharatagsrwal","github":"https://github.com/bharatagsrwal"},"bio":"Hey, I am Bharat Agarwal"},{"id":"bhaskar","socialLinks":{"twitter":"","web":"","github":"","linkedin":"","facebook":"","medium":""},"uid":"II3Co8ghfIZNy8PZLNwSvfFC1En1","email":"connecthaxonic@gmail.com","createdBy":{"id":"vrijraj_singh","name":"Vrijraj Singh"},"role":"Volunteer","visible":false,"mbnumber":"","lastUpdatedBy":{"id":"bharat_agarwal","name":"Bharat Agarwal"},"designation":"Team","name":"Bhaskar","createdOn":{"seconds":1636219780,"nanoseconds":737000000},"password":"","bio":"","active":false,"image":"","lastUpdatedOn":{"seconds":1639858063,"nanoseconds":70000000}},{"id":"kartik_derasari","designation":"Developer","lastUpdatedOn":{"seconds":1708111867,"nanoseconds":274000000},"name":"Kartik Derasari","visible":true,"role":"Organizing Team","socialLinks":{"linkedin":"","medium":"","web":"","twitter":"","github":"","facebook":""},"password":"","uid":"L4Hi6A4XyVhYVmQyuyekOVqyqSJ3","createdBy":{"id":"test","name":"Aura "},"createdOn":{"seconds":1616963367,"nanoseconds":232000000},"bio":"","email":"170770107516@socet.edu.in","image":"","lastUpdatedBy":{"id":"vrijraj_singh","name":"Vrijraj Singh"},"active":true,"mbnumber":""},{"id":"test","socialLinks":{"medium":"sfs","twitter":"sdf","facebook":"asd","linkedin":"","github":"sdf","web":""},"password":"","image":"https://raw.githubusercontent.com/gdg-x/aura/master/public/img/icons/android-chrome-512x512.png","role":"Organizing Team","lastUpdatedOn":{"seconds":1591517389,"nanoseconds":759000000},"name":"Aura ","uid":"b5px8sSxmpNICTFsRv9LdA1L04g2","lastUpdatedBy":{"id":"test","name":"Test Aura"},"visible":true,"active":true,"designation":"Aura Admin","email":"connectwithaurapp@gmail.com","mbnumber":"","bio":"This is Aura Admin Test account."},{"id":"vrijraj-ag","visible":true,"mbnumber":"","password":"","active":true,"designation":"Tester","lastUpdatedOn":{"seconds":1708111894,"nanoseconds":230000000},"createdBy":{"name":"Vrijraj Singh","id":"vrijraj_singh"},"role":"Organizing Team","uid":"uVkEB9SThMS3Y2zZdW48LjqPdyg2","socialLinks":{"facebook":"","twitter":"","medium":"","github":"","web":"","linkedin":""},"name":"Vrijraj-AG","lastUpdatedBy":{"name":"Vrijraj Singh","id":"vrijraj_singh"},"createdOn":{"seconds":1646965882,"nanoseconds":978000000},"email":"vrijraj.s@agprop.in","bio":"","image":""},{"id":"vrijraj_27","active":false,"password":"","bio":"","image":"","createdOn":{"seconds":1616850506,"nanoseconds":930000000},"lastUpdatedOn":{"seconds":1616850520,"nanoseconds":301000000},"lastUpdatedBy":{"id":"bharat_agarwal","name":"Bharat Agarwal"},"socialLinks":{"github":"","twitter":"","linkedin":"","web":"","facebook":"","medium":""},"role":"Organizing Team","uid":"ry1iydERzSYgROI6toL7s7ri8283","createdBy":{"id":"bharat_agarwal","name":"Bharat Agarwal"},"designation":"Vrijraj","email":"vrijraj27@gmail.com","mbnumber":"","name":"Vrijraj27","visible":false},{"id":"vrijraj_singh","designation":"Developer","lastUpdatedBy":{"name":"Vrijraj Singh","id":"vrijraj_singh"},"role":"Core Team","active":true,"visible":true,"lastUpdatedOn":{"seconds":1708202554,"nanoseconds":681000000},"uid":"mGmk2ayauCXfxX2cBabGDXugYoI2","email":"vrijraj2396@gmail.com","bio":"Vrijraj is a dedicated CTO at agprop and a passionate advocate for community engagement. He actively contributes to the TechFerment community and holds the esteemed title of Google Developers Expert for Firebase and Web Technologies. With a wealth of experience, he has conducted over 300 talks and workshops, sharing his knowledge with various communities. Vrijraj\'s expertise lies in Web development, Firebase, Google Cloud Platform, and UI/UX Design. He possesses a strong drive for learning new technologies and leveraging them to build innovative solutions. Alongside his professional endeavors, Vrijraj takes pleasure in mentoring individuals and nurturing communities. During his leisure time, he indulges in his love for food and enjoys watching YouTube videos.","image":"https://avatars1.githubusercontent.com/u/10599101?s=460&u=f6ead2f3f7965b554e0dea844705be8e78075d1a&v=4","mbnumber":"","socialLinks":{"facebook":"https://Facebook.com","web":"","linkedin":"https://linkedin.com","twitter":"","medium":"https://medium.com","github":"https://github.com"},"name":"Vrijraj Singh"}]'
            )),
          o = JSON.parse(
            '[{"id":"Aura2022","name":"Aura22","visible":true,"date":"2021-12-09","partners":["test2","abc"],"venue":{"googlemapsurl":"","name":"Online"},"lastUpdatedOn":{"seconds":1714470957,"nanoseconds":193000000},"active":true,"links":{"facebook":"","feedback":"","callforspeaker":"","meetup":"","registration":"https://iambharat.me","youtube":"https://youtube.com"},"createdBy":{"id":"bharat_agarwal","name":"Bharat Agarwal"},"lastUpdatedBy":{"id":"vrijraj_singh","name":"Vrijraj Singh"},"agendaV2":{"0":[{"starttime":"10:30","des":"This is Day 1 Agenda 1 description","endtime":"13:00","title":"Day 1 - Agenda - 1"},{"title":"Day 1 - Agenda - 2","des":"Day1 agenda 2","starttime":"01:30","endtime":"16:00"}],"1":[{"endtime":"04:25","title":"Day 2 ","starttime":"10:25","des":"THis is whole day agenda"}],"2":[{"title":"Day 3 Agenda 1","des":"Agenda","endtime":"13:10","starttime":"11:10"},{"endtime":"16:10","des":"Agenda 2","starttime":"02:10","title":"Day 3 Agenda 2"}]},"endDate":"2021-12-22","des":"<p>We\'ll delve into the strategic steps of transforming your existing projects into lucrative MicroSaaS products ready to conquer the market. We\'ll dissect the process, uncovering the key elements that empower these conversions. From identifying your project\'s unique selling points to fine-tuning its scalability</p><p></p><p>pricing strategies, and market fit, we\'ll craft a comprehensive blueprint for your MicroSaaS success. Together, we\'ll navigate through the complexities of product development, </p><p></p><p>honing in on what makes your project a solution worth purchasing. With a blend of innovative thinking, market analysis, and strategic planning, we\'ll unlock the potential of your projects and usher them into the realm of thriving MicroSaaS products. For any query feel free to reach us at techferment@gmail.com</p><p></p><p></p><p>asdasd</p>","time":{"endtime":"16:00","starttime":"10:17"},"team":["bharat_agarwal","bhaskar","vrijraj_singh","vrijraj_27","test"],"speakers":["bharat"],"image":"https://firebasestorage.googleapis.com/v0/b/myaurapp.appspot.com/o/events%2FAura2022.png?alt=media&token=f8d927b9-0b29-4c21-aa0d-1991a5818fcc","hashtags":["Aura","Aura2022","2022"],"createdOn":{"seconds":1639857383,"nanoseconds":548000000},"agenda":[{"title":"asdasd","des":"asdas","starttime":"02:01","endtime":"14:00"}]},{"id":"asd","team":["bharat_agarwal"],"createdOn":{"seconds":1708203966,"nanoseconds":415000000},"visible":true,"name":"asdasd","links":{"youtube":"","facebook":"","callforspeaker":"","meetup":"","registration":"","feedback":""},"lastUpdatedBy":{"id":"","name":""},"createdBy":{"name":"Vrijraj Singh","id":"vrijraj_singh"},"partners":["abc"],"image":"","lastUpdatedOn":"","agenda":[],"hashtags":["asdasd","asd"],"time":{"starttime":"14:14","endtime":"14:19"},"speakers":["bharat"],"active":true,"des":"asdasdas","date":"2024-01-30","venue":{"googlemapsurl":"asdasd","name":"asd"}},{"id":"asdasd12","createdOn":{"seconds":1639855764,"nanoseconds":865000000},"links":{"feedback":"","callforspeaker":"","registration":"","meetup":"","youtube":"","facebook":""},"des":"","speakers":[],"lastUpdatedBy":{"id":"","name":""},"lastUpdatedOn":"","endDate":"2021-12-20","agendaV2":{"0":[{"des":"asd","endtime":"00:00","title":"asd","starttime":"02:58"}],"1":[{"des":"asd","starttime":"00:01","endtime":"01:59","title":"asd"}]},"hashtags":[],"name":"asdasda","createdBy":{"id":"bharat_agarwal","name":"Bharat Agarwal"},"partners":[],"active":false,"agenda":[],"date":"2021-12-19","venue":{"googlemapsurl":"","name":""},"visible":false,"image":"","time":{"endtime":"21:16","starttime":"09:19"},"team":[]},{"id":"devfest2020","createdOn":{"seconds":1590519998,"nanoseconds":915000000},"links":{"meetup":"https://myaurapp.web.app","registration":"https://myaurapp.web.app","feedback":"https://myaurapp.web.app","callforspeaker":"https://myaurapp.web.app","facebook":"https://myaurapp.web.app","youtube":"https://myaurapp.web.app"},"des":"Much of the web ecosystem focusing on fundamentals and innovating quickly to meet the ever-changing needs of users.\\n\\nTo help our community build powerful and useful sites, we want to invite you to web.dev LIVE India, a four-day digital event to learn modern web techniques and to connect with other developers.\\n\\nWhile we are open to welcome everyone and a digital event means anyone can join, the content will be tailored to India/APAC region audience.","speakers":["test","kartik_derasari","bharat"],"lastUpdatedOn":{"seconds":1638203591,"nanoseconds":337000000},"lastUpdatedBy":{"id":"bharat_agarwal","name":"Bharat Agarwal"},"endDate":"2021-12-02","hashtags":["DEVFEST2020"],"createdBy":{"id":"vrijraj_singh","name":"Vrijraj Singh"},"name":"DevFest 2021","partners":["abc","test2","test3","test4"],"agenda":[{"endtime":"10:30","title":"Welcome Keynote 2","starttime":"09:30","des":"In this webinar, you are going to deep dive into the VS Code features which will ultimately speed up the development cycle. In VS Code, there are various features and plugins which are used by pro developers to speed up their development pace."},{"starttime":"15:57","des":"","title":"","endtime":"16:58"},{"starttime":"15:57","title":"hahah","des":"heeeehehehehehe","endtime":"16:58"}],"active":true,"date":"2021-10-23","visible":true,"venue":{"googlemapsurl":"Somevanuelink","name":"ssdfs"},"image":"https://firebasestorage.googleapis.com/v0/b/myaurapp.appspot.com/o/events%2Fdevfest2020.jpg?alt=media&token=6f64f542-1b08-4fb6-b01d-7b8d9f750a99","time":{"endtime":"14:30","starttime":"00:30"},"team":["varsha","vrijraj27","vrijraj_singh","bharat_agarwal","test","test1"]},{"id":"testid","createdBy":{"name":"Vrijraj Singh","id":"vrijraj_singh"},"hashtags":["asdasd","as","das","d"],"createdOn":{"seconds":1708109304,"nanoseconds":46000000},"links":{"feedback":"","meetup":"asdasd","registration":"asdada","facebook":"asdasds","callforspeaker":"","youtube":""},"name":"test event","lastUpdatedOn":{"seconds":1708109332,"nanoseconds":389000000},"time":{"starttime":"02:10","endtime":"00:09"},"team":["vrijraj_singh","vrijraj-ag"],"partners":["abc"],"image":"","lastUpdatedBy":{"id":"vrijraj_singh","name":"Vrijraj Singh"},"des":"asdasd a sdas d asd ad","date":"2024-02-20","venue":{"name":"asd","googlemapsurl":""},"agenda":[],"active":true,"speakers":["bharat"],"visible":true}]'
          ),
          r = JSON.parse(
            '[{"id":"bharat","visible":true,"image":"https://avatars.githubusercontent.com/u/43988371","lastUpdatedBy":{"name":"Vrijraj Singh","id":"vrijraj_singh"},"bio":"\\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\\"","mbnumber":"","company":{"url":"","name":"GDG Jalandhar"},"socialLinks":{"twitter":"https://twitter.com/bharatagsrwal","linkedin":"https://linkedin.com/in/bharat101","github":"https://github.com/agarwalbharat","web":"https://iambharat.me","facebook":"https://facebook.com/bharatagsrwal","medium":"https://medium.com/@agarwalbharat68/"},"name":"Bharat Agarwal","city":"Chandigarh ","email":"agarwalbharat68@gmail.com","designation":"Developer ","country":"India","lastUpdatedOn":{"seconds":1708074938,"nanoseconds":310000000}},{"id":"kartik_derasari","createdOn":{"seconds":1616952085,"nanoseconds":121000000},"bio":"","country":"India","lastUpdatedOn":{"seconds":1617131598,"nanoseconds":20000000},"socialLinks":{"linkedin":"","github":"","twitter":"","facebook":"","medium":"","web":""},"company":{"name":"DSC Silver Oak University","url":"https://dsc.community.dev/silver-oak-university/"},"visible":true,"city":"Ahmedabad","mbnumber":null,"lastUpdatedBy":{"name":"Vrijraj Singh","id":"vrijraj_singh"},"image":"","email":"test@gmail.com","name":"Kartik Derasari","createdBy":{"id":"test","name":"Aura "},"designation":"Community Lead"},{"id":"vrijraj_singh","socialLinks":{"medium":"","facebook":"","web":"","github":"","linkedin":"","twitter":""},"createdOn":{"seconds":1616921786,"nanoseconds":534000000},"createdBy":{"name":"Aura ","id":"test"},"bio":"","company":{"url":"https://google.com","name":"Demo"},"mbnumber":"","city":"Demo","lastUpdatedOn":{"seconds":1708183584,"nanoseconds":584000000},"email":"test@gmail.com","country":"Demo","image":"","designation":"Demo1","lastUpdatedBy":{"id":"vrijraj_singh","name":"Vrijraj Singh"},"visible":true,"name":"Demo1"}]'
          ),
          s = JSON.parse(
            '[{"id":"abc","socialLinks":{"github":"","facebook":"","linkedin":"","twitter":"","web":""},"pocemail":"","image":"","active":false,"visible":false,"lastUpdatedOn":{"seconds":1596049098,"nanoseconds":965000000},"des":"","name":"Google Developers Groups","lastUpdatedBy":{"id":"bharat_agarwal","name":"Bharat Agarwal"}},{"id":"test4","createdOn":{"seconds":1593207096,"nanoseconds":951000000},"name":"test4","active":true,"lastUpdatedOn":"","image":"","socialLinks":{"github":"","twitter":"","facebook":"","web":"","linkedin":""},"lastUpdatedBy":{"name":"","id":""},"des":"","visible":true,"createdBy":{"id":"vrijraj_singh","name":"Vrijraj Singh"}}]'
          ),
          c = JSON.parse(
            '[{"id":"communityguidelines","codeOfConduct":"When you join our programs, you’re joining a community. And like any growing community, a few ground rules about expected behavior are good for everyone. These guidelines cover both online (e.g. mailing lists, social channels) and offline (e.g. in-person meetups) behavior. Violations of this code of conduct can result in members being removed from the program. Use your best judgment, and if you’d like more clarity or have questions feel free to reach out.","communityGuidelines":[{"name":"Be nice2","des":"We\'re all part of the same community, so be friendly, welcoming, and generally a nice person. Be someone that other people want to be around."},{"name":"Be respectful and constructive","des":"Remember to be respectful and constructive with your communication to fellow members. Don\'t get into flamewars, make personal attacks, vent, or rant unconstructively. Everyone should take responsibility for the community and take the initiative to diffuse tension and stop a negative thread as early as possible."},{"name":"Be collaborative","des":"Work together! We can learn a lot from each other. Share knowledge, and help each other out."}]},{"id":"footer","links":{"Developer Console":[{"link":"https://console.developers.google.com/","linktype":"Developer Console","linkname":"Google API Console"},{"link":"https://console.cloud.google.com/","linkname":"Google Play Console","linktype":"Developer Console"},{"linktype":"Developer Console","link":"https://console.firebase.google.com/","linkname":"Firebase Console"}],"Resources":[{"linkname":"Become a Sponsor","link":"mailto:devfestpunjab@gmail.com","linktype":"Resources"}],"About":[{"linkname":"TechFerment","link":"dsfdssdfsdfasd","linktype":"About"}],"Footer End Session Link":[{"linktype":"Footer End Session Link","linkname":"Code of Conduct","link":"https://docs.google.com/document/d/1Wz_w6Z7usMnXKFMpOY4IPbA35twK7Uc4CAxScGDiwOk/edit"},{"linkname":"Community Guidelines","linktype":"Footer End Session Link","link":"/about"}]}},{"id":"general","meetupLink":"https://meetup.com/GDG-Jalandhar","toolbarImage":"@/assets/img/donotremove/button.png","shortName":"","website":"https://myaurapp.web.app","learnMoreLink":"http://g.co/dev/gdg","homeImage":"","socialLinks":{"youtube":"https://youtube.com","github":"https://github.com/gdg-jalandhar","instagram":"https://instagra.com","twitter":"https://twitter.com/gdgjalandhar","facebook":"https://facebook.com","medium":"https://medium.com","linkedin":"https://www.linkedin.com/company/18048778"},"shortDescription":"TAMASUMA (Talent Mastery & Support Application) adalah platform edu-tech yang dirancang untuk membantu pendidik menemukan bakat, mengembangkan keterampilan, dan meraih impian melalui fitur dan layanan pembelajaran terbaik.","longDescription":"TAMASUMA adalah platform edukasi berbasis teknologi yang mendukung pengembangan profesional para pendidik melalui pelatihan interaktif, bimbingan ahli, dan komunitas kolaboratif. Kami hadir untuk membantu para pendidik menghadapi tantangan industri 4.0 dengan solusi praktis dan berkelanjutan. Baik bagi pemula maupun profesional berpengalaman, TAMASUMA membuka peluang untuk terus bertumbuh dan menciptakan dampak positif dalam dunia pendidikan.","email":"connectwithaurapp@gmail.com","blogs":{"medium":"techferment","devto":""},"becomemember":"https://meetup.com/GDG-Jalandhar","hashtags":["EduTech","PendidikBerkembang","TalentMastery","BelajarBersama"],"name":"Tamasuma"},{"id":"partners","partnersid":["asf","asdfg"]}]'
          ),
          d = JSON.parse(
            '[{"id":"data","eventid":["Aura2022","devfest2020","asdasd12","testid"]}]'
          ),
          u = {
            getTeam: function () {
              return i;
            },
            getTeamMember: function (e) {
              return i.find(function (t) {
                return t.id === e;
              });
            },
            getEvents: function () {
              return null !== o && void 0 !== o ? o : [];
            },
            getEvent: function (e) {
              return o.find(function (t) {
                return t.id === e;
              });
            },
            getCustomEvents: function () {
              return o.filter(function (e) {
                return "custom" === e.type;
              });
            },
            getFeatureEvents: function () {
              var e = d.find(function (e) {
                return "data" === e.id;
              });
              return e ? e.eventid : [];
            },
            getSpeakers: function () {
              return r;
            },
            getSpeaker: function (e) {
              return r.find(function (t) {
                return t.id === e;
              });
            },
            getPartners: function () {
              return s;
            },
            getPartner: function (e) {
              return s.find(function (t) {
                return t.id === e;
              });
            },
            getConfig: function () {
              return c.map(function (e) {
                return {
                  name: e.id,
                  data: (0, a.A)((0, a.A)({}, e), {}, { id: void 0 }),
                };
              });
            },
          },
          m = n(6053),
          l = {
            getTeam: function () {
              return new Promise(function (e) {
                var t = u.getTeam();
                e({ success: !0, data: t });
              });
            },
            getTeamMember: function (e) {
              return new Promise(function (t) {
                var n = u.getTeam(),
                  a = n.find(function (t) {
                    return t.id === e;
                  });
                t({ success: !!a, data: a || {} });
              });
            },
            getAllEvents: function () {
              return new Promise(function (e) {
                var t = u.getEvents();
                e({ success: !0, data: t });
              });
            },
            getAllCustomEvents: function () {
              return new Promise(function (e) {
                var t = u.getEvents();
                e({ success: !0, data: t });
              });
            },
            getEvent: function (e) {
              return new Promise(function (t) {
                var n = u.getEvent(e);
                t({ success: !!n, data: n || {} });
              });
            },
            getAllSpeakers: function () {
              return new Promise(function (e) {
                var t = u.getSpeakers();
                e({ success: !0, data: t });
              });
            },
            getSpeaker: function (e) {
              return new Promise(function (t) {
                var n = u.getSpeaker(e);
                t({ success: !!n, data: n || {} });
              });
            },
            getFeaturesEvents: function () {
              return new Promise(function (e, t) {
                try {
                  var n = u.getFeatureEvents();
                  n && 0 !== n.length
                    ? e({ success: !0, data: n })
                    : e({ success: !1, data: {} });
                } catch (a) {
                  t(a);
                }
              });
            },
            getAllPartners: function () {
              return new Promise(function (e) {
                var t = u.getPartners();
                e({ success: !0, data: t });
              });
            },
            getPartner: function (e) {
              return new Promise(function (t) {
                var n = u.getPartners(),
                  a = n.find(function (t) {
                    return t.id === e;
                  });
                t({ success: !!a, data: a || {} });
              });
            },
            getAllConfig: function () {
              return new Promise(function (e) {
                var t = u.getConfig();
                t && 0 !== t.length
                  ? e({ success: !0, data: t })
                  : e({ success: !1, data: [] });
              });
            },
            getAllUpcomingMeetupsEvents: function (e) {
              return new Promise(function (t, n) {
                fetch(
                  "https://cors-anywhere.herokuapp.com/https://api.meetup.com/" +
                    e +
                    "/events?&sign=true"
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    t({ success: !0, data: e });
                  })
                  .catch(function (e) {
                    n(e);
                  });
              });
            },
            getCommunityGuidelines: function () {
              return new Promise(function (e, t) {
                m.A.firestore
                  .collection("config")
                  .doc("communityguidelines")
                  .get()
                  .then(function (t) {
                    t.empty && e({ success: !1, data: {} }),
                      Object.keys(t.data()).length > 0 &&
                        e({ success: !0, data: t.data() });
                  })
                  .catch(function (e) {
                    t(e);
                  });
              });
            },
            getAllMeetupPastEvents: function (e) {
              return new Promise(function (t, n) {
                fetch(
                  "https://cors-anywhere.herokuapp.com/https://api.meetup.com/" +
                    e +
                    "/events?desc=true&photo-host=public&page=300&status=past&sign=true"
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    t({ success: !0, data: e });
                  })
                  .catch(function (e) {
                    n(e);
                  });
              });
            },
            getAllMediumBlogs: function (e) {
              return new Promise(function (t, n) {
                var a =
                  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/" +
                  e;
                fetch(a)
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    e.items.length > 0 && t({ success: !0, data: e });
                  })
                  .catch(function (e) {
                    n(e);
                  });
              });
            },
          },
          p = l;
      },
      7461: function (e, t, n) {
        var a = {
          "./about.png": 9270,
          "./button.png": 7593,
          "./eventbanner.jpg": 1931,
          "./eventcover.png": 3456,
          "./noimage.jpg": 949,
          "./profile.jpg": 1374,
          "./spakerhead.jpg": 6107,
        };
        function i(e) {
          var t = o(e);
          return n(t);
        }
        function o(e) {
          if (!n.o(a, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return a[e];
        }
        (i.keys = function () {
          return Object.keys(a);
        }),
          (i.resolve = o),
          (e.exports = i),
          (i.id = 7461);
      },
      9270: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/about.b44a7c54.png";
      },
      7593: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/button.b07728a2.png";
      },
      1931: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/eventbanner.86af947b.jpg";
      },
      3456: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/eventcover.8ea1333d.png";
      },
      949: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/noimage.aa6a1acc.jpg";
      },
      1374: function (e) {
        "use strict";
        e.exports =
          "data:image/jpeg;base64,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";
      },
      6107: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/spakerhead.414c95cd.jpg";
      },
    },
    t = {};
  function n(a) {
    var i = t[a];
    if (void 0 !== i) return i.exports;
    var o = (t[a] = { id: a, loaded: !1, exports: {} });
    return e[a].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, a, i, o) {
        if (!a) {
          var r = 1 / 0;
          for (u = 0; u < e.length; u++) {
            (a = e[u][0]), (i = e[u][1]), (o = e[u][2]);
            for (var s = !0, c = 0; c < a.length; c++)
              (!1 & o || r >= o) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](a[c]);
              })
                ? a.splice(c--, 1)
                : ((s = !1), o < r && (r = o));
            if (s) {
              e.splice(u--, 1);
              var d = i();
              void 0 !== d && (t = d);
            }
          }
          return t;
        }
        o = o || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
        e[u] = [a, i, o];
      };
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return n.d(t, { a: t }), t;
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var a in t)
          n.o(t, a) &&
            !n.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, a) {
              return n.f[a](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return (
          "Tamasuma/js/" +
          ({
            89: "team-details",
            191: "CustomEventPartners",
            193: "CustomEventTeam",
            198: "CustomEvent",
            268: "events",
            353: "contact",
            385: "CustomEventAbout",
            386: "blogs",
            593: "speakers",
            594: "about",
            632: "team-page",
            771: "volunteer",
            824: "speakers-details",
            865: "CustomEventSpeaker",
            866: "partners",
            877: "CustomEventSchedule",
            962: "home",
          }[e] || e) +
          "-legacy." +
          {
            2: "9d1a2bc8",
            27: "0f888472",
            56: "c2afee47",
            85: "10403f79",
            89: "cd7b9bbb",
            191: "68c7efe1",
            193: "69b586f6",
            198: "ed2d5051",
            213: "08502ad6",
            268: "909277de",
            351: "11e9b6ad",
            353: "3e6ef680",
            376: "8a673e37",
            385: "b735b231",
            386: "254a61fa",
            406: "3a6797d6",
            457: "72dd931d",
            459: "907d5f00",
            521: "193f7671",
            539: "4f4d2000",
            567: "158cc7a0",
            573: "6bb3ae7c",
            576: "a5133bf9",
            593: "c5496660",
            594: "850f261b",
            619: "6f140338",
            632: "40dc5932",
            639: "ad9b930e",
            644: "0803f96d",
            663: "4a9a4d0f",
            771: "1f0061b6",
            798: "71a0b592",
            809: "55f2ba09",
            824: "ef1cf8fd",
            837: "0156b83c",
            865: "972bac68",
            866: "618cb55b",
            877: "75411fc9",
            880: "502a5b0d",
            893: "9befa3ec",
            903: "d8b00c22",
            915: "bf2ef804",
            919: "34f6e244",
            962: "bc383cbf",
            998: "27e71f97",
          }[e] +
          ".js"
        );
      };
    })(),
    (function () {
      n.miniCssF = function (e) {};
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "aura-main:";
      n.l = function (a, i, o, r) {
        if (e[a]) e[a].push(i);
        else {
          var s, c;
          if (void 0 !== o)
            for (
              var d = document.getElementsByTagName("script"), u = 0;
              u < d.length;
              u++
            ) {
              var m = d[u];
              if (
                m.getAttribute("src") == a ||
                m.getAttribute("data-webpack") == t + o
              ) {
                s = m;
                break;
              }
            }
          s ||
            ((c = !0),
            (s = document.createElement("script")),
            (s.charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + o),
            (s.src = a)),
            (e[a] = [i]);
          var l = function (t, n) {
              (s.onerror = s.onload = null), clearTimeout(p);
              var i = e[a];
              if (
                (delete e[a],
                s.parentNode && s.parentNode.removeChild(s),
                i &&
                  i.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              l.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = l.bind(null, s.onerror)),
            (s.onload = l.bind(null, s.onload)),
            c && document.head.appendChild(s);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.nmd = function (e) {
        return (e.paths = []), e.children || (e.children = []), e;
      };
    })(),
    (function () {
      n.p = "/";
    })(),
    (function () {
      var e = { 524: 0 };
      (n.f.j = function (t, a) {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) a.push(i[2]);
          else {
            var o = new Promise(function (n, a) {
              i = e[t] = [n, a];
            });
            a.push((i[2] = o));
            var r = n.p + n.u(t),
              s = new Error(),
              c = function (a) {
                if (n.o(e, t) && ((i = e[t]), 0 !== i && (e[t] = void 0), i)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    r = a && a.target && a.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + r + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = r),
                    i[1](s);
                }
              };
            n.l(r, c, "chunk-" + t, t);
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, a) {
          var i,
            o,
            r = a[0],
            s = a[1],
            c = a[2],
            d = 0;
          if (
            r.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (i in s) n.o(s, i) && (n.m[i] = s[i]);
            if (c) var u = c(n);
          }
          for (t && t(a); d < r.length; d++)
            (o = r[d]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(u);
        },
        a = (self["webpackChunkaura_main"] =
          self["webpackChunkaura_main"] || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var a = n.O(void 0, [504], function () {
    return n(9377);
  });
  a = n.O(a);
})();
