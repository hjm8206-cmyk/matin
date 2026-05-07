// TODO: 실제 내부 부지판단 툴 주소가 확정되면 이 값을 교체하세요.
const INTERNAL_TOOL_URL = "http://192.168.219.102:8501";

const openingSlides = [
  {
    src: "/opening/01-ai-beyond-search.png",
    alt: "AI는 이제 검색창 안에만 있는 기술이 아니라 산업 전반에서 작동한다는 오프닝 이미지",
  },
  {
    src: "/opening/02-data-center-physical-base.png",
    alt: "AI를 움직이는 물리적 기반은 데이터센터라는 설명 이미지",
  },
  {
    src: "/opening/03-not-just-building.png",
    alt: "데이터센터는 전력, 냉각, 입지, 주민수용성, 환경을 함께 풀어야 하는 복합 인프라라는 설명 이미지",
  },
  {
    src: "/opening/04-social-infrastructure.png",
    alt: "데이터센터는 새로운 사회 인프라라는 설명 이미지",
  },
  {
    src: "/opening/05-heat-reuse-local-industry.png",
    alt: "데이터센터 폐열을 지역 산업과 상생 구조로 연결하는 설명 이미지",
  },
  {
    src: "/opening/06-local-welfare-ecosystem.png",
    alt: "지역 특산품, 반려견 복지, 유기견 보호, 지역 점주 상생을 연결하는 설명 이미지",
  },
  {
    src: "/opening/07-hightech-hightouch.png",
    alt: "AI 시대 데이터센터는 하이테크와 하이터치가 결합되어야 한다는 설명 이미지",
  },
  {
    src: "/opening/08-platform-final-no-dog.png",
    alt: "하이테크와 하이터치가 결합된 데이터센터 플랫폼 최종 비전 이미지",
  },
];

const briefingItems = [
  {
    id: 1,
    step: "01",
    title: "오프닝 슬라이드",
    subtitle: "AI 시대, 데이터센터는 새로운 사회 인프라다",
    type: "영상",
    layout: "opening",
    assetPath: "public/assets/webtoon/opening-briefing/",
    summary: "AI 확산이 왜 데이터센터라는 물리 인프라로 이어지는지 여는 자료입니다.",
    content: [
      "AI는 더 이상 검색창 안에만 있는 기술이 아닙니다.",
      "공장, 자동차, 의료, 물류, 교육, 로봇, 도시 운영까지 모든 산업의 뒤편에서 AI가 움직이고 있습니다.",
      "그리고 그 AI를 움직이는 물리적 기반은 결국 데이터센터입니다.",
    ],
    highlight:
      "우리는 데이터센터를 전기만 쓰는 시설이 아니라, 전력·입지·지역상생·ESG를 함께 설계하는 플랫폼으로 다시 정의합니다.",
    panelCount: 5,
  },
  {
    id: 2,
    step: "02",
    title: "웹툰 1부: 왜 전력이 핵심인가",
    subtitle: "AI 확산은 데이터센터 전력 병목으로 이어집니다",
    type: "웹툰",
    layout: "webtoon-flow",
    assetPath: "public/assets/webtoon/power-bottleneck/",
    summary: "AI, 데이터센터, 전력 병목, 송전축 전략의 연결을 시각적으로 설명합니다.",
    content: [
      "AI가 커진다",
      "데이터센터가 커진다",
      "전력이 핵심 병목이 된다",
      "기존 방식으로는 어렵다",
      "송전축·부지제공·신설변전소가 핵심이다",
    ],
    panelCount: 10,
  },
  {
    id: 3,
    step: "03",
    title: "웹툰 2부: 병목은 어디인가",
    subtitle: "병목은 단순 부동산이 아니라 전력 인입 구조에 있습니다",
    type: "웹툰",
    layout: "grid-bottleneck",
    assetPath: "public/assets/webtoon/grid-bottleneck/",
    summary: "기존 변전소 잔여용량 관점의 한계와 송전선로 인입 구조를 보여줍니다.",
    content: [
      "기존 변전소 잔여용량 중심 사고의 한계",
      "대용량 데이터센터는 기존 배전급 접근으로 해결되지 않음",
      "송전선로 인입 구조가 핵심",
      "부지제공형 신설 변전소/개폐소 구조 필요",
      "전력계통영향평가 기술검토 입력값 문제가 핵심",
    ],
    panelCount: 10,
  },
  {
    id: 4,
    step: "04",
    title: "근거자료",
    subtitle: "시장은 이미 전력 병목을 중심으로 움직이고 있습니다",
    type: "근거자료",
    layout: "evidence",
    assetPath: "public/assets/docs/evidence/",
    summary: "시장·정책·제도 변화를 카드형 요약으로 정리합니다.",
    content: [
      "글로벌 데이터센터 전력수요 증가",
      "국내 데이터센터 전력계통영향평가 병목",
      "전력망 민간참여 법안 흐름",
      "한전 6차 개정안 관련 기준 변화",
      "전평 법령·지침 요약",
    ],
    docs: [
      ["글로벌 데이터센터 전력수요 증가", "global-power-demand.pdf"],
      ["국내 데이터센터 전력계통영향평가 병목", "korea-grid-impact.pdf"],
      ["전력망 민간참여 법안 흐름", "market-grid-policy.pdf"],
      ["한전 6차 개정안 관련 기준 변화", "kepco-amendment-6.pdf"],
      ["전평 법령·지침 요약", "grid-impact-guideline-summary.pdf"],
    ],
  },
  {
    id: 5,
    step: "05",
    title: "해법 구조",
    subtitle: "현실적 진입 방식은 송전축·부지제공·신설 변전소 구조입니다",
    type: "다이어그램",
    layout: "formula",
    assetPath: "",
    summary: "대용량 데이터센터 전력 진입 공식을 다이어그램으로 보여줍니다.",
    content: [
      "기존 송전선로 인근 후보지",
      "부지제공",
      "신설 변전소/개폐소",
      "LILO 또는 분기 구조",
      "하이퍼스케일 데이터센터의 현실적 진입 방식",
    ],
  },
  {
    id: 6,
    step: "06",
    title: "여주 1호 실증 케이스",
    subtitle: "여주 1호 — 룰북이 실제 절차에 올라탄 실증 트랙",
    type: "실증",
    layout: "yeoju-case",
    assetPath: "public/assets/webtoon/yeoju-case/",
    summary: "기술검토 및 제도정렬 트랙에 진입한 여주 1호 케이스를 설명합니다.",
    content: [
      "여주 1호 후보지는 단순한 토지 소개가 아닙니다.",
      "345kV급 대용량 수전 가능성을 전제로, 부지제공형 신설 변전소·개폐소·송전선로 연계 시나리오를 실제 전력계통영향평가 기술검토 트랙에 올린 실증 케이스입니다.",
      "최종 승인 전 단계이지만, 병목의 위치를 특정했고, 유상 기술검토와 주무부처 제도정렬 절차에 이미 진입했습니다.",
    ],
    cards: [
      "401MW급 대용량 전력 트랙",
      "345kV LILO 검토 구조",
      "부지 내 신설 변전소/개폐소 시나리오",
      "약 6만평 집적 구상",
      "전력·민원·물·인허가·공사 난이도 동시 검토",
    ],
  },
  {
    id: 7,
    step: "07",
    title: "앱 시연",
    subtitle: "내부 후보지 발굴 OS",
    type: "앱",
    layout: "app",
    assetPath: INTERNAL_TOOL_URL,
    summary: "후보지를 반복 발굴하기 위한 내부 OS는 외부 링크로만 연결합니다.",
    content: [
      "이 앱은 지도 장난감이 아니라, 전력·민원·도로·용도지역·면적·정책입지 가점을 조합해 데이터센터 후보지를 사전에 걸러내는 내부 발굴 OS입니다.",
      "여주에서 룰이 정렬되면, 같은 기준으로 다음 후보지를 반복 발굴할 수 있습니다.",
    ],
  },
  {
    id: 8,
    step: "08",
    title: "독심프로젝트 / ESG",
    subtitle: "독심프로젝트는 주변사업이 아니라 하이터치 운영모델입니다",
    type: "ESG",
    layout: "dogsim-esg",
    assetPath: "public/assets/webtoon/dogsim-esg/",
    summary: "폐열, 반려견 복지, 유기견 케어, 지역 점주 상생을 운영모델로 연결합니다.",
    content: [
      "데이터센터 폐열을 지역특산품 제조, 반려견 급식팩, 유기견 보호, 반려견 리조트, 지역 식당·카페·호프집 상생 구조와 연결합니다.",
      "독심프로젝트는 데이터센터의 주변사업이 아니라, 주민수용성·ESG·지역상생·비기술 점수를 보강하는 하이터치 운영모델입니다.",
    ],
    flow: [
      ["폐열", "지역특산품"],
      ["폐열", "반려견 급식팩"],
      ["데이터센터", "유기견 케어"],
      ["반려견 방문 수요", "지역 점주 상생"],
      ["운영 기준", "비반려인 불편 저감"],
    ],
  },
  {
    id: 9,
    step: "09",
    title: "사업구조 / 수익구조",
    subtitle: "우리는 데이터센터 하나가 아니라 반복 확장 구조를 만듭니다",
    type: "사업구조",
    layout: "business",
    assetPath: "public/assets/slides/business-structure/",
    summary: "여주 실증, 룰북/IP, 발굴 앱, ESG 운영모델, SPV 구조의 반복 확장을 보여줍니다.",
    content: [
      "1호 여주 실증 케이스",
      "전력진입 룰북/IP",
      "내부 후보지 발굴 앱",
      "지역상생/ESG 운영모델",
      "SPV 중심 권리 보유",
      "각 호수별 SPC/JV 확장",
      "수익률 계산",
    ],
  },
  {
    id: 10,
    step: "10",
    title: "마무리 / 당사의 차별점",
    subtitle: "선행과 끝단을 함께 책임지는 데이터센터 플랫폼",
    type: "CTA",
    layout: "closing",
    assetPath: "public/assets/slides/closing-difference/",
    summary: "전력입지 룰북, 내부 OS, 지역상생 ESG 운영모델을 통합한 당사의 차별점을 정리합니다.",
    content: [
      "당사는 단순 데이터센터 개발사가 아니라, 전력입지 발굴과 제도 정렬, 선행개발, ESG 운영까지 통합적으로 수행하는 플랫폼입니다.",
    ],
    panelCount: 1,
  },
];

const combinedEvidenceSolutionItem = {
  id: 4,
  step: "04",
  title: "웹툰 3부: 병목의 증거와 현실적 해법",
  subtitle: "근거자료와 해법 구조",
  type: "웹툰",
  layout: "evidence-solution",
  assetPath: "public/assets/webtoon/evidence-solution/",
  summary: "병목의 증거, 제도 변화, 통과율 현실, 송전망 지연, 기존 송전축 인근 부지제공형 신설변전소 해법을 한 흐름으로 설명합니다.",
  content: [
    "병목의 증거와 현실적 해법",
    "제도는 차단이 아니라 적정 배치로 움직이고 있습니다.",
    "현실적 해법은 기존 송전축 인근 + 부지제공형 신설변전소 구조입니다.",
  ],
  panelCount: 10,
};

function applyBriefingSequence() {
  const evidenceIndex = briefingItems.findIndex((item) => item.layout === "evidence");
  const formulaIndex = briefingItems.findIndex((item) => item.layout === "formula");
  const combinedIndex = briefingItems.findIndex((item) => item.layout === "evidence-solution");

  if (evidenceIndex !== -1 && formulaIndex !== -1) {
    briefingItems.splice(evidenceIndex, formulaIndex - evidenceIndex + 1, combinedEvidenceSolutionItem);
  } else if (combinedIndex === -1) {
    briefingItems.splice(3, 0, combinedEvidenceSolutionItem);
  }

  briefingItems.forEach((item, index) => {
    item.id = index + 1;
    item.step = padStep(index + 1);

    if (item.layout === "yeoju-case") {
      Object.assign(item, {
        title: "웹툰 4부: 여주 1호 실증 케이스",
        subtitle: "여주 1호 실증 케이스",
        type: "웹툰",
        summary:
          "약 6만평 부지, 345kV 전력축 인접성, 401MW 기술평가 트랙, 인허가 설명력과 5대 리스크 완화 구조를 웹툰으로 설명합니다.",
        panelCount: 10,
      });
    }

    if (item.layout === "app") {
      Object.assign(item, {
        title: "앱 시연",
        subtitle: "하이퍼스케일 1차 부지 자동 선별 툴",
        type: "앱",
        assetPath: INTERNAL_TOOL_URL,
        visualPath: "public/assets/slides/app-demo/analysis-result.png",
        summary:
          "부동산 입지 판단과 전력부지 전문성을 결합해 하이퍼스케일 데이터센터 후보지를 1차로 자동 선별하는 내부 툴입니다.",
        content: [
          "이 툴은 부동산 조건과 전력 인입 가능성을 함께 보며 하이퍼스케일 데이터센터 후보지를 빠르게 1차 선별하기 위한 내부 OS입니다.",
          "페이지 안에 기능을 구현하지 않고, 실제 시연은 별도 웹앱 링크로 연결합니다.",
        ],
      });
    }

    if (item.layout === "dogsim-esg") {
      Object.assign(item, {
        title: "독심프로젝트 / ESG",
        subtitle: "하이테크 × 하이터치 운영모델",
        type: "웹툰",
        assetPath: "public/assets/webtoon/dogsim-esg/",
        summary:
          "데이터센터 폐열을 지역산업, 반려견 복지, 유기견 케어, 지역상생, ESG 운영모델로 연결하는 구조를 웹툰으로 설명합니다.",
        panelCount: 10,
      });
    }

    if (item.layout === "business") {
      Object.assign(item, {
        title: "사업구조 / 수익구조",
        subtitle: "SPC 선지분과 반복 확장 구조",
        type: "슬라이드",
        assetPath: "public/assets/slides/business-structure/",
        summary:
          "앞단 병목 해결, SPC 실행 준비, 선지분 확보, ESG 운영 수익까지 이어지는 사업구조를 슬라이드로 설명합니다.",
        panelCount: 6,
      });
    }
  });
}

let selectedItemIndex = 0;
let isViewerOpen = false;
let lastFocusedElement = null;
let selectedWebtoonPanelIndex = 0;
let webtoonCarouselImages = [];
let isWebtoonLightboxOpen = false;
let webtoonSwipeStart = null;
let selectedOpeningSlideIndex = 0;
let openingAutoplayId = null;
let openingSwipeStart = null;

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const openingIntro = document.querySelector("#opening-intro");
const openingSlidesEl = document.querySelector("#opening-slides");
const openingPrev = document.querySelector("#opening-prev");
const openingNext = document.querySelector("#opening-next");
const openingSkip = document.querySelector("#opening-skip");
const openingStart = document.querySelector("#opening-start");
const openingCount = document.querySelector("#opening-count");
const openingIndicators = document.querySelector("#opening-indicators");
const briefingCatalog = document.querySelector("#briefing-catalog");
const viewer = document.querySelector("#briefing-viewer");
const viewerBody = document.querySelector("#viewer-body");
const viewerTitle = document.querySelector("#viewer-title");
const viewerSubtitle = document.querySelector("#viewer-subtitle");
const viewerStep = document.querySelector("#viewer-step");
const viewerProgressBar = document.querySelector("#viewer-progress-bar");
const viewerPrev = document.querySelector("#viewer-prev");
const viewerNext = document.querySelector("#viewer-next");
const viewerClose = document.querySelector(".viewer-close");
const webtoonLightbox = document.querySelector("#webtoon-lightbox");
const webtoonLightboxFigure = document.querySelector(".webtoon-lightbox-figure");
const webtoonLightboxImage = document.querySelector("#webtoon-lightbox-image");
const webtoonLightboxTitle = document.querySelector("#webtoon-lightbox-title");
const webtoonLightboxCount = document.querySelector("#webtoon-lightbox-count");
const webtoonLightboxPrev = document.querySelector("#webtoon-lightbox-prev");
const webtoonLightboxNext = document.querySelector("#webtoon-lightbox-next");
const webtoonLightboxPrevBottom = document.querySelector("#webtoon-lightbox-prev-bottom");
const webtoonLightboxNextBottom = document.querySelector("#webtoon-lightbox-next-bottom");

function closeMobileNav() {
  if (!navToggle || !primaryNav) return;
  navToggle.setAttribute("aria-expanded", "false");
  primaryNav.classList.remove("is-open");
}

function padStep(value) {
  return String(value).padStart(2, "0");
}

function preloadOpeningSlides() {
  openingSlides.forEach((slide) => {
    const image = new Image();
    image.src = slide.src;
  });
}

function updateOpeningUI() {
  if (!openingSlidesEl) return;

  openingSlidesEl.querySelectorAll(".opening-slide").forEach((slide, index) => {
    const isActive = index === selectedOpeningSlideIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  openingIndicators?.querySelectorAll("button").forEach((indicator, index) => {
    const isActive = index === selectedOpeningSlideIndex;
    indicator.classList.toggle("is-active", isActive);
    indicator.setAttribute("aria-selected", String(isActive));
  });

  if (openingCount) {
    openingCount.textContent = `${selectedOpeningSlideIndex + 1} / ${openingSlides.length}`;
  }

  if (openingStart) {
    const isFinalSlide = selectedOpeningSlideIndex === openingSlides.length - 1;
    openingStart.classList.toggle("is-visible", isFinalSlide);
    openingStart.disabled = !isFinalSlide;
    openingStart.setAttribute("aria-hidden", String(!isFinalSlide));
  }
}

function hydrateOpeningImages() {
  openingSlidesEl?.querySelectorAll(".opening-slide img").forEach((image) => {
    const slide = image.closest(".opening-slide");

    const markMissing = () => {
      slide?.classList.add("is-missing");
      image.setAttribute("aria-hidden", "true");
    };

    if (image.complete && image.naturalWidth === 0) {
      markMissing();
      return;
    }

    image.addEventListener("error", markMissing, { once: true });
  });
}

function renderOpeningIntro() {
  if (!openingSlidesEl || !openingIndicators) return;

  openingSlidesEl.innerHTML = openingSlides
    .map(
      (slide, index) => `
        <figure class="opening-slide${index === 0 ? " is-active" : ""}" aria-hidden="${index === 0 ? "false" : "true"}" data-alt="${slide.alt}">
          <img src="${slide.src}" alt="${slide.alt}" loading="eager" decoding="async" />
          <figcaption class="sr-only">${slide.alt}</figcaption>
        </figure>
      `,
    )
    .join("");

  openingIndicators.innerHTML = openingSlides
    .map(
      (_, index) => `
        <button class="${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" aria-label="${index + 1}번 오프닝 슬라이드 보기" data-opening-slide="${index}">
          <span></span>
        </button>
      `,
    )
    .join("");

  updateOpeningUI();
  hydrateOpeningImages();
}

function stopOpeningAutoplay() {
  if (!openingAutoplayId) return;
  window.clearInterval(openingAutoplayId);
  openingAutoplayId = null;
}

function startOpeningAutoplay() {
  stopOpeningAutoplay();
  if (selectedOpeningSlideIndex >= openingSlides.length - 1) return;

  openingAutoplayId = window.setInterval(() => {
    if (selectedOpeningSlideIndex >= openingSlides.length - 1) {
      stopOpeningAutoplay();
      return;
    }

    selectedOpeningSlideIndex += 1;
    updateOpeningUI();
  }, 4500);
}

function setOpeningSlide(index, shouldResetTimer = true) {
  selectedOpeningSlideIndex = Math.max(0, Math.min(openingSlides.length - 1, index));
  updateOpeningUI();

  if (shouldResetTimer) {
    startOpeningAutoplay();
  }
}

function goOpeningNext() {
  if (selectedOpeningSlideIndex >= openingSlides.length - 1) {
    stopOpeningAutoplay();
    return;
  }

  setOpeningSlide(selectedOpeningSlideIndex + 1);
}

function goOpeningPrev() {
  setOpeningSlide(selectedOpeningSlideIndex - 1);
}

function scrollToBriefingMain() {
  stopOpeningAutoplay();
  const target = document.querySelector("#briefing-main") || document.querySelector("#briefing-list") || openingIntro?.nextElementSibling;
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCatalog() {
  if (!briefingCatalog) return;

  briefingCatalog.innerHTML = briefingItems
    .map(
      (item, index) => `
        <section class="briefing-topic theme-${item.layout}" id="briefing-step-${item.step}" aria-labelledby="briefing-title-${item.step}">
          <div class="topic-inner">
            <div class="topic-copy">
              <div class="topic-meta">
                <span class="topic-step">STEP ${item.step}</span>
                <span class="type-badge">${item.type}</span>
              </div>
              <h2 id="briefing-title-${item.step}">${item.title}</h2>
              <p>${item.summary}</p>
              <div class="topic-actions">
                <button class="button primary" type="button" data-open-viewer="${index}">${getCtaLabel(item)}</button>
              </div>
            </div>
            <div class="topic-panel" aria-hidden="true">
              <span class="panel-number">${item.step}</span>
              <div class="topic-points">
                ${getCardPoints(item)
                  .map((point) => `<article><span>${point.kicker}</span><strong>${point.label}</strong></article>`)
                  .join("")}
              </div>
            </div>
          </div>
        </section>
      `,
    )
    .join("");
}

function getCardPoints(item) {
  const pointsByLayout = {
    opening: [
      ["Signal", "AI는 산업 뒤편에서 움직입니다"],
      ["Infra", "물리적 기반은 데이터센터입니다"],
      ["Frame", "전력·입지·ESG 플랫폼으로 재정의합니다"],
    ],
    "webtoon-flow": [
      ["Growth", "AI가 커지고 데이터센터가 커집니다"],
      ["Bottleneck", "전력이 핵심 병목이 됩니다"],
      ["Entry", "송전축·부지제공·신설변전소가 핵심입니다"],
    ],
    "grid-bottleneck": [
      ["Limit", "잔여용량 중심 사고의 한계"],
      ["Grid", "송전선로 인입 구조가 핵심"],
      ["Input", "기술검토 입력값 설계"],
    ],
    "evidence-solution": [
      ["Evidence", "병목의 증거와 제도 흐름"],
      ["Reality", "통과율·송전망 지연의 현실"],
      ["Solution", "기존 송전축 인근 + 부지제공형 신설변전소"],
    ],
    evidence: [
      ["Market", "글로벌 전력수요 증가"],
      ["Policy", "전력망 민간참여 흐름"],
      ["Rule", "전평 법령·지침 요약"],
    ],
    formula: [
      ["Site", "송전선로 인근 후보지"],
      ["Substation", "신설 변전소/개폐소"],
      ["Link", "LILO 또는 분기 구조"],
    ],
    "yeoju-case": [
      ["Power", "401MW급 대용량 전력 트랙"],
      ["Grid", "345kV LILO 검토 구조"],
      ["Track", "기술검토 및 제도정렬 진입"],
    ],
    app: [
      ["OS", "내부 후보지 발굴"],
      ["Filter", "전력·민원·도로·용도지역 조합"],
      ["Link", "외부 툴 링크로 연결"],
    ],
    "dogsim-esg": [
      ["Heat", "폐열 활용"],
      ["DogSim", "반려견 복지와 유기견 케어"],
      ["Local", "지역산업과 ESG 운영모델"],
    ],
    esg: [
      ["Heat", "폐열 활용"],
      ["Care", "반려견·유기견 케어"],
      ["Local", "지역 점주 상생"],
    ],
    business: [
      ["Proof", "1호 여주 실증"],
      ["IP", "전력진입 룰북/IP"],
      ["Scale", "SPV·SPC/JV 반복 확장"],
    ],
    closing: [
      ["Rulebook", "401MW 전력입지 룰북"],
      ["OS", "전력부지 전문 내부앱 시스템"],
      ["ESG", "지역상생 ESG 운영모델"],
    ],
  };

  return (pointsByLayout[item.layout] || [["Brief", item.type], ["Detail", "상세 자료"]]).map(([kicker, label]) => ({
    kicker,
    label,
  }));
}

function getCtaLabel(item) {
  if (item.layout === "dogsim-esg") return "독심/ESG 웹툰 보기";
  if (item.layout === "business") return "사업구조 슬라이드 보기";
  if (item.layout === "closing") return "마무리 슬라이드 보기";

  const labels = {
    opening: "오프닝 슬라이드 보기",
    "webtoon-flow": "웹툰 1부 보기",
    "grid-bottleneck": "웹툰 2부 보기",
    "evidence-solution": "웹툰 3부 보기",
    evidence: "근거자료 보기",
    formula: "해법 다이어그램 보기",
    "yeoju-case": "웹툰 4부 보기",
    app: "앱 시연 보기",
    esg: "ESG 모델 보기",
    business: "사업구조 보기",
    closing: "마무리 보기",
  };

  return labels[item.layout] || "자세히 보기";
}

function renderParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderFlow(items) {
  return `
    <div class="viewer-flow">
      ${items.map((item, index) => `<article><span>${padStep(index + 1)}</span><strong>${item}</strong></article>`).join("")}
    </div>
  `;
}

function renderWebtoonPanels(item) {
  return `
    <div class="viewer-webtoon-grid ${item.panelCount === 1 ? "single-slide-grid" : ""}">
      ${Array.from({ length: item.panelCount }, (_, index) => {
        const step = padStep(index + 1);
        return `
          <button class="viewer-panel webtoon-thumb" type="button" data-open-webtoon-panel="${index}" aria-label="${item.title} ${step} 크게 보기">
            <img class="viewer-image" src="${item.assetPath}${step}.png" alt="${item.title} ${step}" />
            <div class="viewer-placeholder"><span>${step}</span><strong>${item.title}</strong><small>${item.assetPath}${step}.png</small></div>
            <span class="zoom-cue">크게 보기</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderEvidence(item) {
  return `
    <div class="viewer-card-grid evidence-grid">
      ${item.docs
        .map(
          ([title, file], index) => `
            <article class="viewer-card">
              <span>자료 ${padStep(index + 1)}</span>
              <h3>${title}</h3>
              <p>요약 보기 · 핵심 메시지 중심으로 공개 브리핑에서 빠르게 확인합니다.</p>
              <small>자료 위치 · ${item.assetPath}${file}</small>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderFormula(item) {
  const result = item.content[item.content.length - 1];
  const parts = item.content.slice(0, -1);
  return `
    <div class="viewer-formula">
      ${parts
        .map(
          (part, index) => `
            <article>
              <span>${padStep(index + 1)}</span>
              <strong>${part}</strong>
            </article>
            ${index < parts.length - 1 ? "<b>+</b>" : ""}
          `,
        )
        .join("")}
      <b>=</b>
      <article class="result"><span>Result</span><strong>${result}</strong></article>
    </div>
  `;
}

function renderBulletCards(cards) {
  return `
    <div class="viewer-card-grid">
      ${cards.map((card, index) => `<article class="viewer-card"><span>${padStep(index + 1)}</span><h3>${card}</h3></article>`).join("")}
    </div>
  `;
}

function renderAppContent(item) {
  return `
    <div class="viewer-two-column">
      <div class="viewer-copy">
        ${renderParagraphs(item.content)}
        <!-- TODO: 실제 내부 부지판단 툴 주소가 확정되면 INTERNAL_TOOL_URL 값을 교체하세요. -->
        <a class="button primary" href="${INTERNAL_TOOL_URL}" target="_blank" rel="noreferrer">내부 부지판단 툴 열기</a>
      </div>
      <div class="viewer-panel viewer-app-image-frame">
        <img class="viewer-image" src="${item.visualPath}" alt="앱 시연 분석 결과 요약 화면" />
        <div class="viewer-placeholder">
          <span>App Demo</span>
          <strong>분석 결과 요약 이미지가 들어갈 자리입니다</strong>
          <small>${item.visualPath}</small>
        </div>
      </div>
    </div>
  `;
}

function renderEsgContent(item) {
  return `
    <div class="viewer-copy compact-copy">${renderParagraphs(item.content)}</div>
    <div class="viewer-card-grid esg-grid">
      ${item.flow.map(([from, to]) => `<article class="viewer-card flow-card"><span>${from}</span><h3>${to}</h3></article>`).join("")}
    </div>
  `;
}

function renderBusinessContent(item) {
  return `
    <ol class="viewer-steps">
      ${item.content.map((step, index) => `<li><span>${padStep(index + 1)}</span><strong>${step}</strong></li>`).join("")}
    </ol>
    <div class="revenue-note">
      <div><span>Revenue Structure Placeholder</span><strong>수익률 계산 자료</strong></div>
      <small>자료 위치 · ${item.assetPath}</small>
    </div>
  `;
}

function renderOpeningContentLegacy(item) {
  return `
    <div class="viewer-two-column">
      <div class="viewer-copy">
        ${renderParagraphs(item.content)}
        <p class="viewer-highlight">${item.highlight}</p>
      </div>
      <div class="viewer-media-frame">
        <div class="viewer-image-stack" aria-hidden="true"></div>
        <div class="viewer-placeholder image-placeholder">
          <span>Opening Slides</span>
          <strong>영상 파일이 들어갈 자리입니다</strong>
          <small>${item.assetPath}</small>
        </div>
      </div>
    </div>
  `;
}

function renderOpeningContent(item) {
  return renderWebtoonPanels(item);
}

function renderClosingContent(item) {
  return `
    <div class="viewer-closing">
      ${renderParagraphs(item.content)}
      <div class="hero-actions">
        <a class="button primary" href="mailto:contact@example.com">브리핑 문의</a>
        <a class="button secondary" href="mailto:contact@example.com">협력 검토 문의</a>
        <!-- TODO: 실제 내부 부지판단 툴 주소가 확정되면 INTERNAL_TOOL_URL 값을 교체하세요. -->
        <a class="button ghost" href="${INTERNAL_TOOL_URL}" target="_blank" rel="noreferrer">내부 부지판단 툴 열기</a>
      </div>
    </div>
  `;
}

function renderItemBody(item) {
  if (item.layout === "opening") return renderOpeningContent(item);
  if (item.layout === "webtoon-flow") return renderWebtoonPanels(item);
  if (item.layout === "grid-bottleneck") return renderWebtoonPanels(item);
  if (item.layout === "evidence-solution") return renderWebtoonPanels(item);
  if (item.layout === "evidence") return renderEvidence(item);
  if (item.layout === "formula") return renderFormula(item);
  if (item.layout === "yeoju-case") return renderWebtoonPanels(item);
  if (item.layout === "app") return renderAppContent(item);
  if (item.layout === "dogsim-esg") return renderWebtoonPanels(item);
  if (item.layout === "esg") return renderEsgContent(item);
  if (item.layout === "business") return renderWebtoonPanels(item);
  if (item.layout === "closing") return renderWebtoonPanels(item);
  return `<div class="viewer-copy">${renderParagraphs(item.content)}</div>`;
}

function hydrateViewerAssets() {
  viewerBody.querySelectorAll(".viewer-image").forEach((image) => {
    if (image.complete && image.naturalWidth > 0) {
      image.classList.add("is-loaded");
      return;
    }

    image.addEventListener("load", () => image.classList.add("is-loaded"));
    image.addEventListener("error", () => image.classList.remove("is-loaded"));
  });
}

function getActiveWebtoonItem() {
  const item = briefingItems[selectedItemIndex];
  if (!item || !["opening", "webtoon-flow", "grid-bottleneck", "evidence-solution", "yeoju-case", "dogsim-esg", "business", "closing"].includes(item.layout)) return null;
  return item;
}

function renderWebtoonLightbox() {
  const image = webtoonCarouselImages[selectedWebtoonPanelIndex];
  if (!image || !webtoonLightboxImage) return;
  const isFirstPage = selectedWebtoonPanelIndex === 0;
  const isLastPage = selectedWebtoonPanelIndex === webtoonCarouselImages.length - 1;

  webtoonLightboxTitle.textContent = image.title;
  webtoonLightboxCount.textContent = `${padStep(selectedWebtoonPanelIndex + 1)} / ${padStep(webtoonCarouselImages.length)}`;
  webtoonLightboxPrev.disabled = isFirstPage;
  webtoonLightboxPrevBottom.disabled = isFirstPage;
  webtoonLightboxPrev.setAttribute("aria-label", isFirstPage ? "첫 페이지입니다" : "이전 페이지");
  webtoonLightboxPrev.setAttribute("title", isFirstPage ? "첫 페이지입니다" : "이전 페이지");
  webtoonLightboxNext.setAttribute("aria-label", isLastPage ? "자료 닫기" : "다음 페이지");
  webtoonLightboxNext.setAttribute("title", isLastPage ? "자료 닫기" : "다음 페이지");
  webtoonLightboxNextBottom.textContent = isLastPage ? "닫기" : "다음";
  webtoonLightboxNextBottom.setAttribute("aria-label", isLastPage ? "자료 닫기" : "다음 페이지");
  webtoonLightboxImage.classList.remove("is-missing");
  webtoonLightboxImage.src = image.src;
  webtoonLightboxImage.alt = image.alt;
  webtoonLightboxFigure.scrollTop = 0;
  webtoonLightboxFigure.scrollLeft = 0;
  webtoonLightboxImage.onload = () => {
    webtoonLightboxFigure.scrollTop = 0;
    webtoonLightboxFigure.scrollLeft = 0;
  };
  webtoonLightboxImage.onerror = () => {
    webtoonLightboxImage.classList.add("is-missing");
  };
}

function openWebtoonLightbox(index) {
  const item = getActiveWebtoonItem();
  if (!item) return;
  const isWebtoonReader = ["webtoon-flow", "grid-bottleneck", "evidence-solution", "yeoju-case", "dogsim-esg"].includes(item.layout);

  webtoonCarouselImages = Array.from({ length: item.panelCount }, (_, panelIndex) => {
    const step = padStep(panelIndex + 1);
    return {
      src: `${item.assetPath}${step}.png`,
      alt: `${item.title} ${step}`,
      title: item.title,
    };
  });

  selectedWebtoonPanelIndex = Number(index);
  if (
    !Number.isInteger(selectedWebtoonPanelIndex) ||
    selectedWebtoonPanelIndex < 0 ||
    selectedWebtoonPanelIndex >= webtoonCarouselImages.length
  ) {
    selectedWebtoonPanelIndex = 0;
  }

  isWebtoonLightboxOpen = true;
  webtoonLightbox.classList.toggle("is-webtoon-reader", isWebtoonReader);
  webtoonLightbox.classList.toggle("is-slide-reader", !isWebtoonReader);
  renderWebtoonLightbox();
  document.body.classList.add("webtoon-lightbox-open");
  webtoonLightbox.setAttribute("aria-hidden", "false");
  webtoonLightbox.querySelector(".viewer-close")?.focus();
}

function closeWebtoonLightbox() {
  isWebtoonLightboxOpen = false;
  document.body.classList.remove("webtoon-lightbox-open");
  webtoonLightbox.classList.remove("is-webtoon-reader", "is-slide-reader");
  webtoonLightbox.setAttribute("aria-hidden", "true");
}

function goWebtoonNext() {
  if (!webtoonCarouselImages.length) return;
  if (selectedWebtoonPanelIndex >= webtoonCarouselImages.length - 1) {
    closeWebtoonLightbox();
    return;
  }

  selectedWebtoonPanelIndex += 1;
  renderWebtoonLightbox();
}

function goWebtoonPrev() {
  if (!webtoonCarouselImages.length) return;
  if (selectedWebtoonPanelIndex === 0) return;

  selectedWebtoonPanelIndex -= 1;
  renderWebtoonLightbox();
}

function renderViewer() {
  const item = briefingItems[selectedItemIndex];
  const total = briefingItems.length;
  const progress = ((selectedItemIndex + 1) / total) * 100;

  viewerStep.textContent = `STEP ${item.step} / ${padStep(total)}`;
  viewerTitle.textContent = item.subtitle;
  viewerSubtitle.textContent = item.title;
  viewerProgressBar.style.width = `${progress}%`;
  viewerBody.innerHTML = renderItemBody(item);
  viewerBody.classList.toggle("image-focused", ["opening", "webtoon-flow", "grid-bottleneck", "evidence-solution", "yeoju-case", "dogsim-esg", "business", "closing"].includes(item.layout));
  viewerPrev.disabled = selectedItemIndex === 0;
  viewerNext.textContent = selectedItemIndex === total - 1 ? "처음으로 돌아가기" : "다음 자료 보기";

  viewerBody.scrollTop = 0;
  hydrateViewerAssets();
}

function openViewer(index) {
  selectedItemIndex = Number(index);
  if (!Number.isInteger(selectedItemIndex) || selectedItemIndex < 0 || selectedItemIndex >= briefingItems.length) {
    selectedItemIndex = 0;
  }

  lastFocusedElement = document.activeElement;
  isViewerOpen = true;
  renderViewer();
  document.body.classList.add("viewer-open");
  viewer.setAttribute("aria-hidden", "false");
  viewerClose.focus();
}

function closeViewer() {
  if (isWebtoonLightboxOpen) {
    closeWebtoonLightbox();
  }
  isViewerOpen = false;
  document.body.classList.remove("viewer-open");
  viewer.setAttribute("aria-hidden", "true");
  lastFocusedElement?.focus?.();
}

function goNext() {
  selectedItemIndex = selectedItemIndex === briefingItems.length - 1 ? 0 : selectedItemIndex + 1;
  renderViewer();
}

function goPrev() {
  if (selectedItemIndex === 0) return;
  selectedItemIndex -= 1;
  renderViewer();
}

applyBriefingSequence();
preloadOpeningSlides();
renderOpeningIntro();
startOpeningAutoplay();
renderCatalog();

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  primaryNav?.classList.toggle("is-open", !isOpen);
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

openingPrev?.addEventListener("click", goOpeningPrev);
openingNext?.addEventListener("click", goOpeningNext);
openingSkip?.addEventListener("click", scrollToBriefingMain);
openingStart?.addEventListener("click", scrollToBriefingMain);
openingIndicators?.addEventListener("click", (event) => {
  const indicator = event.target.closest("[data-opening-slide]");
  if (!indicator) return;
  setOpeningSlide(Number(indicator.dataset.openingSlide));
});

openingIntro?.addEventListener("pointerdown", (event) => {
  openingSwipeStart = {
    x: event.clientX,
    y: event.clientY,
  };
});

openingIntro?.addEventListener("pointerup", (event) => {
  if (!openingSwipeStart) return;
  const distanceX = event.clientX - openingSwipeStart.x;
  const distanceY = event.clientY - openingSwipeStart.y;
  openingSwipeStart = null;

  if (Math.abs(distanceX) < 54 || Math.abs(distanceX) < Math.abs(distanceY) * 1.2) return;
  if (distanceX < 0) {
    goOpeningNext();
    return;
  }

  goOpeningPrev();
});

document.addEventListener("click", (event) => {
  const webtoonOpener = event.target.closest("[data-open-webtoon-panel]");
  if (webtoonOpener) {
    event.preventDefault();
    openWebtoonLightbox(Number(webtoonOpener.dataset.openWebtoonPanel));
    return;
  }

  if (event.target.closest("[data-close-webtoon-lightbox]")) {
    closeWebtoonLightbox();
    return;
  }

  const opener = event.target.closest("[data-open-viewer]");
  if (opener) {
    event.preventDefault();
    openViewer(Number(opener.dataset.openViewer));
    return;
  }

  if (event.target.closest("[data-close-viewer]")) {
    closeViewer();
  }
});

viewerPrev?.addEventListener("click", goPrev);
viewerNext?.addEventListener("click", goNext);
webtoonLightboxPrev?.addEventListener("click", goWebtoonPrev);
webtoonLightboxNext?.addEventListener("click", goWebtoonNext);
webtoonLightboxPrevBottom?.addEventListener("click", goWebtoonPrev);
webtoonLightboxNextBottom?.addEventListener("click", goWebtoonNext);

webtoonLightboxFigure?.addEventListener("pointerdown", (event) => {
  webtoonSwipeStart = {
    x: event.clientX,
    y: event.clientY,
  };
});

webtoonLightboxFigure?.addEventListener("pointerup", (event) => {
  if (!webtoonSwipeStart) return;
  const distanceX = event.clientX - webtoonSwipeStart.x;
  const distanceY = event.clientY - webtoonSwipeStart.y;
  webtoonSwipeStart = null;

  if (Math.abs(distanceX) < 56 || Math.abs(distanceX) < Math.abs(distanceY) * 1.25) return;
  if (distanceX < 0) {
    goWebtoonNext();
    return;
  }

  goWebtoonPrev();
});

document.addEventListener("keydown", (event) => {
  if (isWebtoonLightboxOpen) {
    if (event.key === "Escape") {
      closeWebtoonLightbox();
    }

    if (event.key === "ArrowRight") {
      goWebtoonNext();
    }

    if (event.key === "ArrowLeft") {
      goWebtoonPrev();
    }

    return;
  }

  if (!isViewerOpen) {
    if (event.key === "ArrowRight") {
      goOpeningNext();
    }

    if (event.key === "ArrowLeft") {
      goOpeningPrev();
    }

    return;
  }

  if (event.key === "Escape") {
    closeViewer();
  }

  if (event.key === "ArrowRight") {
    goNext();
  }

  if (event.key === "ArrowLeft") {
    goPrev();
  }
});
