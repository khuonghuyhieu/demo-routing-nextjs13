"use client";

export default function error({ error }) {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-center">
          <div className="text-9xl">Error</div>
          <div className="text-red-500 text-lg mb-4">{error.message}</div>
          <button className="bg-red-500 p-3 rounded-lg">Try again</button>
        </div>
      </div>
    </div>
  );
}
