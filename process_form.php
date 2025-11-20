<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); 

header('Content-Type: text/plain');

// Use full absolute Windows path
//$folder_path = 'C:/Program Files/Apache Software Foundation/Tomcat 11.0_Tomcat18/webapps/OnlinephotoStudio/ContactDetails/';
$folder_path = 'C:/TomcatData/ContactDetails/';

// Generate unique file
$file_name = $folder_path . 'contact_' . time() . '_' . uniqid() . '.txt';

// Handle POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : 'N/A';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : 'N/A';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : 'N/A';

    $timestamp = date("Y-m-d H:i:s");

    $file_content = "--- Submission ---\n";
    $file_content .= "Submission Date: $timestamp\n";
    $file_content .= "Name: $name\n";
    $file_content .= "Email: $email\n";
    $file_content .= "Message:\n$message\n";

    if (file_put_contents($file_name, $file_content) !== false) {
        echo "SUCCESS! File saved.\n";
        echo "Location: $file_name";
    } else {
        echo "ERROR: Cannot write file.\n";
        echo "Check folder permissions on: $folder_path";
    }

} else {
    echo "Access Denied.";
}
?>
