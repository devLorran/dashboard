let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// adicionando classes hovered no item selecionado da lista
let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) =>
        item.classList.remove('hovered'));
        this.classList.add('hovered');
    }
    list.forEach((item) => item.addEventListener('mouseover', activeLink))

//Charts
const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');

new Chart(ctx, {
    type: 'polarArea',
    data: {
    labels: ['Facebook', 'Youtube', 'Amazon'],
    datasets: [{
        label: 'Frafêgo de likes',
        data: [12000, 1900, 3000],
        backgroundColor:[
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        ],
        // borderColor:[
        // 'rgba(255, 99, 132, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // ],
        borderWidth: 1
    }]
    },
    options: {
        responsive: true,
    }
});
new Chart(earning, {
    type: 'bar',
    data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [{
        label: 'Ganhos',
        data: [999000, 1900, 121700, 5000, 22000, 999000, 245435, 55555, 999000, 67890, 999000, 90087],
        backgroundColor:[
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        ],
        borderColor:[
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1
    }]
    },
    options: {
        responsive: true,
    }
});