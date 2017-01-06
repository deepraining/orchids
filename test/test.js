orchids.app.init({
    //route: !0,
    animate: !0
});

orchids.app.registerPage('aa', {
    onCreate: function(data) {
        console.log('aa: onCreate');
        this.onCreate2(data);
    }
}, {
    backgroundColor: '#000000',
    animate: !0
});

orchids.app.registerPage('a', {
    onCreate2: function(data) {
        console.log('a: onCreate2');
        $(this.el).html(data.text);
    },
    onPageResult: function(data) {
        console.log('a: onPageResult success.');
        console.log('data is: ' + (typeof data != 'object' ? data : JSON.stringify(data)));
    }
}, {
    backgroundColor: '#ff0000'
}, 'aa');
orchids.app.registerPage('b', {
    onCreate: function(data) {
        $(this.el).html(data.text);
        this.setResult({text: 'I\'m come from b.'});
    },
    prepareForResult: function (data) {
        console.log('b: prepareForResult success');
        console.log('data is: ' + (typeof data != 'object' ? data : JSON.stringify(data)));
    }
}, {
    backgroundColor: '#00ff00'
});

orchids.app.start('a', {text: 'a'});