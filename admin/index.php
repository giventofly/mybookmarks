<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Gerir bookmarks</title>
  <style>
  form {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  input {
    padding: 5px 10px;
    margin-bottom: 10px;
    min-width: 200px;
    width:100%;
  }
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body {
    padding: 25px;
  }
  </style>
</head>
<body>
  <div class="insert">
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
      <label for="name">name:<input type="text" name="name"></label> 
      <label for="url">url:<input type="text" name="url"></label> 
      <label for="desc">description:<input type="text" name="desc"></label> 
      <label for="tags">tags (comma separated):<input type="text" name="tags"></label> 
      <input type="submit" value="add">
    </form>
  </div>
  <div class="delete">
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
      delete id:<input type="text" name="delete"><br>
      <input type="submit" value="Delete">
    </form>
  </div>
  <?php
 


  //read from file
  $newfile = array();
  $read = unserialize(file_get_contents('../bookmarks.json'));
  //auto backup monthly
  //file_put_contents("./logs/bookmarks.backup.".date('m.Y').".json",serialize(json_encode($read)));
  $newfile = json_decode($read,true);

  //file_put_contents("../bookmarks.json",serialize(json_encode($f)));
  //post add
  if(isset($_POST['name']) && isset($_POST['url']) && isset($_POST['desc']) && isset($_POST['tags'])) {
    $name = $_POST['name'];
    $url = $_POST['url'];
    $desc = $_POST['desc'];
    $tags = explode(",",$_POST['tags']);
  
  //echo "<pre>".print_r($newfile, true)."</pre>";
  //append
  $newfile[] = array('name' => $name, 'url' => $url, 'desc' => $desc, 'tags' => $tags);
  //save
  file_put_contents("../bookmarks.json",serialize(json_encode($newfile)));
  }

  //post delete
  if(isset($_POST['delete'])) {
    unset($newfile[$_POST['delete']]);
    file_put_contents("../bookmarks.json",serialize(json_encode($newfile)));
  }
  
  $read = unserialize(file_get_contents('../bookmarks.json'));
  //echo "<pre>".print_r(json_decode($read,true), true)."</pre>";
  foreach (json_decode($read,true) as $key => $value) {
    echo "$key : ". $value['name'] . " (" . $value['url'] . ") <br>";
  }

  ?>
</body>
</html>