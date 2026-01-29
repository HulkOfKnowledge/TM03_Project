/**
 * API Response Types
 * Standardized response formats for all API endpoints
 */

// ==================== STANDARD API RESPONSE ====================
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: ResponseMeta;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  field?: string; // For validation errors
}

export interface ResponseMeta {
  timestamp: string;
  requestId?: string;
  pagination?: PaginationMeta;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

// ==================== SUCCESS RESPONSES ====================
export function createSuccessResponse<T>(
  data: T,
  meta?: Partial<ResponseMeta>
): ApiResponse<T> {
  return {
    success: true,
    data,
    meta: {
      timestamp: new Date().toISOString(),
      ...meta,
    },
  };
}

export function createErrorResponse(
  code: string,
  message: string,
  details?: Record<string, unknown>
): ApiResponse {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    meta: {
      timestamp: new Date().toISOString(),
    },
  };
}

// ==================== SPECIFIC API RESPONSES ====================

// Auth
export interface LoginResponse {
  user: {
    id: string;
    email: string;
    full_name: string | null;
  };
  session: {
    access_token: string;
    refresh_token: string;
    expires_at: number;
  };
}

export interface SignupResponse extends LoginResponse {
  onboarding_required: boolean;
}

// User Profile
export interface UserProfileResponse {
  id: string;
  email: string;
  full_name: string | null;
  preferred_language: string;
  preferred_dashboard: string | null;
  onboarding_completed: boolean;
}

// Credit Cards
export interface ConnectedCardsResponse {
  cards: Array<{
    id: string;
    institution_name: string;
    card_type: string;
    card_last_four: string;
    is_active: boolean;
    last_synced_at: string | null;
  }>;
}

export interface CardDetailsResponse {
  card: {
    id: string;
    institution_name: string;
    card_type: string;
    card_last_four: string;
  };
  credit_data: {
    current_balance: number;
    credit_limit: number;
    utilization_percentage: number;
    payment_due_date: string | null;
    minimum_payment: number;
  };
}

// Insights
export interface InsightsResponse {
  insights: Array<{
    id: string;
    type: string;
    priority: string;
    title: string;
    message: string;
    action_required: boolean;
    is_read: boolean;
    created_at: string;
  }>;
  unread_count: number;
}

// Learning
export interface LearningModulesResponse {
  modules: Array<{
    id: string;
    title: string;
    description: string;
    difficulty_level: string;
    estimated_duration_minutes: number;
    user_progress: {
      status: string;
      progress_percentage: number;
    } | null;
  }>;
}

// ==================== REQUEST TYPES ====================
export interface PaginationRequest {
  page?: number;
  pageSize?: number;
}

export interface SortRequest {
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
