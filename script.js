document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".auto-type", {
      strings: ["Efficiency", "Insights", "Impact"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
  
    var tabLinks = document.querySelectorAll(".tab-links");
    var tabContents = document.querySelectorAll(".tab-contents");
  
    
    document.body.addEventListener("click", function(event) {
      var target = event.target;
  
     
      if (target.classList.contains("tab-links")) {
        var tabName = target.getAttribute("data-tabname");
  
        tabLinks.forEach(function(link) {
          link.classList.remove("active-link");
        });
  
        tabContents.forEach(function(content) {
          content.classList.remove("active-tab");
        });
  
        target.classList.add("active-link");
        document.getElementById(tabName).classList.add("active-tab");
      }
    });
  
  
      var homeBar = document.getElementById("home-bar");
      var homeSection = document.getElementById("home");
    
        homeBar.addEventListener("click", function(event) {
        event.preventDefault();
        homeSection.scrollIntoView({ behavior: "smooth" });
      });
  
        var aboutBar = document.getElementById("learn-bar");
        var aboutSection = document.getElementById("more");
    
        aboutBar.addEventListener("click", function(event) {
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth" });
      });
  
      var learnMoreButton = document.getElementById("learn-more-button");
      var aboutMeSection = document.getElementById("more");
    
      learnMoreButton.addEventListener("click", function(event) {
        event.preventDefault();
        aboutMeSection.scrollIntoView({ behavior: "smooth" });
      });
  
  
      var EHRBar = document.getElementById("EHR-bar");
      var EHRSection = document.getElementById("EHR");
    
        EHRBar.addEventListener("click", function(event) {
        event.preventDefault();
        EHRSection.scrollIntoView({ behavior: "smooth" });
      });
  
      var CDSSBar = document.getElementById("CDSS-bar");
      var CDSSSection = document.getElementById("CDSS");
    
        CDSSBar.addEventListener("click", function(event) {
        event.preventDefault();
        CDSSSection.scrollIntoView({ behavior: "smooth" });
      });
  
      var PACSBar = document.getElementById("PACS-bar");
      var PACSSection = document.getElementById("PACS");
    
        PACSBar.addEventListener("click", function(event) {
        event.preventDefault();
        PACSSection.scrollIntoView({ behavior: "smooth" });
      });

      var overviewBar = document.getElementById("overview-bar");
      var overviewSection = document.getElementById("overview");
    
        overviewBar.addEventListener("click", function(event) {
        event.preventDefault();
        overviewSection.scrollIntoView({ behavior: "smooth" });
      });
  
    });