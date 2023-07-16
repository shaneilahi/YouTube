const videos = [
  {
    videoTitle: "Why Planes Don't Fly Over Tibet",
    videoLink: 'https://www.youtube.com/watch?v=fNVa1qMbF9Y',
    videoTime: '10::13',
    videoStats: '6.6M views &#183; 1 year ago',
    thumbnail: 'thumbnails/thumbnail-7.webp',
    channelProfilePic: 'channel-logos/channel-7.jpeg',
    channelLink: 'https://www.youtube.com/channel/UCP5tjEmvPItGyLhmjdwP7Ww',
    channelName: 'RealLifeLore'
  },
  {
    videoTitle: "Inside The World's Biggest Passenger Plane",
    videoLink: 'https://www.youtube.com/watch?v=lFm4EM1juls',
    videoTime: '7:12',
    videoStats: '3.7M views &#183; 10 months ago',
    thumbnail: 'thumbnails/thumbnail-8.webp',
    channelProfilePic: 'channel-logos/channel-8.jpeg',
    channelLink: 'https://www.youtube.com/channel/UCHAK6CyegY22Zj2GWrcaIxg',
    channelName: 'Tech Vision'
  },
  {
    videoTitle: "The SECRET to Super Human STRENGTH",
    videoLink: 'https://www.youtube.com/watch?v=ixmxOlcrlUc',
    videoTime: '13:17',
    videoStats: '20M views &#183; 3 year ago',
    thumbnail: 'thumbnails/thumbnail-9.webp',
    channelProfilePic: 'channel-logos/channel-9.jpeg',
    channelLink: 'https://www.youtube.com/c/OFFICIALTHENXSTUDIOS',
    channelName: 'ThenX'
  },
  {
    videoTitle: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
    videoLink: 'https://www.youtube.com/watch?v=R2vXbFp5C9o',
    videoTime: '7:53',
    videoStats: '14M views &#183; 1 year ago',
    thumbnail: 'thumbnails/thumbnail-10.webp',
    channelProfilePic: 'channel-logos/channel-10.jpeg',
    channelLink: 'https://www.youtube.com/user/businessinsider',
    channelName: 'Business Insider'
  },
  {
    videoTitle: "Dubai's Crazy Underwater Train and Other Things #Only in Dubai",
    videoLink: 'https://www.youtube.com/watch?v=0nZuYyXET3s',
    videoTime: '4:10',
    videoStats: '3M views &#183; 1 year ago',
    thumbnail: 'thumbnails/thumbnail-11.webp',
    channelProfilePic: 'channel-logos/channel-11.jpeg',
    channelLink: 'https://www.youtube.com/c/Destinationtips',
    channelName: 'Destination Tips',
  },
  {
    videoTitle: "What would happen if you didn’t drink water? - Mia Nacamulli",
    videoLink: 'https://youtu.be/9iMGFqMmUFs',
    videoTime: '4:51',
    videoStats: '12M views &#183; 5 year ago',
    thumbnail: 'thumbnails/thumbnail-12.webp',
    channelProfilePic: 'channel-logos/channel-12.jpeg',
    channelLink: 'https://www.youtube.com/@TEDEd',
    channelName: 'TED-Ed',
  },
];

let videosHtml = '';

videos.forEach(video => {
  videosHtml += `
        <div class="video-preview">
          <div class="thumbnail-row">
            <a href="${video.videoLink}">
              <img class="thumbnail" src="${video.thumbnail}">
            </a>
            <div class="video-time">${video.videoTime}</div>
          </div>
          <div class="video-info-grid">
            <div class="channel-pic">
              <a href="${video.channelLink}">
                <img class="profile-pic" src="${video.channelProfilePic}">
              </a>
            </div>
            <div class="video-info">
              <p class="video-title">
                <a href="${video.videoLink}" class="video-link">${video.videoTitle}</a>
              </p>
              <p class="video-author">
                <a href="${video.channelLink}" class="channel-link">${video.channelName}</a>
              </p>
              <p class="video-stats">${video.videoStats}</p>
            </div>
          </div>
        </div>
  `
})

console.log(videosHtml);

document.querySelector('.video-grid')
  .innerHTML += videosHtml;