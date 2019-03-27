<?php

require('database.php');


if(isset($_GET["show"]) && isset($_GET["id"])) {
  $id = $_GET["id"];
  try {
    $statement = $pdo->prepare(
      'SELECT * FROM users where id = :id;'
    );
    $statement->execute(["id" => $id]);
    $results = $statement->fetchAll(PDO::FETCH_OBJ);
    // echo "Read from table users<br />";
    // echo $results[0]->first_name;
  } catch(PDOException $e) {
    echo "<h4 style='color: red;'>".$e->getMessage()."</h4>";
  }
} else {
  echo "<script>location.href='/php-crud'</script>";
  die();
}



?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Simple CRUD</title>
  </head>
  <body>
    <table>
      <tr>
        <th>id</th>
        <th>first_name</th>
        <th>last_name</th>
        <th>age</th>
        <th>edit</th>
        <th>delete</th>
      </tr>
    <?php

      foreach($results as $user) {

    ?>
      <tr>
        <td><?php echo $user->id; ?></td>
        <td><?php echo $user->first_name; ?></td>
        <td><?php echo $user->last_name; ?></td>
        <td><?php echo $user->age; ?></td>
        <td>
          <a href="update.php?id=<?php echo $user->id; ?>">Edit</a>
        </td>
        <td>
          <a href="delete.php?id=<?php echo $user->id; ?>" onclick="confirm('sure?')">Delete</a>
        </td>
      </tr>

    <?php } ?>

    </table>

    <a href="/php-crud">Go Back</a>``
  </body>
</html>
