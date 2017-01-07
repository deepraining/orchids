orchids.init({
    route: !0,
    animate: !0
});

orchids.registerPage('aa', {
    onCreate: function(data) {
        console.log('aa: onCreate');
        this.onCreate2(data);
    }
}, {
    backgroundColor: '#000000',
    animate: !0
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
    }
}, {
    backgroundColor: '#ff0000',
    route: !0
}, 'aa');
orchids.registerPage('b', {
    onCreate: function(data) {
        $(this.el).html(data.text);
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
    }
}, {
    backgroundColor: '#00ff00'
});

orchids.registerDialog('hh', {
    onCreate: function(data) {
        console.log('hh: onCreate');
        this.onCreate2(data);
    }
}, {
    backgroundColor: '#000000',
    animate: !0
});

orchids.registerDialog('h', {
    onCreate2: function(data) {
        console.log('h: onCreate2');
        $(this.el).html(data.text);
        this.setResult({text: 'I\'m come from h.'});
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
    backgroundColor: '#0000ff'
}, 'hh');
orchids.registerDialog('i', {
    onCreate: function(data) {
        $(this.el).html(data.text);
        this.setResult({text: 'I\'m come from i.'});
    },
    prepareForResult: function (data) {
        console.log('i: prepareForResult success');
        console.log('data is: ' + (typeof data != 'object' ? data : JSON.stringify(data)));
    }
}, {
    backgroundColor: '#00ff00'
});

orchids.start('a', {text: 'a'});