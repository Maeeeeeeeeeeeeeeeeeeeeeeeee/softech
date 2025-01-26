<?php
$current_page = $_GET['page'] ?? 'home';
?>
<header>
    <div class="logo">
        <h1>Softech</h1>
    </div>
    <nav>
        <ul class="nav-links">
            <li><a href="index.php?page=home" class="<?php echo $current_page === 'home' ? 'active' : ''; ?>">Home</a></li>
            <li><a href="index.php?page=about" class="<?php echo $current_page === 'about' ? 'active' : ''; ?>">About</a></li>
            <li><a href="index.php?page=projects" class="<?php echo $current_page === 'projects' ? 'active' : ''; ?>">Projects</a></li>
            <li><a href="index.php?page=contact" class="<?php echo $current_page === 'contact' ? 'active' : ''; ?>">Contact</a></li>
        </ul>
    </nav>
</header>
