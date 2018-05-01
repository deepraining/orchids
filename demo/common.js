
let animate = !0;


orchids.registerPage('aa', {
    onCreate: function(data) {
        console.log('aa: onCreate');
        this.onCreate2(data);
    }
}, {
    backgroundColor: '#000000',
    animate: animate
});

orchids.registerPage('a', {
    beforeCreate: function () {
        console.log('a: beforeCreate');
        //console.log(orchids.getCurrentPage());
    },
    onCreate2: function(data) {
        console.log('a: onCreate2');

        let html = '';
        for (let i = 0; i < 50; i++) html += `${i}<br>`;
        $(this.el).html(html + `<div class="fix">fix</div>`);
        document.title = 'a';
        //console.log(orchids.getCurrentPage());
    },
    afterCreate: function () {
        console.log('a: afterCreate');
        //console.log(orchids.getCurrentPage());
    },
    onResult: function(data) {
        console.log('a: onResult success.');
        console.log('data is: ' + (typeof data != 'object' ? data : JSON.stringify(data)));
    },
    onShow: function () {
        console.log('a: onShow');
        document.title = 'a';
    },
    afterShow: function () {
        console.log('a: afterShow');
    },
    onHide: function () {
        console.log('a: onHide');
    },
    afterHide: function () {
        console.log('a: afterHide');
    },
    onDestroy: function() {
        console.log('a: onDestroy')
    }
}, {
    backgroundColor: '#ff0000',
    animateDirection: 'l2r',
    fadeInOut: !0,
    animate: animate
}, 'aa');
orchids.registerPage('b', {
    beforeCreate: function () {
        console.log('b: beforeCreate');
        //console.log(orchids.getCurrentPage().option.name);
    },
    onCreate: function(data) {
        $(this.el).html(data.text);
        console.log('b: onCreate');
        this.setResult({text: 'I\'m come from b.'});
        document.title = 'b';
        //console.log(orchids.getCurrentPage().option.name);
    },
    afterCreate: function () {
        console.log('b: afterCreate');
        //console.log(orchids.getCurrentPage().option.name);
    },
    prepareForResult: function (data) {
        console.log('b: prepareForResult success');
        console.log('data is: ' + (typeof data != 'object' ? data : JSON.stringify(data)));
    },
    onShow: function () {
        console.log('b: onShow');
        document.title = 'b';
    },
    afterShow: function () {
        console.log('b: afterShow');
    },
    onHide: function () {
        console.log('b: onHide');
    },
    afterHide: function () {
        console.log('b: afterHide');
    },
    onDestroy: function() {
        console.log('b: onDestroy')
    }
}, {
    backgroundColor: '#00ff00',
    animateDirection: 'l2r',
    fadeInOut: !0,
    singleton: !0,
    animate: animate
});

orchids.registerDialog('hh', {
    onCreate: function(data) {
        console.log('hh: onCreate');
        this.onCreate2(data);
    }
}, {
    backgroundColor: '#000000',
    animate: animate
});

orchids.registerDialog('h', {
    beforeCreate: function () {
        console.log('h: beforeCreate');
        //console.log(orchids.getCurrentDialog());
    },
    onCreate2: function(data) {
        console.log('h: onCreate2');
        $(this.el).html(data.text);
        this.setResult({text: 'I\'m come from h.'});
        //console.log(orchids.getCurrentDialog());
    },
    afterCreate: function () {
        console.log('h: afterCreate');
        //console.log(orchids.getCurrentDialog());
    },
    onDestroy: function () {
        console.log('h: onDestroy');
        //console.log(orchids.getCurrentDialog());
    },
    afterDestroy: function () {
        console.log('h: afterDestroy');
        //console.log(orchids.getCurrentDialog());
    },
    onShow: function () {
        console.log('h: onShow');
    },
    afterShow: function () {
        console.log('h: afterShow');
    },
    onHide: function () {
        console.log('h: onHide');
    },
    afterHide: function () {
        console.log('h: afterHide');
    },
    onResult: function(data) {
        console.log('h: onResult success.');
        console.log('data is: ' + (typeof data != 'object' ? data : JSON.stringify(data)));
    },
    prepareForResult: function (data) {
        console.log('h: prepareForResult success');
        console.log('data is: ' + (typeof data != 'object' ? data : JSON.stringify(data)));
    }
}, {
    backgroundColor: '#0000ff',
    animateDirection: 't2b',
    fadeInOut: !0,
    animate: animate
}, 'hh');
orchids.registerDialog('i', {
    beforeCreate: function () {
        console.log('i: beforeCreate');
        //console.log(orchids.getCurrentDialog().option.name);
    },
    onCreate: function(data) {
        console.log('i: onCreate');
        $(this.el).html(data.text);
        this.setResult({text: 'I\'m come from i.'});
        //console.log(orchids.getCurrentDialog().option.name);
    },
    afterCreate: function () {
        console.log('i: afterCreate');
        //console.log(orchids.getCurrentDialog().option.name);
    },
    onDestroy: function () {
        console.log('i: onDestroy');
        //console.log(orchids.getCurrentDialog());
    },
    afterDestroy: function () {
        console.log('i: afterDestroy');
        //console.log(orchids.getCurrentDialog());
    },
    onShow: function () {
        console.log('i: onShow');
    },
    afterShow: function () {
        console.log('i: afterShow');
    },
    onHide: function () {
        console.log('i: onHide');
    },
    afterHide: function () {
        console.log('i: afterHide');
    },
    prepareForResult: function (data) {
        console.log('i: prepareForResult success');
        console.log('data is: ' + (typeof data != 'object' ? data : JSON.stringify(data)));
    }
}, {
    backgroundColor: '#00ff00',
    singleton: !0,
    animateDirection: 't2b',
    fadeInOut: !0,
    animate: animate
});

orchids.registerFragment('oo', {
    onCreate: function() {
        console.log('oo: onCreate');
        this.onCreate2();
    }
}, {
    backgroundColor: '#999999'
});

orchids.registerFragment('o', {
    onCreate2: function() {
        console.log('o: onCreate2');
        $(this.el).html('o');
        document.title = 'o';
    },
    onShow: function () {
        console.log('o: onShow');
        document.title = 'o';
    },
    onHide: function () {
        console.log('o: onHide');
    },
    onDestroy: function() {
        console.log('o: onDestroy')
    }
}, {
    backgroundColor: '#ff0000'
}, 'oo');
orchids.registerFragment('p', {
    onCreate: function() {
        console.log('p: onCreate');
        $(this.el).html('p');
        document.title = 'p';
    },
    onShow: function () {
        console.log('p: onShow');
        document.title = 'p';
    },
    onHide: function () {
        console.log('p: onHide');
    },
    onDestroy: function() {
        console.log('p: onDestroy')
    }
}, {
    backgroundColor: '#00ff00'
});
orchids.registerFragment('q', {
    onCreate: function() {
        console.log('q: onCreate');
        $(this.el).html('<div style="position: absolute; left: 0; top: 0; width: 100%; height: 80%;" data-orchids-sub-fragments="1"></div>')
        document.title = 'q';
    },
    onShow: function () {
        console.log('q: onShow');
        document.title = 'q';
    },
    onHide: function () {
        console.log('q: onHide');
    },
    onDestroy: function() {
        console.log('q: onDestroy')
    }
}, {
    backgroundColor: '#0000ff',
    subFragments: [
        'o', 'p', 'o', 'p'
    ],
    subFragmentAnimateDirection: 'vertical',
    subFragmentAnimate: animate
});

orchids.registerPage('c', {
    onCreate: function(data) {
        console.log('c: onCreate');
        document.title = 'q';
        $(this.el).html('<div style="position: absolute; left: 0; top: 0; width: 100%; height: 80%;" data-orchids-fragments="1"></div>')
    },
    onDestroy: function () {
        console.log('c: onDestroy');
        //console.log(orchids.getCurrentPage().option.name);
    },
    afterDestroy: function () {
        console.log('c: afterDestroy');
        //console.log(orchids.getCurrentPage().option.name);
    }
}, {
    backgroundColor: '#000000',
    fragments: [
        'o', 'p', 'q'
    ],
    animate: animate,
    fragmentAnimate: animate
});

orchids.start('a', {text: 'a'});

$('#forward-10').click(function (e) {
    orchids.back();
});

$('#forward-1').click(function (e) {
    orchids.startPage('b', {text: 'b'});
});
$('#forward-2').click(function (e) {
    orchids.startPage('c', {text: 'c'});
});
$('#forward-2-1').click(function (e) {
    orchids.getCurrentPage().showFragment(2);
});
$('#forward-2-2').click(function (e) {
    orchids.getCurrentPage().showFragment(3);
});
$('#forward-2-2-1').click(function (e) {
    orchids.getCurrentPage().getFragment(3).showSubFragment(2);
});
$('#forward-3').click(function (e) {
    orchids.startPageForResult('b', {text: 'b'}, {text: 'bbbbb'});
});
$('#forward-4').click(function (e) {
    orchids.startDialog('h', {text: 'h'});
});
$('#forward-5').click(function (e) {
    orchids.startDialogForResult('i', {text: 'i'}, {text: 'iiiii'});
});
