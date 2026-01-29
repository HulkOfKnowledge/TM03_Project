/**
 * API Route: GET /api/flinks/callback
 * TODO: Handle Flinks OAuth callback
 * - Receive loginId from query params
 * - Call FlinksService.getAccounts to fetch connected accounts
 * - Filter for credit cards and lines of credit
 * - Store accounts in connected_credit_cards table
 * - Trigger initial data sync
 * - Redirect user back to card dashboard
 * - Show success message
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { flinksService } from '@/services/flinks.service';

export async function GET(request: NextRequest) {
  try {
    // TODO: Get loginId from query params
    // const loginId = request.nextUrl.searchParams.get('loginId');

    // TODO: Get authenticated user
    // const supabase = await createClient();
    // TODO: Call flinksService.getAccounts
    // TODO: Filter for credit accounts only
    // TODO: Store accounts in database
    // TODO: Trigger initial sync
    // TODO: Redirect to dashboard with success message

    return NextResponse.json(
      { error: 'NOT_IMPLEMENTED', message: 'Flinks callback not implemented yet' },
      { status: 501 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'INTERNAL_ERROR', message: 'An error occurred' },
      { status: 500 }
    );
  }
}
