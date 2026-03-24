"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Play, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
  thumbnail?: string;
  className?: string;
  aspectRatio?: "16:9" | "4:3" | "21:9";
}

/**
 * مكون مشغل الفيديو مع Lazy Loading
 * 
 * أفضل الممارسات المطبقة:
 * 1. Lazy Loading - لا يتم تحميل iframe إلا عند النقر
 * 2. Placeholder Image - صورة مصغرة قبل التشغيل
 * 3. أداء محسّن - تقليل تحميل الموارد غير الضرورية
 * 4. تصميم متجاوب - يعمل على جميع الأجهزة
 */
export function VideoPlayer({
  videoUrl,
  title = "فيديو تعليمي",
  thumbnail,
  className,
  aspectRatio = "16:9",
}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // استخراج معرف الفيديو من رابط YouTube
  const getYouTubeVideoId = useCallback((url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/shorts\/([^&\n?#]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  }, []);

  const videoId = getYouTubeVideoId(videoUrl);
  
  // إنشاء رابط الـ embed مع معاملات محسّنة
  const getEmbedUrl = useCallback((id: string): string => {
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
      hl: "ar",
      playsinline: "1",
    });
    return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
  }, []);

  // الحصول على صورة مصغرة من YouTube أو استخدام المقدمة
  const getThumbnail = useCallback((): string => {
    if (thumbnail) return thumbnail;
    if (videoId) {
      // استخدام صورة بجودة عالية
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return "";
  }, [thumbnail, videoId]);

  // نسب العرض للارتفاع
  const aspectRatioClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "21:9": "aspect-[21/9]",
  };

  // التعامل مع النقر على الفيديو
  const handlePlay = useCallback(() => {
    if (videoId) {
      setIsPlaying(true);
      setIsLoaded(true);
    }
  }, [videoId]);

  // Intersection Observer لتحميل الفيديو عند الاقتراب
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.25, rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // إذا لم يكن رابط YouTube صالحاً
  if (!videoId) {
    return (
      <div
        className={cn(
          "relative rounded-xl overflow-hidden bg-muted border border-border",
          aspectRatioClasses[aspectRatio],
          className
        )}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
          <Play className="w-12 h-12 opacity-50" />
          <p className="text-sm">رابط الفيديو غير متوفر</p>
          {videoUrl && (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:underline text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              مشاهدة على المنصة الخارجية
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative rounded-xl overflow-hidden bg-black border border-border group",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      {!isPlaying ? (
        // Placeholder مع صورة مصغرة وزر تشغيل
        <button
          onClick={handlePlay}
          className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={`تشغيل ${title}`}
        >
          {/* الصورة المصغرة */}
          <img
            src={getThumbnail()}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* طبقة داكنة */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          
          {/* زر التشغيل */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white mr-[-4px]" />
            </div>
          </div>
          
          {/* عنوان الفيديو */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white text-sm sm:text-base font-medium line-clamp-2">
              {title}
            </p>
          </div>
        </button>
      ) : (
        // iframe مشغل YouTube
        <iframe
          src={getEmbedUrl(videoId)}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
}

/**
 * مكون لعرض قائمة فيديوهات مع اختيار
 */
interface VideoPlaylistProps {
  videos: Array<{
    id: string;
    title: string;
    duration: string;
    videoUrl?: string;
    isFree: boolean;
  }>;
  currentVideoIndex: number;
  onSelectVideo: (index: number) => void;
  className?: string;
}

export function VideoPlaylist({
  videos,
  currentVideoIndex,
  onSelectVideo,
  className,
}: VideoPlaylistProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {videos.map((video, index) => (
        <button
          key={video.id}
          onClick={() => onSelectVideo(index)}
          className={cn(
            "w-full text-right p-3 rounded-lg transition-all text-sm",
            "hover:bg-muted/50",
            currentVideoIndex === index
              ? "bg-primary/10 border border-primary/30"
              : "bg-muted/30 border border-transparent"
          )}
        >
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold",
                currentVideoIndex === index
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{video.title}</p>
              <p className="text-xs text-muted-foreground">{video.duration}</p>
            </div>
            {video.isFree && (
              <span className="text-xs text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                مجاني
              </span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

export default VideoPlayer;
