/**
 * Flinks API Type Definitions
 * Based on Flinks API v3 documentation
 */

// ==================== FLINKS AUTHORIZATION ====================
export interface FlinksAuthorizationRequest {
  redirectUrl: string;
  institutionId?: string;
  language?: 'en' | 'fr';
  theme?: 'light' | 'dark';
}

export interface FlinksAuthorizationResponse {
  loginId: string;
  redirectUrl: string;
  institutionId?: string;
}

// ==================== FLINKS ACCOUNTS ====================
export interface FlinksAccount {
  id: string;
  title: string;
  accountNumber: string;
  balance: {
    current: number;
    available: number;
    limit: number;
  };
  category: string;
  type: string; // 'CreditCard', 'LineOfCredit', etc.
  currency: string;
  holder: {
    name: string;
    email?: string;
  };
}

export interface FlinksGetAccountsRequest {
  loginId: string;
  requestId?: string;
}

export interface FlinksGetAccountsResponse {
  login: string;
  institution: string;
  requestId: string;
  accounts: FlinksAccount[];
}

// ==================== FLINKS TRANSACTIONS ====================
export interface FlinksTransaction {
  id: string;
  accountId: string;
  date: string;
  description: string;
  debit: number | null;
  credit: number | null;
  balance: number;
  category?: string;
}

export interface FlinksGetTransactionsRequest {
  loginId: string;
  accountId: string;
  startDate?: string;
  endDate?: string;
}

export interface FlinksGetTransactionsResponse {
  transactions: FlinksTransaction[];
}

// ==================== FLINKS STATEMENTS ====================
export interface FlinksStatement {
  id: string;
  accountId: string;
  statementDate: string;
  periodStartDate: string;
  periodEndDate: string;
  dueDate?: string;
  minimumPayment?: number;
  closingBalance: number;
  interestRate?: number;
}

// ==================== FLINKS SYNC ====================
export interface FlinksSyncRequest {
  loginId: string;
  mostRecentCached?: boolean;
}

export interface FlinksSyncResponse {
  status: 'success' | 'pending' | 'error';
  loginId: string;
  accounts: FlinksAccount[];
  lastRefresh: string;
}

// ==================== FLINKS ERROR ====================
export interface FlinksErrorResponse {
  error: string;
  errorCode: string;
  message: string;
  requestId?: string;
}

// ==================== TYPE GUARDS ====================
export function isFlinksError(
  response: FlinksGetAccountsResponse | FlinksErrorResponse
): response is FlinksErrorResponse {
  return 'error' in response;
}
