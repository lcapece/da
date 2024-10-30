<?php get_header(); ?>

<article class="pt-24 pb-16 bg-white">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <?php
      $icon = get_post_meta(get_the_ID(), '_service_icon', true);
      $gradient = get_post_meta(get_the_ID(), '_service_gradient', true);
      ?>
      <span class="rounded-xl inline-flex p-4 bg-gradient-to-r <?php echo esc_attr($gradient); ?> text-white ring-4 ring-white shadow-lg mx-auto mb-6">
        <i data-feather="<?php echo esc_attr($icon); ?>" class="h-8 w-8"></i>
      </span>
      <h1 class="text-4xl font-extrabold text-gray-900 mb-4"><?php the_title(); ?></h1>
    </div>
    
    <div class="prose prose-lg mx-auto">
      <?php the_content(); ?>
    </div>
    
    <div class="mt-12 text-center">
      <a href="<?php echo home_url('/#contact'); ?>" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
        Get Started
        <svg class="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </a>
    </div>
  </div>
</article>

<?php get_footer(); ?>