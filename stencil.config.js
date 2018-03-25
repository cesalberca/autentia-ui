exports.config = {
  namespace: 'components',
  outputTargets:[{type: 'dist'}]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
