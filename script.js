/* =====================================================
   MITRACARE SOLUTION — script.js
   White + Yellow Theme
   Features: splash, sound, brand logos, phone app icons,
   social icons, typewriter, booking, WhatsApp, carousel,
   FAQ, scroll reveal, live status, navbar
   ===================================================== */

'use strict';

/* =====================================================
   CONFIG — fill in real values here
   ===================================================== */
const CONFIG = {
  WHATSAPP_NUMBER: '6282156019301', // e.g. '6281234567890'
  MAPS_URL:        'https://maps.app.goo.gl/PXmKAWxTRtGq1PA77',
  INSTAGRAM_URL:   'https://instagram.com/mitracaresolution',
  TIKTOK_URL:      'https://tiktok.com/@mitracaresolution',
  BUSINESS_HOURS: {
    0: [10, 22], // Minggu  — 10.00 s/d 22.00
    1: [9, 22],  // Senin   — 09.00 s/d 22.00
    2: [9, 22],  // Selasa  — 09.00 s/d 22.00
    3: [9, 22],  // Rabu    — 09.00 s/d 22.00
    4: [9, 22],  // Kamis   — 09.00 s/d 22.00
    5: [9, 22],  // Jumat   — 09.00 s/d 22.00
    6: [9, 22],  // Sabtu   — 09.00 s/d 22.00
  },
};

/* =====================================================
   SVG LOGO DATA — inline SVGs for brand HP
   All paths sourced from Simple Icons (simpleicons.org)
   ===================================================== */
const BRAND_LOGOS = [
  {
    brand: 'iPhone',
    bg: '#000000',
    color: '#fff',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
  },
  {
    brand: 'Samsung',
    bg: '#1428A0',
    color: '#fff',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.994 0C5.377 0 0 5.377 0 12s5.377 12 12 12c6.624 0 12-5.377 12-12S18.617 0 11.994 0zm5.276 7.763h-1.655c-.34 0-.537.17-.537.445v.685h2.191v1.258H15.08v4.087h-1.43V10.15H12.6v4.087h-1.43V10.15h-.685v-1.257h.686v-.784c0-1.048.686-1.7 1.848-1.7h.49v1.258h-.391c-.342 0-.489.147-.489.44v.786h.88V7.763h1.283v1.114h1.478V7.763zm-9.26 1.847c-.832 0-1.38.496-1.38 1.234 0 .636.392.978 1.282 1.224.637.196.784.342.784.636 0 .293-.245.49-.636.49-.44 0-.734-.245-.734-.637H5.9c0 1.03.734 1.7 1.896 1.7.978 0 1.7-.587 1.7-1.43 0-.685-.44-1.08-1.38-1.33-.636-.196-.783-.342-.783-.587 0-.245.196-.44.538-.44.343 0 .588.195.588.538H9.8c0-.978-.686-1.6-1.79-1.6v.002z"/></svg>`,
  },
  {
    brand: 'Xiaomi',
    bg: '#FF6900',
    color: '#fff',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.25 5.25h-4.5a4.5 4.5 0 0 0-4.5 4.5v4.5a4.5 4.5 0 0 0 4.5 4.5h4.5a4.5 4.5 0 0 0 4.5-4.5v-4.5a4.5 4.5 0 0 0-4.5-4.5zm-1.5 9.75H9v-6h1.5v4.5H12v-4.5h1.5v4.5h-.75zm3 0H14.25v-4.5h1.5V15zm0-6H14.25V7.5h1.5V9z"/></svg>`,
  },
  {
    brand: 'Redmi',
    bg: '#FF6900',
    color: '#fff',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.25 5.25h-4.5a4.5 4.5 0 0 0-4.5 4.5v4.5a4.5 4.5 0 0 0 4.5 4.5h4.5a4.5 4.5 0 0 0 4.5-4.5v-4.5a4.5 4.5 0 0 0-4.5-4.5zm-3.75 9.75H9v-6h1.5v6zm2.25 0h-1.5V9h1.5v6zm2.25 0h-1.5V9h1.5v6z"/></svg>`,
  },
  {
    brand: 'POCO',
    bg: '#F6C600',
    color: '#000',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>`,
  },
  {
    brand: 'OPPO',
    bg: '#1D8348',
    color: '#fff',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a6 6 0 1 1 0 12A6 6 0 0 1 12 6zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>`,
  },
  {
    brand: 'vivo',
    bg: '#415FFF',
    color: '#fff',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14L7 8h2l2 5.5L13 8h2l-4 8h-2z"/></svg>`,
  },
  {
    brand: 'realme',
    bg: '#FFD700',
    color: '#000',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2V8h2v8zm-2-10V4h2v2h-2z"/></svg>`,
  },
  {
    brand: 'Infinix',
    bg: '#E4000F',
    color: '#fff',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.07 4.93A10 10 0 1 0 4.93 19.07 10 10 0 0 0 19.07 4.93zm-3.18 9.65-1.41 1.42-2.49-2.49-2.49 2.49-1.41-1.42 2.48-2.48-2.48-2.48 1.41-1.42 2.49 2.49 2.49-2.49 1.41 1.42-2.48 2.48 2.48 2.48z"/></svg>`,
  },
  {
    brand: 'ASUS',
    bg: '#00539B',
    color: '#fff',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 3h15L21 7.5v9L19.5 21h-15L3 16.5v-9L4.5 3zm1.06 2L4 6.56v10.88L5.56 19h12.88L20 17.44V6.56L18.44 5H5.56zM9 8h1.5l3 8H12L11.25 14H8.7L8 16H6.5L9 8zm-.75 4.5h2l-1-3-1 3zM17 8h1.5v8H17v-8z"/></svg>`,
  },
  {
    brand: 'TECNO',
    bg: '#0082C8',
    color: '#fff',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,
  },
  {
    brand: 'Huawei',
    bg: '#CF0A2C',
    color: '#fff',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.002 2c-.637 0-1.255.49-1.748 1.27-.37.592-.63 1.374-.63 2.23 0 .203.013.4.04.59C8.07 6.49 6.74 7.48 6.74 8.65c0 .48.19.93.53 1.32-.97.55-1.57 1.36-1.57 2.26 0 .9.6 1.71 1.57 2.26-.34.39-.53.84-.53 1.32 0 1.17 1.33 2.16 2.924 2.56-.027.19-.04.387-.04.59 0 .856.26 1.638.63 2.23.493.78 1.111 1.27 1.748 1.27.637 0 1.255-.49 1.748-1.27.37-.592.63-1.374.63-2.23 0-.203-.013-.4-.04-.59 1.594-.4 2.924-1.39 2.924-2.56 0-.48-.19-.93-.53-1.32.97-.55 1.57-1.36 1.57-2.26 0-.9-.6-1.71-1.57-2.26.34-.39.53-.84.53-1.32 0-1.17-1.33-2.16-2.924-2.56.027-.19.04-.387.04-.59 0-.856-.26-1.638-.63-2.23C13.257 2.49 12.639 2 12.002 2z"/></svg>`,
  },
  {
    brand: 'Lainnya',
    bg: '#6B7280',
    color: '#fff',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4.2-5.78v1.75h-1.6v-1.75c-1.03-.31-1.8-1.26-1.8-2.42 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 1.16-.77 2.11-1.6 2.42z"/></svg>`,
  },
];

/* =====================================================
   PHONE APP ICONS — shown on the phone mockup
   ===================================================== */
const PHONE_APPS = [
  {
    label: 'WhatsApp',
    bgClass: 'app-bg-wa',
    svg: `<svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  },
  {
    label: 'Instagram',
    bgClass: 'app-bg-ig',
    svg: `<svg viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  },
  {
    label: 'TikTok',
    bgClass: 'app-bg-tt',
    svg: `<svg viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/></svg>`,
  },
  {
    label: 'YouTube',
    bgClass: 'app-bg-yt',
    svg: `<svg viewBox="0 0 24 24" fill="white"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`,
  },
  {
    label: 'Google Maps',
    bgClass: 'app-bg-gmaps',
    svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#EA4335"/></svg>`,
  },
  {
    label: 'Telepon',
    bgClass: 'app-bg-call',
    svg: `<svg viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  },
];

/* =====================================================
   SOCIAL LINKS DATA
   ===================================================== */
const SOCIAL_LINKS = [
  {
    id: 'footerWaBtn',
    label: 'WhatsApp',
    action: 'wa',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  },
  {
    label: 'Instagram',
    action: 'instagram',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  },
  {
    label: 'TikTok',
    action: 'tiktok',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/></svg>`,
  },
];

/* =====================================================
   GITHUB VIDEO CONFIG
   ===================================================== */
// ✏️  VIDEO HP (portrait) — untuk layar HP di section Hero
// Tambah/ganti link catbox.moe di sini
const VIDEO_LIST = [
  { url: 'https://files.catbox.moe/roizxn.mp4', title: 'Mitracare Solution' },
  { url: 'https://files.catbox.moe/skdked.mp4', title: 'service' },
  { url: 'https://files.catbox.moe/g5ykh8.mp4', title: 'service' },
];

// ✏️  VIDEO LAPTOP (landscape) — untuk layar laptop di section Tentang
// Upload video landscape lalu tempel link-nya di sini
const VIDEO_LIST_LAPTOP = [
   { url: 'https://files.catbox.moe/azkkds.mp4', title: 'Servis Profesional' },
   { url: 'https://files.catbox.moe/kc98jr.mp4', title: 'Proses Perbaikan' },
];


document.addEventListener('DOMContentLoaded', () => {
  injectBrandLogos();
  initPhoneVideoCarousel();   // fetch videos from GitHub (hero)
  initAboutVideoCarousel();   // fetch videos from GitHub (about section)
  injectSocialLinks();
  initSplash();
  initNavbar();
  initTypewriter();
  initLiveStatus();
  initScrollReveal();
  initBooking();
  initFAQ();
  initSmoothScroll();
  initWhatsAppButtons();
  initActiveNavLinks();
  startVideoClock();
});

/* =====================================================
   1. INJECT BRAND LOGOS — into #brandGrid
   ===================================================== */
function injectBrandLogos() {
  const grid = document.getElementById('brandGrid');
  if (!grid) return;

  BRAND_LOGOS.forEach(({ brand, bg, color, svg }) => {
    const btn = document.createElement('button');
    btn.className = 'brand-card';
    btn.dataset.brand = brand;
    btn.type = 'button';
    btn.setAttribute('aria-label', `Pilih ${brand}`);

    btn.innerHTML = `
      <div class="brand-logo-wrap" style="background:${bg};color:${color}">
        ${svg}
      </div>
      <span class="brand-name">${brand}</span>
    `;

    grid.appendChild(btn);
  });
}

/* =====================================================
   2. PHONE VIDEO CAROUSEL — pakai VIDEO_LIST langsung
   ===================================================== */
function initPhoneVideoCarousel() {
  const track   = document.getElementById('phoneVideoTrack');
  const overlay = document.getElementById('phoneVideoOverlay');
  const loading = document.getElementById('phoneVideoLoading');
  const errorEl = document.getElementById('phoneVideoError');
  const dotsEl  = document.getElementById('phoneVideoDots');
  const titleEl = document.getElementById('phoneVideoTitle');
  const prevBtn = document.getElementById('phoneVidPrev');
  const nextBtn = document.getElementById('phoneVidNext');

  if (!track) return;

  // Placeholder saat VIDEO_LIST masih kosong
  const PLACEHOLDERS = [
    { icon: '📱', title: 'Mitracare Solution', subtitle: 'Servis HP Terpercaya' },
    { icon: '🔧', title: 'Perbaikan Cepat',    subtitle: 'Teknisi Berpengalaman' },
    { icon: '✅', title: 'Garansi Resmi',       subtitle: 'Kualitas Terjamin' },
    { icon: '💛', title: 'Harga Terjangkau',    subtitle: 'Solusi Terbaik' },
  ];

  const videos = VIDEO_LIST.length > 0 ? VIDEO_LIST : null;

  if (loading) loading.style.display = 'none';
  if (errorEl) errorEl.style.display = 'none';

  if (!videos) {
    // --- Tampilkan placeholder animasi ---
    PLACEHOLDERS.forEach(({ icon, title, subtitle }) => {
      const item = document.createElement('div');
      item.className = 'phone-video-item phone-placeholder-item';
      item.innerHTML = `
        <div class="vid-placeholder-inner">
          <div class="vid-placeholder-icon">${icon}</div>
          <div class="vid-placeholder-title">${title}</div>
          <div class="vid-placeholder-sub">${subtitle}</div>
          <div class="vid-placeholder-dots-anim"><span></span><span></span><span></span></div>
        </div>`;
      track.appendChild(item);
    });
    PLACEHOLDERS.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'phone-video-dot' + (i === 0 ? ' active' : '');
      dotsEl.appendChild(d);
    });
    let cur = 0, timer = null;
    const goPh = idx => {
      cur = ((idx % PLACEHOLDERS.length) + PLACEHOLDERS.length) % PLACEHOLDERS.length;
      track.style.transform = `translateX(-${cur * 100}%)`;
      dotsEl.querySelectorAll('.phone-video-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
      if (titleEl) titleEl.textContent = PLACEHOLDERS[cur].title;
      clearInterval(timer);
      timer = setInterval(() => goPh(cur + 1), 3000);
    };
    if (prevBtn) prevBtn.addEventListener('click', () => goPh(cur - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goPh(cur + 1));
    if (overlay) overlay.style.display = 'flex';
    goPh(0);
    return;
  }

  // --- Tampilkan video dari VIDEO_LIST ---
  videos.forEach(({ url, title }) => {
    const item = document.createElement('div');
    item.className = 'phone-video-item';
    const vid = document.createElement('video');
    vid.src = url;
    vid.muted = true;
    vid.loop = true;
    vid.playsInline = true;
    vid.preload = 'metadata';
    vid.setAttribute('aria-label', title || '');
    item.appendChild(vid);
    track.appendChild(item);
  });

  videos.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'phone-video-dot' + (i === 0 ? ' active' : '');
    dotsEl.appendChild(d);
  });

  let current = 0, autoTimer = null, touchStartX = 0;

  function goTo(index) {
    const total = videos.length;
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    track.querySelectorAll('video').forEach((v, i) => {
      if (i === current) v.play().catch(() => {});
      else { v.pause(); v.currentTime = 0; }
    });
    dotsEl.querySelectorAll('.phone-video-dot').forEach((d, i) => d.classList.toggle('active', i === current));
    if (titleEl) titleEl.textContent = videos[current].title || 'Mitracare Solution';
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  const screenEl = track.closest('.phone-screen-video');
  if (screenEl) {
    screenEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    screenEl.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 30) goTo(diff > 0 ? current + 1 : current - 1);
    });
  }

  document.addEventListener('keydown', e => {
    if (!document.querySelector('.phone-screen-video:hover')) return;
    if (e.key === 'ArrowLeft')  goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  if (overlay) overlay.style.display = 'flex';
  goTo(0);
}

/* =====================================================
   VIDEO CLOCK — real-time clock on phone status bar
   ===================================================== */
function startVideoClock() {
  // Update all clock elements with id containing "Clock"
  function tick() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const time = `${h}:${m}`;
    ['phoneVideoClock', 'aboutVidClock'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = time;
    });
  }
  tick();
  setInterval(tick, 30000);
}

/* =====================================================
   ABOUT VIDEO CAROUSEL — pakai VIDEO_LIST langsung
   ===================================================== */
function initAboutVideoCarousel() {
  const track   = document.getElementById('aboutVidTrack');
  const overlay = document.getElementById('aboutVidOverlay');
  const loading = document.getElementById('aboutVidLoading');
  const errorEl = document.getElementById('aboutVidError');
  const dotsEl  = document.getElementById('aboutVidDots');
  const titleEl = document.getElementById('aboutVidTitle');
  const prevBtn = document.getElementById('aboutVidPrev');
  const nextBtn = document.getElementById('aboutVidNext');

  if (!track) return;

  // Placeholder saat VIDEO_LIST masih kosong
  const PLACEHOLDERS = [
    { icon: '🛠️', title: 'Servis Profesional', subtitle: 'Semua Merek HP' },
    { icon: '⚡',  title: 'Proses Cepat',        subtitle: 'Selesai Hari Ini' },
    { icon: '🔋', title: 'Spare Part Original', subtitle: 'Bergaransi Resmi' },
    { icon: '📞', title: 'Hubungi Kami',        subtitle: 'Siap Melayani Anda' },
  ];

  const videos = VIDEO_LIST_LAPTOP.length > 0 ? VIDEO_LIST_LAPTOP : null;

  if (loading) loading.style.display = 'none';
  if (errorEl) errorEl.style.display = 'none';

  if (!videos) {
    // --- Tampilkan placeholder animasi ---
    PLACEHOLDERS.forEach(({ icon, title, subtitle }) => {
      const item = document.createElement('div');
      item.className = 'about-vid-item phone-placeholder-item';
      item.innerHTML = `
        <div class="vid-placeholder-inner">
          <div class="vid-placeholder-icon">${icon}</div>
          <div class="vid-placeholder-title">${title}</div>
          <div class="vid-placeholder-sub">${subtitle}</div>
          <div class="vid-placeholder-dots-anim"><span></span><span></span><span></span></div>
        </div>`;
      track.appendChild(item);
    });
    PLACEHOLDERS.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'about-vid-dot' + (i === 0 ? ' active' : '');
      dotsEl.appendChild(d);
    });
    let cur = 0, timer = null;
    const goPh = idx => {
      cur = ((idx % PLACEHOLDERS.length) + PLACEHOLDERS.length) % PLACEHOLDERS.length;
      track.style.transform = `translateX(-${cur * 100}%)`;
      dotsEl.querySelectorAll('.about-vid-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
      if (titleEl) titleEl.textContent = PLACEHOLDERS[cur].title;
      clearInterval(timer);
      timer = setInterval(() => goPh(cur + 1), 3000);
    };
    if (prevBtn) prevBtn.addEventListener('click', () => goPh(cur - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goPh(cur + 1));
    if (overlay) overlay.style.display = 'flex';
    goPh(0);
    return;
  }

  // --- Tampilkan video dari VIDEO_LIST ---
  videos.forEach(({ url, title }) => {
    const item = document.createElement('div');
    item.className = 'about-vid-item';
    const vid = document.createElement('video');
    vid.src = url;
    vid.muted = true;
    vid.loop = true;
    vid.playsInline = true;
    vid.preload = 'metadata';
    item.appendChild(vid);
    track.appendChild(item);
  });

  videos.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'about-vid-dot' + (i === 0 ? ' active' : '');
    dotsEl.appendChild(d);
  });

  let current = 0, autoTimer = null, touchStartX = 0;

  function goTo(index) {
    const total = videos.length;
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    track.querySelectorAll('video').forEach((v, i) => {
      if (i === current) v.play().catch(() => {});
      else { v.pause(); v.currentTime = 0; }
    });
    dotsEl.querySelectorAll('.about-vid-dot').forEach((d, i) => d.classList.toggle('active', i === current));
    if (titleEl) titleEl.textContent = videos[current].title || 'Mitracare Solution';
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  const screenEl = document.getElementById('aboutPhoneScreen');
  if (screenEl) {
    screenEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    screenEl.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 30) goTo(diff > 0 ? current + 1 : current - 1);
    });
  }

  if (overlay) overlay.style.display = 'flex';
  goTo(0);
}

/* =====================================================
   3. INJECT SOCIAL LINKS — footer & contact
   ===================================================== */
function injectSocialLinks() {
  // Footer socials
  const footerSocials = document.getElementById('footerSocials');
  if (footerSocials) {
    SOCIAL_LINKS.forEach(({ id, label, action, svg }) => {
      const a = document.createElement('a');
      a.href = '#';
      a.className = 'social-link';
      a.setAttribute('aria-label', label);
      if (id) a.id = id;
      a.dataset.action = action;
      a.innerHTML = svg;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        handleSocialAction(action);
      });
      footerSocials.appendChild(a);
    });
  }

  // Contact section social links
  const contactLinks = document.getElementById('contactSocialLinks');
  if (contactLinks) {
    SOCIAL_LINKS.forEach(({ label, action, svg }) => {
      const a = document.createElement('a');
      a.href = '#';
      a.className = 'contact-social-link';
      a.setAttribute('aria-label', label);
      a.innerHTML = `${svg} <span>${label}</span>`;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        handleSocialAction(action);
      });
      contactLinks.appendChild(a);
    });
  }
}

function handleSocialAction(action) {
  switch (action) {
    case 'wa':
      openWhatsApp(buildDirectMessage());
      break;
    case 'instagram':
      window.open(CONFIG.INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
      break;
    case 'tiktok':
      window.open(CONFIG.TIKTOK_URL, '_blank', 'noopener,noreferrer');
      break;
  }
}

/* =====================================================
   4. SPLASH SCREEN + SOUND
   ===================================================== */
function initSplash() {
  const splash     = document.getElementById('splashScreen');
  const logo       = document.getElementById('splashLogo');
  const tagline    = document.getElementById('splashTagline');
  const bar        = document.getElementById('splashBar');
  const barFill    = document.getElementById('splashBarFill');

  if (!splash) return;

  // Respect reduced motion — skip splash
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    splash.classList.add('hide');
    return;
  }

  // Play chime sound (Web Audio API — no external file needed)
  playChime();

  // Animate logo in
  setTimeout(() => logo    && logo.classList.add('show'),    100);
  setTimeout(() => tagline && tagline.classList.add('show'), 350);
  setTimeout(() => {
    if (bar)     bar.classList.add('show');
    if (barFill) barFill.classList.add('go');
  }, 500);

  // Hide splash after 2.2s
  setTimeout(() => {
    if (splash) splash.classList.add('hide');
    // Unlock scroll (was locked during splash? No — keep scroll available)
  }, 2200);
}

/* =====================================================
   5. WEB AUDIO CHIME — no external file
   ===================================================== */
function playChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();

    // Two-tone ascending chime: C5 then E5
    const notes = [
      { freq: 523.25, start: 0,    dur: 0.35 },  // C5
      { freq: 659.25, start: 0.18, dur: 0.45 },  // E5
      { freq: 783.99, start: 0.36, dur: 0.6  },  // G5
    ];

    notes.forEach(({ freq, start, dur }) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + start);

      // Gentle attack + decay envelope
      gain.gain.setValueAtTime(0, ctx.currentTime + start);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + start + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + dur);

      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + dur + 0.05);
    });

    // Auto-close context after sound is done
    setTimeout(() => ctx.close(), 1500);
  } catch (e) {
    // Silently ignore if Web Audio not supported
  }
}

/* =====================================================
   6. NAVBAR
   ===================================================== */
function initNavbar() {
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta');

  if (!navbar || !hamburger || !mobileMenu) return;

  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', (e) => { if (!navbar.contains(e.target)) closeMenu(); });

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Navbar CTA
  const navCta = document.getElementById('navCta');
  if (navCta) {
    navCta.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

/* =====================================================
   7. ACTIVE NAV LINKS
   ===================================================== */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(sec => obs.observe(sec));
}

/* =====================================================
   8. TYPEWRITER
   ===================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriterText');
  if (!el) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = 'Servis HP Murah Meriah';
    return;
  }

  const texts = [
    'Servis HP Murah Meriah',
    'Ganti LCD',
    'Ganti Baterai',
    'Perbaikan Charging',
    'Perbaikan IC',
    'Software & Flashing',
    'Servis HP Terpercaya',
  ];

  let textIndex = 0, charIndex = 0, isDeleting = false, isPaused = false;
  const SPEED_TYPE = 70, SPEED_DELETE = 40, PAUSE_END = 1800, PAUSE_START = 300;

  function tick() {
    if (isPaused) return;
    const current = texts[textIndex];

    if (!isDeleting) {
      el.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        isPaused = true;
        setTimeout(() => { isPaused = false; isDeleting = true; schedule(); }, PAUSE_END);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        isPaused = true;
        setTimeout(() => { isPaused = false; schedule(); }, PAUSE_START);
        return;
      }
    }
    schedule();
  }

  function schedule() { setTimeout(tick, isDeleting ? SPEED_DELETE : SPEED_TYPE); }
  setTimeout(tick, 1000);
}

/* =====================================================
   9. LIVE STATUS
   ===================================================== */
function initLiveStatus() {
  const statusEl = document.getElementById('liveStatus');
  const dotEl    = document.getElementById('liveDot');
  const textEl   = document.getElementById('liveText');
  if (!statusEl || !dotEl || !textEl) return;

  function update() {
    const now   = new Date();
    const day   = now.getDay();
    const hour  = now.getHours() + now.getMinutes() / 60;
    const hours = CONFIG.BUSINESS_HOURS[day];
    const isOpen = hours ? (hour >= hours[0] && hour < hours[1]) : false;

    dotEl.className = `live-dot ${isOpen ? 'open' : 'closed'}`;
    statusEl.className = `live-status ${isOpen ? 'open-status' : 'closed-status'}`;
    textEl.textContent = isOpen
      ? 'OPEN — Mitracare Solution siap melayani'
      : `CLOSED — ${nextOpenText(day, hour)}`;
  }

  function nextOpenText(day, hour) {
    const days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    for (let i = 1; i <= 7; i++) {
      const d = (day + i) % 7;
      const h = CONFIG.BUSINESS_HOURS[d];
      if (h) return i === 1
        ? `Buka besok pukul ${String(h[0]).padStart(2,'0')}.00`
        : `Buka ${days[d]} pukul ${String(h[0]).padStart(2,'0')}.00`;
    }
    return 'Silakan hubungi kami pada jam operasional.';
  }

  update();
  setInterval(update, 60000);
}

/* =====================================================
   10. SCROLL REVEAL
   ===================================================== */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('revealed'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0, 10);
        setTimeout(() => entry.target.classList.add('revealed'), delay);
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => obs.observe(el));
}

/* =====================================================
   11. BOOKING FORM
   ===================================================== */
function initBooking() {
  const state = { brand: null, damage: null, name: '', note: '' };

  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const step4 = document.getElementById('step4');
  const inputName = document.getElementById('inputName');
  const inputNote = document.getElementById('inputNote');
  const waBtn     = document.getElementById('waConsultBtn');
  const sumBrand  = document.getElementById('summaryBrand');
  const sumDamage = document.getElementById('summaryDamage');
  const sumName   = document.getElementById('summaryName');
  const progressFill = document.getElementById('progressFill');
  const ps = [null, 'ps1','ps2','ps3','ps4'].map(id => id ? document.getElementById(id) : null);

  if (!step1) return;

  // Brand cards (populated by injectBrandLogos)
  function bindBrandCards() {
    document.querySelectorAll('.brand-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.brand-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        state.brand = card.dataset.brand;
        showStep(step2);
        setProgress(2);
        setTimeout(() => step2.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
      });
    });
  }

  // Damage cards
  document.querySelectorAll('.damage-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.damage-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.damage = card.dataset.damage;
      showStep(step3);
      setProgress(3);
      setTimeout(() => step3.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });

  // Name input
  if (inputName) {
    inputName.addEventListener('input', () => {
      state.name = inputName.value.trim();
      checkStep4();
    });
  }
  if (inputNote) {
    inputNote.addEventListener('input', () => { state.note = inputNote.value.trim(); });
  }

  // WA button
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      if (!state.brand || !state.damage || !state.name) { shakeEl(waBtn); return; }
      openWhatsApp(buildBookingMessage(state));
    });
  }

  function checkStep4() {
    if (state.brand && state.damage && state.name) {
      if (sumBrand)  sumBrand.textContent  = state.brand;
      if (sumDamage) sumDamage.textContent = state.damage;
      if (sumName)   sumName.textContent   = state.name;
      showStep(step4);
      setProgress(4);
      setTimeout(() => step4.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
    }
  }

  function showStep(el) {
    el.classList.remove('booking-step-hidden');
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = '';
  }

  function setProgress(active) {
    const fills = [0, 10, 40, 70, 100];
    if (progressFill) progressFill.style.width = fills[active] + '%';
    ps.forEach((el, i) => {
      if (!el || i === 0) return;
      el.classList.remove('active', 'done');
      if (i < active) el.classList.add('done');
      else if (i === active) el.classList.add('active');
    });
  }

  setProgress(1);

  // Brand cards bind after they're injected
  // injectBrandLogos runs before initBooking, so cards are already in DOM
  bindBrandCards();
}

/* =====================================================
   12. WHATSAPP
   ===================================================== */
function buildBookingMessage(state) {
  const lines = [
    'Halo Mitracare Solution, saya ingin konsultasi servis HP.',
    '',
    `Merek HP: ${state.brand}`,
    `Kerusakan: ${state.damage}`,
    `Nama: ${state.name}`,
  ];
  if (state.note) lines.push('', `Catatan: ${state.note}`);
  lines.push('', 'Mohon informasi mengenai servis HP saya.');
  return lines.join('\n');
}

function buildDirectMessage() {
  return 'Halo Mitracare Solution, saya ingin menanyakan informasi servis HP. Bisa dibantu?';
}

function openWhatsApp(message) {
  const number = CONFIG.WHATSAPP_NUMBER;
  if (!number || number === 'WHATSAPP_NUMBER') {
    alert('Nomor WhatsApp belum dikonfigurasi.\nUpdate CONFIG.WHATSAPP_NUMBER di script.js.');
    return;
  }
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

function initWhatsAppButtons() {
  const map = {
    heroWaBtn:    () => openWhatsApp(buildDirectMessage()),
    finalWaBtn:   () => openWhatsApp(buildDirectMessage()),
    footerWaCta:  () => openWhatsApp(buildDirectMessage()),
    fabWa:        () => openWhatsApp(buildDirectMessage()),
    locationBtn:  () => window.open(CONFIG.MAPS_URL, '_blank', 'noopener,noreferrer'),
  };

  Object.entries(map).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', (e) => { e.preventDefault(); fn(); });
  });

  // Show formatted WA number in contact
  const contactWaEl = document.getElementById('contactWaNumber');
  if (contactWaEl && CONFIG.WHATSAPP_NUMBER !== 'WHATSAPP_NUMBER') {
    const n = CONFIG.WHATSAPP_NUMBER;
    contactWaEl.textContent = n.startsWith('62') ? `+${n}` : n;
  }
}

/* =====================================================
   14. FAQ ACCORDION
   ===================================================== */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* =====================================================
   15. SMOOTH SCROLL
   ===================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* =====================================================
   16. UTILITY — shake animation
   ===================================================== */
function shakeEl(el) {
  el.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(-8px)' },
    { transform: 'translateX(8px)' },
    { transform: 'translateX(-5px)' },
    { transform: 'translateX(5px)' },
    { transform: 'translateX(0)' },
  ], { duration: 380, easing: 'ease-in-out' });

  const input = document.getElementById('inputName');
  if (input && !input.value.trim()) {
    input.style.borderColor = '#ef4444';
    input.focus();
    setTimeout(() => { input.style.borderColor = ''; }, 2000);
  }
}

/* =====================================================
   17. LIQUID RIPPLE — efek sentuhan/klik glass
   ===================================================== */
(function initLiquidRipple() {
  // Inject CSS ripple sekali saja
  const style = document.createElement('style');
  style.textContent = `
    .ripple-host { position: relative; overflow: hidden; }
    .ripple-wave {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: rippleAnim 0.65s cubic-bezier(0.4,0,0.2,1) forwards;
      pointer-events: none;
      z-index: 999;
    }
    @keyframes rippleAnim {
      to { transform: scale(4); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // Selectors yang dapat efek ripple
  const RIPPLE_SELECTORS = [
    '.btn', '.service-card', '.feature-card', '.faq-question',
    '.brand-btn', '.damage-btn', '.phone-vid-nav', '.about-vid-btn',
    '.nav-link', '.navbar-cta', '.social-link', '.footer-link',
  ];

  function createRipple(e, el) {
    const rect   = el.getBoundingClientRect();
    const size   = Math.max(rect.width, rect.height) * 1.4;
    const x      = (e.clientX ?? (rect.left + rect.width  / 2)) - rect.left - size / 2;
    const y      = (e.clientY ?? (rect.top  + rect.height / 2)) - rect.top  - size / 2;

    // Warna berdasarkan elemen
    const isWA      = el.classList.contains('btn-wa') || el.closest('.btn-wa');
    const isPrimary = el.classList.contains('btn-primary') || el.closest('.btn-primary');
    const color = isWA      ? 'rgba(37,211,102,0.35)' :
                  isPrimary ? 'rgba(255,255,255,0.35)' :
                              'rgba(245,158,11,0.25)';

    const wave = document.createElement('span');
    wave.className = 'ripple-wave';
    wave.style.cssText = `
      width:${size}px; height:${size}px;
      left:${x}px; top:${y}px;
      background: radial-gradient(circle, ${color} 0%, transparent 70%);
    `;

    // pastikan host punya position:relative + overflow:hidden
    const pos = getComputedStyle(el).position;
    if (pos === 'static') el.style.position = 'relative';

    el.appendChild(wave);
    wave.addEventListener('animationend', () => wave.remove(), { once: true });
  }

  function attach(el) {
    if (el._rippleAttached) return;
    el._rippleAttached = true;
    el.addEventListener('pointerdown', e => createRipple(e, el), { passive: true });
  }

  // Pasang ke semua elemen yang ada saat ini + observer untuk dinamis
  function attachAll() {
    document.querySelectorAll(RIPPLE_SELECTORS.join(',')).forEach(attach);
  }

  attachAll();

  const mo = new MutationObserver(attachAll);
  mo.observe(document.body, { childList: true, subtree: true });

  // Efek cursor glow ikut mouse (desktop)
  if (window.matchMedia('(hover: hover)').matches) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position:fixed; pointer-events:none; z-index:9998;
      width:320px; height:320px; border-radius:50%;
      background: radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%);
      transform: translate(-50%,-50%);
      transition: opacity 0.3s ease;
      top:0; left:0;
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    }, { passive: true });

    document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
  }
})();

/* =====================================================
   18. PROTECT — disable inspect / view source
   ===================================================== */
(function initProtect() {
  // Disable klik kanan
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Disable keyboard shortcuts devtools & view-source
  document.addEventListener('keydown', e => {
    // F12
    if (e.key === 'F12') { e.preventDefault(); return; }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (DevTools)
    if (e.ctrlKey && e.shiftKey && ['i','I','j','J','c','C'].includes(e.key)) {
      e.preventDefault(); return;
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && ['u','U'].includes(e.key)) {
      e.preventDefault(); return;
    }
    // Ctrl+S (Save page)
    if (e.ctrlKey && ['s','S'].includes(e.key)) {
      e.preventDefault(); return;
    }
  });

  // Deteksi DevTools terbuka via resize (metode umum)
  const threshold = 160;
  setInterval(() => {
    const widthDiff  = window.outerWidth  - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
      // DevTools kemungkinan terbuka — redirect / blur konten
      document.body.style.filter = 'blur(8px)';
    } else {
      document.body.style.filter = '';
    }
  }, 1000);
})();

/* =====================================================
   19. NAVBAR CLOCK — jam & tanggal realtime
   ===================================================== */
(function initNavbarClock() {
  const timeEl = document.getElementById('clockTime');
  const dateEl = document.getElementById('clockDate');
  if (!timeEl || !dateEl) return;

  const DAYS  = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
  const MONTHS = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];

  function tick() {
    const now = new Date();
    const h   = now.getHours().toString().padStart(2, '0');
    const m   = now.getMinutes().toString().padStart(2, '0');
    const s   = now.getSeconds().toString().padStart(2, '0');
    timeEl.textContent = `${h}:${m}:${s}`;
    dateEl.textContent = `${DAYS[now.getDay()]}, ${now.getDate()} ${MONTHS[now.getMonth()]}`;
  }

  tick();
  setInterval(tick, 1000);
})();
