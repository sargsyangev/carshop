export type carImg = {
  id: number;
  imgUrl: string;
};

export type car = {
  id: string;
  priority: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  color: string;
  engine_volume: string;
  body_type: string;
  transmission: string;
  engine: string;
  drive: string;
  country: string;
  on_road: boolean;
  on_auction: boolean;
  customs_cleared: boolean;
  exchange: boolean;
  installment_payment: boolean;
  isDiller: boolean;
  isOfficialDiller: boolean;
  user: string;
  power: number;
  steering: string;
  img: carImg[];
  description: string;
};

export interface IntersectionObserverProps{
  root?:Element | null,
  rootMargin?:String,
  threshold?:number | number[]
}