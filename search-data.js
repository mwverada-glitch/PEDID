const topics = [
  { title: "About Our Unit", url: "aboutourunit.html" },
  { title: "สาขาวิชาโรคติดเชื้อ", url: "aboutus1.html" },
  { title: "ศูนย์...วิชาโรคติดเชื้อ", url: "aboutuscenter.html" },
  { title: "เว็บไซต์ที่เกี่ยวข้อง", url: "aboutussite.html" },

  { title: "Bacterial infections", url: "Bacterrial infec.html" },
  { title: "Mycobacterial infectious", url: "Mycobacterial infec.html" },
  { title: "Viral infection", url: "viral infections.html" },
  { title: "Fungal infectious", url: "fungal infections.html" },
  { title: "Parasitic infectious", url: "parasitic infections.html" },
  { title: "Other/Unusual infectious", url: "otherinfec.html" },

  { title: "Case Study", url: "Case Study.html" },
  { title: "Guideline", url: "Guideline.html" },
  { title: "Medical content", url: "Medical content.html" },
  { title: "ความรู้.....", url: "info.html" },
  { title: "INTERESTING", url: "interesting.html" },

  { title: "Hot Topic1", url: "hottopic1.html" },
  { title: "Hot Topic2", url: "Hottopic2.html" },
  { title: "Hot Topic3", url: "Hottopic3.html" },

  { title: "PED CMU NEWS 1", url: "News1.html" },
  { title: "PED CMU NEWS 2", url: "News2.html" },
  { title: "PED CMU NEWS 3", url: "News3.html" },

  { title: "Research Overview", url: "research_overview.html" },
  { title: "Ongoing Project", url: "research_project.html" },
  { title: "Publication", url: "publications.html" },

  { title: "PHOTO QUIZ", url: "PHOTO QUIZ.html" },
  { title: "quiz", url: "quiz.html" },

  { title: "TOPIC", url: "topic.html" },
  { title: "ทำความรู้จักกับสาขาวิชาโรคติดเชื้อ", url: "info" },
  { title: "รายชื่อบุคลากร", url: "personnel.html" },
  { title: "Contact Us", url: "contact.html" },
  { title: "EVENT", url: "Event.html" },

  { title: "Login/Register Popup", url: "login.html" },
  { title: "Training / Workshop", url: "Workshop.html" }
];


document.addEventListener("DOMContentLoaded", () => {

  const fuse = new Fuse(topics, {
    keys: ["title"],
    threshold: 0.4
  });

  const input = document.getElementById("searchInput");
  const box   = document.getElementById("searchResults");
  const btn   = document.getElementById("searchBtn");

  if (!input || !btn) return;

  // Live search
  input.addEventListener("input", function () {
    const keyword = this.value.trim();

    if (keyword === "") {
      box.innerHTML = "";
      return;
    }

    const results = fuse.search(keyword);

    if (results.length === 0) {
      box.innerHTML = "<p>ไม่พบผลลัพธ์</p>";
      return;
    }

    box.innerHTML = results
      .map(r => `<div class="result-item"><a href="${r.item.url}">${r.item.title}</a></div>`)
      .join("");
  });

  // ปุ่มค้นหา → ไปหน้าที่ตรงที่สุด
  btn.addEventListener("click", () => {
    const keyword = input.value.trim();
    if (keyword === "") return;

    const results = fuse.search(keyword);

    if (results.length > 0) {
      window.location.href = results[0].item.url;
    } else {
      alert("ไม่พบผลลัพธ์ที่ตรงกับคำค้นหา");
    }
  });

  // กด Enter เพื่อค้นหา
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btn.click();
  });

});


