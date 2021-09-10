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

blog

<? } else { ?>

	//Codigo fora do post
    
<? } ?>