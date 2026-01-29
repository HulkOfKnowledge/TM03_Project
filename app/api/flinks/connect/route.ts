/**
 * API Route: POST /api/flinks/connect
 * TODO: Initiate Flinks connection flow
 * - Get authenticated user from session
 * - Call FlinksService.initiateConnection
 * - Return loginId and redirectUrl to client
 * - Client redirects user to Flinks OAuth page
 * - User authenticates with their bank
 * - Flinks redirects back to /api/flinks/callback
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { flinksService } from '@/services/flinks.service';
import { createSuccessResponse, createErrorResponse } from '@/types/api.types';

export async function POST(request: NextRequest) {
  try {
    // TODO: Get authenticated user
    // const supabase = await createClient();
    // const { data: { user }, error } = await supabase.auth.getUser();
    // if (error || !user) {
    //   return NextResponse.json(
    //     createErrorResponse('UNAUTHORIZED', 'Not authenticated'),
    //     { status: 401 }
    //   );
    // }

    // TODO: Parse request body for redirectUrl, institutionId, language
    // TODO: Call flinksService.initiateConnection
    // TODO: Return loginId and redirect URL

    return NextResponse.json(
      createErrorResponse('NOT_IMPLEMENTED', 'Flinks connect not implemented yet'),
      { status: 501 }
    );
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('INTERNAL_ERROR', 'An error occurred'),
      { status: 500 }
    );
  }
}
