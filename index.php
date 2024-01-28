<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/layout.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</head>
<body>
        <nav>
     <ul>
        Define your navigation links here 
        <li><a href="index.php?page=home">Home</a></li>
        <li><a href="index.php?page=about">About</a></li>
        <li><a href="index.php?page=blog">Blog</a></li>
        <li><a href="index.php?page=news">News</a></li>
        <li><a href="index.php?page=signin">Sign In</a></li>
    </ul>
        </nav>
        <?php
    //Съдържанието според избраната страница
    $page = isset($_GET['page']) ? $_GET['page'] : 'home';
    switch ($page) {
        case 'home':
            include 'pages/home.php';
            break;
        case 'about':
            include 'pages/about.php';
            break;
        case 'blog':
            include 'pages/blog.php';
            break;
            case 'news':
                include 'pages/news.php';
                break;
            case 'signin':
                    include 'pages/signin.php';
                break;
        default:
            include '404.php';
    }
    ?> 
    <footer>

    </footer>
    <script src="js/thumbnails-fetcher.js"></script>
</body>
</html>