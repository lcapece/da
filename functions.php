<?php
function automateai_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');
    
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'automateai'),
    ));
}
add_action('after_setup_theme', 'automateai_theme_support');

function automateai_register_styles() {
    wp_enqueue_style('automateai-tailwind', get_template_directory_uri() . '/assets/css/tailwind.css', array(), '1.0.0');
    wp_enqueue_style('automateai-style', get_stylesheet_uri(), array(), '1.0.0');
}
add_action('wp_enqueue_scripts', 'automateai_register_styles');

// Register Services Custom Post Type
function automateai_register_services() {
    register_post_type('service', array(
        'labels' => array(
            'name' => __('Services'),
            'singular_name' => __('Service'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-networking',
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'automateai_register_services');

// Add custom fields for services
function automateai_register_meta_boxes() {
    add_meta_box(
        'service_details',
        __('Service Details', 'automateai'),
        'automateai_service_metabox_callback',
        'service'
    );
}
add_action('add_meta_boxes', 'automateai_register_meta_boxes');

function automateai_service_metabox_callback($post) {
    $icon = get_post_meta($post->ID, '_service_icon', true);
    $gradient = get_post_meta($post->ID, '_service_gradient', true);
    ?>
    <p>
        <label for="service_icon">Icon Name:</label>
        <input type="text" id="service_icon" name="service_icon" value="<?php echo esc_attr($icon); ?>">
    </p>
    <p>
        <label for="service_gradient">Gradient Class:</label>
        <input type="text" id="service_gradient" name="service_gradient" value="<?php echo esc_attr($gradient); ?>">
    </p>
    <?php
}

function automateai_save_meta_boxes($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if ($parent_id = wp_is_post_revision($post_id)) {
        $post_id = $parent_id;
    }
    
    $fields = [
        'service_icon',
        'service_gradient',
    ];
    
    foreach ($fields as $field) {
        if (array_key_exists($field, $_POST)) {
            update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post', 'automateai_save_meta_boxes');