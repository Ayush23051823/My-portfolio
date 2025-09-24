// Animate skill bars
document.addEventListener("DOMContentLoaded", () => {
  const meters = document.querySelectorAll(".meter > i");
  meters.forEach((m,i) => {
    const w = m.getAttribute("data-width") || "70%";
    setTimeout(() => { m.style.width = w; }, i*300);
  });

  // Project modal
  const modal = document.getElementById("projectModal");
  const modalTitle = modal.querySelector("h4");
  const modalDesc = modal.querySelector("p");
  const closeBtn = modal.querySelector(".close-btn");
  closeBtn.onclick = () => modal.classList.remove("show");

  window.openProject = (id) => {
    const projects = {
      1:['Courier Service Management System','A complete courier management solution: booking, tracking, admin panel, notifications, automated routing. React + Django + PostgreSQL + AWS.'],
      2:['StudyBuddy','Study planner app with scheduling, reminders, and analytics.'],
      3:['Algo Visualizer','Interactive visualizations for sorting and graph algorithms.']
    };
    modalTitle.textContent = projects[id][0];
    modalDesc.textContent = projects[id][1];
    modal.classList.add("show");
  };
});

// Contact mailto
function handleContact(e){
  e.preventDefault();
  const fd = new FormData(e.target);
  const name = fd.get('name');
  const email = fd.get('email');
  const subject = fd.get('subject') || 'Message from portfolio';
  const message = fd.get('message');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:ayush@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}

// Current year
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());
});
