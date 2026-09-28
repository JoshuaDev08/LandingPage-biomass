import { useEffect, useState } from "react";
import LoadingScreen from "./loadingScreen";

interface AssetPreloaderProps {
  images: string[];
  video: string;
  children: React.ReactNode;
}

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve();
    image.onerror = () => reject(new Error(`Failed to load image: ${src}`));

    image.src = src;
  });
};

const preloadVideo = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");

    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;

    const handleReady = () => {
      cleanup();
      resolve();
    };

    const handleError = () => {
      cleanup();
      reject(new Error(`Failed to load video: ${src}`));
    };

    const cleanup = () => {
      video.removeEventListener("canplay", handleReady);
      video.removeEventListener("error", handleError);
    };

    video.addEventListener("canplay", handleReady);
    video.addEventListener("error", handleError);

    video.src = src;
    video.load();
  });
};

export default function AssetPreloader({
  images,
  video,
  children,
}: AssetPreloaderProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadAssets = async () => {
      try {
        await Promise.all([...images.map(preloadImage), preloadVideo(video)]);

        if (mounted) {
          setIsReady(true);
        }
      } catch (error) {
        console.error("Asset preload failed:", error);

        // Don't leave the user stuck on the loading screen
        if (mounted) {
          setIsReady(true);
        }
      }
    };

    loadAssets();

    return () => {
      mounted = false;
    };
  }, [images, video]);

  if (!isReady) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}
