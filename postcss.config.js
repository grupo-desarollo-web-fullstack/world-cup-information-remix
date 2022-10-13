const postcssSass = require("@csstools/postcss-sass");
const atImport = require("postcss-import");
const path = require("path");
const os = require("os");

module.exports = {
  syntax: "postcss-scss",
  plugins: [
    atImport({
      async resolve(id, basedir) {
        try {
          const { resolve: metaResolve } = await import("import-meta-resolve");
          const prefix = `file:${'/'.repeat(os.platform() === 'win32' ? 3 : 2)}`;
          const filename = await metaResolve(id, `${prefix}${basedir}`);
          const fileNameWithoutPrefix = filename.replace(prefix, "");
          return decodeURIComponent(fileNameWithoutPrefix);
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