import type { StarlightPlugin } from "@astrojs/starlight/types";
import type { HeadConfig } from "@astrojs/starlight/schemas/head";

import { AstroError } from "astro/errors";
import { z } from "astro/zod";

import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

const starLightConcept10ThemePluginUserOptionssSchema = z
  .object({
    /**
     * Umami `data-website-id` to add to the head
     *
     * @optional
     */
    trackingId: z.string().optional(),
  })
  .default({});

type StarLightConcept10ThemePluginUserOptions = z.input<
  typeof starLightConcept10ThemePluginUserOptionssSchema
>;
export type StarLightConcept10ThemePluginOptions = z.output<
  typeof starLightConcept10ThemePluginUserOptionssSchema
>;

export default function starlightConcept10ThemePlugin(
  userOptions?: StarLightConcept10ThemePluginUserOptions,
): StarlightPlugin {
  const options =
    starLightConcept10ThemePluginUserOptionssSchema.safeParse(userOptions);

  if (!options.success) {
    throw new AstroError(
      "Invalid options passed to the concept10-theme plugin.",
    );
  }

  return {
    name: "concept10-theme",
    hooks: {
      setup({
        addIntegration,
        astroConfig,
        config: starlightConfig,
        updateConfig,
      }) {
        const _css = [
          "@fontsource/roboto/400.css",
          "@fontsource/roboto/700.css",
          "@fontsource/roboto-mono/400.css",
          "./src/styles/tailwind.css",
        ];
        if (starlightConfig.customCss) {
          _css.concat(starlightConfig.customCss);
        }
        updateConfig({
          customCss: _css,
        });

        if (userOptions?.trackingId) {
          const _head: HeadConfig = [
            {
              tag: "script",
              attrs: {
                src: "https://stats.concept10.net/script.js",
                "data-website-id": userOptions.trackingId,
                async: true,
              },
              content: "",
            },
          ];
          if (starlightConfig.head) {
            _head.concat(starlightConfig.head);
          }
          updateConfig({
            head: _head,
          });
        }

        updateConfig({
          components: {
            ...starlightConfig.components,
            SocialIcons: "@concept10/starlight/components/User.astro",
          },
          logo: {
            light:
              "./node_modules/@concept10/starlight/assets/concept10-logo_10-light.svg",
            dark: "./node_modules/@concept10/starlight/assets/concept10-logo_10-dark.svg",
          },
          social: {},
          lastUpdated: true,
        });

        const isSolidLoaded = astroConfig.integrations.find(
          ({ name }) => name === "@astrojs/solid-js",
        );

        if (!isSolidLoaded) {
          addIntegration(solid());
        }

        const isTailwindLoaded = astroConfig.integrations.find(
          ({ name }) => name === "@astrojs/tailwind",
        );

        if (!isTailwindLoaded) {
          addIntegration(tailwind({ applyBaseStyles: false }));
        }
      },
    },
  };
}
