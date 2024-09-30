interface WeatherEntity {
  location: Location;
  current: Current;
  Forecast: Hour[];
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  localtime: string;
}

interface Current {
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: String;
    avghumidity: number;
  };
  astro: Astro;
  hour: Hour[];
}

interface Astro {
  sunrise: String;
  sunset: String;
}

interface Hour {
  time: String;
  date: String;
  temp_c: number;
  condition: String;
}

export default WeatherEntity;
