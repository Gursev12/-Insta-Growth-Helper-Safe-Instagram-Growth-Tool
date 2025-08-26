// Hashtag Generator
function generateHashtags() {
  const topic = document.getElementById("hashtagInput").value;
  const output = document.getElementById("hashtags");

  if (!topic) {
    output.innerHTML = "⚠️ Please enter a topic!";
    return;
  }

  const hashtags = [
    `#${topic}`,
    `#${topic}Life`,
    `#${topic}Goals`,
    `#${topic}Vibes`,
    `#${topic}Community`,
    `#trending${topic}`,
    `#viral${topic}`
  ];

  output.innerHTML = "✨ Suggested Hashtags:<br>" + hashtags.join(" ");
}

// Best Time Finder
function suggestTime() {
  const times = [
    "Morning (9AM - 11AM)",
    "Afternoon (1PM - 3PM)",
    "Evening (6PM - 8PM)",
    "Late Night (10PM - 12AM)"
  ];
  const pick = times[Math.floor(Math.random() * times.length)];
  document.getElementById("bestTime").innerText = "✅ Best Time: " + pick;
}

// Engagement Tracker
function trackEngagement() {
  const likes = parseInt(document.getElementById("likes").value) || 0;
  const comments = parseInt(document.getElementById("comments").value) || 0;
  const shares = parseInt(document.getElementById("shares").value) || 0;

  const score = likes + (comments * 2) + (shares * 3);
  document.getElementById("engagementScore").innerText = `⭐ Engagement Score: ${score}`;
}

// Reply Template
function replyTemplate() {
  const templates = [
    "Thanks a lot for your support! 🙌",
    "Glad you liked it 💯🔥",
    "Stay tuned for more content 🚀",
    "Appreciate your comment ❤️"
  ];
  const pick = templates[Math.floor(Math.random() * templates.length)];
  document.getElementById("reply").innerText = pick;
}
