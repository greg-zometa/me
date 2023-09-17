import { getCollection } from "astro:content";
import { writeFile } from "node:fs/promises";
import satori from "satori";
import { SITE } from "@config";
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

const generateOgImages = async () => {
  // * Will need to keep an eye on base.css
  // src\styles\base.css
  const colorFill = "rgb(13, 13, 13)";
  const colorTextBase = "rgb(242, 242, 242)";
  const colorAccent = "rgb(129, 140, 248)";
  const colorBorder = "rgb(238, 242, 255)";

  const postImportResult = await getCollection("blog", ({ data }) => !data.draft);
  const posts = Object.values(postImportResult).filter(({ data }) => !data.ogImage);

  const imageGenerationPromises = posts.map(async (post) => {
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
                children: [
                  {
                    type: "svg",
                    props: {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xml:space": "preserve",
                      width: "1200",
                      height: "1200",
                      style: {
                        position: "absolute",
                        opacity: 0.4,
                        top: "-71%",
                        transform: "scale(0.4)"
                      },
                      children: [
                        {
                          type: "rect",
                          props: {
                            fill: colorTextBase,
                            x: "100",
                            y: "100",
                            rx: "1000",
                            width: "1000",
                            height: "1000"
                          }
                        },
                        {
                          type: "path",
                          props: {
                            fill: colorFill,
                            d: "M537.73 120.724c-90.159 12.314-177.679 50.577-244.749 107.091C201.283 305 144.109 404.835 123.218 523.141c-2.859 16.932-3.738 34.524-3.958 75.866 0 46.839.66 57.614 5.278 82.462 11.435 64.211 35.624 125.123 72.127 181.418 33.865 52.116 86.861 105.112 139.197 139.197 81.583 52.776 167.564 78.504 263.88 78.504s182.297-25.728 263.88-78.504c52.336-34.084 105.332-87.08 139.197-139.197 36.503-56.294 60.692-117.207 72.127-181.418 4.618-24.849 5.278-35.624 5.278-82.462-.22-57.394-1.979-74.986-13.194-119.406-14.513-57.614-46.399-122.924-84.222-173.061-16.273-21.55-51.457-57.834-76.305-78.724-54.095-45.519-133.04-84.661-200.549-99.395-50.137-10.995-120.725-14.074-168.224-7.697zm118.086 54.975c25.069 4.178 57.614 14.513 85.321 26.608 72.567 31.885 127.102 80.923 144.034 129.081 13.634 39.802 15.393 94.777 4.618 149.312-1.539 7.037-3.518 12.754-4.398 12.754-3.299 0-48.158-17.592-85.541-33.425-82.462-34.964-145.354-68.609-210.884-112.149-62.452-41.561-149.532-105.552-151.291-110.83-1.319-3.738 34.964-30.126 56.514-41.341 22.87-11.875 41.121-18.032 67.07-22.21 23.749-3.738 65.75-2.859 94.557 2.199zm-195.711 110.17l73.227 58.713 33.425 26.828-1.539 15.393c-3.079 26.828-1.759 73.447 2.419 89.939 8.356 34.744 26.168 59.593 51.896 72.567 37.383 18.692 72.787 14.293 107.751-13.194 13.634-10.555 35.624-36.503 41.341-48.818 1.979-3.958 4.618-6.817 5.717-6.377l54.095 18.032 52.556 17.812c2.859 2.419-25.948 77.625-42.661 111.269-12.754 25.728-13.854 27.268-45.299 75.646-26.608 40.682-39.362 65.75-39.362 77.625 0 9.456 3.518 8.576 14.074-3.518l9.016-10.335 1.319 6.597c.88 3.518 1.539 15.173 1.759 25.728.22 23.969 5.937 77.185 10.335 95.657 1.539 7.697 3.079 15.393 3.079 17.152 0 3.958-7.037 3.958-20.671-.22-7.037-2.199-11.655-2.639-13.194-1.1-1.979 1.979.88 16.273 12.974 65.31 2.639 10.995 4.178 21.11 3.299 22.65-1.539 2.419-9.896.88-140.516-26.608-21.99-4.618-32.105-5.937-33.205-4.398-.66 1.319.44 14.513 2.639 29.247 2.199 14.953 3.079 27.707 1.979 28.807-3.518 3.518-45.299-12.754-83.782-32.765-79.384-41.341-138.757-95.437-174.601-159.427-53.216-94.557-62.012-232.654-24.189-386.364 16.492-67.729 34.964-114.128 60.033-151.291 13.194-19.571 32.105-42.661 35.184-42.661.88 0 19.351 14.293 40.901 32.105zm-218.8 126.662c5.717 3.738 6.157 7.037 3.738 26.388-2.199 15.833-1.979 17.372 3.518 28.587 3.958 8.136 10.335 15.613 21.33 24.849 9.895 8.356 15.393 14.733 15.393 17.592 0 5.498-6.377 41.121-7.477 42.221-.44.44-11.875-9.016-25.288-21.33-13.414-12.094-27.048-22.65-30.126-23.309-2.859-.66-18.252 1.319-33.865 4.618-31.885 6.597-35.624 5.937-40.901-6.597-1.539-3.958-3.738-12.754-4.398-19.351-1.319-11.215-.88-12.754 4.178-17.812 3.299-3.298 8.136-5.717 11.435-5.717 7.916 0 20.89-5.717 27.927-12.534 3.298-3.298 8.576-12.534 11.875-20.89 7.257-18.911 11.435-22.21 26.828-20.671 6.377.88 13.414 2.639 15.833 3.958zm798.677 53.656c7.037 3.518 9.456 10.775 7.697 22.21-1.759 10.555-4.618 13.194-9.236 8.576-4.178-3.958-5.278-4.178-9.676-1.539-4.838 3.079-1.759 17.152 7.477 33.645 4.618 7.916 10.555 17.152 13.414 20.231 10.995 11.655 10.555 24.409-1.539 36.503-9.456 9.236-18.032 13.414-31.446 14.733-9.456.88-14.074 0-27.707-5.717-18.252-7.916-34.744-9.456-49.697-4.618-4.618 1.539-22.21 9.676-38.702 18.252-16.712 8.576-30.786 14.953-31.446 14.513-.44-.66 1.759-8.576 5.058-17.592l10.115-26.608c3.958-10.555 9.895-14.953 46.179-33.645 4.618-2.419 15.613-10.995 24.409-19.131 12.094-11.215 18.032-19.131 26.168-34.524 5.937-10.775 12.534-21.55 14.733-23.529 8.356-7.477 31.226-8.356 44.2-1.759zM831.736 789.22c28.807 15.173 38.922 16.053 53.875 4.838 12.754-9.236 27.268-9.896 36.064-1.759 9.676 9.016 7.697 19.351-6.817 34.964-7.257 7.916-10.995 15.173-12.754 25.728-2.639 15.173-6.377 18.692-18.472 18.692s-14.074-1.759-17.592-14.513c-3.738-13.854-8.796-18.692-35.184-33.645l-24.409-13.854v-16.273c0-9.016.44-16.273 1.1-16.273.44 0 11.435 5.498 24.189 12.095zm-525.781 16.273l7.697 15.173-9.016 5.937c-18.252 12.094-27.707 22.65-29.247 32.545-3.298 21.33-10.335 27.487-27.707 24.629-11.655-1.979-18.472-8.796-20.231-20.231-1.759-10.335-11.435-21.55-22.87-26.168-3.958-1.759-8.796-5.717-10.775-8.796-7.477-11.215 4.838-31.666 19.131-31.666 3.518 0 11.435 1.979 17.812 4.618 17.152 6.817 36.503 5.278 51.237-4.178 6.157-3.738 12.314-7.037 13.634-7.037 1.539 0 6.157 6.817 10.335 15.173zm152.08-429.79c-20.231 7.477-33.425 33.425-35.624 69.928-1.1 17.812-.66 21.99 3.298 31.006 8.356 18.692 29.906 22.43 43.54 7.477 7.037-7.697 18.252-33.645 23.969-55.855 10.115-38.702-6.157-62.891-35.184-52.556zm12.344 194.467c-14.513 2.419-21.33 15.613-14.733 28.367 6.597 12.974 36.503 27.487 57.834 27.927 28.367.66 34.085-27.048 9.016-43.32-13.414-8.576-39.362-15.173-52.116-12.974z"
                          }
                        },
                        {
                          type: "path",
                          props: {
                            fill: colorTextBase,
                            transform: "matrix(60 0 0 60 .5 .5)",
                            d: "M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0h0zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8h0z"
                          }
                        }
                      ]
                    }
                  },
                  {
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
                            children: post.data.title
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
                              fontSize: 36
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
                ]
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

      const outputImage = `${post.slug}.png`;

      const LIGHT_BLUE = "\x1b[94m";
      const DARK_GRAY = "\x1b[30m";
      const RESET = "\x1b[0m";
      console.info(`  ${LIGHT_BLUE}└─${RESET} output png image:`, `${DARK_GRAY}/${outputImage}${RESET}`);

      await writeFile(`./dist/${outputImage}`, pngBuffer);
    }
  });

  // Wait for all image generation operations to complete
  await Promise.all(imageGenerationPromises);

  return null;
};

export default generateOgImages;
