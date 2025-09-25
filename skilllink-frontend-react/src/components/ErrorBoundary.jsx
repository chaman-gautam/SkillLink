import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-navy p-8">
          <div className="glassmorphism p-8 rounded-2xl text-center max-w-md">
            <div className="text-6xl mb-4">😵</div>
            <h2 className="text-2xl font-bold mb-4 text-red-400">
              Something went wrong
            </h2>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-500 px-6 py-3 rounded-lg glow"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
