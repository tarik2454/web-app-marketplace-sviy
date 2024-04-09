# Code styles

## Наш сайт розробляється з використанням принципу "mobile first" 
Спочатку ми працюємо над версією для мобільних пристроїв, а потім адаптуємо для більших екранів.
За принципом "mobile first" у tailwindcss стилях починаємо опис стилів з мобільного breakpoint'у і потім додаємо інші breakpoint'и в порядку зростання ширини екрану. Для мобільного breakpoint'у не потрібно використовувати ідентифікатор sm, оскільки він заданий за замовчуванням. Наприклад: className="flex justify-between items-center gap-5 mb-3 md:gap-5 md:mb-5 xl:justify-stretch xl:items-start xl:gap-6 xl:mb-0".

## component
Ми створюємо нові компоненти за допомогою функцій та експортуємо їх одним рядком з використанням ключового слова export default. Папка в якiй знаходится компонент называется з великої літери і кемелкейсом(ExampleName). Наприклад: export default function Reviews() {}.

## modules
Модулі - готові шматки сайту. Папки модулю називаємо з маленької літери і кемелкейсом(exampleName). У папці модулю ми можемо створювати папку components, в котрій будуть лежати компоненти, котрі використовуются тільки в цьому модулі, а також папку image, в котрій будуть зберігатися картинки та компонент SpriteSVG зi спрайтами, котрі використовуються тільки в даному модулі.

## shared
Папка shared зберігає в собі компоненти(називаємо з великої літери та кемлкейсом(ExampleName)), котрі перевикористовуються на всьому сайті. Папка компоненту має в собі містити лише один файл - сам компонент. Також в папці shared є папки data, hooks, img. Логіка та ж сама, зберігаємо все те, що може і буде перевикористане.

## styles
В папці styles зберігається один єдиний файл - globals.css. Цю папку змінювати не треба, адже використовуємо tailwind.

## assets
Папка assets - наразі використовується лише для зберігання шрифтів.

## app
В папці app будуть зберігатися сторінки для нашого вебсайту. Папку сторінки називаємо через дефіс(page-name). В файлах сторінки не має бути написано ніякої логіки, всю логіку ми залишаємо у modules та shared.

## типiзацiя

# Розробка фіч або багфіксів
- кожна фіча або багфікс виконується в  окремій гілці  
- перед початком роботи над новою фічею або багфіксом оновлюємо локальний dev, щоб він був ідентичний main на GitHub. В залежності від обраного способу взаємодії з Git   
 a) переходимо  в GitHub Desktop на гілку dev і робимо fetch+pull, щоб синхронізувати локальну гілку з тією, що на GitHub чи   
 b) в терміналі  
``git checkout dev``    
``git pull``
- робимо нову гілку з dev. Рекомендується давати назву гілки за шаблоном **feat/назва-фічі** та **bugfix/назва-бага**  
 a) в GitHub Desktop   
чи   
 b) в терміналі  
git checkout -b ‘feature/назва-фічі’

Працюємо у цій гілці та вносимо необхідні зміни. Комітимо зміни за потребою.
- після того, як фіча готова, відправляємо історію (комміти) локальної гілки на GitHub і відкриваємо Pull request. У GitHub, що відкрився, уважно виберіть репозиторій вашого Tімліда і натисніть Create pull request
- якщо необхідні редагування, вносимо їх у тій самій гілці і відправляємо зміни на GitHub. Поточний Pull request оновиться автоматично, відкривати новий не треба
- після того як Pull request  пройшов review коду, Тімлід приймає його (merge у гілку main).  
- після того, як Pull request був прийнятий, розробник у GitHub Desktop: переходить на гілку main і робить fetch+pull щоб синхронізувати локальну гілку з тієї що на GitHub в терміналі  
``git checkout dev``    
``git pull``  
- після синхронізації гілки main розробник видаляє свою локальну гілку фічі/баги

# Коміти
- коміти мають бути написані у такому стилі: **category: do something; do some other things**
- кожен коміт має починатися з категорії зміни. Ви можете використовувати наступні категорії для всього:  
 a) **feat**: Призначено для додавання нової функції  
 b) **fix**: Призначений для виправлення помилки  
- після категорії має бути символ ":", що вказує на опис коміту.

Повiдомлення:
- після двокрапки опис коміту має складатися з коротких операторів, що описують зміни. Кожен вислів має починатися з дієслова в теперiшнюму часi
- твердження повинні бути відокремлені від самих себе символом ";"

Приклади:  
feat: adds new button component; add new button components to templates    
fix: adds the stop directive to button component to prevent propagation
‌

