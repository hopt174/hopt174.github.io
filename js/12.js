function t_input_imgselect_updateval(t,e){var i=$("#rec"+t).find('[data-input-lid="'+e+'"]'),n="";i.find(".t-img-select:checked").each(function(){""!=n&&(n+="; "),n+=$(this).val()}),i.find(".t-img-select__hiddeninput").val(n)}function t_input_imgselect_init(t,e){var i=$("#rec"+t).find('[data-input-lid="'+e+'"]');i.find(".t-img-select__control").click(function(){t_input_imgselect_updateval(t,e)}),t_input_imgselect_updateval(t,e)}function t_input_imgselect_invertColor(t){var e=$("#rec"+t+" .t-img-select__container"),i=e.attr("data-check-bgcolor");if(void 0!==i){if(0===i.indexOf("#")&&(i=i.slice(1)),3===i.length&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]),6!==i.length)var n="ffffff";else{var c=parseInt(i.slice(0,2),16),l=parseInt(i.slice(2,4),16),a=parseInt(i.slice(4,6),16);n=.299*c+.587*l+.114*a>186?"000000":"FFFFFF"}0===$("#recid"+t+"-img-select-indicator").length&&e.after('<style id="recid'+t+'-img-select-indicator">\n#rec'+t+" .t-img-select__indicator:after {\nbackground-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 76.887 55.552'%3E%3Cpath fill='%23"+n+"' d='M34.373 49.541L76.887 5.889 70.739 0 28.426 43.458 6.078 20.632 0 26.585l22.488 22.972 6.029 5.995-.091-.085.091.085 5.856-6.011z'/%3E%3C/svg%3E\");\n}\n</style>")}}