// TODO: 실제 전력부지 자동검토툴 주소가 확정되면 이 값을 교체하세요.
const INTERNAL_TOOL_URL = "https://power-site-scout-os-new.vercel.app";
const CONTACT_EMAIL = "windpks@gmail.com";
const WEBTOON_MIN_ZOOM = 1;
const WEBTOON_MAX_ZOOM = 4;

const contactMailTemplates = {
  collaboration: {
    subject: "데이터센터 플랫폼 협업 문의",
    body: ["회사명:", "성함:", "연락처:", "협업 희망 분야:", "문의 내용:"].join("\n"),
  },
  investment: {
    subject: "데이터센터 플랫폼 투자 문의",
    body: ["회사명/기관명:", "성함:", "연락처:", "투자 검토 범위:", "문의 내용:"].join("\n"),
  },
  consulting: {
    subject: "데이터센터 플랫폼 컨설팅 문의",
    body: ["회사명:", "성함:", "연락처:", "검토 대상 부지/지역:", "필요한 컨설팅 범위:", "문의 내용:"].join("\n"),
  },
};

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
    summary: "AI가 왜 데이터센터라는 물리 인프라로 이어지는지 여는 자료입니다.",
    content: [
      "AI는 산업 운영의 기반 기술로 확장되고 있습니다.",
      "공장, 자동차, 의료, 물류, 교육, 로봇, 도시 운영까지 모든 산업의 뒤편에서 데이터센터 수요가 커지고 있습니다.",
      "AI를 움직이는 물리적 기반은 결국 데이터센터입니다.",
    ],
    highlight:
      "우리는 데이터센터를 전기만 쓰는 시설이 아니라, 전력·입지·지역상생·ESG를 함께 설계하는 플랫폼으로 다시 정의합니다.",
    panelCount: 5,
  },
  {
    id: 2,
    step: "02",
    title: "1부: 왜 전력이 핵심인가",
    subtitle: "AI 확산은 데이터센터 전력 병목으로 이어집니다",
    type: "브리핑",
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
    title: "2부: 병목은 어디인가",
    subtitle: "병목은 단순 부동산이 아니라 전력 인입 구조에 있습니다",
    type: "브리핑",
    layout: "grid-bottleneck",
    assetPath: "public/assets/webtoon/grid-bottleneck/",
    summary: "기존 변전소 잔여용량 관점의 한계와 송전선로 인입 구조를 정리합니다.",
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
      "여주 401MW 케이스는 단순한 토지 소개가 아닙니다.",
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
    title: "전력부지 자동검토툴",
    subtitle: "하이퍼스케일 1차 전력부지 자동 검토",
    type: "검토툴",
    layout: "app",
    assetPath: INTERNAL_TOOL_URL,
    summary: "전력부지 자동검토툴은 외부 링크로만 연결합니다.",
    content: [
      "전력·민원·도로·용도지역·면적·정책입지 가점을 조합해 데이터센터 후보지를 사전에 걸러내는 전력부지 자동검토툴입니다.",
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
    summary: "데이터센터 폐열을 지역산업, 반려견 복지, 유기견 케어, 지역상생, ESG 운영모델로 연결하는 구조를 설명합니다.",
    content: [
      "데이터센터 폐열을 지역특산품 제조, 반려견 급식팩, 유기견 보호, 반려견 리조트, 지역 식당·카페·호프집 상생 구조와 연결합니다.",
      "이 운영모델은 주민수용성·ESG·지역상생·비기술 경쟁력을 보강하는 하이터치 구조입니다.",
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
    summary: "여주 실증, 룰북/IP, 전력부지 자동검토툴, ESG 운영모델, SPV 구조의 반복 확장을 보여줍니다.",
    content: [
      "여주 401MW 실증 케이스",
      "전력진입 룰북/IP",
      "전력부지 자동검토툴",
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
    summary: "전력입지 룰북, 전력부지 자동검토툴, 지역상생 ESG 운영모델을 통합한 당사의 역량을 정리합니다.",
    content: [
      "당사는 단순 데이터센터 개발사가 아닙니다. 전력이 가능한 부지를 발굴하고, 제도·기술검토·지역수용성까지 통과 가능한 구조를 설계하는 데이터센터 플랫폼입니다.",
    ],
    panelCount: 1,
  },
];

const combinedEvidenceSolutionItem = {
  id: 4,
  step: "04",
  title: "3부: 병목의 증거와 현실적 해법",
  subtitle: "근거자료와 해법 구조",
  type: "브리핑",
  layout: "evidence-solution",
  assetPath: "public/assets/webtoon/evidence-solution/",
  summary: "병목의 증거, 제도 변화, 통과율 현실, 송전망 지연, 기존 송전축 인근 부지제공형 신설변전소 해법을 한 흐름으로 설명합니다.",
  content: [
    "제도 근거와 현실적 해법 구조",
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
        title: "여주 1호 실증 케이스",
        subtitle: "여주 1호 — 룰북이 실제 절차에 올라탄 실증 트랙",
        type: "실증",
        summary:
          "기술검토 및 제도정렬 트랙에 진입한 여주 1호 케이스를 설명합니다.",
        panelCount: 10,
      });
    }

    if (item.layout === "app") {
      Object.assign(item, {
        title: "전력부지 자동검토툴",
        subtitle: "하이퍼스케일 1차 전력부지 자동 검토",
        type: "검토툴",
        assetPath: INTERNAL_TOOL_URL,
        visualPath: "public/assets/slides/app-demo/analysis-result.png",
        summary:
          "전력부지 자동검토툴은 외부 링크로만 연결합니다.",
        content: [
          "전력·민원·도로·용도지역·면적·정책입지 가점을 조합해 데이터센터 후보지를 사전에 걸러내는 전력부지 자동검토툴입니다.",
          "페이지 안에 기능을 구현하지 않고, 별도 링크로 연결합니다.",
        ],
      });
    }

    if (item.layout === "dogsim-esg") {
      Object.assign(item, {
        title: "독심프로젝트 / ESG",
        subtitle: "독심프로젝트는 주변사업이 아니라 하이터치 운영모델입니다",
        type: "ESG",
        assetPath: "public/assets/webtoon/dogsim-esg/",
        summary:
          "데이터센터 폐열을 지역산업, 반려견 복지, 유기견 케어, 지역상생, ESG 운영모델로 연결하는 구조를 설명합니다.",
        panelCount: 10,
      });
    }

    if (item.layout === "business") {
      Object.assign(item, {
        title: "사업구조 / 수익구조",
        subtitle: "우리는 데이터센터 하나가 아니라 반복 확장 구조를 만듭니다",
        type: "사업구조",
        assetPath: "public/assets/slides/business-structure/",
        summary:
          "여주 실증, 룰북/IP, 전력부지 자동검토툴, ESG 운영모델, SPV 구조의 반복 확장을 보여줍니다.",
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
let isWebtoonZoomed = false;
let webtoonZoomStepIndex = 0;
let webtoonZoomScale = 1;
let webtoonPinchState = null;
let webtoonSuppressSwipeUntil = 0;
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
const webtoonLightboxZoom = document.querySelector("#webtoon-lightbox-zoom");

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
      ["Tool", "전력부지 자동검토툴"],
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
      ["Tool", "전력부지 자동검토툴"],
      ["ESG", "지역상생 ESG 운영모델"],
    ],
  };

  return (pointsByLayout[item.layout] || [["Brief", item.type], ["Detail", "상세 자료"]]).map(([kicker, label]) => ({
    kicker,
    label,
  }));
}

function getCtaLabel(item) {
  if (item.layout === "dogsim-esg") return "ESG 모델 보기";
  if (item.layout === "business") return "사업구조 보기";
  if (item.layout === "closing") return "마무리 보기";

  const labels = {
    opening: "오프닝 보기",
    "webtoon-flow": "1부 브리핑 보기",
    "grid-bottleneck": "2부 브리핑 보기",
    "evidence-solution": "3부 브리핑 보기",
    evidence: "근거자료 보기",
    formula: "해법 구조 보기",
    "yeoju-case": "여주 자료 보기",
    app: "전력부지 자동검토툴 보기",
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
          <button class="viewer-panel webtoon-thumb" type="button" data-open-webtoon-panel="${index}" aria-label="${item.title} ${step} 브리핑 보기">
            <img class="viewer-image" src="${item.assetPath}${step}.png" alt="${item.title} ${step}" />
            <div class="viewer-placeholder"><span>${step}</span><strong>${item.title}</strong><small>${item.assetPath}${step}.png</small></div>
            <span class="zoom-cue">브리핑 보기</span>
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
              <p>핵심 메시지 중심으로 브리핑에서 빠르게 확인합니다.</p>
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
        <!-- TODO: 실제 전력부지 자동검토툴 주소가 확정되면 INTERNAL_TOOL_URL 값을 교체하세요. -->
        <a class="button primary" href="${INTERNAL_TOOL_URL}" target="_blank" rel="noreferrer">전력부지 자동검토툴 열기</a>
      </div>
      <div class="viewer-panel viewer-app-image-frame">
        <img class="viewer-image" src="${item.visualPath}" alt="전력부지 자동검토툴 결과 요약 화면" />
        <div class="viewer-placeholder">
          <span>Review Tool</span>
          <strong>분석 결과 요약 화면</strong>
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
      <div><span>Revenue Structure</span><strong>수익구조 검토자료</strong></div>
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
          <span>Visual Briefing</span>
          <strong>시각자료가 들어갈 자리입니다</strong>
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
        <a class="button primary" href="${buildContactMailto("collaboration")}">브리핑 문의</a>
        <a class="button secondary" href="${buildContactMailto("collaboration")}">협력 검토 문의</a>
        <!-- TODO: 실제 전력부지 자동검토툴 주소가 확정되면 INTERNAL_TOOL_URL 값을 교체하세요. -->
        <a class="button ghost" href="${INTERNAL_TOOL_URL}" target="_blank" rel="noreferrer">전력부지 자동검토툴 열기</a>
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

function buildContactMailto(type) {
  const template = contactMailTemplates[type];
  if (!template) return `mailto:${CONTACT_EMAIL}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(template.subject)}&body=${encodeURIComponent(template.body)}`;
}

function hydrateContactMailLinks() {
  document.querySelectorAll("[data-mailto-type]").forEach((link) => {
    link.setAttribute("href", buildContactMailto(link.dataset.mailtoType));
  });
}

function copyTextWithFallback(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  const didCopy = document.execCommand("copy");
  textarea.remove();

  if (!didCopy) {
    return Promise.reject(new Error("Copy command failed"));
  }

  return Promise.resolve();
}

function bindEmailCopyButtons() {
  const status = document.querySelector("#copy-email-status");

  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await copyTextWithFallback(button.dataset.copyEmail || CONTACT_EMAIL);
        if (status) {
          status.textContent = "이메일 주소가 복사되었습니다";
          status.classList.add("is-visible");
          window.setTimeout(() => status.classList.remove("is-visible"), 2600);
        }
      } catch {
        if (status) {
          status.textContent = "복사할 수 없습니다. 이메일 주소를 직접 선택해 주세요.";
          status.classList.add("is-visible");
        }
      }
    });
  });
}

function isMobileLightboxViewport() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function setWebtoonZoom(shouldZoom) {
  const nextZoomState = Boolean(shouldZoom) && isMobileLightboxViewport();
  isWebtoonZoomed = nextZoomState;

  webtoonLightbox?.classList.toggle("is-zoomed", isWebtoonZoomed);
  webtoonLightboxZoom?.setAttribute("aria-pressed", String(isWebtoonZoomed));

  if (webtoonLightboxZoom) {
    webtoonLightboxZoom.textContent = isWebtoonZoomed ? "맞춤" : "확대";
    webtoonLightboxZoom.setAttribute("aria-label", isWebtoonZoomed ? "화면에 맞춰 보기" : "확대해서 보기");
  }

  if (!webtoonLightboxFigure) return;

  if (!isWebtoonZoomed) {
    webtoonLightboxFigure.scrollTop = 0;
    webtoonLightboxFigure.scrollLeft = 0;
    return;
  }

  window.requestAnimationFrame(() => {
    webtoonLightboxFigure.scrollLeft = 0;
    webtoonLightboxFigure.scrollTop = 0;
  });
}

function toggleWebtoonZoom() {
  setWebtoonZoom(!isWebtoonZoomed);
}

function getClampedWebtoonZoomScale(scale) {
  if (!Number.isFinite(scale)) return WEBTOON_MIN_ZOOM;
  return Math.min(Math.max(scale, WEBTOON_MIN_ZOOM), WEBTOON_MAX_ZOOM);
}

function getWebtoonZoomScale() {
  return webtoonZoomScale;
}

function getWebtoonScrollRatios() {
  if (!webtoonLightboxFigure || !isWebtoonZoomed) return null;

  return {
    x: (webtoonLightboxFigure.scrollLeft + webtoonLightboxFigure.clientWidth / 2) / Math.max(webtoonLightboxFigure.scrollWidth, 1),
    y: (webtoonLightboxFigure.scrollTop + webtoonLightboxFigure.clientHeight / 2) / Math.max(webtoonLightboxFigure.scrollHeight, 1),
  };
}

function updateWebtoonZoomButton() {
  const zoomScale = getWebtoonZoomScale();
  const canZoomInMore = false;

  webtoonLightboxZoom?.setAttribute("aria-pressed", String(isWebtoonZoomed));

  if (!webtoonLightboxZoom) return;

  if (!isWebtoonZoomed) {
    webtoonLightboxZoom.textContent = "확대";
    webtoonLightboxZoom.setAttribute("aria-label", "확대해서 보기");
    webtoonLightboxZoom.setAttribute("title", "확대해서 보기");
    return;
  }

  webtoonLightboxZoom.textContent = canZoomInMore ? "확대+" : "맞춤";
  webtoonLightboxZoom.setAttribute(
    "aria-label",
    canZoomInMore ? `현재 ${zoomScale.toFixed(1)}배 확대, 더 확대하기` : `현재 ${zoomScale.toFixed(1)}배 확대, 화면에 맞춰 보기`,
  );
  webtoonLightboxZoom.setAttribute("title", `${zoomScale.toFixed(1)}x`);
}

function setWebtoonZoom(shouldZoom, requestedScale = WEBTOON_MIN_ZOOM, options = {}) {
  const nextScale = Boolean(shouldZoom) && isMobileLightboxViewport()
    ? getClampedWebtoonZoomScale(requestedScale)
    : WEBTOON_MIN_ZOOM;
  const previousRatios = getWebtoonScrollRatios();
  const wasZoomed = isWebtoonZoomed;

  webtoonZoomScale = nextScale;
  webtoonZoomStepIndex = 0;
  isWebtoonZoomed = webtoonZoomScale > WEBTOON_MIN_ZOOM + 0.01;

  webtoonLightbox?.classList.toggle("is-zoomed", isWebtoonZoomed);
  webtoonLightbox?.style.setProperty("--webtoon-zoom-width", `${Math.round(webtoonZoomScale * 100)}vw`);
  updateWebtoonZoomButton();

  if (!webtoonLightboxFigure) return;

  if (!isWebtoonZoomed) {
    webtoonLightboxFigure.scrollTop = 0;
    webtoonLightboxFigure.scrollLeft = 0;
    return;
  }

  window.requestAnimationFrame(() => {
    if (options.anchor && options.startScale) {
      const scaleRatio = webtoonZoomScale / Math.max(options.startScale, 0.01);
      webtoonLightboxFigure.scrollLeft = Math.max(0, options.anchor.x * scaleRatio - options.center.x);
      webtoonLightboxFigure.scrollTop = Math.max(0, options.anchor.y * scaleRatio - options.center.y);
      return;
    }

    if (wasZoomed && previousRatios) {
      webtoonLightboxFigure.scrollLeft = Math.max(
        0,
        previousRatios.x * webtoonLightboxFigure.scrollWidth - webtoonLightboxFigure.clientWidth / 2,
      );
      webtoonLightboxFigure.scrollTop = Math.max(
        0,
        previousRatios.y * webtoonLightboxFigure.scrollHeight - webtoonLightboxFigure.clientHeight / 2,
      );
      return;
    }

    webtoonLightboxFigure.scrollLeft = 0;
    webtoonLightboxFigure.scrollTop = 0;
  });
}

function toggleWebtoonZoom() {
  setWebtoonZoom(false);
}

function getTouchDistance(touches) {
  const [first, second] = touches;
  return Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY);
}

function getTouchCenter(touches) {
  const [first, second] = touches;
  return {
    x: (first.clientX + second.clientX) / 2,
    y: (first.clientY + second.clientY) / 2,
  };
}

function startWebtoonPinch(event) {
  if (!isWebtoonLightboxOpen || !isMobileLightboxViewport() || event.touches.length < 2 || !webtoonLightboxFigure) return;

  const center = getTouchCenter(event.touches);
  const bounds = webtoonLightboxFigure.getBoundingClientRect();
  const localCenter = {
    x: center.x - bounds.left,
    y: center.y - bounds.top,
  };

  webtoonPinchState = {
    startDistance: Math.max(getTouchDistance(event.touches), 1),
    startScale: webtoonZoomScale,
    center: localCenter,
    anchor: {
      x: webtoonLightboxFigure.scrollLeft + localCenter.x,
      y: webtoonLightboxFigure.scrollTop + localCenter.y,
    },
  };
  webtoonSwipeStart = null;
  webtoonSuppressSwipeUntil = Date.now() + 350;
}

function updateWebtoonPinch(event) {
  if (!webtoonPinchState || event.touches.length < 2) return;

  event.preventDefault();
  const nextScale = getClampedWebtoonZoomScale(
    webtoonPinchState.startScale * (getTouchDistance(event.touches) / webtoonPinchState.startDistance),
  );

  setWebtoonZoom(nextScale > WEBTOON_MIN_ZOOM + 0.01, nextScale, {
    anchor: webtoonPinchState.anchor,
    center: webtoonPinchState.center,
    startScale: webtoonPinchState.startScale,
  });
}

function endWebtoonPinch() {
  if (!webtoonPinchState) return;
  webtoonPinchState = null;
  webtoonSuppressSwipeUntil = Date.now() + 350;
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

  setWebtoonZoom(false);
  webtoonLightboxTitle.textContent = image.title;
  webtoonLightboxCount.textContent = `${padStep(selectedWebtoonPanelIndex + 1)} / ${padStep(webtoonCarouselImages.length)}`;
  webtoonLightboxPrev.disabled = isFirstPage;
  webtoonLightboxPrevBottom.disabled = isFirstPage;
  webtoonLightboxPrev.setAttribute("aria-label", isFirstPage ? "첫 브리핑입니다" : "이전 브리핑");
  webtoonLightboxPrev.setAttribute("title", isFirstPage ? "첫 브리핑입니다" : "이전 브리핑");
  webtoonLightboxNext.setAttribute("aria-label", isLastPage ? "브리핑 닫기" : "다음 브리핑");
  webtoonLightboxNext.setAttribute("title", isLastPage ? "브리핑 닫기" : "다음 브리핑");
  webtoonLightboxNextBottom.textContent = isLastPage ? "닫기" : "다음";
  webtoonLightboxNextBottom.setAttribute("aria-label", isLastPage ? "브리핑 닫기" : "다음 브리핑");
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
  setWebtoonZoom(false);
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
  viewerNext.textContent = "다음 자료 보기";

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
hydrateContactMailLinks();
bindEmailCopyButtons();

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
webtoonLightboxZoom?.addEventListener("click", toggleWebtoonZoom);

webtoonLightboxFigure?.addEventListener("touchstart", startWebtoonPinch, { passive: true });
webtoonLightboxFigure?.addEventListener("touchmove", updateWebtoonPinch, { passive: false });
webtoonLightboxFigure?.addEventListener("touchend", endWebtoonPinch, { passive: true });
webtoonLightboxFigure?.addEventListener("touchcancel", endWebtoonPinch, { passive: true });

webtoonLightboxFigure?.addEventListener("pointerdown", (event) => {
  if (Date.now() < webtoonSuppressSwipeUntil) return;
  webtoonSwipeStart = {
    x: event.clientX,
    y: event.clientY,
  };
});

webtoonLightboxFigure?.addEventListener("pointerup", (event) => {
  if (!webtoonSwipeStart) return;
  if (Date.now() < webtoonSuppressSwipeUntil) {
    webtoonSwipeStart = null;
    return;
  }

  if (isWebtoonZoomed) {
    webtoonSwipeStart = null;
    return;
  }

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

window.addEventListener("resize", () => {
  if (isWebtoonZoomed && !isMobileLightboxViewport()) {
    setWebtoonZoom(false);
  }
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
