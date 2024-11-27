import { ref } from 'vue';

export type MarketType = 'BULL_MARKET' | 'BEAR_MARKET' | 'CHOPPY_MARKET';

// Initialize with default market state
export const selectedMarket = ref<MarketType>('BULL_MARKET');

export const setMarketState = (market: MarketType) => {
  selectedMarket.value = market;
};

// Get market state in correct format for stats calculation
export const getCurrentMarket = (): MarketType => {
  return selectedMarket.value;
};
