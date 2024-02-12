Це файл з вимогами до коду та менеджменту файлів.

##modules

Модулі - готові шматки сайту. Папки модулю називаємо з маленької літери і кемелкейсом(exampleName). У папці модулю ми можемо створювати папку components, в котрій будуть лежати компоненти, котрі використовуются тільки в цьому модулі, а також папку image, в котрій будуть зберігатися картинки, котрі використовуються тільки в даному модулі.

##shared

Папка shared зберігає в собі компоненти(називаємо з великої літери та кемлкейсом(ExampleName)), котрі перевикористовуються на всьому сайті. Папка компоненту має в собі містити лише один файл - сам компонент. Також в папці shared є папки data, hooks, img. Логіка та ж сама, зберігаємо все те, що може і буде перевикористане.

##styles

В папці styles зберігається один єдиний файл - globals.css. Цю папку змінювати не треба, адже використовуємо tailwind.

##assets

Папка assets - наразі використовується лише для зберігання шрифтів.

#app

В папці app будуть зберігатися сторінки для нашого вебсайту. Папку сторінки називаємо через дефіс(page-name). В файлах сторінки не має бути написано ніякої логіки, всю логіку ми залишаємо у modules та shared.
