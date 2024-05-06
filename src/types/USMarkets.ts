export type StockData = {
  week_high: number;
  week_low: number;
  currency: string;
  day_change: number;
  day_high: number;
  day_low: number;
  day_open: number;
  exchange_long: string | null;
  exchange_short: string | null;
  is_extended_hours_price: boolean;
  last_trade_time: string;
  market_cap: number | null;
  mic_code: string;
  name: string;
  previous_close_price: number;
  previous_close_price_time: string;
  price: number;
  ticker: string;
  volume: number;
  // Add any other properties here
};

export type USMarketsData = {
  fullData: FullDetailsData;
  news: NewsWithSymbol;
};

export type FullDetailsData = {
  data: StockData[];
};

export type Entity = {
  country: string;
  exchange: string;
  exchange_long: string;
  industry: string;
  match_score: number;
  name: string;
  sentiment_score: number;
  symbol: string;
  type: string;
};

export type Highlight = {
  highlight: string;
  sentiment: number;
  highlighted_in: string;
};

export type DataItem = {
  description: string;
  entities: Entity[];
  highlights: Highlight[];
  industry: string;
  match_score: number;
  name: string;
  sentiment_score: number;
  symbol: string;
  type: string;
  image_url: string;
  keywords: string;
  language: string;
  published_at: string;
  relevance_score: number | null;
  similar: any[]; // Define the type for similar if needed
  snippet: string;
  source: string;
  title: string;
  url: string;
  uuid: string;
};

export type NewsWithSymbol = {
  data: DataItem[];
};

export type SimilarItem = {
  description: string;
  entities: Entity[];
  image_url: string;
  keywords: string;
  language: string;
  published_at: string;
  relevance_score: number | null;
  snippet: string;
  source: string;
  title: string;
  url: string;
  uuid: string;
};

export type NewsDataItem = {
  description: string;
  entities: Entity[];
  image_url: string;
  keywords: string;
  language: string;
  published_at: string;
  relevance_score: number | null;
  similar: SimilarItem[];
  snippet: string;
  source: string;
  title: string;
  url: string;
  uuid: string;
};

export type NewsData = {
  data: NewsDataItem[];
};
