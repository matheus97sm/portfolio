<?php
/**
 * Template Name: sobre
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

<main class="home-banner home-banner-sobre">
  <canvas id="moon"></canvas>

  <section class="banner-sobre home-banner-content inactive">
    <div class="container">
      <div class="banner-sobre-img">
        <img src="<?=get_template_directory_URI()?>/img/src/me.png" alt="Matheus Fonseca - Desenvolvedor Web" />
      </div>

      <div class="banner-sobre-txt">
        <h1>Matheus</br>Fonseca</h1>
        <p>Depois de trabalhar alguns anos com design gráfico, resolvi me aventurar por estas bandas da programação. Trabalhei por um tempo na Agência Salt, desenvolvendo sites institucionais.</br></br>

Agora, trabalho com Sistemas na empresa BHS. E por aqui, continuo exercendo minha paixão, que é desenvolver sites com foco em novas experiências para os usuários.</p>
      </div>

      <div class="banner-sobre-logos">
        <img src="<?=get_template_directory_URI()?>/img/src/js.svg" alt="Matheus Fonseca - Desenvolvedor JS" />
        <img src="<?=get_template_directory_URI()?>/img/src/php.svg" alt="Matheus Fonseca - Desenvolvedor PHP" />
        <img src="<?=get_template_directory_URI()?>/img/src/css.svg" alt="Matheus Fonseca - Desenvolvedor CSS" />
        <img src="<?=get_template_directory_URI()?>/img/src/html.svg" alt="Matheus Fonseca - Desenvolvedor HTML" />
      </div>
    </div>
  </section>
</main>

<?php get_footer();