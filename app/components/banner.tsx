"use client";

export default function Banner() {
  const urlQuery = new URLSearchParams(window.location.search);
  const ani = urlQuery.get("ani");
  const dnis = urlQuery.get("dnis");
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        BFCC Dispatcher
      </h1>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Customer Phone Number: {ani || "Not Provided"}
      </p>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Dialed Phone Number: {dnis || "Not Provided"}
      </p>
      <p>
        {urlQuery.toString() === "" ? (
          <span className="text-red-500">No query parameters provided.</span>
        ) : (
          <span className="text-green-500">{urlQuery.toString()}</span>
        )}
      </p>
    </div>
  );
}
