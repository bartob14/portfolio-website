



document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("myCanvas");
    const audio = document.getElementById("audio");
    const ctx = canvas.getContext("2d");

    let opt = {
        width: window.innerWidth,
        height: window.innerHeight,
        midY: window.innerHeight / 2,
        points: 80,
        stretch: 10,
        sinHeight: 0,
        speed: -0.1,
        strokeColor: "#a395c2",
        strokeWidth: 4, // Adjust the line width here
        power: false,
    };

    let prevStrokeColor = opt.strokeColor; // Store previous stroke color

    adjustCanvasSize();

    ctx.strokeStyle = opt.strokeColor;
    ctx.lineWidth = opt.strokeWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let time = 0;

    const render = () => {
        window.requestAnimationFrame(render);
        ctx.clearRect(0, 0, opt.width, opt.height);
        ctx.strokeStyle = opt.strokeColor; // Reapply stroke color
        time += 1;
        ctx.beginPath();
        let increment = 0;

        for (let i = 0; i <= opt.points; i++) {
            if (i < opt.points / 2) {
                increment += 0.1;
            } else {
                increment += -0.1;
            }

            const x = (opt.width / opt.points) * i;
            const y = opt.midY + Math.sin(time * opt.speed + i / opt.stretch) * opt.sinHeight * increment;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    };

    render();

    canvas.addEventListener("click", () => {
        opt.power = !opt.power;
        if (opt.power) {
            audio.play();
            gsap.to(opt, { duration: 1, sinHeight: 4, stretch: 5, ease: "power2.inOut" });
        } else {
            audio.pause();
            gsap.to(opt, { duration: 1, sinHeight: 0, stretch: 10, ease: "power2.inOut" });
        }
    });

    window.addEventListener("resize", adjustCanvasSize);

    function adjustCanvasSize() {
        opt.width = window.innerWidth;
        opt.height = window.innerHeight;
        opt.midY = window.innerHeight / 2;
        canvas.width = opt.width;
        canvas.height = opt.height;
        ctx.lineWidth = opt.strokeWidth * (opt.width / 1920); // Adjust line width based on window width
        opt.strokeColor = prevStrokeColor; // Restore previous stroke color
    }
});
