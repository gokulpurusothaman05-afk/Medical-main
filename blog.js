const extraBlogsContainer = document.getElementById("extraBlogs");
const toggleBtn = document.getElementById("toggleBtn");
let isExpanded = false;

const additionalMedicalBlogs = `
    <div class="blog-card" data-aos="zoom-in">
      <div class="blog-img">
        <img src="./Assets/Pediatrics_11zon.webp" alt="Pediatrics">
      </div>
      <div class="blog-content">
        <span class="blog-tag">Pediatrics</span>
        <span class="blog-date">28 Jan 2026</span>
        <h3>Childhood Immunization Guide</h3>
        <p>A comprehensive guide for parents on the latest vaccine schedules and pediatric health safety protocols.</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

    <div class="blog-card" data-aos="zoom-in" data-aos-delay="100">
      <div class="blog-img">
        <img src="./Assets/women wellness_11zon.webp" alt="">
      </div>
      <div class="blog-content">
        <span class="blog-tag">Research</span>
        <span class="blog-date">20 Jan 2026</span>
        <h3>Breakthrough in Cancer Therapy</h3>
        <p>Our research lab has identified a new protein marker that could revolutionize early-stage cancer detection.</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

    <div class="blog-card" data-aos="zoom-in" data-aos-delay="200">
      <div class="blog-img">
          <img src="./Assets/telemedicne_11zon.webp" alt="Telemedicine">
      </div>
      <div class="blog-content">
        <span class="blog-tag">Telemedicine</span>
        <span class="blog-date">15 Jan 2026</span>
        <h3>24/7 Virtual Consultations</h3>
        <p>Expanding our digital reach: Patients can now access top specialists from home with our new portal.</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>
`;

function handleToggleBlogs() {
  if (!isExpanded) {
    // Show More
    extraBlogsContainer.innerHTML = additionalMedicalBlogs;
    toggleBtn.innerHTML = "Show Less ↑";
    isExpanded = true;

    // If you are using AOS, refresh it to recognize new elements
    if (typeof AOS !== "undefined") AOS.refresh();
  } else {
    // Show Less
    extraBlogsContainer.innerHTML = "";
    toggleBtn.innerHTML = "Show More Insights ↓";
    isExpanded = false;

    // Scroll back to the blog section smoothly
    document
      .getElementById("medical-blog")
      .scrollIntoView({ behavior: "smooth" });
  }
}
