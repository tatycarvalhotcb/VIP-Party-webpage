function checkVIP() {
    const guestList = [
        {host: 'Brian', guests: ['Jana', 'Luiza', 'Luiz']},
        {host: 'Ana', guests: ['Beatriz', 'Amanda', 'Tatiana']},
        {host: 'Ben', guests: ['Arthur', 'John', 'Paige']} 
    ]

    let guestName = document.getElementById('name').value;
    let hostName = document.getElementById('host').value;

    for (let guest of guestList) {
        if (guest.host === hostName && guest.guests.includes(guestName)) {
            document.getElementById('answer').innerText = "You can enter!";
            break;
        } else document.getElementById('answer').innerText = "You can't enter!";
    } 
}