const frontCtx = document.getElementById('skillsFront').getContext('2d');
const backCtx = document.getElementById('skillsBack').getContext('2d');
const workCtx = document.getElementById('skillsWork').getContext('2d');
const skillCtx = document.getElementById('skillsSoft').getContext('2d');

new Chart(frontCtx, {
    type: 'radar',
    data: {
        labels: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'TailwindCSS',
            'Bootstrap',
            'React',
            'Angular',
            'Vue.js',
            'SASS - SCSS',
            'Flutter'
        ],
        datasets: [{
            label: 'Niveau',
            data: [9, 8, 7, 7, 8, 6, 7, 5, 6, 7],
            backgroundColor: 'rgba(138, 43, 226, 0.2)',
            borderColor: 'rgba(138, 43, 226, 1)',
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 10,
                pointLabels: {
                    color: '#fff',
                    font: { size: 14 }
                },
                ticks: {
                    color: '#999',
                    backdropColor: 'transparent'
                },
                angleLines: {
                    color: '#39ff14'
                },
                grid: {
                    color: '#39ff14'
                }
            }
        },
        plugins: {
            legend:
            {
                labels:
                {
                    color: '#fff',
                    font: { weight: 'bold' }
                }
            }
        }
    }
});

new Chart(backCtx, {
    type: 'radar',
    data: {
        labels: [
            'Java',
            'Python',
            'PHP',
            'Node.js',
            'SQL',
            'Spring Boot',
            'Symfony',
            'Django',
            'Laravel',
            'Java Servlets',
            'API REST',
            'JSON'
        ],
        datasets: [{
            label: 'Niveau',
            data: [7, 6, 7, 5, 7, 7, 7, 6, 4, 6, 6, 7],
            backgroundColor: 'rgba(0, 255, 0, 0.15)',
            borderColor: 'rgba(0, 255, 0, 1)',
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 10,
                pointLabels: {
                    color: '#fff',
                    font: { size: 14 }
                },
                ticks: {
                    color: '#999',
                    backdropColor: 'transparent'
                },
                angleLines: {
                    color: '#8a2be2'
                },
                grid: {
                    color: '#8a2be2'
                }
            }
        },
        plugins: {
            legend:
            {
                labels:
                {
                    color: '#fff',
                    font: { weight: 'bold' }
                }
            }
        }
    }
});


new Chart(workCtx, {
    type: 'radar',
    data: {
        labels: [
            'Git',
            'Github',
            'Notion',
            'Scrum - Agile',
            'VS Code',
            'IntelliJ',
            'Postman',
            'Docker',
            'Maven',
            'Figma',
            'Jira',
            'Trello',
            'Markdown'
        ],
        datasets: [{
            label: 'Niveau',
            data: [9, 8, 7, 7, 8, 7, 8, 6, 7, 8, 7, 7, 9],
            backgroundColor: 'rgba(0, 255, 0, 0.15)',
            borderColor: 'rgba(0, 255, 0, 1)',
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 10,
                pointLabels: {
                    color: '#fff',
                    font: { size: 14 }
                },
                ticks: {
                    color: '#666',
                    backdropColor: 'transparent'
                },
                angleLines: {
                    color: '#8a2be2'
                },
                grid: {
                    color: '#8a2be2'
                }
            }
        },
        plugins: {
            legend:
            {
                labels:
                {
                    color: '#fff',
                    font: { weight: 'bold' }
                }
            }
        }
    }
});



new Chart(skillCtx, {
    type: 'radar',
    data: {
        labels:
            ['Autonomie',
                'Résilience',
                'Créativité',
                'Adaptabilité',
                'Sens du détail',
                'Communication',
                'Gestion du stress',
                'Gestion du temps',
                'Curiosité',
                'Travail en équipe',
                'Capacité d\'apprentisage'
            ],
        datasets: [{
            label: 'Niveau',
            data: [9, 8, 7, 8, 9, 7, 8, 7, 9, 8, 9],
            backgroundColor: 'rgba(138, 43, 226, 0.2)',
            borderColor: 'rgba(138, 43, 226, 1)',
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 10,
                pointLabels: {
                    color: '#fff',
                    font: { size: 14 }
                },
                ticks: {
                    color: '#666',
                    backdropColor: 'transparent'
                },
                angleLines: {
                    color: '#39ff14'
                },
                grid: {
                    color: 'rgba(0, 255, 0, 1)'
                }
            }
        },
        plugins: {
            legend:
            {
                labels:
                {
                    color: '#fff',
                    font: { weight: 'bold' }
                }
            }
        }
    }
});
