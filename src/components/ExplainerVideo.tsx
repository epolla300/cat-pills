import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Subtitles, RotateCcw, FileText, CheckCircle2, Video } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface ExplainerVideoProps {
  highlightPlaceholders: boolean;
  onScrollToForm: () => void;
}

interface Chapter {
  id: number;
  timeStart: number; // in seconds
  title: string;
  subtitle: string;
  caption: string;
}

export const ExplainerVideo: React.FC<ExplainerVideoProps> = ({
  highlightPlaceholders,
  onScrollToForm,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);
  const [showScriptDrawer, setShowScriptDrawer] = useState(false);

  const totalDuration = 84; // 1m 24s

  const chapters: Chapter[] = [
    {
      id: 1,
      timeStart: 0,
      title: '01. The Silent Worry',
      subtitle: 'Why cats hide gut pain and why owners feel helpless',
      caption: 'Every morning, millions of cat owners wake up scanning their rugs for bile, hairballs, or unexplained regurgitation...',
    },
    {
      id: 2,
      timeStart: 28,
      title: '02. Why Pet Pills Fail',
      subtitle: 'The sensory anatomy of a cat & the trauma of force-pilling',
      caption: 'Cats possess over 470 bitterness receptors. Standard chalky pills cause foaming, clawing, and break the sacred bond of trust...',
    },
    {
      id: 3,
      timeStart: 56,
      title: '03. The Salmon Micro-Chew',
      subtitle: 'How our gentle dietary concept delivers relief without stress',
      caption: 'Cat Pills is a 6mm heart micro-tablet encased in wild Alaskan salmon essence that cats seek out like a gourmet treat...',
    },
  ];

  // Simulated video playback timer
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalDuration]);

  // Determine current active chapter and caption
  const currentChapter = chapters.slice().reverse().find((c) => currentTime >= c.timeStart) || chapters[0];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const handleJumpToChapter = (time: number) => {
    setCurrentTime(time);
    setIsPlaying(true);
  };

  return (
    <section id="explainer-video" className="py-16 sm:py-24 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <Video className="w-3.5 h-3.5" />
              <span>Concept Video Showcase</span>
              <span aria-hidden="true">·</span>
              <span>84 Seconds</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Watch: How Cat Pills Turns Dietary Agony into Safe, Purring Contentment
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
              See the clinical rationale, the palatability design, and why cat parents are calling this the most anticipated pet wellness concept of the year.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowScriptDrawer(!showScriptDrawer)}
              className="px-3.5 py-2 text-xs font-medium rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>{showScriptDrawer ? 'Hide Video Script' : 'View Creator Video Script & Storyboard'}</span>
            </button>
          </div>
        </div>

        {/* Video Player Card */}
        <div className="bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl relative">
          {/* Main Display Frame */}
          <div className="relative aspect-video max-h-[560px] w-full overflow-hidden flex items-center justify-center bg-black">
            <img
              src="/src/assets/images/explainer_video_thumb_1794330536028.jpg"
              alt="Veterinarian examining cat with gentle reassuring care"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-all duration-700 ${
                isPlaying ? 'scale-105 opacity-90' : 'opacity-80'
              }`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-stone-950/90 via-stone-950/20 to-stone-950/30" />

            {/* Play Button Overlay (when paused) */}
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-600/95 hover:bg-emerald-500 text-white flex items-center justify-center pl-1 shadow-xl hover:scale-110 transition-transform cursor-pointer group"
                aria-label="Play concept explainer video"
              >
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white" />
              </button>
            )}

            {/* Chapter watermark & validation tag */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs">
              <span className="bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded text-stone-200 border border-stone-700/60 font-mono">
                {currentChapter.title}
              </span>
              <PlaceholderBadge label="Video Production: In Prototype Review" isHighlighted={highlightPlaceholders} />
            </div>

            {/* Subtitles Overlay */}
            {showCaptions && (
              <div className="absolute bottom-20 left-6 right-6 z-20 flex justify-center text-center pointer-events-none">
                <p className="bg-stone-900/85 backdrop-blur-md text-white text-xs sm:text-sm md:text-base px-4 py-2 rounded-lg border border-stone-700/50 max-w-2xl font-medium shadow-md">
                  "{currentChapter.caption}"
                </p>
              </div>
            )}
          </div>

          {/* Controls Bar */}
          <div className="p-4 sm:p-5 bg-stone-950 border-t border-stone-800 space-y-3">
            {/* Scrubber timeline */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-stone-400 tabular-nums w-10">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={totalDuration}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <span className="text-xs font-mono text-stone-400 tabular-nums w-10 text-right">
                {formatTime(totalDuration)}
              </span>
            </div>

            {/* Button controls */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-white transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  onClick={() => {
                    setCurrentTime(0);
                    setIsPlaying(true);
                  }}
                  className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
                  title="Replay from beginning"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setShowCaptions(!showCaptions)}
                  className={`p-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                    showCaptions
                      ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700'
                      : 'bg-stone-800 hover:bg-stone-700 text-stone-400'
                  }`}
                  title="Toggle closed captions"
                >
                  <Subtitles className="w-4 h-4" />
                  <span className="hidden sm:inline">Captions</span>
                </button>
              </div>

              {/* Quick Chapter Shortcuts */}
              <div className="hidden lg:flex items-center gap-2 text-xs">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => handleJumpToChapter(ch.timeStart)}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      currentChapter.id === ch.id
                        ? 'bg-emerald-800 text-white font-medium'
                        : 'bg-stone-900 hover:bg-stone-800 text-stone-400'
                    }`}
                  >
                    {ch.title}
                  </button>
                ))}
              </div>

              <button
                onClick={onScrollToForm}
                className="px-3.5 py-1.5 text-xs font-semibold bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg transition-colors cursor-pointer"
              >
                Express Interest
              </button>
            </div>
          </div>
        </div>

        {/* Creator Video Production Script & Storyboard Drawer */}
        {showScriptDrawer && (
          <div className="mt-6 p-6 rounded-2xl bg-stone-950 border border-emerald-900/50 shadow-inner space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div>
                <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">
                  Demand-Testing Video Pitch Script
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  Complete 90-Second Explainer Script & Shot List
                </h3>
              </div>
              <PlaceholderBadge label="Video Script Spec: Ready For TikTok/Meta Ad Pilot" isHighlighted={highlightPlaceholders} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-300 leading-relaxed">
              <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 space-y-2">
                <span className="font-semibold text-emerald-400 block font-mono">
                  [00:00 - 00:25] ACT I: THE HOOK & EMPATHY
                </span>
                <p>
                  <strong className="text-white">Visual:</strong> Close-up of cat looking dejected beside an unfinished food bowl, then an owner nervously cleaning a carpet stain.
                </p>
                <p>
                  <strong className="text-white">Voiceover:</strong> "If you have ever woken up in the middle of the night to the awful sound of your cat retching, you know that helpless feeling. Cats hide digestive distress until it’s severe. And forcing a chalky, bitter pill down their throat only makes things worse."
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 space-y-2">
                <span className="font-semibold text-emerald-400 block font-mono">
                  [00:25 - 00:55] ACT II: THE INNOVATION
                </span>
                <p>
                  <strong className="text-white">Visual:</strong> Micro-photography of the heart-shaped salmon pill. A cat eagerly licking it off an owner's palm.
                </p>
                <p>
                  <strong className="text-white">Voiceover:</strong> "That’s why we’re designing Cat Pills. A tiny, 6mm chew infused with wild salmon and packed with slippery elm, gut-specific probiotics, and natural digestive enzymes. It tastes like a treat, but works like a clinical shield."
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 space-y-2">
                <span className="font-semibold text-emerald-400 block font-mono">
                  [00:55 - 01:24] ACT III: DEMAND CALL TO ACTION
                </span>
                <p>
                  <strong className="text-white">Visual:</strong> Vibrant, playful cat leaping into sunlight. Demand meter on screen reaching 1,000 backers.
                </p>
                <p>
                  <strong className="text-white">Voiceover:</strong> "We are in the validation phase right now. We need 1,000 cat parents to register before we start batch manufacturing. Add your email today: it’s 100% free and locks in 40% off Batch 01."
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
