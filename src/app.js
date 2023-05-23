// nav bar toggle START
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)
// nav bar toggle END

// animations START
AOS.init({
    duration: 1200,
})
// animations END
 
// editing cursor START
const cursor = document.querySelector("#mouse-circle");
const links = document.querySelectorAll("a");
const whiteContainers = document.querySelectorAll(".black-cursor");


document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});



links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})

whiteContainers.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("black");
    })
})
whiteContainers.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("black");
    })
})



// editing cursor END