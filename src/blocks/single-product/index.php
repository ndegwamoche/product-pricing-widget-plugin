<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function register_single_product_block() {
    register_block_type( 'product-pricing/single-product', array(
        'editor_script' => 'product-pricing-blocks',
        'editor_style'  => 'product-pricing-blocks-editor',
        'style'         => 'product-pricing-blocks',
    ) );
}

add_action( 'init', 'register_single_product_block' );
