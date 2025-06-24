# ADR 0002: Event Log System for Algorithm Visualization

## Status
Accepted

## Context
We need a system to track and replay algorithm execution step-by-step for educational visualization. The system must support:
- Deterministic execution replay
- Bidirectional navigation (forward/backward)
- Efficient caching to avoid recomputation
- State reconstruction at any point in execution
- Multiple visualization types for the same algorithm

## Decision
We will implement an Event Log System that captures algorithm execution as a series of events, enabling deterministic replay and bidirectional navigation.

## Consequences

### Positive
- **Deterministic Replay**: Same input always produces same events, enabling reliable replay
- **Bidirectional Navigation**: Users can step forward and backward through execution
- **Caching**: Events are cached by input hash, avoiding expensive recomputation
- **State Reconstruction**: Can rebuild state at any point by replaying events up to that index
- **Multiple Visualizations**: Same events can drive different visualization types
- **Performance**: Efficient for large datasets with proper caching
- **Debugging**: Easy to debug algorithm execution by examining events

### Negative
- **Memory Usage**: Events must be stored in memory (mitigated by caching strategy)
- **Initial Overhead**: Generating events adds overhead to algorithm execution
- **Complexity**: Event generation requires careful design to capture all relevant state changes
- **Synchronization**: Must ensure events and visualization state stay in sync

## Implementation Details

### Event Structure
```typescript
interface Event {
  id: string;
  type: string;
  timestamp: number;
  data: any;
  description: string;
  metadata?: EventMetadata;
}
```

### Event Log Hook
```typescript
const {
  events,
  currentIndex,
  generateEvents,
  stepForward,
  stepBackward,
  goTo,
  reset,
  play,
  pause,
  cacheHitRate,
  clearCache,
} = useEventLog(options);
```

### Caching Strategy
- **LRU Cache**: Least Recently Used eviction for memory management
- **Input Hash**: Cache events by JSON stringified input
- **Configurable Size**: Adjustable cache size based on memory constraints
- **Hit Rate Tracking**: Monitor cache effectiveness

### State Reconstruction
- **Replay from Start**: Rebuild state by replaying events from index 0
- **Incremental Updates**: Apply events incrementally for better performance
- **Snapshot Points**: Optional snapshots at regular intervals for faster reconstruction

## Alternatives Considered

### 1. State Snapshots
- **Pros**: Fast state restoration
- **Cons**: High memory usage, complex state serialization
- **Decision**: Not chosen due to memory overhead

### 2. Command Pattern
- **Pros**: Clear separation of commands and state
- **Cons**: More complex implementation, harder to debug
- **Decision**: Not chosen due to complexity

### 3. Immutable State with History
- **Pros**: Natural undo/redo, easy state comparison
- **Cons**: High memory usage, complex state management
- **Decision**: Not chosen due to memory overhead 