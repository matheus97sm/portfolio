<?php
/**
 * Template Name: blog
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<style>
  #moon {
    display: none;
  }
</style>

<main class="home-banner home-banner-blog">
  <canvas id="moon"></canvas>

  <section class="banner-blog home-banner-content inactive">
    <div class="container">
      <div class="banner-blog-wrapper">
        <? query_posts( array( 'post_type' => 'post', 'posts_per_page' => '6' ) );  ?>
        <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>

        <div class="blog-item" href="<?=the_permalink()?>" data-img-link="<?=catch_that_image(2)?>">
          <a class="blog-item-img" href="<?=the_permalink()?>">
            <img src="<?=catch_that_image(2)?>" alt="<?=the_title()?>" />
          </a>

          <div class="blog-item-text">
            <h2><?=the_title()?></h2>
            <p><?=custom_excerpt2(100)?></p>
            <a href="<?=the_permalink()?>">Continuar lendo <img src="<?=get_template_directory_URI()?>/img/src/arrow-seemore.svg" alt="<?=the_title()?>" /></a>
          </div>
        </div>

        <?php endwhile; ?>
        <?php endif; ?>

        <div class="banner-blog-controls">
          <button>
            <img src="<?=get_template_directory_URI()?>/img/src/arrow-left.svg" alt="Clique para ver mais projetos para a esquerda" />
          </button>

          <button>
            <img src="<?=get_template_directory_URI()?>/img/src/arrow-right.svg" alt="Clique para ver mais projetos para a esquerda" />
          </button>
        </div>
      </div>
    </div>

    <div class="blog-img-wrapper"></div>
  </section>
</main>

<?php get_footer();