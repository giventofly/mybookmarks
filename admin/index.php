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
  <!-- merge tag -->
  <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <label for="tagfrom"><input type="text" name="tagfrom" placeholder="tag to replace"></label>
    <label for="tagto"><input type="text" name="tagto" placeholder="new tag"></label>
    <input type="submit" value="mergetag">
  </form>
  <!-- edit tags from item id -->
  <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <label for="newtags"><input type="text" placeholder="tags list" name="newtags"></label>
    <label for="idtoedit"><input type="text" placeholder="id to edit" name="idtoedit"></label>
    <input type="submit" value="edittags">
  </form>
  <!--delete item-->
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
  //auto backup monthly - currently off
  //file_put_contents("./logs/bookmarks.backup.".date('m.Y').".json",serialize(json_encode($read)));
  $newfile = json_decode($read,true);
  //file_put_contents("../bookmarks.json",serialize(json_encode($f)));

  //post add
  if(isset($_POST['name']) && isset($_POST['url']) && isset($_POST['desc']) && isset($_POST['tags'])) {
    $name = $_POST['name'];
    $url = $_POST['url'];
    $desc = $_POST['desc'];
    $tags = explode(",",strtolower($_POST['tags']));
    //append
    $newfile[] = array('name' => $name, 'url' => $url, 'desc' => $desc, 'tags' => $tags);
    //save
    file_put_contents("../bookmarks.json",serialize(json_encode($newfile)));
  }

  //post delete
  //TODO: id check
  if(isset($_POST['delete'])) {
    unset($newfile[$_POST['delete']]);
    file_put_contents("../bookmarks.json",serialize(json_encode($newfile)));
  }

  //merge tags
  if(isset($_POST['tagfrom']) && isset($_POST['tagto'])) {
    $tagsreplaced = 0;
    $from = strtolower($_POST['tagfrom']);
    $to = strtolower($_POST['tagto']);
    //search array, check each tag, if equal, replace
    foreach ($newfile as $id => $value) {
      //check tags
      foreach ($value['tags'] as $tagid => $tagvalue) {
        //tag to change found
        if($tagvalue == $from) {
          $newfile[$id]['tags'][$tagid] = $to;
          $tagsreplaced++;
         }
      }
    }
    //save new bookmark
    file_put_contents("../bookmarks.json",serialize(json_encode($newfile)));
    echo "<h4>replaced $tagsreplaced tags</h4>";
  }

  //tags edit
  if(isset($_POST['newtags']) && isset($_POST['idtoedit'])) {
    //replace tags for id
    $newfile[$_POST['idtoedit']]['tags'] = explode(",",$_POST['newtags']);
    file_put_contents("../bookmarks.json",serialize(json_encode($newfile)));
  }


  //show current content:
  $read = unserialize(file_get_contents('../bookmarks.json'));
  //echo "<pre>".print_r(json_decode($read,true), true)."</pre>";
  foreach (json_decode($read,true) as $key => $value) {
    $tags = "";
    foreach ($value['tags'] as $tkey => $tvalue) {
      $tags .= " ". $tvalue . ",";
    }
    $tags = substr($tags, 0, -1);
    echo "$key : ". $value['name'] . " (" . $value['url'] . ") [ " . $tags ." ]<br>";
  }

  ?>
</body>
</html>