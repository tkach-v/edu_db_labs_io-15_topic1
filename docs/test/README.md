# Тестування працездатності системи

*В цьому розділі необхідно вказати засоби тестування, навести вихідні коди тестів та результати тестування.*

Для тестування api наша команда використовувала застосунок Postman. Було створено 9 різних запитів використовуючу мову програмування PHP та бібліотеку slim.

# 1. GET Вивидення всіх користувачів (/src/allusers)

<img src="./media/get_allusers.png">

# 2. GET Вивидення певного користувача (/src/user/{name})

<img src="./media/get_user.png">

# 3. POST Додавання нового користувача (/src/adduser)

<img src="./media/post_adduser.png">

Перевірка нового користувача в БД

<img src="./media/bd_useradd.png>

# 4. GET Вивидення всіх тестів (/src/allquizzes)

<img src="./media/get_allquizzes.png">

# 5. GET Вивидення певного тесту за айді (/src/quiz/{quiz_id})

<img src="./media/get_quiz.png">

# 6. POST Створення нового тесту (/src/addquiz)

<img src="./media/post_addquiz.png">

# 7. DELETE Видалення певного користувача з бд (src/user/{user_id})

<img src="./media/delete_user.png">

# 8. DELETE Вивидення певного тесту за айді (/src/quiz/{quiz_id})

<img src="./media/delete_quiz.png">

# 9. GET Вивидення питань по певному тесту (/src/questions/{quiz_id})

<img src="./media/get_questions.png">
