// Core Problem Types
export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
  examples: Example[];
  solutions: Solution[];
  metadata?: ProblemMetadata;
}

export interface ProblemMetadata {
  leetcodeId?: string;
  hackerrankId?: string;
  source?: string;
  relatedProblems?: string[];
}

export interface Example {
  id: string;
  name: string;
  input: any;
  output: any;
  explanation?: string;
  isDefault?: boolean;
}

// Solution Types
export interface Solution {
  id: string;
  name: string;
  description: string;
  code: string;
  timeComplexity: string;
  spaceComplexity: string;
  algorithm: Algorithm;
  language?: 'javascript' | 'typescript' | 'python';
}

export interface Algorithm {
  name: string;
  execute: (input: any) => Event[];
  validate?: (input: any) => boolean;
}

// Event Log System
export interface Event {
  id: string;
  type: string;
  timestamp: number;
  data: any;
  description: string;
  metadata?: EventMetadata;
}

export interface EventMetadata {
  lineNumber?: number;
  variables?: Record<string, any>;
  callStack?: string[];
  performance?: {
    timeElapsed: number;
    memoryUsed?: number;
  };
}

export interface EventLog {
  events: Event[];
  currentIndex: number;
  cache: Map<string, Event[]>;
  maxCacheSize: number;
}

// Visualization Types
export interface VisualizationModel {
  initialState: any;
  currentState: any;
  updateState(event: Event): void;
  reset(): void;
  getStateAt(index: number): any;
  getStateSnapshot(): any;
}

export interface VisualizationConfig {
  type: 'canvas' | 'svg' | 'html' | 'custom';
  width: number;
  height: number;
  backgroundColor?: string;
  animationDuration?: number;
  theme?: 'light' | 'dark';
}

// Playback Control Types
export interface PlaybackState {
  isPlaying: boolean;
  currentIndex: number;
  speed: number;
  isReversed: boolean;
  autoPlay: boolean;
  loop: boolean;
}

export interface PlaybackControls {
  play(): void;
  pause(): void;
  stepForward(): void;
  stepBackward(): void;
  goTo(index: number): void;
  setSpeed(speed: number): void;
  reset(): void;
}

// Input Management Types
export interface InputForm {
  id: string;
  type: 'number' | 'string' | 'array' | 'object' | 'custom';
  label: string;
  placeholder?: string;
  validation?: InputValidation;
  defaultValue?: any;
}

export interface InputValidation {
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
}

export interface InputState {
  values: Record<string, any>;
  errors: Record<string, string>;
  isValid: boolean;
  isDirty: boolean;
}

// UI Component Types
export interface ControlProps {
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface VisualizationProps {
  model: VisualizationModel;
  config: VisualizationConfig;
  events: Event[];
  currentIndex: number;
  onStateChange?: (state: any) => void;
}

// Code Display Types
export interface CodeDisplayProps {
  code: string;
  language: string;
  currentLine?: number;
  highlightedLines?: number[];
  variables?: Record<string, any>;
  callStack?: string[];
}

// Performance Types
export interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  eventCount: number;
  cacheHitRate: number;
}

// Cache Types
export interface CacheEntry {
  key: string;
  events: Event[];
  timestamp: number;
  size: number;
}

export interface CacheConfig {
  maxSize: number;
  maxAge: number;
  strategy: 'lru' | 'fifo' | 'lfu';
}

// Theme Types
export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    accent: string;
  };
  fonts: {
    body: string;
    heading: string;
    code: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// Error Types
export interface AlgorithmError {
  type: 'validation' | 'execution' | 'visualization' | 'system';
  message: string;
  details?: any;
  timestamp: number;
}

// Analytics Types
export interface UserInteraction {
  type: 'play' | 'pause' | 'step' | 'reset' | 'example_select' | 'solution_change';
  timestamp: number;
  data?: any;
}

export interface LearningProgress {
  problemId: string;
  solutionId: string;
  timeSpent: number;
  stepsCompleted: number;
  examplesViewed: string[];
  completed: boolean;
} 