import React from 'react';


export interface Props {
  children: React.ReactNode;
}

export interface State {
  error: Error | undefined;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): React.ReactNode {
    if (this.state.error) {
      return <div>
        error={this.state.error}
        
      </div> 
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
