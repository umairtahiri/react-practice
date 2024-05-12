type Location = {
  lat: number;
  lng: number;
};

type Viewport = {
  northeast: Location;
  southwest: Location;
};

type Geometry = {
  location: Location;
  viewport: Viewport;
};

export type Place = {
  business_status: string;
  formatted_address: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  place_id: string;
  rating: number;
  reference: string;
  types: string[];
  user_ratings_total: number;
};
