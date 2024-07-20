<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function register_pricing_table_block() {
    register_block_type( 'product-pricing/pricing-table', array(
        'editor_script' => 'product-pricing-blocks',
        'editor_style'  => array(
            'product-pricing-blocks-custom-editor',
            'product-pricing-blocks-editor',
            'product-pricing-blocks-all-min',
            'product-pricing-blocks-bootstrap-min',
        ),
        'style'         => array(
            'product-pricing-blocks',
            'product-pricing-blocks-all-min',
            'product-pricing-blocks-bootstrap-min',
        ),
        'script' => 'bootstrap-bundle', // Add the script to be loaded on the frontend
    ) );
}

add_action( 'init', 'register_pricing_table_block' );
