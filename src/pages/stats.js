/**
 * Kelly Criterion optimal betting fractions for different market states
 */
export const KELLY_FRACTIONS = {
  BULL_MARKET: {
    fraction: 0.4,    // 40% of wealth
    winProb: 0.7,     // 70% win probability
    lossProb: 0.3     // 30% loss probability
  },
  BEAR_MARKET: {
    fraction: 0.06,   // 6% of wealth
    winProb: 0.53,    // 53% win probability
    lossProb: 0.47    // 47% loss probability
  },
  CHOPPY_MARKET: {
    fraction: 0.2,    // 20% of wealth
    winProb: 0.6,     // 60% win probability
    lossProb: 0.4     // 40% loss probability
  }
};

/**
 * Player categories based on betting behavior
 */
export const PLAYER_CATEGORIES = {
  OPTIMAL_STRATEGIST: 'Optimal Strategist',
  RISK_TAKER: 'Risk-Taker',
  CONSERVATIVE: 'Conservative Player',
  INCONSISTENT: 'Inconsistent Player'
};

/**
 * Categorizes a player based on their betting history
 * @param {Array} bets - Array of player's bets as percentage of wealth
 * @param {string} marketState - Current market state ('BULL_MARKET', 'BEAR_MARKET', 'CHOPPY_MARKET')
 * @returns {Object} Player category and statistics
 */
export function categorizePlayer(bets, marketState) {
  if (!bets || bets.length === 0) {
    throw new Error('No betting history provided');
  }

  const optimalBet = KELLY_FRACTIONS[marketState].fraction;
  if (!optimalBet) {
    throw new Error('Invalid market state');
  }

  const totalBets = bets.length;
  let optimalBets = 0;
  let riskTakerBets = 0;
  let conservativeBets = 0;

  // Calculate average bet
  const averageBet = bets.reduce((sum, bet) => sum + bet, 0) / totalBets;

  // Analyze each bet according to the provided thresholds
  bets.forEach(bet => {
    const deviation = Math.abs(bet - optimalBet);
    
    if (deviation < 0.10 * optimalBet) {
      // Within 10% of optimal bet size
      optimalBets++;
    } else if (bet > 1.20 * optimalBet) {
      // Exceeds optimal bet size by more than 20%
      riskTakerBets++;
    } else if (bet < 0.20 * optimalBet) {
      // Less than 20% of optimal bet size
      conservativeBets++;
    }
  });

  // Calculate percentages
  const optimalPercentage = optimalBets / totalBets;
  const riskTakerPercentage = riskTakerBets / totalBets;
  const conservativePercentage = conservativeBets / totalBets;

  // Determine category using the exact thresholds provided
  let category;
  if (optimalPercentage >= 0.80) {
    category = PLAYER_CATEGORIES.OPTIMAL_STRATEGIST;
  } else if (riskTakerPercentage > 0.50) {
    category = PLAYER_CATEGORIES.RISK_TAKER;
  } else if (conservativePercentage > 0.50) {
    category = PLAYER_CATEGORIES.CONSERVATIVE;
  } else if (riskTakerPercentage >= 0.30 && conservativePercentage >= 0.30) {
    category = PLAYER_CATEGORIES.INCONSISTENT;
  } else {
    // Default to inconsistent if no clear pattern emerges
    category = PLAYER_CATEGORIES.INCONSISTENT;
  }

  return {
    category,
    stats: {
      averageBet,                    // Average bet as fraction of wealth
      averageBetPercentage: averageBet * 100,  // Average bet as percentage
      optimalBet,                    // Kelly criterion optimal bet
      optimalBetPercentage: optimalBet * 100,  // Optimal bet as percentage
      totalBets,
      optimalBets,
      riskTakerBets,
      conservativeBets,
      optimalPercentage: optimalPercentage * 100,
      riskTakerPercentage: riskTakerPercentage * 100,
      conservativePercentage: conservativePercentage * 100
    }
  };
}

/**
 * Gets the description for a player category
 * @param {string} category - Player category
 * @returns {string} Category description
 */
export function getCategoryDescription(category) {
  switch (category) {
    case PLAYER_CATEGORIES.OPTIMAL_STRATEGIST:
      return `You consistently followed the Kelly criterion, betting the calculated fraction of your wealth. You demonstrated a high level of financial knowledge and discipline, understanding the balance between risk and reward. Your end results typically showed steady growth, despite occasional setbacks due to Black Swan events. By making bets closely aligned with the optimal strategy, you minimized risk while maximizing potential gains. You exemplify calculated risk behavior, grounded in strong analytical skills and patience.`;
    
    case PLAYER_CATEGORIES.RISK_TAKER:
      return `You often bet more than the Kelly criterion suggested, driven by a desire for quick gains. Your approach revealed a more aggressive risk behavior, often fueled by overconfidence or a lack of risk management knowledge. While you may have experienced significant short-term success, you faced substantial losses, particularly during market downturns or Black Swan events. Your end results were highly variable, with a tendency toward volatility and potential financial ruin.`;
    
    case PLAYER_CATEGORIES.CONSERVATIVE:
      return `You bet less than the optimal fraction, prioritizing safety over growth. Your conservative risk behavior indicated a cautious psychological makeup, possibly stemming from risk aversion or insufficient understanding of probability. While you avoided catastrophic losses, your end results showed limited growth, often lagging behind due to your hesitance to seize opportunities. You valued stability, reflecting a preference for minimizing risk even at the expense of potential returns.`;
    
    case PLAYER_CATEGORIES.INCONSISTENT:
      return `You displayed erratic betting patterns, often deviating from any coherent strategy. Your actions were likely influenced by emotional responses to market changes or a lack of strategic knowledge. Your results showed mixed outcomes, as periods of success were frequently offset by poor decisions leading to losses. Your approach highlighted a need for greater understanding of risk management and self-discipline to achieve more consistent outcomes.`;
    
    default:
      return `Your betting pattern requires further analysis to provide a meaningful categorization.`;
  }
}
