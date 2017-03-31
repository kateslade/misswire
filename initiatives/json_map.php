<?php
header('Content-Type: application/json'); 


// Require the configuration before any PHP code:
require ('../includes/config.inc.php');


include('../mysqli_connect.php');


// Require the database connection:
$dbc = @mysqli_connect (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);


$r = mysqli_query ($dbc, "CALL get_init_map_markers()");
// For debugging purposes:
if (!$r) echo mysqli_error($dbc);

 $rows = array();
while($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) { // Fetch each item.
   $rows[] = $row;
}

echo json_encode($rows);





?>





