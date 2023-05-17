# Реалізація інформаційного та програмного забезпечення

# Програма написана на мові програмування PHP

<?php

require '../vendor/autoload.php';

use Slim\Factory\AppFactory;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class UserController
{
    private $connection;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function getAllUsers(Request $request, Response $response)
    {
        $sql = "SELECT * FROM `users`";
        $result = mysqli_query($this->connection, $sql);
        $data = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }

        mysqli_close($this->connection);

        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function getUserById(Request $request, Response $response, $args)
    {
        $name = $args['user_id'];
        $sql = "SELECT * FROM `users` WHERE `username`='$name'";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        $user = mysqli_fetch_assoc($result);

        if ($user === null) {
            $response->getBody()->write(json_encode(['message' => 'User not found']));
        } else {
            $response->getBody()->write(json_encode($user));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }

    public function addUser(Request $request, Response $response)
    {
        $data = $request->getParsedBody();

        $email = $data['email'];
        $password = $data['password'];
        $username = $data['username'];

        $sql = "INSERT INTO `users` (`id`, `email`, `password`, `username`) VALUES (NULL, '$email', '$password','$username')";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        if ($result) {
            $response->getBody()->write(json_encode(['message' => 'User created']));
        } else {
            $response->getBody()->write(json_encode(['message' => 'Failed to create user']));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }

    public function deleteUser(Request $request, Response $response, $args)
    {
        $user_id = (int) $args['user_id'];
        $sql = "DELETE FROM `users` WHERE `id`='$user_id'";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        if ($result) {
            $response->getBody()->write(json_encode(['message' => 'User deleted']));
        } else {
            $response->getBody()->write(json_encode(['message' => 'Failed to delete user']));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }
}

class QuizController
{
    private $connection;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function getQuizById(Request $request, Response $response, $args)
    {
        $quiz_id = (int) $args['quiz_id'];
        $sql = "SELECT * FROM `quiz` WHERE `id`='$quiz_id'";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        if (mysqli_num_rows($result) === 0) {
            $response->getBody()->write(json_encode(['message' => 'Quiz not found']));
        } else {
            $quiz = mysqli_fetch_assoc($result);
            $response->getBody()->write(json_encode($quiz));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }

    public function getAllQuizzes(Request $request, Response $response)
    {
        $sql = "SELECT * FROM `quiz`";
        $result = mysqli_query($this->connection, $sql);
        $data = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        mysqli_close($this->connection);

        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function addQuiz(Request $request, Response $response)  
    {
        $data = $request->getParsedBody();

        $title = $data['title'];
        $description = $data['description'];
        $datetime = $data['datetime'];

        $sql = "INSERT INTO `quiz` (`id`, `title`, `description`, `datetime`) VALUES (NULL, '$title', '$description', '$datetime')";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        if ($result) {
            $response->getBody()->write(json_encode(['message' => 'Quiz created']));
        } else {
            $response->getBody()->write(json_encode(['message' => 'Failed to create quiz']));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }

    public function deleteQuiz(Request $request, Response $response, $args)
    {
        $quiz_id = (int) $args['quiz_id'];
        $sql = "DELETE FROM `quiz` WHERE `id`='$quiz_id'";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        if ($result) {
            $response->getBody()->write(json_encode(['message' => 'Quiz deleted']));
        } else {
            $response->getBody()->write(json_encode(['message' => 'Failed to delete quiz']));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }
}

class QuestionController
{
    private $connection;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function getQuestionsByQuiz(Request $request, Response $response, $args)
    {
        $quiz_id = (int) $args['quiz_id'];
        $sql = "SELECT question FROM `question` WHERE `quiz_id`='$quiz_id'";
        $result = mysqli_query($this->connection, $sql);
        
        mysqli_close($this->connection);
        
        $questions = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $questions[] = $row['question'];
        }
        
        $response->getBody()->write(json_encode($questions));
        return $response->withHeader('Content-Type', 'application/json');
    }
}

$connection = mysqli_connect('127.0.0.1', 'root', '', 'mydb');

$app = AppFactory::create();

$userController = new UserController($connection);
$quizController = new QuizController($connection);
$questionController = new QuestionController($connection);

$app->get('/src/allusers', [$userController, 'getAllUsers']);
$app->get('/src/user/{user_id}', [$userController, 'getUserById']);
$app->post('/src/adduser', [$userController, 'addUser']);
$app->delete('/src/user/{user_id}', [$userController, 'deleteUser']);

$app->get('/src/allquizzes', [$quizController, 'getAllQuizzes']);
$app->get('/src/quiz/{quiz_id}', [$quizController, 'getQuizById']);
$app->post('/src/addquiz', [$quizController, 'addQuiz']);
$app->delete('/src/quiz/{quiz_id}', [$quizController, 'deleteQuiz']);

$app->get('/src/questions/{quiz_id}', [$questionController, 'getQuestionsByQuiz']);

$app->run();


# Програма для створення примітивної бази даних та її початкового заповнення

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 17 2023 г., 11:09
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `mydb`
--

-- --------------------------------------------------------

--
-- Структура таблицы `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `question` varchar(40) NOT NULL,
  `answer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `question`
--

INSERT INTO `question` (`id`, `quiz_id`, `question`, `answer_id`) VALUES
(1, 1, 'Що таке похідна?', 14),
(2, 1, 'Що таке інтеграл?', 15),
(3, 2, 'Як створити Базу даних?', 1),
(4, 2, 'Як вивести таблицю?', 3),
(5, 3, 'Для чого потрібен регістр EAX?', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `datetime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `quiz`
--

INSERT INTO `quiz` (`id`, `title`, `description`, `datetime`) VALUES
(1, 'Тест2 ВМ', 'Другий тест з курсу вищої математики. На виконання дається одна спроба. Час проходження: 1 год.', '2023-05-31'),
(2, 'Екзамен ОБД', 'Екзамен с курсу Огранізація баз даних. На виконання екзамену відведено 2год. Після екзамену обовязково скинути скріншот викладачу', '2023-05-31'),
(3, 'МКР СП', 'Модульна контрольна робота з системного програмування. Запитання по темам з лекції 1-10.', '2023-06-24');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `username`) VALUES
(1, 'example@example.com', '123456789', 'tiger'),
(2, 'test@gmail.com', 'S4tHJ72', 'bear'),
(3, 'fiot@lll.kpi.ua', 'Hf!7ls97/%', 'lion');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


