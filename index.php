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
