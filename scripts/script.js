window.addEventListener('DOMContentLoaded', () => {
    VANTA.GLOBE({
      el: "#background-animation",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xffdd20,
      color2: 0xffd020,
      backgroundColor: 0x002E73,
      size: 0.00,
      spacing: 25.00
    })
    const header = document.querySelector('header')
    header.style.opacity = 1;

    setTimeout(() => {
        const ul = document.querySelector('ul')
        ul.style.opacity = 1;
    }, 2000)
})
