function generateSchedule() {
    const employees = [1, 2, 3, 4, 5];
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const shifts = ['Mañana', 'Tarde', 'Noche'];

    employees.forEach(emp => {
        const restDay = days[Math.floor(Math.random() * days.length)];
        days.forEach(day => {
            const cellId = `e${emp}-${day}`;
            const cell = document.getElementById(cellId);
            if (day === restDay) {
                cell.textContent = 'Descanso';
            } else {
                const shift = shifts[Math.floor(Math.random() * shifts.length)];
                cell.textContent = shift;
            }
        });
    });
}
