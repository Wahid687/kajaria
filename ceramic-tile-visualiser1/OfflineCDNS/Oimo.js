// lo-th.github.io/Oimo.js/license
! function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i((t = t || self).OIMO = {})
}(this, function(t) {
    "use strict";
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Math.sign && (Math.sign = function(t) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    }), void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }), void 0 === Object.assign && (Object.assign = function(t) {
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        for (var i = Object(t), s = 1; s < arguments.length; s++) {
            var h = arguments[s];
            if (null != h)
                for (var e in h) Object.prototype.hasOwnProperty.call(h, e) && (i[e] = h[e])
        }
        return i
    });
    var s, h, e, a, o = "1.0.9",
        n = 0,
        r = 1,
        l = 2,
        c = 3,
        m = 0,
        p = 0,
        u = 1,
        y = 2,
        x = 3,
        d = 4,
        f = 5,
        b = 0,
        v = 1,
        z = 2,
        N = 3,
        k = 4,
        w = 5,
        M = 6,
        g = {
            sqrt: Math.sqrt,
            abs: Math.abs,
            floor: Math.floor,
            cos: Math.cos,
            sin: Math.sin,
            acos: Math.acos,
            asin: Math.asin,
            atan2: Math.atan2,
            round: Math.round,
            pow: Math.pow,
            max: Math.max,
            min: Math.min,
            random: Math.random,
            degtorad: .017453292519943295,
            radtodeg: 57.29577951308232,
            PI: 3.141592653589793,
            TwoPI: 6.283185307179586,
            PI90: 1.570796326794896,
            PI270: 4.712388980384689,
            INF: 1 / 0,
            EPZ: 1e-5,
            EPZ2: 1e-6,
            lerp: function(t, i, s) {
                return (1 - s) * t + s * i
            },
            randInt: function(t, i) {
                return t + g.floor(g.random() * (i - t + 1))
            },
            rand: function(t, i) {
                return t + g.random() * (i - t)
            },
            generateUUID: (h = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), e = new Array(36), a = 0, function() {
                for (var t = 0; t < 36; t++) 8 === t || 13 === t || 18 === t || 23 === t ? e[t] = "-" : 14 === t ? e[t] = "4" : (a <= 2 && (a = 33554432 + 16777216 * Math.random() | 0), s = 15 & a, a >>= 4, e[t] = h[19 === t ? 3 & s | 8 : s]);
                return e.join("")
            }),
            int: function(t) {
                return g.floor(t)
            },
            fix: function(t, i) {
                return t.toFixed(i || 3, 10)
            },
            clamp: function(t, i, s) {
                return g.max(i, g.min(s, t))
            },
            distance: function(t, i) {
                var s = i[0] - t[0],
                    h = i[1] - t[1],
                    e = i[2] - t[2];
                return g.sqrt(s * s + h * h + e * e)
            },
            acosClamp: function(t) {
                return t > 1 ? 0 : t < -1 ? g.PI : g.acos(t)
            },
            distanceVector: function(t, i) {
                var s = t.x - i.x,
                    h = t.y - i.y,
                    e = t.z - i.z;
                return s * s + h * h + e * e
            },
            dotVectors: function(t, i) {
                return t.x * i.x + t.y * i.y + t.z * i.z
            }
        };

    function I(t, i) {
        console.error("[OIMO] " + t + ": " + i)
    }

    function V(t) {
        this.parent = t, this.infos = new Float32Array(13), this.f = [0, 0, 0], this.times = [0, 0, 0, 0], this.broadPhase = this.parent.broadPhaseType, this.version = o, this.fps = 0, this.tt = 0, this.broadPhaseTime = 0, this.narrowPhaseTime = 0, this.solvingTime = 0, this.totalTime = 0, this.updateTime = 0, this.MaxBroadPhaseTime = 0, this.MaxNarrowPhaseTime = 0, this.MaxSolvingTime = 0, this.MaxTotalTime = 0, this.MaxUpdateTime = 0
    }

    function L(t, i, s) {
        this.x = t || 0, this.y = i || 0, this.z = s || 0
    }

    function S(t, i, s, h) {
        this.x = t || 0, this.y = i || 0, this.z = s || 0, this.w = void 0 !== h ? h : 1
    }

    function P(t, i, s, h, e, a, o, n, r) {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("OIMO.Mat33: the constructor no longer reads arguments. use .set() instead.")
    }

    function T(t, i, s, h, e, a) {
        this.elements = new Float32Array(6);
        var o = this.elements;
        o[0] = t || 0, o[1] = s || 0, o[2] = e || 0, o[3] = i || 0, o[4] = h || 0, o[5] = a || 0
    }
    Object.assign(V.prototype, {
        setTime: function(t) {
            this.times[t || 0] = performance.now()
        },
        resetMax: function() {
            this.MaxBroadPhaseTime = 0, this.MaxNarrowPhaseTime = 0, this.MaxSolvingTime = 0, this.MaxTotalTime = 0, this.MaxUpdateTime = 0
        },
        calcBroadPhase: function() {
            this.setTime(2), this.broadPhaseTime = this.times[2] - this.times[1]
        },
        calcNarrowPhase: function() {
            this.setTime(3), this.narrowPhaseTime = this.times[3] - this.times[2]
        },
        calcEnd: function() {
            this.setTime(2), this.solvingTime = this.times[2] - this.times[1], this.totalTime = this.times[2] - this.times[0], this.updateTime = this.totalTime - (this.broadPhaseTime + this.narrowPhaseTime + this.solvingTime), 100 === this.tt && this.resetMax(), this.tt > 100 && (this.broadPhaseTime > this.MaxBroadPhaseTime && (this.MaxBroadPhaseTime = this.broadPhaseTime), this.narrowPhaseTime > this.MaxNarrowPhaseTime && (this.MaxNarrowPhaseTime = this.narrowPhaseTime), this.solvingTime > this.MaxSolvingTime && (this.MaxSolvingTime = this.solvingTime), this.totalTime > this.MaxTotalTime && (this.MaxTotalTime = this.totalTime), this.updateTime > this.MaxUpdateTime && (this.MaxUpdateTime = this.updateTime)), this.upfps(), this.tt++, this.tt > 500 && (this.tt = 0)
        },
        upfps: function() {
            this.f[1] = Date.now(), this.f[1] - 1e3 > this.f[0] && (this.f[0] = this.f[1], this.fps = this.f[2], this.f[2] = 0), this.f[2]++
        },
        show: function() {
            return ["Oimo.js " + this.version + "<br>", this.broadPhase + "<br><br>", "FPS: " + this.fps + " fps<br><br>", "rigidbody " + this.parent.numRigidBodies + "<br>", "contact &nbsp;&nbsp;" + this.parent.numContacts + "<br>", "ct-point &nbsp;" + this.parent.numContactPoints + "<br>", "paircheck " + this.parent.broadPhase.numPairChecks + "<br>", "island &nbsp;&nbsp;&nbsp;" + this.parent.numIslands + "<br><br>", "Time in milliseconds<br><br>", "broadphase &nbsp;" + g.fix(this.broadPhaseTime) + " | " + g.fix(this.MaxBroadPhaseTime) + "<br>", "narrowphase " + g.fix(this.narrowPhaseTime) + " | " + g.fix(this.MaxNarrowPhaseTime) + "<br>", "solving &nbsp;&nbsp;&nbsp;&nbsp;" + g.fix(this.solvingTime) + " | " + g.fix(this.MaxSolvingTime) + "<br>", "total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + g.fix(this.totalTime) + " | " + g.fix(this.MaxTotalTime) + "<br>", "updating &nbsp;&nbsp;&nbsp;" + g.fix(this.updateTime) + " | " + g.fix(this.MaxUpdateTime) + "<br>"].join("\n")
        },
        toArray: function() {
            return this.infos[0] = this.parent.broadPhase.types, this.infos[1] = this.parent.numRigidBodies, this.infos[2] = this.parent.numContacts, this.infos[3] = this.parent.broadPhase.numPairChecks, this.infos[4] = this.parent.numContactPoints, this.infos[5] = this.parent.numIslands, this.infos[6] = this.broadPhaseTime, this.infos[7] = this.narrowPhaseTime, this.infos[8] = this.solvingTime, this.infos[9] = this.updateTime, this.infos[10] = this.totalTime, this.infos[11] = this.fps, this.infos
        }
    }), Object.assign(L.prototype, {
        Vec3: !0,
        set: function(t, i, s) {
            return this.x = t, this.y = i, this.z = s, this
        },
        add: function(t, i) {
            return void 0 !== i ? this.addVectors(t, i) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
        },
        addVectors: function(t, i) {
            return this.x = t.x + i.x, this.y = t.y + i.y, this.z = t.z + i.z, this
        },
        addEqual: function(t) {
            return this.x += t.x, this.y += t.y, this.z += t.z, this
        },
        sub: function(t, i) {
            return void 0 !== i ? this.subVectors(t, i) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
        },
        subVectors: function(t, i) {
            return this.x = t.x - i.x, this.y = t.y - i.y, this.z = t.z - i.z, this
        },
        subEqual: function(t) {
            return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
        },
        scale: function(t, i) {
            return this.x = t.x * i, this.y = t.y * i, this.z = t.z * i, this
        },
        scaleEqual: function(t) {
            return this.x *= t, this.y *= t, this.z *= t, this
        },
        multiply: function(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
        },
        addScaledVector: function(t, i) {
            return this.x += t.x * i, this.y += t.y * i, this.z += t.z * i, this
        },
        subScaledVector: function(t, i) {
            return this.x -= t.x * i, this.y -= t.y * i, this.z -= t.z * i, this
        },
        cross: function(t, i) {
            if (void 0 !== i) return this.crossVectors(t, i);
            var s = this.x,
                h = this.y,
                e = this.z;
            return this.x = h * t.z - e * t.y, this.y = e * t.x - s * t.z, this.z = s * t.y - h * t.x, this
        },
        crossVectors: function(t, i) {
            var s = t.x,
                h = t.y,
                e = t.z,
                a = i.x,
                o = i.y,
                n = i.z;
            return this.x = h * n - e * o, this.y = e * a - s * n, this.z = s * o - h * a, this
        },
        tangent: function(t) {
            var i = t.x,
                s = t.y,
                h = t.z;
            return this.x = s * i - h * h, this.y = -h * s - i * i, this.z = i * h + s * s, this
        },
        invert: function(t) {
            return this.x = -t.x, this.y = -t.y, this.z = -t.z, this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        addition: function() {
            return this.x + this.y + this.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return g.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        },
        applyMatrix3: function(t, i) {
            var s = this.x,
                h = this.y,
                e = this.z,
                a = t.elements;
            return i ? (this.x = a[0] * s + a[1] * h + a[2] * e, this.y = a[3] * s + a[4] * h + a[5] * e, this.z = a[6] * s + a[7] * h + a[8] * e) : (this.x = a[0] * s + a[3] * h + a[6] * e, this.y = a[1] * s + a[4] * h + a[7] * e, this.z = a[2] * s + a[5] * h + a[8] * e), this
        },
        applyQuaternion: function(t) {
            var i = this.x,
                s = this.y,
                h = this.z,
                e = t.x,
                a = t.y,
                o = t.z,
                n = t.w,
                r = n * i + a * h - o * s,
                l = n * s + o * i - e * h,
                c = n * h + e * s - a * i,
                m = -e * i - a * s - o * h;
            return this.x = r * n + m * -e + l * -o - c * -a, this.y = l * n + m * -a + c * -e - r * -o, this.z = c * n + m * -o + r * -a - l * -e, this
        },
        testZero: function() {
            return 0 !== this.x || 0 !== this.y || 0 !== this.z
        },
        testDiff: function(t) {
            return !this.equals(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z)
        },
        toString: function() {
            return "Vec3[" + this.x.toFixed(4) + ", " + this.y.toFixed(4) + ", " + this.z.toFixed(4) + "]"
        },
        multiplyScalar: function(t) {
            return isFinite(t) ? (this.x *= t, this.y *= t, this.z *= t) : (this.x = 0, this.y = 0, this.z = 0), this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        toArray: function(t, i) {
            void 0 === i && (i = 0), t[i] = this.x, t[i + 1] = this.y, t[i + 2] = this.z
        },
        fromArray: function(t, i) {
            return void 0 === i && (i = 0), this.x = t[i], this.y = t[i + 1], this.z = t[i + 2], this
        }
    }), Object.assign(S.prototype, {
        Quat: !0,
        set: function(t, i, s, h) {
            return this.x = t, this.y = i, this.z = s, this.w = h, this
        },
        addTime: function(t, i) {
            var s = t.x,
                h = t.y,
                e = t.z,
                a = this.w,
                o = this.x,
                n = this.y,
                r = this.z;
            return i *= .5, this.x += i * (s * a + h * r - e * n), this.y += i * (h * a + e * o - s * r), this.z += i * (e * a + s * n - h * o), this.w += i * (-s * o - h * n - e * r), this.normalize(), this
        },
        multiply: function(t, i) {
            return void 0 !== i ? this.multiplyQuaternions(t, i) : this.multiplyQuaternions(this, t)
        },
        multiplyQuaternions: function(t, i) {
            var s = t.x,
                h = t.y,
                e = t.z,
                a = t.w,
                o = i.x,
                n = i.y,
                r = i.z,
                l = i.w;
            return this.x = s * l + a * o + h * r - e * n, this.y = h * l + a * n + e * o - s * r, this.z = e * l + a * r + s * n - h * o, this.w = a * l - s * o - h * n - e * r, this
        },
        setFromUnitVectors: function(t, i) {
            var s = new L,
                h = t.dot(i) + 1;
            return h < g.EPS2 ? (h = 0, g.abs(t.x) > g.abs(t.z) ? s.set(-t.y, t.x, 0) : s.set(0, -t.z, t.y)) : s.crossVectors(t, i), this._x = s.x, this._y = s.y, this._z = s.z, this._w = h, this.normalize()
        },
        arc: function(t, i) {
            var s = t.x,
                h = t.y,
                e = t.z,
                a = i.x,
                o = i.y,
                n = i.z,
                r = s * a + h * o + e * n;
            if (-1 == r) return a = h * s - e * e, o = -e * h - s * s, n = s * e + h * h, r = 1 / g.sqrt(a * a + o * o + n * n), this.w = 0, this.x = a * r, this.y = o * r, this.z = n * r, this;
            var l = h * n - e * o,
                c = e * a - s * n,
                m = s * o - h * a;
            return this.w = g.sqrt(.5 * (1 + r)), r = .5 / this.w, this.x = l * r, this.y = c * r, this.z = m * r, this
        },
        normalize: function() {
            var t = this.length();
            return 0 === t ? this.set(0, 0, 0, 1) : (t = 1 / t, this.x = this.x * t, this.y = this.y * t, this.z = this.z * t, this.w = this.w * t), this
        },
        inverse: function() {
            return this.conjugate().normalize()
        },
        invert: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this.conjugate().normalize(), this
        },
        conjugate: function() {
            return this.x *= -1, this.y *= -1, this.z *= -1, this
        },
        length: function() {
            return g.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this
        },
        clone: function(t) {
            return new S(this.x, this.y, this.z, this.w)
        },
        testDiff: function(t) {
            return !this.equals(t)
        },
        equals: function(t) {
            return this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
        },
        toString: function() {
            return "Quat[" + this.x.toFixed(4) + ", (" + this.y.toFixed(4) + ", " + this.z.toFixed(4) + ", " + this.w.toFixed(4) + ")]"
        },
        setFromEuler: function(t, i, s) {
            var h = Math.cos(.5 * t),
                e = Math.cos(.5 * i),
                a = Math.cos(.5 * s),
                o = Math.sin(.5 * t),
                n = Math.sin(.5 * i),
                r = Math.sin(.5 * s);
            return this.x = o * e * a + h * n * r, this.y = h * n * a - o * e * r, this.z = h * e * r + o * n * a, this.w = h * e * a - o * n * r, this
        },
        setFromAxis: function(t, i) {
            t.normalize(), i *= .5;
            var s = g.sin(i);
            return this.x = s * t.x, this.y = s * t.y, this.z = s * t.z, this.w = g.cos(i), this
        },
        setFromMat33: function(t) {
            var i, s = t[0] + t[4] + t[8];
            if (s > 0) i = g.sqrt(s + 1), this.w = .5 / i, i = .5 / i, this.x = (t[5] - t[7]) * i, this.y = (t[6] - t[2]) * i, this.z = (t[1] - t[3]) * i;
            else {
                var h = [],
                    e = 0;
                t[4] > t[0] && (e = 1), t[8] > t[3 * e + e] && (e = 2);
                var a = (e + 1) % 3,
                    o = (e + 2) % 3;
                i = g.sqrt(t[3 * e + e] - t[3 * a + a] - t[3 * o + o] + 1), h[e] = .5 * fRoot, i = .5 / fRoot, this.w = (t[3 * a + o] - t[3 * o + a]) * i, h[a] = (t[3 * a + e] + t[3 * e + a]) * i, h[o] = (t[3 * o + e] + t[3 * e + o]) * i, this.x = h[1], this.y = h[2], this.z = h[3]
            }
            return this
        },
        toArray: function(t, i) {
            t[i = i || 0] = this.x, t[i + 1] = this.y, t[i + 2] = this.z, t[i + 3] = this.w
        },
        fromArray: function(t, i) {
            return i = i || 0, this.set(t[i], t[i + 1], t[i + 2], t[i + 3]), this
        }
    }), Object.assign(P.prototype, {
        Mat33: !0,
        set: function(t, i, s, h, e, a, o, n, r) {
            var l = this.elements;
            return l[0] = t, l[1] = i, l[2] = s, l[3] = h, l[4] = e, l[5] = a, l[6] = o, l[7] = n, l[8] = r, this
        },
        add: function(t, i) {
            if (void 0 !== i) return this.addMatrixs(t, i);
            var s = this.elements,
                h = t.elements;
            return s[0] += h[0], s[1] += h[1], s[2] += h[2], s[3] += h[3], s[4] += h[4], s[5] += h[5], s[6] += h[6], s[7] += h[7], s[8] += h[8], this
        },
        addMatrixs: function(t, i) {
            var s = this.elements,
                h = t.elements,
                e = i.elements;
            return s[0] = h[0] + e[0], s[1] = h[1] + e[1], s[2] = h[2] + e[2], s[3] = h[3] + e[3], s[4] = h[4] + e[4], s[5] = h[5] + e[5], s[6] = h[6] + e[6], s[7] = h[7] + e[7], s[8] = h[8] + e[8], this
        },
        addEqual: function(t) {
            var i = this.elements,
                s = t.elements;
            return i[0] += s[0], i[1] += s[1], i[2] += s[2], i[3] += s[3], i[4] += s[4], i[5] += s[5], i[6] += s[6], i[7] += s[7], i[8] += s[8], this
        },
        sub: function(t, i) {
            if (void 0 !== i) return this.subMatrixs(t, i);
            var s = this.elements,
                h = t.elements;
            return s[0] -= h[0], s[1] -= h[1], s[2] -= h[2], s[3] -= h[3], s[4] -= h[4], s[5] -= h[5], s[6] -= h[6], s[7] -= h[7], s[8] -= h[8], this
        },
        subMatrixs: function(t, i) {
            var s = this.elements,
                h = t.elements,
                e = i.elements;
            return s[0] = h[0] - e[0], s[1] = h[1] - e[1], s[2] = h[2] - e[2], s[3] = h[3] - e[3], s[4] = h[4] - e[4], s[5] = h[5] - e[5], s[6] = h[6] - e[6], s[7] = h[7] - e[7], s[8] = h[8] - e[8], this
        },
        subEqual: function(t) {
            var i = this.elements,
                s = t.elements;
            return i[0] -= s[0], i[1] -= s[1], i[2] -= s[2], i[3] -= s[3], i[4] -= s[4], i[5] -= s[5], i[6] -= s[6], i[7] -= s[7], i[8] -= s[8], this
        },
        scale: function(t, i) {
            var s = this.elements,
                h = t.elements;
            return s[0] = h[0] * i, s[1] = h[1] * i, s[2] = h[2] * i, s[3] = h[3] * i, s[4] = h[4] * i, s[5] = h[5] * i, s[6] = h[6] * i, s[7] = h[7] * i, s[8] = h[8] * i, this
        },
        scaleEqual: function(t) {
            var i = this.elements;
            return i[0] *= t, i[1] *= t, i[2] *= t, i[3] *= t, i[4] *= t, i[5] *= t, i[6] *= t, i[7] *= t, i[8] *= t, this
        },
        multiplyMatrices: function(t, i, s) {
            s && (i = i.clone().transpose());
            var h = this.elements,
                e = t.elements,
                a = i.elements,
                o = e[0],
                n = e[3],
                r = e[6],
                l = e[1],
                c = e[4],
                m = e[7],
                p = e[2],
                u = e[5],
                y = e[8],
                x = a[0],
                d = a[3],
                f = a[6],
                b = a[1],
                v = a[4],
                z = a[7],
                N = a[2],
                k = a[5],
                w = a[8];
            return h[0] = o * x + l * d + p * f, h[1] = o * b + l * v + p * z, h[2] = o * N + l * k + p * w, h[3] = n * x + c * d + u * f, h[4] = n * b + c * v + u * z, h[5] = n * N + c * k + u * w, h[6] = r * x + m * d + y * f, h[7] = r * b + m * v + y * z, h[8] = r * N + m * k + y * w, this
        },
        transpose: function(t) {
            if (void 0 !== t) {
                var i = t.elements;
                return this.set(i[0], i[3], i[6], i[1], i[4], i[7], i[2], i[5], i[8]), this
            }
            var s = this.elements,
                h = s[1],
                e = s[2],
                a = s[5];
            return s[1] = s[3], s[2] = s[6], s[3] = h, s[5] = s[7], s[6] = e, s[7] = a, this
        },
        setQuat: function(t) {
            var i = this.elements,
                s = t.x,
                h = t.y,
                e = t.z,
                a = t.w,
                o = s + s,
                n = h + h,
                r = e + e,
                l = s * o,
                c = s * n,
                m = s * r,
                p = h * n,
                u = h * r,
                y = e * r,
                x = a * o,
                d = a * n,
                f = a * r;
            return i[0] = 1 - (p + y), i[1] = c - f, i[2] = m + d, i[3] = c + f, i[4] = 1 - (l + y), i[5] = u - x, i[6] = m - d, i[7] = u + x, i[8] = 1 - (l + p), this
        },
        invert: function(t) {
            var i = this.elements,
                s = t.elements,
                h = s[0],
                e = s[3],
                a = s[6],
                o = s[1],
                n = s[4],
                r = s[7],
                l = s[2],
                c = s[5],
                m = s[8],
                p = m * n - c * r,
                u = -m * e + c * a,
                y = r * e - n * a,
                x = h * p + o * u + l * y;
            return 0 === x ? (console.log("can't invert matrix, determinant is 0"), this.identity()) : (x = 1 / x, i[0] = p * x, i[1] = (-m * o + l * r) * x, i[2] = (c * o - l * n) * x, i[3] = u * x, i[4] = (m * h - l * a) * x, i[5] = (-c * h + l * e) * x, i[6] = y * x, i[7] = (-r * h + o * a) * x, i[8] = (n * h - o * e) * x, this)
        },
        addOffset: function(t, i) {
            var s = i.x,
                h = i.y,
                e = i.z,
                a = this.elements;
            a[0] += t * (h * h + e * e), a[4] += t * (s * s + e * e), a[8] += t * (s * s + h * h);
            var o = t * s * h,
                n = t * h * e,
                r = t * e * s;
            return a[1] -= o, a[3] -= o, a[2] -= n, a[6] -= n, a[5] -= r, a[7] -= r, this
        },
        subOffset: function(t, i) {
            var s = i.x,
                h = i.y,
                e = i.z,
                a = this.elements;
            a[0] -= t * (h * h + e * e), a[4] -= t * (s * s + e * e), a[8] -= t * (s * s + h * h);
            var o = t * s * h,
                n = t * h * e,
                r = t * e * s;
            return a[1] += o, a[3] += o, a[2] += n, a[6] += n, a[5] += r, a[7] += r, this
        },
        multiplyScalar: function(t) {
            var i = this.elements;
            return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= t, i[4] *= t, i[7] *= t, i[2] *= t, i[5] *= t, i[8] *= t, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new P).fromArray(this.elements)
        },
        copy: function(t) {
            for (var i = 0; i < 9; i++) this.elements[i] = t.elements[i];
            return this
        },
        determinant: function() {
            var t = this.elements,
                i = t[0],
                s = t[1],
                h = t[2],
                e = t[3],
                a = t[4],
                o = t[5],
                n = t[6],
                r = t[7],
                l = t[8];
            return i * a * l - i * o * r - s * e * l + s * o * n + h * e * r - h * a * n
        },
        fromArray: function(t, i) {
            void 0 === i && (i = 0);
            for (var s = 0; s < 9; s++) this.elements[s] = t[s + i];
            return this
        },
        toArray: function(t, i) {
            void 0 === t && (t = []), void 0 === i && (i = 0);
            var s = this.elements;
            return t[i] = s[0], t[i + 1] = s[1], t[i + 2] = s[2], t[i + 3] = s[3], t[i + 4] = s[4], t[i + 5] = s[5], t[i + 6] = s[6], t[i + 7] = s[7], t[i + 8] = s[8], t
        }
    }), Object.assign(T.prototype, {
        AABB: !0,
        set: function(t, i, s, h, e, a) {
            var o = this.elements;
            return o[0] = t, o[3] = i, o[1] = s, o[4] = h, o[2] = e, o[5] = a, this
        },
        intersectTest: function(t) {
            var i = this.elements,
                s = t.elements;
            return i[0] > s[3] || i[1] > s[4] || i[2] > s[5] || i[3] < s[0] || i[4] < s[1] || i[5] < s[2]
        },
        intersectTestTwo: function(t) {
            var i = this.elements,
                s = t.elements;
            return i[0] < s[0] || i[1] < s[1] || i[2] < s[2] || i[3] > s[3] || i[4] > s[4] || i[5] > s[5]
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(t, i) {
            var s = i || 0,
                h = t.elements;
            return this.set(h[0] - s, h[3] + s, h[1] - s, h[4] + s, h[2] - s, h[5] + s), this
        },
        fromArray: function(t) {
            return this.elements.set(t), this
        },
        combine: function(t, i) {
            var s = t.elements,
                h = i.elements,
                e = this.elements;
            return e[0] = s[0] < h[0] ? s[0] : h[0], e[1] = s[1] < h[1] ? s[1] : h[1], e[2] = s[2] < h[2] ? s[2] : h[2], e[3] = s[3] > h[3] ? s[3] : h[3], e[4] = s[4] > h[4] ? s[4] : h[4], e[5] = s[5] > h[5] ? s[5] : h[5], this
        },
        surfaceArea: function() {
            var t = this.elements,
                i = t[3] - t[0],
                s = t[4] - t[1],
                h = t[5] - t[2];
            return 2 * (i * (s + h) + s * h)
        },
        intersectsWithPoint: function(t, i, s) {
            var h = this.elements;
            return t >= h[0] && t <= h[3] && i >= h[1] && i <= h[4] && s >= h[2] && s <= h[5]
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var i = 0; i < t.length; i++) this.expandByPoint(t[i])
        },
        makeEmpty: function() {
            this.set(-1 / 0, -1 / 0, -1 / 0, 1 / 0, 1 / 0, 1 / 0)
        },
        expandByPoint: function(t) {
            var i = this.elements;
            this.set(g.min(i[0], t.x), g.min(i[1], t.y), g.min(i[2], t.z), g.max(i[3], t.x), g.max(i[4], t.y), g.max(i[5], t.z))
        },
        expandByScalar: function(t) {
            var i = this.elements;
            i[0] += -t, i[1] += -t, i[2] += -t, i[3] += t, i[4] += t, i[5] += t
        }
    });
    var A = 0;

    function j(t) {
        this.type = p, this.id = A++, this.prev = null, this.next = null, this.proxy = null, this.parent = null, this.contactLink = null, this.numContacts = 0, this.position = new L, this.rotation = new P, this.relativePosition = (new L).copy(t.relativePosition), this.relativeRotation = (new P).copy(t.relativeRotation), this.aabb = new T, this.density = t.density, this.friction = t.friction, this.restitution = t.restitution, this.belongsTo = t.belongsTo, this.collidesWith = t.collidesWith
    }

    function C(t, i, s, h) {
        j.call(this, t), this.type = y, this.width = i, this.height = s, this.depth = h, this.halfWidth = .5 * i, this.halfHeight = .5 * s, this.halfDepth = .5 * h, this.dimentions = new Float32Array(18), this.elements = new Float32Array(24)
    }

    function O(t, i) {
        j.call(this, t), this.type = u, this.radius = i
    }

    function D(t, i, s) {
        j.call(this, t), this.type = x, this.radius = i, this.height = s, this.halfHeight = .5 * s, this.normalDirection = new L, this.halfDirection = new L
    }

    function E(t, i) {
        j.call(this, t), this.type = d, this.normal = new L(0, 1, 0)
    }

    function B(t, i) {
        j.call(this, t), this.type = f
    }

    function F() {
        this.relativePosition = new L, this.relativeRotation = new P, this.friction = .2, this.restitution = .2, this.density = 1, this.belongsTo = 1, this.collidesWith = 4294967295
    }

    function q(t, i) {
        i = i || !1, this.axis = t, this.angle = 0, this.lowerLimit = i ? 0 : 1, this.upperLimit = 0, this.motorSpeed = 0, this.maxMotorForce = 0, this.frequency = 0, this.dampingRatio = 0
    }

    function U() {
        this.parent = null, this.body1 = null, this.body2 = null, this.addedToIsland = !1
    }

    function R(t) {
        this.prev = null, this.next = null, this.body = null, this.joint = t
    }

    function _(t) {
        U.call(this), this.scale = 1, this.invScale = 1, this.name = "", this.id = NaN, this.type = b, this.prev = null, this.next = null, this.body1 = t.body1, this.body2 = t.body2, this.localAnchorPoint1 = (new L).copy(t.localAnchorPoint1), this.localAnchorPoint2 = (new L).copy(t.localAnchorPoint2), this.relativeAnchorPoint1 = new L, this.relativeAnchorPoint2 = new L, this.anchorPoint1 = new L, this.anchorPoint2 = new L, this.allowCollision = t.allowCollision, this.b1Link = new R(this), this.b2Link = new R(this)
    }

    function J(t) {
        this.m1 = NaN, this.m2 = NaN, this.ii1 = null, this.ii2 = null, this.dd = null, this.r1x = NaN, this.r1y = NaN, this.r1z = NaN, this.r2x = NaN, this.r2y = NaN, this.r2z = NaN, this.ax1x = NaN, this.ax1y = NaN, this.ax1z = NaN, this.ay1x = NaN, this.ay1y = NaN, this.ay1z = NaN, this.az1x = NaN, this.az1y = NaN, this.az1z = NaN, this.ax2x = NaN, this.ax2y = NaN, this.ax2z = NaN, this.ay2x = NaN, this.ay2y = NaN, this.ay2z = NaN, this.az2x = NaN, this.az2y = NaN, this.az2z = NaN, this.vel = NaN, this.velx = NaN, this.vely = NaN, this.velz = NaN, this.joint = t, this.r1 = t.relativeAnchorPoint1, this.r2 = t.relativeAnchorPoint2, this.p1 = t.anchorPoint1, this.p2 = t.anchorPoint2, this.b1 = t.body1, this.b2 = t.body2, this.l1 = this.b1.linearVelocity, this.l2 = this.b2.linearVelocity, this.a1 = this.b1.angularVelocity, this.a2 = this.b2.angularVelocity, this.i1 = this.b1.inverseInertia, this.i2 = this.b2.inverseInertia, this.impx = 0, this.impy = 0, this.impz = 0
    }

    function W(t, i, s, h) {
        this.cfm1 = NaN, this.cfm2 = NaN, this.cfm3 = NaN, this.i1e00 = NaN, this.i1e01 = NaN, this.i1e02 = NaN, this.i1e10 = NaN, this.i1e11 = NaN, this.i1e12 = NaN, this.i1e20 = NaN, this.i1e21 = NaN, this.i1e22 = NaN, this.i2e00 = NaN, this.i2e01 = NaN, this.i2e02 = NaN, this.i2e10 = NaN, this.i2e11 = NaN, this.i2e12 = NaN, this.i2e20 = NaN, this.i2e21 = NaN, this.i2e22 = NaN, this.ax1 = NaN, this.ay1 = NaN, this.az1 = NaN, this.ax2 = NaN, this.ay2 = NaN, this.az2 = NaN, this.ax3 = NaN, this.ay3 = NaN, this.az3 = NaN, this.a1x1 = NaN, this.a1y1 = NaN, this.a1z1 = NaN, this.a2x1 = NaN, this.a2y1 = NaN, this.a2z1 = NaN, this.a1x2 = NaN, this.a1y2 = NaN, this.a1z2 = NaN, this.a2x2 = NaN, this.a2y2 = NaN, this.a2z2 = NaN, this.a1x3 = NaN, this.a1y3 = NaN, this.a1z3 = NaN, this.a2x3 = NaN, this.a2y3 = NaN, this.a2z3 = NaN, this.lowerLimit1 = NaN, this.upperLimit1 = NaN, this.limitVelocity1 = NaN, this.limitState1 = 0, this.enableMotor1 = !1, this.motorSpeed1 = NaN, this.maxMotorForce1 = NaN, this.maxMotorImpulse1 = NaN, this.lowerLimit2 = NaN, this.upperLimit2 = NaN, this.limitVelocity2 = NaN, this.limitState2 = 0, this.enableMotor2 = !1, this.motorSpeed2 = NaN, this.maxMotorForce2 = NaN, this.maxMotorImpulse2 = NaN, this.lowerLimit3 = NaN, this.upperLimit3 = NaN, this.limitVelocity3 = NaN, this.limitState3 = 0, this.enableMotor3 = !1, this.motorSpeed3 = NaN, this.maxMotorForce3 = NaN, this.maxMotorImpulse3 = NaN, this.k00 = NaN, this.k01 = NaN, this.k02 = NaN, this.k10 = NaN, this.k11 = NaN, this.k12 = NaN, this.k20 = NaN, this.k21 = NaN, this.k22 = NaN, this.kv00 = NaN, this.kv11 = NaN, this.kv22 = NaN, this.dv00 = NaN, this.dv11 = NaN, this.dv22 = NaN, this.d00 = NaN, this.d01 = NaN, this.d02 = NaN, this.d10 = NaN, this.d11 = NaN, this.d12 = NaN, this.d20 = NaN, this.d21 = NaN, this.d22 = NaN, this.limitMotor1 = i, this.limitMotor2 = s, this.limitMotor3 = h, this.b1 = t.body1, this.b2 = t.body2, this.a1 = this.b1.angularVelocity, this.a2 = this.b2.angularVelocity, this.i1 = this.b1.inverseInertia, this.i2 = this.b2.inverseInertia, this.limitImpulse1 = 0, this.motorImpulse1 = 0, this.limitImpulse2 = 0, this.motorImpulse2 = 0, this.limitImpulse3 = 0, this.motorImpulse3 = 0
    }

    function H(t, i, s) {
        _.call(this, t), this.type = N, this.localAxis1 = t.localAxis1.clone().normalize(), this.localAxis2 = t.localAxis2.clone().normalize();
        var h = (new P).setQuat((new S).setFromUnitVectors(this.localAxis1, this.localAxis2));
        this.localAngle1 = (new L).tangent(this.localAxis1).normalize(), this.localAngle2 = this.localAngle1.clone().applyMatrix3(h, !0), this.ax1 = new L, this.ax2 = new L, this.an1 = new L, this.an2 = new L, this.tmp = new L, this.nor = new L, this.tan = new L, this.bin = new L, this.limitMotor = new q(this.nor, !1), this.limitMotor.lowerLimit = i, this.limitMotor.upperLimit = s, this.lc = new J(this), this.r3 = new W(this, this.limitMotor, new q(this.tan, !0), new q(this.bin, !0))
    }

    function Q(t) {
        _.call(this, t), this.type = z, this.lc = new J(this)
    }

    function X(t, i) {
        this.cfm = NaN, this.m1 = NaN, this.m2 = NaN, this.i1e00 = NaN, this.i1e01 = NaN, this.i1e02 = NaN, this.i1e10 = NaN, this.i1e11 = NaN, this.i1e12 = NaN, this.i1e20 = NaN, this.i1e21 = NaN, this.i1e22 = NaN, this.i2e00 = NaN, this.i2e01 = NaN, this.i2e02 = NaN, this.i2e10 = NaN, this.i2e11 = NaN, this.i2e12 = NaN, this.i2e20 = NaN, this.i2e21 = NaN, this.i2e22 = NaN, this.motorDenom = NaN, this.invMotorDenom = NaN, this.invDenom = NaN, this.ax = NaN, this.ay = NaN, this.az = NaN, this.r1x = NaN, this.r1y = NaN, this.r1z = NaN, this.r2x = NaN, this.r2y = NaN, this.r2z = NaN, this.t1x = NaN, this.t1y = NaN, this.t1z = NaN, this.t2x = NaN, this.t2y = NaN, this.t2z = NaN, this.l1x = NaN, this.l1y = NaN, this.l1z = NaN, this.l2x = NaN, this.l2y = NaN, this.l2z = NaN, this.a1x = NaN, this.a1y = NaN, this.a1z = NaN, this.a2x = NaN, this.a2y = NaN, this.a2z = NaN, this.lowerLimit = NaN, this.upperLimit = NaN, this.limitVelocity = NaN, this.limitState = 0, this.enableMotor = !1, this.motorSpeed = NaN, this.maxMotorForce = NaN, this.maxMotorImpulse = NaN, this.limitMotor = i, this.b1 = t.body1, this.b2 = t.body2, this.p1 = t.anchorPoint1, this.p2 = t.anchorPoint2, this.r1 = t.relativeAnchorPoint1, this.r2 = t.relativeAnchorPoint2, this.l1 = this.b1.linearVelocity, this.l2 = this.b2.linearVelocity, this.a1 = this.b1.angularVelocity, this.a2 = this.b2.angularVelocity, this.i1 = this.b1.inverseInertia, this.i2 = this.b2.inverseInertia, this.limitImpulse = 0, this.motorImpulse = 0
    }

    function Y(t, i, s) {
        _.call(this, t), this.type = v, this.nor = new L, this.limitMotor = new q(this.nor, !0), this.limitMotor.lowerLimit = i, this.limitMotor.upperLimit = s, this.t = new X(this, this.limitMotor)
    }

    function Z(t, i) {
        this.joint = t, this.targetOrientation = (new S).invert(i), this.relativeOrientation = new S, this.ii1 = null, this.ii2 = null, this.dd = null, this.vel = new L, this.imp = new L, this.rn0 = new L, this.rn1 = new L, this.rn2 = new L, this.b1 = t.body1, this.b2 = t.body2, this.a1 = this.b1.angularVelocity, this.a2 = this.b2.angularVelocity, this.i1 = this.b1.inverseInertia, this.i2 = this.b2.inverseInertia
    }

    function K(t, i, s, h) {
        this.m1 = NaN, this.m2 = NaN, this.i1e00 = NaN, this.i1e01 = NaN, this.i1e02 = NaN, this.i1e10 = NaN, this.i1e11 = NaN, this.i1e12 = NaN, this.i1e20 = NaN, this.i1e21 = NaN, this.i1e22 = NaN, this.i2e00 = NaN, this.i2e01 = NaN, this.i2e02 = NaN, this.i2e10 = NaN, this.i2e11 = NaN, this.i2e12 = NaN, this.i2e20 = NaN, this.i2e21 = NaN, this.i2e22 = NaN, this.ax1 = NaN, this.ay1 = NaN, this.az1 = NaN, this.ax2 = NaN, this.ay2 = NaN, this.az2 = NaN, this.ax3 = NaN, this.ay3 = NaN, this.az3 = NaN, this.r1x = NaN, this.r1y = NaN, this.r1z = NaN, this.r2x = NaN, this.r2y = NaN, this.r2z = NaN, this.t1x1 = NaN, this.t1y1 = NaN, this.t1z1 = NaN, this.t2x1 = NaN, this.t2y1 = NaN, this.t2z1 = NaN, this.l1x1 = NaN, this.l1y1 = NaN, this.l1z1 = NaN, this.l2x1 = NaN, this.l2y1 = NaN, this.l2z1 = NaN, this.a1x1 = NaN, this.a1y1 = NaN, this.a1z1 = NaN, this.a2x1 = NaN, this.a2y1 = NaN, this.a2z1 = NaN, this.t1x2 = NaN, this.t1y2 = NaN, this.t1z2 = NaN, this.t2x2 = NaN, this.t2y2 = NaN, this.t2z2 = NaN, this.l1x2 = NaN, this.l1y2 = NaN, this.l1z2 = NaN, this.l2x2 = NaN, this.l2y2 = NaN, this.l2z2 = NaN, this.a1x2 = NaN, this.a1y2 = NaN, this.a1z2 = NaN, this.a2x2 = NaN, this.a2y2 = NaN, this.a2z2 = NaN, this.t1x3 = NaN, this.t1y3 = NaN, this.t1z3 = NaN, this.t2x3 = NaN, this.t2y3 = NaN, this.t2z3 = NaN, this.l1x3 = NaN, this.l1y3 = NaN, this.l1z3 = NaN, this.l2x3 = NaN, this.l2y3 = NaN, this.l2z3 = NaN, this.a1x3 = NaN, this.a1y3 = NaN, this.a1z3 = NaN, this.a2x3 = NaN, this.a2y3 = NaN, this.a2z3 = NaN, this.lowerLimit1 = NaN, this.upperLimit1 = NaN, this.limitVelocity1 = NaN, this.limitState1 = 0, this.enableMotor1 = !1, this.motorSpeed1 = NaN, this.maxMotorForce1 = NaN, this.maxMotorImpulse1 = NaN, this.lowerLimit2 = NaN, this.upperLimit2 = NaN, this.limitVelocity2 = NaN, this.limitState2 = 0, this.enableMotor2 = !1, this.motorSpeed2 = NaN, this.maxMotorForce2 = NaN, this.maxMotorImpulse2 = NaN, this.lowerLimit3 = NaN, this.upperLimit3 = NaN, this.limitVelocity3 = NaN, this.limitState3 = 0, this.enableMotor3 = !1, this.motorSpeed3 = NaN, this.maxMotorForce3 = NaN, this.maxMotorImpulse3 = NaN, this.k00 = NaN, this.k01 = NaN, this.k02 = NaN, this.k10 = NaN, this.k11 = NaN, this.k12 = NaN, this.k20 = NaN, this.k21 = NaN, this.k22 = NaN, this.kv00 = NaN, this.kv11 = NaN, this.kv22 = NaN, this.dv00 = NaN, this.dv11 = NaN, this.dv22 = NaN, this.d00 = NaN, this.d01 = NaN, this.d02 = NaN, this.d10 = NaN, this.d11 = NaN, this.d12 = NaN, this.d20 = NaN, this.d21 = NaN, this.d22 = NaN, this.limitMotor1 = i, this.limitMotor2 = s, this.limitMotor3 = h, this.b1 = t.body1, this.b2 = t.body2, this.p1 = t.anchorPoint1, this.p2 = t.anchorPoint2, this.r1 = t.relativeAnchorPoint1, this.r2 = t.relativeAnchorPoint2, this.l1 = this.b1.linearVelocity, this.l2 = this.b2.linearVelocity, this.a1 = this.b1.angularVelocity, this.a2 = this.b2.angularVelocity, this.i1 = this.b1.inverseInertia, this.i2 = this.b2.inverseInertia, this.limitImpulse1 = 0, this.motorImpulse1 = 0, this.limitImpulse2 = 0, this.motorImpulse2 = 0, this.limitImpulse3 = 0, this.motorImpulse3 = 0, this.cfm1 = 0, this.cfm2 = 0, this.cfm3 = 0, this.weight = -1
    }

    function G(t, i, s) {
        _.call(this, t), this.type = M, this.localAxis1 = t.localAxis1.clone().normalize(), this.localAxis2 = t.localAxis2.clone().normalize(), this.ax1 = new L, this.ax2 = new L, this.nor = new L, this.tan = new L, this.bin = new L, this.ac = new Z(this, (new S).setFromUnitVectors(this.localAxis1, this.localAxis2)), this.limitMotor = new q(this.nor, !0), this.limitMotor.lowerLimit = i, this.limitMotor.upperLimit = s, this.t3 = new K(this, this.limitMotor, new q(this.tan, !0), new q(this.bin, !0))
    }

    function $(t, i, s) {
        _.call(this, t), this.type = w, this.localAxis1 = t.localAxis1.clone().normalize(), this.localAxis2 = t.localAxis2.clone().normalize();
        var h = (new P).setQuat((new S).setFromUnitVectors(this.localAxis1, this.localAxis2));
        this.localAngle1 = (new L).tangent(this.localAxis1).normalize(), this.localAngle2 = this.localAngle1.clone().applyMatrix3(h, !0), this.ax1 = new L, this.ax2 = new L, this.an1 = new L, this.an2 = new L, this.tmp = new L, this.nor = new L, this.tan = new L, this.bin = new L, this.rotationalLimitMotor = new q(this.nor, !1), this.r3 = new W(this, this.rotationalLimitMotor, new q(this.tan, !0), new q(this.bin, !0)), this.translationalLimitMotor = new q(this.nor, !0), this.translationalLimitMotor.lowerLimit = i, this.translationalLimitMotor.upperLimit = s, this.t3 = new K(this, this.translationalLimitMotor, new q(this.tan, !0), new q(this.bin, !0))
    }

    function tt(t) {
        _.call(this, t), this.type = k, this.localAxis1 = t.localAxis1.clone().normalize(), this.localAxis2 = t.localAxis2.clone().normalize(), this.localAngle1 = new L, this.localAngle2 = new L;
        var i = g.dotVectors(this.localAxis1, this.localAxis2);
        if (i > -1 && i < 1) this.localAngle1.set(this.localAxis2.x - i * this.localAxis1.x, this.localAxis2.y - i * this.localAxis1.y, this.localAxis2.z - i * this.localAxis1.z).normalize(), this.localAngle2.set(this.localAxis1.x - i * this.localAxis2.x, this.localAxis1.y - i * this.localAxis2.y, this.localAxis1.z - i * this.localAxis2.z).normalize();
        else {
            var s = (new P).setQuat((new S).setFromUnitVectors(this.localAxis1, this.localAxis2));
            this.localAngle1.tangent(this.localAxis1).normalize(), this.localAngle2 = this.localAngle1.clone().applyMatrix3(s, !0)
        }
        this.ax1 = new L, this.ax2 = new L, this.an1 = new L, this.an2 = new L, this.tmp = new L, this.nor = new L, this.tan = new L, this.bin = new L, this.translationalLimitMotor = new q(this.tan, !0), this.translationalLimitMotor.frequency = 8, this.translationalLimitMotor.dampingRatio = 1, this.rotationalLimitMotor1 = new q(this.tan, !1), this.rotationalLimitMotor2 = new q(this.bin, !1), this.t3 = new K(this, new q(this.nor, !0), this.translationalLimitMotor, new q(this.bin, !0)), this.t3.weight = 1, this.r3 = new W(this, new q(this.nor, !0), this.rotationalLimitMotor1, this.rotationalLimitMotor2)
    }

    function it() {
        this.scale = 1, this.invScale = 1, this.body1 = null, this.body2 = null, this.localAnchorPoint1 = new L, this.localAnchorPoint2 = new L, this.localAxis1 = new L, this.localAxis2 = new L, this.allowCollision = !1
    }

    function st() {
        this.mass = 0, this.inertia = new P
    }

    function ht(t) {
        this.prev = null, this.next = null, this.shape = null, this.body = null, this.contact = t
    }

    function et() {
        this.lp1X = NaN, this.lp1Y = NaN, this.lp1Z = NaN, this.lp2X = NaN, this.lp2Y = NaN, this.lp2Z = NaN, this.impulse = NaN
    }

    function at() {
        this.warmStarted = !1, this.position = new L, this.localPoint1 = new L, this.localPoint2 = new L, this.normal = new L, this.tangent = new L, this.binormal = new L, this.normalImpulse = 0, this.tangentImpulse = 0, this.binormalImpulse = 0, this.normalDenominator = 0, this.tangentDenominator = 0, this.binormalDenominator = 0, this.penetration = 0
    }

    function ot() {
        this.body1 = null, this.body2 = null, this.numPoints = 0, this.points = [new at, new at, new at, new at]
    }

    function nt() {
        this.nor = new L, this.tan = new L, this.bin = new L, this.norU1 = new L, this.tanU1 = new L, this.binU1 = new L, this.norU2 = new L, this.tanU2 = new L, this.binU2 = new L, this.norT1 = new L, this.tanT1 = new L, this.binT1 = new L, this.norT2 = new L, this.tanT2 = new L, this.binT2 = new L, this.norTU1 = new L, this.tanTU1 = new L, this.binTU1 = new L, this.norTU2 = new L, this.tanTU2 = new L, this.binTU2 = new L, this.norImp = 0, this.tanImp = 0, this.binImp = 0, this.norDen = 0, this.tanDen = 0, this.binDen = 0, this.norTar = 0, this.next = null, this.last = !1
    }

    function rt(t) {
        U.call(this), this.manifold = t, this.restitution = NaN, this.friction = NaN, this.p1 = null, this.p2 = null, this.lv1 = null, this.lv2 = null, this.av1 = null, this.av2 = null, this.i1 = null, this.i2 = null, this.tmp = new L, this.tmpC1 = new L, this.tmpC2 = new L, this.tmpP1 = new L, this.tmpP2 = new L, this.tmplv1 = new L, this.tmplv2 = new L, this.tmpav1 = new L, this.tmpav2 = new L, this.m1 = NaN, this.m2 = NaN, this.num = 0, this.ps = t.points, this.cs = new nt, this.cs.next = new nt, this.cs.next.next = new nt, this.cs.next.next.next = new nt
    }

    function lt() {
        this.shape1 = null, this.shape2 = null, this.body1 = null, this.body2 = null, this.prev = null, this.next = null, this.persisting = !1, this.sleeping = !1, this.detector = null, this.constraint = null, this.touching = !1, this.close = !1, this.dist = g.INF, this.b1Link = new ht(this), this.b2Link = new ht(this), this.s1Link = new ht(this), this.s2Link = new ht(this), this.manifold = new ot, this.buffer = [new et, new et, new et, new et], this.points = this.manifold.points, this.constraint = new rt(this.manifold)
    }

    function ct(t, i) {
        this.position = t || new L, this.orientation = i || new S, this.scale = 1, this.invScale = 1, this.mesh = null, this.id = NaN, this.name = "", this.prev = null, this.next = null, this.type = m, this.massInfo = new st, this.newPosition = new L, this.controlPos = !1, this.newOrientation = new S, this.newRotation = new L, this.currentRotation = new L, this.controlRot = !1, this.controlRotInTime = !1, this.quaternion = new S, this.pos = new L, this.linearVelocity = new L, this.angularVelocity = new L, this.parent = null, this.contactLink = null, this.numContacts = 0, this.shapes = null, this.numShapes = 0, this.jointLink = null, this.numJoints = 0, this.sleepPosition = new L, this.sleepOrientation = new S, this.isStatic = !1, this.isDynamic = !1, this.isKinematic = !1, this.rotation = new P, this.mass = 0, this.inverseMass = 0, this.inverseInertia = new P, this.localInertia = new P, this.inverseLocalInertia = new P, this.tmpInertia = new P, this.addedToIsland = !1, this.allowSleep = !0, this.sleepTime = 0, this.sleeping = !1
    }

    function mt(t, i) {
        this.shape1 = t || null, this.shape2 = i || null
    }

    function pt() {
        this.types = n, this.numPairChecks = 0, this.numPairs = 0, this.pairs = []
    }
    Object.assign(j.prototype, {
        Shape: !0,
        calculateMassInfo: function(t) {
            I("Shape", "Inheritance error.")
        },
        updateProxy: function() {
            I("Shape", "Inheritance error.")
        }
    }), C.prototype = Object.assign(Object.create(j.prototype), {
        constructor: C,
        calculateMassInfo: function(t) {
            var i = this.width * this.height * this.depth * this.density;
            t.mass = i, t.inertia.set(i * (this.height * this.height + this.depth * this.depth) * (1 / 12), 0, 0, 0, i * (this.width * this.width + this.depth * this.depth) * (1 / 12), 0, 0, 0, i * (this.width * this.width + this.height * this.height) * (1 / 12))
        },
        updateProxy: function() {
            var t = this.rotation.elements,
                i = this.dimentions;
            i[0] = t[0], i[1] = t[3], i[2] = t[6], i[3] = t[1], i[4] = t[4], i[5] = t[7], i[6] = t[2], i[7] = t[5], i[8] = t[8], i[9] = t[0] * this.halfWidth, i[10] = t[3] * this.halfWidth, i[11] = t[6] * this.halfWidth, i[12] = t[1] * this.halfHeight, i[13] = t[4] * this.halfHeight, i[14] = t[7] * this.halfHeight, i[15] = t[2] * this.halfDepth, i[16] = t[5] * this.halfDepth, i[17] = t[8] * this.halfDepth;
            var s = i[9],
                h = i[10],
                e = i[11],
                a = i[12],
                o = i[13],
                n = i[14],
                r = i[15],
                l = i[16],
                c = i[17],
                m = this.position.x,
                p = this.position.y,
                u = this.position.z,
                y = this.elements;
            y[0] = m + s + a + r, y[1] = p + h + o + l, y[2] = u + e + n + c, y[3] = m + s + a - r, y[4] = p + h + o - l, y[5] = u + e + n - c, y[6] = m + s - a + r, y[7] = p + h - o + l, y[8] = u + e - n + c, y[9] = m + s - a - r, y[10] = p + h - o - l, y[11] = u + e - n - c, y[12] = m - s + a + r, y[13] = p - h + o + l, y[14] = u - e + n + c, y[15] = m - s + a - r, y[16] = p - h + o - l, y[17] = u - e + n - c, y[18] = m - s - a + r, y[19] = p - h - o + l, y[20] = u - e - n + c, y[21] = m - s - a - r, y[22] = p - h - o - l, y[23] = u - e - n - c;
            var x = i[9] < 0 ? -i[9] : i[9],
                d = i[10] < 0 ? -i[10] : i[10],
                f = i[11] < 0 ? -i[11] : i[11];
            x = i[12] < 0 ? x - i[12] : x + i[12], d = i[13] < 0 ? d - i[13] : d + i[13], f = i[14] < 0 ? f - i[14] : f + i[14], x = i[15] < 0 ? x - i[15] : x + i[15], d = i[16] < 0 ? d - i[16] : d + i[16], f = i[17] < 0 ? f - i[17] : f + i[17];
            var b = .005;
            this.aabb.set(this.position.x - x - b, this.position.x + x + b, this.position.y - d - b, this.position.y + d + b, this.position.z - f - b, this.position.z + f + b), null != this.proxy && this.proxy.update()
        }
    }), O.prototype = Object.assign(Object.create(j.prototype), {
        constructor: O,
        volume: function() {
            return g.PI * this.radius * 1.333333
        },
        calculateMassInfo: function(t) {
            var i = this.volume() * this.radius * this.radius * this.density;
            t.mass = i;
            var s = i * this.radius * this.radius * .4;
            t.inertia.set(s, 0, 0, 0, s, 0, 0, 0, s)
        },
        updateProxy: function() {
            var t = .005;
            this.aabb.set(this.position.x - this.radius - t, this.position.x + this.radius + t, this.position.y - this.radius - t, this.position.y + this.radius + t, this.position.z - this.radius - t, this.position.z + this.radius + t), null != this.proxy && this.proxy.update()
        }
    }), D.prototype = Object.assign(Object.create(j.prototype), {
        constructor: D,
        calculateMassInfo: function(t) {
            var i = this.radius * this.radius,
                s = g.PI * i * this.height * this.density,
                h = (.25 * i + .0833 * this.height * this.height) * s,
                e = .5 * i;
            t.mass = s, t.inertia.set(h, 0, 0, 0, e, 0, 0, 0, h)
        },
        updateProxy: function() {
            var t, i, s, h, e, a, o, n, r, l, c, m = this.rotation.elements;
            e = m[1] * m[1], a = m[4] * m[4], o = m[7] * m[7], this.normalDirection.set(m[1], m[4], m[7]), this.halfDirection.scale(this.normalDirection, this.halfHeight), i = 1 - e, (t = g.sqrt(i * i + e * a + e * o)) > 0 && (t = this.radius / t), i *= t, s = 1 - a, (t = g.sqrt(a * e + s * s + a * o)) > 0 && (t = this.radius / t), s *= t, h = 1 - o, (t = g.sqrt(o * e + o * a + h * h)) > 0 && (t = this.radius / t), h *= t, n = this.halfDirection.x < 0 ? -this.halfDirection.x : this.halfDirection.x, r = this.halfDirection.y < 0 ? -this.halfDirection.y : this.halfDirection.y, l = this.halfDirection.z < 0 ? -this.halfDirection.z : this.halfDirection.z, n = i < 0 ? n - i : n + i, r = s < 0 ? r - s : r + s, l = h < 0 ? l - h : l + h, c = .005, this.aabb.set(this.position.x - n - c, this.position.x + n + c, this.position.y - r - c, this.position.y + r + c, this.position.z - l - c, this.position.z + l + c), null != this.proxy && this.proxy.update()
        }
    }), E.prototype = Object.assign(Object.create(j.prototype), {
        constructor: E,
        volume: function() {
            return Number.MAX_VALUE
        },
        calculateMassInfo: function(t) {
            t.mass = this.density;
            t.inertia.set(1, 0, 0, 0, 1, 0, 0, 0, 1)
        },
        updateProxy: function() {
            var t = .005,
                i = -g.INF,
                s = g.INF,
                h = this.normal;
            this.aabb.set(-1 === h.x ? this.position.x - t : i, 1 === h.x ? this.position.x + t : s, -1 === h.y ? this.position.y - t : i, 1 === h.y ? this.position.y + t : s, -1 === h.z ? this.position.z - t : i, 1 === h.z ? this.position.z + t : s), null != this.proxy && this.proxy.update()
        }
    }), B.prototype = Object.assign(Object.create(j.prototype), {
        constructor: B,
        volume: function() {
            return Number.MAX_VALUE
        },
        calculateMassInfo: function(t) {
            t.inertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0)
        },
        updateProxy: function() {
            this.aabb.set(this.position.x - 0, this.position.x + 0, this.position.y - 0, this.position.y + 0, this.position.z - 0, this.position.z + 0), null != this.proxy && this.proxy.update()
        }
    }), Object.assign(q.prototype, {
        LimitMotor: !0,
        setLimit: function(t, i) {
            this.lowerLimit = t, this.upperLimit = i
        },
        setMotor: function(t, i) {
            this.motorSpeed = t, this.maxMotorForce = i
        },
        setSpring: function(t, i) {
            this.frequency = t, this.dampingRatio = i
        }
    }), Object.assign(U.prototype, {
        Constraint: !0,
        preSolve: function(t, i) {
            I("Constraint", "Inheritance error.")
        },
        solve: function() {
            I("Constraint", "Inheritance error.")
        },
        postSolve: function() {
            I("Constraint", "Inheritance error.")
        }
    }), _.prototype = Object.assign(Object.create(U.prototype), {
        constructor: _,
        setId: function(t) {
            this.id = i
        },
        setParent: function(t) {
            this.parent = t, this.scale = this.parent.scale, this.invScale = this.parent.invScale, this.id = this.parent.numJoints, this.name || (this.name = "J" + this.id)
        },
        updateAnchorPoints: function() {
            this.relativeAnchorPoint1.copy(this.localAnchorPoint1).applyMatrix3(this.body1.rotation, !0), this.relativeAnchorPoint2.copy(this.localAnchorPoint2).applyMatrix3(this.body2.rotation, !0), this.anchorPoint1.add(this.relativeAnchorPoint1, this.body1.position), this.anchorPoint2.add(this.relativeAnchorPoint2, this.body2.position)
        },
        attach: function(t) {
            this.b1Link.body = this.body2, this.b2Link.body = this.body1, t ? (this.body1.jointLink.push(this.b1Link), this.body2.jointLink.push(this.b2Link)) : (null != this.body1.jointLink ? (this.b1Link.next = this.body1.jointLink).prev = this.b1Link : this.b1Link.next = null, this.body1.jointLink = this.b1Link, this.body1.numJoints++, null != this.body2.jointLink ? (this.b2Link.next = this.body2.jointLink).prev = this.b2Link : this.b2Link.next = null, this.body2.jointLink = this.b2Link, this.body2.numJoints++)
        },
        detach: function(t) {
            if (t) this.body1.jointLink.splice(this.body1.jointLink.indexOf(this.b1Link), 1), this.body2.jointLink.splice(this.body2.jointLink.indexOf(this.b2Link), 1);
            else {
                var i = this.b1Link.prev,
                    s = this.b1Link.next;
                null != i && (i.next = s), null != s && (s.prev = i), this.body1.jointLink == this.b1Link && (this.body1.jointLink = s), this.b1Link.prev = null, this.b1Link.next = null, this.b1Link.body = null, this.body1.numJoints--, i = this.b2Link.prev, s = this.b2Link.next, null != i && (i.next = s), null != s && (s.prev = i), this.body2.jointLink == this.b2Link && (this.body2.jointLink = s), this.b2Link.prev = null, this.b2Link.next = null, this.b2Link.body = null, this.body2.numJoints--
            }
            this.b1Link.body = null, this.b2Link.body = null
        },
        awake: function() {
            this.body1.awake(), this.body2.awake()
        },
        preSolve: function(t, i) {},
        solve: function() {},
        postSolve: function() {},
        remove: function() {
            this.dispose()
        },
        dispose: function() {
            this.parent.removeJoint(this)
        },
        getPosition: function() {
            return [(new L).scale(this.anchorPoint1, this.scale), (new L).scale(this.anchorPoint2, this.scale)]
        }
    }), Object.assign(J.prototype, {
        LinearConstraint: !0,
        preSolve: function(t, i) {
            this.r1x = this.r1.x, this.r1y = this.r1.y, this.r1z = this.r1.z, this.r2x = this.r2.x, this.r2y = this.r2.y, this.r2z = this.r2.z, this.m1 = this.b1.inverseMass, this.m2 = this.b2.inverseMass, this.ii1 = this.i1.clone(), this.ii2 = this.i2.clone();
            var s = this.ii1.elements,
                h = this.ii2.elements;
            this.ax1x = this.r1z * s[1] + -this.r1y * s[2], this.ax1y = this.r1z * s[4] + -this.r1y * s[5], this.ax1z = this.r1z * s[7] + -this.r1y * s[8], this.ay1x = -this.r1z * s[0] + this.r1x * s[2], this.ay1y = -this.r1z * s[3] + this.r1x * s[5], this.ay1z = -this.r1z * s[6] + this.r1x * s[8], this.az1x = this.r1y * s[0] + -this.r1x * s[1], this.az1y = this.r1y * s[3] + -this.r1x * s[4], this.az1z = this.r1y * s[6] + -this.r1x * s[7], this.ax2x = this.r2z * h[1] + -this.r2y * h[2], this.ax2y = this.r2z * h[4] + -this.r2y * h[5], this.ax2z = this.r2z * h[7] + -this.r2y * h[8], this.ay2x = -this.r2z * h[0] + this.r2x * h[2], this.ay2y = -this.r2z * h[3] + this.r2x * h[5], this.ay2z = -this.r2z * h[6] + this.r2x * h[8], this.az2x = this.r2y * h[0] + -this.r2x * h[1], this.az2y = this.r2y * h[3] + -this.r2x * h[4], this.az2z = this.r2y * h[6] + -this.r2x * h[7];
            var e = this.m1 + this.m2,
                a = (new P).set(e, 0, 0, 0, e, 0, 0, 0, e).elements;
            a[0] += s[4] * this.r1z * this.r1z - (s[7] + s[5]) * this.r1y * this.r1z + s[8] * this.r1y * this.r1y, a[1] += (s[6] * this.r1y + s[5] * this.r1x) * this.r1z - s[3] * this.r1z * this.r1z - s[8] * this.r1x * this.r1y, a[2] += (s[3] * this.r1y - s[4] * this.r1x) * this.r1z - s[6] * this.r1y * this.r1y + s[7] * this.r1x * this.r1y, a[3] += (s[2] * this.r1y + s[7] * this.r1x) * this.r1z - s[1] * this.r1z * this.r1z - s[8] * this.r1x * this.r1y, a[4] += s[0] * this.r1z * this.r1z - (s[6] + s[2]) * this.r1x * this.r1z + s[8] * this.r1x * this.r1x, a[5] += (s[1] * this.r1x - s[0] * this.r1y) * this.r1z - s[7] * this.r1x * this.r1x + s[6] * this.r1x * this.r1y, a[6] += (s[1] * this.r1y - s[4] * this.r1x) * this.r1z - s[2] * this.r1y * this.r1y + s[5] * this.r1x * this.r1y, a[7] += (s[3] * this.r1x - s[0] * this.r1y) * this.r1z - s[5] * this.r1x * this.r1x + s[2] * this.r1x * this.r1y, a[8] += s[0] * this.r1y * this.r1y - (s[3] + s[1]) * this.r1x * this.r1y + s[4] * this.r1x * this.r1x, a[0] += h[4] * this.r2z * this.r2z - (h[7] + h[5]) * this.r2y * this.r2z + h[8] * this.r2y * this.r2y, a[1] += (h[6] * this.r2y + h[5] * this.r2x) * this.r2z - h[3] * this.r2z * this.r2z - h[8] * this.r2x * this.r2y, a[2] += (h[3] * this.r2y - h[4] * this.r2x) * this.r2z - h[6] * this.r2y * this.r2y + h[7] * this.r2x * this.r2y, a[3] += (h[2] * this.r2y + h[7] * this.r2x) * this.r2z - h[1] * this.r2z * this.r2z - h[8] * this.r2x * this.r2y, a[4] += h[0] * this.r2z * this.r2z - (h[6] + h[2]) * this.r2x * this.r2z + h[8] * this.r2x * this.r2x, a[5] += (h[1] * this.r2x - h[0] * this.r2y) * this.r2z - h[7] * this.r2x * this.r2x + h[6] * this.r2x * this.r2y, a[6] += (h[1] * this.r2y - h[4] * this.r2x) * this.r2z - h[2] * this.r2y * this.r2y + h[5] * this.r2x * this.r2y, a[7] += (h[3] * this.r2x - h[0] * this.r2y) * this.r2z - h[5] * this.r2x * this.r2x + h[2] * this.r2x * this.r2y, a[8] += h[0] * this.r2y * this.r2y - (h[3] + h[1]) * this.r2x * this.r2y + h[4] * this.r2x * this.r2x;
            var o = 1 / (a[0] * (a[4] * a[8] - a[7] * a[5]) + a[3] * (a[7] * a[2] - a[1] * a[8]) + a[6] * (a[1] * a[5] - a[4] * a[2]));
            this.dd = (new P).set(a[4] * a[8] - a[5] * a[7], a[2] * a[7] - a[1] * a[8], a[1] * a[5] - a[2] * a[4], a[5] * a[6] - a[3] * a[8], a[0] * a[8] - a[2] * a[6], a[2] * a[3] - a[0] * a[5], a[3] * a[7] - a[4] * a[6], a[1] * a[6] - a[0] * a[7], a[0] * a[4] - a[1] * a[3]).scaleEqual(o), this.velx = this.p2.x - this.p1.x, this.vely = this.p2.y - this.p1.y, this.velz = this.p2.z - this.p1.z;
            var n = g.sqrt(this.velx * this.velx + this.vely * this.vely + this.velz * this.velz);
            n > .005 ? (n = (.005 - n) / n * i * .05, this.velx *= n, this.vely *= n, this.velz *= n) : (this.velx = 0, this.vely = 0, this.velz = 0), this.impx *= .95, this.impy *= .95, this.impz *= .95, this.l1.x += this.impx * this.m1, this.l1.y += this.impy * this.m1, this.l1.z += this.impz * this.m1, this.a1.x += this.impx * this.ax1x + this.impy * this.ay1x + this.impz * this.az1x, this.a1.y += this.impx * this.ax1y + this.impy * this.ay1y + this.impz * this.az1y, this.a1.z += this.impx * this.ax1z + this.impy * this.ay1z + this.impz * this.az1z, this.l2.x -= this.impx * this.m2, this.l2.y -= this.impy * this.m2, this.l2.z -= this.impz * this.m2, this.a2.x -= this.impx * this.ax2x + this.impy * this.ay2x + this.impz * this.az2x, this.a2.y -= this.impx * this.ax2y + this.impy * this.ay2y + this.impz * this.az2y, this.a2.z -= this.impx * this.ax2z + this.impy * this.ay2z + this.impz * this.az2z
        },
        solve: function() {
            var t = this.dd.elements,
                i = this.l2.x - this.l1.x + this.a2.y * this.r2z - this.a2.z * this.r2y - this.a1.y * this.r1z + this.a1.z * this.r1y - this.velx,
                s = this.l2.y - this.l1.y + this.a2.z * this.r2x - this.a2.x * this.r2z - this.a1.z * this.r1x + this.a1.x * this.r1z - this.vely,
                h = this.l2.z - this.l1.z + this.a2.x * this.r2y - this.a2.y * this.r2x - this.a1.x * this.r1y + this.a1.y * this.r1x - this.velz,
                e = i * t[0] + s * t[1] + h * t[2],
                a = i * t[3] + s * t[4] + h * t[5],
                o = i * t[6] + s * t[7] + h * t[8];
            this.impx += e, this.impy += a, this.impz += o, this.l1.x += e * this.m1, this.l1.y += a * this.m1, this.l1.z += o * this.m1, this.a1.x += e * this.ax1x + a * this.ay1x + o * this.az1x, this.a1.y += e * this.ax1y + a * this.ay1y + o * this.az1y, this.a1.z += e * this.ax1z + a * this.ay1z + o * this.az1z, this.l2.x -= e * this.m2, this.l2.y -= a * this.m2, this.l2.z -= o * this.m2, this.a2.x -= e * this.ax2x + a * this.ay2x + o * this.az2x, this.a2.y -= e * this.ax2y + a * this.ay2y + o * this.az2y, this.a2.z -= e * this.ax2z + a * this.ay2z + o * this.az2z
        }
    }), Object.assign(W.prototype, {
        Rotational3Constraint: !0,
        preSolve: function(t, i) {
            this.ax1 = this.limitMotor1.axis.x, this.ay1 = this.limitMotor1.axis.y, this.az1 = this.limitMotor1.axis.z, this.ax2 = this.limitMotor2.axis.x, this.ay2 = this.limitMotor2.axis.y, this.az2 = this.limitMotor2.axis.z, this.ax3 = this.limitMotor3.axis.x, this.ay3 = this.limitMotor3.axis.y, this.az3 = this.limitMotor3.axis.z, this.lowerLimit1 = this.limitMotor1.lowerLimit, this.upperLimit1 = this.limitMotor1.upperLimit, this.motorSpeed1 = this.limitMotor1.motorSpeed, this.maxMotorForce1 = this.limitMotor1.maxMotorForce, this.enableMotor1 = this.maxMotorForce1 > 0, this.lowerLimit2 = this.limitMotor2.lowerLimit, this.upperLimit2 = this.limitMotor2.upperLimit, this.motorSpeed2 = this.limitMotor2.motorSpeed, this.maxMotorForce2 = this.limitMotor2.maxMotorForce, this.enableMotor2 = this.maxMotorForce2 > 0, this.lowerLimit3 = this.limitMotor3.lowerLimit, this.upperLimit3 = this.limitMotor3.upperLimit, this.motorSpeed3 = this.limitMotor3.motorSpeed, this.maxMotorForce3 = this.limitMotor3.maxMotorForce, this.enableMotor3 = this.maxMotorForce3 > 0;
            var s = this.i1.elements,
                h = this.i2.elements;
            this.i1e00 = s[0], this.i1e01 = s[1], this.i1e02 = s[2], this.i1e10 = s[3], this.i1e11 = s[4], this.i1e12 = s[5], this.i1e20 = s[6], this.i1e21 = s[7], this.i1e22 = s[8], this.i2e00 = h[0], this.i2e01 = h[1], this.i2e02 = h[2], this.i2e10 = h[3], this.i2e11 = h[4], this.i2e12 = h[5], this.i2e20 = h[6], this.i2e21 = h[7], this.i2e22 = h[8];
            var e = this.limitMotor1.frequency,
                a = this.limitMotor2.frequency,
                o = this.limitMotor3.frequency,
                n = e > 0,
                r = a > 0,
                l = o > 0,
                c = this.lowerLimit1 <= this.upperLimit1,
                m = this.lowerLimit2 <= this.upperLimit2,
                p = this.lowerLimit3 <= this.upperLimit3,
                u = this.limitMotor1.angle;
            c ? (this.lowerLimit1 == this.upperLimit1 ? (0 != this.limitState1 && (this.limitState1 = 0, this.limitImpulse1 = 0), this.limitVelocity1 = this.lowerLimit1 - u) : u < this.lowerLimit1 ? (-1 != this.limitState1 && (this.limitState1 = -1, this.limitImpulse1 = 0), this.limitVelocity1 = this.lowerLimit1 - u) : u > this.upperLimit1 ? (1 != this.limitState1 && (this.limitState1 = 1, this.limitImpulse1 = 0), this.limitVelocity1 = this.upperLimit1 - u) : (this.limitState1 = 2, this.limitImpulse1 = 0, this.limitVelocity1 = 0), n || (this.limitVelocity1 > .02 ? this.limitVelocity1 -= .02 : this.limitVelocity1 < -.02 ? this.limitVelocity1 += .02 : this.limitVelocity1 = 0)) : (this.limitState1 = 2, this.limitImpulse1 = 0);
            var y = this.limitMotor2.angle;
            m ? (this.lowerLimit2 == this.upperLimit2 ? (0 != this.limitState2 && (this.limitState2 = 0, this.limitImpulse2 = 0), this.limitVelocity2 = this.lowerLimit2 - y) : y < this.lowerLimit2 ? (-1 != this.limitState2 && (this.limitState2 = -1, this.limitImpulse2 = 0), this.limitVelocity2 = this.lowerLimit2 - y) : y > this.upperLimit2 ? (1 != this.limitState2 && (this.limitState2 = 1, this.limitImpulse2 = 0), this.limitVelocity2 = this.upperLimit2 - y) : (this.limitState2 = 2, this.limitImpulse2 = 0, this.limitVelocity2 = 0), r || (this.limitVelocity2 > .02 ? this.limitVelocity2 -= .02 : this.limitVelocity2 < -.02 ? this.limitVelocity2 += .02 : this.limitVelocity2 = 0)) : (this.limitState2 = 2, this.limitImpulse2 = 0);
            var x = this.limitMotor3.angle;
            if (p ? (this.lowerLimit3 == this.upperLimit3 ? (0 != this.limitState3 && (this.limitState3 = 0, this.limitImpulse3 = 0), this.limitVelocity3 = this.lowerLimit3 - x) : x < this.lowerLimit3 ? (-1 != this.limitState3 && (this.limitState3 = -1, this.limitImpulse3 = 0), this.limitVelocity3 = this.lowerLimit3 - x) : x > this.upperLimit3 ? (1 != this.limitState3 && (this.limitState3 = 1, this.limitImpulse3 = 0), this.limitVelocity3 = this.upperLimit3 - x) : (this.limitState3 = 2, this.limitImpulse3 = 0, this.limitVelocity3 = 0), l || (this.limitVelocity3 > .02 ? this.limitVelocity3 -= .02 : this.limitVelocity3 < -.02 ? this.limitVelocity3 += .02 : this.limitVelocity3 = 0)) : (this.limitState3 = 2, this.limitImpulse3 = 0), this.enableMotor1 && (0 != this.limitState1 || n) ? this.maxMotorImpulse1 = this.maxMotorForce1 * t : (this.motorImpulse1 = 0, this.maxMotorImpulse1 = 0), this.enableMotor2 && (0 != this.limitState2 || r) ? this.maxMotorImpulse2 = this.maxMotorForce2 * t : (this.motorImpulse2 = 0, this.maxMotorImpulse2 = 0), this.enableMotor3 && (0 != this.limitState3 || l) ? this.maxMotorImpulse3 = this.maxMotorForce3 * t : (this.motorImpulse3 = 0, this.maxMotorImpulse3 = 0), this.a1x1 = this.ax1 * this.i1e00 + this.ay1 * this.i1e01 + this.az1 * this.i1e02, this.a1y1 = this.ax1 * this.i1e10 + this.ay1 * this.i1e11 + this.az1 * this.i1e12, this.a1z1 = this.ax1 * this.i1e20 + this.ay1 * this.i1e21 + this.az1 * this.i1e22, this.a2x1 = this.ax1 * this.i2e00 + this.ay1 * this.i2e01 + this.az1 * this.i2e02, this.a2y1 = this.ax1 * this.i2e10 + this.ay1 * this.i2e11 + this.az1 * this.i2e12, this.a2z1 = this.ax1 * this.i2e20 + this.ay1 * this.i2e21 + this.az1 * this.i2e22, this.a1x2 = this.ax2 * this.i1e00 + this.ay2 * this.i1e01 + this.az2 * this.i1e02, this.a1y2 = this.ax2 * this.i1e10 + this.ay2 * this.i1e11 + this.az2 * this.i1e12, this.a1z2 = this.ax2 * this.i1e20 + this.ay2 * this.i1e21 + this.az2 * this.i1e22, this.a2x2 = this.ax2 * this.i2e00 + this.ay2 * this.i2e01 + this.az2 * this.i2e02, this.a2y2 = this.ax2 * this.i2e10 + this.ay2 * this.i2e11 + this.az2 * this.i2e12, this.a2z2 = this.ax2 * this.i2e20 + this.ay2 * this.i2e21 + this.az2 * this.i2e22, this.a1x3 = this.ax3 * this.i1e00 + this.ay3 * this.i1e01 + this.az3 * this.i1e02, this.a1y3 = this.ax3 * this.i1e10 + this.ay3 * this.i1e11 + this.az3 * this.i1e12, this.a1z3 = this.ax3 * this.i1e20 + this.ay3 * this.i1e21 + this.az3 * this.i1e22, this.a2x3 = this.ax3 * this.i2e00 + this.ay3 * this.i2e01 + this.az3 * this.i2e02, this.a2y3 = this.ax3 * this.i2e10 + this.ay3 * this.i2e11 + this.az3 * this.i2e12, this.a2z3 = this.ax3 * this.i2e20 + this.ay3 * this.i2e21 + this.az3 * this.i2e22, this.k00 = this.ax1 * (this.a1x1 + this.a2x1) + this.ay1 * (this.a1y1 + this.a2y1) + this.az1 * (this.a1z1 + this.a2z1), this.k01 = this.ax1 * (this.a1x2 + this.a2x2) + this.ay1 * (this.a1y2 + this.a2y2) + this.az1 * (this.a1z2 + this.a2z2), this.k02 = this.ax1 * (this.a1x3 + this.a2x3) + this.ay1 * (this.a1y3 + this.a2y3) + this.az1 * (this.a1z3 + this.a2z3), this.k10 = this.ax2 * (this.a1x1 + this.a2x1) + this.ay2 * (this.a1y1 + this.a2y1) + this.az2 * (this.a1z1 + this.a2z1), this.k11 = this.ax2 * (this.a1x2 + this.a2x2) + this.ay2 * (this.a1y2 + this.a2y2) + this.az2 * (this.a1z2 + this.a2z2), this.k12 = this.ax2 * (this.a1x3 + this.a2x3) + this.ay2 * (this.a1y3 + this.a2y3) + this.az2 * (this.a1z3 + this.a2z3), this.k20 = this.ax3 * (this.a1x1 + this.a2x1) + this.ay3 * (this.a1y1 + this.a2y1) + this.az3 * (this.a1z1 + this.a2z1), this.k21 = this.ax3 * (this.a1x2 + this.a2x2) + this.ay3 * (this.a1y2 + this.a2y2) + this.az3 * (this.a1z2 + this.a2z2), this.k22 = this.ax3 * (this.a1x3 + this.a2x3) + this.ay3 * (this.a1y3 + this.a2y3) + this.az3 * (this.a1z3 + this.a2z3), this.kv00 = this.k00, this.kv11 = this.k11, this.kv22 = this.k22, this.dv00 = 1 / this.kv00, this.dv11 = 1 / this.kv11, this.dv22 = 1 / this.kv22, n && 2 != this.limitState1) {
                var d = 6.2831853 * e,
                    f = d * d * t,
                    b = i / (f + 2 * this.limitMotor1.dampingRatio * d);
                this.cfm1 = this.kv00 * b, this.limitVelocity1 *= f * b
            } else this.cfm1 = 0, this.limitVelocity1 *= .05 * i;
            r && 2 != this.limitState2 ? (b = i / ((f = (d = 6.2831853 * a) * d * t) + 2 * this.limitMotor2.dampingRatio * d), this.cfm2 = this.kv11 * b, this.limitVelocity2 *= f * b) : (this.cfm2 = 0, this.limitVelocity2 *= .05 * i), l && 2 != this.limitState3 ? (b = i / ((f = (d = 6.2831853 * o) * d * t) + 2 * this.limitMotor3.dampingRatio * d), this.cfm3 = this.kv22 * b, this.limitVelocity3 *= f * b) : (this.cfm3 = 0, this.limitVelocity3 *= .05 * i), this.k00 += this.cfm1, this.k11 += this.cfm2, this.k22 += this.cfm3;
            var v = 1 / (this.k00 * (this.k11 * this.k22 - this.k21 * this.k12) + this.k10 * (this.k21 * this.k02 - this.k01 * this.k22) + this.k20 * (this.k01 * this.k12 - this.k11 * this.k02));
            this.d00 = (this.k11 * this.k22 - this.k12 * this.k21) * v, this.d01 = (this.k02 * this.k21 - this.k01 * this.k22) * v, this.d02 = (this.k01 * this.k12 - this.k02 * this.k11) * v, this.d10 = (this.k12 * this.k20 - this.k10 * this.k22) * v, this.d11 = (this.k00 * this.k22 - this.k02 * this.k20) * v, this.d12 = (this.k02 * this.k10 - this.k00 * this.k12) * v, this.d20 = (this.k10 * this.k21 - this.k11 * this.k20) * v, this.d21 = (this.k01 * this.k20 - this.k00 * this.k21) * v, this.d22 = (this.k00 * this.k11 - this.k01 * this.k10) * v, this.limitImpulse1 *= .95, this.motorImpulse1 *= .95, this.limitImpulse2 *= .95, this.motorImpulse2 *= .95, this.limitImpulse3 *= .95, this.motorImpulse3 *= .95;
            var z = this.limitImpulse1 + this.motorImpulse1,
                N = this.limitImpulse2 + this.motorImpulse2,
                k = this.limitImpulse3 + this.motorImpulse3;
            this.a1.x += z * this.a1x1 + N * this.a1x2 + k * this.a1x3, this.a1.y += z * this.a1y1 + N * this.a1y2 + k * this.a1y3, this.a1.z += z * this.a1z1 + N * this.a1z2 + k * this.a1z3, this.a2.x -= z * this.a2x1 + N * this.a2x2 + k * this.a2x3, this.a2.y -= z * this.a2y1 + N * this.a2y2 + k * this.a2y3, this.a2.z -= z * this.a2z1 + N * this.a2z2 + k * this.a2z3
        },
        solve_: function() {
            var t = this.a2.x - this.a1.x,
                i = this.a2.y - this.a1.y,
                s = this.a2.z - this.a1.z;
            this.limitVelocity3 = 30;
            var h = t * this.ax1 + i * this.ay1 + s * this.az1 - this.limitVelocity1,
                e = t * this.ax2 + i * this.ay2 + s * this.az2 - this.limitVelocity2,
                a = t * this.ax3 + i * this.ay3 + s * this.az3 - this.limitVelocity3,
                o = h * this.d00 + e * this.d01 + a * this.d02,
                n = h * this.d10 + e * this.d11 + a * this.d12,
                r = h * this.d20 + e * this.d21 + a * this.d22;
            this.limitImpulse1 += o, this.limitImpulse2 += n, this.limitImpulse3 += r, this.a1.x += o * this.a1x1 + n * this.a1x2 + r * this.a1x3, this.a1.y += o * this.a1y1 + n * this.a1y2 + r * this.a1y3, this.a1.z += o * this.a1z1 + n * this.a1z2 + r * this.a1z3, this.a2.x -= o * this.a2x1 + n * this.a2x2 + r * this.a2x3, this.a2.y -= o * this.a2y1 + n * this.a2y2 + r * this.a2y3, this.a2.z -= o * this.a2z1 + n * this.a2z2 + r * this.a2z3
        },
        solve: function() {
            var t = this.a2.x - this.a1.x,
                i = this.a2.y - this.a1.y,
                s = this.a2.z - this.a1.z,
                h = t * this.ax1 + i * this.ay1 + s * this.az1,
                e = t * this.ax2 + i * this.ay2 + s * this.az2,
                a = t * this.ax3 + i * this.ay3 + s * this.az3,
                o = this.motorImpulse1,
                n = this.motorImpulse2,
                r = this.motorImpulse3,
                l = 0,
                c = 0,
                m = 0;
            this.enableMotor1 && (l = (h - this.motorSpeed1) * this.dv00, this.motorImpulse1 += l, this.motorImpulse1 > this.maxMotorImpulse1 ? this.motorImpulse1 = this.maxMotorImpulse1 : this.motorImpulse1 < -this.maxMotorImpulse1 && (this.motorImpulse1 = -this.maxMotorImpulse1), l = this.motorImpulse1 - o), this.enableMotor2 && (c = (e - this.motorSpeed2) * this.dv11, this.motorImpulse2 += c, this.motorImpulse2 > this.maxMotorImpulse2 ? this.motorImpulse2 = this.maxMotorImpulse2 : this.motorImpulse2 < -this.maxMotorImpulse2 && (this.motorImpulse2 = -this.maxMotorImpulse2), c = this.motorImpulse2 - n), this.enableMotor3 && (m = (a - this.motorSpeed3) * this.dv22, this.motorImpulse3 += m, this.motorImpulse3 > this.maxMotorImpulse3 ? this.motorImpulse3 = this.maxMotorImpulse3 : this.motorImpulse3 < -this.maxMotorImpulse3 && (this.motorImpulse3 = -this.maxMotorImpulse3), m = this.motorImpulse3 - r), h += l * this.kv00 + c * this.k01 + m * this.k02, e += l * this.k10 + c * this.kv11 + m * this.k12, a += l * this.k20 + c * this.k21 + m * this.kv22, h -= this.limitVelocity1 + this.limitImpulse1 * this.cfm1, e -= this.limitVelocity2 + this.limitImpulse2 * this.cfm2, a -= this.limitVelocity3 + this.limitImpulse3 * this.cfm3;
            var p = this.limitImpulse1,
                u = this.limitImpulse2,
                y = this.limitImpulse3,
                x = h * this.d00 + e * this.d01 + a * this.d02,
                d = h * this.d10 + e * this.d11 + a * this.d12,
                f = h * this.d20 + e * this.d21 + a * this.d22;
            this.limitImpulse1 += x, this.limitImpulse2 += d, this.limitImpulse3 += f;
            var b, v = 0;
            switch ((2 == this.limitState1 || this.limitImpulse1 * this.limitState1 < 0) && (e += (x = -p) * this.k10, a += x * this.k20, v |= 1), (2 == this.limitState2 || this.limitImpulse2 * this.limitState2 < 0) && (h += (d = -u) * this.k01, a += d * this.k21, v |= 2), (2 == this.limitState3 || this.limitImpulse3 * this.limitState3 < 0) && (h += (f = -y) * this.k02, e += f * this.k12, v |= 4), v) {
                case 1:
                    b = 1 / (this.k11 * this.k22 - this.k12 * this.k21), d = (this.k22 * e + -this.k12 * a) * b, f = (-this.k21 * e + this.k11 * a) * b;
                    break;
                case 2:
                    b = 1 / (this.k00 * this.k22 - this.k02 * this.k20), x = (this.k22 * h + -this.k02 * a) * b, f = (-this.k20 * h + this.k00 * a) * b;
                    break;
                case 3:
                    f = a / this.k22;
                    break;
                case 4:
                    b = 1 / (this.k00 * this.k11 - this.k01 * this.k10), x = (this.k11 * h + -this.k01 * e) * b, d = (-this.k10 * h + this.k00 * e) * b;
                    break;
                case 5:
                    d = e / this.k11;
                    break;
                case 6:
                    x = h / this.k00
            }
            this.limitImpulse1 = x + p, this.limitImpulse2 = d + u, this.limitImpulse3 = f + y;
            var z = l + x,
                N = c + d,
                k = m + f;
            this.a1.x += z * this.a1x1 + N * this.a1x2 + k * this.a1x3, this.a1.y += z * this.a1y1 + N * this.a1y2 + k * this.a1y3, this.a1.z += z * this.a1z1 + N * this.a1z2 + k * this.a1z3, this.a2.x -= z * this.a2x1 + N * this.a2x2 + k * this.a2x3, this.a2.y -= z * this.a2y1 + N * this.a2y2 + k * this.a2y3, this.a2.z -= z * this.a2z1 + N * this.a2z2 + k * this.a2z3, t = this.a2.x - this.a1.x, i = this.a2.y - this.a1.y, s = this.a2.z - this.a1.z, e = t * this.ax2 + i * this.ay2 + s * this.az2
        }
    }), H.prototype = Object.assign(Object.create(_.prototype), {
        constructor: H,
        preSolve: function(t, i) {
            this.updateAnchorPoints(), this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, !0), this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, !0), this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, !0), this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, !0), this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize(), this.tan.tangent(this.nor).normalize(), this.bin.crossVectors(this.nor, this.tan);
            var s = g.acosClamp(g.dotVectors(this.an1, this.an2));
            this.tmp.crossVectors(this.an1, this.an2), g.dotVectors(this.nor, this.tmp) < 0 ? this.limitMotor.angle = -s : this.limitMotor.angle = s, this.tmp.crossVectors(this.ax1, this.ax2), this.r3.limitMotor2.angle = g.dotVectors(this.tan, this.tmp), this.r3.limitMotor3.angle = g.dotVectors(this.bin, this.tmp), this.r3.preSolve(t, i), this.lc.preSolve(t, i)
        },
        solve: function() {
            this.r3.solve(), this.lc.solve()
        },
        postSolve: function() {}
    }), Q.prototype = Object.assign(Object.create(_.prototype), {
        constructor: Q,
        preSolve: function(t, i) {
            this.updateAnchorPoints(), this.lc.preSolve(t, i)
        },
        solve: function() {
            this.lc.solve()
        },
        postSolve: function() {}
    }), Object.assign(X.prototype, {
        TranslationalConstraint: !0,
        preSolve: function(t, i) {
            this.ax = this.limitMotor.axis.x, this.ay = this.limitMotor.axis.y, this.az = this.limitMotor.axis.z, this.lowerLimit = this.limitMotor.lowerLimit, this.upperLimit = this.limitMotor.upperLimit, this.motorSpeed = this.limitMotor.motorSpeed, this.maxMotorForce = this.limitMotor.maxMotorForce, this.enableMotor = this.maxMotorForce > 0, this.m1 = this.b1.inverseMass, this.m2 = this.b2.inverseMass;
            var s = this.i1.elements,
                h = this.i2.elements;
            this.i1e00 = s[0], this.i1e01 = s[1], this.i1e02 = s[2], this.i1e10 = s[3], this.i1e11 = s[4], this.i1e12 = s[5], this.i1e20 = s[6], this.i1e21 = s[7], this.i1e22 = s[8], this.i2e00 = h[0], this.i2e01 = h[1], this.i2e02 = h[2], this.i2e10 = h[3], this.i2e11 = h[4], this.i2e12 = h[5], this.i2e20 = h[6], this.i2e21 = h[7], this.i2e22 = h[8];
            var e = this.p2.x - this.p1.x,
                a = this.p2.y - this.p1.y,
                o = this.p2.z - this.p1.z,
                n = e * this.ax + a * this.ay + o * this.az,
                r = this.limitMotor.frequency,
                l = r > 0;
            (l && n > 20 || n < -20) && (l = !1), this.lowerLimit <= this.upperLimit ? (this.lowerLimit == this.upperLimit ? (0 != this.limitState && (this.limitState = 0, this.limitImpulse = 0), this.limitVelocity = this.lowerLimit - n, l || (n = this.lowerLimit)) : n < this.lowerLimit ? (-1 != this.limitState && (this.limitState = -1, this.limitImpulse = 0), this.limitVelocity = this.lowerLimit - n, l || (n = this.lowerLimit)) : n > this.upperLimit ? (1 != this.limitState && (this.limitState = 1, this.limitImpulse = 0), this.limitVelocity = this.upperLimit - n, l || (n = this.upperLimit)) : (this.limitState = 2, this.limitImpulse = 0, this.limitVelocity = 0), l || (this.limitVelocity > .005 ? this.limitVelocity -= .005 : this.limitVelocity < -.005 ? this.limitVelocity += .005 : this.limitVelocity = 0)) : (this.limitState = 2, this.limitImpulse = 0), this.enableMotor && (0 != this.limitState || l) ? this.maxMotorImpulse = this.maxMotorForce * t : (this.motorImpulse = 0, this.maxMotorImpulse = 0);
            var c = n * this.ax,
                m = n * this.ay,
                p = n * this.az,
                u = this.m1 / (this.m1 + this.m2),
                y = 1 - u;
            if (this.r1x = this.r1.x + c * u, this.r1y = this.r1.y + m * u, this.r1z = this.r1.z + p * u, this.r2x = this.r2.x - c * y, this.r2y = this.r2.y - m * y, this.r2z = this.r2.z - p * y, this.t1x = this.r1y * this.az - this.r1z * this.ay, this.t1y = this.r1z * this.ax - this.r1x * this.az, this.t1z = this.r1x * this.ay - this.r1y * this.ax, this.t2x = this.r2y * this.az - this.r2z * this.ay, this.t2y = this.r2z * this.ax - this.r2x * this.az, this.t2z = this.r2x * this.ay - this.r2y * this.ax, this.l1x = this.ax * this.m1, this.l1y = this.ay * this.m1, this.l1z = this.az * this.m1, this.l2x = this.ax * this.m2, this.l2y = this.ay * this.m2, this.l2z = this.az * this.m2, this.a1x = this.t1x * this.i1e00 + this.t1y * this.i1e01 + this.t1z * this.i1e02, this.a1y = this.t1x * this.i1e10 + this.t1y * this.i1e11 + this.t1z * this.i1e12, this.a1z = this.t1x * this.i1e20 + this.t1y * this.i1e21 + this.t1z * this.i1e22, this.a2x = this.t2x * this.i2e00 + this.t2y * this.i2e01 + this.t2z * this.i2e02, this.a2y = this.t2x * this.i2e10 + this.t2y * this.i2e11 + this.t2z * this.i2e12, this.a2z = this.t2x * this.i2e20 + this.t2y * this.i2e21 + this.t2z * this.i2e22, this.motorDenom = this.m1 + this.m2 + this.ax * (this.a1y * this.r1z - this.a1z * this.r1y + this.a2y * this.r2z - this.a2z * this.r2y) + this.ay * (this.a1z * this.r1x - this.a1x * this.r1z + this.a2z * this.r2x - this.a2x * this.r2z) + this.az * (this.a1x * this.r1y - this.a1y * this.r1x + this.a2x * this.r2y - this.a2y * this.r2x), this.invMotorDenom = 1 / this.motorDenom, l && 2 != this.limitState) {
                var x = 6.2831853 * r,
                    d = x * x * t,
                    f = i / (d + 2 * this.limitMotor.dampingRatio * x);
                this.cfm = this.motorDenom * f, this.limitVelocity *= d * f
            } else this.cfm = 0, this.limitVelocity *= .05 * i;
            this.invDenom = 1 / (this.motorDenom + this.cfm);
            var b = this.limitImpulse + this.motorImpulse;
            this.l1.x += b * this.l1x, this.l1.y += b * this.l1y, this.l1.z += b * this.l1z, this.a1.x += b * this.a1x, this.a1.y += b * this.a1y, this.a1.z += b * this.a1z, this.l2.x -= b * this.l2x, this.l2.y -= b * this.l2y, this.l2.z -= b * this.l2z, this.a2.x -= b * this.a2x, this.a2.y -= b * this.a2y, this.a2.z -= b * this.a2z
        },
        solve: function() {
            var t, i, s = this.ax * (this.l2.x - this.l1.x) + this.ay * (this.l2.y - this.l1.y) + this.az * (this.l2.z - this.l1.z) + this.t2x * this.a2.x - this.t1x * this.a1.x + this.t2y * this.a2.y - this.t1y * this.a1.y + this.t2z * this.a2.z - this.t1z * this.a1.z;
            if (this.enableMotor) {
                t = (s - this.motorSpeed) * this.invMotorDenom;
                var h = this.motorImpulse;
                this.motorImpulse += t, this.motorImpulse > this.maxMotorImpulse ? this.motorImpulse = this.maxMotorImpulse : this.motorImpulse < -this.maxMotorImpulse && (this.motorImpulse = -this.maxMotorImpulse), s -= (t = this.motorImpulse - h) * this.motorDenom
            } else t = 0;
            if (2 != this.limitState) {
                i = (s - this.limitVelocity - this.limitImpulse * this.cfm) * this.invDenom;
                var e = this.limitImpulse;
                this.limitImpulse += i, this.limitImpulse * this.limitState < 0 && (this.limitImpulse = 0), i = this.limitImpulse - e
            } else i = 0;
            var a = i + t;
            this.l1.x += a * this.l1x, this.l1.y += a * this.l1y, this.l1.z += a * this.l1z, this.a1.x += a * this.a1x, this.a1.y += a * this.a1y, this.a1.z += a * this.a1z, this.l2.x -= a * this.l2x, this.l2.y -= a * this.l2y, this.l2.z -= a * this.l2z, this.a2.x -= a * this.a2x, this.a2.y -= a * this.a2y, this.a2.z -= a * this.a2z
        }
    }), Y.prototype = Object.assign(Object.create(_.prototype), {
        constructor: Y,
        preSolve: function(t, i) {
            this.updateAnchorPoints(), this.nor.sub(this.anchorPoint2, this.anchorPoint1).normalize(), this.t.preSolve(t, i)
        },
        solve: function() {
            this.t.solve()
        },
        postSolve: function() {}
    }), Object.assign(Z.prototype, {
        AngularConstraint: !0,
        preSolve: function(t, i) {
            var s, h, e;
            this.ii1 = this.i1.clone(), this.ii2 = this.i2.clone(), s = 1 / ((e = (new P).add(this.ii1, this.ii2).elements)[0] * (e[4] * e[8] - e[7] * e[5]) + e[3] * (e[7] * e[2] - e[1] * e[8]) + e[6] * (e[1] * e[5] - e[4] * e[2])), this.dd = (new P).set(e[4] * e[8] - e[5] * e[7], e[2] * e[7] - e[1] * e[8], e[1] * e[5] - e[2] * e[4], e[5] * e[6] - e[3] * e[8], e[0] * e[8] - e[2] * e[6], e[2] * e[3] - e[0] * e[5], e[3] * e[7] - e[4] * e[6], e[1] * e[6] - e[0] * e[7], e[0] * e[4] - e[1] * e[3]).multiplyScalar(s), this.relativeOrientation.invert(this.b1.orientation).multiply(this.targetOrientation).multiply(this.b2.orientation), s = 2 * this.relativeOrientation.w, this.vel.copy(this.relativeOrientation).multiplyScalar(s), (h = this.vel.length()) > .02 ? (h = (.02 - h) / h * i * .05, this.vel.multiplyScalar(h)) : this.vel.set(0, 0, 0), this.rn1.copy(this.imp).applyMatrix3(this.ii1, !0), this.rn2.copy(this.imp).applyMatrix3(this.ii2, !0), this.a1.add(this.rn1), this.a2.sub(this.rn2)
        },
        solve: function() {
            var t = this.a2.clone().sub(this.a1).sub(this.vel);
            this.rn0.copy(t).applyMatrix3(this.dd, !0), this.rn1.copy(this.rn0).applyMatrix3(this.ii1, !0), this.rn2.copy(this.rn0).applyMatrix3(this.ii2, !0), this.imp.add(this.rn0), this.a1.add(this.rn1), this.a2.sub(this.rn2)
        }
    }), Object.assign(K.prototype, {
        Translational3Constraint: !0,
        preSolve: function(t, i) {
            this.ax1 = this.limitMotor1.axis.x, this.ay1 = this.limitMotor1.axis.y, this.az1 = this.limitMotor1.axis.z, this.ax2 = this.limitMotor2.axis.x, this.ay2 = this.limitMotor2.axis.y, this.az2 = this.limitMotor2.axis.z, this.ax3 = this.limitMotor3.axis.x, this.ay3 = this.limitMotor3.axis.y, this.az3 = this.limitMotor3.axis.z, this.lowerLimit1 = this.limitMotor1.lowerLimit, this.upperLimit1 = this.limitMotor1.upperLimit, this.motorSpeed1 = this.limitMotor1.motorSpeed, this.maxMotorForce1 = this.limitMotor1.maxMotorForce, this.enableMotor1 = this.maxMotorForce1 > 0, this.lowerLimit2 = this.limitMotor2.lowerLimit, this.upperLimit2 = this.limitMotor2.upperLimit, this.motorSpeed2 = this.limitMotor2.motorSpeed, this.maxMotorForce2 = this.limitMotor2.maxMotorForce, this.enableMotor2 = this.maxMotorForce2 > 0, this.lowerLimit3 = this.limitMotor3.lowerLimit, this.upperLimit3 = this.limitMotor3.upperLimit, this.motorSpeed3 = this.limitMotor3.motorSpeed, this.maxMotorForce3 = this.limitMotor3.maxMotorForce, this.enableMotor3 = this.maxMotorForce3 > 0, this.m1 = this.b1.inverseMass, this.m2 = this.b2.inverseMass;
            var s = this.i1.elements,
                h = this.i2.elements;
            this.i1e00 = s[0], this.i1e01 = s[1], this.i1e02 = s[2], this.i1e10 = s[3], this.i1e11 = s[4], this.i1e12 = s[5], this.i1e20 = s[6], this.i1e21 = s[7], this.i1e22 = s[8], this.i2e00 = h[0], this.i2e01 = h[1], this.i2e02 = h[2], this.i2e10 = h[3], this.i2e11 = h[4], this.i2e12 = h[5], this.i2e20 = h[6], this.i2e21 = h[7], this.i2e22 = h[8];
            var e = this.p2.x - this.p1.x,
                a = this.p2.y - this.p1.y,
                o = this.p2.z - this.p1.z,
                n = e * this.ax1 + a * this.ay1 + o * this.az1,
                r = e * this.ax2 + a * this.ay2 + o * this.az2,
                l = e * this.ax3 + a * this.ay3 + o * this.az3,
                c = this.limitMotor1.frequency,
                m = this.limitMotor2.frequency,
                p = this.limitMotor3.frequency,
                u = c > 0,
                y = m > 0,
                x = p > 0,
                d = this.lowerLimit1 <= this.upperLimit1,
                f = this.lowerLimit2 <= this.upperLimit2,
                b = this.lowerLimit3 <= this.upperLimit3;
            (u && n > 20 || n < -20) && (u = !1), (y && r > 20 || r < -20) && (y = !1), (x && l > 20 || l < -20) && (x = !1), d ? (this.lowerLimit1 == this.upperLimit1 ? (0 != this.limitState1 && (this.limitState1 = 0, this.limitImpulse1 = 0), this.limitVelocity1 = this.lowerLimit1 - n, u || (n = this.lowerLimit1)) : n < this.lowerLimit1 ? (-1 != this.limitState1 && (this.limitState1 = -1, this.limitImpulse1 = 0), this.limitVelocity1 = this.lowerLimit1 - n, u || (n = this.lowerLimit1)) : n > this.upperLimit1 ? (1 != this.limitState1 && (this.limitState1 = 1, this.limitImpulse1 = 0), this.limitVelocity1 = this.upperLimit1 - n, u || (n = this.upperLimit1)) : (this.limitState1 = 2, this.limitImpulse1 = 0, this.limitVelocity1 = 0), u || (this.limitVelocity1 > .005 ? this.limitVelocity1 -= .005 : this.limitVelocity1 < -.005 ? this.limitVelocity1 += .005 : this.limitVelocity1 = 0)) : (this.limitState1 = 2, this.limitImpulse1 = 0), f ? (this.lowerLimit2 == this.upperLimit2 ? (0 != this.limitState2 && (this.limitState2 = 0, this.limitImpulse2 = 0), this.limitVelocity2 = this.lowerLimit2 - r, y || (r = this.lowerLimit2)) : r < this.lowerLimit2 ? (-1 != this.limitState2 && (this.limitState2 = -1, this.limitImpulse2 = 0), this.limitVelocity2 = this.lowerLimit2 - r, y || (r = this.lowerLimit2)) : r > this.upperLimit2 ? (1 != this.limitState2 && (this.limitState2 = 1, this.limitImpulse2 = 0), this.limitVelocity2 = this.upperLimit2 - r, y || (r = this.upperLimit2)) : (this.limitState2 = 2, this.limitImpulse2 = 0, this.limitVelocity2 = 0), y || (this.limitVelocity2 > .005 ? this.limitVelocity2 -= .005 : this.limitVelocity2 < -.005 ? this.limitVelocity2 += .005 : this.limitVelocity2 = 0)) : (this.limitState2 = 2, this.limitImpulse2 = 0), b ? (this.lowerLimit3 == this.upperLimit3 ? (0 != this.limitState3 && (this.limitState3 = 0, this.limitImpulse3 = 0), this.limitVelocity3 = this.lowerLimit3 - l, x || (l = this.lowerLimit3)) : l < this.lowerLimit3 ? (-1 != this.limitState3 && (this.limitState3 = -1, this.limitImpulse3 = 0), this.limitVelocity3 = this.lowerLimit3 - l, x || (l = this.lowerLimit3)) : l > this.upperLimit3 ? (1 != this.limitState3 && (this.limitState3 = 1, this.limitImpulse3 = 0), this.limitVelocity3 = this.upperLimit3 - l, x || (l = this.upperLimit3)) : (this.limitState3 = 2, this.limitImpulse3 = 0, this.limitVelocity3 = 0), x || (this.limitVelocity3 > .005 ? this.limitVelocity3 -= .005 : this.limitVelocity3 < -.005 ? this.limitVelocity3 += .005 : this.limitVelocity3 = 0)) : (this.limitState3 = 2, this.limitImpulse3 = 0), this.enableMotor1 && (0 != this.limitState1 || u) ? this.maxMotorImpulse1 = this.maxMotorForce1 * t : (this.motorImpulse1 = 0, this.maxMotorImpulse1 = 0), this.enableMotor2 && (0 != this.limitState2 || y) ? this.maxMotorImpulse2 = this.maxMotorForce2 * t : (this.motorImpulse2 = 0, this.maxMotorImpulse2 = 0), this.enableMotor3 && (0 != this.limitState3 || x) ? this.maxMotorImpulse3 = this.maxMotorForce3 * t : (this.motorImpulse3 = 0, this.maxMotorImpulse3 = 0);
            var v = n * this.ax1 + r * this.ax2 + l * this.ax2,
                z = n * this.ay1 + r * this.ay2 + l * this.ay2,
                N = n * this.az1 + r * this.az2 + l * this.az2,
                k = this.m2 / (this.m1 + this.m2);
            this.weight >= 0 && (k = this.weight);
            var w = 1 - k;
            this.r1x = this.r1.x + v * k, this.r1y = this.r1.y + z * k, this.r1z = this.r1.z + N * k, this.r2x = this.r2.x - v * w, this.r2y = this.r2.y - z * w, this.r2z = this.r2.z - N * w, this.t1x1 = this.r1y * this.az1 - this.r1z * this.ay1, this.t1y1 = this.r1z * this.ax1 - this.r1x * this.az1, this.t1z1 = this.r1x * this.ay1 - this.r1y * this.ax1, this.t2x1 = this.r2y * this.az1 - this.r2z * this.ay1, this.t2y1 = this.r2z * this.ax1 - this.r2x * this.az1, this.t2z1 = this.r2x * this.ay1 - this.r2y * this.ax1, this.l1x1 = this.ax1 * this.m1, this.l1y1 = this.ay1 * this.m1, this.l1z1 = this.az1 * this.m1, this.l2x1 = this.ax1 * this.m2, this.l2y1 = this.ay1 * this.m2, this.l2z1 = this.az1 * this.m2, this.a1x1 = this.t1x1 * this.i1e00 + this.t1y1 * this.i1e01 + this.t1z1 * this.i1e02, this.a1y1 = this.t1x1 * this.i1e10 + this.t1y1 * this.i1e11 + this.t1z1 * this.i1e12, this.a1z1 = this.t1x1 * this.i1e20 + this.t1y1 * this.i1e21 + this.t1z1 * this.i1e22, this.a2x1 = this.t2x1 * this.i2e00 + this.t2y1 * this.i2e01 + this.t2z1 * this.i2e02, this.a2y1 = this.t2x1 * this.i2e10 + this.t2y1 * this.i2e11 + this.t2z1 * this.i2e12, this.a2z1 = this.t2x1 * this.i2e20 + this.t2y1 * this.i2e21 + this.t2z1 * this.i2e22, this.t1x2 = this.r1y * this.az2 - this.r1z * this.ay2, this.t1y2 = this.r1z * this.ax2 - this.r1x * this.az2, this.t1z2 = this.r1x * this.ay2 - this.r1y * this.ax2, this.t2x2 = this.r2y * this.az2 - this.r2z * this.ay2, this.t2y2 = this.r2z * this.ax2 - this.r2x * this.az2, this.t2z2 = this.r2x * this.ay2 - this.r2y * this.ax2, this.l1x2 = this.ax2 * this.m1, this.l1y2 = this.ay2 * this.m1, this.l1z2 = this.az2 * this.m1, this.l2x2 = this.ax2 * this.m2, this.l2y2 = this.ay2 * this.m2, this.l2z2 = this.az2 * this.m2, this.a1x2 = this.t1x2 * this.i1e00 + this.t1y2 * this.i1e01 + this.t1z2 * this.i1e02, this.a1y2 = this.t1x2 * this.i1e10 + this.t1y2 * this.i1e11 + this.t1z2 * this.i1e12, this.a1z2 = this.t1x2 * this.i1e20 + this.t1y2 * this.i1e21 + this.t1z2 * this.i1e22, this.a2x2 = this.t2x2 * this.i2e00 + this.t2y2 * this.i2e01 + this.t2z2 * this.i2e02, this.a2y2 = this.t2x2 * this.i2e10 + this.t2y2 * this.i2e11 + this.t2z2 * this.i2e12, this.a2z2 = this.t2x2 * this.i2e20 + this.t2y2 * this.i2e21 + this.t2z2 * this.i2e22, this.t1x3 = this.r1y * this.az3 - this.r1z * this.ay3, this.t1y3 = this.r1z * this.ax3 - this.r1x * this.az3, this.t1z3 = this.r1x * this.ay3 - this.r1y * this.ax3, this.t2x3 = this.r2y * this.az3 - this.r2z * this.ay3, this.t2y3 = this.r2z * this.ax3 - this.r2x * this.az3, this.t2z3 = this.r2x * this.ay3 - this.r2y * this.ax3, this.l1x3 = this.ax3 * this.m1, this.l1y3 = this.ay3 * this.m1, this.l1z3 = this.az3 * this.m1, this.l2x3 = this.ax3 * this.m2, this.l2y3 = this.ay3 * this.m2, this.l2z3 = this.az3 * this.m2, this.a1x3 = this.t1x3 * this.i1e00 + this.t1y3 * this.i1e01 + this.t1z3 * this.i1e02, this.a1y3 = this.t1x3 * this.i1e10 + this.t1y3 * this.i1e11 + this.t1z3 * this.i1e12, this.a1z3 = this.t1x3 * this.i1e20 + this.t1y3 * this.i1e21 + this.t1z3 * this.i1e22, this.a2x3 = this.t2x3 * this.i2e00 + this.t2y3 * this.i2e01 + this.t2z3 * this.i2e02, this.a2y3 = this.t2x3 * this.i2e10 + this.t2y3 * this.i2e11 + this.t2z3 * this.i2e12, this.a2z3 = this.t2x3 * this.i2e20 + this.t2y3 * this.i2e21 + this.t2z3 * this.i2e22;
            var M = this.m1 + this.m2;
            if (this.k00 = (this.ax1 * this.ax1 + this.ay1 * this.ay1 + this.az1 * this.az1) * M, this.k01 = (this.ax1 * this.ax2 + this.ay1 * this.ay2 + this.az1 * this.az2) * M, this.k02 = (this.ax1 * this.ax3 + this.ay1 * this.ay3 + this.az1 * this.az3) * M, this.k10 = (this.ax2 * this.ax1 + this.ay2 * this.ay1 + this.az2 * this.az1) * M, this.k11 = (this.ax2 * this.ax2 + this.ay2 * this.ay2 + this.az2 * this.az2) * M, this.k12 = (this.ax2 * this.ax3 + this.ay2 * this.ay3 + this.az2 * this.az3) * M, this.k20 = (this.ax3 * this.ax1 + this.ay3 * this.ay1 + this.az3 * this.az1) * M, this.k21 = (this.ax3 * this.ax2 + this.ay3 * this.ay2 + this.az3 * this.az2) * M, this.k22 = (this.ax3 * this.ax3 + this.ay3 * this.ay3 + this.az3 * this.az3) * M, this.k00 += this.t1x1 * this.a1x1 + this.t1y1 * this.a1y1 + this.t1z1 * this.a1z1, this.k01 += this.t1x1 * this.a1x2 + this.t1y1 * this.a1y2 + this.t1z1 * this.a1z2, this.k02 += this.t1x1 * this.a1x3 + this.t1y1 * this.a1y3 + this.t1z1 * this.a1z3, this.k10 += this.t1x2 * this.a1x1 + this.t1y2 * this.a1y1 + this.t1z2 * this.a1z1, this.k11 += this.t1x2 * this.a1x2 + this.t1y2 * this.a1y2 + this.t1z2 * this.a1z2, this.k12 += this.t1x2 * this.a1x3 + this.t1y2 * this.a1y3 + this.t1z2 * this.a1z3, this.k20 += this.t1x3 * this.a1x1 + this.t1y3 * this.a1y1 + this.t1z3 * this.a1z1, this.k21 += this.t1x3 * this.a1x2 + this.t1y3 * this.a1y2 + this.t1z3 * this.a1z2, this.k22 += this.t1x3 * this.a1x3 + this.t1y3 * this.a1y3 + this.t1z3 * this.a1z3, this.k00 += this.t2x1 * this.a2x1 + this.t2y1 * this.a2y1 + this.t2z1 * this.a2z1, this.k01 += this.t2x1 * this.a2x2 + this.t2y1 * this.a2y2 + this.t2z1 * this.a2z2, this.k02 += this.t2x1 * this.a2x3 + this.t2y1 * this.a2y3 + this.t2z1 * this.a2z3, this.k10 += this.t2x2 * this.a2x1 + this.t2y2 * this.a2y1 + this.t2z2 * this.a2z1, this.k11 += this.t2x2 * this.a2x2 + this.t2y2 * this.a2y2 + this.t2z2 * this.a2z2, this.k12 += this.t2x2 * this.a2x3 + this.t2y2 * this.a2y3 + this.t2z2 * this.a2z3, this.k20 += this.t2x3 * this.a2x1 + this.t2y3 * this.a2y1 + this.t2z3 * this.a2z1, this.k21 += this.t2x3 * this.a2x2 + this.t2y3 * this.a2y2 + this.t2z3 * this.a2z2, this.k22 += this.t2x3 * this.a2x3 + this.t2y3 * this.a2y3 + this.t2z3 * this.a2z3, this.kv00 = this.k00, this.kv11 = this.k11, this.kv22 = this.k22, this.dv00 = 1 / this.kv00, this.dv11 = 1 / this.kv11, this.dv22 = 1 / this.kv22, u && 2 != this.limitState1) {
                var g = 6.2831853 * c,
                    I = g * g * t,
                    V = i / (I + 2 * this.limitMotor1.dampingRatio * g);
                this.cfm1 = this.kv00 * V, this.limitVelocity1 *= I * V
            } else this.cfm1 = 0, this.limitVelocity1 *= .05 * i;
            y && 2 != this.limitState2 ? (V = i / ((I = (g = 6.2831853 * m) * g * t) + 2 * this.limitMotor2.dampingRatio * g), this.cfm2 = this.kv11 * V, this.limitVelocity2 *= I * V) : (this.cfm2 = 0, this.limitVelocity2 *= .05 * i), x && 2 != this.limitState3 ? (V = i / ((I = (g = 6.2831853 * p) * g * t) + 2 * this.limitMotor3.dampingRatio * g), this.cfm3 = this.kv22 * V, this.limitVelocity3 *= I * V) : (this.cfm3 = 0, this.limitVelocity3 *= .05 * i), this.k00 += this.cfm1, this.k11 += this.cfm2, this.k22 += this.cfm3;
            var L = 1 / (this.k00 * (this.k11 * this.k22 - this.k21 * this.k12) + this.k10 * (this.k21 * this.k02 - this.k01 * this.k22) + this.k20 * (this.k01 * this.k12 - this.k11 * this.k02));
            this.d00 = (this.k11 * this.k22 - this.k12 * this.k21) * L, this.d01 = (this.k02 * this.k21 - this.k01 * this.k22) * L, this.d02 = (this.k01 * this.k12 - this.k02 * this.k11) * L, this.d10 = (this.k12 * this.k20 - this.k10 * this.k22) * L, this.d11 = (this.k00 * this.k22 - this.k02 * this.k20) * L, this.d12 = (this.k02 * this.k10 - this.k00 * this.k12) * L, this.d20 = (this.k10 * this.k21 - this.k11 * this.k20) * L, this.d21 = (this.k01 * this.k20 - this.k00 * this.k21) * L, this.d22 = (this.k00 * this.k11 - this.k01 * this.k10) * L;
            var S = this.limitImpulse1 + this.motorImpulse1,
                P = this.limitImpulse2 + this.motorImpulse2,
                T = this.limitImpulse3 + this.motorImpulse3;
            this.l1.x += S * this.l1x1 + P * this.l1x2 + T * this.l1x3, this.l1.y += S * this.l1y1 + P * this.l1y2 + T * this.l1y3, this.l1.z += S * this.l1z1 + P * this.l1z2 + T * this.l1z3, this.a1.x += S * this.a1x1 + P * this.a1x2 + T * this.a1x3, this.a1.y += S * this.a1y1 + P * this.a1y2 + T * this.a1y3, this.a1.z += S * this.a1z1 + P * this.a1z2 + T * this.a1z3, this.l2.x -= S * this.l2x1 + P * this.l2x2 + T * this.l2x3, this.l2.y -= S * this.l2y1 + P * this.l2y2 + T * this.l2y3, this.l2.z -= S * this.l2z1 + P * this.l2z2 + T * this.l2z3, this.a2.x -= S * this.a2x1 + P * this.a2x2 + T * this.a2x3, this.a2.y -= S * this.a2y1 + P * this.a2y2 + T * this.a2y3, this.a2.z -= S * this.a2z1 + P * this.a2z2 + T * this.a2z3
        },
        solve: function() {
            var t = this.l2.x - this.l1.x + this.a2.y * this.r2z - this.a2.z * this.r2y - this.a1.y * this.r1z + this.a1.z * this.r1y,
                i = this.l2.y - this.l1.y + this.a2.z * this.r2x - this.a2.x * this.r2z - this.a1.z * this.r1x + this.a1.x * this.r1z,
                s = this.l2.z - this.l1.z + this.a2.x * this.r2y - this.a2.y * this.r2x - this.a1.x * this.r1y + this.a1.y * this.r1x,
                h = t * this.ax1 + i * this.ay1 + s * this.az1,
                e = t * this.ax2 + i * this.ay2 + s * this.az2,
                a = t * this.ax3 + i * this.ay3 + s * this.az3,
                o = this.motorImpulse1,
                n = this.motorImpulse2,
                r = this.motorImpulse3,
                l = 0,
                c = 0,
                m = 0;
            this.enableMotor1 && (l = (h - this.motorSpeed1) * this.dv00, this.motorImpulse1 += l, this.motorImpulse1 > this.maxMotorImpulse1 ? this.motorImpulse1 = this.maxMotorImpulse1 : this.motorImpulse1 < -this.maxMotorImpulse1 && (this.motorImpulse1 = -this.maxMotorImpulse1), l = this.motorImpulse1 - o), this.enableMotor2 && (c = (e - this.motorSpeed2) * this.dv11, this.motorImpulse2 += c, this.motorImpulse2 > this.maxMotorImpulse2 ? this.motorImpulse2 = this.maxMotorImpulse2 : this.motorImpulse2 < -this.maxMotorImpulse2 && (this.motorImpulse2 = -this.maxMotorImpulse2), c = this.motorImpulse2 - n), this.enableMotor3 && (m = (a - this.motorSpeed3) * this.dv22, this.motorImpulse3 += m, this.motorImpulse3 > this.maxMotorImpulse3 ? this.motorImpulse3 = this.maxMotorImpulse3 : this.motorImpulse3 < -this.maxMotorImpulse3 && (this.motorImpulse3 = -this.maxMotorImpulse3), m = this.motorImpulse3 - r), h += l * this.kv00 + c * this.k01 + m * this.k02, e += l * this.k10 + c * this.kv11 + m * this.k12, a += l * this.k20 + c * this.k21 + m * this.kv22, h -= this.limitVelocity1 + this.limitImpulse1 * this.cfm1, e -= this.limitVelocity2 + this.limitImpulse2 * this.cfm2, a -= this.limitVelocity3 + this.limitImpulse3 * this.cfm3;
            var p = this.limitImpulse1,
                u = this.limitImpulse2,
                y = this.limitImpulse3,
                x = h * this.d00 + e * this.d01 + a * this.d02,
                d = h * this.d10 + e * this.d11 + a * this.d12,
                f = h * this.d20 + e * this.d21 + a * this.d22;
            this.limitImpulse1 += x, this.limitImpulse2 += d, this.limitImpulse3 += f;
            var b, v = 0;
            switch ((2 == this.limitState1 || this.limitImpulse1 * this.limitState1 < 0) && (e += (x = -p) * this.k10, a += x * this.k20, v |= 1), (2 == this.limitState2 || this.limitImpulse2 * this.limitState2 < 0) && (h += (d = -u) * this.k01, a += d * this.k21, v |= 2), (2 == this.limitState3 || this.limitImpulse3 * this.limitState3 < 0) && (h += (f = -y) * this.k02, e += f * this.k12, v |= 4), v) {
                case 1:
                    b = 1 / (this.k11 * this.k22 - this.k12 * this.k21), d = (this.k22 * e + -this.k12 * a) * b, f = (-this.k21 * e + this.k11 * a) * b;
                    break;
                case 2:
                    b = 1 / (this.k00 * this.k22 - this.k02 * this.k20), x = (this.k22 * h + -this.k02 * a) * b, f = (-this.k20 * h + this.k00 * a) * b;
                    break;
                case 3:
                    f = a / this.k22;
                    break;
                case 4:
                    b = 1 / (this.k00 * this.k11 - this.k01 * this.k10), x = (this.k11 * h + -this.k01 * e) * b, d = (-this.k10 * h + this.k00 * e) * b;
                    break;
                case 5:
                    d = e / this.k11;
                    break;
                case 6:
                    x = h / this.k00
            }
            this.limitImpulse1 = p + x, this.limitImpulse2 = u + d, this.limitImpulse3 = y + f;
            var z = l + x,
                N = c + d,
                k = m + f;
            this.l1.x += z * this.l1x1 + N * this.l1x2 + k * this.l1x3, this.l1.y += z * this.l1y1 + N * this.l1y2 + k * this.l1y3, this.l1.z += z * this.l1z1 + N * this.l1z2 + k * this.l1z3, this.a1.x += z * this.a1x1 + N * this.a1x2 + k * this.a1x3, this.a1.y += z * this.a1y1 + N * this.a1y2 + k * this.a1y3, this.a1.z += z * this.a1z1 + N * this.a1z2 + k * this.a1z3, this.l2.x -= z * this.l2x1 + N * this.l2x2 + k * this.l2x3, this.l2.y -= z * this.l2y1 + N * this.l2y2 + k * this.l2y3, this.l2.z -= z * this.l2z1 + N * this.l2z2 + k * this.l2z3, this.a2.x -= z * this.a2x1 + N * this.a2x2 + k * this.a2x3, this.a2.y -= z * this.a2y1 + N * this.a2y2 + k * this.a2y3, this.a2.z -= z * this.a2z1 + N * this.a2z2 + k * this.a2z3
        }
    }), G.prototype = Object.assign(Object.create(_.prototype), {
        constructor: G,
        preSolve: function(t, i) {
            this.updateAnchorPoints(), this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, !0), this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, !0), this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize(), this.tan.tangent(this.nor).normalize(), this.bin.crossVectors(this.nor, this.tan), this.ac.preSolve(t, i), this.t3.preSolve(t, i)
        },
        solve: function() {
            this.ac.solve(), this.t3.solve()
        },
        postSolve: function() {}
    }), $.prototype = Object.assign(Object.create(_.prototype), {
        constructor: $,
        preSolve: function(t, i) {
            this.updateAnchorPoints(), this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, !0), this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, !0), this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, !0), this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, !0), this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize(), this.tan.tangent(this.nor).normalize(), this.bin.crossVectors(this.nor, this.tan), this.tmp.crossVectors(this.an1, this.an2);
            var s = g.acosClamp(g.dotVectors(this.an1, this.an2));
            g.dotVectors(this.nor, this.tmp) < 0 ? this.rotationalLimitMotor.angle = -s : this.rotationalLimitMotor.angle = s, this.tmp.crossVectors(this.ax1, this.ax2), this.r3.limitMotor2.angle = g.dotVectors(this.tan, this.tmp), this.r3.limitMotor3.angle = g.dotVectors(this.bin, this.tmp), this.r3.preSolve(t, i), this.t3.preSolve(t, i)
        },
        solve: function() {
            this.r3.solve(), this.t3.solve()
        },
        postSolve: function() {}
    }), tt.prototype = Object.assign(Object.create(_.prototype), {
        constructor: tt,
        preSolve: function(t, i) {
            this.updateAnchorPoints(), this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, !0), this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, !0), this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, !0), this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, !0), this.r3.limitMotor1.angle = g.dotVectors(this.ax1, this.ax2);
            var s = g.dotVectors(this.an1, this.ax2);
            g.dotVectors(this.ax1, this.tmp.crossVectors(this.an1, this.ax2)) < 0 ? this.rotationalLimitMotor1.angle = -s : this.rotationalLimitMotor1.angle = s, s = g.dotVectors(this.an2, this.ax1), g.dotVectors(this.ax2, this.tmp.crossVectors(this.an2, this.ax1)) < 0 ? this.rotationalLimitMotor2.angle = -s : this.rotationalLimitMotor2.angle = s, this.nor.crossVectors(this.ax1, this.ax2).normalize(), this.tan.crossVectors(this.nor, this.ax2).normalize(), this.bin.crossVectors(this.nor, this.ax1).normalize(), this.r3.preSolve(t, i), this.t3.preSolve(t, i)
        },
        solve: function() {
            this.r3.solve(), this.t3.solve()
        },
        postSolve: function() {}
    }), ot.prototype = {
        constructor: ot,
        reset: function(t, i) {
            this.body1 = t.parent, this.body2 = i.parent, this.numPoints = 0
        },
        addPointVec: function(t, i, s, h) {
            var e = this.points[this.numPoints++];
            e.position.copy(t), e.localPoint1.sub(t, this.body1.position).applyMatrix3(this.body1.rotation), e.localPoint2.sub(t, this.body2.position).applyMatrix3(this.body2.rotation), e.normal.copy(i), h && e.normal.negate(), e.normalImpulse = 0, e.penetration = s, e.warmStarted = !1
        },
        addPoint: function(t, i, s, h, e, a, o, n) {
            var r = this.points[this.numPoints++];
            r.position.set(t, i, s), r.localPoint1.sub(r.position, this.body1.position).applyMatrix3(this.body1.rotation), r.localPoint2.sub(r.position, this.body2.position).applyMatrix3(this.body2.rotation), r.normalImpulse = 0, r.normal.set(h, e, a), n && r.normal.negate(), r.penetration = o, r.warmStarted = !1
        }
    }, rt.prototype = Object.assign(Object.create(U.prototype), {
        constructor: rt,
        attach: function() {
            this.p1 = this.body1.position, this.p2 = this.body2.position, this.lv1 = this.body1.linearVelocity, this.av1 = this.body1.angularVelocity, this.lv2 = this.body2.linearVelocity, this.av2 = this.body2.angularVelocity, this.i1 = this.body1.inverseInertia, this.i2 = this.body2.inverseInertia
        },
        detach: function() {
            this.p1 = null, this.p2 = null, this.lv1 = null, this.lv2 = null, this.av1 = null, this.av2 = null, this.i1 = null, this.i2 = null
        },
        preSolve: function(t, i) {
            this.m1 = this.body1.inverseMass, this.m2 = this.body2.inverseMass;
            var s = this.m1 + this.m2;
            this.num = this.manifold.numPoints;
            for (var h, e, a, o, n, r, l, c = this.cs, m = 0; m < this.num; m++) h = this.ps[m], this.tmpP1.sub(h.position, this.p1), this.tmpP2.sub(h.position, this.p2), this.tmpC1.crossVectors(this.av1, this.tmpP1), this.tmpC2.crossVectors(this.av2, this.tmpP2), c.norImp = h.normalImpulse, c.tanImp = h.tangentImpulse, c.binImp = h.binormalImpulse, c.nor.copy(h.normal), this.tmp.set(this.lv2.x + this.tmpC2.x - (this.lv1.x + this.tmpC1.x), this.lv2.y + this.tmpC2.y - (this.lv1.y + this.tmpC1.y), this.lv2.z + this.tmpC2.z - (this.lv1.z + this.tmpC1.z)), e = g.dotVectors(c.nor, this.tmp), c.tan.set(this.tmp.x - e * c.nor.x, this.tmp.y - e * c.nor.y, this.tmp.z - e * c.nor.z), g.dotVectors(c.tan, c.tan) <= .04 && c.tan.tangent(c.nor), c.tan.normalize(), c.bin.crossVectors(c.nor, c.tan), c.norU1.scale(c.nor, this.m1), c.norU2.scale(c.nor, this.m2), c.tanU1.scale(c.tan, this.m1), c.tanU2.scale(c.tan, this.m2), c.binU1.scale(c.bin, this.m1), c.binU2.scale(c.bin, this.m2), c.norT1.crossVectors(this.tmpP1, c.nor), c.tanT1.crossVectors(this.tmpP1, c.tan), c.binT1.crossVectors(this.tmpP1, c.bin), c.norT2.crossVectors(this.tmpP2, c.nor), c.tanT2.crossVectors(this.tmpP2, c.tan), c.binT2.crossVectors(this.tmpP2, c.bin), r = this.i1, l = this.i2, c.norTU1.copy(c.norT1).applyMatrix3(r, !0), c.tanTU1.copy(c.tanT1).applyMatrix3(r, !0), c.binTU1.copy(c.binT1).applyMatrix3(r, !0), c.norTU2.copy(c.norT2).applyMatrix3(l, !0), c.tanTU2.copy(c.tanT2).applyMatrix3(l, !0), c.binTU2.copy(c.binT2).applyMatrix3(l, !0), this.tmpC1.crossVectors(c.norTU1, this.tmpP1), this.tmpC2.crossVectors(c.norTU2, this.tmpP2), this.tmp.add(this.tmpC1, this.tmpC2), c.norDen = 1 / (s + g.dotVectors(c.nor, this.tmp)), this.tmpC1.crossVectors(c.tanTU1, this.tmpP1), this.tmpC2.crossVectors(c.tanTU2, this.tmpP2), this.tmp.add(this.tmpC1, this.tmpC2), c.tanDen = 1 / (s + g.dotVectors(c.tan, this.tmp)), this.tmpC1.crossVectors(c.binTU1, this.tmpP1), this.tmpC2.crossVectors(c.binTU2, this.tmpP2), this.tmp.add(this.tmpC1, this.tmpC2), c.binDen = 1 / (s + g.dotVectors(c.bin, this.tmp)), h.warmStarted ? (a = h.normalImpulse, this.lv1.addScaledVector(c.norU1, a), this.av1.addScaledVector(c.norTU1, a), this.lv2.subScaledVector(c.norU2, a), this.av2.subScaledVector(c.norTU2, a), c.norImp = a, c.tanImp = 0, c.binImp = 0, e = 0) : (c.norImp = 0, c.tanImp = 0, c.binImp = 0), e > -1 && (e = 0), (o = this.restitution * -e) < (n = -(h.penetration + .005) * i * .05) && (o = n), c.norTar = o, c.last = m == this.num - 1, c = c.next
        },
        solve: function() {
            var t, i, s, h, e, a, o, n, r;
            this.tmplv1.copy(this.lv1), this.tmplv2.copy(this.lv2), this.tmpav1.copy(this.av1), this.tmpav2.copy(this.av2);
            for (var l = this.cs; e = l.norImp, a = l.tanImp, o = l.binImp, n = -e * this.friction, this.tmp.sub(this.tmplv2, this.tmplv1), t = a, s = o, (r = (a += i = (g.dotVectors(this.tmp, l.tan) + g.dotVectors(this.tmpav2, l.tanT2) - g.dotVectors(this.tmpav1, l.tanT1)) * l.tanDen) * a + (o += h = (g.dotVectors(this.tmp, l.bin) + g.dotVectors(this.tmpav2, l.binT2) - g.dotVectors(this.tmpav1, l.binT1)) * l.binDen) * o) > n * n && (a *= r = n / g.sqrt(r), o *= r), i = a - t, h = o - s, this.tmp.set(l.tanU1.x * i + l.binU1.x * h, l.tanU1.y * i + l.binU1.y * h, l.tanU1.z * i + l.binU1.z * h), this.tmplv1.addEqual(this.tmp), this.tmp.set(l.tanTU1.x * i + l.binTU1.x * h, l.tanTU1.y * i + l.binTU1.y * h, l.tanTU1.z * i + l.binTU1.z * h), this.tmpav1.addEqual(this.tmp), this.tmp.set(l.tanU2.x * i + l.binU2.x * h, l.tanU2.y * i + l.binU2.y * h, l.tanU2.z * i + l.binU2.z * h), this.tmplv2.subEqual(this.tmp), this.tmp.set(l.tanTU2.x * i + l.binTU2.x * h, l.tanTU2.y * i + l.binTU2.y * h, l.tanTU2.z * i + l.binTU2.z * h), this.tmpav2.subEqual(this.tmp), this.tmp.sub(this.tmplv2, this.tmplv1), t = e, (e += i = (g.dotVectors(this.tmp, l.nor) + g.dotVectors(this.tmpav2, l.norT2) - g.dotVectors(this.tmpav1, l.norT1) - l.norTar) * l.norDen) > 0 && (e = 0), i = e - t, this.tmplv1.addScaledVector(l.norU1, i), this.tmpav1.addScaledVector(l.norTU1, i), this.tmplv2.subScaledVector(l.norU2, i), this.tmpav2.subScaledVector(l.norTU2, i), l.norImp = e, l.tanImp = a, l.binImp = o, !l.last;) l = l.next;
            this.lv1.copy(this.tmplv1), this.lv2.copy(this.tmplv2), this.av1.copy(this.tmpav1), this.av2.copy(this.tmpav2)
        },
        postSolve: function() {
            for (var t, i = this.cs, s = this.num; s--;)(t = this.ps[s]).normal.copy(i.nor), t.tangent.copy(i.tan), t.binormal.copy(i.bin), t.normalImpulse = i.norImp, t.tangentImpulse = i.tanImp, t.binormalImpulse = i.binImp, t.normalDenominator = i.norDen, t.tangentDenominator = i.tanDen, t.binormalDenominator = i.binDen, i = i.next
        }
    }), Object.assign(lt.prototype, {
        Contact: !0,
        mixRestitution: function(t, i) {
            return g.sqrt(t * i)
        },
        mixFriction: function(t, i) {
            return g.sqrt(t * i)
        },
        updateManifold: function() {
            this.constraint.restitution = this.mixRestitution(this.shape1.restitution, this.shape2.restitution), this.constraint.friction = this.mixFriction(this.shape1.friction, this.shape2.friction);
            for (var t = this.manifold.numPoints, i = t; i--;) {
                var s = this.buffer[i],
                    h = this.points[i];
                s.lp1X = h.localPoint1.x, s.lp1Y = h.localPoint1.y, s.lp1Z = h.localPoint1.z, s.lp2X = h.localPoint2.x, s.lp2Y = h.localPoint2.y, s.lp2Z = h.localPoint2.z, s.impulse = h.normalImpulse
            }
            this.manifold.numPoints = 0, this.detector.detectCollision(this.shape1, this.shape2, this.manifold);
            var e = this.manifold.numPoints;
            if (0 == e) return this.touching = !1, this.close = !1, void(this.dist = g.INF);
            for ((this.touching || this.dist < .001) && (this.close = !0), this.touching = !0, i = e; i--;) {
                for (var a = (h = this.points[i]).localPoint1.x, o = h.localPoint1.y, n = h.localPoint1.z, r = h.localPoint2.x, l = h.localPoint2.y, c = h.localPoint2.z, m = -1, p = 4e-4, u = t; u--;) {
                    var y = (s = this.buffer[u]).lp1X - a,
                        x = s.lp1Y - o,
                        d = s.lp1Z - n,
                        f = y * y + x * x + d * d,
                        b = (y = s.lp2X - r) * y + (x = s.lp2Y - l) * x + (d = s.lp2Z - c) * d;
                    f < b ? f < p && (p = f, m = u) : b < p && (p = b, m = u), p < this.dist && (this.dist = p)
                }
                if (-1 != m) {
                    var v = this.buffer[m];
                    this.buffer[m] = this.buffer[--t], this.buffer[t] = v, h.normalImpulse = v.impulse, h.warmStarted = !0
                } else h.normalImpulse = 0, h.warmStarted = !1
            }
        },
        attach: function(t, i) {
            this.shape1 = t, this.shape2 = i, this.body1 = t.parent, this.body2 = i.parent, this.manifold.body1 = this.body1, this.manifold.body2 = this.body2, this.constraint.body1 = this.body1, this.constraint.body2 = this.body2, this.constraint.attach(), this.s1Link.shape = i, this.s1Link.body = this.body2, this.s2Link.shape = t, this.s2Link.body = this.body1, null != t.contactLink ? (this.s1Link.next = t.contactLink).prev = this.s1Link : this.s1Link.next = null, t.contactLink = this.s1Link, t.numContacts++, null != i.contactLink ? (this.s2Link.next = i.contactLink).prev = this.s2Link : this.s2Link.next = null, i.contactLink = this.s2Link, i.numContacts++, this.b1Link.shape = i, this.b1Link.body = this.body2, this.b2Link.shape = t, this.b2Link.body = this.body1, null != this.body1.contactLink ? (this.b1Link.next = this.body1.contactLink).prev = this.b1Link : this.b1Link.next = null, this.body1.contactLink = this.b1Link, this.body1.numContacts++, null != this.body2.contactLink ? (this.b2Link.next = this.body2.contactLink).prev = this.b2Link : this.b2Link.next = null, this.body2.contactLink = this.b2Link, this.body2.numContacts++, this.prev = null, this.next = null, this.persisting = !0, this.sleeping = this.body1.sleeping && this.body2.sleeping, this.manifold.numPoints = 0
        },
        detach: function() {
            var t = this.s1Link.prev,
                i = this.s1Link.next;
            null !== t && (t.next = i), null !== i && (i.prev = t), this.shape1.contactLink == this.s1Link && (this.shape1.contactLink = i), this.s1Link.prev = null, this.s1Link.next = null, this.s1Link.shape = null, this.s1Link.body = null, this.shape1.numContacts--, t = this.s2Link.prev, i = this.s2Link.next, null !== t && (t.next = i), null !== i && (i.prev = t), this.shape2.contactLink == this.s2Link && (this.shape2.contactLink = i), this.s2Link.prev = null, this.s2Link.next = null, this.s2Link.shape = null, this.s2Link.body = null, this.shape2.numContacts--, t = this.b1Link.prev, i = this.b1Link.next, null !== t && (t.next = i), null !== i && (i.prev = t), this.body1.contactLink == this.b1Link && (this.body1.contactLink = i), this.b1Link.prev = null, this.b1Link.next = null, this.b1Link.shape = null, this.b1Link.body = null, this.body1.numContacts--, t = this.b2Link.prev, i = this.b2Link.next, null !== t && (t.next = i), null !== i && (i.prev = t), this.body2.contactLink == this.b2Link && (this.body2.contactLink = i), this.b2Link.prev = null, this.b2Link.next = null, this.b2Link.shape = null, this.b2Link.body = null, this.body2.numContacts--, this.manifold.body1 = null, this.manifold.body2 = null, this.constraint.body1 = null, this.constraint.body2 = null, this.constraint.detach(), this.shape1 = null, this.shape2 = null, this.body1 = null, this.body2 = null
        }
    }), Object.assign(ct.prototype, {
        setParent: function(t) {
            this.parent = t, this.scale = this.parent.scale, this.invScale = this.parent.invScale, this.id = this.parent.numRigidBodies, this.name || (this.name = this.id), this.updateMesh()
        },
        addShape: function(t) {
            t.parent && I("RigidBody", "It is not possible that you add a shape which already has an associated body."), null != this.shapes && ((this.shapes.prev = t).next = this.shapes), this.shapes = t, t.parent = this, this.parent && this.parent.addShape(t), this.numShapes++
        },
        removeShape: function(t) {
            var i = t;
            if (i.parent == this) {
                var s = i.prev,
                    h = i.next;
                null != s && (s.next = h), null != h && (h.prev = s), this.shapes == i && (this.shapes = h), i.prev = null, i.next = null, i.parent = null, this.parent && this.parent.removeShape(i), this.numShapes--
            }
        },
        remove: function() {
            this.dispose()
        },
        dispose: function() {
            this.parent.removeRigidBody(this)
        },
        checkContact: function(t) {
            this.parent.checkContact(this.name, t)
        },
        setupMass: function(t, i) {
            var s = void 0 === i || i;
            this.type = t || 2, this.isDynamic = 1 === this.type, this.isStatic = 2 === this.type, this.mass = 0, this.localInertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            for (var h = new P, e = new L, a = this.shapes; null !== a; a = a.next) {
                a.calculateMassInfo(this.massInfo);
                var o = this.massInfo.mass;
                e.addScaledVector(a.relativePosition, o), this.mass += o, this.rotateInertia(a.relativeRotation, this.massInfo.inertia, h), this.localInertia.add(h), this.localInertia.addOffset(o, a.relativePosition)
            }
            if (this.inverseMass = 1 / this.mass, e.scaleEqual(this.inverseMass), s) {
                for (this.position.add(e), a = this.shapes; null !== a; a = a.next) a.relativePosition.subEqual(e);
                this.localInertia.subOffset(this.mass, e)
            }
            this.inverseLocalInertia.invert(this.localInertia), 2 === this.type && (this.inverseMass = 0, this.inverseLocalInertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0)), this.syncShapes(), this.awake()
        },
        awake: function() {
            if (this.allowSleep && this.sleeping) {
                this.sleeping = !1, this.sleepTime = 0;
                for (var t = this.contactLink; null != t;) t.body.sleepTime = 0, t.body.sleeping = !1, t = t.next;
                for (var i = this.jointLink; null != i;) i.body.sleepTime = 0, i.body.sleeping = !1, i = i.next;
                for (var s = this.shapes; null != s; s = s.next) s.updateProxy()
            }
        },
        sleep: function() {
            if (this.allowSleep && !this.sleeping) {
                this.linearVelocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0), this.sleepPosition.copy(this.position), this.sleepOrientation.copy(this.orientation), this.sleepTime = 0, this.sleeping = !0;
                for (var t = this.shapes; null != t; t = t.next) t.updateProxy()
            }
        },
        testWakeUp: function() {
            (this.linearVelocity.testZero() || this.angularVelocity.testZero() || this.position.testDiff(this.sleepPosition) || this.orientation.testDiff(this.sleepOrientation)) && this.awake()
        },
        isLonely: function() {
            return 0 == this.numJoints && 0 == this.numContacts
        },
        updatePosition: function(t) {
            switch (this.type) {
                case 2:
                    this.linearVelocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0), this.controlPos && (this.position.copy(this.newPosition), this.controlPos = !1), this.controlRot && (this.orientation.copy(this.newOrientation), this.controlRot = !1);
                    break;
                case 1:
                    this.isKinematic && (this.linearVelocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0)), this.controlPos && (this.linearVelocity.subVectors(this.newPosition, this.position).multiplyScalar(1 / t), this.controlPos = !1), this.controlRot && (this.angularVelocity.copy(this.getAxis()), this.orientation.copy(this.newOrientation), this.controlRot = !1), this.position.addScaledVector(this.linearVelocity, t), this.orientation.addTime(this.angularVelocity, t), this.updateMesh();
                    break;
                default:
                    I("RigidBody", "Invalid type.")
            }
            this.syncShapes(), this.updateMesh()
        },
        getAxis: function() {
            return new L(0, 1, 0).applyMatrix3(this.inverseLocalInertia, !0).normalize()
        },
        rotateInertia: function(t, i, s) {
            this.tmpInertia.multiplyMatrices(t, i), s.multiplyMatrices(this.tmpInertia, t, !0)
        },
        syncShapes: function() {
            this.rotation.setQuat(this.orientation), this.rotateInertia(this.rotation, this.inverseLocalInertia, this.inverseInertia);
            for (var t = this.shapes; null != t; t = t.next) t.position.copy(t.relativePosition).applyMatrix3(this.rotation, !0).add(this.position), t.rotation.multiplyMatrices(this.rotation, t.relativeRotation), t.updateProxy()
        },
        applyImpulse: function(t, i) {
            this.linearVelocity.addScaledVector(i, this.inverseMass);
            var s = (new L).copy(t).sub(this.position).cross(i).applyMatrix3(this.inverseInertia, !0);
            this.angularVelocity.add(s)
        },
        setPosition: function(t) {
            this.newPosition.copy(t).multiplyScalar(this.invScale), this.controlPos = !0, this.isKinematic || (this.isKinematic = !0)
        },
        setQuaternion: function(t) {
            this.newOrientation.set(t.x, t.y, t.z, t.w), this.controlRot = !0, this.isKinematic || (this.isKinematic = !0)
        },
        setRotation: function(t) {
            this.newOrientation = (new S).setFromEuler(t.x * g.degtorad, t.y * g.degtorad, t.z * g.degtorad), this.controlRot = !0
        },
        resetPosition: function(t, i, s) {
            this.linearVelocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0), this.position.set(t, i, s).multiplyScalar(this.invScale), this.awake()
        },
        resetQuaternion: function(t) {
            this.angularVelocity.set(0, 0, 0), this.orientation = new S(t.x, t.y, t.z, t.w), this.awake()
        },
        resetRotation: function(t, i, s) {
            this.angularVelocity.set(0, 0, 0), this.orientation = (new S).setFromEuler(t * g.degtorad, i * g.degtorad, s * g.degtorad), this.awake()
        },
        getPosition: function() {
            return this.pos
        },
        getQuaternion: function() {
            return this.quaternion
        },
        connectMesh: function(t) {
            this.mesh = t, this.updateMesh()
        },
        updateMesh: function() {
            this.pos.scale(this.position, this.scale), this.quaternion.copy(this.orientation), null !== this.mesh && (this.mesh.position.copy(this.getPosition()), this.mesh.quaternion.copy(this.getQuaternion()))
        }
    }), Object.assign(pt.prototype, {
        BroadPhase: !0,
        createProxy: function(t) {
            I("BroadPhase", "Inheritance error.")
        },
        addProxy: function(t) {
            I("BroadPhase", "Inheritance error.")
        },
        removeProxy: function(t) {
            I("BroadPhase", "Inheritance error.")
        },
        isAvailablePair: function(t, i) {
            var s, h = t.parent,
                e = i.parent;
            if (h == e || !h.isDynamic && !e.isDynamic || 0 == (t.belongsTo & i.collidesWith) || 0 == (i.belongsTo & t.collidesWith)) return !1;
            for (s = h.numJoints < e.numJoints ? h.jointLink : e.jointLink; null !== s;) {
                var a = s.joint;
                if (!a.allowCollision && (a.body1 == h && a.body2 == e || a.body1 == e && a.body2 == h)) return !1;
                s = s.next
            }
            return !0
        },
        detectPairs: function() {
            this.pairs = [], this.numPairs = 0, this.numPairChecks = 0, this.collectPairs()
        },
        collectPairs: function() {},
        addPair: function(t, i) {
            var s = new mt(t, i);
            this.pairs.push(s), this.numPairs++
        }
    });
    var ut = 0;

    function yt(t) {
        this.shape = t, this.aabb = t.aabb
    }

    function xt(t) {
        yt.call(this, t), this.id = ut++
    }

    function dt() {
        pt.call(this), this.types = r, this.proxies = []
    }

    function ft() {
        this.numElements = 0, this.bufferSize = 256, this.elements = [], this.elements.length = this.bufferSize, this.stack = new Float32Array(64)
    }

    function bt(t, i) {
        this.proxy = t, this.pair = null, this.min1 = null, this.max1 = null, this.min2 = null, this.max2 = null, this.max = i, this.value = 0
    }

    function vt(t, i) {
        yt.call(this, i), this.belongsTo = 0, this.max = [], this.min = [], this.sap = t, this.min[0] = new bt(this, !1), this.max[0] = new bt(this, !0), this.min[1] = new bt(this, !1), this.max[1] = new bt(this, !0), this.min[2] = new bt(this, !1), this.max[2] = new bt(this, !0), this.max[0].pair = this.min[0], this.max[1].pair = this.min[1], this.max[2].pair = this.min[2], this.min[0].min1 = this.min[1], this.min[0].max1 = this.max[1], this.min[0].min2 = this.min[2], this.min[0].max2 = this.max[2], this.min[1].min1 = this.min[0], this.min[1].max1 = this.max[0], this.min[1].min2 = this.min[2], this.min[1].max2 = this.max[2], this.min[2].min1 = this.min[0], this.min[2].max1 = this.max[0], this.min[2].min2 = this.min[1], this.min[2].max2 = this.max[1]
    }

    function zt() {
        pt.call(this), this.types = l, this.numElementsD = 0, this.numElementsS = 0, this.axesD = [new ft, new ft, new ft], this.axesS = [new ft, new ft, new ft], this.index1 = 0, this.index2 = 1
    }

    function Nt() {
        this.child1 = null, this.child2 = null, this.parent = null, this.proxy = null, this.height = 0, this.aabb = new T
    }

    function kt() {
        this.root = null, this.freeNodes = [], this.freeNodes.length = 16384, this.numFreeNodes = 0, this.aabb = new T
    }

    function wt(t) {
        yt.call(this, t), this.leaf = new Nt, this.leaf.proxy = this
    }

    function Mt() {
        pt.call(this), this.types = c, this.tree = new kt, this.stack = [], this.leaves = [], this.numLeaves = 0
    }

    function gt() {
        this.flip = !1
    }

    function It() {
        gt.call(this), this.clipVertices1 = new Float32Array(24), this.clipVertices2 = new Float32Array(24), this.used = new Float32Array(8), this.INF = 1 / 0
    }

    function Vt(t) {
        gt.call(this), this.flip = t
    }

    function Lt() {
        gt.call(this)
    }

    function St(t) {
        gt.call(this), this.flip = t
    }

    function Pt(t) {
        gt.call(this), this.flip = t
    }

    function Tt() {
        gt.call(this)
    }

    function At(t) {
        gt.call(this), this.flip = t, this.n = new L, this.p = new L
    }

    function jt(t) {
        gt.call(this), this.flip = t, this.n = new L, this.p = new L, this.dix = new L, this.diy = new L, this.diz = new L, this.cc = new L, this.cc2 = new L
    }

    function Ct(t) {
        switch (t instanceof Object || (t = {}), this.scale = t.worldscale || 1, this.invScale = 1 / this.scale, this.timeStep = t.timestep || .01666, this.timerate = 1e3 * this.timeStep, this.timer = null, this.preLoop = null, this.postLoop = null, this.numIterations = t.iterations || 8, t.broadphase || 2) {
            case 1:
                this.broadPhase = new dt;
                break;
            case 2:
            default:
                this.broadPhase = new zt;
                break;
            case 3:
                this.broadPhase = new Mt
        }
        this.Btypes = ["None", "BruteForce", "Sweep & Prune", "Bounding Volume Tree"], this.broadPhaseType = this.Btypes[t.broadphase || 2], this.performance = null, this.isStat = void 0 !== t.info && t.info, this.isStat && (this.performance = new V(this)), this.enableRandomizer = void 0 === t.random || t.random, this.rigidBodies = null, this.numRigidBodies = 0, this.contacts = null, this.unusedContacts = null, this.numContacts = 0, this.numContactPoints = 0, this.joints = null, this.numJoints = 0, this.numIslands = 0, this.gravity = new L(0, -9.8, 0), void 0 !== t.gravity && this.gravity.fromArray(t.gravity);
        this.detectors = [], this.detectors.length = 5;
        for (var i = 5; i--;) this.detectors[i] = [], this.detectors[i].length = 5;
        this.detectors[u][u] = new Tt, this.detectors[u][y] = new St(!1), this.detectors[y][u] = new St(!0), this.detectors[y][y] = new It, this.detectors[x][x] = new Lt, this.detectors[x][y] = new Vt(!0), this.detectors[y][x] = new Vt(!1), this.detectors[x][u] = new Pt(!0), this.detectors[u][x] = new Pt(!1), this.detectors[d][u] = new At(!0), this.detectors[u][d] = new At(!1), this.detectors[d][y] = new jt(!0), this.detectors[y][d] = new jt(!1), this.randX = 65535, this.randA = 98765, this.randB = 123456789, this.islandRigidBodies = [], this.islandStack = [], this.islandConstraints = []
    }
    Object.assign(yt.prototype, {
        Proxy: !0,
        update: function() {
            I("Proxy", "Inheritance error.")
        }
    }), xt.prototype = Object.assign(Object.create(yt.prototype), {
        constructor: xt,
        update: function() {}
    }), dt.prototype = Object.assign(Object.create(pt.prototype), {
        constructor: dt,
        createProxy: function(t) {
            return new xt(t)
        },
        addProxy: function(t) {
            this.proxies.push(t)
        },
        removeProxy: function(t) {
            var i = this.proxies.indexOf(t);
            i > -1 && this.proxies.splice(i, 1)
        },
        collectPairs: function() {
            var t, i, s, h = 0,
                e = this.proxies,
                a = e.length;
            for (this.numPairChecks = a * (a - 1) >> 1; h < a;)
                for (i = e[h++], t = h + 1; t < a;) s = e[t++], !i.aabb.intersectTest(s.aabb) && this.isAvailablePair(i.shape, s.shape) && this.addPair(i.shape, s.shape)
        }
    }), Object.assign(ft.prototype, {
        SAPAxis: !0,
        addElements: function(t, i) {
            if (this.numElements + 2 >= this.bufferSize) {
                this.bufferSize *= 2;
                for (var s = [], h = this.numElements; h--;) s[h] = this.elements[h]
            }
            this.elements[this.numElements++] = t, this.elements[this.numElements++] = i
        },
        removeElements: function(t, i) {
            for (var s = -1, h = -1, e = 0, a = this.numElements; e < a; e++) {
                var o = this.elements[e];
                if (o == t || o == i) {
                    if (-1 != s) {
                        h = e;
                        break
                    }
                    s = e
                }
            }
            for (e = s + 1, a = h; e < a; e++) this.elements[e - 1] = this.elements[e];
            for (e = h + 1, a = this.numElements; e < a; e++) this.elements[e - 2] = this.elements[e];
            this.elements[--this.numElements] = null, this.elements[--this.numElements] = null
        },
        sort: function() {
            for (var t = 0, i = 1; this.numElements >> i != 0;) i++;
            i = i * this.numElements >> 2, t = 0;
            for (var s = !1, h = this.elements, e = 1, a = this.numElements; e < a; e++) {
                var o = h[e],
                    n = o.value,
                    r = h[e - 1];
                if (r.value > n) {
                    var l = e;
                    do {
                        if (h[l] = r, 0 == --l) break;
                        r = h[l - 1]
                    } while (r.value > n);
                    if (h[l] = o, (t += e - l) > i) {
                        s = !0;
                        break
                    }
                }
            }
            if (s) {
                t = 2;
                var c = this.stack;
                for (c[0] = 0, c[1] = this.numElements - 1; t > 0;) {
                    var m = c[--t],
                        p = c[--t],
                        u = m - p;
                    if (u > 16) {
                        var y = p + g.floor(.5 * u);
                        for (o = h[y], h[y] = h[m], h[m] = o, n = o.value, e = p - 1, l = m;;) {
                            var x, d;
                            do {
                                x = h[++e]
                            } while (x.value < n);
                            do {
                                d = h[--l]
                            } while (n < d.value && l != p);
                            if (e >= l) break;
                            h[e] = d, h[l] = x
                        }
                        h[m] = h[e], h[e] = o, e - p > m - e ? (c[t++] = p, c[t++] = e - 1, c[t++] = e + 1, c[t++] = m) : (c[t++] = e + 1, c[t++] = m, c[t++] = p, c[t++] = e - 1)
                    } else
                        for (e = p + 1; e <= m; e++)
                            if (n = (o = h[e]).value, (r = h[e - 1]).value > n) {
                                l = e;
                                do {
                                    if (h[l] = r, 0 == --l) break;
                                    r = h[l - 1]
                                } while (r.value > n);
                                h[l] = o
                            }
                }
            }
        },
        calculateTestCount: function() {
            for (var t = 1, i = 0, s = 1, h = this.numElements; s < h; s++) this.elements[s].max ? t-- : (i += t, t++);
            return i
        }
    }), vt.prototype = Object.assign(Object.create(yt.prototype), {
        constructor: vt,
        isDynamic: function() {
            var t = this.shape.parent;
            return t.isDynamic && !t.sleeping
        },
        update: function() {
            var t = this.aabb.elements;
            this.min[0].value = t[0], this.min[1].value = t[1], this.min[2].value = t[2], this.max[0].value = t[3], this.max[1].value = t[4], this.max[2].value = t[5], (1 == this.belongsTo && !this.isDynamic() || 2 == this.belongsTo && this.isDynamic()) && (this.sap.removeProxy(this), this.sap.addProxy(this))
        }
    }), zt.prototype = Object.assign(Object.create(pt.prototype), {
        constructor: zt,
        createProxy: function(t) {
            return new vt(this, t)
        },
        addProxy: function(t) {
            var i = t;
            i.isDynamic() ? (this.axesD[0].addElements(i.min[0], i.max[0]), this.axesD[1].addElements(i.min[1], i.max[1]), this.axesD[2].addElements(i.min[2], i.max[2]), i.belongsTo = 1, this.numElementsD += 2) : (this.axesS[0].addElements(i.min[0], i.max[0]), this.axesS[1].addElements(i.min[1], i.max[1]), this.axesS[2].addElements(i.min[2], i.max[2]), i.belongsTo = 2, this.numElementsS += 2)
        },
        removeProxy: function(t) {
            var i = t;
            if (0 != i.belongsTo) {
                switch (i.belongsTo) {
                    case 1:
                        this.axesD[0].removeElements(i.min[0], i.max[0]), this.axesD[1].removeElements(i.min[1], i.max[1]), this.axesD[2].removeElements(i.min[2], i.max[2]), this.numElementsD -= 2;
                        break;
                    case 2:
                        this.axesS[0].removeElements(i.min[0], i.max[0]), this.axesS[1].removeElements(i.min[1], i.max[1]), this.axesS[2].removeElements(i.min[2], i.max[2]), this.numElementsS -= 2
                }
                i.belongsTo = 0
            }
        },
        collectPairs: function() {
            if (0 != this.numElementsD) {
                var t, i, s, h, e = this.axesD[this.index1],
                    a = this.axesD[this.index2];
                e.sort(), a.sort(), e.calculateTestCount() <= a.calculateTestCount() ? ((a = this.axesS[this.index1]).sort(), t = e.elements, i = a.elements) : ((e = this.axesS[this.index2]).sort(), t = a.elements, i = e.elements, this.index1 ^= this.index2, this.index2 ^= this.index1, this.index1 ^= this.index2);
                for (var o = 0, n = 0; o < this.numElementsD;) {
                    var r, l;
                    if (n == this.numElementsS) r = t[o], l = !0, o++;
                    else {
                        var c = t[o],
                            m = i[n];
                        c.value < m.value ? (r = c, l = !0, o++) : (r = m, l = !1, n++)
                    }
                    if (r.max) {
                        var p = r.pair;
                        if (l) {
                            if (p == s) {
                                s = s.pair;
                                continue
                            }
                            r = s
                        } else {
                            if (p == h) {
                                h = h.pair;
                                continue
                            }
                            r = h
                        }
                        for (; r;) {
                            if ((b = r.pair) == p) {
                                r.pair = b.pair;
                                break
                            }
                            r = b
                        }
                    } else {
                        for (var u = r.proxy.shape, y = r.min1.value, x = r.max1.value, d = r.min2.value, f = r.max2.value, b = s; null != b; b = b.pair) {
                            var v = b.proxy.shape;
                            this.numPairChecks++, y > b.max1.value || x < b.min1.value || d > b.max2.value || f < b.min2.value || !this.isAvailablePair(u, v) || this.addPair(u, v)
                        }
                        if (l) {
                            for (b = h; null != b; b = b.pair) v = b.proxy.shape, this.numPairChecks++, y > b.max1.value || x < b.min1.value || d > b.max2.value || f < b.min2.value || !this.isAvailablePair(u, v) || this.addPair(u, v);
                            r.pair = s, s = r
                        } else r.pair = h, h = r
                    }
                }
                this.index2 = 3 ^ (this.index1 | this.index2)
            }
        }
    }), Object.assign(kt.prototype, {
        DBVT: !0,
        moveLeaf: function(t) {
            this.deleteLeaf(t), this.insertLeaf(t)
        },
        insertLeaf: function(t) {
            if (null != this.root) {
                for (var i, s, h = t.aabb, e = this.root; null == e.proxy;) {
                    var a = e.child1,
                        o = e.child2,
                        n = e.aabb,
                        r = a.aabb,
                        l = o.aabb;
                    i = n.surfaceArea(), this.aabb.combine(h, n);
                    var c = 2 * (s = this.aabb.surfaceArea()),
                        m = 2 * (s - i),
                        p = m;
                    this.aabb.combine(h, r), null != a.proxy ? p += this.aabb.surfaceArea() : p += this.aabb.surfaceArea() - r.surfaceArea();
                    var u = m;
                    if (this.aabb.combine(h, l), null != o.proxy ? u += this.aabb.surfaceArea() : u += this.aabb.surfaceArea() - l.surfaceArea(), p < u) {
                        if (c < p) break;
                        e = a
                    } else {
                        if (c < u) break;
                        e = o
                    }
                }
                var y, x = e.parent;
                (y = this.numFreeNodes > 0 ? this.freeNodes[--this.numFreeNodes] : new Nt).parent = x, y.child1 = t, y.child2 = e, y.aabb.combine(t.aabb, e.aabb), y.height = e.height + 1, e.parent = y, t.parent = y, e == this.root ? this.root = y : x.child1 == e ? x.child1 = y : x.child2 = y;
                do {
                    y = this.balance(y), this.fix(y), y = y.parent
                } while (null != y)
            } else this.root = t
        },
        getBalance: function(t) {
            return null != t.proxy ? 0 : t.child1.height - t.child2.height
        },
        deleteLeaf: function(t) {
            if (t != this.root) {
                var i, s = t.parent;
                if (i = s.child1 == t ? s.child2 : s.child1, s == this.root) return this.root = i, void(i.parent = null);
                var h = s.parent;
                i.parent = h, h.child1 == s ? h.child1 = i : h.child2 = i, this.numFreeNodes < 16384 && (this.freeNodes[this.numFreeNodes++] = s);
                do {
                    h = this.balance(h), this.fix(h), h = h.parent
                } while (null != h)
            } else this.root = null
        },
        balance: function(t) {
            var i = t.height;
            if (i < 2) return t;
            var s, h = t.parent,
                e = t.child1,
                a = t.child2,
                o = e.height,
                n = a.height,
                r = o - n;
            if (r > 1) {
                var l = e.child1,
                    c = e.child2,
                    m = l.height,
                    p = c.height;
                return m > p ? (e.child2 = t, t.parent = e, t.child1 = c, c.parent = t, t.aabb.combine(c.aabb, a.aabb), s = p - n, t.height = p - (s & s >> 31) + 1, e.aabb.combine(l.aabb, t.aabb), s = m - i, e.height = m - (s & s >> 31) + 1) : (e.child1 = t, t.parent = e, t.child1 = l, l.parent = t, t.aabb.combine(l.aabb, a.aabb), s = m - n, t.height = m - (s & s >> 31) + 1, e.aabb.combine(t.aabb, c.aabb), s = i - p, e.height = i - (s & s >> 31) + 1), null != h ? h.child1 == t ? h.child1 = e : h.child2 = e : this.root = e, e.parent = h, e
            }
            if (r < -1) {
                var u = a.child1,
                    y = a.child2,
                    x = u.height,
                    d = y.height;
                return x > d ? (a.child2 = t, t.parent = a, t.child2 = y, y.parent = t, t.aabb.combine(e.aabb, y.aabb), s = o - d, t.height = o - (s & s >> 31) + 1, a.aabb.combine(u.aabb, t.aabb), s = x - i, a.height = x - (s & s >> 31) + 1) : (a.child1 = t, t.parent = a, t.child2 = u, u.parent = t, t.aabb.combine(e.aabb, u.aabb), s = o - x, t.height = o - (s & s >> 31) + 1, a.aabb.combine(t.aabb, y.aabb), s = i - d, a.height = i - (s & s >> 31) + 1), null != h ? h.child1 == t ? h.child1 = a : h.child2 = a : this.root = a, a.parent = h, a
            }
            return t
        },
        fix: function(t) {
            var i = t.child1,
                s = t.child2;
            t.aabb.combine(i.aabb, s.aabb), t.height = i.height < s.height ? s.height + 1 : i.height + 1
        }
    }), wt.prototype = Object.assign(Object.create(yt.prototype), {
        constructor: wt,
        update: function() {}
    }), Mt.prototype = Object.assign(Object.create(pt.prototype), {
        constructor: Mt,
        createProxy: function(t) {
            return new wt(t)
        },
        addProxy: function(t) {
            this.tree.insertLeaf(t.leaf), this.leaves.push(t.leaf), this.numLeaves++
        },
        removeProxy: function(t) {
            this.tree.deleteLeaf(t.leaf);
            var i = this.leaves.indexOf(t.leaf);
            i > -1 && (this.leaves.splice(i, 1), this.numLeaves--)
        },
        collectPairs: function() {
            if (!(this.numLeaves < 2))
                for (var t, i = this.numLeaves; i--;)(t = this.leaves[i]).proxy.aabb.intersectTestTwo(t.aabb) && (t.aabb.copy(t.proxy.aabb, .1), this.tree.deleteLeaf(t), this.tree.insertLeaf(t), this.collide(t, this.tree.root))
        },
        collide: function(t, i) {
            var s, h, e, a, o, n, r = 2;
            for (this.stack[0] = t, this.stack[1] = i; r > 0;)
                if (e = this.stack[--r], a = this.stack[--r], o = null != e.proxy, n = null != a.proxy, this.numPairChecks++, o && n) {
                    if ((s = e.proxy.shape) == (h = a.proxy.shape) || s.aabb.intersectTest(h.aabb) || !this.isAvailablePair(s, h)) continue;
                    this.addPair(s, h)
                } else {
                    if (e.aabb.intersectTest(a.aabb)) continue;
                    n || !o && e.aabb.surfaceArea() > a.aabb.surfaceArea() ? (this.stack[r++] = e.child1, this.stack[r++] = a, this.stack[r++] = e.child2, this.stack[r++] = a) : (this.stack[r++] = e, this.stack[r++] = a.child1, this.stack[r++] = e, this.stack[r++] = a.child2)
                }
        }
    }), Object.assign(gt.prototype, {
        CollisionDetector: !0,
        detectCollision: function(t, i, s) {
            I("CollisionDetector", "Inheritance error.")
        }
    }), It.prototype = Object.assign(Object.create(gt.prototype), {
        constructor: It,
        detectCollision: function(t, i, s) {
            var h, e;
            t.id < i.id ? (h = t, e = i) : (h = i, e = t);
            var a, o, n, r, l, c, m, p, u, y, x, d, f, b, v, z, N, k, w, M, I, V, L, S, P, T, A, j, C, O, D, E, B, F, q, U = h.elements,
                R = e.elements,
                _ = h.dimentions,
                J = e.dimentions,
                W = h.position,
                H = e.position,
                Q = W.x,
                X = W.y,
                Y = W.z,
                Z = H.x,
                K = H.y,
                G = H.z,
                $ = Z - Q,
                tt = K - X,
                it = G - Y,
                st = h.halfWidth,
                ht = h.halfHeight,
                et = h.halfDepth,
                at = e.halfWidth,
                ot = e.halfHeight,
                nt = e.halfDepth,
                rt = _[0],
                lt = _[1],
                ct = _[2],
                mt = _[3],
                pt = _[4],
                ut = _[5],
                yt = _[6],
                xt = _[7],
                dt = _[8],
                ft = _[9],
                bt = _[10],
                vt = _[11],
                zt = _[12],
                Nt = _[13],
                kt = _[14],
                wt = _[15],
                Mt = _[16],
                gt = _[17],
                It = J[0],
                Vt = J[1],
                Lt = J[2],
                St = J[3],
                Pt = J[4],
                Tt = J[5],
                At = J[6],
                jt = J[7],
                Ct = J[8],
                Ot = J[9],
                Dt = J[10],
                Et = J[11],
                Bt = J[12],
                Ft = J[13],
                qt = J[14],
                Ut = J[15],
                Rt = J[16],
                _t = J[17],
                Jt = lt * Lt - ct * Vt,
                Wt = ct * It - rt * Lt,
                Ht = rt * Vt - lt * It,
                Qt = lt * Tt - ct * Pt,
                Xt = ct * St - rt * Tt,
                Yt = rt * Pt - lt * St,
                Zt = lt * Ct - ct * jt,
                Kt = ct * At - rt * Ct,
                Gt = rt * jt - lt * At,
                $t = pt * Lt - ut * Vt,
                ti = ut * It - mt * Lt,
                ii = mt * Vt - pt * It,
                si = pt * Tt - ut * Pt,
                hi = ut * St - mt * Tt,
                ei = mt * Pt - pt * St,
                ai = pt * Ct - ut * jt,
                oi = ut * At - mt * Ct,
                ni = mt * jt - pt * At,
                ri = xt * Lt - dt * Vt,
                li = dt * It - yt * Lt,
                ci = yt * Vt - xt * It,
                mi = xt * Tt - dt * Pt,
                pi = dt * St - yt * Tt,
                ui = yt * Pt - xt * St,
                yi = xt * Ct - dt * jt,
                xi = dt * At - yt * Ct,
                di = yt * jt - xt * At,
                fi = !1,
                bi = !1,
                vi = !1,
                zi = !1,
                Ni = !1,
                ki = !1,
                wi = !1,
                Mi = !1,
                gi = !1;
            if ((a = (D = rt * $ + lt * tt + ct * it) > 0) || (D = -D), (B = rt * It + lt * Vt + ct * Lt) < 0 && (B = -B), (F = rt * St + lt * Pt + ct * Tt) < 0 && (F = -F), (q = rt * At + lt * jt + ct * Ct) < 0 && (q = -q), !((z = D - (E = st) - (B * at + F * ot + q * nt)) > 0 || ((o = (D = mt * $ + pt * tt + ut * it) > 0) || (D = -D), (B = mt * It + pt * Vt + ut * Lt) < 0 && (B = -B), (F = mt * St + pt * Pt + ut * Tt) < 0 && (F = -F), (q = mt * At + pt * jt + ut * Ct) < 0 && (q = -q), (N = D - (E = ht) - (B * at + F * ot + q * nt)) > 0 || ((n = (D = yt * $ + xt * tt + dt * it) > 0) || (D = -D), (B = yt * It + xt * Vt + dt * Lt) < 0 && (B = -B), (F = yt * St + xt * Pt + dt * Tt) < 0 && (F = -F), (q = yt * At + xt * jt + dt * Ct) < 0 && (q = -q), (k = D - (E = et) - (B * at + F * ot + q * nt)) > 0 || ((r = (D = It * $ + Vt * tt + Lt * it) > 0) || (D = -D), (B = It * rt + Vt * lt + Lt * ct) < 0 && (B = -B), (F = It * mt + Vt * pt + Lt * ut) < 0 && (F = -F), (q = It * yt + Vt * xt + Lt * dt) < 0 && (q = -q), (w = 1 * (D - (E = B * st + F * ht + q * et) - at)) > 0 || ((l = (D = St * $ + Pt * tt + Tt * it) > 0) || (D = -D), (B = St * rt + Pt * lt + Tt * ct) < 0 && (B = -B), (F = St * mt + Pt * pt + Tt * ut) < 0 && (F = -F), (q = St * yt + Pt * xt + Tt * dt) < 0 && (q = -q), (M = 1 * (D - (E = B * st + F * ht + q * et) - ot)) > 0 || ((c = (D = At * $ + jt * tt + Ct * it) > 0) || (D = -D), (B = At * rt + jt * lt + Ct * ct) < 0 && (B = -B), (F = At * mt + jt * pt + Ct * ut) < 0 && (F = -F), (q = At * yt + jt * xt + Ct * dt) < 0 && (q = -q), (I = 1 * (D - (E = B * st + F * ht + q * et) - nt)) > 0))))))) {
                if ((D = Jt * Jt + Wt * Wt + Ht * Ht) > 1e-5) {
                    if ((m = (D = (Jt *= D = 1 / g.sqrt(D)) * $ + (Wt *= D) * tt + (Ht *= D) * it) > 0) || (D = -D), (B = Jt * mt + Wt * pt + Ht * ut) < 0 && (B = -B), (F = Jt * yt + Wt * xt + Ht * dt) < 0 && (F = -F), E = B * ht + F * et, (B = Jt * St + Wt * Pt + Ht * Tt) < 0 && (B = -B), (F = Jt * At + Wt * jt + Ht * Ct) < 0 && (F = -F), (V = D - E - (B * ot + F * nt)) > 0) return
                } else m = !1, V = 0, fi = !0;
                if ((D = Qt * Qt + Xt * Xt + Yt * Yt) > 1e-5) {
                    if ((p = (D = (Qt *= D = 1 / g.sqrt(D)) * $ + (Xt *= D) * tt + (Yt *= D) * it) > 0) || (D = -D), (B = Qt * mt + Xt * pt + Yt * ut) < 0 && (B = -B), (F = Qt * yt + Xt * xt + Yt * dt) < 0 && (F = -F), E = B * ht + F * et, (B = Qt * It + Xt * Vt + Yt * Lt) < 0 && (B = -B), (F = Qt * At + Xt * jt + Yt * Ct) < 0 && (F = -F), (L = D - E - (B * at + F * nt)) > 0) return
                } else p = !1, L = 0, bi = !0;
                if ((D = Zt * Zt + Kt * Kt + Gt * Gt) > 1e-5) {
                    if ((u = (D = (Zt *= D = 1 / g.sqrt(D)) * $ + (Kt *= D) * tt + (Gt *= D) * it) > 0) || (D = -D), (B = Zt * mt + Kt * pt + Gt * ut) < 0 && (B = -B), (F = Zt * yt + Kt * xt + Gt * dt) < 0 && (F = -F), E = B * ht + F * et, (B = Zt * It + Kt * Vt + Gt * Lt) < 0 && (B = -B), (F = Zt * St + Kt * Pt + Gt * Tt) < 0 && (F = -F), (S = D - E - (B * at + F * ot)) > 0) return
                } else u = !1, S = 0, vi = !0;
                if ((D = $t * $t + ti * ti + ii * ii) > 1e-5) {
                    if ((y = (D = ($t *= D = 1 / g.sqrt(D)) * $ + (ti *= D) * tt + (ii *= D) * it) > 0) || (D = -D), (B = $t * rt + ti * lt + ii * ct) < 0 && (B = -B), (F = $t * yt + ti * xt + ii * dt) < 0 && (F = -F), E = B * st + F * et, (B = $t * St + ti * Pt + ii * Tt) < 0 && (B = -B), (F = $t * At + ti * jt + ii * Ct) < 0 && (F = -F), (P = D - E - (B * ot + F * nt)) > 0) return
                } else y = !1, P = 0, zi = !0;
                if ((D = si * si + hi * hi + ei * ei) > 1e-5) {
                    if ((x = (D = (si *= D = 1 / g.sqrt(D)) * $ + (hi *= D) * tt + (ei *= D) * it) > 0) || (D = -D), (B = si * rt + hi * lt + ei * ct) < 0 && (B = -B), (F = si * yt + hi * xt + ei * dt) < 0 && (F = -F), E = B * st + F * et, (B = si * It + hi * Vt + ei * Lt) < 0 && (B = -B), (F = si * At + hi * jt + ei * Ct) < 0 && (F = -F), (T = D - E - (B * at + F * nt)) > 0) return
                } else x = !1, T = 0, Ni = !0;
                if ((D = ai * ai + oi * oi + ni * ni) > 1e-5) {
                    if ((d = (D = (ai *= D = 1 / g.sqrt(D)) * $ + (oi *= D) * tt + (ni *= D) * it) > 0) || (D = -D), (B = ai * rt + oi * lt + ni * ct) < 0 && (B = -B), (F = ai * yt + oi * xt + ni * dt) < 0 && (F = -F), E = B * st + F * et, (B = ai * It + oi * Vt + ni * Lt) < 0 && (B = -B), (F = ai * St + oi * Pt + ni * Tt) < 0 && (F = -F), (A = D - E - (B * at + F * ot)) > 0) return
                } else d = !1, A = 0, ki = !0;
                if ((D = ri * ri + li * li + ci * ci) > 1e-5) {
                    if ((f = (D = (ri *= D = 1 / g.sqrt(D)) * $ + (li *= D) * tt + (ci *= D) * it) > 0) || (D = -D), (B = ri * rt + li * lt + ci * ct) < 0 && (B = -B), (F = ri * mt + li * pt + ci * ut) < 0 && (F = -F), E = B * st + F * ht, (B = ri * St + li * Pt + ci * Tt) < 0 && (B = -B), (F = ri * At + li * jt + ci * Ct) < 0 && (F = -F), (j = D - E - (B * ot + F * nt)) > 0) return
                } else f = !1, j = 0, wi = !0;
                if ((D = mi * mi + pi * pi + ui * ui) > 1e-5) {
                    if ((b = (D = (mi *= D = 1 / g.sqrt(D)) * $ + (pi *= D) * tt + (ui *= D) * it) > 0) || (D = -D), (B = mi * rt + pi * lt + ui * ct) < 0 && (B = -B), (F = mi * mt + pi * pt + ui * ut) < 0 && (F = -F), E = B * st + F * ht, (B = mi * It + pi * Vt + ui * Lt) < 0 && (B = -B), (F = mi * At + pi * jt + ui * Ct) < 0 && (F = -F), (C = D - E - (B * at + F * nt)) > 0) return
                } else b = !1, C = 0, Mi = !0;
                if ((D = yi * yi + xi * xi + di * di) > 1e-5) {
                    if ((v = (D = (yi *= D = 1 / g.sqrt(D)) * $ + (xi *= D) * tt + (di *= D) * it) > 0) || (D = -D), (B = yi * rt + xi * lt + di * ct) < 0 && (B = -B), (F = yi * mt + xi * pt + di * ut) < 0 && (F = -F), E = B * st + F * ht, (B = yi * It + xi * Vt + di * Lt) < 0 && (B = -B), (F = yi * St + xi * Pt + di * Tt) < 0 && (F = -F), (O = D - E - (B * at + F * ot)) > 0) return
                } else v = !1, O = 0, gi = !0;
                var Ii = z,
                    Vi = z,
                    Li = 0,
                    Si = a;
                N > Vi && (Ii = N, Vi = N, Li = 1, Si = o), k > Vi && (Ii = k, Vi = k, Li = 2, Si = n), w > Vi && (Ii = w, Vi = w, Li = 3, Si = r), M > Vi && (Ii = M, Vi = M, Li = 4, Si = l), I > Vi && (Ii = I, Vi = I, Li = 5, Si = c), V - .01 > Vi && !fi && (Ii = V, Vi = V - .01, Li = 6, Si = m), L - .01 > Vi && !bi && (Ii = L, Vi = L - .01, Li = 7, Si = p), S - .01 > Vi && !vi && (Ii = S, Vi = S - .01, Li = 8, Si = u), P - .01 > Vi && !zi && (Ii = P, Vi = P - .01, Li = 9, Si = y), T - .01 > Vi && !Ni && (Ii = T, Vi = T - .01, Li = 10, Si = x), A - .01 > Vi && !ki && (Ii = A, Vi = A - .01, Li = 11, Si = d), j - .01 > Vi && !wi && (Ii = j, Vi = j - .01, Li = 12, Si = f), C - .01 > Vi && !Mi && (Ii = C, Vi = C - .01, Li = 13, Si = b), O - .01 > Vi && !gi && (Ii = O, Li = 14, Si = v);
                var Pi = 0,
                    Ti = 0,
                    Ai = 0,
                    ji = 0,
                    Ci = 0,
                    Oi = 0,
                    Di = 0,
                    Ei = 0,
                    Bi = 0,
                    Fi = 0,
                    qi = 0,
                    Ui = 0,
                    Ri = 0,
                    _i = 0,
                    Ji = 0,
                    Wi = 0,
                    Hi = 0,
                    Qi = 0,
                    Xi = !1;
                if (0 == Li ? (Si ? (Fi = Q + ft, qi = X + bt, Ui = Y + vt, Pi = rt, Ti = lt, Ai = ct) : (Fi = Q - ft, qi = X - bt, Ui = Y - vt, Pi = -rt, Ti = -lt, Ai = -ct), Ri = zt, _i = Nt, Ji = kt, ji = -mt, Ci = -pt, Oi = -ut, Wi = wt, Hi = Mt, Qi = gt, Di = -yt, Ei = -xt, Bi = -dt) : 1 == Li ? (Si ? (Fi = Q + zt, qi = X + Nt, Ui = Y + kt, Pi = mt, Ti = pt, Ai = ut) : (Fi = Q - zt, qi = X - Nt, Ui = Y - kt, Pi = -mt, Ti = -pt, Ai = -ut), Ri = ft, _i = bt, Ji = vt, ji = -rt, Ci = -lt, Oi = -ct, Wi = wt, Hi = Mt, Qi = gt, Di = -yt, Ei = -xt, Bi = -dt) : 2 == Li ? (Si ? (Fi = Q + wt, qi = X + Mt, Ui = Y + gt, Pi = yt, Ti = xt, Ai = dt) : (Fi = Q - wt, qi = X - Mt, Ui = Y - gt, Pi = -yt, Ti = -xt, Ai = -dt), Ri = ft, _i = bt, Ji = vt, ji = -rt, Ci = -lt, Oi = -ct, Wi = zt, Hi = Nt, Qi = kt, Di = -mt, Ei = -pt, Bi = -ut) : 3 == Li ? (Xi = !0, Si ? (Fi = Z - Ot, qi = K - Dt, Ui = G - Et, Pi = -It, Ti = -Vt, Ai = -Lt) : (Fi = Z + Ot, qi = K + Dt, Ui = G + Et, Pi = It, Ti = Vt, Ai = Lt), Ri = Bt, _i = Ft, Ji = qt, ji = -St, Ci = -Pt, Oi = -Tt, Wi = Ut, Hi = Rt, Qi = _t, Di = -At, Ei = -jt, Bi = -Ct) : 4 == Li ? (Xi = !0, Si ? (Fi = Z - Bt, qi = K - Ft, Ui = G - qt, Pi = -St, Ti = -Pt, Ai = -Tt) : (Fi = Z + Bt, qi = K + Ft, Ui = G + qt, Pi = St, Ti = Pt, Ai = Tt), Ri = Ot, _i = Dt, Ji = Et, ji = -It, Ci = -Vt, Oi = -Lt, Wi = Ut, Hi = Rt, Qi = _t, Di = -At, Ei = -jt, Bi = -Ct) : 5 == Li ? (Xi = !0, Si ? (Fi = Z - Ut, qi = K - Rt, Ui = G - _t, Pi = -At, Ti = -jt, Ai = -Ct) : (Fi = Z + Ut, qi = K + Rt, Ui = G + _t, Pi = At, Ti = jt, Ai = Ct), Ri = Ot, _i = Dt, Ji = Et, ji = -It, Ci = -Vt, Oi = -Lt, Wi = Bt, Hi = Ft, Qi = qt, Di = -St, Ei = -Pt, Bi = -Tt) : 6 == Li ? (Pi = Jt, Ti = Wt, Ai = Ht, ji = rt, Ci = lt, Oi = ct, Di = It, Ei = Vt, Bi = Lt) : 7 == Li ? (Pi = Qt, Ti = Xt, Ai = Yt, ji = rt, Ci = lt, Oi = ct, Di = St, Ei = Pt, Bi = Tt) : 8 == Li ? (Pi = Zt, Ti = Kt, Ai = Gt, ji = rt, Ci = lt, Oi = ct, Di = At, Ei = jt, Bi = Ct) : 9 == Li ? (Pi = $t, Ti = ti, Ai = ii, ji = mt, Ci = pt, Oi = ut, Di = It, Ei = Vt, Bi = Lt) : 10 == Li ? (Pi = si, Ti = hi, Ai = ei, ji = mt, Ci = pt, Oi = ut, Di = St, Ei = Pt, Bi = Tt) : 11 == Li ? (Pi = ai, Ti = oi, Ai = ni, ji = mt, Ci = pt, Oi = ut, Di = At, Ei = jt, Bi = Ct) : 12 == Li ? (Pi = ri, Ti = li, Ai = ci, ji = yt, Ci = xt, Oi = dt, Di = It, Ei = Vt, Bi = Lt) : 13 == Li ? (Pi = mi, Ti = pi, Ai = ui, ji = yt, Ci = xt, Oi = dt, Di = St, Ei = Pt, Bi = Tt) : 14 == Li && (Pi = yi, Ti = xi, Ai = di, ji = yt, Ci = xt, Oi = dt, Di = At, Ei = jt, Bi = Ct), Li > 5) {
                    var Yi, Zi, Ki, Gi, $i, ts, is, ss, hs, es, as;
                    Si || (Pi = -Pi, Ti = -Ti, Ai = -Ai), Zi = Pi * (ts = U[0]) + Ti * (is = U[1]) + Ai * (ss = U[2]), (Yi = Pi * (Ki = U[3]) + Ti * (Gi = U[4]) + Ai * ($i = U[5])) > Zi && (Zi = Yi, ts = Ki, is = Gi, ss = $i), (Yi = Pi * (Ki = U[6]) + Ti * (Gi = U[7]) + Ai * ($i = U[8])) > Zi && (Zi = Yi, ts = Ki, is = Gi, ss = $i), (Yi = Pi * (Ki = U[9]) + Ti * (Gi = U[10]) + Ai * ($i = U[11])) > Zi && (Zi = Yi, ts = Ki, is = Gi, ss = $i), (Yi = Pi * (Ki = U[12]) + Ti * (Gi = U[13]) + Ai * ($i = U[14])) > Zi && (Zi = Yi, ts = Ki, is = Gi, ss = $i), (Yi = Pi * (Ki = U[15]) + Ti * (Gi = U[16]) + Ai * ($i = U[17])) > Zi && (Zi = Yi, ts = Ki, is = Gi, ss = $i), (Yi = Pi * (Ki = U[18]) + Ti * (Gi = U[19]) + Ai * ($i = U[20])) > Zi && (Zi = Yi, ts = Ki, is = Gi, ss = $i), (Yi = Pi * (Ki = U[21]) + Ti * (Gi = U[22]) + Ai * ($i = U[23])) > Zi && (Zi = Yi, ts = Ki, is = Gi, ss = $i), Zi = Pi * (hs = R[0]) + Ti * (es = R[1]) + Ai * (as = R[2]), (Yi = Pi * (Ki = R[3]) + Ti * (Gi = R[4]) + Ai * ($i = R[5])) < Zi && (Zi = Yi, hs = Ki, es = Gi, as = $i), (Yi = Pi * (Ki = R[6]) + Ti * (Gi = R[7]) + Ai * ($i = R[8])) < Zi && (Zi = Yi, hs = Ki, es = Gi, as = $i), (Yi = Pi * (Ki = R[9]) + Ti * (Gi = R[10]) + Ai * ($i = R[11])) < Zi && (Zi = Yi, hs = Ki, es = Gi, as = $i), (Yi = Pi * (Ki = R[12]) + Ti * (Gi = R[13]) + Ai * ($i = R[14])) < Zi && (Zi = Yi, hs = Ki, es = Gi, as = $i), (Yi = Pi * (Ki = R[15]) + Ti * (Gi = R[16]) + Ai * ($i = R[17])) < Zi && (Zi = Yi, hs = Ki, es = Gi, as = $i), (Yi = Pi * (Ki = R[18]) + Ti * (Gi = R[19]) + Ai * ($i = R[20])) < Zi && (Zi = Yi, hs = Ki, es = Gi, as = $i), (Yi = Pi * (Ki = R[21]) + Ti * (Gi = R[22]) + Ai * ($i = R[23])) < Zi && (Zi = Yi, hs = Ki, es = Gi, as = $i);
                    var os = ((Ki = hs - ts) * (ji - Di * (B = ji * Di + Ci * Ei + Oi * Bi)) + (Gi = es - is) * (Ci - Ei * B) + ($i = as - ss) * (Oi - Bi * B)) / (1 - B * B);
                    s.addPoint(ts + ji * os + Pi * Ii * .5, is + Ci * os + Ti * Ii * .5, ss + Oi * os + Ai * Ii * .5, Pi, Ti, Ai, Ii, !1)
                } else {
                    var ns, rs, ls, cs, ms, ps, us, ys, xs, ds, fs, bs, vs, zs, Ns, ks, ws, Ms, gs, Is, Vs, Ls = 1,
                        Ss = 0,
                        Ps = 0;
                    Xi ? ((Ss = rt * Pi + lt * Ti + ct * Ai) < Ls && (Ls = Ss, Ps = 0), -Ss < Ls && (Ls = -Ss, Ps = 1), (Ss = mt * Pi + pt * Ti + ut * Ai) < Ls && (Ls = Ss, Ps = 2), -Ss < Ls && (Ls = -Ss, Ps = 3), (Ss = yt * Pi + xt * Ti + dt * Ai) < Ls && (Ls = Ss, Ps = 4), -Ss < Ls && (Ls = -Ss, Ps = 5), 0 == Ps ? (ns = U[0], rs = U[1], ls = U[2], cs = U[6], ms = U[7], ps = U[8], us = U[9], ys = U[10], xs = U[11], ds = U[3], fs = U[4], bs = U[5]) : 1 == Ps ? (ns = U[15], rs = U[16], ls = U[17], cs = U[21], ms = U[22], ps = U[23], us = U[18], ys = U[19], xs = U[20], ds = U[12], fs = U[13], bs = U[14]) : 2 == Ps ? (ns = U[12], rs = U[13], ls = U[14], cs = U[0], ms = U[1], ps = U[2], us = U[3], ys = U[4], xs = U[5], ds = U[15], fs = U[16], bs = U[17]) : 3 == Ps ? (ns = U[21], rs = U[22], ls = U[23], cs = U[9], ms = U[10], ps = U[11], us = U[6], ys = U[7], xs = U[8], ds = U[18], fs = U[19], bs = U[20]) : 4 == Ps ? (ns = U[12], rs = U[13], ls = U[14], cs = U[18], ms = U[19], ps = U[20], us = U[6], ys = U[7], xs = U[8], ds = U[0], fs = U[1], bs = U[2]) : 5 == Ps && (ns = U[3], rs = U[4], ls = U[5], cs = R[9], ms = R[10], ps = R[11], us = U[21], ys = U[22], xs = U[23], ds = U[15], fs = U[16], bs = U[17])) : ((Ss = It * Pi + Vt * Ti + Lt * Ai) < Ls && (Ls = Ss, Ps = 0), -Ss < Ls && (Ls = -Ss, Ps = 1), (Ss = St * Pi + Pt * Ti + Tt * Ai) < Ls && (Ls = Ss, Ps = 2), -Ss < Ls && (Ls = -Ss, Ps = 3), (Ss = At * Pi + jt * Ti + Ct * Ai) < Ls && (Ls = Ss, Ps = 4), -Ss < Ls && (Ls = -Ss, Ps = 5), 0 == Ps ? (ns = R[0], rs = R[1], ls = R[2], cs = R[6], ms = R[7], ps = R[8], us = R[9], ys = R[10], xs = R[11], ds = R[3], fs = R[4], bs = R[5]) : 1 == Ps ? (ns = R[15], rs = R[16], ls = R[17], cs = R[21], ms = R[22], ps = R[23], us = R[18], ys = R[19], xs = R[20], ds = R[12], fs = R[13], bs = R[14]) : 2 == Ps ? (ns = R[12], rs = R[13], ls = R[14], cs = R[0], ms = R[1], ps = R[2], us = R[3], ys = R[4], xs = R[5], ds = R[15], fs = R[16], bs = R[17]) : 3 == Ps ? (ns = R[21], rs = R[22], ls = R[23], cs = R[9], ms = R[10], ps = R[11], us = R[6], ys = R[7], xs = R[8], ds = R[18], fs = R[19], bs = R[20]) : 4 == Ps ? (ns = R[12], rs = R[13], ls = R[14], cs = R[18], ms = R[19], ps = R[20], us = R[6], ys = R[7], xs = R[8], ds = R[0], fs = R[1], bs = R[2]) : 5 == Ps && (ns = R[3], rs = R[4], ls = R[5], cs = R[9], ms = R[10], ps = R[11], us = R[21], ys = R[22], xs = R[23], ds = R[15], fs = R[16], bs = R[17])), this.clipVertices1[0] = ns, this.clipVertices1[1] = rs, this.clipVertices1[2] = ls, this.clipVertices1[3] = cs, this.clipVertices1[4] = ms, this.clipVertices1[5] = ps, this.clipVertices1[6] = us, this.clipVertices1[7] = ys, this.clipVertices1[8] = xs, this.clipVertices1[9] = ds, this.clipVertices1[10] = fs, this.clipVertices1[11] = bs, zs = 0, B = ((ks = this.clipVertices1[9]) - Fi - Ri) * ji + ((ws = this.clipVertices1[10]) - qi - _i) * Ci + ((Ms = this.clipVertices1[11]) - Ui - Ji) * Oi;
                    for (var Ts = 0; Ts < 4; Ts++) Ns = 3 * Ts, F = ((gs = this.clipVertices1[Ns]) - Fi - Ri) * ji + ((Is = this.clipVertices1[Ns + 1]) - qi - _i) * Ci + ((Vs = this.clipVertices1[Ns + 2]) - Ui - Ji) * Oi, B > 0 ? F > 0 ? (Ns = 3 * zs, zs++, this.clipVertices2[Ns] = gs, this.clipVertices2[Ns + 1] = Is, this.clipVertices2[Ns + 2] = Vs) : (Ns = 3 * zs, zs++, os = B / (B - F), this.clipVertices2[Ns] = ks + (gs - ks) * os, this.clipVertices2[Ns + 1] = ws + (Is - ws) * os, this.clipVertices2[Ns + 2] = Ms + (Vs - Ms) * os) : F > 0 && (Ns = 3 * zs, zs++, os = B / (B - F), this.clipVertices2[Ns] = ks + (gs - ks) * os, this.clipVertices2[Ns + 1] = ws + (Is - ws) * os, this.clipVertices2[Ns + 2] = Ms + (Vs - Ms) * os, Ns = 3 * zs, zs++, this.clipVertices2[Ns] = gs, this.clipVertices2[Ns + 1] = Is, this.clipVertices2[Ns + 2] = Vs), ks = gs, ws = Is, Ms = Vs, B = F;
                    if (0 != (vs = zs)) {
                        for (zs = 0, Ns = 3 * (vs - 1), B = ((ks = this.clipVertices2[Ns]) - Fi - Wi) * Di + ((ws = this.clipVertices2[Ns + 1]) - qi - Hi) * Ei + ((Ms = this.clipVertices2[Ns + 2]) - Ui - Qi) * Bi, Ts = 0; Ts < vs; Ts++) Ns = 3 * Ts, F = ((gs = this.clipVertices2[Ns]) - Fi - Wi) * Di + ((Is = this.clipVertices2[Ns + 1]) - qi - Hi) * Ei + ((Vs = this.clipVertices2[Ns + 2]) - Ui - Qi) * Bi, B > 0 ? F > 0 ? (Ns = 3 * zs, zs++, this.clipVertices1[Ns] = gs, this.clipVertices1[Ns + 1] = Is, this.clipVertices1[Ns + 2] = Vs) : (Ns = 3 * zs, zs++, os = B / (B - F), this.clipVertices1[Ns] = ks + (gs - ks) * os, this.clipVertices1[Ns + 1] = ws + (Is - ws) * os, this.clipVertices1[Ns + 2] = Ms + (Vs - Ms) * os) : F > 0 && (Ns = 3 * zs, zs++, os = B / (B - F), this.clipVertices1[Ns] = ks + (gs - ks) * os, this.clipVertices1[Ns + 1] = ws + (Is - ws) * os, this.clipVertices1[Ns + 2] = Ms + (Vs - Ms) * os, Ns = 3 * zs, zs++, this.clipVertices1[Ns] = gs, this.clipVertices1[Ns + 1] = Is, this.clipVertices1[Ns + 2] = Vs), ks = gs, ws = Is, Ms = Vs, B = F;
                        if (0 != (vs = zs)) {
                            for (zs = 0, Ns = 3 * (vs - 1), B = ((ks = this.clipVertices1[Ns]) - Fi + Ri) * -ji + ((ws = this.clipVertices1[Ns + 1]) - qi + _i) * -Ci + ((Ms = this.clipVertices1[Ns + 2]) - Ui + Ji) * -Oi, Ts = 0; Ts < vs; Ts++) Ns = 3 * Ts, F = ((gs = this.clipVertices1[Ns]) - Fi + Ri) * -ji + ((Is = this.clipVertices1[Ns + 1]) - qi + _i) * -Ci + ((Vs = this.clipVertices1[Ns + 2]) - Ui + Ji) * -Oi, B > 0 ? F > 0 ? (Ns = 3 * zs, zs++, this.clipVertices2[Ns] = gs, this.clipVertices2[Ns + 1] = Is, this.clipVertices2[Ns + 2] = Vs) : (Ns = 3 * zs, zs++, os = B / (B - F), this.clipVertices2[Ns] = ks + (gs - ks) * os, this.clipVertices2[Ns + 1] = ws + (Is - ws) * os, this.clipVertices2[Ns + 2] = Ms + (Vs - Ms) * os) : F > 0 && (Ns = 3 * zs, zs++, os = B / (B - F), this.clipVertices2[Ns] = ks + (gs - ks) * os, this.clipVertices2[Ns + 1] = ws + (Is - ws) * os, this.clipVertices2[Ns + 2] = Ms + (Vs - Ms) * os, Ns = 3 * zs, zs++, this.clipVertices2[Ns] = gs, this.clipVertices2[Ns + 1] = Is, this.clipVertices2[Ns + 2] = Vs), ks = gs, ws = Is, Ms = Vs, B = F;
                            if (0 != (vs = zs)) {
                                for (zs = 0, Ns = 3 * (vs - 1), B = ((ks = this.clipVertices2[Ns]) - Fi + Wi) * -Di + ((ws = this.clipVertices2[Ns + 1]) - qi + Hi) * -Ei + ((Ms = this.clipVertices2[Ns + 2]) - Ui + Qi) * -Bi, Ts = 0; Ts < vs; Ts++) Ns = 3 * Ts, F = ((gs = this.clipVertices2[Ns]) - Fi + Wi) * -Di + ((Is = this.clipVertices2[Ns + 1]) - qi + Hi) * -Ei + ((Vs = this.clipVertices2[Ns + 2]) - Ui + Qi) * -Bi, B > 0 ? F > 0 ? (Ns = 3 * zs, zs++, this.clipVertices1[Ns] = gs, this.clipVertices1[Ns + 1] = Is, this.clipVertices1[Ns + 2] = Vs) : (Ns = 3 * zs, zs++, os = B / (B - F), this.clipVertices1[Ns] = ks + (gs - ks) * os, this.clipVertices1[Ns + 1] = ws + (Is - ws) * os, this.clipVertices1[Ns + 2] = Ms + (Vs - Ms) * os) : F > 0 && (Ns = 3 * zs, zs++, os = B / (B - F), this.clipVertices1[Ns] = ks + (gs - ks) * os, this.clipVertices1[Ns + 1] = ws + (Is - ws) * os, this.clipVertices1[Ns + 2] = Ms + (Vs - Ms) * os, Ns = 3 * zs, zs++, this.clipVertices1[Ns] = gs, this.clipVertices1[Ns + 1] = Is, this.clipVertices1[Ns + 2] = Vs), ks = gs, ws = Is, Ms = Vs, B = F;
                                if (Xi) {
                                    var As = h;
                                    h = e, e = As
                                }
                                if (0 != (vs = zs)) {
                                    var js = h != t;
                                    if (vs > 4) {
                                        ji = ns - (ks = .25 * (ns + cs + us + ds)), Ci = rs - (ws = .25 * (rs + ms + ys + fs)), Oi = ls - (Ms = .25 * (ls + ps + xs + bs)), Di = cs - ks, Ei = ms - ws, Bi = ps - Ms;
                                        var Cs = 0,
                                            Os = 0,
                                            Ds = 0,
                                            Es = 0,
                                            Bs = -this.INF;
                                        for (Ls = this.INF, Ts = 0; Ts < vs; Ts++) this.used[Ts] = !1, Ns = 3 * Ts, (Ss = (ks = this.clipVertices1[Ns]) * ji + (ws = this.clipVertices1[Ns + 1]) * Ci + (Ms = this.clipVertices1[Ns + 2]) * Oi) < Ls && (Ls = Ss, Cs = Ts), Ss > Bs && (Bs = Ss, Ds = Ts);
                                        for (this.used[Cs] = !0, this.used[Ds] = !0, Bs = -this.INF, Ls = this.INF, Ts = 0; Ts < vs; Ts++) this.used[Ts] || (Ns = 3 * Ts, (Ss = (ks = this.clipVertices1[Ns]) * Di + (ws = this.clipVertices1[Ns + 1]) * Ei + (Ms = this.clipVertices1[Ns + 2]) * Bi) < Ls && (Ls = Ss, Os = Ts), Ss > Bs && (Bs = Ss, Es = Ts));
                                        Ns = 3 * Cs, (Ss = ((ks = this.clipVertices1[Ns]) - Fi) * Pi + ((ws = this.clipVertices1[Ns + 1]) - qi) * Ti + ((Ms = this.clipVertices1[Ns + 2]) - Ui) * Ai) < 0 && s.addPoint(ks, ws, Ms, Pi, Ti, Ai, Ss, js), Ns = 3 * Os, (Ss = ((ks = this.clipVertices1[Ns]) - Fi) * Pi + ((ws = this.clipVertices1[Ns + 1]) - qi) * Ti + ((Ms = this.clipVertices1[Ns + 2]) - Ui) * Ai) < 0 && s.addPoint(ks, ws, Ms, Pi, Ti, Ai, Ss, js), Ns = 3 * Ds, (Ss = ((ks = this.clipVertices1[Ns]) - Fi) * Pi + ((ws = this.clipVertices1[Ns + 1]) - qi) * Ti + ((Ms = this.clipVertices1[Ns + 2]) - Ui) * Ai) < 0 && s.addPoint(ks, ws, Ms, Pi, Ti, Ai, Ss, js), Ns = 3 * Es, (Ss = ((ks = this.clipVertices1[Ns]) - Fi) * Pi + ((ws = this.clipVertices1[Ns + 1]) - qi) * Ti + ((Ms = this.clipVertices1[Ns + 2]) - Ui) * Ai) < 0 && s.addPoint(ks, ws, Ms, Pi, Ti, Ai, Ss, js)
                                    } else
                                        for (Ts = 0; Ts < vs; Ts++) Ns = 3 * Ts, (Ss = ((ks = this.clipVertices1[Ns]) - Fi) * Pi + ((ws = this.clipVertices1[Ns + 1]) - qi) * Ti + ((Ms = this.clipVertices1[Ns + 2]) - Ui) * Ai) < 0 && s.addPoint(ks, ws, Ms, Pi, Ti, Ai, Ss, js)
                                }
                            }
                        }
                    }
                }
            }
        }
    }), Vt.prototype = Object.assign(Object.create(gt.prototype), {
        constructor: Vt,
        getSep: function(t, i, s, h, e) {
            var a, o, n, r, l, c, m, p, u, y, x, d, f, b = new L,
                v = t.position.x,
                z = t.position.y,
                N = t.position.z,
                k = i.position.x,
                w = i.position.y,
                M = i.position.z,
                I = k - v,
                V = w - z,
                S = M - N;
            I * I + V * V + S * S == 0 && (V = .001);
            var P = -I,
                T = -V,
                A = -S;
            this.supportPointB(t, -P, -T, -A, b);
            var j = b.x,
                C = b.y,
                O = b.z;
            this.supportPointC(i, P, T, A, b);
            var D = b.x,
                E = b.y,
                B = b.z,
                F = D - j,
                q = E - C,
                U = B - O;
            if (F * P + q * T + U * A <= 0) return !1;
            if ((P = q * S - U * V) * P + (T = U * I - F * S) * T + (A = F * V - q * I) * A == 0) return s.set(F - I, q - V, U - S).normalize(), h.set(.5 * (j + D), .5 * (C + E), .5 * (O + B)), !0;
            this.supportPointB(t, -P, -T, -A, b);
            var R = b.x,
                _ = b.y,
                J = b.z;
            this.supportPointC(i, P, T, A, b);
            var W = b.x,
                H = b.y,
                Q = b.z,
                X = W - R,
                Y = H - _,
                Z = Q - J;
            if (X * P + Y * T + Z * A <= 0) return !1;
            (P = (o = q - V) * (c = Z - S) - (n = U - S) * (l = Y - V)) * I + (T = n * (r = X - I) - (a = F - I) * c) * V + (A = a * l - o * r) * S > 0 && (a = F, o = q, n = U, F = X, q = Y, U = Z, X = a, Y = o, Z = n, a = j, o = C, n = O, j = R, C = _, O = J, R = a, _ = o, J = n, a = D, o = E, n = B, D = W, E = H, B = Q, W = a, H = o, Q = n, P = -P, T = -T, A = -A);
            for (var K = 0;;) {
                if (++K > 100) return !1;
                this.supportPointB(t, -P, -T, -A, b);
                var G = b.x,
                    $ = b.y,
                    tt = b.z;
                this.supportPointC(i, P, T, A, b);
                var it = b.x,
                    st = b.y,
                    ht = b.z,
                    et = it - G,
                    at = st - $,
                    ot = ht - tt;
                if (et * P + at * T + ot * A <= 0) return !1;
                if ((q * ot - U * at) * I + (U * et - F * ot) * V + (F * at - q * et) * S < 0) X = et, Y = at, Z = ot, R = G, _ = $, J = tt, W = it, H = st, Q = ht, P = (o = q - V) * (c = ot - S) - (n = U - S) * (l = at - V), T = n * (r = et - I) - (a = F - I) * c, A = a * l - o * r;
                else if ((at * Z - ot * Y) * I + (ot * X - et * Z) * V + (et * Y - at * X) * S < 0) F = et, q = at, U = ot, j = G, C = $, O = tt, D = it, E = st, B = ht, P = (o = at - V) * (c = Z - S) - (n = ot - S) * (l = Y - V), T = n * (r = X - I) - (a = et - I) * c, A = a * l - o * r;
                else
                    for (var nt = !1;;) {
                        if (P = (o = Y - q) * (c = ot - U) - (n = Z - U) * (l = at - q), T = n * (r = et - F) - (a = X - F) * c, A = a * l - o * r, (P *= m = 1 / g.sqrt(P * P + T * T + A * A)) * F + (T *= m) * q + (A *= m) * U >= 0 && !nt) {
                            var rt = (q * Z - U * Y) * et + (U * X - F * Z) * at + (F * Y - q * X) * ot,
                                lt = (at * Z - ot * Y) * I + (ot * X - et * Z) * V + (et * Y - at * X) * S,
                                ct = (V * U - S * q) * et + (S * F - I * U) * at + (I * q - V * F) * ot,
                                mt = (Y * U - Z * q) * I + (Z * F - X * U) * V + (X * q - Y * F) * S,
                                pt = rt + lt + ct + mt;
                            pt <= 0 && (rt = 0, pt = (lt = (Y * ot - Z * at) * P + (Z * et - X * ot) * T + (X * at - Y * et) * A) + (ct = (at * Z - ot * Y) * P + (ot * X - et * Z) * T + (et * Y - at * X) * A) + (mt = (q * Z - U * Y) * P + (U * X - F * Z) * T + (F * Y - q * X) * A));
                            var ut = 1 / pt;
                            p = (v * rt + j * lt + R * ct + G * mt) * ut, u = (z * rt + C * lt + _ * ct + $ * mt) * ut, y = (N * rt + O * lt + J * ct + tt * mt) * ut, x = (k * rt + D * lt + W * ct + it * mt) * ut, d = (w * rt + E * lt + H * ct + st * mt) * ut, f = (M * rt + B * lt + Q * ct + ht * mt) * ut, nt = !0
                        }
                        this.supportPointB(t, -P, -T, -A, b);
                        var yt = b.x,
                            xt = b.y,
                            dt = b.z;
                        this.supportPointC(i, P, T, A, b);
                        var ft = b.x,
                            bt = b.y,
                            vt = b.z,
                            zt = ft - yt,
                            Nt = bt - xt,
                            kt = vt - dt,
                            wt = -(zt * P + Nt * T + kt * A);
                        if ((zt - et) * P + (Nt - at) * T + (kt - ot) * A <= .01 || wt >= 0) return !!nt && (s.set(-P, -T, -A), h.set(.5 * (p + x), .5 * (u + d), .5 * (y + f)), e.x = wt, !0);
                        (Nt * U - kt * q) * I + (kt * F - zt * U) * V + (zt * q - Nt * F) * S < 0 ? (Nt * Z - kt * Y) * I + (kt * X - zt * Z) * V + (zt * Y - Nt * X) * S < 0 ? (F = zt, q = Nt, U = kt, j = yt, C = xt, O = dt, D = ft, E = bt, B = vt) : (et = zt, at = Nt, ot = kt, G = yt, $ = xt, tt = dt, it = ft, st = bt, ht = vt) : (Nt * ot - kt * at) * I + (kt * et - zt * ot) * V + (zt * at - Nt * et) * S < 0 ? (X = zt, Y = Nt, Z = kt, R = yt, _ = xt, J = dt, W = ft, H = bt, Q = vt) : (F = zt, q = Nt, U = kt, j = yt, C = xt, O = dt, D = ft, E = bt, B = vt)
                    }
            }
        },
        supportPointB: function(t, i, s, h, e) {
            var a, o, n, r = t.rotation.elements,
                l = r[0] * i + r[3] * s + r[6] * h,
                c = r[1] * i + r[4] * s + r[7] * h,
                m = r[2] * i + r[5] * s + r[8] * h,
                p = t.halfWidth,
                u = t.halfHeight,
                y = t.halfDepth;
            a = l < 0 ? -p : p, o = c < 0 ? -u : u, n = m < 0 ? -y : y, l = r[0] * a + r[1] * o + r[2] * n + t.position.x, c = r[3] * a + r[4] * o + r[5] * n + t.position.y, m = r[6] * a + r[7] * o + r[8] * n + t.position.z, e.set(l, c, m)
        },
        supportPointC: function(t, i, s, h, e) {
            var a, o, n, r = t.rotation.elements,
                l = r[0] * i + r[3] * s + r[6] * h,
                c = r[1] * i + r[4] * s + r[7] * h,
                m = r[2] * i + r[5] * s + r[8] * h,
                p = l,
                u = m,
                y = p * p + u * u,
                x = t.radius,
                d = t.halfHeight;
            0 == y ? c < 0 ? (a = x, o = -d, n = 0) : (a = x, o = d, n = 0) : (y = t.radius / g.sqrt(y), c < 0 ? (a = p * y, o = -d, n = u * y) : (a = p * y, o = d, n = u * y)), l = r[0] * a + r[1] * o + r[2] * n + t.position.x, c = r[3] * a + r[4] * o + r[5] * n + t.position.y, m = r[6] * a + r[7] * o + r[8] * n + t.position.z, e.set(l, c, m)
        },
        detectCollision: function(t, i, s) {
            var h, e;
            this.flip ? (h = i, e = t) : (h = t, e = i);
            var a = new L,
                o = new L,
                n = new L;
            if (this.getSep(h, e, a, o, n)) {
                var r = h.position.x,
                    l = h.position.y,
                    c = h.position.z,
                    m = e.position.x,
                    p = e.position.y,
                    u = e.position.z,
                    y = h.halfWidth,
                    x = h.halfHeight,
                    d = h.halfDepth,
                    f = e.halfHeight,
                    b = e.radius,
                    v = h.dimentions,
                    z = v[0],
                    N = v[1],
                    k = v[2],
                    w = v[3],
                    M = v[4],
                    I = v[5],
                    V = v[6],
                    S = v[7],
                    P = v[8],
                    T = v[9],
                    A = v[10],
                    j = v[11],
                    C = v[12],
                    O = v[13],
                    D = v[14],
                    E = v[15],
                    B = v[16],
                    F = v[17],
                    q = e.normalDirection.x,
                    U = e.normalDirection.y,
                    R = e.normalDirection.z,
                    _ = e.halfDirection.x,
                    J = e.halfDirection.y,
                    W = e.halfDirection.z,
                    H = a.x,
                    Q = a.y,
                    X = a.z,
                    Y = H * z + Q * N + X * k,
                    Z = H * w + Q * M + X * I,
                    K = H * V + Q * S + X * P,
                    G = H * q + Q * U + X * R,
                    $ = Y > 0,
                    tt = Z > 0,
                    it = K > 0,
                    st = G > 0;
                $ || (Y = -Y), tt || (Z = -Z), it || (K = -K), st || (G = -G);
                var ht, et, at, ot, nt, rt, lt, ct, mt, pt, ut, yt, xt, dt, ft, bt, vt, zt, Nt, kt, wt, Mt, gt, It, Vt, Lt, St, Pt, Tt, At, jt, Ct, Ot, Dt, Et, Bt, Ft, qt, Ut, Rt, _t, Jt, Wt, Ht, Qt, Xt, Yt, Zt, Kt, Gt, $t, ti, ii, si = 0;
                if (G > .999 ? si = Y > .999 ? Y > G ? 1 : 4 : Z > .999 ? Z > G ? 2 : 4 : K > .999 && K > G ? 3 : 4 : Y > .999 ? si = 1 : Z > .999 ? si = 2 : K > .999 && (si = 3), 0 == si) s.addPoint(o.x, o.y, o.z, H, Q, X, n.x, this.flip);
                else if (4 == si) {
                    var hi, ei, ai, oi, ni, ri, li, ci, mi, pi, ui, yi;
                    st ? (ot = m - _, nt = p - J, rt = u - W, H = -q, Q = -U, X = -R) : (ot = m + _, nt = p + J, rt = u + W, H = q, Q = U, X = R), si = 0, (Wt = z * H + N * Q + k * X) < (kt = 1) && (kt = Wt, si = 0), -Wt < kt && (kt = -Wt, si = 1), (Wt = w * H + M * Q + I * X) < kt && (kt = Wt, si = 2), -Wt < kt && (kt = -Wt, si = 3), (Wt = V * H + S * Q + P * X) < kt && (kt = Wt, si = 4), -Wt < kt && (kt = -Wt, si = 5);
                    var xi = h.elements;
                    switch (si) {
                        case 0:
                            hi = xi[0], ei = xi[1], ai = xi[2], oi = xi[6], ni = xi[7], ri = xi[8], li = xi[9], ci = xi[10], mi = xi[11], pi = xi[3], ui = xi[4], yi = xi[5];
                            break;
                        case 1:
                            hi = xi[15], ei = xi[16], ai = xi[17], oi = xi[21], ni = xi[22], ri = xi[23], li = xi[18], ci = xi[19], mi = xi[20], pi = xi[12], ui = xi[13], yi = xi[14];
                            break;
                        case 2:
                            hi = xi[12], ei = xi[13], ai = xi[14], oi = xi[0], ni = xi[1], ri = xi[2], li = xi[3], ci = xi[4], mi = xi[5], pi = xi[15], ui = xi[16], yi = xi[17];
                            break;
                        case 3:
                            hi = xi[21], ei = xi[22], ai = xi[23], oi = xi[9], ni = xi[10], ri = xi[11], li = xi[6], ci = xi[7], mi = xi[8], pi = xi[18], ui = xi[19], yi = xi[20];
                            break;
                        case 4:
                            hi = xi[12], ei = xi[13], ai = xi[14], oi = xi[18], ni = xi[19], ri = xi[20], li = xi[6], ci = xi[7], mi = xi[8], pi = xi[0], ui = xi[1], yi = xi[2];
                            break;
                        case 5:
                            hi = xi[3], ei = xi[4], ai = xi[5], oi = xi[9], ni = xi[10], ri = xi[11], li = xi[21], ci = xi[22], mi = xi[23], pi = xi[15], ui = xi[16], yi = xi[17]
                    }(Nt = H * (hi - ot) + Q * (ei - nt) + X * (ai - rt)) <= 0 && s.addPoint(hi, ei, ai, -H, -Q, -X, Nt, this.flip), (Nt = H * (oi - ot) + Q * (ni - nt) + X * (ri - rt)) <= 0 && s.addPoint(oi, ni, ri, -H, -Q, -X, Nt, this.flip), (Nt = H * (li - ot) + Q * (ci - nt) + X * (mi - rt)) <= 0 && s.addPoint(li, ci, mi, -H, -Q, -X, Nt, this.flip), (Nt = H * (pi - ot) + Q * (ui - nt) + X * (yi - rt)) <= 0 && s.addPoint(pi, ui, yi, -H, -Q, -X, Nt, this.flip)
                } else {
                    switch (si) {
                        case 1:
                            $ ? (ht = r + T, et = l + A, at = c + j, H = z, Q = N, X = k) : (ht = r - T, et = l - A, at = c - j, H = -z, Q = -N, X = -k), Xt = w, Yt = M, Zt = I, ti = x, Kt = V, Gt = S, $t = P, ii = d;
                            break;
                        case 2:
                            tt ? (ht = r + C, et = l + O, at = c + D, H = w, Q = M, X = I) : (ht = r - C, et = l - O, at = c - D, H = -w, Q = -M, X = -I), Xt = z, Yt = N, Zt = k, ti = y, Kt = V, Gt = S, $t = P, ii = d;
                            break;
                        case 3:
                            it ? (ht = r + E, et = l + B, at = c + F, H = V, Q = S, X = P) : (ht = r - E, et = l - B, at = c - F, H = -V, Q = -S, X = -P), Xt = z, Yt = N, Zt = k, ti = y, Kt = w, Gt = M, $t = I, ii = x
                    }
                    if (ot = m + (wt = (kt = H * q + Q * U + X * R) < 0 ? f : -f) * q, nt = p + wt * U, rt = u + wt * R, G >= .999999 ? (Mt = -Q, gt = X, It = H) : (Mt = H, gt = Q, It = X), Lt = (wt = Mt * q + gt * U + It * R) * q - Mt, St = wt * U - gt, Pt = wt * R - It, 0 == (wt = g.sqrt(Lt * Lt + St * St + Pt * Pt))) return;
                    if (Mt = ot + (Lt *= wt = b / wt), gt = nt + (St *= wt), It = rt + (Pt *= wt), kt < -.96 || kt > .96) lt = q * q * 1.5 - .5, ct = q * U * 1.5 - .866025403 * R, mt = q * R * 1.5 + .866025403 * U, pt = U * q * 1.5 + .866025403 * R, ut = U * U * 1.5 - .5, yt = U * R * 1.5 - .866025403 * q, xt = R * q * 1.5 - .866025403 * U, dt = R * U * 1.5 + .866025403 * q, ft = R * R * 1.5 - .5, (qt = Xt * (Mt = (bt = Mt) - (Nt = H * (bt - ht) + Q * ((vt = gt) - et) + X * ((zt = It) - at)) * H - ht) + Yt * (gt = vt - Nt * Q - et) + Zt * (It = zt - Nt * X - at)) < -ti ? qt = -ti : qt > ti && (qt = ti), (Jt = Kt * Mt + Gt * gt + $t * It) < -ii ? Jt = -ii : Jt > ii && (Jt = ii), bt = ht + (Mt = qt * Xt + Jt * Kt), vt = et + (gt = qt * Yt + Jt * Gt), zt = at + (It = qt * Zt + Jt * $t), s.addPoint(bt, vt, zt, H, Q, X, Nt, this.flip), vt = Lt * pt + St * ut + Pt * yt, zt = Lt * xt + St * dt + Pt * ft, (Nt = H * ((bt = (Lt = bt = Lt * lt + St * ct + Pt * mt) + ot) - ht) + Q * ((vt = (St = vt) + nt) - et) + X * ((zt = (Pt = zt) + rt) - at)) <= 0 && ((qt = Xt * (Mt = bt - Nt * H - ht) + Yt * (gt = vt - Nt * Q - et) + Zt * (It = zt - Nt * X - at)) < -ti ? qt = -ti : qt > ti && (qt = ti), (Jt = Kt * Mt + Gt * gt + $t * It) < -ii ? Jt = -ii : Jt > ii && (Jt = ii), bt = ht + (Mt = qt * Xt + Jt * Kt), vt = et + (gt = qt * Yt + Jt * Gt), zt = at + (It = qt * Zt + Jt * $t), s.addPoint(bt, vt, zt, H, Q, X, Nt, this.flip)), vt = Lt * pt + St * ut + Pt * yt, zt = Lt * xt + St * dt + Pt * ft, (Nt = H * ((bt = (Lt = bt = Lt * lt + St * ct + Pt * mt) + ot) - ht) + Q * ((vt = (St = vt) + nt) - et) + X * ((zt = (Pt = zt) + rt) - at)) <= 0 && ((qt = Xt * (Mt = bt - Nt * H - ht) + Yt * (gt = vt - Nt * Q - et) + Zt * (It = zt - Nt * X - at)) < -ti ? qt = -ti : qt > ti && (qt = ti), (Jt = Kt * Mt + Gt * gt + $t * It) < -ii ? Jt = -ii : Jt > ii && (Jt = ii), bt = ht + (Mt = qt * Xt + Jt * Kt), vt = et + (gt = qt * Yt + Jt * Gt), zt = at + (It = qt * Zt + Jt * $t), s.addPoint(bt, vt, zt, H, Q, X, Nt, this.flip));
                    else {
                        if (Et = Mt, kt > 0 ? (Ut = Mt + 2 * _, Rt = gt + 2 * J, _t = It + 2 * W) : (Ut = Mt - 2 * _, Rt = gt - 2 * J, _t = It - 2 * W), Mt = (Ut -= (Jt = H * (Ut - ht) + Q * (Rt - et) + X * (_t - at)) * H) - (Et -= (qt = H * (Et - ht) + Q * ((Bt = gt) - et) + X * ((Ft = It) - at)) * H), gt = (Rt -= Jt * Q) - (Bt -= qt * Q), It = (_t -= Jt * X) - (Ft -= qt * X), Vt = Jt - qt, Ht = (Z = (Ct = Ut - ht) * Xt + (Ot = Rt - et) * Yt + (Dt = _t - at) * Zt) - ti, (Wt = (Y = (Tt = Et - ht) * Xt + (At = Bt - et) * Yt + (jt = Ft - at) * Zt) - ti) > 0) {
                            if (Ht > 0) return;
                            Y = (Tt = (Et += Mt * (Qt = Wt / (Wt - Ht))) - ht) * Xt + (At = (Bt += gt * Qt) - et) * Yt + (jt = (Ft += It * Qt) - at) * Zt, Mt = Ut - Et, gt = Rt - Bt, It = _t - Ft, Vt = Jt - (qt += Vt * Qt)
                        } else Ht > 0 && (Z = (Ct = (Ut = Et + Mt * (Qt = Wt / (Wt - Ht))) - ht) * Xt + (Ot = (Rt = Bt + gt * Qt) - et) * Yt + (Dt = (_t = Ft + It * Qt) - at) * Zt, Mt = Ut - Et, gt = Rt - Bt, It = _t - Ft, Vt = (Jt = qt + Vt * Qt) - qt);
                        if (Ht = Z + ti, (Wt = Y + ti) < 0) {
                            if (Ht < 0) return;
                            Tt = (Et += Mt * (Qt = Wt / (Wt - Ht))) - ht, At = (Bt += gt * Qt) - et, jt = (Ft += It * Qt) - at, Mt = Ut - Et, gt = Rt - Bt, It = _t - Ft, Vt = Jt - (qt += Vt * Qt)
                        } else Ht < 0 && (Ct = (Ut = Et + Mt * (Qt = Wt / (Wt - Ht))) - ht, Ot = (Rt = Bt + gt * Qt) - et, Dt = (_t = Ft + It * Qt) - at, Mt = Ut - Et, gt = Rt - Bt, It = _t - Ft, Vt = (Jt = qt + Vt * Qt) - qt);
                        if (Ht = (Z = Ct * Kt + Ot * Gt + Dt * $t) - ii, (Wt = (Y = Tt * Kt + At * Gt + jt * $t) - ii) > 0) {
                            if (Ht > 0) return;
                            Y = (Tt = (Et += Mt * (Qt = Wt / (Wt - Ht))) - ht) * Kt + (At = (Bt += gt * Qt) - et) * Gt + (jt = (Ft += It * Qt) - at) * $t, Mt = Ut - Et, gt = Rt - Bt, It = _t - Ft, Vt = Jt - (qt += Vt * Qt)
                        } else Ht > 0 && (Z = (Ct = (Ut = Et + Mt * (Qt = Wt / (Wt - Ht))) - ht) * Kt + (Ot = (Rt = Bt + gt * Qt) - et) * Gt + (Dt = (_t = Ft + It * Qt) - at) * $t, Mt = Ut - Et, gt = Rt - Bt, It = _t - Ft, Vt = (Jt = qt + Vt * Qt) - qt);
                        if (Ht = Z + ii, (Wt = Y + ii) < 0) {
                            if (Ht < 0) return;
                            Et += Mt * (Qt = Wt / (Wt - Ht)), Bt += gt * Qt, Ft += It * Qt, qt += Vt * Qt
                        } else Ht < 0 && (Ut = Et + Mt * (Qt = Wt / (Wt - Ht)), Rt = Bt + gt * Qt, _t = Ft + It * Qt, Jt = qt + Vt * Qt);
                        qt < 0 && s.addPoint(Et, Bt, Ft, H, Q, X, qt, this.flip), Jt < 0 && s.addPoint(Ut, Rt, _t, H, Q, X, Jt, this.flip)
                    }
                }
            }
        }
    }), Lt.prototype = Object.assign(Object.create(gt.prototype), {
        constructor: Lt,
        getSep: function(t, i, s, h, e) {
            var a, o, n, r, l, c, m, p, u, y, x, d, f, b = new L,
                v = t.position.x,
                z = t.position.y,
                N = t.position.z,
                k = i.position.x,
                w = i.position.y,
                M = i.position.z,
                I = k - v,
                V = w - z,
                S = M - N;
            I * I + V * V + S * S == 0 && (V = .001);
            var P = -I,
                T = -V,
                A = -S;
            this.supportPoint(t, -P, -T, -A, b);
            var j = b.x,
                C = b.y,
                O = b.z;
            this.supportPoint(i, P, T, A, b);
            var D = b.x,
                E = b.y,
                B = b.z,
                F = D - j,
                q = E - C,
                U = B - O;
            if (F * P + q * T + U * A <= 0) return !1;
            if ((P = q * S - U * V) * P + (T = U * I - F * S) * T + (A = F * V - q * I) * A == 0) return s.set(F - I, q - V, U - S).normalize(), h.set(.5 * (j + D), .5 * (C + E), .5 * (O + B)), !0;
            this.supportPoint(t, -P, -T, -A, b);
            var R = b.x,
                _ = b.y,
                J = b.z;
            this.supportPoint(i, P, T, A, b);
            var W = b.x,
                H = b.y,
                Q = b.z,
                X = W - R,
                Y = H - _,
                Z = Q - J;
            if (X * P + Y * T + Z * A <= 0) return !1;
            (P = (o = q - V) * (c = Z - S) - (n = U - S) * (l = Y - V)) * I + (T = n * (r = X - I) - (a = F - I) * c) * V + (A = a * l - o * r) * S > 0 && (a = F, o = q, n = U, F = X, q = Y, U = Z, X = a, Y = o, Z = n, a = j, o = C, n = O, j = R, C = _, O = J, R = a, _ = o, J = n, a = D, o = E, n = B, D = W, E = H, B = Q, W = a, H = o, Q = n, P = -P, T = -T, A = -A);
            for (var K = 0;;) {
                if (++K > 100) return !1;
                this.supportPoint(t, -P, -T, -A, b);
                var G = b.x,
                    $ = b.y,
                    tt = b.z;
                this.supportPoint(i, P, T, A, b);
                var it = b.x,
                    st = b.y,
                    ht = b.z,
                    et = it - G,
                    at = st - $,
                    ot = ht - tt;
                if (et * P + at * T + ot * A <= 0) return !1;
                if ((q * ot - U * at) * I + (U * et - F * ot) * V + (F * at - q * et) * S < 0) X = et, Y = at, Z = ot, R = G, _ = $, J = tt, W = it, H = st, Q = ht, P = (o = q - V) * (c = ot - S) - (n = U - S) * (l = at - V), T = n * (r = et - I) - (a = F - I) * c, A = a * l - o * r;
                else if ((at * Z - ot * Y) * I + (ot * X - et * Z) * V + (et * Y - at * X) * S < 0) F = et, q = at, U = ot, j = G, C = $, O = tt, D = it, E = st, B = ht, P = (o = at - V) * (c = Z - S) - (n = ot - S) * (l = Y - V), T = n * (r = X - I) - (a = et - I) * c, A = a * l - o * r;
                else
                    for (var nt = !1;;) {
                        if (P = (o = Y - q) * (c = ot - U) - (n = Z - U) * (l = at - q), T = n * (r = et - F) - (a = X - F) * c, A = a * l - o * r, (P *= m = 1 / g.sqrt(P * P + T * T + A * A)) * F + (T *= m) * q + (A *= m) * U >= 0 && !nt) {
                            var rt = (q * Z - U * Y) * et + (U * X - F * Z) * at + (F * Y - q * X) * ot,
                                lt = (at * Z - ot * Y) * I + (ot * X - et * Z) * V + (et * Y - at * X) * S,
                                ct = (V * U - S * q) * et + (S * F - I * U) * at + (I * q - V * F) * ot,
                                mt = (Y * U - Z * q) * I + (Z * F - X * U) * V + (X * q - Y * F) * S,
                                pt = rt + lt + ct + mt;
                            pt <= 0 && (rt = 0, pt = (lt = (Y * ot - Z * at) * P + (Z * et - X * ot) * T + (X * at - Y * et) * A) + (ct = (at * Z - ot * Y) * P + (ot * X - et * Z) * T + (et * Y - at * X) * A) + (mt = (q * Z - U * Y) * P + (U * X - F * Z) * T + (F * Y - q * X) * A));
                            var ut = 1 / pt;
                            p = (v * rt + j * lt + R * ct + G * mt) * ut, u = (z * rt + C * lt + _ * ct + $ * mt) * ut, y = (N * rt + O * lt + J * ct + tt * mt) * ut, x = (k * rt + D * lt + W * ct + it * mt) * ut, d = (w * rt + E * lt + H * ct + st * mt) * ut, f = (M * rt + B * lt + Q * ct + ht * mt) * ut, nt = !0
                        }
                        this.supportPoint(t, -P, -T, -A, b);
                        var yt = b.x,
                            xt = b.y,
                            dt = b.z;
                        this.supportPoint(i, P, T, A, b);
                        var ft = b.x,
                            bt = b.y,
                            vt = b.z,
                            zt = ft - yt,
                            Nt = bt - xt,
                            kt = vt - dt,
                            wt = -(zt * P + Nt * T + kt * A);
                        if ((zt - et) * P + (Nt - at) * T + (kt - ot) * A <= .01 || wt >= 0) return !!nt && (s.set(-P, -T, -A), h.set(.5 * (p + x), .5 * (u + d), .5 * (y + f)), e.x = wt, !0);
                        (Nt * U - kt * q) * I + (kt * F - zt * U) * V + (zt * q - Nt * F) * S < 0 ? (Nt * Z - kt * Y) * I + (kt * X - zt * Z) * V + (zt * Y - Nt * X) * S < 0 ? (F = zt, q = Nt, U = kt, j = yt, C = xt, O = dt, D = ft, E = bt, B = vt) : (et = zt, at = Nt, ot = kt, G = yt, $ = xt, tt = dt, it = ft, st = bt, ht = vt) : (Nt * ot - kt * at) * I + (kt * et - zt * ot) * V + (zt * at - Nt * et) * S < 0 ? (X = zt, Y = Nt, Z = kt, R = yt, _ = xt, J = dt, W = ft, H = bt, Q = vt) : (F = zt, q = Nt, U = kt, j = yt, C = xt, O = dt, D = ft, E = bt, B = vt)
                    }
            }
        },
        supportPoint: function(t, i, s, h, e) {
            var a, o, n, r = t.rotation.elements,
                l = r[0] * i + r[3] * s + r[6] * h,
                c = r[1] * i + r[4] * s + r[7] * h,
                m = r[2] * i + r[5] * s + r[8] * h,
                p = l,
                u = m,
                y = p * p + u * u,
                x = t.radius,
                d = t.halfHeight;
            0 == y ? c < 0 ? (a = x, o = -d, n = 0) : (a = x, o = d, n = 0) : (y = t.radius / g.sqrt(y), c < 0 ? (a = p * y, o = -d, n = u * y) : (a = p * y, o = d, n = u * y)), l = r[0] * a + r[1] * o + r[2] * n + t.position.x, c = r[3] * a + r[4] * o + r[5] * n + t.position.y, m = r[6] * a + r[7] * o + r[8] * n + t.position.z, e.set(l, c, m)
        },
        detectCollision: function(t, i, s) {
            var h, e;
            t.id < i.id ? (h = t, e = i) : (h = i, e = t);
            var a, o, n, r, l, c, m, p, u, y, x, d, f, b, v, z, N, k, w, M, I, V = h.position,
                S = e.position,
                P = V.x,
                T = V.y,
                A = V.z,
                j = S.x,
                C = S.y,
                O = S.z,
                D = h.halfHeight,
                E = e.halfHeight,
                B = h.normalDirection,
                F = e.normalDirection,
                q = h.halfDirection,
                U = e.halfDirection,
                R = h.radius,
                _ = e.radius,
                J = B.x,
                W = B.y,
                H = B.z,
                Q = F.x,
                X = F.y,
                Y = F.z,
                Z = q.x,
                K = q.y,
                G = q.z,
                $ = U.x,
                tt = U.y,
                it = U.z,
                st = P - j,
                ht = T - C,
                et = A - O,
                at = new L,
                ot = new L,
                nt = new L;
            if (this.getSep(h, e, at, ot, nt)) {
                var rt = at.x * J + at.y * W + at.z * H,
                    lt = at.x * Q + at.y * X + at.z * Y,
                    ct = rt > 0,
                    mt = lt > 0;
                ct || (rt = -rt), mt || (lt = -lt);
                var pt, ut, yt, xt = 0;
                (rt > .999 || lt > .999) && (xt = rt > lt ? 1 : 2);
                var dt, ft, bt, vt, zt, Nt, kt, wt, Mt, gt, It, Vt, Lt, St, Pt, Tt, At = nt.x;
                switch (pt = at.x, ut = at.y, yt = at.z, xt) {
                    case 0:
                        s.addPoint(ot.x, ot.y, ot.z, pt, ut, yt, At, !1);
                        break;
                    case 1:
                        if (ct ? (o = P + Z, n = T + K, r = A + G, pt = J, ut = W, yt = H) : (o = P - Z, n = T - K, r = A - G, pt = -J, ut = -W, yt = -H), l = j + (a = (w = pt * Q + ut * X + yt * Y) < 0 ? E : -E) * Q, c = C + a * X, m = O + a * Y, lt >= .999999 ? (p = -ut, u = yt, y = pt) : (p = pt, u = ut, y = yt), st = (a = p * Q + u * X + y * Y) * Q - p, ht = a * X - u, et = a * Y - y, 0 == (a = g.sqrt(st * st + ht * ht + et * et))) break;
                        if (p = l + (st *= a = _ / a), u = c + (ht *= a), y = m + (et *= a), w < -.96 || w > .96) dt = Q * Q * 1.5 - .5, ft = Q * X * 1.5 - .866025403 * Y, bt = Q * Y * 1.5 + .866025403 * X, vt = X * Q * 1.5 + .866025403 * Y, zt = X * X * 1.5 - .5, Nt = X * Y * 1.5 - .866025403 * Q, kt = Y * Q * 1.5 - .866025403 * X, wt = Y * X * 1.5 + .866025403 * Q, Mt = Y * Y * 1.5 - .5, (a = (p = (gt = p) - (Lt = pt * (gt - o) + ut * ((It = u) - n) + yt * ((Vt = y) - r)) * pt - o) * p + (u = It - Lt * ut - n) * u + (y = Vt - Lt * yt - r) * y) > R * R && (p *= a = R / g.sqrt(a), u *= a, y *= a), gt = o + p, It = n + u, Vt = r + y, s.addPoint(gt, It, Vt, pt, ut, yt, Lt, !1), It = st * vt + ht * zt + et * Nt, Vt = st * kt + ht * wt + et * Mt, (Lt = pt * ((gt = (st = gt = st * dt + ht * ft + et * bt) + l) - o) + ut * ((It = (ht = It) + c) - n) + yt * ((Vt = (et = Vt) + m) - r)) <= 0 && ((a = (p = gt - Lt * pt - o) * p + (u = It - Lt * ut - n) * u + (y = Vt - Lt * yt - r) * y) > R * R && (p *= a = R / g.sqrt(a), u *= a, y *= a), gt = o + p, It = n + u, Vt = r + y, s.addPoint(gt, It, Vt, pt, ut, yt, Lt, !1)), It = st * vt + ht * zt + et * Nt, Vt = st * kt + ht * wt + et * Mt, (Lt = pt * ((gt = (st = gt = st * dt + ht * ft + et * bt) + l) - o) + ut * ((It = (ht = It) + c) - n) + yt * ((Vt = (et = Vt) + m) - r)) <= 0 && ((a = (p = gt - Lt * pt - o) * p + (u = It - Lt * ut - n) * u + (y = Vt - Lt * yt - r) * y) > R * R && (p *= a = R / g.sqrt(a), u *= a, y *= a), gt = o + p, It = n + u, Vt = r + y, s.addPoint(gt, It, Vt, pt, ut, yt, Lt, !1));
                        else {
                            if (x = p, w > 0 ? (b = p + Q * E * 2, v = u + X * E * 2, z = y + Y * E * 2) : (b = p - Q * E * 2, v = u - X * E * 2, z = y - Y * E * 2), (Tt = (St = (st = o - (x -= (N = pt * (x - o) + ut * ((d = u) - n) + yt * ((f = y) - r)) * pt)) * (p = (b -= (k = pt * (b - o) + ut * (v - n) + yt * (z - r)) * pt) - x) + (ht = n - (d -= N * ut)) * (u = (v -= k * ut) - d) + (et = r - (f -= N * yt)) * (y = (z -= k * yt) - f)) * St - (Pt = p * p + u * u + y * y) * (st * st + ht * ht + et * et - R * R)) < 0) break;
                            (I = (St - (Tt = g.sqrt(Tt))) / Pt) < (M = (St + Tt) / Pt) && (a = M, M = I, I = a), I > 1 && (I = 1), M < 0 && (M = 0), p = x + (b - x) * M, u = d + (v - d) * M, y = f + (z - f) * M, b = x + (b - x) * I, v = d + (v - d) * I, z = f + (z - f) * I, x = p, d = u, f = y, a = N + (k - N) * M, k = N + (k - N) * I, (N = a) < 0 && s.addPoint(x, d, f, pt, ut, yt, Lt, !1), k < 0 && s.addPoint(b, v, z, pt, ut, yt, Lt, !1)
                        }
                        break;
                    case 2:
                        if (mt ? (l = j - $, c = C - tt, m = O - it, pt = -Q, ut = -X, yt = -Y) : (l = j + $, c = C + tt, m = O + it, pt = Q, ut = X, yt = Y), o = P + (a = (w = pt * J + ut * W + yt * H) < 0 ? D : -D) * J, n = T + a * W, r = A + a * H, rt >= .999999 ? (p = -ut, u = yt, y = pt) : (p = pt, u = ut, y = yt), st = (a = p * J + u * W + y * H) * J - p, ht = a * W - u, et = a * H - y, 0 == (a = g.sqrt(st * st + ht * ht + et * et))) break;
                        if (p = o + (st *= a = R / a), u = n + (ht *= a), y = r + (et *= a), w < -.96 || w > .96) dt = J * J * 1.5 - .5, ft = J * W * 1.5 - .866025403 * H, bt = J * H * 1.5 + .866025403 * W, vt = W * J * 1.5 + .866025403 * H, zt = W * W * 1.5 - .5, Nt = W * H * 1.5 - .866025403 * J, kt = H * J * 1.5 - .866025403 * W, wt = H * W * 1.5 + .866025403 * J, Mt = H * H * 1.5 - .5, (a = (p = (gt = p) - (Lt = pt * (gt - l) + ut * ((It = u) - c) + yt * ((Vt = y) - m)) * pt - l) * p + (u = It - Lt * ut - c) * u + (y = Vt - Lt * yt - m) * y) > _ * _ && (p *= a = _ / g.sqrt(a), u *= a, y *= a), gt = l + p, It = c + u, Vt = m + y, s.addPoint(gt, It, Vt, -pt, -ut, -yt, Lt, !1), It = st * vt + ht * zt + et * Nt, Vt = st * kt + ht * wt + et * Mt, (Lt = pt * ((gt = (st = gt = st * dt + ht * ft + et * bt) + o) - l) + ut * ((It = (ht = It) + n) - c) + yt * ((Vt = (et = Vt) + r) - m)) <= 0 && ((a = (p = gt - Lt * pt - l) * p + (u = It - Lt * ut - c) * u + (y = Vt - Lt * yt - m) * y) > _ * _ && (p *= a = _ / g.sqrt(a), u *= a, y *= a), gt = l + p, It = c + u, Vt = m + y, s.addPoint(gt, It, Vt, -pt, -ut, -yt, Lt, !1)), It = st * vt + ht * zt + et * Nt, Vt = st * kt + ht * wt + et * Mt, (Lt = pt * ((gt = (st = gt = st * dt + ht * ft + et * bt) + o) - l) + ut * ((It = (ht = It) + n) - c) + yt * ((Vt = (et = Vt) + r) - m)) <= 0 && ((a = (p = gt - Lt * pt - l) * p + (u = It - Lt * ut - c) * u + (y = Vt - Lt * yt - m) * y) > _ * _ && (p *= a = _ / g.sqrt(a), u *= a, y *= a), gt = l + p, It = c + u, Vt = m + y, s.addPoint(gt, It, Vt, -pt, -ut, -yt, Lt, !1));
                        else {
                            if (x = p, w > 0 ? (b = p + J * D * 2, v = u + W * D * 2, z = y + H * D * 2) : (b = p - J * D * 2, v = u - W * D * 2, z = y - H * D * 2), (Tt = (St = (st = l - (x -= (N = pt * (x - l) + ut * ((d = u) - c) + yt * ((f = y) - m)) * pt)) * (p = (b -= (k = pt * (b - l) + ut * (v - c) + yt * (z - m)) * pt) - x) + (ht = c - (d -= N * ut)) * (u = (v -= k * ut) - d) + (et = m - (f -= N * yt)) * (y = (z -= k * yt) - f)) * St - (Pt = p * p + u * u + y * y) * (st * st + ht * ht + et * et - _ * _)) < 0) break;
                            (I = (St - (Tt = g.sqrt(Tt))) / Pt) < (M = (St + Tt) / Pt) && (a = M, M = I, I = a), I > 1 && (I = 1), M < 0 && (M = 0), p = x + (b - x) * M, u = d + (v - d) * M, y = f + (z - f) * M, b = x + (b - x) * I, v = d + (v - d) * I, z = f + (z - f) * I, x = p, d = u, f = y, a = N + (k - N) * M, k = N + (k - N) * I, (N = a) < 0 && s.addPoint(x, d, f, -pt, -ut, -yt, N, !1), k < 0 && s.addPoint(b, v, z, -pt, -ut, -yt, k, !1)
                        }
                }
            }
        }
    }), St.prototype = Object.assign(Object.create(gt.prototype), {
        constructor: St,
        detectCollision: function(t, i, s) {
            var h, e;
            this.flip ? (h = i, e = t) : (h = t, e = i);
            var a, o, n, r, l, c = e.dimentions,
                m = h.position,
                p = m.x,
                u = m.y,
                y = m.z,
                x = e.position,
                d = x.x,
                f = x.y,
                b = x.z,
                v = h.radius,
                z = e.halfWidth,
                N = e.halfHeight,
                k = e.halfDepth,
                w = p - d,
                M = u - f,
                I = y - b,
                V = c[0] * w + c[1] * M + c[2] * I,
                L = c[3] * w + c[4] * M + c[5] * I,
                S = c[6] * w + c[7] * M + c[8] * I,
                P = 0;
            V > z ? V = z : V < -z ? V = -z : P = 1, L > N ? L = N : L < -N ? L = -N : P |= 2, S > k ? S = k : S < -k ? S = -k : P |= 4, 7 == P ? (I = S < 0 ? k + S : k - S, (w = V < 0 ? z + V : z - V) < (M = L < 0 ? N + L : N - L) ? w < I ? (r = w - z, V < 0 ? (V = -z, w = c[0], M = c[1], I = c[2]) : (V = z, w = -c[0], M = -c[1], I = -c[2])) : (r = I - k, S < 0 ? (S = -k, w = c[6], M = c[7], I = c[8]) : (S = k, w = -c[6], M = -c[7], I = -c[8])) : M < I ? (r = M - N, L < 0 ? (L = -N, w = c[3], M = c[4], I = c[5]) : (L = N, w = -c[3], M = -c[4], I = -c[5])) : (r = I - k, S < 0 ? (S = -k, w = c[6], M = c[7], I = c[8]) : (S = k, w = -c[6], M = -c[7], I = -c[8])), a = d + V * c[0] + L * c[3] + S * c[6], o = f + V * c[1] + L * c[4] + S * c[7], n = b + V * c[2] + L * c[5] + S * c[8], s.addPoint(p + v * w, u + v * M, y + v * I, w, M, I, r - v, this.flip)) : (a = d + V * c[0] + L * c[3] + S * c[6], o = f + V * c[1] + L * c[4] + S * c[7], n = b + V * c[2] + L * c[5] + S * c[8], (r = (w = a - m.x) * w + (M = o - m.y) * M + (I = n - m.z) * I) > 0 && r < v * v && (w *= l = 1 / (r = g.sqrt(r)), M *= l, I *= l, s.addPoint(p + v * w, u + v * M, y + v * I, w, M, I, r - v, this.flip)))
        }
    }), Pt.prototype = Object.assign(Object.create(gt.prototype), {
        constructor: Pt,
        detectCollision: function(t, i, s) {
            var h, e;
            this.flip ? (h = i, e = t) : (h = t, e = i);
            var a = h.position,
                o = a.x,
                n = a.y,
                r = a.z,
                l = e.position,
                c = l.x,
                m = l.y,
                p = l.z,
                u = e.normalDirection.x,
                y = e.normalDirection.y,
                x = e.normalDirection.z,
                d = h.radius,
                f = e.radius,
                b = d + f,
                v = e.halfHeight,
                z = o - c,
                N = n - m,
                k = r - p,
                w = z * u + N * y + k * x;
            if (!(w < -v - d || w > v + d)) {
                var M, I = c + w * u,
                    V = m + w * y,
                    L = p + w * x,
                    S = o - I,
                    P = n - V,
                    T = r - L,
                    A = S * S + P * P + T * T;
                if (!(A > b * b)) A > f * f && (S *= A = f / g.sqrt(A), P *= A, T *= A), w < -v ? w = -v : w > v && (w = v), (A = (z = (I = c + w * u + S) - o) * z + (N = (V = m + w * y + P) - n) * N + (k = (L = p + w * x + T) - r) * k) > 0 && A < d * d && (z *= M = 1 / (A = g.sqrt(A)), N *= M, k *= M, s.addPoint(o + z * d, n + N * d, r + k * d, z, N, k, A - d, this.flip))
            }
        }
    }), Tt.prototype = Object.assign(Object.create(gt.prototype), {
        constructor: Tt,
        detectCollision: function(t, i, s) {
            var h = t,
                e = i,
                a = h.position,
                o = e.position,
                n = o.x - a.x,
                r = o.y - a.y,
                l = o.z - a.z,
                c = n * n + r * r + l * l,
                m = h.radius,
                p = m + e.radius;
            if (c > 0 && c < p * p) {
                var u = 1 / (c = g.sqrt(c));
                n *= u, r *= u, l *= u, s.addPoint(a.x + n * m, a.y + r * m, a.z + l * m, n, r, l, c - p, !1)
            }
        }
    }), At.prototype = Object.assign(Object.create(gt.prototype), {
        constructor: At,
        detectCollision: function(t, i, s) {
            var h, e = this.n,
                a = this.p,
                o = this.flip ? i : t,
                n = this.flip ? t : i,
                r = o.radius;
            e.sub(o.position, n.position), e.x *= n.normal.x, e.y *= n.normal.y, e.z *= n.normal.z, (h = e.lengthSq()) > 0 && h < r * r && (h = g.sqrt(h), e.copy(n.normal).negate(), a.copy(o.position).addScaledVector(e, r), s.addPointVec(a, e, h - r, this.flip))
        }
    }), jt.prototype = Object.assign(Object.create(gt.prototype), {
        constructor: jt,
        detectCollision: function(t, i, s) {
            var h, e = this.n,
                a = this.p,
                o = this.cc,
                n = this.flip ? i : t,
                r = this.flip ? t : i,
                l = n.dimentions,
                c = n.halfWidth,
                m = n.halfHeight,
                p = n.halfDepth,
                u = 0;
            this.dix.set(l[0], l[1], l[2]), this.diy.set(l[3], l[4], l[5]), this.diz.set(l[6], l[7], l[8]), e.sub(n.position, r.position), e.x *= r.normal.x, e.y *= r.normal.y, e.z *= r.normal.z, o.set(g.dotVectors(this.dix, e), g.dotVectors(this.diy, e), g.dotVectors(this.diz, e)), o.x > c ? o.x = c : o.x < -c ? o.x = -c : u = 1, o.y > m ? o.y = m : o.y < -m ? o.y = -m : u |= 2, o.z > p ? o.z = p : o.z < -p ? o.z = -p : u |= 4, 7 === u && (e.set(o.x < 0 ? c + o.x : c - o.x, o.y < 0 ? m + o.y : m - o.y, o.z < 0 ? p + o.z : p - o.z), e.x < e.y ? e.x < e.z ? (h = e.x - c, o.x < 0 ? (o.x = -c, e.copy(this.dix)) : (o.x = c, e.subEqual(this.dix))) : (h = e.z - p, o.z < 0 ? (o.z = -p, e.copy(this.diz)) : (o.z = p, e.subEqual(this.diz))) : e.y < e.z ? (h = e.y - m, o.y < 0 ? (o.y = -m, e.copy(this.diy)) : (o.y = m, e.subEqual(this.diy))) : (h = e.z - p, o.z < 0 ? (o.z = -p, e.copy(this.diz)) : (o.z = p, e.subEqual(this.diz))), a.copy(r.position).addScaledVector(e, 1), s.addPointVec(a, e, h, this.flip))
        }
    }), Object.assign(Ct.prototype, {
        World: !0,
        play: function() {
            if (null === this.timer) {
                var t = this;
                this.timer = setInterval(function() {
                    t.step()
                }, this.timerate)
            }
        },
        stop: function() {
            null !== this.timer && (clearInterval(this.timer), this.timer = null)
        },
        setGravity: function(t) {
            this.gravity.fromArray(t)
        },
        getInfo: function() {
            return this.isStat ? this.performance.show() : ""
        },
        clear: function() {
            for (this.stop(), this.preLoop = null, this.postLoop = null, this.randX = 65535; null !== this.joints;) this.removeJoint(this.joints);
            for (; null !== this.contacts;) this.removeContact(this.contacts);
            for (; null !== this.rigidBodies;) this.removeRigidBody(this.rigidBodies)
        },
        addRigidBody: function(t) {
            t.parent && I("World", "It is not possible to be added to more than one world one of the rigid body"), t.setParent(this);
            for (var i = t.shapes; null !== i; i = i.next) this.addShape(i);
            null !== this.rigidBodies && ((this.rigidBodies.prev = t).next = this.rigidBodies), this.rigidBodies = t, this.numRigidBodies++
        },
        removeRigidBody: function(t) {
            var i = t;
            if (i.parent === this) {
                i.awake();
                for (var s = i.jointLink; null != s;) {
                    var h = s.joint;
                    s = s.next, this.removeJoint(h)
                }
                for (var e = t.shapes; null !== e; e = e.next) this.removeShape(e);
                var a = i.prev,
                    o = i.next;
                null !== a && (a.next = o), null !== o && (o.prev = a), this.rigidBodies == i && (this.rigidBodies = o), i.prev = null, i.next = null, i.parent = null, this.numRigidBodies--
            }
        },
        getByName: function(t) {
            for (var i = this.rigidBodies; null !== i;) {
                if (i.name === t) return i;
                i = i.next
            }
            for (var s = this.joints; null !== s;) {
                if (s.name === t) return s;
                s = s.next
            }
            return null
        },
        addShape: function(t) {
            t.parent && t.parent.parent || I("World", "It is not possible to be added alone to shape world"), t.proxy = this.broadPhase.createProxy(t), t.updateProxy(), this.broadPhase.addProxy(t.proxy)
        },
        removeShape: function(t) {
            this.broadPhase.removeProxy(t.proxy), t.proxy = null
        },
        addJoint: function(t) {
            t.parent && I("World", "It is not possible to be added to more than one world one of the joint"), null != this.joints && ((this.joints.prev = t).next = this.joints), this.joints = t, t.setParent(this), this.numJoints++, t.awake(), t.attach()
        },
        removeJoint: function(t) {
            var i = t,
                s = i.prev,
                h = i.next;
            null !== s && (s.next = h), null !== h && (h.prev = s), this.joints == i && (this.joints = h), i.prev = null, i.next = null, this.numJoints--, i.awake(), i.detach(), i.parent = null
        },
        addContact: function(t, i) {
            var s;
            null !== this.unusedContacts ? (s = this.unusedContacts, this.unusedContacts = this.unusedContacts.next) : s = new lt, s.attach(t, i), s.detector = this.detectors[t.type][i.type], this.contacts && ((this.contacts.prev = s).next = this.contacts), this.contacts = s, this.numContacts++
        },
        removeContact: function(t) {
            var i = t.prev,
                s = t.next;
            s && (s.prev = i), i && (i.next = s), this.contacts == t && (this.contacts = s), t.prev = null, t.next = null, t.detach(), t.next = this.unusedContacts, this.unusedContacts = t, this.numContacts--
        },
        getContact: function(t, i) {
            var s, h;
            t = t.constructor === ct ? t.name : t, i = i.constructor === ct ? i.name : i;
            for (var e = this.contacts; null !== e;) {
                if (s = e.body1.name, h = e.body2.name, s === t && h === i || h === t && s === i) return e.touching ? e : null;
                e = e.next
            }
            return null
        },
        checkContact: function(t, i) {
            for (var s, h, e = this.contacts; null !== e;) {
                if (s = e.body1.name || " ", h = e.body2.name || " ", s == t && h == i || h == t && s == i) return !!e.touching;
                e = e.next
            }
        },
        callSleep: function(t) {
            return !!t.allowSleep && (!(t.linearVelocity.lengthSq() > .04) && !(t.angularVelocity.lengthSq() > .25))
        },
        step: function() {
            var t = this.isStat;
            t && this.performance.setTime(0);
            for (var i = this.rigidBodies; null !== i;) i.addedToIsland = !1, i.sleeping && i.testWakeUp(), i = i.next;
            t && this.performance.setTime(1), this.broadPhase.detectPairs();
            for (var s = this.broadPhase.pairs, h = this.broadPhase.numPairs; h--;) {
                var e, a, o, n = s[h];
                n.shape1.id < n.shape2.id ? (e = n.shape1, a = n.shape2) : (e = n.shape2, a = n.shape1), o = e.numContacts < a.numContacts ? e.contactLink : a.contactLink;
                for (var r = !1; o;) {
                    if ((z = o.contact).shape1 == e && z.shape2 == a) {
                        z.persisting = !0, r = !0;
                        break
                    }
                    o = o.next
                }
                r || this.addContact(e, a)
            }
            for (t && this.performance.calcBroadPhase(), this.numContactPoints = 0, z = this.contacts; null !== z;)
                if (z.persisting || !z.shape1.aabb.intersectTest(z.shape2.aabb)) {
                    var l = z.body1,
                        c = z.body2;
                    (l.isDynamic && !l.sleeping || c.isDynamic && !c.sleeping) && z.updateManifold(), this.numContactPoints += z.manifold.numPoints, z.persisting = !1, z.constraint.addedToIsland = !1, z = z.next
                } else {
                    var m = z.next;
                    this.removeContact(z), z = m
                }
            t && this.performance.calcNarrowPhase();
            var p, u, y = 1 / this.timeStep;
            for (p = this.joints; null !== p; p = p.next) p.addedToIsland = !1;
            this.islandRigidBodies = [], this.islandConstraints = [], this.islandStack = [], t && this.performance.setTime(1), this.numIslands = 0;
            for (var x = this.rigidBodies; null !== x; x = x.next)
                if (!(x.addedToIsland || x.isStatic || x.sleeping))
                    if (x.isLonely()) x.isDynamic && x.linearVelocity.addScaledVector(this.gravity, this.timeStep), this.callSleep(x) ? (x.sleepTime += this.timeStep, x.sleepTime > .5 ? x.sleep() : x.updatePosition(this.timeStep)) : (x.sleepTime = 0, x.updatePosition(this.timeStep)), this.numIslands++;
                    else {
                        var d = 0,
                            f = 0,
                            b = 1;
                        this.islandStack[0] = x, x.addedToIsland = !0;
                        do {
                            if (i = this.islandStack[--b], this.islandStack[b] = null, i.sleeping = !1, this.islandRigidBodies[d++] = i, !i.isStatic) {
                                for (var v = i.contactLink; null !== v; v = v.next) {
                                    var z;
                                    if (!(u = (z = v.contact).constraint).addedToIsland && z.touching) this.islandConstraints[f++] = u, u.addedToIsland = !0, (m = v.body).addedToIsland || (this.islandStack[b++] = m, m.addedToIsland = !0)
                                }
                                for (var N = i.jointLink; null !== N; N = N.next)(u = N.joint).addedToIsland || (this.islandConstraints[f++] = u, u.addedToIsland = !0, !(m = N.body).addedToIsland && m.isDynamic && (this.islandStack[b++] = m, m.addedToIsland = !0))
                            }
                        } while (0 != b);
                        for (var k = (new L).addScaledVector(this.gravity, this.timeStep), w = d; w--;)(i = this.islandRigidBodies[w]).isDynamic && i.linearVelocity.addEqual(k);
                        if (this.enableRandomizer)
                            for (w = f; w--;)
                                if (0 !== w) {
                                    var M = (this.randX = this.randX * this.randA + this.randB & 2147483647) / 2147483648 * w | 0;
                                    u = this.islandConstraints[w], this.islandConstraints[w] = this.islandConstraints[M], this.islandConstraints[M] = u
                                }
                        for (w = f; w--;) this.islandConstraints[w].preSolve(this.timeStep, y);
                        for (var g = this.numIterations; g--;)
                            for (w = f; w--;) this.islandConstraints[w].solve();
                        for (w = f; w--;) this.islandConstraints[w].postSolve(), this.islandConstraints[w] = null;
                        var I = 10;
                        for (w = d; w--;) i = this.islandRigidBodies[w], this.callSleep(i) ? (i.sleepTime += this.timeStep, i.sleepTime < I && (I = i.sleepTime)) : (i.sleepTime = 0, I = 0);
                        if (I > .5)
                            for (w = d; w--;) this.islandRigidBodies[w].sleep(), this.islandRigidBodies[w] = null;
                        else
                            for (w = d; w--;) this.islandRigidBodies[w].updatePosition(this.timeStep), this.islandRigidBodies[w] = null;
                        this.numIslands++
                    }
            t && this.performance.calcEnd(), null !== this.postLoop && this.postLoop()
        },
        remove: function(t) {},
        add: function(t) {
            var i = (t = t || {}).type || "box";
            return i.constructor === String && (i = [i]), "joint" === i[0].substring(0, 5) ? this.initJoint(i[0], t) : this.initBody(i, t)
        },
        initBody: function(t, i) {
            var s = this.invScale,
                h = i.move || !1,
                e = i.kinematic || !1,
                a = i.pos || [0, 0, 0];
            a = a.map(function(t) {
                return t * s
            });
            var o = i.posShape || [0, 0, 0];
            o = o.map(function(t) {
                return t * s
            });
            var n = i.rot || [0, 0, 0];
            n = n.map(function(t) {
                return t * g.degtorad
            });
            var r = i.rotShape;
            r = n.map(function(t) {
                return t * g.degtorad
            });
            var l = void 0 === i.size ? [1, 1, 1] : i.size;
            1 === l.length && (l[1] = l[0]), 2 === l.length && (l[2] = l[0]), l = l.map(function(t) {
                return t * s
            });
            var c = new F;
            void 0 !== i.density && (c.density = i.density), void 0 !== i.friction && (c.friction = i.friction), void 0 !== i.restitution && (c.restitution = i.restitution), void 0 !== i.belongsTo && (c.belongsTo = i.belongsTo), void 0 !== i.collidesWith && (c.collidesWith = i.collidesWith), void 0 !== i.config && (void 0 !== i.config[0] && (c.density = i.config[0]), void 0 !== i.config[1] && (c.friction = i.config[1]), void 0 !== i.config[2] && (c.restitution = i.config[2]), void 0 !== i.config[3] && (c.belongsTo = i.config[3]), void 0 !== i.config[4] && (c.collidesWith = i.config[4]));
            for (var m, p, u = new ct(new L(a[0], a[1], a[2]), (new S).setFromEuler(n[0], n[1], n[2])), y = 0; y < t.length; y++) {
                switch (void 0 !== o[p = 3 * y] && c.relativePosition.set(o[p], o[p + 1], o[p + 2]), void 0 !== r[p] && c.relativeRotation.setQuat((new S).setFromEuler(r[p], r[p + 1], r[p + 2])), t[y]) {
                    case "sphere":
                        m = new O(c, l[p]);
                        break;
                    case "cylinder":
                        m = new D(c, l[p], l[p + 1]);
                        break;
                    case "box":
                        m = new C(c, l[p], l[p + 1], l[p + 2]);
                        break;
                    case "plane":
                        m = new E(c)
                }
                u.addShape(m)
            }
            return i.neverSleep || e ? u.allowSleep = !1 : u.allowSleep = !0, u.isKinematic = e, h ? i.massPos || i.massRot ? u.setupMass(1, !1) : u.setupMass(1, !0) : u.setupMass(2), void 0 !== i.name && (u.name = i.name), this.addRigidBody(u), h && (i.sleep ? u.sleep() : u.awake()), u
        },
        initJoint: function(t, i) {
            var s, h, e = this.invScale,
                a = i.axe1 || [1, 0, 0],
                o = i.axe2 || [1, 0, 0],
                n = i.pos1 || [0, 0, 0],
                r = i.pos2 || [0, 0, 0];
            n = n.map(function(t) {
                return t * e
            }), r = r.map(function(t) {
                return t * e
            }), "jointDistance" === t ? (s = i.min || 0, h = i.max || 10, s *= e, h *= e) : (s = i.min || 57.29578, h = i.max || 0, s *= g.degtorad, h *= g.degtorad);
            var l = i.limit || null,
                c = i.spring || null,
                m = i.motor || null,
                p = new it;
            p.scale = this.scale, p.invScale = this.invScale, p.allowCollision = i.collision || !1, p.localAxis1.set(a[0], a[1], a[2]), p.localAxis2.set(o[0], o[1], o[2]), p.localAnchorPoint1.set(n[0], n[1], n[2]), p.localAnchorPoint2.set(r[0], r[1], r[2]);
            var u, y = null,
                x = null;
            if (void 0 === i.body1 || void 0 === i.body2) return I("World", "Can't add joint if attach rigidbodys not define !");
            if (i.body1.constructor === String ? y = this.getByName(i.body1) : i.body1.constructor === Number ? y = this.getByName(i.body1) : i.body1.constructor === ct && (y = i.body1), i.body2.constructor === String ? x = this.getByName(i.body2) : i.body2.constructor === Number ? x = this.getByName(i.body2) : i.body2.constructor === ct && (x = i.body2), null === y || null === x) return I("World", "Can't add joint attach rigidbodys not find !");
            switch (p.body1 = y, p.body2 = x, t) {
                case "jointDistance":
                    u = new Y(p, s, h), null !== c && u.limitMotor.setSpring(c[0], c[1]), null !== m && u.limitMotor.setMotor(m[0], m[1]);
                    break;
                case "jointHinge":
                case "joint":
                    u = new H(p, s, h), null !== c && u.limitMotor.setSpring(c[0], c[1]), null !== m && u.limitMotor.setMotor(m[0], m[1]);
                    break;
                case "jointPrisme":
                    u = new G(p, s, h);
                    break;
                case "jointSlide":
                    u = new $(p, s, h);
                    break;
                case "jointBall":
                    u = new Q(p);
                    break;
                case "jointWheel":
                    u = new tt(p), null !== l && u.rotationalLimitMotor1.setLimit(l[0], l[1]), null !== c && u.rotationalLimitMotor1.setSpring(c[0], c[1]), null !== m && u.rotationalLimitMotor1.setMotor(m[0], m[1])
            }
            return u.name = i.name || "", this.addJoint(u), u
        }
    }), t.Math = g, t.Vec3 = L, t.Quat = S, t.Mat33 = P, t.Shape = j, t.Box = C, t.Sphere = O, t.Cylinder = D, t.Plane = E, t.Particle = B, t.ShapeConfig = F, t.LimitMotor = q, t.HingeJoint = H, t.BallAndSocketJoint = Q, t.DistanceJoint = Y, t.PrismaticJoint = G, t.SliderJoint = $, t.WheelJoint = tt, t.JointConfig = it, t.RigidBody = ct, t.World = Ct, t.REVISION = o, t.BR_NULL = n, t.BR_BRUTE_FORCE = r, t.BR_SWEEP_AND_PRUNE = l, t.BR_BOUNDING_VOLUME_TREE = c, t.BODY_NULL = m, t.BODY_DYNAMIC = 1, t.BODY_STATIC = 2, t.BODY_KINEMATIC = 3, t.BODY_GHOST = 4, t.SHAPE_NULL = p, t.SHAPE_SPHERE = u, t.SHAPE_BOX = y, t.SHAPE_CYLINDER = x, t.SHAPE_PLANE = d, t.SHAPE_PARTICLE = f, t.SHAPE_TETRA = 6, t.JOINT_NULL = b, t.JOINT_DISTANCE = v, t.JOINT_BALL_AND_SOCKET = z, t.JOINT_HINGE = N, t.JOINT_WHEEL = k, t.JOINT_SLIDER = w, t.JOINT_PRISMATIC = M, t.AABB_PROX = .005, t.printError = I, t.InfoDisplay = V, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});