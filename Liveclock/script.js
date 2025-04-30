const clockelement=document.getElementById('clock');

function updateclock(){
    const now = new Date();
    const hours=now.getHours().toString().padStart(2,'0');

    const minutes = now.getMinutes().toString().padStart(2,'0');
    
    const second= now.getSeconds().toString().padStart(2,'0');

        const timeString = `${hours}:${minutes}:${second}`;

        clockelement.textContent=timeString;
    
}

    updateclock();
    setInterval(updateclock,1000);