/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	var result = window.confirm("Do you want to open CV?");
      if (result) {
        window.open('https://docs.google.com/document/d/1y5_3enclkHwzxOerU2Yhfx8gHm8bYqfMd9dp1zUwZcY/edit?usp=sharing', '_blank')
      } 
	
})