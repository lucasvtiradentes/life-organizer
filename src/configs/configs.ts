const GOOGLE_ID = process.env.GOOGLE_ID ?? '';
const GOOGLE_SECRET = process.env.GOOGLE_SECRET ?? '';
const GITHUB_ID = process.env.GITHUB_ID ?? '';
const GITHUB_SECRET = process.env.GITHUB_SECRET ?? '';
const JWT_SECRET = process.env.JWT_SECRET ?? '';
const MONGO_URL = process.env.MONGO_URL ?? '';

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const SERVER = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://life-organizer-eta.vercel.app';

const APP_COLOR_MAIN = '#0046E5';
const APP_COLOR_SECONDARY = '#ffff';
const BG_COLOR_LAYOUT_MAIN = '#F3F4F6';
const BG_COLOR_MAIN = '#111827';
const BG_COLOR_SECONDARY = '#1F2937';
const TEXT_COLOR_MAIN = '#FFFFFF';
const TEXT_COLOR_SECONDARY = '#D1D5DB';

export { NODE_ENV, APP_COLOR_MAIN, APP_COLOR_SECONDARY, BG_COLOR_LAYOUT_MAIN, BG_COLOR_MAIN, BG_COLOR_SECONDARY, TEXT_COLOR_MAIN, TEXT_COLOR_SECONDARY, SERVER, MONGO_URL, GOOGLE_ID, GOOGLE_SECRET, GITHUB_ID, GITHUB_SECRET, JWT_SECRET };
