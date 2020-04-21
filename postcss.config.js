const postCSSConfig = {
  ident: 'postcss',
  // <= this line
  plugins: function () {
    return [
      autoprefixer ( { browsers: [ 'last 2 versions' ] } ),
    ];
  },

};