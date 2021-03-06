<?php
/**
 * salient themes init file
 *
 * @package salient themes
 * @subpackage salient-news
 * @since salient-news 1.0.0
 */

/**
 * Customizer additions.
 */
require get_template_directory().'/inc/customizer/customizer.php';

/**
*sidebar widget.
*/
require get_template_directory() . '/inc/sidebar-widget-init.php';

/**
Layout additions
 */
 require get_template_directory() . '/inc/post-meta/layout-meta.php';

/**
 * Include 
 */
require get_template_directory().'/inc/function/random-post.php';

require get_template_directory().'/inc/hooks/excerpt.php';

require get_template_directory().'/inc/function/words-count.php';

require get_template_directory().'/inc/function/single-image-align.php';

require get_template_directory() . '/inc/function/header-logo.php';

require get_template_directory() . '/inc/hooks/header.php';

require get_template_directory() . '/inc/hooks/footer.php';

require get_template_directory() . '/inc/hooks/homepage-widget.php';

require get_template_directory() . '/inc/hooks/homepage-slider.php';

require get_template_directory() . '/inc/hooks/homepage-latest-news.php';

