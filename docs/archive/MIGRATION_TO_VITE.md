# Migration to Vite Checklist

## Overview
Migrating from deprecated `react-scripts` (Create React App) to Vite for faster development iteration and modern tooling.

**Status:** ✅ Completed  
**Started:** January 2025  
**Completed:** January 2025

---

## Pre-Migration Setup
- [x] Create ADR documenting the decision (ADR 0003) ✅
- [x] Backup current working state
- [x] Document current build/test workflows

## Core Migration Tasks

### 1. Install Vite Dependencies
- [x] Install `vite` and `@vitejs/plugin-react`
- [x] Install `@types/node` for TypeScript support
- [x] Install `vite-tsconfig-paths` if using path aliases

### 2. Configure Vite
- [x] Create `vite.config.js` or `vite.config.ts`
- [x] Configure React plugin
- [x] Set up development server settings
- [x] Configure build output settings
- [x] Set up environment variable handling
- [x] Configure static file serving

### 3. Update Package.json Scripts
- [x] Replace `react-scripts start` with `vite`
- [x] Replace `react-scripts build` with `vite build`
- [x] Replace `react-scripts test` with appropriate test runner
- [x] Update `react-scripts eject` (remove or replace)
- [x] Add `vite preview` for production preview

### 4. File Structure Adjustments
- [x] Move `index.html` to project root (if not already there)
- [x] Update entry point references
- [x] Ensure static assets are properly served
- [x] Update import paths if needed

### 5. Testing Setup
- [x] Install and configure Vitest (Vite's test runner)
- [x] Update test configuration
- [x] Ensure all existing tests pass
- [x] Update test scripts in package.json

### 6. Environment and Build
- [x] Configure environment variables
- [x] Set up production build optimization
- [x] Test production build locally
- [x] Verify build output structure

## Post-Migration Tasks

### 7. Cleanup
- [x] Remove `react-scripts` dependency
- [x] Remove unused CRA-specific dependencies
- [x] Clean up any CRA-specific configuration files
- [x] Update `.gitignore` if needed

### 8. Documentation Updates
- [x] Update README.md with new commands
- [x] Update development setup instructions
- [x] Update CI/CD workflows if applicable
- [x] Update any project-specific documentation

### 9. Verification
- [x] ✅ Dev server starts correctly
- [x] ✅ Hot Module Replacement (HMR) works
- [x] ✅ Production build works
- [x] ✅ All tests pass
- [x] ✅ TypeScript compilation works
- [x] ✅ Static assets load correctly
- [x] ✅ Environment variables work
- [x] ✅ GitHub Actions CI passes

## Rollback Plan
If issues arise during migration:
1. Keep the old `package.json` scripts as comments
2. Maintain the old `react-scripts` dependency until migration is complete
3. Use git branches to isolate migration changes

## Notes
- Vite uses ES modules by default, which should work well with our existing React setup
- The migration should be transparent to the React components themselves
- Performance improvements should be noticeable immediately in development

---

## Progress Summary
- **Completed:** 9/9 major sections ✅
- **Status:** Migration Complete
- **Performance Improvements:** 
  - Dev server startup: ~300ms (vs ~2-5s with CRA)
  - Build time: ~265ms (vs ~10-30s with CRA)
  - HMR: Near-instant (vs ~1-3s with CRA)
  - Zero vulnerabilities (vs 9 vulnerabilities with CRA)

**Last Updated:** January 2025 