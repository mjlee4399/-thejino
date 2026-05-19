// --- MOCK DATABASE AND STATE ---
const state = {
  products: [
    {
      id: 'serum',
      name: 'Luminous Fluid Serum',
      krName: '루미너스 플루이드 세럼',
      category: 'skincare',
      price: 48000,
      vol: '50ml',
      image: 'assets/product_serum.png',
      textureImage: 'assets/product_serum_texture.png',
      summary: '피부 깊은 곳까지 맑고 청량하게 수분을 충전하고 내면의 빛을 깨우는 오일 드롭 에센스',
      description: '루미너스 플루이드 세럼은 엄선된 식물성 에센셜 성분과 천연 유래 오일 방울을 최적의 비율로 배합하여, 거칠어진 피부 결을 매끄럽게 정돈하고 건강한 광채를 선사합니다. 끈적임 없이 피부속으로 자연스럽게 스며드는 독보적인 텍스처 기술이 적용되었습니다.',
      ingredients: '병풀추출물, 글리세린, 부틸렌글라이콜, 메틸글루세스-20, 나이아신아마이드, 1,2-헥산다이올, 스쿠알란, 소듐하이알루로네이트, 메도우폼씨오일, 아데노신, 토코페롤, 카보머, 알란토인, 카모마일꽃오일',
      usage: '토너 세안 후 적당량(2~3방울)을 덜어 얼굴 전체에 마사지하듯 가볍게 롤링하며 펴 바른 후, 손바닥으로 얼굴 전체를 감싸 온기로 완벽하게 흡수시켜 줍니다.',
      options: [
        { name: '50ml (기본)', priceModifier: 0 },
        { name: '100ml 대용량 (+32,000원)', priceModifier: 32000 }
      ],
      badge: 'Signature'
    },
    {
      id: 'cream',
      name: 'Velvet Hydration Cream',
      krName: '벨벳 하이드레이션 크림',
      category: 'skincare',
      price: 54000,
      vol: '60ml',
      image: 'assets/product_cream.png',
      textureImage: 'assets/product_cream_texture.png',
      summary: '피부에 닿는 순간 녹아내리며 촉촉하고 부드러운 수분 장벽을 씌워주는 고밀도 벨벳 장벽 크림',
      description: '벨벳 하이드레이션 크림은 지친 피부 장벽을 회복시켜주는 세라마이드 복합체와 판테놀을 담아 고농축 보습감을 자랑합니다. 마치 생크림처럼 매끄럽고 밀도 있게 밀착되어 외부 자극으로부터 피부를 하루 종일 안전하게 보호합니다.',
      ingredients: '시어버터, 카프릴릭/카프릭트라이글리세라이드, 스쿠알란, 세라마이드엔피, 판테놀, 피토스테롤, 하이드로제네이티드레시틴, 폴리글리세릴-3메틸글루코오스다이스테아레이트, 유칼립투스잎오일, 정제수',
      usage: '스킨케어 마지막 단계에서 아몬드 크기만큼 덜어 양 볼, 이마, 턱 순서로 부드럽게 도포한 뒤 피부 안쪽에서 바깥쪽으로 쓸어내리며 흡수시킵니다.',
      options: [
        { name: '60ml (기본)', priceModifier: 0 },
        { name: '60ml 듀오 세트 (+46,000원)', priceModifier: 46000 }
      ],
      badge: 'Best'
    },
    {
      id: 'toner',
      name: 'Balancing Treatment Essence',
      krName: '밸런싱 트리트먼트 에센스',
      category: 'skincare',
      price: 38000,
      vol: '150ml',
      image: 'assets/product_toner.png',
      textureImage: 'assets/product_toner_texture.png',
      summary: '무너진 피부 장벽의 pH 밸런스를 즉각적으로 복구하고 결을 맑고 깨끗하게 정리해 주는 부스팅 에센스 토너',
      description: '밸런싱 트리트먼트 에센스는 흐트러진 피부 컨디션을 즉각적으로 바로잡아, 다음 단계 스킨케어 흡수가 극대화될 수 있도록 피부 바탕을 마련합니다. 자연 발표 쌀겨 추출물과 풍부한 영양 성분이 매끄러운 피부 결을 찾아 줍니다.',
      ingredients: '효모/쌀겨발효여과물, 펜틸렌글라이콜, 1,2-헥산다이올, 글리세린, 베타인, 병풀추출물, 무화과추출물, 세라마이드엔피, 다이포타슘글리시리제이트, 에틸헥실글리세린, 카보머, 토코페롤',
      usage: '세안 직후 화장솜에 충분한 양을 적셔 피부 결에 따라 가볍게 닦아내거나, 손바닥에 덜어 얼굴 전체를 감싸듯 가볍게 두드리며 수분감을 충전시킵니다.',
      options: [
        { name: '150ml (기본)', priceModifier: 0 },
        { name: '300ml 대용량 (+24,000원)', priceModifier: 24000 }
      ],
      badge: 'New'
    },
    {
      id: 'bodywash',
      name: 'Aromatic Forest Body Wash',
      krName: '아로마틱 포레스트 바디워시',
      category: 'bodycare',
      price: 32000,
      vol: '300ml',
      image: 'assets/product_cream.png', // Re-using cream image for aesthetic consistency
      textureImage: 'assets/product_serum_texture.png',
      summary: '이른 아침의 촉촉한 숲 향을 담아 하루의 지친 몸과 마음을 이완시켜 주는 자연 유래 바디 클렌저',
      description: '아로마틱 포레스트 바디워시는 편백나무 추출물과 자연 허브 에센셜 오일을 베이스로 하여 샤워 중 깊은 명상 효과를 안겨줍니다. 부드러운 미세 거품이 피부 자극을 줄여 노폐물을 세정하며 산뜻하고 촉촉한 마무리감을 줍니다.',
      ingredients: '정제수, 코코-글루코사이드, 소듐메틸코코일타우레이트, 편백수, 티트리추출물, 라벤더오일, 로즈마리잎오일, 유칼립투스잎오일, 세라마이드엔피, 판테놀, 시트릭애씨드, 소듐클로라이드',
      usage: '샤워 시 적당량을 타올이나 스펀지에 묻혀 풍성하게 거품을 낸 후, 마사지하듯 온몸에 부드럽게 문지르고 미온수로 깨끗이 씻어냅니다.',
      options: [
        { name: '300ml (기본)', priceModifier: 0 },
        { name: '300ml 듀오 세트 (+26,000원)', priceModifier: 26000 }
      ],
      badge: 'Natural'
    }
  ],
  cart: [],
  appliedCoupon: null,
  coupons: [
    { code: 'WELCOME10', rate: 0.10, name: '신규 회원 가입 10% 쿠폰' },
    { code: 'JINO2026', rate: 0.15, name: 'JINO 브랜드 론칭 기념 15% 쿠폰' }
  ],
  reviews: [
    {
      id: 1,
      author: '김*현',
      rating: 5,
      date: '2026.05.18',
      productName: 'Luminous Fluid Serum',
      title: '인생 세럼을 만났습니다.',
      text: '피부 속이 쩍쩍 갈라지는 극건성이었는데 이거 쓰고 속당김이 완전히 사라졌어요! 제형에 있는 오일 알갱이들이 기분 좋게 롤링되면서 부드럽게 밀착됩니다. 번들거림 없고 자연스러운 윤기가 최고에요.',
      image: 'assets/product_serum_texture.png'
    },
    {
      id: 2,
      author: '이*진',
      rating: 5,
      date: '2026.05.14',
      productName: 'Velvet Hydration Cream',
      title: '크림 제형이 너무 매끄러워요.',
      text: '벨벳이라는 이름답게 정말 피부에 닿자마자 버터처럼 녹으면서 벨벳 같은 마무리로 스며들어요. 밤에 바르고 아침에 세안할 때 피부결 만져보면 깜짝 놀랄 정도로 매끄럽고 쫀쫀합니다.',
      image: 'assets/product_cream_texture.png'
    },
    {
      id: 3,
      author: '최*우',
      rating: 4,
      date: '2026.05.10',
      productName: 'Balancing Treatment Essence',
      title: '데일리 토너로 최고입니다.',
      text: '가벼운 물 제형인데 전혀 날아가는 느낌 없이 보습력이 채워져서 놀랐어요. 화장솜으로 결 닦아내고 손바닥으로 톡톡 한 번 더 눌러주면 하루 종일 결 관리가 잘 됩니다. 아주 순해요.',
      image: 'assets/product_serum_texture.png'
    }
  ],
  orders: [
    {
      id: '20260519-0012',
      date: '2026.05.19',
      item: 'Luminous Fluid Serum 50ml 외 1건',
      price: 102000,
      status: '배송중',
      image: 'assets/product_serum.png'
    }
  ],
  user: {
    isLoggedIn: false,
    name: '홍길동',
    grade: 'VIP',
    points: 4800,
    couponsCount: 2
  },
  currentView: 'home',
  currentParams: {}
};

// --- ROUTER SYSTEM ---
const routes = {
  home: renderHome,
  brand: renderBrand,
  shop: renderShop,
  journal: renderJournal,
  review: renderReview,
  contact: renderContact,
  detail: renderProductDetail,
  checkout: renderCheckout,
  mypage: renderMyPage
};

function navigate(view, params = {}) {
  state.currentView = view;
  state.currentParams = params;

  const mainEl = document.querySelector('main');
  mainEl.innerHTML = ''; // Clear viewport

  // Update nav-link Active state
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.view === view) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Call page rendering
  if (routes[view]) {
    routes[view](mainEl, params);
  }

  // Scroll smoothly to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- INITIALIZE EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
  // Sticky nav header scroll logic
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Route interception (Navigation Menu & Logo)
  document.querySelectorAll('[data-view]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.getAttribute('data-view');
      navigate(targetView);
    });
  });

  // Logo Navigation to Home
  document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    navigate('home');
  });

  // Cart Drawer open/close events
  document.getElementById('cartBtn').addEventListener('click', (e) => {
    e.preventDefault();
    openCartDrawer();
  });

  document.querySelector('.cart-close-btn').addEventListener('click', () => {
    closeCartDrawer();
  });

  document.querySelector('.cart-overlay').addEventListener('click', () => {
    closeCartDrawer();
  });

  // User Authentication Modals
  document.getElementById('userBtn').addEventListener('click', (e) => {
    e.preventDefault();
    if (state.user.isLoggedIn) {
      navigate('mypage');
    } else {
      openAuthModal('login');
    }
  });

  document.querySelector('.modal-close-btn').addEventListener('click', () => {
    closeAuthModal();
  });

  document.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.querySelector('.modal-overlay')) {
      closeAuthModal();
    }
  });

  // Initial render
  navigate('home');
  updateCartCount();
});

// --- RENDER FUNCTION: HOME PAGE ---
function renderHome(container) {
  container.innerHTML = `
    <div class="view-section">
      <!-- Hero Banner -->
      <section class="hero-banner">
        <img src="assets/hero_banner.png" class="hero-image" alt="JINO Beauty Hero Banner">
        <div class="hero-overlay">
          <div class="hero-content">
            <span class="hero-tagline">Pure & Sophisticated</span>
            <h1 class="hero-title">당신의 결을 바르게,<br>JINO 식물성 스킨케어</h1>
            <p class="hero-desc">인위적인 요소를 배제하고, 자연 본래의 신선함과 피부 과학을 조화롭게 결합했습니다. 피부 세포가 스스로 빛을 발할 수 있도록 결을 다스리는 미니멀리즘 비건 뷰티 브랜드를 만나보세요.</p>
            <button class="btn-primary" id="heroShopBtn">Shop the Collection</button>
          </div>
        </div>
      </section>

      <!-- Signature Line Section -->
      <section class="section-padding container">
        <div class="section-title text-center">
          <span class="title-tag">Core Lineup</span>
          <h2 class="title-main">시그니처 라인</h2>
        </div>
        
        <!-- Signature Item 1 -->
        <div class="signature-row">
          <div class="signature-img-wrapper">
            <img src="assets/product_serum.png" class="signature-img" alt="Luminous Fluid Serum">
          </div>
          <div class="signature-content">
            <span class="signature-subtitle">01 / Glow Serum</span>
            <h3 class="signature-name">Luminous Fluid Serum<br>루미너스 플루이드 세럼</h3>
            <p class="signature-desc">오일 알갱이가 수분 베이스 젤에 떠 있는 맑은 텍스처로, 롤링하는 즉시 활성화되어 스며듭니다. 피부 건조와 칙칙함을 개선하고 건강하고 투명한 아우라 윤기를 피부에 각인시킵니다.</p>
            <button class="btn-underline signature-detail-btn" data-id="serum">제품 자세히 보기</button>
          </div>
        </div>

        <!-- Signature Item 2 -->
        <div class="signature-row">
          <div class="signature-img-wrapper">
            <img src="assets/product_cream.png" class="signature-img" alt="Velvet Hydration Cream">
          </div>
          <div class="signature-content">
            <span class="signature-subtitle">02 / Barrier Cream</span>
            <h3 class="signature-name">Velvet Hydration Cream<br>벨벳 하이드레이션 크림</h3>
            <p class="signature-desc">보습 특화 천연 세라마이드와 천연 식물 추출 스쿠알란을 고밀도로 압착한 제형입니다. 마치 피부에 고급스러운 실크 슈트를 입힌 것처럼, 건조함을 유발하는 모든 자극원으로부터 피부 장벽을 철벽 보호합니다.</p>
            <button class="btn-underline signature-detail-btn" data-id="cream">제품 자세히 보기</button>
          </div>
        </div>
      </section>

      <!-- Product Grid Section -->
      <section class="section-padding container" style="border-top: 1px solid var(--border-light)">
        <div class="section-title text-center">
          <span class="title-tag">All Products</span>
          <h2 class="title-main">라인업 둘러보기</h2>
        </div>
        <div class="product-grid" id="homeProductGrid">
          <!-- Dynamically filled with products -->
        </div>
      </section>

      <!-- Brand Value Section -->
      <section class="section-padding brand-values">
        <div class="container">
          <div class="section-title text-center">
            <span class="title-tag">Our Philosophy</span>
            <h2 class="title-main">JINO가 약속하는 가치</h2>
          </div>
          <div class="values-grid">
            <div class="value-item">
              <div class="value-icon"><i class="fas fa-leaf"></i></div>
              <h3 class="value-title">100% Certified Vegan</h3>
              <p class="value-desc">동물 유래 성분을 완전히 배제하고 오직 식물 본연의 순수한 효능에 집중하는 비건 인증 브랜드입니다.</p>
            </div>
            <div class="value-item">
              <div class="value-icon"><i class="fas fa-wind"></i></div>
              <h3 class="value-title">Clean Skin Science</h3>
              <p class="value-desc">인공 색소와 알레르기 유발 합성 향료를 일절 사용하지 않아 초민감 피부도 자극 없이 매일 맑게 가꿀 수 있습니다.</p>
            </div>
            <div class="value-item">
              <div class="value-icon"><i class="fas fa-recycle"></i></div>
              <h3 class="value-title">Eco-Friendly Package</h3>
              <p class="value-desc">재활용 가능한 투명 글라스와 콩기름 인쇄 패키지를 통해 지구 환경의 건강함까지 함께 고민합니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  // Hero Shop Button Click
  document.getElementById('heroShopBtn').addEventListener('click', () => {
    navigate('shop');
  });

  // Render Product Grid
  const gridEl = document.getElementById('homeProductGrid');
  state.products.slice(0, 3).forEach(prod => {
    const card = createProductCard(prod);
    gridEl.appendChild(card);
  });

  // Add Detail Button click listener
  document.querySelectorAll('.signature-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = btn.getAttribute('data-id');
      navigate('detail', { id: prodId });
    });
  });
}

// --- RENDER FUNCTION: BRAND STORY PAGE ---
function renderBrand(container) {
  container.innerHTML = `
    <div class="view-section">
      <section class="brand-hero">
        <div class="brand-hero-content">
          <span class="title-tag">The Story of JINO</span>
          <h1 class="heading-serif" style="font-size: 48px; color: var(--text-primary);">피부 본연의 결을 찾는 여정</h1>
        </div>
      </section>

      <section class="magazine-container">
        <div class="magazine-intro">
          "덜어낼수록 피부는 비로소 채워집니다. 인위적인 치장 대신 피부 스스로 살아 숨 쉬는 결을 복원하는 것, 이것이 JINO의 궁극적 사명입니다."
        </div>

        <div class="magazine-section">
          <!-- Story 1 -->
          <div class="magazine-row">
            <div class="magazine-img-box">
              <img src="assets/product_serum_texture.png" alt="Pure Formula texture">
            </div>
            <div class="magazine-text-box">
              <span class="magazine-section-tag">Origin</span>
              <h2 class="magazine-section-title">자연의 정교함에서 영감을 받다</h2>
              <p class="magazine-text">
                JINO는 인위적 합성 유기 화학물 대신 숲의 원천력을 온전히 지닌 식물 추출물에 주목했습니다. 편백 나무, 자연 발표 쌀겨, 스쿠알란 등 자연에서 얻은 고품질의 재료들이 피부 속에 투명하게 스며들 때, 피부 장벽은 본연의 힘을 되찾습니다. 
              </p>
              <div class="magazine-quote">
                "피부는 화려함이 아닌 안식을 필요로 합니다."
              </div>
            </div>
          </div>

          <!-- Story 2 -->
          <div class="magazine-row">
            <div class="magazine-img-box">
              <img src="assets/product_cream_texture.png" alt="Velvet Cream Formula texturing">
            </div>
            <div class="magazine-text-box">
              <span class="magazine-section-tag">Science & Touch</span>
              <h2 class="magazine-section-title">감각적인 포뮬레이션 설계</h2>
              <p class="magazine-text">
                JINO는 수많은 포뮬레이터와의 연구 끝에 크림 하나에도 벨벳처럼 매끄럽고 균일하게 녹아내리는 밀착 기술을 개발해 냈습니다. 끈적거림 없이 피부 결 하나하나에 가볍게 착 달라붙는 산뜻한 감촉으로 완성된 제형은 매일 바르는 스킨케어 시간을 더욱 특별한 리추얼로 만들어 줍니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

// --- RENDER FUNCTION: SHOP PAGE ---
function renderShop(container) {
  let activeFilter = state.currentParams.category || 'all';
  let activeSort = 'featured';

  container.innerHTML = `
    <div class="view-section container section-padding">
      <div class="shop-header">
        <span class="title-tag">The Collection</span>
        <h1 class="title-main">전체 제품보기</h1>
        
        <!-- Category Filter -->
        <div class="category-filter">
          <button class="filter-btn ${activeFilter === 'all' ? 'active' : ''}" data-cat="all">전체보기</button>
          <button class="filter-btn ${activeFilter === 'skincare' ? 'active' : ''}" data-cat="skincare">스킨케어</button>
          <button class="filter-btn ${activeFilter === 'bodycare' ? 'active' : ''}" data-cat="bodycare">바디케어</button>
        </div>
      </div>

      <div class="shop-controls">
        <div class="products-count"><span id="prodCount">0</span>개의 제품이 있습니다.</div>
        <div class="shop-sort">
          정렬기준: 
          <select class="sort-select" id="sortSelect">
            <option value="featured">추천순</option>
            <option value="low-price">가격 낮은순</option>
            <option value="high-price">가격 높은순</option>
          </select>
        </div>
      </div>

      <!-- Shop Product Grid -->
      <div class="product-grid" id="shopProductGrid"></div>
    </div>
  `;

  const gridEl = document.getElementById('shopProductGrid');
  const countEl = document.getElementById('prodCount');
  const sortSelect = document.getElementById('sortSelect');

  function filterAndRender() {
    gridEl.innerHTML = '';
    
    // Filtering
    let filtered = state.products;
    if (activeFilter !== 'all') {
      filtered = state.products.filter(p => p.category === activeFilter);
    }

    // Sorting
    if (activeSort === 'low-price') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'high-price') {
      filtered.sort((a, b) => b.price - a.price);
    } else {
      // Default: featured (represented by order in mock DB)
      filtered.sort((a, b) => a.id.localeCompare(b.id)); 
    }

    // Rendering
    filtered.forEach(prod => {
      const card = createProductCard(prod);
      gridEl.appendChild(card);
    });

    countEl.innerText = filtered.length;
  }

  // Filter Buttons Click
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-cat');
      filterAndRender();
    });
  });

  // Sort Select Click
  sortSelect.addEventListener('change', (e) => {
    activeSort = e.target.value;
    filterAndRender();
  });

  filterAndRender();
}

// --- RENDER FUNCTION: PRODUCT DETAIL PAGE ---
function renderProductDetail(container, params) {
  const prodId = params.id || 'serum';
  const product = state.products.find(p => p.id === prodId);

  if (!product) {
    container.innerHTML = `<div class="container section-padding text-center"><h3>해당 제품을 찾을 수 없습니다.</h3><button class="btn-primary" onclick="navigate('shop')">쇼핑하러 가기</button></div>`;
    return;
  }

  let selectedOptionIndex = 0;
  let currentQty = 1;

  container.innerHTML = `
    <div class="view-section container section-padding">
      <div class="detail-grid">
        <!-- Left Column: Gallery -->
        <div class="detail-gallery">
          <div class="detail-main-img-box">
            <img src="${product.image}" class="detail-main-img" id="detailMainImg" alt="${product.name}">
          </div>
          <div class="detail-thumbs">
            <div class="thumb-box active" data-img="${product.image}">
              <img src="${product.image}" alt="Product Front View">
            </div>
            <div class="thumb-box" data-img="${product.textureImage}">
              <img src="${product.textureImage}" alt="Product Texture View">
            </div>
          </div>
        </div>

        <!-- Right Column: Buy Panel -->
        <div class="detail-info">
          <span class="detail-tag">${product.badge}</span>
          <h1 class="detail-title">${product.name}</h1>
          <h3 class="heading-serif" style="font-size: 20px; color: var(--text-secondary); margin-bottom: 20px;">${product.krName}</h3>
          <p class="detail-summary">${product.summary}</p>
          
          <div class="detail-meta-row">
            <span class="detail-meta-label">정가</span>
            <span class="detail-price" id="detailPrice">${product.price.toLocaleString()}원</span>
          </div>
          <div class="detail-meta-row">
            <span class="detail-meta-label">용량 / 규격</span>
            <span>${product.vol}</span>
          </div>
          <div class="detail-meta-row">
            <span class="detail-meta-label">배송 안내</span>
            <span>5만원 이상 구매 시 무료배송 (기본 3,000원)</span>
          </div>

          <!-- Options Select -->
          <div class="options-section">
            <span class="options-label">용량 옵션 선택</span>
            <div class="options-grid">
              ${product.options.map((opt, idx) => `
                <button class="option-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
                  ${opt.name}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Purchase control -->
          <div class="purchase-section">
            <div class="qty-cta-row">
              <div class="qty-selector">
                <button class="qty-btn" id="qtyMinusBtn"><i class="fas fa-minus"></i></button>
                <div class="qty-val" id="qtyValEl">1</div>
                <button class="qty-btn" id="qtyPlusBtn"><i class="fas fa-plus"></i></button>
              </div>
              <button class="btn-add-cart" id="addCartBtn">장바구니 담기</button>
            </div>
            <button class="btn-buy-now" id="buyNowBtn">바로 구매하기</button>
          </div>
        </div>
      </div>

      <!-- Detail Tabs -->
      <div class="detail-tabs-container">
        <div class="detail-tabs">
          <button class="tab-nav active" data-tab="desc">제품 상세 설명</button>
          <button class="tab-nav" data-tab="ingredients">전성분 안내</button>
          <button class="tab-nav" data-tab="reviews">고객 리뷰 (<span id="detailReviewCount">0</span>)</button>
          <button class="tab-nav" data-tab="qna">Q&A 문의</button>
        </div>

        <!-- Description Panel -->
        <div class="tab-content-panel active" id="tab-desc">
          <div class="tab-desc-flex">
            <img src="${product.textureImage}" class="tab-desc-img" alt="Texture visual">
            <div class="tab-desc-text">
              <h4 class="tab-desc-title">자연의 에너지를 고밀도로 도포하는 스킨 리추얼</h4>
              <p>${product.description}</p>
              <p><strong>사용 방법:</strong> ${product.usage}</p>
            </div>
          </div>
        </div>

        <!-- Ingredients Panel -->
        <div class="tab-content-panel" id="tab-ingredients">
          <div class="ingredients-list">
            <h4 class="tab-desc-title" style="margin-bottom: 20px;">JINO Clean All Ingredients</h4>
            <p style="letter-spacing: 0.05em; font-size: 14px;">${product.ingredients}</p>
          </div>
        </div>

        <!-- Reviews Panel -->
        <div class="tab-content-panel" id="tab-reviews">
          <div class="review-list" id="detailReviewList">
            <!-- Filled dynamically -->
          </div>
        </div>

        <!-- Q&A Panel -->
        <div class="tab-content-panel" id="tab-qna">
          <div class="qna-list">
            <div class="qna-item">
              <div class="qna-question">Q. 비건 성분인데 임산부가 사용해도 되나요? <i class="fas fa-chevron-down"></i></div>
              <div class="qna-answer">A. 안녕하세요 JINO CS팀입니다. 저희 제품은 인공 화학 성분을 배제한 100% 식물성 성분으로 민감피부도 편안하게 사용 가능하지만, 개인에 따른 체질 차이가 있을 수 있으므로 전문의나 담당 의사분과 상의하신 뒤 전성분을 체크하고 쓰실 것을 권장드립니다.</div>
            </div>
            <div class="qna-item">
              <div class="qna-question">Q. 주문 완료 후 배송이 얼마나 소요될까요? <i class="fas fa-chevron-down"></i></div>
              <div class="qna-answer">A. 일반적으로 결제 완료 후 영업일 기준 1~3일 이내에 배송이 출고됩니다. 주말이나 공휴일이 겹칠 경우 지연될 수 있습니다.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Gallery Click
  document.querySelectorAll('.thumb-box').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.thumb-box').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const targetImg = thumb.getAttribute('data-img');
      document.getElementById('detailMainImg').setAttribute('src', targetImg);
    });
  });

  // Options Click
  const optPriceModifier = () => product.options[selectedOptionIndex].priceModifier;
  const updatePriceDisplay = () => {
    const singlePrice = product.price + optPriceModifier();
    document.getElementById('detailPrice').innerText = (singlePrice * currentQty).toLocaleString() + '원';
  };

  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedOptionIndex = parseInt(btn.getAttribute('data-idx'));
      updatePriceDisplay();
    });
  });

  // Quantity Change
  document.getElementById('qtyPlusBtn').addEventListener('click', () => {
    currentQty++;
    document.getElementById('qtyValEl').innerText = currentQty;
    updatePriceDisplay();
  });

  document.getElementById('qtyMinusBtn').addEventListener('click', () => {
    if (currentQty > 1) {
      currentQty--;
      document.getElementById('qtyValEl').innerText = currentQty;
      updatePriceDisplay();
    }
  });

  // Add to Cart
  document.getElementById('addCartBtn').addEventListener('click', () => {
    const optSelected = product.options[selectedOptionIndex];
    addToCart(product.id, optSelected.name, optSelected.priceModifier, currentQty);
  });

  // Buy Now
  document.getElementById('buyNowBtn').addEventListener('click', () => {
    const optSelected = product.options[selectedOptionIndex];
    // Push directly to cart (or clean cart first if dynamic checkout)
    state.cart = []; // Direct checkout empties cart for mock demo
    addToCart(product.id, optSelected.name, optSelected.priceModifier, currentQty);
    navigate('checkout');
  });

  // Tabs Toggle
  document.querySelectorAll('.tab-nav').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-nav').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content-panel').forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      const tabTarget = tab.getAttribute('data-tab');
      document.getElementById(`tab-${tabTarget}`).classList.add('active');
    });
  });

  // Q&A Accordion Click
  document.querySelectorAll('.qna-question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      answer.classList.toggle('open');
    });
  });

  // Populate dynamic product reviews
  const prodReviews = state.reviews.filter(r => r.productName === product.name);
  document.getElementById('detailReviewCount').innerText = prodReviews.length;
  
  const reviewListEl = document.getElementById('detailReviewList');
  if (prodReviews.length === 0) {
    reviewListEl.innerHTML = `<div class="text-center" style="padding: 40px; color: var(--text-secondary);">이 제품의 첫 후기를 남겨보세요!</div>`;
  } else {
    prodReviews.forEach(rev => {
      const revItem = document.createElement('div');
      revItem.className = 'review-item';
      revItem.innerHTML = `
        <div class="review-item-header">
          <span class="review-author">${rev.author}</span>
          <div>
            <span class="review-stars">${'★'.repeat(rev.rating)}${'☆'.repeat(5-rev.rating)}</span>
            <span class="review-date" style="margin-left:15px">${rev.date}</span>
          </div>
        </div>
        <div class="review-body">
          <div class="review-text-content">
            <span class="review-prod-tag">${rev.productName}</span>
            <h5 class="review-item-title">${rev.title}</h5>
            <p class="review-item-text">${rev.text}</p>
          </div>
          ${rev.image ? `<img src="${rev.image}" class="review-img-thumb" alt="Review texture attachment">` : ''}
        </div>
      `;
      reviewListEl.appendChild(revItem);
    });
  }
}

// --- RENDER FUNCTION: JOURNAL VIEW ---
function renderJournal(container) {
  container.innerHTML = `
    <div class="view-section container section-padding">
      <div class="section-title text-center">
        <span class="title-tag">JINO Magazine</span>
        <h1 class="title-main">JOURNAL</h1>
      </div>

      <div class="journal-grid">
        <!-- Post 1 -->
        <article class="journal-card">
          <div class="journal-img-box">
            <img src="assets/product_serum_texture.png" class="journal-img" alt="Journal cover skin oil drops">
          </div>
          <div class="journal-tag">Skincare Guide</div>
          <h2 class="journal-title">환절기 건조함에 대처하는 오일 세럼 레이어링 기법</h2>
          <p class="journal-preview">기온차가 큰 계절에는 수분크림만으로 부족합니다. JINO 루미너스 플루이드 세럼을 여러 겹 레이어링 하여 수분 잠금막을 씌우는 최적의 방법을 알려드립니다.</p>
          <span class="journal-date">2026.05.15 / 5 min read</span>
        </article>

        <!-- Post 2 -->
        <article class="journal-card">
          <div class="journal-img-box">
            <img src="assets/product_cream_texture.png" class="journal-img" alt="Journal cover thick cream whip">
          </div>
          <div class="journal-tag">Vegan Ritual</div>
          <h2 class="journal-title">피부가 원하는 자극 없는 휴식, 비건 화장품 가이드</h2>
          <p class="journal-preview">인위적인 화학 첨가물을 걷어내고 식물 본질에서 얻어낸 자연 유래 추출물이 어떻게 피부 트러블을 줄이고 활성을 활성화하는지 그 메커니즘을 상세 연구결과와 함께 탐색합니다.</p>
          <span class="journal-date">2026.05.08 / 4 min read</span>
        </article>
      </div>
    </div>
  `;
}

// --- RENDER FUNCTION: REVIEW BOARD ---
function renderReview(container) {
  let selectedStars = 5;

  container.innerHTML = `
    <div class="view-section container section-padding">
      <div class="section-title text-center">
        <span class="title-tag">Customer Stories</span>
        <h1 class="title-main">REVIEW BOARD</h1>
      </div>

      <!-- Review Summary Box -->
      <div class="review-summary-box">
        <div class="review-avg-rating">
          <span id="overallRating">4.8</span>
          <span class="review-stars" id="overallStars">★★★★★</span>
        </div>
        <div style="font-size:14px; color:var(--text-secondary)">
          진짜 구매한 고객들이 작성한 솔직한 사용 후기입니다.<br>
          피부 변화와 만족도를 실시간으로 확인해 보세요.
        </div>
      </div>

      <div class="write-review-btn-container">
        <button class="btn-primary" id="openReviewFormBtn">리뷰 작성하기</button>
      </div>

      <!-- Write Review Form -->
      <section class="write-review-section" id="reviewFormSection">
        <h3 class="heading-serif" style="font-size:22px; margin-bottom: 25px;">구매 후기 작성</h3>
        <form id="newReviewForm">
          <div class="form-group">
            <label class="form-label">구매한 상품 선택</label>
            <select class="form-select" id="reviewProduct" required>
              ${state.products.map(p => `<option value="${p.name}">${p.name} (${p.krName})</option>`).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">평점 선택</label>
            <div class="star-rating-select" id="starSelector">
              <i class="fas fa-star active" data-val="1"></i>
              <i class="fas fa-star active" data-val="2"></i>
              <i class="fas fa-star active" data-val="3"></i>
              <i class="fas fa-star active" data-val="4"></i>
              <i class="fas fa-star active" data-val="5"></i>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">작성자 성명</label>
            <input type="text" class="form-input" id="reviewAuthor" placeholder="성명을 입력하세요 (예: 홍길동)" required>
          </div>

          <div class="form-group">
            <label class="form-label">한 줄 제목</label>
            <input type="text" class="form-input" id="reviewTitle" placeholder="가장 핵심적인 한 줄 요약을 입력하세요" required>
          </div>

          <div class="form-group">
            <label class="form-label">후기 상세 내용</label>
            <textarea class="form-textarea" rows="5" id="reviewText" placeholder="최소 10자 이상 텍스처 사용감, 피부 변화 등을 솔직하게 작성해주세요." required></textarea>
          </div>

          <button type="submit" class="btn-primary" style="width: 100%;">리뷰 등록 완료</button>
        </form>
      </section>

      <!-- Review List -->
      <div class="review-list" id="boardReviewList"></div>
    </div>
  `;

  const reviewListEl = document.getElementById('boardReviewList');

  // Render Reviews List
  function renderList() {
    reviewListEl.innerHTML = '';
    
    // Calculate Average
    const sum = state.reviews.reduce((acc, curr) => acc + curr.rating, 0);
    const avg = (sum / state.reviews.length).toFixed(1);
    document.getElementById('overallRating').innerText = avg;
    
    const filledStars = Math.round(avg);
    document.getElementById('overallStars').innerText = '★'.repeat(filledStars) + '☆'.repeat(5 - filledStars);

    // List reviews
    state.reviews.forEach(rev => {
      const rCard = document.createElement('div');
      rCard.className = 'review-item';
      rCard.innerHTML = `
        <div class="review-item-header">
          <span class="review-author">${rev.author}</span>
          <div>
            <span class="review-stars">${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}</span>
            <span class="review-date" style="margin-left: 15px">${rev.date}</span>
          </div>
        </div>
        <div class="review-body">
          <div class="review-text-content">
            <span class="review-prod-tag">${rev.productName}</span>
            <h5 class="review-item-title">${rev.title}</h5>
            <p class="review-item-text">${rev.text}</p>
          </div>
          ${rev.image ? `<img src="${rev.image}" class="review-img-thumb" alt="User review texture photo">` : ''}
        </div>
      `;
      reviewListEl.appendChild(rCard);
    });
  }

  // Toggle Review Form Panel
  document.getElementById('openReviewFormBtn').addEventListener('click', () => {
    document.getElementById('reviewFormSection').classList.toggle('open');
  });

  // Star selector clicks
  document.getElementById('starSelector').addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
      selectedStars = parseInt(e.target.getAttribute('data-val'));
      document.querySelectorAll('#starSelector i').forEach(star => {
        const starVal = parseInt(star.getAttribute('data-val'));
        if (starVal <= selectedStars) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }
  });

  // Review Form Submit Handler
  document.getElementById('newReviewForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const author = document.getElementById('reviewAuthor').value.trim();
    // Mask name for privacy
    let masked = author;
    if (author.length > 2) {
      masked = author[0] + '*'.repeat(author.length - 2) + author[author.length - 1];
    } else if (author.length === 2) {
      masked = author[0] + '*';
    }

    // Default review textures based on product for aesthetic dummy images
    const selectedProdName = document.getElementById('reviewProduct').value;
    let imageSrc = 'assets/product_serum_texture.png';
    if (selectedProdName.includes('Cream')) {
      imageSrc = 'assets/product_cream_texture.png';
    }

    const newRev = {
      id: state.reviews.length + 1,
      author: masked,
      rating: selectedStars,
      date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
      productName: selectedProdName,
      title: document.getElementById('reviewTitle').value.trim(),
      text: document.getElementById('reviewText').value.trim(),
      image: imageSrc
    };

    state.reviews.unshift(newRev); // Prepend
    renderList();

    // Reset and Close
    document.getElementById('newReviewForm').reset();
    document.getElementById('reviewFormSection').classList.remove('open');
    selectedStars = 5;
    document.querySelectorAll('#starSelector i').forEach(s => s.classList.add('active'));
    alert('소중한 후기가 성공적으로 등록되었습니다.');
  });

  renderList();
}

// --- RENDER FUNCTION: CONTACT PAGE ---
function renderContact(container) {
  container.innerHTML = `
    <div class="view-section container section-padding">
      <div class="contact-grid">
        <!-- Left: CS Info -->
        <div class="contact-info">
          <span class="title-tag">Contact Us</span>
          <h1 class="contact-info-title heading-serif">JINO 쇼룸 & 고객센터</h1>
          <p class="contact-info-desc">도움이 필요하시거나 가사 대리점, B2B 제휴 및 오프라인 쇼룸 입점 문의가 있다면 언제든지 연락주세요. 친절하고 신속하게 상담해 드리겠습니다.</p>
          
          <div class="contact-item">
            <span class="contact-label">고객 센터 전화번호</span>
            <div class="contact-value" style="font-size: 20px; font-weight:600; color: var(--text-primary);">1644-0000</div>
            <div class="contact-value">평일 10:00 ~ 17:00 (점심시간 12:00 ~ 13:00 / 토,일,공휴일 휴무)</div>
          </div>

          <div class="contact-item">
            <span class="contact-label">공식 제휴 이메일</span>
            <div class="contact-value">partnership@jinobeauty.com</div>
          </div>

          <div class="contact-item">
            <span class="contact-label">본사 & 오프라인 쇼룸 주소</span>
            <div class="contact-value">서울특별시 성동구 성수동2가 321 JINO 스페이스 빌딩 2층</div>
          </div>
        </div>

        <!-- Right: Email Inquiry Form -->
        <div class="contact-form-box">
          <h3 class="heading-serif" style="font-size: 22px; margin-bottom: 25px;">상담 문의 양식</h3>
          <form id="contactForm">
            <div class="form-group">
              <label class="form-label">문의 카테고리</label>
              <select class="form-select" required>
                <option value="cs">배송/주문 CS 문의</option>
                <option value="b2b">오프라인 입점 및 제휴 문의</option>
                <option value="bulk">대량 구매 및 기프트 세트 문의</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">이름 / 기업명</label>
              <input type="text" class="form-input" placeholder="성함 또는 상호를 입력하세요" required>
            </div>
            <div class="form-group">
              <label class="form-label">답변 받을 이메일</label>
              <input type="email" class="form-input" placeholder="name@domain.com" required>
            </div>
            <div class="form-group">
              <label class="form-label">문의 내용</label>
              <textarea class="form-textarea" rows="6" placeholder="문의 사항을 상세히 남겨주시면 담당 부서 확인 후 영업일 기준 24시간 내에 답변해 드리겠습니다." required></textarea>
            </div>
            <button type="submit" class="btn-primary" style="width: 100%;">문의 이메일 전송하기</button>
          </form>
        </div>
      </div>
    </div>
  `;

  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('문의가 전송되었습니다. 확인 후 메일로 답변드리겠습니다.');
    document.getElementById('contactForm').reset();
  });
}

// --- RENDER FUNCTION: MY PAGE VIEW ---
function renderMyPage(container) {
  if (!state.user.isLoggedIn) {
    container.innerHTML = `<div class="container section-padding text-center"><h3>마이페이지를 확인하려면 로그인이 필요합니다.</h3><button class="btn-primary" style="margin-top:20px" id="myPageLoginBtn">로그인하기</button></div>`;
    document.getElementById('myPageLoginBtn').addEventListener('click', () => {
      openAuthModal('login');
    });
    return;
  }

  container.innerHTML = `
    <div class="view-section container section-padding">
      <div class="mypage-grid">
        <!-- Sidebar -->
        <aside class="mypage-sidebar">
          <div class="profile-card">
            <div class="profile-avatar">${state.user.name[0]}</div>
            <div class="profile-name">${state.user.name} 님</div>
            <div class="profile-grade">${state.user.grade} 등급</div>
          </div>
          <ul class="mypage-menu">
            <li><a href="#" class="mypage-menu-link active">주문 / 배송 조회</a></li>
            <li><a href="#" class="mypage-menu-link">쿠폰 내역</a></li>
            <li><a href="#" class="mypage-menu-link">나의 포인트</a></li>
            <li><a href="#" class="mypage-menu-link" id="logoutBtn" style="color: #c97979">로그아웃</a></li>
          </ul>
        </aside>

        <!-- Main MyPage Panel -->
        <div class="mypage-main">
          <!-- Stats Summary -->
          <div class="mypage-stats-row">
            <div class="stat-card">
              <div class="stat-num">${state.user.couponsCount}장</div>
              <div class="stat-label">보유 쿠폰</div>
            </div>
            <div class="stat-card">
              <div class="stat-num">${state.user.points.toLocaleString()} P</div>
              <div class="stat-label">적립금 포인트</div>
            </div>
            <div class="stat-card">
              <div class="stat-num">${state.orders.length}건</div>
              <div class="stat-label">진행중 주문</div>
            </div>
          </div>

          <!-- Order Tracker -->
          <div class="mypage-section-title">최근 주문 및 배송 상태</div>
          <div class="order-tracker-box">
            <div class="tracker-title-row">
              <strong>주문 번호: ${state.orders[0].id}</strong>
              <span style="color:var(--text-secondary)">${state.orders[0].date} 주문</span>
            </div>
            <div class="tracker-steps">
              <div class="tracker-step ${state.orders[0].status === '결제완료' ? 'active' : ''}">
                <div class="tracker-circle">1</div>
                <div class="tracker-label">결제완료</div>
              </div>
              <div class="tracker-step ${state.orders[0].status === '상품준비중' ? 'active' : ''}">
                <div class="tracker-circle">2</div>
                <div class="tracker-label">상품준비중</div>
              </div>
              <div class="tracker-step ${state.orders[0].status === '배송중' ? 'active' : ''}">
                <div class="tracker-circle">3</div>
                <div class="tracker-label">배송중</div>
              </div>
              <div class="tracker-step ${state.orders[0].status === '배송완료' ? 'active' : ''}">
                <div class="tracker-circle">4</div>
                <div class="tracker-label">배송완료</div>
              </div>
            </div>
          </div>

          <!-- Orders History Table -->
          <div class="mypage-section-title">과거 주문 내역</div>
          <div style="overflow-x:auto;">
            <table class="orders-table">
              <thead>
                <tr>
                  <th>주문 정보</th>
                  <th>주문 금액</th>
                  <th>진행 상태</th>
                </tr>
              </thead>
              <tbody>
                ${state.orders.map(order => `
                  <tr>
                    <td>
                      <div class="order-flex">
                        <img src="${order.image}" class="order-img" alt="order image mini">
                        <div>
                          <div style="font-weight:600;">${order.item}</div>
                          <div style="font-size:11px; color:var(--text-light); margin-top:3px;">주문일: ${order.date}</div>
                        </div>
                      </div>
                    </td>
                    <td style="font-weight: 500;">${order.price.toLocaleString()}원</td>
                    <td style="color:var(--accent-gold-dark); font-weight:600;">${order.status}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;

  // Logout Handler
  document.getElementById('logoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    state.user.isLoggedIn = false;
    alert('로그아웃 되었습니다.');
    navigate('home');
  });
}

// --- RENDER FUNCTION: CHECKOUT PROCESS VIEW ---
function renderCheckout(container) {
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="container section-padding text-center">
        <h3>장바구니가 비어 있습니다.</h3>
        <button class="btn-primary" style="margin-top:20px" onclick="navigate('shop')">쇼핑하러 가기</button>
      </div>
    `;
    return;
  }

  // Pre-calculate prices
  let subtotal = 0;
  state.cart.forEach(item => {
    const singlePrice = item.product.price + item.priceModifier;
    subtotal += singlePrice * item.qty;
  });

  let discount = 0;
  if (state.appliedCoupon) {
    discount = Math.floor(subtotal * state.appliedCoupon.rate);
  }

  const shipping = (subtotal - discount) >= 50000 ? 0 : 3000;
  const grandTotal = subtotal - discount + shipping;

  let activePayment = 'card'; // card, kakaopay, naverpay

  container.innerHTML = `
    <div class="view-section container section-padding">
      <div class="section-title text-center">
        <span class="title-tag">Secure Checkout</span>
        <h1 class="title-main">주문 결제하기</h1>
      </div>

      <div class="checkout-grid">
        <!-- Left: Form -->
        <div class="checkout-form-area">
          <!-- 1. Customer Info -->
          <div class="checkout-section-title">1. 주문자 정보</div>
          <div class="form-group">
            <label class="form-label">주문자명</label>
            <input type="text" class="form-input" id="checkName" value="${state.user.isLoggedIn ? state.user.name : ''}" required>
          </div>
          <div class="form-group">
            <label class="form-label">휴대폰 번호</label>
            <input type="tel" class="form-input" id="checkPhone" placeholder="010-0000-0000" required>
          </div>
          <div class="form-group">
            <label class="form-label">이메일 주소</label>
            <input type="email" class="form-input" id="checkEmail" placeholder="name@domain.com" required>
          </div>

          <!-- 2. Shipping Address -->
          <div class="checkout-section-title">2. 배송지 정보</div>
          <div class="form-group">
            <label class="form-label">우편번호</label>
            <div style="display:flex; gap:10px;">
              <input type="text" class="form-input" id="checkZip" placeholder="우편번호" style="width: 120px;" required>
              <button class="btn-primary" style="padding: 10px 20px; font-size:11px;" onclick="alert('주소 검색은 데모 버전에서 지원하지 않습니다.')">주소 검색</button>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">기본 주소</label>
            <input type="text" class="form-input" id="checkAddr1" placeholder="도로명 주소 또는 지번 주소" required>
          </div>
          <div class="form-group">
            <label class="form-label">상세 주소</label>
            <input type="text" class="form-input" id="checkAddr2" placeholder="상세주소 입력 (동, 호수 등)" required>
          </div>

          <!-- 3. Payment Methods -->
          <div class="checkout-section-title">3. 결제수단 선택</div>
          <div class="checkout-payment-methods">
            <div class="payment-method-card active" data-method="card">
              <i class="far fa-credit-card payment-method-icon"></i>
              <span class="payment-method-title">신용카드 결제</span>
            </div>
            <div class="payment-method-card kakaopay" data-method="kakaopay">
              <i class="fas fa-comment payment-method-icon"></i>
              <span class="payment-method-title">카카오페이</span>
            </div>
            <div class="payment-method-card naverpay" data-method="naverpay">
              <i class="fas fa-font payment-method-icon"></i>
              <span class="payment-method-title">네이버페이</span>
            </div>
          </div>
        </div>

        <!-- Right: Cart Summary Box -->
        <div class="checkout-summary-box">
          <h3 class="heading-serif" style="font-size:20px; margin-bottom: 25px;">결제 정보 요약</h3>
          
          <div class="checkout-items-list">
            ${state.cart.map(item => `
              <div class="checkout-item-mini">
                <div>
                  <span class="checkout-item-mini-name">${item.product.name}</span>
                  <span class="checkout-item-mini-qty">x${item.qty}</span>
                </div>
                <span>${((item.product.price + item.priceModifier) * item.qty).toLocaleString()}원</span>
              </div>
            `).join('')}
          </div>

          <div class="cart-summary-row">
            <span>총 상품 금액</span>
            <span>${subtotal.toLocaleString()}원</span>
          </div>
          <div class="cart-summary-row" style="color: #c07a7a;">
            <span>쿠폰 할인</span>
            <span>-${discount.toLocaleString()}원</span>
          </div>
          <div class="cart-summary-row">
            <span>배송비</span>
            <span>${shipping === 0 ? '무료' : shipping.toLocaleString() + '원'}</span>
          </div>
          
          <div class="cart-summary-row total">
            <span>최종 결제 금액</span>
            <span>${grandTotal.toLocaleString()}원</span>
          </div>

          <button class="btn-primary" style="width:100%; height: 54px;" id="placeOrderBtn">
            결제하기
          </button>
        </div>
      </div>
    </div>
  `;

  // Payment Selection Handler
  document.querySelectorAll('.payment-method-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      activePayment = card.getAttribute('data-method');
    });
  });

  // Place Order Simulation
  document.getElementById('placeOrderBtn').addEventListener('click', () => {
    // Basic Form validation
    const name = document.getElementById('checkName').value.trim();
    const phone = document.getElementById('checkPhone').value.trim();
    const email = document.getElementById('checkEmail').value.trim();
    const zip = document.getElementById('checkZip').value.trim();
    const addr1 = document.getElementById('checkAddr1').value.trim();
    const addr2 = document.getElementById('checkAddr2').value.trim();

    if (!name || !phone || !email || !zip || !addr1 || !addr2) {
      alert('배송 및 주문 정보 입력을 완료해 주세요.');
      return;
    }

    // Create checkout loader backdrop
    const loader = document.createElement('div');
    loader.className = 'modal-overlay open';
    loader.innerHTML = `
      <div class="modal-box text-center" style="width: 320px; padding: 50px 30px;">
        <i class="fas fa-spinner fa-spin" style="font-size:32px; color: var(--accent-gold); margin-bottom: 20px;"></i>
        <h4 class="heading-serif" style="font-size:18px;">안전하게 결제 처리 중...</h4>
        <p style="font-size:12px; color:var(--text-secondary); margin-top:10px;">창을 닫지 마시고 잠시만 대기해 주세요.</p>
      </div>
    `;
    document.body.appendChild(loader);

    setTimeout(() => {
      // Clean loader
      loader.remove();

      // Update Order History state
      const orderNumber = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '-' + Math.floor(1000 + Math.random() * 9000);
      const mainItemName = state.cart[0].product.name;
      const displayItemText = state.cart.length > 1 ? `${mainItemName} 외 ${state.cart.length - 1}건` : mainItemName;
      
      const newOrder = {
        id: orderNumber,
        date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
        item: displayItemText,
        price: grandTotal,
        status: '결제완료',
        image: state.cart[0].product.image
      };

      state.orders.unshift(newOrder);

      // Reward points calculation (1% of paid grandTotal)
      const earnedPoints = Math.floor(grandTotal * 0.01);
      state.user.points += earnedPoints;

      // Render Order Success screen in viewport
      const mainEl = document.querySelector('main');
      mainEl.innerHTML = `
        <div class="view-section container section-padding">
          <div class="success-card">
            <div class="success-icon"><i class="fas fa-check"></i></div>
            <h1 class="success-title">주문 완료</h1>
            <p class="success-desc">고객님의 주문이 정상적으로 성공 처리되었습니다. JINO 뷰티와 함께 빛나는 하루를 보내세요.</p>
            
            <div class="success-details">
              <div class="success-detail-row"><span>주문번호</span><strong>${orderNumber}</strong></div>
              <div class="success-detail-row"><span>주문제품</span><span>${displayItemText}</span></div>
              <div class="success-detail-row"><span>결제방법</span><span>${activePayment === 'card' ? '신용카드' : activePayment === 'kakaopay' ? '카카오페이' : '네이버페이'}</span></div>
              <div class="success-detail-row"><span>적립 예정 포인트</span><span style="color:var(--accent-success); font-weight:600;">+${earnedPoints.toLocaleString()} P</span></div>
              <div class="success-detail-row"><span>총 결제금액</span><strong>${grandTotal.toLocaleString()}원</strong></div>
            </div>

            <div class="success-btn-row">
              <button class="btn-primary" id="successShopBtn" style="padding: 14px 30px;">계속 쇼핑하기</button>
              <button class="btn-add-cart" id="successMypageBtn" style="height: 48px; padding: 0 30px;">주문 확인하기</button>
            </div>
          </div>
        </div>
      `;

      // Reset cart and applied coupon
      state.cart = [];
      state.appliedCoupon = null;
      updateCartCount();

      // Add success button listeners
      document.getElementById('successShopBtn').addEventListener('click', () => {
        navigate('shop');
      });
      document.getElementById('successMypageBtn').addEventListener('click', () => {
        // Ensure user is marked logged in for order demo checking
        state.user.isLoggedIn = true; 
        navigate('mypage');
      });

    }, 1500);
  });
}

// --- HELPER COMPONENT: CREATE PRODUCT CARD ---
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = product.id;

  card.innerHTML = `
    <div class="product-card-img-container">
      ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
      <img src="${product.image}" class="product-card-img primary" alt="${product.name} Front">
      <img src="${product.textureImage}" class="product-card-img texture" alt="${product.name} Texture">
    </div>
    <div class="product-card-info">
      <h3 class="product-card-title">${product.name}</h3>
      <p class="product-card-summary">${product.summary}</p>
      <div class="product-card-meta">
        <span class="product-card-vol">${product.vol}</span>
        <span class="product-card-price">${product.price.toLocaleString()}원</span>
      </div>
    </div>
  `;

  // Navigate to Detail page when clicking the card
  card.addEventListener('click', () => {
    navigate('detail', { id: product.id });
  });

  return card;
}

// --- CART LOGER DRAW DRAWER ---
function openCartDrawer() {
  document.querySelector('.cart-overlay').classList.add('open');
  document.querySelector('.cart-drawer').classList.add('open');
  renderCart();
}

function closeCartDrawer() {
  document.querySelector('.cart-overlay').classList.remove('open');
  document.querySelector('.cart-drawer').classList.remove('open');
}

function addToCart(productId, optionName, priceModifier, qty) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  // Search if exists same item and option in cart
  const existingItem = state.cart.find(item => item.product.id === productId && item.option === optionName);

  if (existingItem) {
    existingItem.qty += qty;
  } else {
    state.cart.push({
      product: product,
      option: optionName,
      priceModifier: priceModifier,
      qty: qty
    });
  }

  updateCartCount();
  openCartDrawer();
}

function updateCartCount() {
  const totalItems = state.cart.reduce((acc, curr) => acc + curr.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.innerText = totalItems;
  });
}

function renderCart() {
  const itemsContainer = document.querySelector('.cart-items-container');
  const footerEl = document.querySelector('.cart-footer');

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <div class="cart-empty-icon"><i class="fas fa-shopping-bag"></i></div>
        <p style="font-family: var(--font-serif); font-size: 18px; font-weight:300;">장바구니가 비어 있습니다.</p>
        <p style="font-size:12px; color:var(--text-secondary); margin-top:5px;">JINO만의 감각적인 컬렉션을 가득 채워보세요.</p>
      </div>
    `;
    footerEl.classList.add('hidden');
    return;
  }

  footerEl.classList.remove('hidden');
  itemsContainer.innerHTML = '';

  let subtotal = 0;

  state.cart.forEach((item, idx) => {
    const singlePrice = item.product.price + item.priceModifier;
    const totalLinePrice = singlePrice * item.qty;
    subtotal += totalLinePrice;

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${item.product.image}" class="cart-item-img" alt="${item.product.name}">
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.product.name}</h4>
        <span class="cart-item-option">${item.option}</span>
        
        <div class="cart-item-bottom">
          <div class="cart-item-qty">
            <button class="cart-qty-btn minus-btn" data-idx="${idx}"><i class="fas fa-minus"></i></button>
            <div class="cart-qty-val">${item.qty}</div>
            <button class="cart-qty-btn plus-btn" data-idx="${idx}"><i class="fas fa-plus"></i></button>
          </div>
          <span class="cart-item-price">${totalLinePrice.toLocaleString()}원</span>
        </div>
      </div>
      <button class="cart-item-remove remove-btn" data-idx="${idx}"><i class="fas fa-times"></i></button>
    `;
    itemsContainer.appendChild(itemEl);
  });

  // Calculate totals
  let discount = 0;
  if (state.appliedCoupon) {
    discount = Math.floor(subtotal * state.appliedCoupon.rate);
  }

  const shipping = (subtotal - discount) >= 50000 ? 0 : 3000;
  const grandTotal = subtotal - discount + shipping;

  footerEl.innerHTML = `
    <!-- Coupon row -->
    <div class="coupon-input-box">
      <input type="text" class="coupon-input" id="couponCodeInput" placeholder="할인 코드 입력 (WELCOME10 / JINO2026)" ${state.appliedCoupon ? 'disabled' : ''} value="${state.appliedCoupon ? state.appliedCoupon.code + ' (적용됨)' : ''}">
      <button class="coupon-apply-btn" id="couponApplyBtn" ${state.appliedCoupon ? 'disabled' : ''}>
        ${state.appliedCoupon ? '적용 완료' : '적용'}
      </button>
    </div>
    
    <div class="cart-summary-row">
      <span>소계 금액</span>
      <span>${subtotal.toLocaleString()}원</span>
    </div>
    <div class="cart-summary-row" style="color:#c07a7a;">
      <span>쿠폰 할인</span>
      <span>-${discount.toLocaleString()}원</span>
    </div>
    <div class="cart-summary-row">
      <span>배송비</span>
      <span>${shipping === 0 ? '무료배송' : shipping.toLocaleString() + '원'}</span>
    </div>

    <div class="cart-summary-row total">
      <span>총 결제 예정 금액</span>
      <span>${grandTotal.toLocaleString()}원</span>
    </div>

    <button class="cart-checkout-btn" id="checkoutBtn">
      주문 결제 진행하기
    </button>
  `;

  // Cart Qty Event Listener
  document.querySelectorAll('.cart-qty-btn.plus-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'));
      state.cart[idx].qty++;
      updateCartCount();
      renderCart();
    });
  });

  document.querySelectorAll('.cart-qty-btn.minus-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'));
      if (state.cart[idx].qty > 1) {
        state.cart[idx].qty--;
        updateCartCount();
        renderCart();
      }
    });
  });

  // Cart Delete Event Listener
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'));
      state.cart.splice(idx, 1);
      updateCartCount();
      renderCart();
    });
  });

  // Apply Coupon Click
  document.getElementById('couponApplyBtn').addEventListener('click', () => {
    const inputCode = document.getElementById('couponCodeInput').value.trim().toUpperCase();
    const coup = state.coupons.find(c => c.code === inputCode);

    if (coup) {
      state.appliedCoupon = coup;
      alert(`쿠폰이 적용되었습니다: ${coup.name} (${Math.round(coup.rate * 100)}% 할인)`);
      renderCart();
    } else {
      alert('유효하지 않은 쿠폰 코드입니다.');
    }
  });

  // Checkout Redirect
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    closeCartDrawer();
    navigate('checkout');
  });
}

// --- AUTHENTICATION MODALS (LOGIN/REGISTER) ---
function openAuthModal(mode = 'login') {
  document.querySelector('.modal-overlay').classList.add('open');
  renderAuthModal(mode);
}

function closeAuthModal() {
  document.querySelector('.modal-overlay').classList.remove('open');
}

function renderAuthModal(mode) {
  const modalBox = document.querySelector('.modal-box');
  if (mode === 'login') {
    modalBox.innerHTML = `
      <button class="modal-close-btn"><i class="fas fa-times"></i></button>
      <h3 class="modal-title">JINO LOGIN</h3>
      <form id="loginForm">
        <div class="form-group">
          <label class="form-label">이메일 계정</label>
          <input type="email" class="form-input" id="loginEmail" placeholder="name@domain.com" required>
        </div>
        <div class="form-group">
          <label class="form-label">비밀번호</label>
          <input type="password" class="form-input" id="loginPass" placeholder="••••••••" required>
        </div>
        <button type="submit" class="btn-primary" style="width: 100%; height:50px; margin-top:10px;">로그인</button>
      </form>
      <div class="modal-switch">
        아직 회원이 아니신가요? 
        <button class="modal-switch-btn" id="switchToSignup">회원가입하기</button>
      </div>
    `;

    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('loginEmail').value.trim();
      state.user.isLoggedIn = true;
      state.user.name = email.split('@')[0]; // Simple dummy name extraction
      
      closeAuthModal();
      alert(`${state.user.name}님, 환영합니다!`);
      
      // If we were on detail/checkout/mypage, re-render
      navigate(state.currentView, state.currentParams);
    });

    document.getElementById('switchToSignup').addEventListener('click', () => {
      renderAuthModal('signup');
    });

  } else {
    modalBox.innerHTML = `
      <button class="modal-close-btn"><i class="fas fa-times"></i></button>
      <h3 class="modal-title">JINO JOIN</h3>
      <form id="signupForm">
        <div class="form-group">
          <label class="form-label">이름</label>
          <input type="text" class="form-input" id="signName" placeholder="성명을 입력하세요" required>
        </div>
        <div class="form-group">
          <label class="form-label">이메일 주소</label>
          <input type="email" class="form-input" id="signEmail" placeholder="name@domain.com" required>
        </div>
        <div class="form-group">
          <label class="form-label">비밀번호</label>
          <input type="password" class="form-input" id="signPass" placeholder="최소 8자 이상" required>
        </div>
        <button type="submit" class="btn-primary" style="width: 100%; height:50px; margin-top:10px;">가입 완료</button>
      </form>
      <div class="modal-switch">
        이미 회원이신가요? 
        <button class="modal-switch-btn" id="switchToLogin">로그인하기</button>
      </div>
    `;

    document.getElementById('signupForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signName').value.trim();
      
      state.user.isLoggedIn = true;
      state.user.name = name;
      
      closeAuthModal();
      alert(`회원가입을 축하합니다, ${name}님! 가입 기념 10% 쿠폰이 증정되었습니다.`);
      
      // Apply coupon count increment
      state.user.couponsCount = 3; 
      navigate(state.currentView, state.currentParams);
    });

    document.getElementById('switchToLogin').addEventListener('click', () => {
      renderAuthModal('login');
    });
  }

  // Bind close buttons after rendering innerHTML
  modalBox.querySelector('.modal-close-btn').addEventListener('click', () => {
    closeAuthModal();
  });
}
