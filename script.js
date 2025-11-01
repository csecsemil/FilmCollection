// Összes gomb megkeresése
const buttons = document.querySelectorAll('.gomb');
const imageContainer = document.getElementById('imageContainer');
let halloweenClicked = false;

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Halloween speciális funkció - CSAK a kép, content NEM változik
        if (index === 0 && !halloweenClicked) {
            halloweenClicked = true;
            
            // Kép megjelenítése
            imageContainer.classList.remove('hidden');
            
            // 3 másodperc után eltüntetés
            setTimeout(() => {
                imageContainer.classList.add('hidden');
            }, 3000);
            
            // RETURN - ne folytassa a content togglest
            return;
        }
        
        let content;
        if (index ===0) {
            content = button.nextElementSibling.nextElementSibling; //imageContainer után a content
        } else {
            content = button.nextElementSibling;
        }
        content.classList.toggle('active');
    });
});

