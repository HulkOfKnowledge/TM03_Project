/**
 * API Route: POST /api/auth/login
 * TODO: Implement user login
 * - Validate request body with loginSchema
 * - Call Supabase auth.signInWithPassword
 * - Return user data and session tokens
 * - Set HTTP-only cookies for session
 * - Handle errors (invalid credentials, user not found)
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { loginSchema } from '@/lib/validations';
import { createSuccessResponse, createErrorResponse } from '@/types/api.types';

export async function POST(request: NextRequest) {
  try {
    // TODO: Parse and validate request body
    // TODO: Call Supabase auth.signInWithPassword
    // TODO: Return user and session data
    // TODO: Handle errors

    return NextResponse.json(
      createErrorResponse('NOT_IMPLEMENTED', 'Login not implemented yet'),
      { status: 501 }
    );
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('INTERNAL_ERROR', 'An error occurred'),
      { status: 500 }
    );
  }
}
