Package.describe({
    summary: "Port of Bootstrap-wysihtml5 to Meteor."
});

Package.on_use(function (api) {
    api.use(['bootstrap', 'jquery'], 'client');
    api.add_files([
        'lib/wysihtml5-0.3.0.min.js',
        'lib/bootstrap-wysihtml5.js',
        'lib/bootstrap-wysihtml5.css',
        'lib/wysiwyg-color.css'
    ], 'client');
});
