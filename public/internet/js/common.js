var setTime = 800;

$(window).on('load', function() {
	if($('#wrap').hasClass('section4') == true) {
		setTime = 0;
	}

	if($('video').length > 0) {
		$('video').get(0).load();
	}

	$('#default_video_start').on('ended', function() {
		$(this).css({display: 'none'});
		$('#default_video').get(0).play();
	});

	$('.video_after').on('ended', function() {
		var data = $(this).attr('dg-data') + '_after';

		$(this).removeClass('selected');

		if($('#default_video').css('opacity') == 0) {
			$('video[dg-data="' + data + '"]').addClass('selected').get(0).play();
		}
	});

	$('.video_out').on('ended', function() {
		$('#wrap_all a').removeClass('hidden selected');

		$(this).removeClass('selected');
		$('#default_video').get(0).play();
	});

	$(document).on('click', '.element', function() {
		if($('#wrap').hasClass('section6') == true) {
			window.location.href = './main.html?intro=none';
		} else {
			$('video').get(0).pause();
		}

		if($(this).hasClass('draggable') == false) {
			if($(this).hasClass('back') == true) {
				if($('body .selected').length == 0) {
					window.location.href = './main.html?intro=none';
				} else {
					if($('.float_layer_popup.selected').length > 0) {
						$('.float_layer_popup.selected .close_btn').trigger('click');
					} else {
						var transform_origin = $('#default_video').css('transform-origin');

						$('#default_video').css({opacity : ''});
						$('#default_video').removeAttr('class').css({transformOrigin : transform_origin});
						$('#wrap_bgvideo > .selected, #wrap_bgall > .selected, #wrap_all .depth2').removeClass('selected');

						setTimeout(function() {
							$('#default_video').get(0).play();
							$('#default_video').removeAttr('class').css({transformOrigin : ''});
						}, 800);
					}

					setTimeout(function() {
						$('body .selected').removeClass('selected');
						$('body .hidden').removeClass('hidden');
					}, 800);
				}
			} else {
				if($(this).hasClass('start') == true) {
					$('.depth1').addClass('hidden');
					$('.depth2').addClass('selected');

					$('#default_video_intro').css({display: 'none'});
					$('#default_video_start').get(0).play();
				} else {
					$('.element.back').css({display : 'none'});

					if($(this).hasClass('undraggable') == true) {
						$(this).removeClass('undraggable').addClass('draggable');
					}

					var data = $(this).attr('dg-data');

					if($(this).hasClass('depth1') == true) {
						$('.depth1').addClass('hidden');
					} else if($(this).hasClass('depth2') == true) {
						$('.depth2 img.selected').removeClass('selected');
						if($(this).attr('dg-popup') != undefined) {
							$('#wrap_all .depth2').removeClass('selected');
							$('#wrap_bgall img').removeClass('selected').css({display: ''});
							$('.popup_btn[dg-data="' + $(this).attr('dg-popup') + '"]').trigger('click');
						}
					}

					if(($('#default_video').attr('class') == '') || $('#default_video').attr('class') == undefined) {
						if($('#wrap').hasClass('section4') == true) {
							setTimeout(function() {
								$('#default_video').attr('class', data);
							}, 800);
						} else {
							$('#default_video').attr('class', data);
						}

						$('#default_video').get(0).pause();

						if($('#wrap_bgvideo .video_out[parent-data="' + data + '"]').length > 0) {
							$('#wrap_bgvideo .video_out[parent-data="' + data + '"]').addClass(data);
						}

						setTimeout(function() {
							$('#default_video').css({opacity : 0});
						}, setTime);
					}

					var before_obj = $('#wrap_bgvideo video.selected');
					setTimeout(function() {
						before_obj.removeClass('selected');
					}, 100);

					if(($(this).hasClass('depth1') == false) && (data != undefined)) {
						$('#wrap_bgvideo video[dg-data="' + data + '"]').addClass('selected').get(0).play();
					}

					var sel_obj = $(this);
					if((sel_obj.attr('dg-data') == 'element3_2_1') || (sel_obj.attr('dg-data') == 'element5_1_1')) {
						var next_element = data.slice(0, -1) + (parseInt(data.charAt(data.length - 1)) + 1);

						if(sel_obj.hasClass('depth1') == true) {
							$('#wrap_bgvideo video[dg-data="' + data + '"]').addClass('selected').get(0).play();
						}

						setTimeout(function() {
							$('.element.back').css({display : ''});
							$('#wrap_all a[dg-data="' + next_element + '"]').addClass('selected');
							$('#wrap_bgall img[dg-data="' + next_element + '"]').not('.hover').addClass('selected');
						}, setTime);
					} else {
						setTimeout(function() {
							if(sel_obj.hasClass('depth1') == true) {
								$('#wrap_bgvideo video[dg-data="' + data + '"]').addClass('selected').get(0).play();
							}

							var next_element = data.slice(0, -1) + (parseInt(data.charAt(data.length - 1)) + 1);

							if($('#wrap_all a[dg-data="' + next_element + '"]').length > 0) {
								if((next_element == 'element1_2_2')) {
									setTimeout(function() {
										$('.element.back').css({display : ''});
										$('#wrap_all a[dg-data="' + next_element + '"]').addClass('selected');
										$('#wrap_bgall img[dg-data="' + next_element + '"]').not('.hover').addClass('selected');
									}, 5000);
								} else if((next_element == 'element1_3_2')) {
									setTimeout(function() {
										$('.element.back').css({display : ''});
										$('#wrap_all a[dg-data="' + next_element + '"]').addClass('selected');
										$('#wrap_bgall img[dg-data="' + next_element + '"]').not('.hover').addClass('selected');
									}, 5500);
								} else if(next_element == 'element1_4_2') {
									setTimeout(function() {
										$('.element.back').css({display : ''});
										$('#wrap_all a[dg-data="' + next_element + '"]').addClass('selected');
										$('#wrap_bgall img[dg-data="' + next_element + '"]').not('.hover').addClass('selected');
									}, 3100);
								} else if(next_element == 'element2_3_2') {
									setTimeout(function() {
										$('.element.back').css({display : ''});
										$('#wrap_all a[dg-data="' + next_element + '"]').addClass('selected');
										$('#wrap_bgall img[dg-data="' + next_element + '"]').not('.hover').addClass('selected');
									}, 5500);
								} else if(next_element == 'element3_3_2') {
									setTimeout(function() {
										$('.element.back').css({display : ''});
										$('#wrap_all a[dg-data="' + next_element + '"]').addClass('selected');
										$('#wrap_bgall img[dg-data="' + next_element + '"]').not('.hover').addClass('selected');
									}, 3500);
								} else if(next_element == 'element4_1_2') {
									setTimeout(function() {
										$('.element.back').css({display : ''});
										$('#wrap_all a[dg-data="' + next_element + '"]').addClass('selected');
										$('#wrap_bgall img[dg-data="' + next_element + '"]').not('.hover').addClass('selected');
									}, 2500);
								} else {
									$('.element.back').css({display : ''});
									$('#wrap_all a[dg-data="' + next_element + '"]').addClass('selected');
									$('#wrap_bgall img[dg-data="' + next_element + '"]').not('.hover').addClass('selected');
								}
							} else {
								$('.element.back').css({display : ''});
							}
						}, setTime);
					}
				}
			}
		}
	});

	$(document).on('mouseenter mouseleave', '.element', function(event) {
		var data = $(this).attr('dg-data');

		var obj = $('#wrap_bgall');

		if(event.type == 'mouseenter') {
			obj.find('img[dg-data="' + data + '"].hover').css({display : 'block'});
		} else {
			obj.find('img[dg-data="' + data + '"].hover').css({display : ''});
		}
	});

	$(document).on('click', '.float_layer_popup .close_btn', function() {
		$('#wrap_bgvideo video').each(function() {
			$(this).get(0).currentTime = 0;
			$(this).get(0).pause();
		});

		var sel_obj = $(this);
		var data = sel_obj.attr('dg-data');
		var obj = $('#wrap_bgvideo video.video_out[dg-data="' + data + '"]');
		var transform_origin = $('#default_video').css('transform-origin');

		$('#default_video').removeAttr('class');
		if((sel_obj.attr('dg-data') != undefined) && (sel_obj.attr('dg-data') != '')) {
			obj.css({opacity : 1, transformOrigin : transform_origin}).attr('class', 'video_out nofade');
		} else {
			$('#default_video').css({opacity : 1, transformOrigin : transform_origin});
		}

		var before_obj = $('#wrap_bgvideo video.selected');
		setTimeout(function() {
			before_obj.removeClass('selected');
		}, 100);

		setTimeout(function() {
			if((sel_obj.attr('dg-data') != undefined) && (sel_obj.attr('dg-data') != '')) {
				$('#default_video').css({opacity : 1});
				obj.css({opacity : '', transformOrigin : ''});
				obj.addClass('selected').get(0).play();
			} else {
				setTimeout(function() {
					$('#wrap_all a').removeClass('hidden selected');
					$('#default_video').css({transformOrigin : ''}).get(0).play();
				}, 100);
			}

			$('.float_layer_popup video').each(function() {
				$(this).get(0).currentTime = 0;
				$(this).get(0).pause();
			});
		}, 750);
	});

	if($('.float_layer_popup').length > 0) {
		$('.float_layer_popup').each(function(idx) {
			$('.float_layer_popup').dg_mfloatlayer({
				floatlayer : '.float_layer_popup[dg-popup="' + idx + '"]' // floatlayer 경로
				, floatcontent : '.float_layer_popup[dg-popup="' + idx + '"] .layer_content' // floatlayer 내부 스크롤이 생기게 할 경로
				, btn : '.popup_btn[dg-data="' + idx + '"]' // 레이어 띄울 버튼
				, close_btn : '.float_layer_popup[dg-popup="' + idx + '"] .close_btn' // 닫기 버튼
			    , fadeanimatetime : 0 // 스크롤바 사라지는데 걸리는 시간
				, actpc : true // PC에서 기본 스크롤로 보이게 할 경우 FALSE, 휠스크롤 생성시 true
				, after : function() {
					$('.float_layer_popup video').get(0).play();

					if($('.float_layer_popup.selected').length > 0) {
						$('.float_layer_popup.selected video').get(0).play();
					}
				}
			});
		});
	}

	var start_x = 0, start_y = 0, obj_x = 0, obj_y = 0;
	$('.draggable').draggable({
		start: function(event) {
			start_x = event.clientX, start_y = event.clientY;

			if($('#wrap').hasClass('section1') == true) {
				obj_x = parseInt($('.section1 #wrap_bgall .hover[dg-data="element1_1_2"]').css('left'))
				, obj_y = parseInt($('.section1 #wrap_bgall .hover[dg-data="element1_1_2"]').css('top'));
			} else if($('#wrap').hasClass('section4') == true) {
				obj_x = parseInt($('.section4 #wrap_bgall .fst[dg-data="element4_1_2"]').css('left'))
				, obj_y = parseInt($('.section4 #wrap_bgall .fst[dg-data="element4_1_2"]').css('top'));
			}
		},
	    drag: function(event) {
	    	var move_val_x = start_x - event.clientX, move_val_y = start_y - event.clientY;

	    	if($('#wrap').hasClass('section1') == true) {
	    		$('.section1 #wrap_bgall .fst[dg-data="element1_1_2"], .section1 #wrap_bgall .hover[dg-data="element1_1_2"]').css({left:obj_x - move_val_x, top:obj_y - move_val_y});
	    	} else if($('#wrap').hasClass('section4') == true) {
	    		$('.section4 #wrap_bgall .fst[dg-data="element4_1_2"]').css({left:obj_x - move_val_x, top:obj_y - move_val_y});
	    	}
	    },
	    stop: function(event) {
	    	if($('#wrap').hasClass('section1') == true) {
	    		if(
	    			(parseInt($('.section1 #wrap_bgall .fst[dg-data="element1_1_2"]').css('top')) < -130 && parseInt($('.section1 #wrap_bgall .fst[dg-data="element1_1_2"]').css('top')) > -240)
	    			&& (parseInt($('.section1 #wrap_bgall .fst[dg-data="element1_1_2"]').css('left')) > -150 && parseInt($('.section1 #wrap_bgall .fst[dg-data="element1_1_2"]').css('left')) < 10)) {
	    				$('#wrap_all .depth2[dg-data="element1_1_2"]').css({top:580, left:670}).removeClass('draggable').addClass('undraggable').trigger('click');
	    				$('.section1 #wrap_bgall .fst[dg-data="element1_1_2"], .section1 #wrap_bgall .hover[dg-data="element1_1_2"]').css({left:'', top:''});

	    				setTimeout(function() {
	    					$('#wrap_all .depth2[dg-data="element1_1_2"]').removeClass('undraggable').addClass('draggable');
	    				}, 1000);
	    		}
	    	} else if($('#wrap').hasClass('section4') == true) {
	    		if(
		    			(parseInt($('.section4 #wrap_bgall .fst[dg-data="element4_1_2"]').css('top')) > -300 && parseInt($('.section4 #wrap_bgall .fst[dg-data="element4_1_2"]').css('top')) < 400)
		    			|| (parseInt($('.section4 #wrap_bgall .fst[dg-data="element4_1_2"]').css('left')) < 150 && parseInt($('.section4 #wrap_bgall .fst[dg-data="element4_1_2"]').css('left')) > -150)) {
		    				$('#wrap_all .depth2[dg-data="element4_1_2"]').css({top:445, left:1185}).removeClass('draggable').addClass('undraggable').trigger('click');
		    				$('.section4 #wrap_bgall .fst[dg-data="element4_1_2"]').css({left:'', top:''});

		    				setTimeout(function() {
		    					$('#wrap_all .depth2[dg-data="element4_1_2"]').removeClass('undraggable').addClass('draggable');
		    				}, 1000);
		    		}
		    	}
	    }
	});
});