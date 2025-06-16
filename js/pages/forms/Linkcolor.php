<?php

namespace Elementor;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ShopView extends Widget_Base {
    public function get_name() {
        return 'ShopView';
    }

    public function get_title() {
        return esc_html__( 'Shop View', 'abagency' );
    }

    public function get_icon() {
		return 'eicon-gallery-grid';
	}

	public function get_categories() {
        return ['abagency'];
	}

    public function get_keywords() {
		return [ 'view', 'articles'];
	}

    protected function register_controls() {
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Content', 'abagency' ),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        // $this->add_control(
        //     'post_per_page', [
        //         'label'       => esc_html__( 'Post per page', 'abagency' ),
        //         'type'        => \Elementor\Controls_Manager::NUMBER,
        //         'placeholder' => esc_html__( '8', 'abagency' ),
        //         'label_block' => false,
        //         'default' => 8
        //     ]
        // );
		// $this->add_control(
		// 	'show_filter',
		// 	[
		// 		'label' => esc_html__( 'Show Filter', 'abagency' ),
		// 		'type' => \Elementor\Controls_Manager::SWITCHER,
		// 		'label_on' => esc_html__( 'Show', 'abagency' ),
		// 		'label_off' => esc_html__( 'Hide', 'abagency' ),
		// 		'return_value' => 'yes',
		// 		'default' => 'no',
		// 	]
		// );
		// $this->add_control(
		// 	'show_navi',
		// 	[
		// 		'label' => esc_html__( 'Show Pagenavi', 'abagency' ),
		// 		'type' => \Elementor\Controls_Manager::SWITCHER,
		// 		'label_on' => esc_html__( 'Show', 'abagency' ),
		// 		'label_off' => esc_html__( 'Hide', 'abagency' ),
		// 		'return_value' => 'yes',
		// 		'default' => 'no',
		// 	]
		// );
		// $this->add_control(
		// 	'show_related',
		// 	[
		// 		'label' => esc_html__( 'Related', 'abagency' ),
		// 		'type' => \Elementor\Controls_Manager::SWITCHER,
		// 		'label_on' => esc_html__( 'Show', 'abagency' ),
		// 		'label_off' => esc_html__( 'Hide', 'abagency' ),
		// 		'return_value' => 'yes',
		// 		'default' => 'no',
		// 	]
		// );

        $this->end_controls_section();
    }

	protected function render() {
		$settings = $this->get_settings_for_display();       ?>  
    <div class="custom-view-toggle">
        <div class="p1dir">
            <span>View</span>
            <ul class="dirxq">
                <li class="active" data-index="1">
                    <img src="<?= get_stylesheet_directory_uri() . '/images/1.png'; ?>" alt="">
                </li>
                <li data-index="2" class="dirdq">
                    <img src="<?= get_stylesheet_directory_uri() . '/images/2.png'; ?>" alt="">
                </li>
                <li data-index="3">
                    <img src="<?= get_stylesheet_directory_uri() . '/images/3.png'; ?>" alt="">
                </li>
                <li data-index="4">
                    <img src="<?= get_stylesheet_directory_uri() . '/images/4.png'; ?>" alt="">
                </li>
            </ul>
        </div>
    </div>
    <style>
    .dirxq li {
        margin-left: 34px;
        cursor: pointer;
        filter: grayscale(100%);
    }
    .dirxq li.active{
        filter:grayscale(0);
    }
    .p1dir, .dirxq {
        display: flex;
        align-items: center;
        list-style: none;
    }
    </style>
    <script>
    (function($){
        $(document).ready(function(){
            $('.dirxq li').click(function(){
                var current = $('.dirxq .active').data('index')
                var index = $(this).data('index');
              //  console.log(current,index);
                $('.dirxq li').removeClass('active');
                $(this).addClass('active');
                $('.vamtam-thumb-wrapper> img').each(function(){
                    var url = $(this).attr('src');
                    const newUrl = url.replace(current+".jpg", index+".jpg");
                    $(this).attr('src',newUrl);
                    $(this).removeAttr('srcset')
                 //   console.log(url,newUrl);
                })
            });
        });
    })(jQuery);
     </script>
        <?php
	}
}
