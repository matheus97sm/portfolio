<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>
<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, minimal-ui" />

  <title><?php wp_title( '|', true, 'right' ); ?></title>

  <link rel="icon" type="image/png" href="<?=get_template_directory_URI()?>/img/favicon.png" />
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="<?=get_template_directory_URI()?>/style.css" />

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

  <div id="fb-root"></div>
  <script>
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.10&appId=243085426048812";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  </script>

  <header class="header">
    <div class="container">
      <div class="header-midias">
        <a href="https://instagram.com/matheusfonsecadev" target="_blank">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <use xlink:href="#instagram"></use>
          </svg>
        </a>
        
        <!-- <a href="https://wa.me/" target="_blank">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <use xlink:href="#whatsapp"></use>
          </svg>
        </a> -->
      </div>

      <a href="<?=site_url()?>" class="header-logo">
        <img src="<?=get_template_directory_URI()?>/img/src/logo.svg'" alt="Matheus Fonseca - Desenvolvedor Web" />
      </a>

      <div class="menu-hamb" data-menu="button">
        <span></span>
      </div>
    </div>

    <nav class="menu" data-menu="menu">
      <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu' => 'MenuTopo', 'menu_class' => 'nav-menu', 'menu_id' => 'primary-menu' ) ); ?>
    </nav>
  </header>

  <div class="mouse-dot"></div>
  