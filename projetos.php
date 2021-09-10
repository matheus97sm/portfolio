<?php
/**
 * Template Name: projetos
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

<main class="home-banner home-banner-projetos">
  <canvas id="moon"></canvas>

  <section class="banner-projetos home-banner-content inactive">
    <div class="container">
      <div class="banner-projetos-wrapper">
        <div></div>

        <div class="banner-projetos-items">
          <? query_posts( array( 'post_type' => 'portfolios', 'posts_per_page' => '6' ) );  ?>
          <?php if ( have_posts() ) : ?>
          <?php while ( have_posts() ) : the_post(); ?>

          <div class="projetos-item" href="<?=the_permalink()?>">
            <a class="projetos-item-img" href="<?=the_permalink()?>">
              <img src="<?=catch_that_image(2)?>" alt="<?=the_title()?>" />
            </a>

            <div class="projetos-item-text">
              <span><?=the_field('project_type')?></span>
              <h2><?=the_title()?></h2>
              <p><?=the_field('project_summary')?></p>
              <a href="<?=the_permalink()?>">Continuar lendo <img src="<?=get_template_directory_URI()?>/img/src/arrow-seemore.svg" alt="<?=the_title()?>" /></a>
            </div>
          </div>

          <?php endwhile; ?>
          <?php endif; ?>
        </div>

        <div class="banner-projetos-text">
          <span>Tipo do projeto</span>
          <h2>Título</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta, turpis at congue tempor, quam nisl rutrum nibh, vitae sollicitudin orci neque ac turpis.</p>
          <a href="">Continuar lendo <img src="<?=get_template_directory_URI()?>/img/src/arrow-seemore.svg" alt="<?=the_title()?>" /></a>
        </div>

        <div class="banner-projetos-controls">
          <button>
            <img src="<?=get_template_directory_URI()?>/img/src/arrow-left.svg" alt="Clique para ver mais projetos para a esquerda" />
          </button>

          <button>
            <img src="<?=get_template_directory_URI()?>/img/src/arrow-right.svg" alt="Clique para ver mais projetos para a esquerda" />
          </button>
        </div>
      </div>
    </div>
  </section>
</main>

<?php get_footer();