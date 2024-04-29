// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";




// HIDE STICKER:
// Find the element with id="stickerClose"
const stickerClose = document.getElementById('stickerClose');

// Check if the element exists and add a click event listener
if (stickerClose) {
	stickerClose.addEventListener('click', function () {
		// Find the element with id="sticker"
		const sticker = document.getElementById('sticker');

		// Check if the sticker element exists and add the class "hide-sticker"
		if (sticker) {
			sticker.classList.add('hide-sticker');
		}
	});
}