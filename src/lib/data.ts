export interface Competitor {
  site: string;
  monthlyTraffic: string;
  dailyMembers: string;
  domainRating: number;
  tactics: string;
}

export interface PackageFeature {
  title: string;
  description: string;
  details: string[];
  value?: string;
}

export interface TimelinePhase {
  phase: string;
  duration: string;
  budget: string;
  description: string;
}

export interface ROIMetric {
  period: string;
  traffic: string;
  members: string;
  dailyMembers?: string;
}

export const competitors: Competitor[] = [
  {
    site: "Trendbet",
    monthlyTraffic: "450K",
    dailyMembers: "1.5K-2K",
    domainRating: 70,
    tactics: "Shellleme: 150+ domain/gün. Bo takibi: 24 saat. Link havuzundan çıkış: 8K-12K/gün. Hızlı çıkışlar: 72 saatte 15K+ link.",
  },
  {
    site: "Betixir",
    monthlyTraffic: "320K",
    dailyMembers: "1K-1.5K",
    domainRating: 62,
    tactics: "Shellleme: 120+ domain/gün. Bo takibi: 48 saat. Link havuzundan çıkış: 6K-9K/gün. Hızlı çıkışlar: 96 saatte 12K+ link.",
  },
  {
    site: "Taksimbet",
    monthlyTraffic: "280K",
    dailyMembers: "800-1.2K",
    domainRating: 57,
    tactics: "Shellleme: 100+ domain/gün. Bo takibi: 36 saat. Link havuzundan çıkış: 5K-7K/gün. Hızlı çıkışlar: 72 saatte 10K+ link.",
  },
  {
    site: "Istanbulbahis",
    monthlyTraffic: "220K",
    dailyMembers: "600-900",
    domainRating: 52,
    tactics: "Shellleme: 80+ domain/gün. Bo takibi: 48 saat. Link havuzundan çıkış: 4K-6K/gün. Hızlı çıkışlar: 96 saatte 8K+ link.",
  },
  {
    site: "Parobet",
    monthlyTraffic: "330K",
    dailyMembers: "1K-1.3K",
    domainRating: 60,
    tactics: "Shellleme: 110+ domain/gün. Bo takibi: 24 saat. Link havuzundan çıkış: 6K-8K/gün. Hızlı çıkışlar: 72 saatte 11K+ link.",
  },
  {
    site: "Capitolbet",
    monthlyTraffic: "180K",
    dailyMembers: "400-700",
    domainRating: 50,
    tactics: "Shellleme: 70+ domain/gün. Bo takibi: 48 saat. Link havuzundan çıkış: 3K-5K/gün. Hızlı çıkışlar: 96 saatte 7K+ link.",
  },
];

export const packageFeatures: PackageFeature[] = [
  {
    title: "Link Havuzu (PBN ve Expired Domain Pool'u)",
    description: "500+ yüksek DR (50+) expired domain ve 200 shell domain havuzu",
    details: [
      "Her ay 100 yeni domain eklenir",
      "Haftalık 10K+ dofollow backlink",
      "Agresif anchor textlerle ('Wingamb deneme bonusu 2026' gibi)",
      "Maliyet dahil: Domain auction'ları ve hosting (aylık 120k TL değerinde)",
    ],
    value: "120k TL/ay",
  },
  {
    title: "Hızlı Toplu SEO Basımı",
    description: "3 ay boyunca günlük 2K+ link building",
    details: [
      "Haftalık 15K link, AI araçlarıyla doğal görünüm",
      "Forum, guest post, parasite SEO",
      "İndeksleme 24 saatte tamamlanır – Google Indexing API entegrasyonu",
      "Sizin sitelerinizden sinerji: 1.500+ cross-backlink",
    ],
  },
  {
    title: "Shell Domain Yönetimi ve Patlayan Domainler",
    description: "Shell'ler aylık rotasyonlu (BTK bloklarına karşı)",
    details: [
      "Patlayan domainler için 300+ tarama/ay",
      "Hızlı geri dönüş için 72 saatte 500 link",
      "Parasite SEO ile rakipleri bypass",
      "Yüksek otorite sitelerde (forumlar, wiki'ler) Wingamb linkleri yerleştirme",
    ],
  },
  {
    title: "Rakip Etki ve Manipülasyonu",
    description: "Agresif negatif SEO ve rakip düşürme",
    details: [
      "Duplicate content flood, spam raporları ve link disavow",
      "Her ay 5-10 rakip domain'e odaklan – %25-40 düşüş hedefi",
      "Sizin sitelerinizden veriyle test edilmiş",
      "Üye akışını Wingamb'a yönlendirme",
    ],
  },
  {
    title: "On-Page Optimizasyon",
    description: "AI ile E-A-T uyumlu içerik",
    details: [
      "Aylık 50 sayfa",
      "E-A-T uyumlu içerik üretimi",
      "AI destekli optimizasyon",
    ],
  },
  {
    title: "İzleme Araçları ve Destek",
    description: "7/24 destek ve profesyonel araçlar",
    details: [
      "Ahrefs premium erişim",
      "GA4 entegrasyonu",
      "Haftalık raporlar ve ayarlamalar",
      "Affiliate flood ve sosyal trafik boost (Instagram/X entegrasyonu)",
    ],
  },
];

export const timelinePhases: TimelinePhase[] = [
  {
    phase: "Hazırlık Aşaması",
    duration: "1 Ay",
    budget: "106.67k TL",
    description: "Shell ve patlayan domain havuzunu kurun: 150+ domain edinin. Sizin sitelerden entegrasyon.",
  },
  {
    phase: "Toplu SEO Basımı",
    duration: "1 Ay",
    budget: "106.67k TL",
    description: "Hızlı link building: 25K+/ay. Parasite ve doorway pages.",
  },
  {
    phase: "Rakip Etki ve Düşürme",
    duration: "1 Ay",
    budget: "106.67k TL",
    description: "Agresif müdahale: %20-35 düşüş. Geri dönüş hızı 48 saat.",
  },
  {
    phase: "İzleme",
    duration: "Sürekli",
    budget: "Dahil",
    description: "KPI'ler: Trafik +%600, Üye +%400. Aylık raporlar.",
  },
];

export const roiMetrics: ROIMetric[] = [
  {
    period: "Kısa Vadeli (1 Ay)",
    traffic: "80K → 300K",
    members: "700 → 2.5K",
    dailyMembers: "Günlük: 80-85 üye",
  },
  {
    period: "Uzun Vadeli (3 Ay)",
    traffic: "3M+",
    members: "30K+",
    dailyMembers: "Günlük: 330+ üye",
  },
];

export const packageInfo = {
  name: "SugarStap Ultimate Boost",
  price: "320k TL",
  discountedPrice: "320k TL",
  monthlyPrice: "106.67k TL",
  description: "Link havuzu, hızlı SEO basımı, shell domain yönetimi ve rakip manipülasyonu gibi unsurları kapsayan premium paket.",
  roi: "2.5-3.5x ROI - Başlangıç sonrası 3-5 hafta arası net üye takibi garantisi. Anahtar kelimede 1. sıra garantisi.",
};
