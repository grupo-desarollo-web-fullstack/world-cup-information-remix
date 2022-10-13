const postcssSass = require("@csstools/postcss-sass");
const atImport = require("postcss-import");
const path = require("path");

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    atImport({
      async resolve(id, basedir) {
        try {
          const { resolve: metaResolve } = await import("import-meta-resolve");
          const filename = await metaResolve(id, `file://${basedir}`);
          const fileNameWithoutPrefix = filename.replace("file://", "");
          return fileNameWithoutPrefix;
        } catch (error) {
          if (path.extname(id)) {
            const filename = path.resolve(basedir, id);
            return filename;
          }
          throw error;
        }
      },
    }),
    postcssSass(),
  ],
};
