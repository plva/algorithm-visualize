# ADR 0003: Choose Vite as the React Build Tool for Fast Iteration

## Status
Accepted

## Context
React-scripts (Create React App) is deprecated and no longer maintained. Modern React development requires a fast, reliable, and well-supported build tool to maximize developer productivity and iteration speed. Two leading options in 2024 are Vite and Rsbuild. Vite is widely adopted, stable, and has a large ecosystem, while Rsbuild is a newer, Rust-based tool that claims even faster performance but is less mature. The project needs a build tool that offers rapid hot module replacement (HMR), fast startup, strong TypeScript support, and a robust plugin ecosystem.

## Decision
We will use **Vite** as the default build tool for React projects in this repository.

## Consequences

### Positive
- **Fast Iteration:** Vite offers near-instant dev server startup and HMR, enabling rapid feedback during development.
- **Stability:** Vite is battle-tested, widely adopted, and has extensive documentation and community support.
- **Ecosystem:** Large plugin ecosystem and compatibility with modern frontend tooling.
- **TypeScript Support:** Excellent TypeScript integration and fast incremental builds.
- **Easy Migration:** Many guides and tools exist for migrating from Create React App to Vite.
- **Framework Agnostic:** Supports React, Vue, Svelte, and more, allowing flexibility for future needs.

### Negative
- **Rsbuild May Be Faster:** Rsbuild may offer even faster performance for very large projects or monorepos, but is less mature and has a smaller ecosystem.
- **Bleeding Edge Features:** Rsbuild and other new tools may introduce features or optimizations not yet available in Vite.

## Implementation Details
- Migrate from react-scripts to Vite for all dev, test, and build workflows.
- Update documentation and scripts to use Vite commands (`vite`, `vite build`, etc.).
- Remove react-scripts and related dependencies from package.json.
- Ensure all tests and CI workflows pass with Vite.

## Alternatives Considered

### Rsbuild
- **Pros:** Claims to be 3x faster than Vite in some benchmarks; Rust-based for high performance.
- **Cons:** Newer, less mature, smaller ecosystem, less documentation and community support.
- **Decision:** Not chosen due to maturity and ecosystem concerns.

### Turbopack
- **Pros:** Extremely fast, especially for large Next.js projects; Rust-based.
- **Cons:** Optimized for Next.js, not general React apps; plugin ecosystem still maturing.
- **Decision:** Not chosen as this project is not using Next.js.

### Create React App (react-scripts)
- **Pros:** Previously the standard for React projects; zero-config setup.
- **Cons:** Deprecated, slow, not maintained, lacks modern features.
- **Decision:** Not chosen due to deprecation and lack of support.

## Related ADRs
- ADR 0001: Use Architecture Decision Records 