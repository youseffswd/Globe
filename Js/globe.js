import { _ as t } from "./userstate.js";
import { T as i } from "./timing.js";
import { F as e } from "./index.js";
import { E as s } from "./easing.js";
import { N as a } from "./numbers.js";
import { V as n, G as o, C as h, T as r, S as l, M as d, a as c, D as m, P as u, I as g, b as v, c as p, d as w, B as f, F as b, e as M, O as L, W as y, A as x, f as C, g as S, h as R, i as D } from "./threemodule.js";
const I = {
        ad: [42.5, 1.5],
        ae: [24, 54],
        af: [33, 65],
        al: [41, 20],
        am: [40, 45],
        an: [12.25, -68.75],
        ao: [-12.5, 18.5],
        ap: [35, 105],
        aq: [-90, 0],
        ar: [-34, -64],
        at: [47.3333, 13.3333],
        au: [-27, 133],
        aw: [12.5, -69.9667],
        az: [40.5, 47.5],
        ba: [44, 18],
        bd: [24, 90],
        be: [50.8333, 4],
        bf: [13, -2],
        bg: [43, 25],
        bh: [26, 50.55],
        bi: [-3.5, 30],
        bj: [9.5, 2.25],
        bn: [4.5, 114.6667],
        bo: [-17, -65],
        br: [-10, -55],
        bt: [27.5, 90.5],
        bv: [-54.4333, 3.4],
        bw: [-22, 24],
        bz: [17.25, -88.75],
        ca: [54, -100],
        cd: [0, 25],
        cf: [7, 21],
        ch: [47, 8],
        cl: [-30, -71],
        cm: [6, 12],
        cn: [35, 105],
        co: [4, -72],
        cr: [10, -84],
        cy: [35, 33],
        cz: [49.75, 15.5],
        de: [51, 9],
        dj: [11.5, 43],
        dk: [56, 10],
        do: [19, -70.6667],
        dz: [28, 3],
        ec: [-2, -77.5],
        ee: [59, 26],
        eg: [27, 30],
        eh: [24.5, -13],
        er: [15, 39],
        es: [40, -4],
        et: [8, 38],
        eu: [47, 8],
        fi: [64, 26],
        fo: [62, -7],
        fr: [46, 2],
        ga: [-1, 11.75],
        gb: [54, -2],
        ge: [42, 43.5],
        gf: [4, -53],
        gh: [8, -2],
        gi: [36.1833, -5.3667],
        gl: [72, -40],
        gm: [13.4667, -16.5667],
        gn: [11, -10],
        gq: [2, 10],
        gr: [39, 22],
        gt: [15.5, -90.25],
        gw: [12, -15],
        gy: [5, -59],
        hk: [22.25, 114.1667],
        hn: [15, -86.5],
        hr: [45.1667, 15.5],
        ht: [19, -72.4167],
        hu: [47, 20],
        id: [-5, 120],
        ie: [53, -8],
        il: [31.5, 34.75],
        in: [20, 77],
        is: [65, -18],
        it: [42.8333, 12.8333],
        jm: [18.25, -77.5],
        jo: [31, 36],
        jp: [36, 138],
        ke: [1, 38],
        kg: [41, 75],
        kh: [13, 105],
        kr: [37, 127.5],
        kw: [29.3375, 47.6581],
        kz: [48, 68],
        la: [18, 105],
        lb: [33.8333, 35.8333],
        li: [47.1667, 9.5333],
        lk: [7, 81],
        ls: [-29.5, 28.5],
        lt: [56, 24],
        lu: [49.75, 6.1667],
        lv: [57, 25],
        ly: [25, 17],
        ma: [32, -5],
        mc: [43.7333, 7.4],
        md: [47, 29],
        me: [42, 19],
        mg: [-20, 47],
        mk: [41.8333, 22],
        ml: [17, -4],
        mn: [46, 105],
        mo: [22.1667, 113.55],
        mr: [20, -12],
        mw: [-13.5, 34],
        mx: [23, -102],
        my: [2.5, 112.5],
        mz: [-18.25, 35],
        na: [-22, 17],
        ne: [16, 8],
        ng: [10, 8],
        ni: [13, -85],
        nl: [52.5, 5.75],
        no: [62, 10],
        np: [28, 84],
        nz: [-41, 174],
        om: [21, 57],
        pa: [9, -80],
        pe: [-10, -76],
        pg: [-6, 147],
        ph: [13, 122],
        pk: [30, 70],
        pl: [52, 20],
        pm: [46.8333, -56.3333],
        ps: [32, 35.25],
        pt: [39.5, -8],
        py: [-23, -58],
        qa: [25.5, 51.25],
        ro: [46, 25],
        rs: [44, 21],
        ru: [60, 100],
        rw: [-2, 30],
        sa: [25, 45],
        se: [62, 15],
        sg: [1.3667, 103.8],
        si: [46, 15],
        sj: [78, 20],
        sk: [48.6667, 19.5],
        sl: [8.5, -11.5],
        sm: [43.7667, 12.4167],
        sn: [14, -14],
        so: [10, 49],
        sr: [4, -56],
        sv: [13.8333, -88.9167],
        sz: [-26.5, 31.5],
        td: [15, 19],
        tg: [8, 1.1667],
        th: [15, 100],
        tj: [39, 71],
        tn: [34, 9],
        tr: [39, 35],
        tt: [11, -61],
        tw: [23.5, 121],
        tz: [-6, 35],
        ua: [49, 32],
        ug: [1, 32],
        us: [38, -97],
        uy: [-33, -56],
        uz: [41, 64],
        va: [41.9, 12.45],
        ve: [8, -66],
        vn: [16, 106],
        ye: [15, 48],
        za: [-29, 24],
        zm: [-15, 30],
    },
    _ = Math.PI,
    z = _ / 2,
    T = 180 / _,
    F = _ / 180,
    X = Math.atan2,
    Y = Math.cos,
    A = Math.sin,
    E = Math.sqrt;
function P(t) {
    return (t = A(t / 2)) * t;
}
function k(t, i) {
    const e = t[0] * F,
        s = t[1] * F,
        a = i[0] * F,
        n = i[1] * F,
        o = Y(s),
        h = A(s),
        r = Y(n),
        l = A(n),
        d = o * Y(e),
        c = o * A(e),
        m = r * Y(a),
        u = r * A(a),
        g = 2 * ((v = E(P(n - s) + o * r * P(a - e))) > 1 ? z : v < -1 ? -z : Math.asin(v));
    var v;
    const p = A(g),
        w = g
            ? function (t) {
                const i = A((t *= g)) / p,
                    e = A(g - t) / p,
                    s = e * d + i * m,
                    a = e * c + i * u,
                    n = e * h + i * l;
                return [X(a, s) * T, X(n, E(s * s + a * a)) * T];
            }
            : function () {
                return [e * T, s * T];
            };
    return (w.distance = g), w;
}
const j = Math.PI / 180;
function q(t, i, e) {
    const s = (90 - t) * j,
        a = i * j;
    return new n(-e * Math.sin(s) * Math.cos(a), e * Math.cos(s), e * Math.sin(s) * Math.sin(a));
}
class G extends o {
    constructor(i, e, o, g, v, p, w) {
        super(),
            t(this, "animationFrame", void 0),
            t(this, "drawAnimatedLine", () => {
                if (!this.active) return;
                let t = this.geometry.drawRange.count;
                const i = performance.now() - this.startTime;
                this.material.uniforms.u_time.value = i;
                const e = s.easeOutQuart(i, 0, 1, 2500);
                if (((t = Math.min(3e3, Math.ceil(3e3 * e))), this.active && t < 3e3)) {
                    const i = this.circle1.scale.x;
                    if ((i < 0.35 && this.circle1.scale.set(i + 0.01, i + 0.01, i + 0.01), t > 1500)) {
                        const t = this.circle2.scale.x;
                        t < 0.35 && this.circle2.scale.set(t + 0.015, t + 0.015, t + 0.015);
                    }
                    this.geometry.setDrawRange(0, t);
                }
                this.animationFrame = requestAnimationFrame(this.drawAnimatedLine);
            }),
            t(this, "drawStaticLine", () => {
                this.geometry.setDrawRange(0, 3e3), this.circle1.scale.set(0.35, 0.35, 0.35), this.circle2.scale.set(0.35, 0.35, 0.35);
            }),
            t(this, "eraseLine", () => {
                const t = this.geometry.drawRange.count,
                    i = this.geometry.drawRange.start;
                if (((this.material.uniforms.u_time.value = performance.now() - this.startTime), i > t)) return;
                const e = this.circle1.scale.x,
                    s = this.circle2.scale.x;
                if (e > 0.03) {
                    const t = e - 0.01;
                    this.circle1.scale.set(t, t, t);
                }
                if (i > 1500 && s > 0.03) {
                    const t = s - 0.015;
                    this.circle2.scale.set(t, t, t);
                }
                this.geometry.setDrawRange(i + 48, t), (this.animationFrame = requestAnimationFrame(this.eraseLine));
            }),
            (this.colors = o),
            (this.texture = g),
            (this.isStatic = w),
            (this.startLat = i[0]),
            (this.startLng = i[1]);
        const f = e[0],
            b = e[1],
            M = q(this.startLat, this.startLng, p),
            L = q(f, b, 1.002 * p),
            y = a.clamp(0.5 * M.distanceTo(L), 160, 500),
            x = k([this.startLng, this.startLat], [b, f]),
            C = x(0.25),
            S = x(0.75),
            R = q(C[1], C[0], p + y),
            D = q(S[1], S[0], p + y),
            I = new h(M, R, D, L);
        (this.geometry = new r(I, 44, 0.2 + p / 1200, 8, !1)),
            (this.material = new l({
                uniforms: { u_time: { type: "f", value: 0 }, u_texture: { type: "t", value: null }, speedEpsilon: { type: "f", value: 4e-4 } },
                vertexShader: "\n        varying vec2 vUv;\n\n        void main() {\n          vUv = uv;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n        }\n      ",
                fragmentShader:
                    "\n        uniform float u_time;\n        uniform sampler2D u_texture;\n        varying vec2 vUv;\n        uniform float speedEpsilon;\n\n        void main() {\n          float ramp = vUv.x * 0.5;\n          float pct = fract(ramp - u_time * speedEpsilon);\n          vec4 color = vec4(0.0, 0.0, 0.0, 1.0);\n          color = texture2D(u_texture, vec2(pct, 0.6));\n          gl_FragColor = vec4(color);\n        }\n      ",
            })),
            (this.active = !1),
            (this.mesh = new d(this.geometry, this.material)),
            this.add(this.mesh),
            (this.material.uniforms.u_texture.value = this.texture),
            (this.circleMaterial1 = new c({ map: v, color: o[0], transparent: !0, opacity: 1, side: m })),
            (this.circleMaterial2 = new c({ map: v, color: o[1], transparent: !0, opacity: 1, side: m })),
            (this.circleGeometry = new u(0.1 * p, 0.1 * p, 2)),
            (this.circle1 = new d(this.circleGeometry, this.circleMaterial1)),
            (this.circle2 = new d(this.circleGeometry, this.circleMaterial2)),
            this.circle1.scale.set(0.01, 0.01, 0.01),
            this.circle2.scale.set(0.01, 0.01, 0.01),
            this.circle1.position.set(M.x, M.y, M.z),
            this.circle2.position.set(L.x, L.y, L.z),
            this.circle1.rotation.set(Math.PI, Math.PI, Math.PI),
            this.circle2.rotation.set(Math.PI, Math.PI, Math.PI),
            this.circle1.lookAt(new n(0, 0, 0)),
            this.circle2.lookAt(new n(0, 0, 0)),
            this.add(this.circle1),
            this.add(this.circle2),
            this.showLine();
    }
    showLine() {
        (this.active = !0), this.geometry.setDrawRange(0, 1), this.isStatic ? this.drawStaticLine() : ((this.startTime = performance.now()), this.drawAnimatedLine());
    }
    hideLine() {
        (this.active = !1), this.eraseLine();
    }
    disposeLine() {
        this.mesh.geometry.dispose(),
            this.texture.dispose(),
            this.mesh.material.dispose(),
            this.circle1.geometry.dispose(),
            this.circle1.material.dispose(),
            this.circle2.geometry.dispose(),
            this.circle2.material.dispose(),
            (this.children = null);
    }
    pause() {
        cancelAnimationFrame(this.animationFrame);
    }
    play() {
        this.isStatic ? this.drawStaticLine() : this.active ? (this.animationFrame = requestAnimationFrame(this.drawAnimatedLine)) : (this.animationFrame = requestAnimationFrame(this.eraseLine));
    }
}
function W(t, i) {
    const e = new n();
    e.subVectors(i, t).normalize();
    const s = 1 - (0.5 + Math.atan2(e.z, e.x) / (2 * Math.PI)),
        a = 0.5 + Math.asin(e.y) / Math.PI;
    return new w(s, a);
}
function O(t, i) {
    const e = i.width,
        s = i.height,
        a = 4 * Math.floor(t.x * e) + Math.floor(t.y * s) * (4 * e);
    return i.data.slice(a, a + 4);
}
class U extends o {
    constructor(i, e, s) {
        super(),
            t(this, "callback", void 0),
            (this.callback = e),
            (this.isStatic = s),
            (this.rotation.x = -Math.PI),
            (this.rotation.z = -Math.PI),
            (this.radius = i),
            (this.isDragging = !1),
            (this.dragTime = 0),
            new g().load("https://images.ctfassets.net/fzn2n1nzq965/11064gUb2CgTJXKVwAt5J9/297a98a65d04d4fbb979072ce60466ab/map_fill-a78643e8.png", (t) => {
                const i = (function (t) {
                    const i = t.width,
                        e = t.height,
                        s = document.createElement("canvas");
                    (s.width = i), (s.height = e);
                    const a = s.getContext("2d");
                    return a.drawImage(t, 0, 0), a.getImageData(0, 0, i, e);
                })(t);
                this.mapLoaded(i);
            });
    }
    mapLoaded(t) {
        const i = this.radius / 450,
            e = 1e4 + Math.floor((this.radius / 600) * 7e4),
            s = this.radius,
            a = new v(1.8 * i, 5),
            o = new p(),
            h = [],
            r = [],
            c = new n();
        for (let i = e; i >= 0; i -= 1) {
            const n = Math.acos((2 * i) / e - 1),
                l = Math.sqrt(e * Math.PI) * n;
            c.setFromSphericalCoords(s, n, l), o.copy(a), o.lookAt(c), o.translate(c.x, c.y, c.z), o.computeBoundingSphere();
            if (O(W(o.boundingSphere.center, this.position), t)[3] > 0) {
                const t = Math.random();
                for (let i = 0; i < o.faces.length; i += 1) {
                    const e = o.faces[i];
                    h.push(o.vertices[e.a].x, o.vertices[e.a].y, o.vertices[e.a].z, o.vertices[e.b].x, o.vertices[e.b].y, o.vertices[e.b].z, o.vertices[e.c].x, o.vertices[e.c].y, o.vertices[e.c].z), r.push(t, t, t);
                }
            }
        }
        const u = new f();
        u.setAttribute("position", new b(h, 3)),
            u.setAttribute("rndId", new b(r, 1)),
            (this.material = new l({
                transparent: !0,
                uniforms: { u_time: { type: "f", value: 0 }, u_drag_time: { type: "f", value: 0 }, u_resolution: { type: "v2", value: new w() } },
                vertexShader:
                    "\n        uniform float u_time;\n        uniform float u_drag_time;\n        uniform vec2 u_resolution;\n        attribute float rndId;\n        varying float vRndId;\n\n        varying float pct;\n\n        void main() {\n          vRndId = rndId;\n          vec2 st = position.xy/u_resolution;\n\n          pct = min(1.0, u_time / (1000. / max(0.2, 0.2 * sin(fract(rndId)))));\n          float vNormal = rndId + ((1.0 - rndId) * pct);\n          vNormal = rndId + ((1.0 - rndId));\n          vNormal = smoothstep(0., 1.0, vNormal);\n          if (u_drag_time > 0.) {\n            vNormal -= ((sin(u_time / 400.0 * vRndId) + 1.0) * 0.02) * min(1., u_drag_time / 1200.0);\n          }\n          vec4 modelViewPosition = modelViewMatrix * vec4(position, vNormal);\n          gl_Position = projectionMatrix * modelViewPosition;\n        }\n    ",
                fragmentShader:
                    "\n        uniform bool u_dragging;\n        uniform float u_time;\n        uniform float u_drag_time;\n        varying float vRndId;\n        varying float pct;\n\n        void main() {\n          float v = sin(u_time / 200.0 * vRndId);\n          float alpha = pct * 0.7 + v * 0.2;\n          float r = 0.19;\n          float g = 0.42;\n          float b = 0.65;\n          float dragDur = 1200.0;\n          vec3 color = vec3(r, g, b);\n          float rInc = min(1.0, u_drag_time / dragDur) * (sin(u_drag_time / (dragDur * 0.5) + 1.0) * 0.1);\n          float gInc = min(1.0, u_drag_time / dragDur) * (sin(u_drag_time / (dragDur * 0.75) - 1.0) * 0.1);\n          float bInc = min(1.0, u_drag_time / dragDur) * (sin(u_drag_time / dragDur) * 0.1);\n          if (u_dragging) {\n            color.r = r + rInc;\n            color.g = g + gInc;\n            color.b = b + bInc;\n          }\n\n          gl_FragColor = vec4(color, alpha);\n        }\n    ",
            })),
            (this.material.side = m);
        const g = new d(u, this.material);
        this.add(g), (this.material.uniforms.u_resolution.value.x = window.innerWidth), (this.material.uniforms.u_resolution.value.y = window.innerHeight), (this.startTime = performance.now()), (this.dragStartTime = 0), this.callback();
    }
    startDragging() {
        this.material && !this.isStatic && ((this.isDragging = !0), (this.dragStartTime = performance.now()), (this.material.uniforms.u_time.value = performance.now() - this.dragStartTime));
    }
    stopDragging() {
        this.isDragging = !1;
    }
    updateDragTimer() {
        this.isDragging ? (this.dragTime = performance.now() - this.dragStartTime) : this.dragTime > 0.1 && (this.dragTime = Math.max(0, 0.9 * this.dragTime));
    }
    animate() {
        if ((this.updateDragTimer(), !this.material)) return;
        this.material.uniforms.u_drag_time.value = this.dragTime;
        const t = this.isStatic ? 3e3 : performance.now() - this.startTime;
        this.material.uniforms.u_time.value = t;
    }
}
const N = 2 * Math.PI,
    V = 0.1111 * Math.PI,
    H = Math.PI,
    Q = 0.1 * Math.PI,
    B = -0.5 * Math.PI,
    J = 0.25 * Math.PI,
    K = [
        "https://images.ctfassets.net/fzn2n1nzq965/21KQEBsC7QG4IYZV5RuhDz/d3180249af4082f42a22cb5f3ccc8e09/arc-texture-1.png",
        "https://images.ctfassets.net/fzn2n1nzq965/22Apsqcv7VIDzlCuSOEzPQ/2194c40aac8bced46d48582d5d712bf6/arc-texture-2.png",
        "https://images.ctfassets.net/fzn2n1nzq965/79YUdAMNjtlQuuFLN0RBLG/f779fbfcc31d6360893844a29ec5fb4f/arc-texture-3.png",
        "https://images.ctfassets.net/fzn2n1nzq965/7ez6kk9Dk9uuhgdRLFyhZX/220a177ca8529de208f8ae3cc3b10609/arc-texture-4.png",
    ];
class Z {
    constructor(i) {
        t(this, "el", void 0),
            t(this, "eastCountryList", ["my", "sg", "au", "nz", "hk", "jp", "in"]),
            t(this, "westCountryList", ["ca", "mx", "us", "br"]),
            t(this, "middleCountryList", ["be", "gb", "at", "dk", "ee", "fi", "fr", "gr", "de", "ie", "it", "lv", "lt", "lu", "nl", "no", "pl", "pt", "es", "sk", "si", "se", "ch", "cy", "bg", "ro", "cz"]),
            t(this, "liveCountryList", [...this.eastCountryList, ...this.westCountryList, ...this.middleCountryList]),
            t(this, "countryList", Object.keys(I)),
            t(this, "origin", new n(0, 0, 0)),
            t(this, "dom", {}),
            t(this, "mouse", new w()),
            t(this, "isDragging", !1),
            t(this, "isStatic", e.disableAmbientAnimations()),
            t(this, "isDiscTextureLoaded", !1),
            t(this, "arcTexturesLoaded", 0),
            t(this, "globeOff", !1),
            t(this, "scrollTop", 0),
            t(this, "globeOpacity", 0),
            t(this, "lineCount", 0),
            t(this, "arcColors", [
                [16335176, 16763735],
                [11232234, 9494783],
                [16335176, 11232234],
                [16763735, 9494783],
            ]),
            t(this, "scene", new M()),
            t(this, "globeRadius", 250 + 0.3 * Math.min(document.documentElement.clientWidth, 1080)),
            t(this, "globeSegments", Math.floor((this.globeRadius / 250) * 10) + 20),
            t(this, "isLoaded", !1),
            t(this, "loaded", []),
            t(this, "loading", []),
            t(this, "isScrolling", !1),
            t(this, "isRevealed", !1),
            t(this, "frame", 0),
            t(this, "touchDistanceX", void 0),
            t(this, "touchStartX", void 0),
            t(this, "touchDistanceY", void 0),
            t(this, "touchStartY", void 0),
            t(this, "oldRotationY", 0),
            t(this, "oldRotationX", 0),
            t(this, "newRotationY", 0),
            t(this, "newRotationX", 0),
            t(this, "globeRotationIncrement", 0.02),
            t(this, "targetScale", 1),
            t(this, "scale", 1),
            t(this, "oldMouseX", 0),
            t(this, "oldMouseY", 0),
            t(this, "moveX", 0),
            t(this, "moveY", 0),
            t(this, "tension", 1),
            t(this, "arcTextures", void 0),
            t(this, "windowW", void 0),
            t(this, "windowH", void 0),
            t(this, "aspectRatio", void 0),
            t(this, "oldInnerWidth", void 0),
            t(this, "camera", void 0),
            t(this, "renderer", void 0),
            t(this, "globeContainer", void 0),
            t(this, "globeDots", void 0),
            t(this, "globeFillMaterial", void 0),
            t(this, "globeFillSphere", void 0),
            t(this, "globeFill", void 0),
            t(this, "globeMap", void 0),
            t(this, "circleTexture", void 0),
            t(this, "linesContainer", void 0),
            t(this, "lineInterval", void 0),
            t(this, "renderAnimationFrame", void 0),
            t(this, "throwAnimationFrame", void 0),
            t(this, "initialized", !1),
            t(this, "currentLines", []),
            t(this, "handleDragStart", () => {
                this.globeDots.startDragging(),
                    (this.isDragging = !0),
                    (this.oldRotationX = this.globeContainer.rotation.x),
                    (this.oldRotationY = this.globeContainer.rotation.y),
                    (this.targetScale = this.isStatic ? 1 : 0.98),
                    document.documentElement.classList.add("is-globe-dragging");
            }),
            t(this, "handleTouchStart", (t) => {
                const i = t.touches[0] || t.changedTouches[0];
                (this.oldMouseX = i.pageX), (this.oldMouseY = i.pageY), (this.mouse.x = i.pageX), (this.mouse.y = i.pageY), (this.touchStartX = i.pageX), (this.touchStartY = i.pageY), this.handleDragStart();
            }),
            t(this, "handleMouseMove", (t) => {
                (this.mouse.x = t.clientX), (this.mouse.y = t.clientY), this.handleDragging();
            }),
            t(this, "handleTouchMove", (t) => {
                const i = t.touches[0] || t.changedTouches[0];
                (this.touchDistanceX = Math.abs(this.touchStartX - i.pageX)),
                    (this.touchDistanceY = Math.abs(this.touchStartY - i.pageY)),
                    this.touchDistanceY > this.touchDistanceX || ((this.mouse.x = i.pageX), (this.mouse.y = i.pageY), this.handleDragging());
            }),
            t(this, "handleMouseUp", () => {
                setTimeout(() => {
                    document.documentElement.classList.remove("is-globe-dragging");
                }, 20),
                    (this.isDragging = !1),
                    (0 !== this.moveX || Math.abs(this.moveY) > 0) && this.throwGlobe(this.moveX, this.moveY),
                    (this.oldMouseX = 0),
                    (this.oldMouseY = 0),
                    (this.moveX = 0),
                    (this.moveY = 0),
                    (this.targetScale = 1),
                    this.globeDots.stopDragging();
            }),
            t(this, "handleMouseDown", (t) => {
                document.documentElement.classList.add("is-globe-dragging"), (this.oldMouseX = t.clientX), (this.oldMouseY = t.clientY), this.handleDragStart();
            }),
            t(this, "handleDragging", () => {
                this.isDragging &&
                    ((this.tension = 1 + Math.abs(this.oldRotationX)),
                    (this.tension **= this.tension),
                    (this.moveX = -0.003 * (this.oldMouseX - this.mouse.x)),
                    (this.moveY = (-0.003 * (this.oldMouseY - this.mouse.y)) / this.tension),
                    (this.newRotationY = this.resetRevolutions(this.oldRotationY + this.moveX)),
                    (this.newRotationX = Math.max(B, Math.min(J, this.oldRotationX + this.moveY))),
                    (this.globeContainer.rotation.y = this.newRotationY),
                    (this.globeContainer.rotation.x = this.newRotationX),
                    (this.oldRotationY = this.newRotationY),
                    (this.oldRotationX = this.newRotationX),
                    (this.oldMouseX = this.mouse.x),
                    (this.oldMouseY = this.mouse.y));
            }),
            t(this, "setWindowSize", () => {
                (this.windowW = document.documentElement.clientWidth),
                    (this.windowH = this.el.offsetHeight),
                    (this.aspectRatio = this.windowW / this.windowH),
                    this.renderer.setSize(this.windowW, this.windowH),
                    (this.oldInnerWidth = this.windowW);
            }),
            t(this, "handleResize", () => {
                const t = document.documentElement.clientWidth;
                (this.oldInnerWidth !== t || t > 512) && (this.setWindowSize(), this.addCamera());
            }),
            (this.el = i);
    }
    load() {
        return (
            this.loading.push("scene"),
            (this.el.style.height = window.outerHeight),
            (this.dom.container = this.el),
            this.addRenderer(),
            this.addLighting(),
            this.addGlobe(),
            this.addListeners(),
            this.setWindowSize(),
            this.addCamera(),
            this.objectLoaded("scene"),
            !0
        );
    }
    play() {
        this.initialized && !this.isStatic ? (this.currentLines.forEach((t) => t.play()), this.drawLines()) : this.addLines(), (this.initialized && this.isStatic) || this.render(this.frame), (this.initialized = !0);
    }
    pause() {
        this.currentLines.forEach((t) => t.pause()), cancelAnimationFrame(this.renderAnimationFrame), clearInterval(this.lineInterval);
    }
    disconnect() {
        clearInterval(this.lineInterval),
            cancelAnimationFrame(this.renderAnimationFrame),
            cancelAnimationFrame(this.throwAnimationFrame),
            window.removeEventListener("resize", this.handleResize),
            this.isStatic ||
                (window.removeEventListener("mouseup", this.handleMouseUp),
                window.removeEventListener("mousemove", this.handleMouseMove),
                this.el.removeEventListener("touchstart", this.handleTouchStart),
                window.removeEventListener("touchmove", this.handleTouchMove),
                window.removeEventListener("touchend", this.handleMouseUp),
                this.el.removeEventListener("mousedown", this.handleMouseDown));
    }
    setCountryList(t) {
        this.countryList = t;
    }
    addCamera() {
        const t = 0.5 * this.windowH,
            i = -this.aspectRatio * this.windowH * 0.5,
            e = 4 * this.globeRadius;
        this.camera || (this.camera = new L(0, 0, 0, 0, 0, 0)),
            (this.camera.left = i),
            (this.camera.right = -i),
            (this.camera.top = t),
            (this.camera.bottom = -t),
            (this.camera.near = -e),
            (this.camera.far = e),
            this.shiftCamera(),
            this.camera.updateProjectionMatrix();
    }
    shiftCamera() {
        const t = 1.05 * -this.globeRadius;
        (this.camera.position.x = t), (this.camera.position.y = 0.2 * this.globeRadius);
    }
    addRenderer() {
        (this.renderer = new y({ antialias: !1, alpha: !0 })),
            this.renderer.setPixelRatio(window.devicePixelRatio),
            this.renderer.setClearColor(14540253, 0),
            (this.renderer.sortObjects = !1),
            this.dom.container.appendChild(this.renderer.domElement);
    }
    addLighting() {
        const t = new x(10086140, 1);
        this.scene.add(t);
        const i = new C(12775677, 2, 0, 2);
        i.position.set(-1e3, -1100, -3300), this.scene.add(i);
        const e = new C(10593711, 0.8, 0, 20);
        e.position.set(-3e3, 3e3, 3300), this.scene.add(e);
    }
    addGlobe() {
        (this.globeContainer = new o()),
            this.scene.add(this.globeContainer),
            this.addGlobeMap(),
            this.addGlobeDots(),
            this.addGlobeFill(),
            (this.globeContainer.position.z = 2 * -this.globeRadius),
            (this.globeContainer.rotation.x = V),
            (this.globeContainer.rotation.y = this.isStatic ? Q : H);
    }
    addGlobeDots() {
        this.loading.push("globeDots"),
            (this.globeDots = new U(
                this.globeRadius,
                () => {
                    this.objectLoaded("globeDots");
                },
                this.isStatic
            )),
            this.globeMap.add(this.globeDots);
    }
    addGlobeFill() {
        (this.globeFillMaterial = new S({ transparent: !0, opacity: 0, color: "#fff" })),
            (this.globeFillSphere = new R(this.globeRadius - 0.1, this.globeSegments, this.globeSegments)),
            (this.globeFill = new d(this.globeFillSphere, this.globeFillMaterial)),
            this.globeMap.add(this.globeFill);
    }
    addGlobeMap() {
        (this.globeMap = new o()), this.globeContainer.add(this.globeMap);
    }
    throwGlobe(t, i) {
        const e = 0.94 * t,
            s = 0.94 * i,
            a = this.globeContainer.rotation.y + e,
            n = Math.max(B, Math.min(J, this.globeContainer.rotation.x + s));
        (this.globeContainer.rotation.y = this.resetRevolutions(a)),
            (this.globeContainer.rotation.x = n),
            (Math.abs(e) > 0.001 || Math.abs(s) > 0.001) &&
                !1 === this.isDragging &&
                (this.throwAnimationFrame = requestAnimationFrame(() => {
                    this.throwGlobe(e, s);
                }));
    }
    addLines() {
        (this.circleTexture = new D().load("https://images.ctfassets.net/fzn2n1nzq965/2wn0qc94lx6dbfTVt1vpuO/cf3e66080a3cddeb7275a8fefbca5134/disc_texture.png", () => {
            this.isDiscTextureLoaded = !0;
        })),
            (this.arcTextures = K.map((t) =>
                new D().load(t, () => {
                    this.arcTexturesLoaded += 1;
                })
            )),
            (this.linesContainer = new o()),
            this.globeContainer.add(this.linesContainer),
            this.drawLines();
    }
    drawLines() {
        if (!this.isStatic)
            return (
                clearInterval(this.lineInterval),
                void (this.lineInterval = setInterval(() => {
                    this.drawLine();
                }, 1e3))
            );
        if (0 === this.lineCount) for (let t = 0; t < 5; t += 1) this.drawLine();
    }
    drawLine() {
        this.lineCount += 1;
        const t = this.resetRevolutions(this.globeContainer.rotation.y);
        let e = this.countryList[this.lineCount % this.countryList.length],
            s = this.liveCountryList[this.lineCount % this.liveCountryList.length];
        if (
            ((t < 5.7 && t > 4.4) || (t > -2 && t < -0.2)
                ? (s = this.eastCountryList[this.lineCount % this.eastCountryList.length])
                : (t < 4.2 && t > 2.2) || (t > -4 && t < -1.7)
                ? (((t < -1.7 && t > -3) || (t > 3 && t < 4.2)) && (e = this.eastCountryList[this.lineCount % this.eastCountryList.length]), (s = this.westCountryList[this.lineCount % this.westCountryList.length]))
                : ((t < 2.2 && t > 0.3) || (t > -6.28 && t < -4)) && (s = this.middleCountryList[this.lineCount % this.middleCountryList.length]),
            e === s)
        )
            return void this.drawLine();
        const a = I[e],
            n = I[s],
            o = this.lineCount % this.arcColors.length,
            h = this.arcColors[o],
            r = new G(a, n, h, this.arcTextures[o], this.circleTexture, 1.001 * this.globeRadius + 0.01 * Math.random(), this.isStatic);
        this.linesContainer.add(r),
            this.currentLines.push(r),
            this.isStatic ||
                i.delay(() => {
                    this.hideLine(r);
                    const t = this.currentLines.indexOf(r);
                    t > -1 && this.currentLines.splice(t, 1);
                }, 4e3);
    }
    hideLine(t) {
        t.hideLine(),
            i.delay(() => {
                t.disposeLine(), this.linesContainer.remove(t);
            }, 1500);
    }
    objectLoaded(t = "x") {
        this.loaded.push(t), this.loaded.length === this.loading.length && (this.isLoaded = !0);
    }
    resetRevolutions(t) {
        if (0 === Math.abs(t / N)) return t;
        return t - Math.floor(Math.abs(t / N)) * Math.sign(t) * N;
    }
    addListeners() {
        window.addEventListener("resize", this.handleResize),
            this.isStatic ||
                (window.addEventListener("mouseup", this.handleMouseUp),
                window.addEventListener("mousemove", this.handleMouseMove),
                this.el.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }),
                window.addEventListener("touchmove", this.handleTouchMove),
                window.addEventListener("touchend", this.handleMouseUp),
                this.el.addEventListener("mousedown", this.handleMouseDown));
    }
    revealAnimation() {
        const t = this.isStatic ? 1 : s.easeOutQuart(this.globeOpacity, 0, 1, 1);
        (this.globeOpacity += 0.005), (this.globeFillMaterial.opacity = 0.94 * t), (this.globeRotationIncrement = 0.02 * (1 - t) + 0.001 * t), t > 0.999 && (this.isRevealed = !0);
    }
    autoRotateGlobe() {
        this.isDragging || this.isScrolling || this.isStatic || (this.globeContainer.rotation.y -= this.globeRotationIncrement);
    }
    render(t = 0) {
        (this.frame = t),
            this.autoRotateGlobe(),
            Math.abs(this.scale - this.targetScale) > 0.001 && ((this.scale -= 0.1 * (this.scale - this.targetScale)), this.globeFill.scale.set(this.scale, this.scale, this.scale)),
            !this.globeOff && this.isLoaded && (this.globeDots.animate(), this.isRevealed || this.revealAnimation(), this.renderer.render(this.scene, this.camera)),
            (this.renderAnimationFrame = requestAnimationFrame(() => {
                this.isRevealed && this.isStatic && this.arcTexturesLoaded === K.length && this.isDiscTextureLoaded ? this.renderer.render(this.scene, this.camera) : this.render(t + 1);
            }));
    }
}
if(document.querySelector(".js-globe")) {
    var globe = new Z(document.querySelector(".js-globe"));
    globe.load();
    globe.play();
}

export { Z as Globe };