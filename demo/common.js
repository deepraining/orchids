
orchids.registerPage('aa', {
    onCreate: function(data) {
        console.log('aa: onCreate');
        this.onCreate2(data);
    }
}, {
    backgroundColor: '#000000',
    animate: !0,
    style: {
        marginLeft: '1px'
    }
});

orchids.registerPage('a', {
    onCreate2: function(data) {
        console.log('a: onCreate2');
        $(this.el).html(data.text);
        document.title = 'a';
    },
    onPageResult: function(data) {
        console.log('a: onPageResult success.');
        console.log('data is: ' + (typeof data != 'object' ? data : JSON.stringify(data)));
    },
    onShow: function () {
        console.log('a: onShow');
        document.title = 'a';
    },
    onHide: function () {
        console.log('a: onHide');
    },
    onDestroy: function() {
        console.log('a: onDestroy')
    }
}, {
    backgroundColor: '#ff0000',
    animateDirection: 'l2r',
    fadeInOut: !0,
    style: {
        marginLeft: '1px'
    }
}, 'aa');
orchids.registerPage('b', {
    onCreate: function(data) {
        $(this.el).html(data.text);
        console.log('b: onCreate');
        this.setResult({text: 'I\'m come from b.'});
        document.title = 'b';
    },
    prepareForResult: function (data) {
        console.log('b: prepareForResult success');
        console.log('data is: ' + (typeof data != 'object' ? data : JSON.stringify(data)));
    },
    onShow: function () {
        console.log('b: onShow');
        document.title = 'b';
    },
    onHide: function () {
        console.log('b: onHide');
    },
    onDestroy: function() {
        console.log('b: onDestroy')
    }
}, {
    backgroundColor: '#00ff00',
    animateDirection: 'l2r',
    fadeInOut: !0,
    singleton: !0,
    style: {
        marginLeft: '1px'
    }
});

orchids.registerDialog('hh', {
    onCreate: function(data) {
        console.log('hh: onCreate');
        this.onCreate2(data);
    }
}, {
    backgroundColor: '#000000',
    animate: !0,
    style: {
        marginLeft: '1px'
    }
});

orchids.registerDialog('h', {
    onCreate2: function(data) {
        console.log('h: onCreate2');
        $(this.el).html(data.text);
        this.setResult({text: 'I\'m come from h.'});
    },
    onShow: function () {
        console.log('h: onShow');
    },
    onHide: function () {
        console.log('h: onHide');
    },
    onDialogResult: function(data) {
        console.log('h: onDialogResult success.');
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
    style: {
        marginLeft: '1px'
    }
}, 'hh');
orchids.registerDialog('i', {
    onCreate: function(data) {
        console.log('i: onCreate');
        $(this.el).html(data.text);
        this.setResult({text: 'I\'m come from i.'});
    },
    onShow: function () {
        console.log('i: onShow');
    },
    onHide: function () {
        console.log('i: onHide');
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
    style: {
        marginLeft: '1px'
    }
});

orchids.registerFragment('oo', {
    onCreate: function() {
        console.log('oo: onCreate');
        this.onCreate2();
    }
}, {
    backgroundColor: '#999999',
    style: {
        marginLeft: '1px'
    }
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
    backgroundColor: '#ff0000',
    style: {
        marginLeft: '1px'
    }
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
    backgroundColor: '#00ff00',
    style: {
        marginLeft: '1px'
    }
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
    style: {
        marginLeft: '1px'
    }
});

orchids.registerPage('c', {
    onCreate: function(data) {
        console.log('c: onCreate');
        document.title = 'q';
        $(this.el).html('<div style="position: absolute; left: 0; top: 0; width: 100%; height: 80%;" data-orchids-fragments="1"></div>')
    }
}, {
    backgroundColor: '#000000',
    fragments: [
        'o', 'p', 'q'
    ],
    style: {
        marginLeft: '1px'
    }
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