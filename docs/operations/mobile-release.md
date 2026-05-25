# Mobile Release Strategy

Puente uses Expo and EAS for mobile builds.

## Current strategy

The mobile app starts with Expo Go during development.

Later, Puente will use EAS Build for:

- Android internal APK builds
- Android Play Store builds
- iOS TestFlight builds
- iOS App Store builds

## Profiles

### development

Used for development clients and internal testing.

### preview

Used for internal APK testing before store submission.

### production

Used for official Play Store and App Store builds.

## Important

The first public mobile release should happen only after:

- authentication is stable
- privacy policy exists
- account deletion flow exists
- Supabase policies are reviewed
- app store metadata is ready
- Android package and iOS bundle identifiers are final
