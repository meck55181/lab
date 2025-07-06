document.addEventListener('DOMContentLoaded', () => {
    const cursorImage = document.querySelector('.cursor-image');
  
    document.addEventListener('mousemove', (e) => {
      cursorImage.style.left = `${e.clientX}px`;
      cursorImage.style.top = `${e.clientY}px`;
    });
  });

  const video = document.querySelector('.background-video');
  video.playbackRate = 0.7;