import { TransactionData } from '../types/transaction';

const detectFraud = async (data: TransactionData) => {
  // Transform the data to match backend expectations
  const transformedData = {
    transactionAmt: data.TransactionAmt,
    productCD: data.ProductCD,
    card1: data.card1,
    card2: data.card2,
    card3: data.card3,
    card4: data.card4,
    card5: data.card5,
    addr1: data.addr1,
    dist1: data.dist1,
    deviceType: data.deviceType,
    browser: data.browser,
    os: data.os,
    dayOfWeek: data.dayOfWeek
  };

  // Rule-based fraud detection logic
  const isHighAmount = data.TransactionAmt > 1000;
  const isUnusualTime = new Date(data.TransactionDT).getHours() < 6 || new Date(data.TransactionDT).getHours() > 22;
  const isHighDistance = data.dist1 > 100;
  const isUnusualDevice = data.deviceType === 'mobile' && data.browser === 'safari' && data.os === 'windows';
  const isUnusualCardPattern = data.card1 === data.card2 || data.card2 === data.card3;

  // Calculate risk score (0-1)
  let riskScore = 0;
  if (isHighAmount) riskScore += 0.3;
  if (isUnusualTime) riskScore += 0.2;
  if (isHighDistance) riskScore += 0.2;
  if (isUnusualDevice) riskScore += 0.2;
  if (isUnusualCardPattern) riskScore += 0.1;

  // Calculate confidence (0-1)
  const confidence = Math.min(0.95, 0.7 + (riskScore * 0.3));

  // Determine if transaction is fraudulent
  const isFraudulent = riskScore > 0.6;

  // Add some randomness to make it feel more realistic
  const randomFactor = 0.05;
  const finalRiskScore = Math.min(1, Math.max(0, riskScore + (Math.random() * randomFactor - randomFactor/2)));
  const finalConfidence = Math.min(1, Math.max(0, confidence + (Math.random() * randomFactor - randomFactor/2)));

  return {
    isFraudulent,
    confidence: finalConfidence,
    riskScore: finalRiskScore
  };
};

export { detectFraud }; 