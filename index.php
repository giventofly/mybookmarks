<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My Bookmarks</title>
  <link rel="stylesheet" href="style.css">
<!--   <script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js" defer></script>
  <script src="bookmarks.js" defer></script>-->
  
<style>
 @import url('https://fonts.googleapis.com/css?family=Montserrat|Patua+One|Roboto');
</style>
  <script>
    <?php 
    $read = unserialize(file_get_contents('bookmarks.json'));
    echo "const bookmarks = " . $read  . ";"; ?>
  </script>
  <script src="app.js" defer></script>
</head>
<body>
  <div id="bookmarks">
    <input type="text" class="search" placeholder="Search..." id='search'/>
    <input type="text" class="search" placeholder="Search tags..." id='tagsearch'/>
    <!--<button class="sort" data-sort="name">Sort by name</button>-->
  </div>
  <div class="container" id="container"></div>
  
</body>
</html>
