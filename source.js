// ==UserScript==
// @name         快手线索 CRM 辅助
// @namespace    https://github.com/maxsky/kuaishou-crm-call-helper
// @version      2025-06-13
// @description  Kuaishou CRM Call Mark helper
// @author       Max Sky
// @require      https://cdn.staticfile.net/jquery/2.2.4/jquery.min.js
// @match        https://xiansuo-crm.kuaishou.com/clue/all
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    let clicked = 0;

    $('#App').on('click', '.ant-table-tbody .clue-operation div', function () {
        let divClass = $(this).prop('class');

        if (!divClass.includes('disabled')) {
            let td = $(this).parent().parent();

            td.css('background', 'darkseagreen');

            let clickedElement = td.find("div[class='clicked']");

            if (!clickedElement.length) {
                clicked = 1;

                td.append('<div class="clicked" data-value="' + clicked + '">已点击 ' + clicked + '</div>');
            } else {
                clicked = parseInt(clickedElement.attr('data-value')) + 1;

                clickedElement.attr('data-value', clicked);

                clickedElement.html('已点击 ' + clicked);
            }
        }
    });
})();
