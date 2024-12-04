import { PluginOption } from "vite";
import { transformAsync } from "@babel/core";

type BrillarPluginConfig = {};

export function brillarPlugin(config?: BrillarPluginConfig): PluginOption {
  return {
    name: "vite-plugin-brillar",
    enforce: "pre", // TODO: check why this is needed
    async transform(code, id) {
      console.log("transforming", id);
      if (!/\.(ts|tsx|js|jsx)$/.test(id)) {
        // return null;
      }

      const result = await transformAsync(code, {
        plugins: [
          [
            "@babel/plugin-transform-react-jsx",
            {
              pragma: "renderElement",
            },
          ],
        ],
        parserOpts: {
          plugins: ["jsx", "typescript"],
        },
      });

      if (!result || !result.code) {
        throw new Error(`Failed to transform ${id} with babel`);
      }
      return {
        code: result.code,
        map: result.map,
        meta: result.metadata,
      };
    },
  };
}
