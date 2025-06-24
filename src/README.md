# Algorithm Visualization Platform - Source Code

This directory contains the React-based algorithm visualization platform with reusable components, hooks, and utilities.

## Directory Structure

```
src/
├── components/           # React components
│   ├── common/          # Shared UI components (Header, Footer, etc.)
│   ├── controls/        # Playback and navigation controls
│   ├── visualizations/  # Visualization-specific components
│   └── problems/        # Problem-specific components
├── hooks/               # Custom React hooks
├── models/              # Data models and state management
├── utils/               # Utility functions and helpers
├── types/               # TypeScript type definitions
├── problems/            # Problem implementations
├── styles/              # CSS and styling
└── docs/                # Documentation and ADRs
```

## Core Concepts

### 1. Problem Structure
Each algorithm problem consists of:
- **Problem Definition**: Description, examples, constraints
- **Multiple Solutions**: Different algorithmic approaches
- **Input/Output**: Standardized input formats
- **Example Cases**: Pre-defined test cases

### 2. Event Log System
- **Deterministic Execution**: Same input always produces same events
- **Caching**: Events are cached to avoid recomputation
- **Bidirectional Navigation**: Forward/backward stepping
- **State Reconstruction**: Rebuild state at any point

### 3. Reusable Components

#### Playback Controls
- `TimeSlider`: Visual timeline navigation
- `PlaybackControls`: Play, pause, step forward/backward
- `SpeedControl`: Adjustable playback speed
- `AutoPlay`: Automatic progression

#### Input Management
- `InputForm`: Standardized input collection
- `ExampleSelector`: Pre-defined example cases
- `InputValidation`: Validation and error handling

#### Visualization Components
- `CanvasRenderer`: Generic canvas-based rendering
- `SVGRenderer`: SVG-based visualizations
- `GridRenderer`: Grid-based data structures
- `TreeRenderer`: Tree and graph visualizations

## Key Hooks

### useEventLog
Manages the event log system with caching and navigation.

```javascript
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
  currentEvent,
  canStepForward,
  canStepBackward,
} = useEventLog({
  maxCacheSize: 100,
  enableCaching: true,
  autoReset: true,
});
```

## Adding New Problems

1. **Create Problem Definition**
   ```javascript
   const problem = {
     id: 'unique-id',
     title: 'Problem Title',
     description: 'Problem description...',
     difficulty: 'Easy',
     category: 'Dynamic Programming',
     tags: ['array', 'dp'],
     examples: [...],
     solutions: [...],
   };
   ```

2. **Implement Algorithm**
   ```javascript
   const algorithm = {
     name: 'Solution Name',
     execute: (input) => {
       // Generate events during execution
       return events;
     },
   };
   ```

3. **Create Visualization Components**
   - Implement visualization model
   - Create React components
   - Add to problem registry

## Performance Considerations

- **Event Caching**: Cache events by input hash
- **Lazy Loading**: Load events on demand
- **React Optimization**: Use React.memo, useMemo, useCallback
- **Memory Management**: Clean up unused events and states

## Development Guidelines

1. **Type Safety**: Use TypeScript interfaces for all data structures
2. **Component Reusability**: Design components to be reusable across problems
3. **Performance**: Optimize for large datasets and smooth animations
4. **Accessibility**: Ensure all components are accessible
5. **Testing**: Write tests for algorithms, components, and hooks

## Future Enhancements

- **Collaboration**: Real-time collaborative visualizations
- **Customization**: User-defined visualizations
- **Analytics**: Track learning progress
- **AI Integration**: Intelligent hints and explanations
- **Mobile Support**: Responsive design and touch interactions 