import { ref, watch } from 'vue';

// Load initial gold balance from localStorage or use default value
const initialGold = localStorage.getItem('goldBalance') 
  ? Number(localStorage.getItem('goldBalance')) 
  : 100;

export const goldBalance = ref(initialGold);
export const bettingHistory = ref<number[]>([]);

// Watch for changes to goldBalance and update localStorage
watch(goldBalance, (newBalance) => {
  localStorage.setItem('goldBalance', newBalance.toString());
});

export const updateGoldBalance = (amount: number) => {
  goldBalance.value = amount;
};

export const decreaseGold = (amount: number) => {
  goldBalance.value -= amount;
};

export const increaseGold = (amount: number) => {
  goldBalance.value += amount;
};

export const addBet = (betAmount: number) => {
  // Store bet as percentage of current gold balance
  const betPercentage = betAmount / goldBalance.value;
  bettingHistory.value.push(betPercentage);
};

export const clearBettingHistory = () => {
  bettingHistory.value = [];
};

// Reset gold balance to initial amount
export const resetGoldBalance = () => {
  goldBalance.value = 100;
};
