document.addEventListener('DOMContentLoaded', () => {
const buttons = document.querySelectorAll('.gomb');
const imageContainer = document.getElementById('imageContainer');
let halloweenClicked = false;

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Halloween speciális funkció - első kattintásra csak kép
        if (index === 0 && !halloweenClicked) {
            halloweenClicked = true;
            
            imageContainer.classList.remove('hidden');
            
            setTimeout(() => {
                imageContainer.classList.add('hidden');
            }, 3000);
            
            return;
        }
        
        // Harmónika működés
        let currentContent;
        if (index === 0) {
            currentContent = button.nextElementSibling.nextElementSibling;
        } else {
            currentContent = button.nextElementSibling;
        }
        
        const isCurrentActive = currentContent.classList.contains('active');
        
        // Bezárjuk az összes tartalmat
        document.querySelectorAll('.content.active').forEach(content => {
            content.classList.remove('active');
        });
        
        // Ha nem volt nyitva, kinyitjuk
        if (!isCurrentActive) {
            currentContent.classList.add('active');
        }
    });
});
});
