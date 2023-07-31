import satori from "satori";
import { SITE } from "@config";
import { writeFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";

const fetchFonts = async () => {
  // Regular Font
  const fontFileRegular = await fetch("https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf");
  const fontRegular = await fontFileRegular.arrayBuffer();

  // Bold Font
  const fontFileBold = await fetch("https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf");
  const fontBold = await fontFileBold.arrayBuffer();

  return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const generateOgImage = async (text = SITE.title) => {
  // * Will need to keep an eye on base.css
  // src\styles\base.css
  const colorFill = "rgb(13, 13, 13)";
  const colorTextBase = "rgb(242, 242, 242)";
  const colorAccent = "rgb(129, 140, 248)";
  const colorBorder = "rgb(238, 242, 255)";

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          background: colorFill,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-1px",
                right: "-1px",
                borderWidth: "4px",
                borderStyle: "solid",
                borderColor: colorBorder,
                background: colorFill,
                opacity: "0.9",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                margin: "2.5rem",
                width: "88%",
                height: "80%"
              }
            }
          },
          {
            type: "div",
            props: {
              style: {
                borderWidth: "4px",
                borderStyle: "solid",
                borderColor: colorBorder,
                background: colorFill,
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                margin: "2rem",
                width: "88%",
                height: "80%"
              },
              children: {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    margin: "20px",
                    width: "90%",
                    height: "90%"
                  },
                  children: [
                    {
                      type: "p",
                      props: {
                        style: {
                          fontSize: 72,
                          color: colorAccent,
                          fontWeight: "bold",
                          maxHeight: "84%",
                          overflow: "hidden"
                        },
                        children: text
                      }
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          marginBottom: "8px",
                          fontSize: 28
                        },
                        children: [
                          {
                            type: "span",
                            props: {
                              style: {
                                color: colorTextBase
                              },
                              children: [
                                "by",
                                " ",
                                {
                                  type: "span",
                                  props: {
                                    style: {
                                      color: "transparent"
                                    },
                                    children: '"'
                                  }
                                },
                                {
                                  type: "span",
                                  props: {
                                    style: {
                                      color: colorTextBase,
                                      overflow: "hidden",
                                      fontWeight: "bold"
                                    },
                                    children: SITE.author
                                  }
                                }
                              ]
                            }
                          },
                          {
                            type: "span",
                            props: {
                              style: {
                                color: colorTextBase,
                                overflow: "hidden",
                                fontWeight: "bold"
                              },
                              children: SITE.website.replace("https://", "")
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: [
        {
          name: "IBM Plex Mono",
          data: fontRegular,
          weight: 400,
          style: "normal"
        },
        {
          name: "IBM Plex Mono",
          data: fontBold,
          weight: 600,
          style: "normal"
        }
      ]
    }
  );

  // render png in production mode
  if (import.meta.env.MODE === "production") {
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    console.info("Output PNG Image  :", `${text}.png`);

    await writeFile(`./dist/${text}.png`, pngBuffer);
  }

  return svg;
};

export default generateOgImage;
