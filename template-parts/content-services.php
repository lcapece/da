<div id="services" class="py-24 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                <?php echo get_theme_mod('services_subtitle', 'Services'); ?>
            </h2>
            <p class="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                <?php echo get_theme_mod('services_title', 'Comprehensive AI Solutions'); ?>
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                <?php echo get_theme_mod('services_description', 'Transform your business with our cutting-edge AI automation services'); ?>
            </p>
        </div>

        <div class="mt-20">
            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <?php
                $services = new WP_Query(array(
                    'post_type' => 'service',
                    'posts_per_page' => 8
                ));

                while ($services->have_posts()) : $services->the_post();
                    $icon = get_post_meta(get_the_ID(), '_service_icon', true);
                    $gradient = get_post_meta(get_the_ID(), '_service_gradient', true);
                ?>
                <div class="relative group bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div class="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl <?php echo esc_attr($gradient); ?>"></div>
                    <div>
                        <span class="rounded-xl inline-flex p-4 bg-gradient-to-r <?php echo esc_attr($gradient); ?> text-white ring-4 ring-white shadow-lg">
                            <i data-feather="<?php echo esc_attr($icon); ?>" class="h-8 w-8"></i>
                        </span>
                    </div>
                    <div class="mt-8">
                        <h3 class="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                            <?php the_title(); ?>
                        </h3>
                        <p class="mt-3 text-base text-gray-500 group-hover:text-gray-600 transition-colors duration-300 line-clamp-3">
                            <?php the_excerpt(); ?>
                        </p>
                    </div>
                    <div class="mt-6">
                        <a href="<?php the_permalink(); ?>" 
                           class="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center">
                            Learn more
                            <svg class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <?php
                endwhile;
                wp_reset_postdata();
                ?>
            </div>
        </div>
    </div>
</div>