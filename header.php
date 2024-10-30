<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <nav class="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <svg class="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 8V4m0 4L8 4m4 0l4-4M6 12h12M6 12l-2 2m2-2l-2-2m14 2l2 2m-2-2l2-2"/>
                    </svg>
                    <span class="ml-2 text-xl font-bold text-gray-900"><?php bloginfo('name'); ?></span>
                </div>
                
                <div class="hidden md:block">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => 'flex items-center space-x-8',
                        'link_before' => '<span class="text-gray-600 hover:text-indigo-600">',
                        'link_after' => '</span>'
                    ));
                    ?>
                </div>
                
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="text-gray-600">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-menu" class="hidden md:hidden">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b',
                'link_before' => '<span class="block px-3 py-2 text-gray-600 hover:text-indigo-600">',
                'link_after' => '</span>'
            ));
            ?>
        </div>
    </nav>