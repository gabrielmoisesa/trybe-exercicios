const header = document.getElementById('header-container');
header.style.backgroundColor = '#00b069';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#ff9f84';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasksHeaders.length; i += 1) {
    emergencyTasksHeaders[i].style.backgroundColor = '#a500f3';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = '#f9db5e';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let i in noEmergencyTasksHeaders) {
    noEmergencyTasksHeaders[i].style.backgroundColor = '#232525';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003533';