<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>

<? if (is_single() && get_post_type() === 'portfolios') { ?>
	
<?php include 'projetos-inside.php'; ?>
    
<? } else if (is_single()) { ?>

	<style>
  #moon {
    display: none;
  }
</style>

<canvas id="moon"></canvas>

<main class="projeto-inside">
  <section class="projeto-inside-img blog-inside">
    <h1><?=the_title()?></h1>
    <img src="<?=catch_that_image(1)?>" alt="<?=the_title()?>" />
  </section>

  <section class="projeto-inside-content">
    <div class="container">
      <?=the_content()?>
    </div>
  </section>
</main>

<? } else { ?>

	//Codigo fora do post
    
<? } ?>