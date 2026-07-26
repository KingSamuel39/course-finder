const courses = [

  // ---------- AI Engineering ----------
  { title: "LLM & AI Agents Course", provider: "Hugging Face", category: "AI Engineering", level: "Intermediate", type: "Course", url: "https://huggingface.co/learn" },
  { title: "Short Courses on Building with LLMs", provider: "DeepLearning.AI", category: "AI Engineering", level: "Intermediate", type: "Course", url: "https://www.deeplearning.ai/short-courses/" },
  { title: "Neural Networks: Zero to Hero", provider: "Andrej Karpathy", category: "AI Engineering", level: "Advanced", type: "Video", url: "https://www.youtube.com/@AndrejKarpathy" },

  // ---------- Android Development ----------
  { title: "Android Basics with Compose", provider: "Google", category: "Android Development", level: "Beginner", type: "Course", url: "https://developer.android.com/courses/android-basics-compose/course" },
  { title: "Official Android Developer Docs", provider: "Google", category: "Android Development", level: "All levels", type: "Docs", url: "https://developer.android.com/" },
  { title: "Philipp Lackner", provider: "YouTube", category: "Android Development", level: "Beginner", type: "Video", url: "https://www.youtube.com/@PhilippLackner" },

  // ---------- Backend Development ----------
  { title: "Back End Development and APIs", provider: "freeCodeCamp", category: "Backend Development", level: "Beginner", type: "Course", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" },
  { title: "Node.js & Express Tutorials", provider: "The Net Ninja", category: "Backend Development", level: "Beginner", type: "Video", url: "https://www.youtube.com/@NetNinja" },
  { title: "Traversy Media", provider: "YouTube", category: "Backend Development", level: "Beginner", type: "Video", url: "https://www.youtube.com/@TraversyMedia" },

  // ---------- DevOps Engineering ----------
  { title: "DevOps Tutorials & Roadmap", provider: "TechWorld with Nana", category: "DevOps Engineering", level: "Beginner", type: "Video", url: "https://www.youtube.com/@TechWorldwithNana" },
  { title: "Free Hands-on DevOps Labs", provider: "KodeKloud", category: "DevOps Engineering", level: "Beginner", type: "Course", url: "https://kodekloud.com/" },
  { title: "Linux & Docker Basics", provider: "NetworkChuck", category: "DevOps Engineering", level: "Beginner", type: "Video", url: "https://www.youtube.com/@NetworkChuck" },

  // ---------- Frontend Development ----------
  { title: "The Odin Project — Foundations", provider: "The Odin Project", category: "Frontend Development", level: "Beginner", type: "Course", url: "https://www.theodinproject.com/paths/foundations/courses/foundations" },
  { title: "Responsive Web Design", provider: "freeCodeCamp", category: "Frontend Development", level: "Beginner", type: "Course", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
  { title: "CSS & Web Design", provider: "Kevin Powell", category: "Frontend Development", level: "Beginner", type: "Video", url: "https://www.youtube.com/@KevinPowell" },
  { title: "MDN Web Docs", provider: "Mozilla", category: "Frontend Development", level: "All levels", type: "Docs", url: "https://developer.mozilla.org/en-US/docs/Learn" },

  // ---------- Full-Stack Development ----------
  { title: "Full Stack JavaScript Path", provider: "The Odin Project", category: "Full-Stack Development", level: "Beginner", type: "Course", url: "https://www.theodinproject.com/paths/full-stack-javascript" },
  { title: "Full Stack Open", provider: "University of Helsinki", category: "Full-Stack Development", level: "Intermediate", type: "Course", url: "https://fullstackopen.com/en/" },
  { title: "freeCodeCamp", provider: "YouTube", category: "Full-Stack Development", level: "All levels", type: "Video", url: "https://www.youtube.com/@freecodecamp" },

  // ---------- Game Development ----------
  { title: "CS50's Intro to Game Development", provider: "Harvard University", category: "Game Development", level: "Beginner", type: "Course", url: "https://cs50.harvard.edu/games/" },
  { title: "Unity Learn", provider: "Unity", category: "Game Development", level: "Beginner", type: "Course", url: "https://learn.unity.com/" },
  { title: "Godot Tutorials", provider: "GDQuest", category: "Game Development", level: "Beginner", type: "Course", url: "https://www.gdquest.com/" },
  { title: "Brackeys", provider: "YouTube", category: "Game Development", level: "Beginner", type: "Video", url: "https://www.youtube.com/@Brackeys" },

  // ---------- iOS Development ----------
  { title: "100 Days of SwiftUI", provider: "Hacking with Swift", category: "iOS Development", level: "Beginner", type: "Course", url: "https://www.hackingwithswift.com/100/swiftui" },
  { title: "CS193p — Developing Apps for iOS", provider: "Stanford University", category: "iOS Development", level: "Intermediate", type: "Course", url: "https://cs193p.stanford.edu/" },
  { title: "Sean Allen", provider: "YouTube", category: "iOS Development", level: "Beginner", type: "Video", url: "https://www.youtube.com/@seanallen" },

  // ---------- Machine Learning ----------
  { title: "Machine Learning Specialization", provider: "Andrew Ng · Coursera", category: "Machine Learning", level: "Beginner", type: "Course", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
  { title: "Intro to Machine Learning", provider: "Kaggle Learn", category: "Machine Learning", level: "Beginner", type: "Course", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
  { title: "Practical Deep Learning", provider: "fast.ai", category: "Machine Learning", level: "Intermediate", type: "Course", url: "https://course.fast.ai/" },
  { title: "StatQuest", provider: "YouTube", category: "Machine Learning", level: "Beginner", type: "Video", url: "https://www.youtube.com/@statquest" },

  // ---------- UI/UX Design ----------
  { title: "Google UX Design Certificate", provider: "Google · Coursera", category: "UI/UX Design", level: "Beginner", type: "Course", url: "https://www.coursera.org/professional-certificates/google-ux-design" },
  { title: "Figma for Beginners", provider: "Figma", category: "UI/UX Design", level: "Beginner", type: "Video", url: "https://www.youtube.com/@Figma" },
  { title: "DesignCourse", provider: "YouTube", category: "UI/UX Design", level: "Beginner", type: "Video", url: "https://www.youtube.com/@DesignCourse" },
  { title: "AJ&Smart", provider: "YouTube", category: "UI/UX Design", level: "Beginner", type: "Video", url: "https://www.youtube.com/@AJSmart" }
];

const palette = [
  { bg: "#FDEBE3", pill: "#E8734A" },
  { bg: "#F3E8FB", pill: "#B45FD8" },
  { bg: "#EFE7E4", pill: "#9C6B63" },
  { bg: "#E6F4EA", pill: "#4CAF7D" },
  { bg: "#E4EEFB", pill: "#4A7FD4" },
  { bg: "#FBE9EF", pill: "#D9628A" },
  { bg: "#FDF3DC", pill: "#C99A16" },
  { bg: "#E6F1F1", pill: "#47908F" }
];

const categoryView = document.getElementById("categoryView");
const detailView = document.getElementById("detailView");
const categoryGrid = document.getElementById("categoryGrid");
const detailTitle = document.getElementById("detailTitle");
const typeTabs = document.getElementById("typeTabs");
const detailContent = document.getElementById("detailContent");
const backBtn = document.getElementById("backBtn");
const searchInput = document.getElementById("searchInput");
const searchView = document.getElementById("searchView");
const searchTitle = document.getElementById("searchTitle");
const searchContent = document.getElementById("searchContent");

function makeCode(name) {
  return name.slice(0, 3).toUpperCase() + "101";
}

function showCategories() {
    searchInput.value = "";
  detailView.classList.add("hidden");
  searchView.classList.add("hidden");
  categoryView.classList.remove("hidden");
  categoryGrid.innerHTML = "";

  const categories = [...new Set(courses.map(c => c.category))];

  categories.forEach(function (name, index) {
    const colors = palette[index % palette.length];
    const count = courses.filter(c => c.category === name).length;

    const card = document.createElement("div");
    card.className = "category-card";
    card.style.background = colors.bg;
    card.innerHTML = `
      <span class="code-pill" style="background:${colors.pill}">${makeCode(name)}</span>
      <h3>${name}</h3>
      <p class="count">${count}+ resources</p>
    `;

    card.addEventListener("click", function () {
      showCategory(name);
    });

    categoryGrid.appendChild(card);
  });
}

function showCategory(name) {
  categoryView.classList.add("hidden");
  searchView.classList.add("hidden");
  detailView.classList.remove("hidden");
  detailTitle.textContent = name;
  typeTabs.innerHTML = "";

  const matches = courses.filter(c => c.category === name);
  const types = [...new Set(matches.map(c => c.type))];

  types.forEach(function (type, index) {
    const tab = document.createElement("button");
    tab.className = "tab";
    tab.textContent = type;

    tab.addEventListener("click", function () {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderResources(matches, type);
    });

    typeTabs.appendChild(tab);

    if (index === 0) {
      tab.classList.add("active");
      renderResources(matches, type);
    }
  });
}

function renderResources(list, type) {
  detailContent.innerHTML = "";

  list
    .filter(c => c.type === type)
    .forEach(function (course) {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <h4>${course.title}</h4>
        <p class="provider">${course.provider} &middot; ${course.level}</p>
        <a href="${course.url}" target="_blank">Open resource</a>
      `;
      detailContent.appendChild(card);
    });
}

backBtn.addEventListener("click", showCategories);

showCategories();

function showSearch(matches, term) {
  categoryView.classList.add("hidden");
  detailView.classList.add("hidden");
  searchView.classList.remove("hidden");

  searchTitle.textContent = `${matches.length} result${matches.length === 1 ? "" : "s"} for "${term}"`;
  searchContent.innerHTML = "";

  if (matches.length === 0) {
    searchContent.innerHTML = `<p class="empty">Nothing found. Try another word.</p>`;
    return;
  }

  matches.forEach(function (course) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h4>${course.title}</h4>
      <p class="provider">${course.provider} &middot; ${course.category} &middot; ${course.type}</p>
      <a href="${course.url}" target="_blank">Open resource</a>
    `;
    searchContent.appendChild(card);
  });
}

searchInput.addEventListener("input", function () {
  const term = searchInput.value.trim().toLowerCase();

  if (term === "") {
    showCategories();
    return;
  }

  const matches = courses.filter(function (c) {
    return (
      c.title.toLowerCase().includes(term) ||
      c.provider.toLowerCase().includes(term) ||
      c.category.toLowerCase().includes(term)
    );
  });

  showSearch(matches, term);
});
