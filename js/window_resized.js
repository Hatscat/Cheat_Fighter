"use strict";

function WINDOW_RESIZED (data) {

	resizeCanvas(windowWidth, windowHeight);

	var canvas_wh_ratio = width / height;

	data.canvas_min_size_ratio = 0;
	data.canvas_max_size_ratio = 0;
	
	/*
	data.app_buf.height = min(1, canvas_wh_ratio / data.editor_conf.app_buf_wh_ratio) * height | 0;
	data.app_buf.width = data.app_buf.height * data.editor_conf.app_buf_wh_ratio | 0;

	data.app_buf_x = (width - data.app_buf.width) * 0.5 | 0;
	data.app_buf_y = (height - data.app_buf.height) * 0.5 | 0;

	for_eah_components_in_each_pages(data, function (comp) {

		set_component_box(data, comp);
	});*/
}
