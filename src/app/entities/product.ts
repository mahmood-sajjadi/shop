import {Image} from './image';

export interface ProductProperties {
  name: string;
  description: string;
  value: string;
}

export interface ProductInfo {
  id: number;
  name: string;
  short_description: string;
  description: string;
}

export interface ProductConfig extends ProductProperties {
  id: number;
  images: Image[];
}

export interface Product {
  id: number;
  info_id: number;
  config_ids: ProductConfig[];
  quantity: number;
}
