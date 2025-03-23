export interface TransactionData {
  TransactionID: string;
  TransactionDT: string;
  TransactionAmt: number;
  ProductCD: string;
  card1: number;
  card2: number;
  card3: number;
  card4: string;
  card5: number;
  addr1: string;
  dist1: number;
  deviceType: string;
  browser: string;
  os: string;
  dayOfWeek: number;
}

export interface FraudDetectionResult {
  isFraudulent: boolean;
  confidence: number;
  riskScore: number;
} 