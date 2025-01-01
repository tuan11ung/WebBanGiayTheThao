const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector(".theme-toggler")

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

 // Sales Chart
 const salesCtx = document.getElementById('salesChart').getContext('2d');
 new Chart(salesCtx, {
     type: 'bar',
     data: {
         labels: ['January', 'February', 'March', 'April', 'May'],
         datasets: [{
             label: 'Sales (in VND)',
             data: [50000000, 60000000, 70000000, 80000000, 90000000],
             backgroundColor: 'rgba(54, 162, 235, 0.6)',
         }]
     }
 });

 // Revenue Chart
 const revenueCtx = document.getElementById('revenueChart').getContext('2d');
 new Chart(revenueCtx, {
     type: 'line',
     data: {
         labels: ['January', 'February', 'March', 'April', 'May'],
         datasets: [{
             label: 'Revenue (in VND)',
             data: [100000000, 120000000, 140000000, 160000000, 180000000],
             backgroundColor: 'rgba(75, 192, 192, 0.2)',
             borderColor: 'rgba(75, 192, 192, 1)',
             borderWidth: 2
         }]
     }
 });