const WORDS = [
  {w:"abundant",p:"/əˈbʌndənt/",t:"adj.",z:"丰富的；充足的",d:"existing in large quantities",e:"The region has abundant natural resources."},
  {w:"accelerate",p:"/əkˈseləreɪt/",t:"v.",z:"加速；促进",d:"to make something happen faster",e:"Warmer temperatures can accelerate the melting of glaciers."},
  {w:"adapt",p:"/əˈdæpt/",t:"v.",z:"适应；改编",d:"to change in order to suit new conditions",e:"Many species adapt to seasonal changes in food supply."},
  {w:"advocate",p:"/ˈædvəkeɪt/",t:"v.",z:"提倡；拥护",d:"to publicly support an idea or policy",e:"The researchers advocate stricter protection for wetlands."},
  {w:"allocate",p:"/ˈæləkeɪt/",t:"v.",z:"分配；拨给",d:"to distribute something for a particular purpose",e:"The city allocated more land for public parks."},
  {w:"alter",p:"/ˈɔːltər/",t:"v.",z:"改变；修改",d:"to change something, usually slightly",e:"Human activity has altered the natural landscape."},
  {w:"ambiguous",p:"/æmˈbɪɡjuəs/",t:"adj.",z:"模棱两可的；不明确的",d:"having more than one possible meaning",e:"The evidence is ambiguous and supports several explanations."},
  {w:"analogous",p:"/əˈnæləɡəs/",t:"adj.",z:"相似的；可比的",d:"similar in a way that allows comparison",e:"The wings of birds and insects perform analogous functions."},
  {w:"anticipate",p:"/ænˈtɪsəpeɪt/",t:"v.",z:"预期；预料",d:"to expect something and prepare for it",e:"Farmers must anticipate changes in rainfall patterns."},
  {w:"arbitrary",p:"/ˈɑːrbətreri/",t:"adj.",z:"任意的；武断的",d:"based on personal choice rather than reason",e:"The boundary was arbitrary and ignored natural features."},
  {w:"assess",p:"/əˈses/",t:"v.",z:"评估；评价",d:"to judge the quality, value, or importance of something",e:"Scientists assessed the damage after the storm."},
  {w:"attribute",p:"/əˈtrɪbjuːt/",t:"v.",z:"把……归因于",d:"to regard something as being caused by something else",e:"Researchers attribute the decline to habitat loss."},
  {w:"coherent",p:"/koʊˈhɪrənt/",t:"adj.",z:"连贯的；条理清楚的",d:"logical and well organized",e:"The speaker presented a coherent argument."},
  {w:"coincide",p:"/ˌkoʊɪnˈsaɪd/",t:"v.",z:"同时发生；相符",d:"to happen at the same time or agree exactly",e:"The migration period coincides with the rainy season."},
  {w:"compile",p:"/kəmˈpaɪl/",t:"v.",z:"汇编；收集",d:"to collect information and arrange it in a list",e:"The team compiled data from hundreds of surveys."},
  {w:"complement",p:"/ˈkɑːmpləment/",t:"v.",z:"补充；使完善",d:"to add something that improves or completes",e:"Field observations complement the laboratory results."},
  {w:"comprehensive",p:"/ˌkɑːmprɪˈhensɪv/",t:"adj.",z:"全面的；综合的",d:"including all or nearly all aspects",e:"The report provides a comprehensive history of the region."},
  {w:"conceive",p:"/kənˈsiːv/",t:"v.",z:"构想；想象",d:"to form an idea or plan in the mind",e:"The device was originally conceived as a research tool."},
  {w:"concurrent",p:"/kənˈkɜːrənt/",t:"adj.",z:"同时发生的",d:"existing or happening at the same time",e:"The two concurrent droughts placed great pressure on farms."},
  {w:"confer",p:"/kənˈfɜːr/",t:"v.",z:"授予；商议",d:"to grant something or discuss before deciding",e:"The discovery conferred an advantage on early settlers."},
  {w:"conform",p:"/kənˈfɔːrm/",t:"v.",z:"符合；遵从",d:"to follow an accepted standard or rule",e:"The new buildings must conform to safety regulations."},
  {w:"consecutive",p:"/kənˈsekjətɪv/",t:"adj.",z:"连续的",d:"following one after another without interruption",e:"The town experienced three consecutive years of drought."},
  {w:"constrain",p:"/kənˈstreɪn/",t:"v.",z:"限制；约束",d:"to limit the freedom or ability of something",e:"A lack of water constrained the growth of the settlement."},
  {w:"controversy",p:"/ˈkɑːntrəvɜːrsi/",t:"n.",z:"争议；争论",d:"public disagreement about an important issue",e:"The theory generated considerable controversy."},
  {w:"convey",p:"/kənˈveɪ/",t:"v.",z:"传达；运送",d:"to communicate or transport something",e:"The paintings convey a sense of movement."},
  {w:"crucial",p:"/ˈkruːʃəl/",t:"adj.",z:"关键的；至关重要的",d:"extremely important to a result",e:"Pollinators play a crucial role in many ecosystems."},
  {w:"cumulative",p:"/ˈkjuːmjələtɪv/",t:"adj.",z:"累积的",d:"increasing by repeated additions",e:"The cumulative effect of small changes can be substantial."},
  {w:"decline",p:"/dɪˈklaɪn/",t:"v.",z:"下降；衰退",d:"to become smaller, weaker, or less",e:"The population began to decline in the late century."},
  {w:"deduce",p:"/dɪˈduːs/",t:"v.",z:"推断；演绎",d:"to reach a conclusion from available information",e:"From the tracks, scientists deduced how the animal moved."},
  {w:"demonstrate",p:"/ˈdemənstreɪt/",t:"v.",z:"证明；展示",d:"to show clearly that something is true",e:"The experiment demonstrates the importance of sunlight."},
  {w:"derive",p:"/dɪˈraɪv/",t:"v.",z:"获得；源自",d:"to obtain something from a source",e:"Many medicines are derived from plants."},
  {w:"diminish",p:"/dɪˈmɪnɪʃ/",t:"v.",z:"减少；削弱",d:"to become or make something smaller",e:"The forest's ability to recover diminished over time."},
  {w:"discrete",p:"/dɪˈskriːt/",t:"adj.",z:"分离的；独立的",d:"separate and distinct",e:"The survey divided the habitat into discrete zones."},
  {w:"diverse",p:"/daɪˈvɜːrs/",t:"adj.",z:"多种多样的",d:"including many different types",e:"Coral reefs support a diverse range of species."},
  {w:"elaborate",p:"/ɪˈlæbərət/",t:"adj.",z:"精心制作的；复杂的",d:"containing many carefully arranged details",e:"The palace was decorated with elaborate stone carvings."},
  {w:"empirical",p:"/ɪmˈpɪrɪkəl/",t:"adj.",z:"以观察或实验为依据的",d:"based on observation or experiment",e:"The claim is supported by empirical evidence."},
  {w:"enhance",p:"/ɪnˈhæns/",t:"v.",z:"提高；增强",d:"to improve the quality or strength of something",e:"Trees enhance air quality in crowded cities."},
  {w:"establish",p:"/ɪˈstæblɪʃ/",t:"v.",z:"建立；证实",d:"to create something or prove a fact",e:"The study established a link between diet and health."},
  {w:"evaluate",p:"/ɪˈvæljueɪt/",t:"v.",z:"评价；评估",d:"to judge the value or effectiveness of something",e:"The committee evaluated several possible solutions."},
  {w:"evident",p:"/ˈevɪdənt/",t:"adj.",z:"明显的",d:"clear and easy to see or understand",e:"The influence of trade is evident in the artifacts."},
  {w:"exacerbate",p:"/ɪɡˈzæsərbeɪt/",t:"v.",z:"使恶化；加剧",d:"to make a problem or condition worse",e:"Heavy traffic can exacerbate urban air pollution."},
  {w:"explicit",p:"/ɪkˈsplɪsɪt/",t:"adj.",z:"明确的；直截了当的",d:"stated clearly and in detail",e:"The instructions contain explicit safety warnings."},
  {w:"facilitate",p:"/fəˈsɪləteɪt/",t:"v.",z:"促进；使便利",d:"to make an action or process easier",e:"Rivers facilitated travel and trade between communities."},
  {w:"fluctuate",p:"/ˈflʌktʃueɪt/",t:"v.",z:"波动；起伏",d:"to rise and fall irregularly",e:"Ocean temperatures fluctuate throughout the year."},
  {w:"fundamental",p:"/ˌfʌndəˈmentəl/",t:"adj.",z:"基本的；根本的",d:"forming the necessary base of something",e:"Access to water is fundamental to human survival."},
  {w:"hypothesis",p:"/haɪˈpɑːθəsɪs/",t:"n.",z:"假说；假设",d:"a proposed explanation that can be tested",e:"The results did not support the original hypothesis."},
  {w:"illustrate",p:"/ˈɪləstreɪt/",t:"v.",z:"说明；阐明",d:"to make an idea clear by using examples",e:"These fossils illustrate the process of evolution."},
  {w:"imply",p:"/ɪmˈplaɪ/",t:"v.",z:"暗示；意味着",d:"to suggest something without stating it directly",e:"The findings imply that the settlement was seasonal."},
  {w:"incentive",p:"/ɪnˈsentɪv/",t:"n.",z:"激励；刺激因素",d:"something that encourages a person to act",e:"Tax reductions gave companies an incentive to invest."},
  {w:"inevitable",p:"/ɪnˈevɪtəbəl/",t:"adj.",z:"不可避免的",d:"certain to happen and impossible to prevent",e:"Some degree of erosion is inevitable along the coast."},
  {w:"infer",p:"/ɪnˈfɜːr/",t:"v.",z:"推断；推论",d:"to form a conclusion from evidence",e:"We can infer the climate from ancient pollen samples."},
  {w:"inhibit",p:"/ɪnˈhɪbɪt/",t:"v.",z:"抑制；阻碍",d:"to prevent or slow down a process",e:"Low temperatures inhibit the growth of bacteria."},
  {w:"initiate",p:"/ɪˈnɪʃieɪt/",t:"v.",z:"开始；发起",d:"to cause a process or action to begin",e:"The government initiated a program to restore forests."},
  {w:"integrate",p:"/ˈɪntɪɡreɪt/",t:"v.",z:"整合；使融入",d:"to combine parts into a complete whole",e:"The design integrates traditional and modern elements."},
  {w:"interpret",p:"/ɪnˈtɜːrprət/",t:"v.",z:"解释；理解",d:"to explain or understand the meaning of something",e:"Historians interpret the document in different ways."},
  {w:"intervene",p:"/ˌɪntərˈviːn/",t:"v.",z:"干预；介入",d:"to become involved in order to change a result",e:"Officials intervened to prevent further damage."},
  {w:"intrinsic",p:"/ɪnˈtrɪnzɪk/",t:"adj.",z:"内在的；固有的",d:"belonging naturally to something",e:"Curiosity is intrinsic to scientific discovery."},
  {w:"justify",p:"/ˈdʒʌstəfaɪ/",t:"v.",z:"证明……合理",d:"to give a good reason for something",e:"The benefits may justify the high initial cost."},
  {w:"maintain",p:"/meɪnˈteɪn/",t:"v.",z:"维持；保养；主张",d:"to keep something at the same level or condition",e:"The system maintains a stable indoor temperature."},
  {w:"mitigate",p:"/ˈmɪtəɡeɪt/",t:"v.",z:"减轻；缓和",d:"to make something harmful less severe",e:"Wetlands can mitigate the effects of flooding."},
  {w:"modify",p:"/ˈmɑːdəfaɪ/",t:"v.",z:"修改；改变",d:"to change something slightly to improve it",e:"The builders modified the plan to reduce costs."},
  {w:"negligible",p:"/ˈneɡlɪdʒəbəl/",t:"adj.",z:"微不足道的；可忽略的",d:"too small or unimportant to matter",e:"The chemical had a negligible effect on plant growth."},
  {w:"nevertheless",p:"/ˌnevərðəˈles/",t:"adv.",z:"然而；尽管如此",d:"despite what has just been mentioned",e:"The route was difficult; nevertheless, trade continued."},
  {w:"objective",p:"/əbˈdʒektɪv/",t:"adj.",z:"客观的",d:"based on facts rather than personal feelings",e:"Researchers need objective methods of measurement."},
  {w:"obscure",p:"/əbˈskjʊr/",t:"v.",z:"遮掩；使模糊",d:"to make something difficult to see or understand",e:"Clouds obscured the mountain from view."},
  {w:"obtain",p:"/əbˈteɪn/",t:"v.",z:"获得；得到",d:"to get something through effort",e:"Plants obtain energy from sunlight."},
  {w:"paradigm",p:"/ˈpærədaɪm/",t:"n.",z:"范式；典型模式",d:"a model or pattern for understanding something",e:"The discovery created a new paradigm in astronomy."},
  {w:"perceive",p:"/pərˈsiːv/",t:"v.",z:"察觉；认为",d:"to notice or understand something",e:"Humans perceive depth through several visual cues."},
  {w:"persistent",p:"/pərˈsɪstənt/",t:"adj.",z:"持续的；坚持不懈的",d:"continuing for a long time",e:"Persistent winds shaped the unusual rock formations."},
  {w:"plausible",p:"/ˈplɔːzəbəl/",t:"adj.",z:"看似合理的；可信的",d:"seeming reasonable or likely to be true",e:"The archaeologists proposed a plausible explanation."},
  {w:"preliminary",p:"/prɪˈlɪməneri/",t:"adj.",z:"初步的；预备的",d:"done before a more important action",e:"Preliminary results suggest that the treatment works."},
  {w:"prevalent",p:"/ˈprevələnt/",t:"adj.",z:"普遍的；盛行的",d:"common in a particular place or time",e:"The disease was prevalent in crowded cities."},
  {w:"profound",p:"/prəˈfaʊnd/",t:"adj.",z:"深远的；深刻的",d:"having a very great effect or meaning",e:"Agriculture had a profound impact on human society."},
  {w:"prohibit",p:"/proʊˈhɪbɪt/",t:"v.",z:"禁止；阻止",d:"to officially forbid something",e:"Local laws prohibit construction near the shoreline."},
  {w:"promote",p:"/prəˈmoʊt/",t:"v.",z:"促进；推广",d:"to encourage the development of something",e:"The policy aims to promote renewable energy."},
  {w:"proportion",p:"/prəˈpɔːrʃən/",t:"n.",z:"比例；部分",d:"a part or share compared with the whole",e:"A large proportion of the population lived near rivers."},
  {w:"reinforce",p:"/ˌriːɪnˈfɔːrs/",t:"v.",z:"加强；强化",d:"to make something stronger",e:"Metal supports reinforce the ancient structure."},
  {w:"relevant",p:"/ˈreləvənt/",t:"adj.",z:"相关的；切题的",d:"directly connected with the subject",e:"Only data relevant to the question were included."},
  {w:"reluctant",p:"/rɪˈlʌktənt/",t:"adj.",z:"不情愿的；勉强的",d:"unwilling and hesitant",e:"Residents were reluctant to leave their homes."},
  {w:"require",p:"/rɪˈkwaɪər/",t:"v.",z:"需要；要求",d:"to need something or make it necessary",e:"The process requires a constant supply of heat."},
  {w:"resolve",p:"/rɪˈzɑːlv/",t:"v.",z:"解决；下定决心",d:"to find a solution to a problem",e:"Further research may resolve the debate."},
  {w:"retain",p:"/rɪˈteɪn/",t:"v.",z:"保留；保持",d:"to continue to have or keep something",e:"Clay soils retain more water than sandy soils."},
  {w:"reveal",p:"/rɪˈviːl/",t:"v.",z:"揭示；显示",d:"to make something previously hidden known",e:"The excavation revealed several layers of occupation."},
  {w:"rigid",p:"/ˈrɪdʒɪd/",t:"adj.",z:"僵硬的；严格的",d:"unable to bend or change easily",e:"The shell provides a rigid layer of protection."},
  {w:"significant",p:"/sɪɡˈnɪfɪkənt/",t:"adj.",z:"重要的；显著的",d:"important or large enough to be noticed",e:"There was a significant increase in crop production."},
  {w:"simulate",p:"/ˈsɪmjəleɪt/",t:"v.",z:"模拟；仿真",d:"to create conditions similar to real ones",e:"The model simulates changes in the global climate."},
  {w:"subsequent",p:"/ˈsʌbsɪkwənt/",t:"adj.",z:"随后的；后来的",d:"happening after something else",e:"Subsequent studies confirmed the initial finding."},
  {w:"substitute",p:"/ˈsʌbstətuːt/",t:"v.",z:"代替；替换",d:"to use one thing instead of another",e:"Manufacturers substituted steel for the heavier material."},
  {w:"sustain",p:"/səˈsteɪn/",t:"v.",z:"维持；支撑",d:"to keep something continuing over time",e:"The soil could not sustain intensive farming."},
  {w:"tentative",p:"/ˈtentətɪv/",t:"adj.",z:"暂定的；试探性的",d:"not certain or fully developed",e:"Scientists reached a tentative conclusion."},
  {w:"transform",p:"/trænsˈfɔːrm/",t:"v.",z:"彻底改变；转化",d:"to change completely in form or character",e:"Industrialization transformed the city's economy."},
  {w:"transmit",p:"/trænsˈmɪt/",t:"v.",z:"传送；传播",d:"to send something from one place to another",e:"Mosquitoes can transmit several diseases."},
  {w:"trigger",p:"/ˈtrɪɡər/",t:"v.",z:"引发；触发",d:"to cause an event or process to begin",e:"A sudden temperature drop can trigger migration."},
  {w:"undermine",p:"/ˌʌndərˈmaɪn/",t:"v.",z:"逐渐削弱；损害",d:"to gradually make something weaker",e:"Soil erosion undermined the foundations of the wall."},
  {w:"valid",p:"/ˈvælɪd/",t:"adj.",z:"有效的；合理的",d:"based on sound reasoning or evidence",e:"The experiment produced valid and repeatable results."},
  {w:"variable",p:"/ˈveriəbəl/",t:"n.",z:"变量；可变因素",d:"a factor that can change in an experiment",e:"Temperature was the only variable in the study."},
  {w:"verify",p:"/ˈverəfaɪ/",t:"v.",z:"核实；证实",d:"to check that something is true or accurate",e:"A second test was used to verify the result."},
  {w:"widespread",p:"/ˈwaɪdspred/",t:"adj.",z:"广泛的；普遍的",d:"existing over a large area or among many people",e:"The invention led to widespread social change."},
  {w:"yield",p:"/jiːld/",t:"v.",z:"产生；屈服",d:"to produce a result, crop, or profit",e:"The new method yielded more accurate measurements."},
  {w:"adjacent",p:"/əˈdʒeɪsənt/",t:"adj.",z:"邻近的；毗连的",d:"next to or very near something",e:"The market served villages adjacent to the river."}
];

const STORAGE_KEY = "toefl100-progress-v1";
const els = Object.fromEntries([
  "wordCard","cardAnswer","tapHint","cardNumber","partOfSpeech","wordText","phoneticText","meaningText","definitionText","exampleText",
  "knownCount","learningCount","remainingCount","progressText","progressBar","reviewBadge","studyTab","reviewTab","emptyState","emptyTitle",
  "emptyCopy","emptyAction","dontKnowButton","knowButton","undoButton","speakButton","settingsButton","settingsDialog","resetButton","toast","gestureHint"
].map(id => [id, document.getElementById(id)]));

let state = loadState();
let mode = "study";
let reviewQueue = [];
let reviewNextRound = [];
let revealed = false;
let locked = false;
let history = [];
let drag = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && saved.statuses && typeof saved.statuses === "object") return saved;
  } catch (_) {}
  return { statuses: {} };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function counts() {
  const values = Object.values(state.statuses);
  const known = values.filter(v => v === "known").length;
  const learning = values.filter(v => v === "learning").length;
  return { known, learning, remaining: WORDS.length - known - learning };
}

function studyWords() {
  return WORDS.filter(word => !state.statuses[word.w]);
}

function learningWords() {
  return WORDS.filter(word => state.statuses[word.w] === "learning");
}

function currentWord() {
  return mode === "study" ? studyWords()[0] : reviewQueue[0];
}

function setMode(nextMode) {
  if (locked) return;
  mode = nextMode;
  history = [];
  if (mode === "review") startReviewRound();
  render();
}

function startReviewRound() {
  reviewQueue = learningWords();
  reviewNextRound = [];
}

function render() {
  const stats = counts();
  const completed = stats.known + stats.learning;
  els.knownCount.textContent = stats.known;
  els.learningCount.textContent = stats.learning;
  els.remainingCount.textContent = stats.remaining;
  els.progressText.textContent = `${completed} / ${WORDS.length}`;
  els.progressBar.style.width = `${completed}%`;
  els.reviewBadge.textContent = stats.learning;
  els.studyTab.classList.toggle("active", mode === "study");
  els.reviewTab.classList.toggle("active", mode === "review");
  els.undoButton.disabled = history.length === 0;

  const word = currentWord();
  if (!word) {
    showEmpty(stats);
    return;
  }

  els.emptyState.hidden = true;
  els.wordCard.hidden = false;
  els.gestureHint.hidden = false;
  els.dontKnowButton.disabled = false;
  els.knowButton.disabled = false;
  revealed = false;
  els.cardAnswer.hidden = true;
  els.tapHint.hidden = false;
  els.partOfSpeech.textContent = word.t;
  els.wordText.textContent = word.w;
  els.phoneticText.textContent = word.p;
  els.meaningText.textContent = word.z;
  els.definitionText.textContent = word.d;
  els.exampleText.textContent = word.e;
  const originalIndex = WORDS.indexOf(word) + 1;
  els.cardNumber.textContent = String(originalIndex).padStart(3, "0");
  els.wordCard.setAttribute("aria-label", `${word.w}，点击查看释义`);
}

function showEmpty(stats) {
  els.wordCard.hidden = true;
  els.emptyState.hidden = false;
  els.gestureHint.hidden = true;
  els.dontKnowButton.disabled = true;
  els.knowButton.disabled = true;

  if (mode === "study") {
    els.emptyTitle.textContent = "100 词分类完成";
    els.emptyCopy.textContent = stats.learning ? `已会 ${stats.known} 个，还有 ${stats.learning} 个需要复习。` : "太棒了，100 个单词你已经全部掌握。";
    els.emptyAction.textContent = stats.learning ? "复习不会的词" : "重新开始";
  } else {
    els.emptyTitle.textContent = "本轮复习完成";
    els.emptyCopy.textContent = reviewNextRound.length ? `这一轮还有 ${reviewNextRound.length} 个词需要继续巩固。` : "这一轮的单词已经全部掌握。";
    els.emptyAction.textContent = reviewNextRound.length ? "再复习一轮" : "返回学习";
  }
}

function revealCard() {
  if (!currentWord() || revealed) return;
  revealed = true;
  els.cardAnswer.hidden = false;
  els.tapHint.hidden = true;
  els.wordCard.setAttribute("aria-label", `${currentWord().w}，${currentWord().z}`);
}

function snapshot() {
  return {
    statuses: { ...state.statuses },
    mode,
    reviewQueue: [...reviewQueue],
    reviewNextRound: [...reviewNextRound]
  };
}

function decide(result) {
  if (locked) return;
  const word = currentWord();
  if (!word) return;
  locked = true;
  history.push(snapshot());
  if (history.length > 20) history.shift();
  els.wordCard.classList.add(result === "known" ? "exit-right" : "exit-left");

  setTimeout(() => {
    state.statuses[word.w] = result;
    if (mode === "review") {
      reviewQueue.shift();
      if (result === "learning") reviewNextRound.push(word);
    }
    saveState();
    els.wordCard.classList.remove("exit-left", "exit-right");
    els.wordCard.classList.add("enter");
    render();
    locked = false;
    setTimeout(() => els.wordCard.classList.remove("enter"), 320);
  }, 235);
}

function undo() {
  if (!history.length || locked) return;
  const previous = history.pop();
  state.statuses = previous.statuses;
  mode = previous.mode;
  reviewQueue = previous.reviewQueue;
  reviewNextRound = previous.reviewNextRound;
  saveState();
  render();
  showToast("已撤销上一次分类");
}

function speak() {
  const word = currentWord();
  if (!word || !("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word.w);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  speechSynthesis.speak(utterance);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 1800);
}

function resetDrag() {
  els.wordCard.classList.remove("dragging");
  els.wordCard.style.transform = "";
  els.wordCard.querySelector(".stamp-left").style.opacity = 0;
  els.wordCard.querySelector(".stamp-right").style.opacity = 0;
  drag = null;
}

els.wordCard.addEventListener("pointerdown", event => {
  if (locked || event.target.closest("button")) return;
  drag = { x: event.clientX, y: event.clientY, dx: 0, dy: 0, moved: false };
  els.wordCard.setPointerCapture(event.pointerId);
  els.wordCard.classList.add("dragging");
});

els.wordCard.addEventListener("pointermove", event => {
  if (!drag) return;
  drag.dx = event.clientX - drag.x;
  drag.dy = event.clientY - drag.y;
  if (Math.abs(drag.dx) > 8) drag.moved = true;
  if (Math.abs(drag.dx) <= Math.abs(drag.dy)) return;
  const rotation = drag.dx / 22;
  els.wordCard.style.transform = `translate3d(${drag.dx}px, 0, 0) rotate(${rotation}deg)`;
  const opacity = Math.min(Math.abs(drag.dx) / 100, 1);
  els.wordCard.querySelector(".stamp-left").style.opacity = drag.dx < 0 ? opacity : 0;
  els.wordCard.querySelector(".stamp-right").style.opacity = drag.dx > 0 ? opacity : 0;
});

els.wordCard.addEventListener("pointerup", () => {
  if (!drag) return;
  const { dx, moved } = drag;
  resetDrag();
  if (Math.abs(dx) >= 78) decide(dx > 0 ? "known" : "learning");
  else if (!moved) revealCard();
});

els.wordCard.addEventListener("pointercancel", resetDrag);
els.wordCard.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") { event.preventDefault(); revealCard(); }
  if (event.key === "ArrowLeft") decide("learning");
  if (event.key === "ArrowRight") decide("known");
});

els.dontKnowButton.addEventListener("click", () => decide("learning"));
els.knowButton.addEventListener("click", () => decide("known"));
els.undoButton.addEventListener("click", undo);
els.speakButton.addEventListener("click", event => { event.stopPropagation(); speak(); });
els.studyTab.addEventListener("click", () => setMode("study"));
els.reviewTab.addEventListener("click", () => setMode("review"));
els.settingsButton.addEventListener("click", () => els.settingsDialog.showModal());

els.emptyAction.addEventListener("click", () => {
  const stats = counts();
  if (mode === "study") {
    if (stats.learning) setMode("review");
    else {
      state = { statuses: {} };
      saveState();
      render();
    }
  } else if (reviewNextRound.length) {
    reviewQueue = [...reviewNextRound];
    reviewNextRound = [];
    history = [];
    render();
  } else setMode("study");
});

els.resetButton.addEventListener("click", () => {
  if (!window.confirm("确定要清空全部学习进度吗？")) return;
  state = { statuses: {} };
  mode = "study";
  reviewQueue = [];
  reviewNextRound = [];
  history = [];
  saveState();
  els.settingsDialog.close();
  render();
  showToast("学习进度已清空");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}

render();
