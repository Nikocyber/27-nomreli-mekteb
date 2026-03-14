function showTeacher(id, e) {
    document.querySelectorAll('#staff .grade-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('#staff .grade-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    e.currentTarget.classList.add('active');
}

function showGrade(id, e) {
    document.querySelectorAll('#students .grade-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('#students .grade-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    e.currentTarget.classList.add('active');
}

function showTeacher(id, e) {
    // Only toggle panels within the teachers section
    document.querySelectorAll('#staff .grade-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('#staff .grade-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    e.currentTarget.classList.add('active');
}

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;

    outline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 400, fill: "forwards" });

    // Əsas hissə bura daxildir:
    // Mouse-un altında olan elementi tapırıq
    const target = e.target;

    // Həmin elementin (və ya onun daxilindəki elementin) kursor stilini yoxlayırıq
    const isPointer = window.getComputedStyle(target).cursor === 'pointer';

    if (isPointer) {
        dot.style.opacity = "0";
        outline.style.opacity = "0";
    } else {
        dot.style.opacity = "1";
        outline.style.opacity = "1";
    }
});