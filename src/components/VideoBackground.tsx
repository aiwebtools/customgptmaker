
import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden py-10">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-xl overflow-hidden">
          <video 
            className="w-full h-auto rounded-xl"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source 
              src="https://s21-kling.klingai.com/bs2/upload-ylab-stunt-sgp/se/ai_portal_sgp_m2v_img2video_1080p_v16_distill/70dfea6c-9c1a-41f3-8868-ad24ba77b227_video.mp4?x-kcdn-pid=112372" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
