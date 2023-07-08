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
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          background: "#fefbfb",
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
                border: "4px solid #000",
                background: "#ecebeb",
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
                border: "4px solid #000",
                background: "#fefbfb",
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
                                overflow: "hidden",
                                fontWeight: "bold"
                              },
                              children: SITE.title
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
