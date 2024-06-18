export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center mb-16">
        <code className="font-mono font-bold text-4xl">timetracking.live</code>
      </div>

      <div className="flex flex-col h-full items-center justify-center mb-16">
        <video
          className="relative"
          src="https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/timetracking.mp4"
          width="800"
          height="600"
          controls
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
        <p className="mt-2">
          * Video Demo of current localhost dashboard... I will be adding my
          live timetracking as well to this in s5
        </p>
      </div>

      <button>
        <a
          href="https://x.com/intent/user?screen_name=haseab_"
          className="bg-gray-100 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
        >
          Follow me on Twitter
        </a>
      </button>
    </main>
  );
}
