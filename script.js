// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Add smooth scroll to all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example Climate Data for CO2 Levels
    const co2Data = {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Global CO2 Concentrations (ppm)',
            data: [404.41, 406.55, 408.52, 411.28, 413.94, 416.45, 419.00],
            backgroundColor: 'rgba(22, 160, 133, 0.2)',
            borderColor: 'rgba(22, 160, 133, 1)',
            borderWidth: 2
        }]
    };

    const co2Config = {
        type: 'line',
        data: co2Data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    };

    // Initialize the CO2 Chart if the canvas element exists
    const co2Canvas = document.getElementById('co2Chart');
    if (co2Canvas) {
        const co2Chart = new Chart(co2Canvas, co2Config);
    }

    // Add basic animation to the header
    const header = document.querySelector('header');
    header.style.opacity = 0;
    setTimeout(() => {
        header.style.transition = "opacity 2s";
        header.style.opacity = 1;
    }, 500);

});

// Example function for button interaction (optional)
function showMessage() {
    alert("Thank you for visiting Giatales!");
}
