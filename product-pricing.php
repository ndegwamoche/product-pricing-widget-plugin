<?php
/*
Plugin Name: Product Pricing
Description: A plugin that provides Gutenberg blocks for pricing tables and single products.
Version: 1.0.0
Author: Martin Ndegwa Moche
Text Domain: product-pricing
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

if (!class_exists('ProductPricing')) {

    class ProductPricing
    {
        private $plugin_dir;
        private $plugin_url;

        public function __construct()
        {
            $this->plugin_dir = plugin_dir_path(__FILE__);
            $this->plugin_url = plugin_dir_url(__FILE__);

            // Hook into WordPress
            add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_editor_assets'));
            add_action('enqueue_block_assets', array($this, 'enqueue_frontend_assets'));

            // Register block types
            add_action('init', array($this, 'register_blocks'));
        }

        public function enqueue_block_editor_assets()
        {
            if (is_admin()) {
                wp_enqueue_script(
                    'product-pricing-blocks',
                    $this->plugin_url . 'build/index.js',
                    array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'),
                    filemtime($this->plugin_dir . '/build/index.js'),
                    true
                );

                wp_enqueue_style(
                    'product-pricing-blocks-all-min',
                    $this->plugin_url . 'assets/css/all.min.css',
                    array('wp-edit-blocks'),
                    filemtime($this->plugin_dir . 'assets/css/all.min.css')
                );

                wp_enqueue_style(
                    'product-pricing-blocks-bootstrap-min',
                    $this->plugin_url . 'assets/css/bootstrap.min.css',
                    array('wp-edit-blocks'),
                    filemtime($this->plugin_dir . 'assets/css/bootstrap.min.css')
                );

                wp_enqueue_style(
                    'product-pricing-blocks-custom-editor',
                    $this->plugin_url . 'build/index.css',
                    array('wp-edit-blocks'),
                    filemtime($this->plugin_dir . 'build/index.css')
                );
            }
        }

        public function enqueue_frontend_assets()
        {
            if (!is_admin()) {
                wp_enqueue_script(
                    'product-pricing-blocks-frontend',
                    $this->plugin_url . 'build/pricing-table-frontend.js',
                    array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'),
                    filemtime($this->plugin_dir . '/build/pricing-table-frontend.js'),
                    true
                );

                wp_enqueue_style(
                    'product-pricing-blocks-all-min',
                    $this->plugin_url . 'assets/css/all.min.css',
                    array(),
                    filemtime($this->plugin_dir . 'assets/css/all.min.css')
                );

                wp_enqueue_style(
                    'product-pricing-blocks-bootstrap-min',
                    $this->plugin_url . 'assets/css/bootstrap.min.css',
                    array(),
                    filemtime($this->plugin_dir . 'assets/css/bootstrap.min.css')
                );

                wp_enqueue_style(
                    'product-pricing-blocks',
                    $this->plugin_url . 'build/style-index.css',
                    array(),
                    filemtime($this->plugin_dir . 'build/style-index.css')
                );

                wp_enqueue_script(
                    'bootstrap-bundle',
                    $this->plugin_url . 'assets/js/bootstrap.bundle.min.js',
                    array('jquery'),
                    filemtime($this->plugin_dir . 'assets/js/bootstrap.bundle.min.js'),
                    true
                );
            }
        }

        public function register_blocks()
        {
            register_block_type('product-pricing/pricing-table', array(
                'editor_script' => 'product-pricing-blocks',
                'editor_style'  => array(
                    'product-pricing-blocks-custom-editor',
                    'product-pricing-blocks-all-min',
                    'product-pricing-blocks-bootstrap-min',
                ),
                'style'         => array(
                    'product-pricing-blocks',
                    'product-pricing-blocks-all-min',
                    'product-pricing-blocks-bootstrap-min',
                ),
                'script'        => array(
                    'bootstrap-bundle',
                    'product-pricing-blocks-frontend'
                ),
                'render_callback' => array($this, 'render_pricing_table_block')
            ));
        }

        public function render_pricing_table_block($attributes)
        {
            ob_start(); ?>
            <div class="product-pricing-table" data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>
<?php
            return ob_get_clean();
        }
    }

    // Initialize the plugin
    new ProductPricing();
}
