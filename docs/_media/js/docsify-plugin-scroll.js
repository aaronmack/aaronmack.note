var CONFIG = {
    auto: true,
    text: 'Top',
    name: 'Down',
    right: 15,
    bottom: 15,
    offset: 500
};

var install = function (hook, vm) {
    var opts = vm.config.scrollToTop || CONFIG;
    CONFIG.auto = opts.auto && typeof opts.auto === 'boolean' ? opts.auto : CONFIG.auto;
    CONFIG.text = opts.text && typeof opts.text === 'string' ? opts.text : CONFIG.text;
    CONFIG.name = opts.name && typeof opts.name === 'string' ? opts.name : CONFIG.name;
    CONFIG.right = opts.right && typeof opts.right === 'number' ? opts.right : CONFIG.right;
    CONFIG.bottom = opts.bottom && typeof opts.bottom === 'number' ? opts.bottom : CONFIG.bottom;
    CONFIG.offset = opts.offset && typeof opts.offset === 'number' ? opts.offset : CONFIG.offset;

    var onScroll = function(e) {
        if (!CONFIG.auto) {
            return;
        }
        var offset2top = window.document.documentElement.scrollTop;
        var offset2down = window.document.documentElement.scrollHeight;

        // console.log("docsify-plugin-scroll: offset2top ", offset2top)
        // console.log("docsify-plugin-scroll: offset2down ", offset2down)

        var $scrollBtnTop = Docsify.dom.find('span.scroll-to-top');
        var $scrollBtnDown = Docsify.dom.find('span.scroll-to-down');

        $scrollBtnTop.style.display = offset2top >= CONFIG.offset ? "block" : "none";
        $scrollBtnDown.style.display = offset2top + CONFIG.offset*2 <= offset2down ? "block" : "none";
    };

    hook.mounted(function() {
        var scrollBtnTop = document.createElement('span');
        scrollBtnTop.className = 'scroll-to-top';
        scrollBtnTop.style.display = CONFIG.auto ? 'none' : 'block';
        scrollBtnTop.style.overflow = 'hidden';
        scrollBtnTop.style.position = 'fixed';
        scrollBtnTop.style.right = CONFIG.right + 'px';
        scrollBtnTop.style.bottom = CONFIG.bottom + 'px';
        scrollBtnTop.style.width = '50px';
        scrollBtnTop.style.height = '50px';
        scrollBtnTop.style.background = 'white';
        scrollBtnTop.style.color = '#666';
        scrollBtnTop.style.border = '1px solid #ddd';
        scrollBtnTop.style.borderRadius = '4px';
        scrollBtnTop.style.lineHeight = '42px';
        scrollBtnTop.style.fontSize = '16px';
        scrollBtnTop.style.textAlign = 'center';
        scrollBtnTop.style.boxShadow = '0px 0px 6px #eee';
        scrollBtnTop.style.cursor = 'pointer';

        var scrollBtnDown = document.createElement('span');
        scrollBtnDown.className = 'scroll-to-down';
        scrollBtnDown.style.display = CONFIG.auto ? 'none' : 'block';
        scrollBtnDown.style.overflow = 'hidden';
        scrollBtnDown.style.position = 'fixed';
        scrollBtnDown.style.right = CONFIG.right + 'px';
        scrollBtnDown.style.bottom = CONFIG.bottom + 55 + 'px';
        scrollBtnDown.style.width = '50px';
        scrollBtnDown.style.height = '50px';
        scrollBtnDown.style.background = 'white';
        scrollBtnDown.style.color = '#666';
        scrollBtnDown.style.border = '1px solid #ddd';
        scrollBtnDown.style.borderRadius = '4px';
        scrollBtnDown.style.lineHeight = '42px';
        scrollBtnDown.style.fontSize = '16px';
        scrollBtnDown.style.textAlign = 'center';
        scrollBtnDown.style.boxShadow = '0px 0px 6px #eee';
        scrollBtnDown.style.cursor = 'pointer';

        var textNodeTop = document.createTextNode(CONFIG.text);
        scrollBtnTop.appendChild(textNodeTop);

        var textNodeDown = document.createTextNode(CONFIG.name);
        scrollBtnDown.appendChild(textNodeDown);

        document.body.appendChild(scrollBtnTop);
        document.body.appendChild(scrollBtnDown);

        window.addEventListener('scroll', onScroll);

        scrollBtnTop.onclick = function (e) {
            e.stopPropagation();
            var step = window.scrollY / 15;
            //console.log("docsify-plugin-scroll: step ", step, "window.scrollY ", window.scrollY);
            var scroll = function() {
                window.scrollTo(0, window.scrollY - step);

                if(window.scrollY > 0) {
                    setTimeout(scroll, 15);  // 15 ms
                }else{
                    //console.log("docsify-plugin-scroll: ScrollTo Finished", window.scrollY);
                }
            };
            scroll();
        };

        scrollBtnDown.onclick = function (e) {
            e.stopPropagation();
            var remainingHeight = document.body.scrollHeight - window.scrollY;
            var step = remainingHeight / 15;
            //console.log("docsify-plugin-scroll: step ", step, "remainingHeight ", remainingHeight);
            var lastScroll;
            var scroll = function() {
                var scroll2 = window.scrollY + step;
                window.scrollTo(0, scroll2);

                if(scroll2 != lastScroll) {
                    setTimeout(scroll, 15);
                }else{
                    //console.log("docsify-plugin-scroll: ScrollTo Finished", scroll2 == lastScroll);
                }
                lastScroll = scroll2;  // update last scroll variable and for determine if we're at the bottom
            };
            scroll();
        };
    });
};

$docsify.plugins = [].concat(install, $docsify.plugins);