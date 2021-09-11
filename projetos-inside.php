<style>
  #moon {
    display: none;
  }
</style>

<canvas id="moon"></canvas>

<main class="projeto-inside">
  <section class="projeto-inside-img">
    <h1><?=the_title()?></h1>
    <img src="<?=catch_that_image(1)?>" alt="<?=the_title()?>" />
  </section>

  <section class="projeto-inside-content">
    <div class="container">
      <?=the_content()?>
    </div>
  </section>
</main>
