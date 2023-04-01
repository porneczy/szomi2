const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@src": path.resolve(__dirname, "src"),

            "@components": path.resolve(__dirname, "src/components"),
            "@logic": path.resolve(__dirname, "src/logic"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@resources": path.resolve(__dirname, "src/resources"),
        },
    },
};
