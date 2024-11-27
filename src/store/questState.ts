import { ref } from 'vue';

export interface Quest {
  id: string;
  title: string;
  reward: number;
  link: string;
  completed: boolean;
  claimed: boolean;
}

// Initialize quests with default values
const quests = ref<Quest[]>([
  {
    id: 'twitter',
    title: 'Follow us on X (Twitter)',
    reward: 300,
    link: 'https://example.com',
    completed: false,
    claimed: false
  },
  {
    id: 'telegram',
    title: 'Follow us on Telegram',
    reward: 300,
    link: 'https://example.com',
    completed: false,
    claimed: false
  },
  {
    id: 'discord',
    title: 'Join Our Discord',
    reward: 300,
    link: 'https://example.com',
    completed: false,
    claimed: false
  },
  {
    id: 'farcaster',
    title: 'Follow us on Farcaster',
    reward: 300,
    link: 'https://example.com',
    completed: false,
    claimed: false
  },
  {
    id: 'ithaca',
    title: 'Connect Wallet on Ithaca App',
    reward: 300,
    link: 'https://example.com',
    completed: false,
    claimed: false
  },
  {
    id: 'iobot',
    title: 'Connect Wallet on IO Bot',
    reward: 300,
    link: 'https://example.com',
    completed: false,
    claimed: false
  },
  {
    id: 'engagement',
    title: 'Like comment Rt',
    reward: 300,
    link: 'https://example.com',
    completed: false,
    claimed: false
  }
]);

// Load quest state from localStorage if available
const savedQuests = localStorage.getItem('quests');
if (savedQuests) {
  quests.value = JSON.parse(savedQuests);
}

// Save quest state to localStorage whenever it changes
const saveQuests = () => {
  localStorage.setItem('quests', JSON.stringify(quests.value));
};

// Complete a quest
export const completeQuest = (questId: string) => {
  const quest = quests.value.find(q => q.id === questId);
  if (quest) {
    quest.completed = true;
    saveQuests();
  }
};

// Claim a quest reward
export const claimQuestReward = (questId: string) => {
  const quest = quests.value.find(q => q.id === questId);
  if (quest && quest.completed && !quest.claimed) {
    quest.claimed = true;
    saveQuests();
    return quest.reward;
  }
  return 0;
};

// Check if a quest is completed
export const isQuestCompleted = (questId: string): boolean => {
  const quest = quests.value.find(q => q.id === questId);
  return quest?.completed || false;
};

// Check if a quest reward has been claimed
export const isQuestClaimed = (questId: string): boolean => {
  const quest = quests.value.find(q => q.id === questId);
  return quest?.claimed || false;
};

// Get all quests
export const getAllQuests = (): Quest[] => {
  return quests.value;
};

// Reset all quests
export const resetQuests = () => {
  quests.value.forEach(quest => {
    quest.completed = false;
    quest.claimed = false;
  });
  saveQuests();
};
