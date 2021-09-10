<?php
/**
 * Template Name: contato
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

<main class="home-banner home-banner-contato">
  <canvas id="moon"></canvas>

  <section class="banner-contato home-banner-content inactive">
    <div class="container">
      <div class="banner-contato-wrapper">
        <h2>Contato</h2>
        <a href="mailto:contato@mathdev.com.br">contato@mathdev.com.br</a>

        <? echo do_shortcode('[contact-form-7 id="22" title="Formulario de Contato"]'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer();