<center>
    <div class="login_container create_post_container">
        <h3>Post aanmaken</h3>
        <form action="create_post.php" method="post" id="form">
            <input type="text" name="image" placeholder="Foto link"><br>
            <input type="text" name="title" placeholder="Titel"><br>
            <textarea form="form" width="100" type="text" name="text" placeholder="Text..."></textarea><br>
            <input type="submit" name="submit">
        </form>
    </div>
</center>

<?php
$host = '127.0.0.1';
$db   = 'scrum';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
   PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
   PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
   PDO::ATTR_EMULATE_PREPARES   => false,
];
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
$result = $pdo->query('SELECT * FROM info');

while($row=$result->fetch()){
    echo "Naam: " . $row['naam'] . ' ';
    echo "Issue: " . $row['issue'] .'<br>';

}
?>
<?php
if(!isset($_COOKIE["logged_in"])){
    header("Location: login.php");
}

if(isset($_POST["submit"])){
    try {
        $pdo = new PDO($dsn, $user, $pass, $options);
        if(!empty($_POST["naam"]) && !empty($_POST["issue"]) ) {
            $stmt = $pdo->prepare(
                "INSERT INTO post (naam, issue,)
                VALUES ('".$_POST["naam"]."', '".$_POST["issue"]."')"
            );
            $stmt->execute();
            header("Location: index.php");
        } else {
            throw new Exception("Je hebt niet alles ingevult");
        }
    } catch (Exception $e) {
        echo "<p>Error: ".$e->getMessage()."</p>";
    }
}

?>
