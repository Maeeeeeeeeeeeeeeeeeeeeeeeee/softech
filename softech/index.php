<?php
$page = $_GET['page'] ?? 'home'; 
$pageFile = "pages/$page.php";

if (!file_exists($pageFile)) {
    $pageFile = "pages/home.php"; 
}
include 'includes/header.php';
include 'includes/navbar.php';
include $pageFile;
include 'includes/footer.php';
?>
