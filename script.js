const courses = [
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    category: "Web Development",
    level: "Beginner",
    type: "Course",
    url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    provider: "freeCodeCamp",
    category: "JavaScript",
    level: "Beginner",
    type: "Course",
    url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
  },
  {
    title: "Full Stack Web Development Curriculum",
    provider: "The Odin Project",
    category: "Web Development",
    level: "Beginner",
    type: "Course",
    url: "https://www.theodinproject.com/"
  },
  {
    title: "CS50: Introduction to Computer Science",
    provider: "Harvard University",
    category: "Computer Science",
    level: "Beginner",
    type: "Course",
    url: "https://cs50.harvard.edu/x/"
  },
  {
    title: "Python Micro-Courses",
    provider: "Kaggle Learn",
    category: "Python",
    level: "Beginner",
    type: "Course",
    url: "https://www.kaggle.com/learn"
  },
  {
    title: "Intro to SQL",
    provider: "Kaggle Learn",
    category: "Data Analysis",
    level: "Beginner",
    type: "Course",
    url: "https://www.kaggle.com/learn/intro-to-sql"
  },
  {
    title: "Data Analysis with Python",
    provider: "freeCodeCamp",
    category: "Data Analysis",
    level: "Intermediate",
    type: "Course",
    url: "https://www.freecodecamp.org/learn/data-analysis-with-python/"
  },
  {
    title: "Web Development Tutorials",
    provider: "MDN Web Docs",
    category: "Web Development",
    level: "All levels",
    type: "Docs",
    url: "https://developer.mozilla.org/en-US/docs/Learn"
  },
  {
    title: "freeCodeCamp YouTube Channel",
    provider: "YouTube",
    category: "Web Development",
    level: "All levels",
    type: "Video",
    url: "https://www.youtube.com/@freecodecamp"
  },
  {
    title: "Traversy Media",
    provider: "YouTube",
    category: "Web Development",
    level: "Beginner",
    type: "Video",
    url: "https://www.youtube.com/@TraversyMedia"
  },
  {
    title: "The Net Ninja",
    provider: "YouTube",
    category: "JavaScript",
    level: "Beginner",
    type: "Video",
    url: "https://www.youtube.com/@NetNinja"
  },
  {
    title: "Corey Schafer",
    provider: "YouTube",
    category: "Python",
    level: "All levels",
    type: "Video",
    url: "https://www.youtube.com/@coreyms"
  },
  {
    title: "NetworkChuck",
    provider: "YouTube",
    category: "Cybersecurity",
    level: "Beginner",
    type: "Video",
    url: "https://www.youtube.com/@NetworkChuck"
  },
  {
    title: "Fireship",
    provider: "YouTube",
    category: "Web Development",
    level: "Intermediate",
    type: "Video",
    url: "https://www.youtube.com/@Fireship"
  },
  {
    title: "Git and GitHub Handbook",
    provider: "freeCodeCamp",
    category: "Tools",
    level: "Beginner",
    type: "Article",
    url: "https://www.freecodecamp.org/news/tag/git/"
  }
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