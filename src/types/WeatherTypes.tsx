export type Location = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

export type IPNumber = {
  ip: string;
};

export type CurrentWeather = {
  cloud: number;
  condition: {
    text: string;
    icon: string;
  };
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  temp_c: number;
  temp_f: number;
  vis_km: number;
  vis_miles: number;
  wind_kph: number;
  wind_mph: number;
};

export type ForecastDay = {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
};

export type WeatherData = {
  current: CurrentWeather;
  forecast: {
    forecastday: ForecastDay[];
  };
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    localtime_epoch: number;
    localtime: string;
    // Add any other location properties here
  };
};

export type Astro = {
  is_moon_up: number;
  is_sun_up: number;
  moon_illumination: number;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
  // Add any other astro properties here
};

export type Condition = {
  text: string;
  icon: string;
  code: number;
  // Add any other condition properties here
};

export type Day = {
  avgtemp_c: number;
  avgtemp_f: number;
  condition: Condition;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalsnow_cm: number;
  // Add any other day properties here
};

export type WeatherError = {
  Error: {
    code: number;
    message: string;
  };
};
