<?php
/**
 * Template Name: home
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<main class="home-banner">
  <section class="banner-welcome home-banner-content inactive">
    <div class="container">
      <div class="banner-welcome-txt">
        <h1>
          <span><span>Desenvolvimento</span></span>
          <span><span>de Websites</span></span>
        </h1>
        <p>Olá, meu nome é Matheus, e aqui você poderá ver alguns dos projetos que desenvolvi. Sinta-se à vontade para entrar em contato =)</p>
      </div>
    </div>
  </section>

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
  
  <section class="banner-blog home-banner-content inactive">
    <div class="container">
      <div class="banner-blog-wrapper">
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
    </div>

    <div class="blog-img-wrapper"></div>
  </section>
  
  <section class="banner-contato home-banner-content inactive">
    <div class="container">
      <div class="banner-welcome-txt">
        <h1><span>Desenvolvimento</span><span>de Websites</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta, turpis at congue tempor, quam nisl rutrum nibh, vitae sollicitudin orci neque ac turpis.</p>
      </div>
    </div>
  </section>

  <div class="banner-control">
    <div class="banner-control-wrapper">
      <span class="banner-control-name">Olá</span>
      <span class="banner-control-dot"></span>
    </div>
    
    <div class="banner-control-wrapper">
      <span class="banner-control-name">Sobre</span>
      <span class="banner-control-dot"></span>
    </div>
    
    <div class="banner-control-wrapper">
      <span class="banner-control-name">Projetos</span>
      <span class="banner-control-dot"></span>
    </div>
    
    <div class="banner-control-wrapper">
      <span class="banner-control-name">Blog</span>
      <span class="banner-control-dot"></span>
    </div>
    
    <div class="banner-control-wrapper">
      <span class="banner-control-name">Contato</span>
      <span class="banner-control-dot"></span>
    </div>
  </div>
</main>

<?php get_footer();