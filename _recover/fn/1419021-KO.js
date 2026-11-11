function KO(e) {
  return e && e.__esModule ? e.default : e
}
var qO = {}
qO = JSON.parse(
  `{"architecture":"attention-v3-int8","formatVersion":3,"globalBias":[-0.32877659797668457,0.4370867609977722,-0.05251404270529747,1.3072023391723633,0.0477047860622406,0.24477416276931763,0.009111796505749226,-0.17459993064403534],"globalFeatureInverseStandardDeviation":[10.771836280822754,1.9548665285110474,1.612365484237671],"globalFeatureMean":[0.9198138117790222,-0.49808526039123535,0.03374629095196724],"globalWeights":[101,-4,7,-127,6,-11,3,1,0,-16,-7,8,-8,-1,7,-4,0,0,-12,-3,-13,1,0,2],"headBias":[-0.15895532071590424,0.007501596584916115,-0.47742825746536255,0.01632097363471985,-0.48355796933174133,-0.1052703931927681,-0.8414919376373291,-0.21046382188796997],"headWeights":[-45,-7,-45,-20,7,-13,120,-24,-15,-26,-19,1,27,-48,-4,-10,1,-5,-24,64,91,-1,-68,39,54,39,101,-40,-127,64,-41,-17,-23,-19,3,35,-2,33,3,9,-64,-32,30,42,-112,12,28,-11,15,2,-4,-7,7,-3,-5,1,76,48,-34,-67,103,-40,-26,1,58,-11,46,-41,5,-6,-17,-8,13,17,-35,45,27,-17,-28,7,-53,12,-51,6,-32,-5,58,-9,-28,-21,37,-12,1,20,2,2,11,7,-4,-9,2,-15,-1,-8,16,12,-27,-1,61,-5,-1,4,-7,-2,7,4,1,4,-2,4,-18,-16,28,6,-65,16,3,-3,-5,-2,0,-40,-21,-22,14,30,-21,49,15,-64,43,19,23,18,5,-15,21,21,30,17,-11,-6,22,-38,-20,97,-46,-5,-13,-59,26,-13,11,-2,-10,-8,2,-15,-17,-27,-9,26,7,-7,6,9,-32,5,-9,12,49,17,-1,24,20,35,14,-33,-50,-1,-4,-26,11,11,9,-80,30,9,36,6,-12,-4,-7,39,-10,-30,-49,1,-43,-20,-34,76,-36,-10,15,-8,43,31,38,-42,39,37,-7,7,8,16,28,-83,32,9,23,-13,39,119,23,-127,-24,8,-48,-29,-7,-33,-12,58,-24,-29,-19,12,-55,-90,0,126,26,42,54,22],"keyProjectionWeights":[0,-1,-1,1,1,1,1,1,-64,32,49,23,-25,4,27,-22,0,1,-1,-1,-1,1,1,0,-34,38,64,88,13,-53,-41,58,-7,-4,79,-41,27,26,14,2,-2,1,1,1,-1,-1,1,1,1,-1,-1,-1,-1,-1,1,1,4,-3,126,42,-40,-116,35,20],"name":"residual-attention-v3-50m-qat-int8-epoch-25-zo-278w","outputBias":-0.0005526235327124596,"outputWeights":[11,11,14,-27,9,-22,127,6],"quantization":{"scales":{"globalWeight":0.021090541950849095,"headWeight":0.04935851140909355,"keyWeight":0.1733924937791441,"outputWeight":0.0030087142047955295,"tapInputWeight":0.1096231754049479,"tapOutputWeight":0.017949438644286102,"valueWeight":0.013986751242596301},"scheme":"symmetric-int8-per-tensor","zeroPoint":0},"summaryQueries":[0.0038647791370749474,0.09565000981092453,0.002756686182692647,-0.08183622360229492,-0.15209506452083588,-0.0006105066277086735,0.0010439646430313587,-0.03020688332617283,0.005065929610282183,0.14488759636878967,0.003160916268825531,-0.0855727270245552,-0.3123375475406647,0.00039022407145239413,0.0037786494940519333,0.1451321840286255,-0.002009483054280281,0.0597594790160656,0.0045239729806780815,-0.08765853196382523,-0.13884992897510529,-0.0021647117100656033,0.003985927440226078,0.09727758169174194,0.007170629221946001,0.0786278173327446,0.004103775601834059,-0.1198369711637497,-0.2925199568271637,-0.002055276418104768,0.0030450925696641207,0.14401987195014954],"supportedDenoiseSamples":[4,8,16],"tapFeatureInverseStandardDeviation":[2.283243417739868,0.8810898065567017,0.8210930228233337,3.752316474914551,3.6375720500946045,2.670454978942871,10.249449729919434,0.12639354169368744,100],"tapFeatureMean":[0.010318092070519924,0.01364430133253336,0.13411010801792145,-0.004725644364953041,0.10053129494190216,0.8384788632392883,0.9203217625617981,1.7139031887054443,1],"tapInputBias":[0.4780646860599518,-0.45214661955833435,0.289407879114151,0.34804567694664,-0.1320028454065323,0.17722633481025696,0.011480014771223068,-0.26692497730255127],"tapInputWeights":[0,1,7,0,-1,-7,0,31,-2,-1,14,-126,0,0,-1,2,26,-2,0,66,-73,0,0,0,-12,22,-3,0,-76,-90,0,-1,-7,-3,58,-1,0,2,6,0,0,3,4,-40,0,0,3,-13,0,0,1,-7,-13,0,0,-7,10,0,-2,-7,0,-39,-2,0,-13,-19,0,-2,20,-1,3,-1],"tapOutputBias":[-0.3867710530757904,0.1349504142999649,0.35706064105033875,-0.5938405394554138,-0.031154220923781395,1.4079623222351074,-1.9221038818359375,0.6029739379882812],"tapOutputWeights":[18,-4,47,19,74,-94,-21,-9,73,-59,88,-10,-3,71,-7,24,20,74,24,-31,-12,-10,-15,-45,-126,2,-4,27,-5,24,35,-11,-4,9,-8,26,-10,27,26,-20,17,-50,5,-35,0,-5,12,-71,89,-58,22,-83,-115,7,-16,-89,89,22,1,-20,-22,-25,-26,44],"valueProjectionWeights":[-16,-6,40,-17,84,-76,59,51,-10,-2,-10,-1,-23,74,-70,23,-5,4,4,-7,-77,127,20,-48,-36,4,-17,-12,-4,10,29,-27,-2,11,-47,-50,-54,-3,14,11,-23,-1,109,31,4,-100,-33,-36,-19,0,-8,20,-35,-24,79,2,44,2,5,7,22,-70,-67,-35]}`,
)
var JO = [
    [`tapInputWeight`, `tapInputWeights`, 8, 9],
    [`tapOutputWeight`, `tapOutputWeights`, 8, 8],
    [`globalWeight`, `globalWeights`, 8, 3],
    [`keyWeight`, `keyProjectionWeights`, 8, 8],
    [`valueWeight`, `valueProjectionWeights`, 8, 8],
    [`headWeight`, `headWeights`, 8, 32],
    [`outputWeight`, `outputWeights`, 1, 8],
  ],
  YO = (e) => {
    let t = KO(qO).quantization?.scales?.[e]
    if (!(t > 0) || !Number.isFinite(t))
      throw Error(`The bundled N8AO neural model has no valid ${e} scale.`)
    return t
  }
if (
  KO(qO).architecture !== `attention-v3-int8` ||
  KO(qO).formatVersion !== 3 ||
  KO(qO).quantization?.scheme !== `symmetric-int8-per-tensor` ||
  KO(qO).quantization?.zeroPoint !== 0 ||
  KO(qO).supportedDenoiseSamples?.join(`,`) !== `4,8,16` ||
  JO.some(
    ([, e, t, n]) =>
      KO(qO)[e]?.length !== t * n ||
      KO(qO)[e].some((e) => !Number.isInteger(e) || e < -127 || e > 127),
  )
)
  throw Error(`The bundled N8AO neural denoise model has an unsupported layout.`)
var XO = (e) => {
    if (!Number.isFinite(e))
      throw Error(`The bundled N8AO neural model contains a non-finite value.`)
    if (Object.is(e, -0)) return `0.0`
    let t = Number(e).toString()
    return /[.eE]/.test(t) ? t : `${t}.0`
  },
  ZO = [`x`, `y`, `z`, `w`],
  QO = (e) => [...ZO.map((t) => `${e}.lo.${t}`), ...ZO.map((t) => `${e}.hi.${t}`)],
  $O = (e, t) =>
    e === 0
      ? null
      : e === 1
        ? t
        : e === -1
          ? `(-${t})`
          : e < 0
            ? `(-${XO(-e)} * ${t})`
            : `${XO(e)} * ${t}`,
  ek = (e, t) => (e === 0 ? null : `${XO(e)} * ${t}`),
  tk = (e) => e.filter(Boolean).join(` + `) || `0.0`,
  nk = (e, t, n, r, i, a) => {
    let o = r.map((r, i) => $O(e[t * n + i], r))
    return `${XO(i)} * (${tk(o)}) + ${XO(a[t])}`
  },
  rk = (e, t = `        `) =>
    `vec4(\n${e.map((e) => `${t}    ${e}`).join(`,
`)}\n${t})`,
  ik = ({ functionName: e, scaleName: t, weights: n, bias: r, width: i = 8, relu: a = !1 }) => {
    let o = QO(`inputToken`),
      s = YO(t),
      c = Array.from({ length: 8 }, (e, t) => nk(n, t, i, o, s, r)),
      l = rk(c.slice(0, 4)),
      u = rk(c.slice(4)),
      d = (e) => (a ? `max(${e}, vec4(0.0))` : e)
    return `
    NeuralToken neural${e[0].toUpperCase()}${e.slice(1)}(NeuralToken inputToken) {
        return NeuralToken(
            ${d(l)},
            ${d(u)}
        );
    }
`
  },
  ak = (e, t, n, r, i, a, o, s = {}) =>
    Array.from({ length: i }, (i, c) => {
      let l = t[c]
      for (let t = 0; t < a; t++) {
        let i = e[c * a + t] * o
        ;((l -= i * r[t] * n[t]), Object.hasOwn(s, t) && (l += i * r[t] * s[t]))
      }
      return l
    }),
  ok = YO(`tapInputWeight`),
  sk = ak(
    KO(qO).tapInputWeights,
    KO(qO).tapInputBias,
    KO(qO).tapFeatureMean,
    KO(qO).tapFeatureInverseStandardDeviation,
    8,
    9,
    ok,
    { 8: 1 },
  ),
  ck = QO(`scaledInput`),
  lk = Array.from({ length: 8 }, (e, t) => nk(KO(qO).tapInputWeights, t, 9, ck, ok, sk)),
  uk = `
    NeuralToken neuralTapInput(NeuralToken raw) {
        NeuralToken scaledInput = NeuralToken(
            raw.lo * ${rk(KO(qO).tapFeatureInverseStandardDeviation.slice(0, 4), `            `)},
            raw.hi * ${rk(KO(qO).tapFeatureInverseStandardDeviation.slice(4, 8), `            `)}
        );
        return NeuralToken(
            max(${rk(lk.slice(0, 4))}, vec4(0.0)),
            max(${rk(lk.slice(4))}, vec4(0.0))
        );
    }
`,
  dk = YO(`globalWeight`),
  fk = ak(
    KO(qO).globalWeights,
    KO(qO).globalBias,
    KO(qO).globalFeatureMean,
    KO(qO).globalFeatureInverseStandardDeviation,
    8,
    3,
    dk,
  ),
  pk = ZO.slice(0, 3).map((e) => `scaledInput.${e}`),
  mk = Array.from({ length: 8 }, (e, t) => nk(KO(qO).globalWeights, t, 3, pk, dk, fk)),
  hk = `
    NeuralToken neuralEncodeGlobal(vec4 raw) {
        vec3 scaledInput = raw.xyz * vec3(
            ${KO(qO).globalFeatureInverseStandardDeviation.map(XO).join(`, `)}
        );
        return NeuralToken(
            max(${rk(mk.slice(0, 4))}, vec4(0.0)),
            max(${rk(mk.slice(4))}, vec4(0.0))
        );
    }
`,
  gk = QO(`key`),
  _k = `
    vec4 neuralQueryScores(NeuralToken key) {
        return ${rk(Array.from({ length: 4 }, (e, t) => tk(gk.map((e, n) => ek(KO(qO).summaryQueries[t * 8 + n], e)))))};
    }
`,
  vk = []
for (let e = 0; e < 4; e++)
  vk.push(
    ...ZO.map((t) => `runningSummaryLo[${e}].${t}`),
    ...ZO.map((t) => `runningSummaryHi[${e}].${t}`),
  )
var yk = YO(`headWeight`),
  bk = Array.from({ length: 8 }, (e, t) =>
    nk(KO(qO).headWeights, t, 32, vk, yk, KO(qO).headBias),
  ),
  xk = `
    NeuralToken neuralHead(
        vec4 runningSummaryLo[4],
        vec4 runningSummaryHi[4]
    ) {
        return NeuralToken(
            max(${rk(bk.slice(0, 4))}, vec4(0.0)),
            max(${rk(bk.slice(4))}, vec4(0.0))
        );
    }
`,
  Sk = `
    float neuralOutput(NeuralToken head) {
        return ${nk(KO(qO).outputWeights, 0, 8, QO(`head`), YO(`outputWeight`), [KO(qO).outputBias])};
    }
`,
  Ck = [
    uk,
    ik({
      functionName: `tapOutput`,
      scaleName: `tapOutputWeight`,
      weights: KO(qO).tapOutputWeights,
      bias: KO(qO).tapOutputBias,
      relu: !0,
    }),
    hk,
    ik({
      functionName: `keyProject`,
      scaleName: `keyWeight`,
      weights: KO(qO).keyProjectionWeights,
      bias: Array(8).fill(0),
    }),
    ik({
      functionName: `valueProject`,
      scaleName: `valueWeight`,
      weights: KO(qO).valueProjectionWeights,
      bias: Array(8).fill(0),
    }),
    _k,
    xk,
    Sk,
  ].join(`
`)
;(JO.reduce((e, [, t]) => e + KO(qO)[t].length, 0),
  JO.reduce((e, [, t]) => e + KO(qO)[t].filter((e) => e !== 0).length, 0),
  `${Ck}`)
var wk = (e) => (typeof e == `object` && e && `current` in e ? e.current : e)
