/**
 * Created by Administrator on 2015/9/11.
 */
;!function(window, undefined){
    "use strict";

    var $, win, ready = {
        getPath: function(){
            var js = document.scripts, script = js[js.length - 1], jsPath = script.src;
            if(script.getAttribute('merge')) return;
            return jsPath.substring(0, jsPath.lastIndexOf("/") + 1);
        }(),

        //����Enter��������
        enter: function(e){
            if(e.keyCode === 13) e.preventDefault();
        },
        config: {}, end: {},
        btn: ['&#x786E;&#x5B9A;','&#x53D6;&#x6D88;'],

        //����ԭʼ��ģʽ
        type: ['dialog', 'page', 'iframe', 'loading', 'tips']
    };

    //����css
    document.head.appendChild((function(){
        var link = doc.createElement('link');
        link.href = path + 'need/layer.css';
        link.type = 'text/css';
        link.rel = 'styleSheet'
        link.id = 'layermcss';
        return link;
    }()));



}(window);