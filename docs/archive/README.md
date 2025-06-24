# Archive

This folder contains completed migration and historical documentation.

## Contents

### MIGRATION_TO_VITE.md
**Date:** January 2025  
**Status:** ✅ Completed

Complete checklist and documentation for migrating from `react-scripts` (Create React App) to Vite. This migration was successfully completed and resulted in:

- **Performance Improvements:**
  - Dev server startup: ~300ms (vs ~2-5s with CRA)
  - Build time: ~265ms (vs ~10-30s with CRA)
  - HMR: Near-instant (vs ~1-3s with CRA)
  - Zero vulnerabilities (vs 9 vulnerabilities with CRA)

- **Key Changes:**
  - Replaced `react-scripts` with `vite` and `@vitejs/plugin-react`
  - Added `vitest` for testing
  - Renamed `.js` files to `.jsx` for proper JSX parsing
  - Updated all npm scripts
  - Created `vite.config.js` with React and test configuration

- **Files Modified:**
  - `package.json` - Updated scripts and dependencies
  - `index.html` - Updated for Vite entry point
  - `vite.config.js` - New Vite configuration
  - `src/index.jsx` - Renamed from `.js`
  - `src/App.jsx` - Renamed from `.js`

## Related ADRs
- [ADR 0003: Choose Vite as the React Build Tool](../src/docs/adrs/0003-choose-vite-for-react-build-tool.md) 