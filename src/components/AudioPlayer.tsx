import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Radio } from "lucide-react";

interface AudioPlayerProps {
  streamUrl?: string;
}

const AudioPlayer = ({ streamUrl = "https://player.dreamcode.ng/radio2" }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing audio:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow effect behind player */}
      <div className="absolute inset-0 gradient-gold opacity-20 blur-3xl rounded-full scale-110" />
      
      {/* Main player container */}
      <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-6 md:p-8 shadow-player">
        {/* Live indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="relative flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 ${isPlaying ? '' : 'hidden'}`} />
            <span className={`relative inline-flex rounded-full h-3 w-3 ${isPlaying ? 'bg-red-500' : 'bg-muted-foreground'}`} />
          </span>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {isPlaying ? "Live Now" : "Ready to Stream"}
          </span>
        </div>

        {/* Equalizer visualization */}
        <div className="flex items-end justify-center gap-1 h-16 mb-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`w-2 rounded-full transition-all duration-150 ${
                isPlaying ? "gradient-gold" : "bg-muted"
              }`}
              style={{
                height: isPlaying ? `${Math.random() * 60 + 20}%` : "20%",
                animationDelay: `${i * 0.1}s`,
                transition: isPlaying ? "height 0.15s ease" : "height 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Play button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="relative group w-20 h-20 rounded-full gradient-gold shadow-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:opacity-70"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isLoading ? (
              <div className="w-8 h-8 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-8 h-8 text-primary-foreground ml-0" fill="currentColor" />
            ) : (
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            )}
            
            {/* Pulse ring when playing */}
            {isPlaying && (
              <span className="absolute inset-0 rounded-full gradient-gold animate-ping opacity-30" />
            )}
          </button>
        </div>

        {/* Volume controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={toggleMute}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          
          <div className="relative w-32 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 gradient-gold rounded-full transition-all"
              style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Volume"
            />
          </div>
        </div>

        {/* Stream info */}
        <div className="mt-6 pt-6 border-t border-border flex items-center justify-center gap-2 text-muted-foreground">
          <Radio className="w-4 h-4" />
          <span className="text-xs uppercase tracking-wider">
            Gospel Music • 24/7 Streaming
          </span>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={streamUrl}
        preload="none"
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default AudioPlayer;
