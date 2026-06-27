"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-screen">
      <div className="error-content">
        <h2>Something went wrong</h2>
        <p>An unexpected error occurred. Please try again.</p>
        <button onClick={() => reset()} className="btn btn-primary">
          Try again
        </button>
      </div>
    </div>
  );
}
