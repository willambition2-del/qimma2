const sharp = require('sharp');
const fs = require('fs');

const svg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111915" />
      <stop offset="50%" stop-color="#1B2822" />
      <stop offset="100%" stop-color="#0E1512" />
    </linearGradient>

    <radialGradient id="goldGlow" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="#AD8665" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#AD8665" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="googleGlow" cx="30%" cy="50%" r="35%">
      <stop offset="0%" stop-color="#4285F4" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#4285F4" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="snapGlow" cx="70%" cy="50%" r="35%">
      <stop offset="0%" stop-color="#FFFC00" stop-opacity="0.16" />
      <stop offset="100%" stop-color="#FFFC00" stop-opacity="0" />
    </radialGradient>

    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000" flood-opacity="0.65" />
    </filter>

    <filter id="vsShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#000" flood-opacity="0.7" />
    </filter>

    <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8D8C7" stop-opacity="0.7" />
      <stop offset="50%" stop-color="#AD8665" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#AD8665" stop-opacity="0.8" />
    </linearGradient>

    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#24342D" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#16221C" stop-opacity="0.98" />
    </linearGradient>

    <linearGradient id="goldBadgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8D8C7" />
      <stop offset="45%" stop-color="#AD8665" />
      <stop offset="100%" stop-color="#7A5230" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="675" fill="url(#bgGrad)" />
  
  <!-- Subtle Grid -->
  <g opacity="0.04" stroke="#AD8665" stroke-width="1">
    <line x1="0" y1="135" x2="1200" y2="135" />
    <line x1="0" y1="270" x2="1200" y2="270" />
    <line x1="0" y1="405" x2="1200" y2="405" />
    <line x1="0" y1="540" x2="1200" y2="540" />
    <line x1="240" y1="0" x2="240" y2="675" />
    <line x1="480" y1="0" x2="480" y2="675" />
    <line x1="720" y1="0" x2="720" y2="675" />
    <line x1="960" y1="0" x2="960" y2="675" />
  </g>

  <!-- Ambient Glows -->
  <rect width="1200" height="675" fill="url(#goldGlow)" />
  <rect width="1200" height="675" fill="url(#googleGlow)" />
  <rect width="1200" height="675" fill="url(#snapGlow)" />

  <!-- Top Pill Badge -->
  <g transform="translate(600, 48)">
    <rect x="-180" y="0" width="360" height="38" rx="19" fill="#18231E" stroke="#AD8665" stroke-opacity="0.45" stroke-width="1.2" />
    <text x="0" y="24" text-anchor="middle" fill="#E8D8C7" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="14" font-weight="bold" letter-spacing="0.5">مقارنة الإعلانات الممولة في السوق السعودي 2026</text>
  </g>

  <!-- Card 1: Google Ads (Left Side) -->
  <g transform="translate(130, 115)" filter="url(#cardShadow)">
    <rect width="420" height="450" rx="24" fill="url(#cardGrad)" stroke="url(#goldBorder)" stroke-width="1.5" />
    
    <!-- Header Icon Container -->
    <g transform="translate(210, 95)">
      <circle cx="0" cy="0" r="50" fill="#FFFFFF" />
      <!-- Google 4-Color G Logo -->
      <g transform="translate(-30, -30) scale(2.5)">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
      </g>
    </g>

    <!-- Platform Title -->
    <text x="210" y="190" text-anchor="middle" fill="#FFFFFF" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="28" font-weight="bold">Google Ads</text>
    <text x="210" y="218" text-anchor="middle" fill="#AD8665" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="15" font-weight="600">إعلانات البحث وشبكة جوجل</text>

    <!-- Feature Tags -->
    <g transform="translate(45, 250)">
      <rect x="0" y="0" width="330" height="44" rx="10" fill="#141E19" stroke="#4285F4" stroke-opacity="0.35" />
      <text x="165" y="28" text-anchor="middle" fill="#E2E8F0" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="14" font-weight="600">🎯 استهداف النية الشرائية الصريحة (High Intent)</text>

      <rect x="0" y="58" width="330" height="44" rx="10" fill="#141E19" stroke="#4285F4" stroke-opacity="0.35" />
      <text x="165" y="86" text-anchor="middle" fill="#E2E8F0" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="14" font-weight="600">💼 الخدمات الاحترافية والمنتجات عالية القيمة</text>

      <rect x="0" y="116" width="330" height="44" rx="10" fill="#141E19" stroke="#4285F4" stroke-opacity="0.35" />
      <text x="165" y="144" text-anchor="middle" fill="#E2E8F0" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="14" font-weight="600">💰 محاسبة بنموذج الدفع للنقرة (PPC)</text>
    </g>
  </g>

  <!-- Card 2: Snapchat Ads (Right Side) -->
  <g transform="translate(650, 115)" filter="url(#cardShadow)">
    <rect width="420" height="450" rx="24" fill="url(#cardGrad)" stroke="url(#goldBorder)" stroke-width="1.5" />
    
    <!-- Header Icon Container -->
    <g transform="translate(210, 95)">
      <!-- Snapchat Yellow Rounded Tile -->
      <rect x="-50" y="-50" width="100" height="100" rx="24" fill="#FFFC00" />
      <!-- Snapchat Ghost Icon -->
      <g transform="translate(-32, -32) scale(2.66)">
        <path fill="#FFFFFF" stroke="#000000" stroke-width="1.2" stroke-linejoin="round" d="M12 2.5c-4.2 0-6.2 3.1-6.2 5.8 0 1.5.7 3.3 1.6 4.1.3.3.4.6.3 1-.1.4-.4.8-.8 1.1-.5.4-1.2.9-1.4 1.5-.2.6.1 1.1.7 1.4.9.4 2 .1 2.9-.2.4-.1.8 0 1.1.3.6.6 1.4 1 2.2 1 .5 0 1-.2 1.4-.5.4.3.9.5 1.4.5.8 0 1.6-.4 2.2-1 .3-.3.7-.4 1.1-.3.9.3 2 .6 2.9.2.6-.3.9-.8.7-1.4-.2-.6-.9-1.1-1.4-1.5-.4-.3-.7-.7-.8-1.1-.1-.4 0-.7.3-1 .9-.8 1.6-2.6 1.6-4.1 0-2.7-2-5.8-6.2-5.8z"/>
      </g>
    </g>

    <!-- Platform Title -->
    <text x="210" y="190" text-anchor="middle" fill="#FFFFFF" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="28" font-weight="bold">Snapchat Ads</text>
    <text x="210" y="218" text-anchor="middle" fill="#AD8665" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="15" font-weight="600">إعلانات سناب شات التفاعلية</text>

    <!-- Feature Tags -->
    <g transform="translate(45, 250)">
      <rect x="0" y="0" width="330" height="44" rx="10" fill="#141E19" stroke="#FFFC00" stroke-opacity="0.3" />
      <text x="165" y="28" text-anchor="middle" fill="#FEF08A" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="14" font-weight="600">⚡ انتشار جماهيري واسع وتفاعل فوري بالسعودية</text>

      <rect x="0" y="58" width="330" height="44" rx="10" fill="#141E19" stroke="#FFFC00" stroke-opacity="0.3" />
      <text x="165" y="86" text-anchor="middle" fill="#FEF08A" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="14" font-weight="600">🛍️ مثالي للمتاجر الإلكترونية والسلع الاستهلاكية</text>

      <rect x="0" y="116" width="330" height="44" rx="10" fill="#141E19" stroke="#FFFC00" stroke-opacity="0.3" />
      <text x="165" y="144" text-anchor="middle" fill="#FEF08A" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="14" font-weight="600">📱 تكلفة وصول منخفضة وسرعة إطلاق (CPM)</text>
    </g>
  </g>

  <!-- Center VS Element -->
  <g transform="translate(600, 340)" filter="url(#vsShadow)">
    <circle cx="0" cy="0" r="44" fill="url(#goldBadgeGrad)" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="2.5" />
    <text x="0" y="12" text-anchor="middle" fill="#1A2520" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="28" font-weight="900" font-style="italic" letter-spacing="1">VS</text>
  </g>

  <!-- Bottom Brand Footer -->
  <g transform="translate(600, 625)">
    <text x="0" y="0" text-anchor="middle" fill="#777B75" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-size="13" font-weight="600" letter-spacing="1.5">QIMMA DIGITAL AGENCY • دليل مقارنة القنوات الإعلانية للشركات والمتاجر السعودية</text>
  </g>
</svg>
`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 95 })
  .toFile('public/images/articles/google-ads-vs-snapchat-saudi.jpg')
  .then(() => {
    console.log('Successfully generated public/images/articles/google-ads-vs-snapchat-saudi.jpg');
  })
  .catch(err => {
    console.error('Error:', err);
  });
