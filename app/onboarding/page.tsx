/**
 * Onboarding Page
 * TODO: Implement multi-step onboarding flow
 * - Step 1: Welcome and language selection
 * - Step 2: Choose primary goal (learn about credit OR manage cards)
 * - Step 3: Brief tutorial on chosen dashboard
 * - Step 4: Optional - Connect first credit card
 * - Step 5: Complete onboarding, set preferred_dashboard
 * - Progress indicator showing current step
 * - Back/Next navigation buttons
 * - Skip option for later steps
 * - Update user_profiles.onboarding_step on each step
 * - Set onboarding_completed when finished
 * - Redirect to chosen dashboard
 */

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">Welcome to Creduman!</h1>
        {/* TODO: Implement onboarding steps */}
        {/* TODO: Add progress indicator (Step 1 of 5) */}
        {/* TODO: Add step content based on onboarding_step */}
        {/* TODO: Add navigation buttons (Back, Next, Skip) */}
        {/* TODO: Update onboarding_step in database on each step */}
        {/* TODO: Set preferred_dashboard based on user choice */}
        {/* TODO: Mark onboarding_completed when finished */}
      </div>
    </div>
  );
}
