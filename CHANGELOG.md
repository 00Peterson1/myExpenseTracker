# Changelog

## 2026-08-13

### Updated
- Upgraded the TypeScript toolchain and related npm dependencies.
- Added Vitest and a regression test to support runtime validation.
- Added upgrade workflow artifacts for planning and progress tracking.

### Dependency changes
- `typescript`: `^6.0.2` → `^7.0.2`
- `@types/node`: `^25.5.2` → `^26.2.0`
- `pg`: `^8.20.0` → `^8.23.0`
- `zod`: `^4.3.6` → `^4.4.3`
- `@types/pg`: `^8.20.0` → `^8.21.0`

### Validation
- `npm install`
- `npx tsc --noEmit`
- `npm test`
- Runtime checks for `GET /` and `GET /api/transactions`