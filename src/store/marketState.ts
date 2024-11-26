import { ref } from 'vue';

export type MarketType = 'bull' | 'bear' | 'choppy';

export const selectedMarket = ref<MarketType>('bull');

export const setMarketState = (market: MarketType) => {
  selectedMarket.value = market;
};
