import { css } from "styled-components";

import theme from "../theme";

import { PropsWithSpacing } from "../types";

import image from "../test-image.png";
import hero from "../test-hero.jpeg";

export const truncateText = (string: string, targetLength: number): string => {
  if(string.length > targetLength) {
    return `${ string.slice(0, targetLength) }...`;
  };

  return string;
};

export const capitalizeString = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const createSpacing = ({
  margin: $margin = "", // all margins
  mt: $mt = "", // margin-top
  mr: $mr = "", // margin-right
  mb: $mb = "", // margin-bottom
  ml: $ml = "", // margin-left
  padding: $padding = "", // all paddings
  pt: $pt = "", // padding-top
  pr: $pr = "", // padding-right
  pb: $pb = "", // padding-bottom
  pl: $pl = "", // padding-left
}: PropsWithSpacing) => (
  css`
    ${ ({ theme }) => `
      ${ `margin: ${ theme.spacing[$margin] ?? "" };` }
      ${ `margin-top: ${ theme.spacing[$mt] ?? "" };` }
      ${ `margin-right: ${ theme.spacing[$mr] ?? "" };` }
      ${ `margin-bottom: ${ theme.spacing[$mb] ?? "" };` }
      ${ `margin-left: ${ theme.spacing[$ml] ?? "" };` }
      ${ `padding: ${ theme.spacing[$padding] ?? "" };` }
      ${ `padding-top: ${ theme.spacing[$pt] ?? "" };` }
      ${ `padding-right: ${ theme.spacing[$pr] ?? "" };` }
      ${ `padding-bottom: ${ theme.spacing[$pb] ?? "" };` }
      ${ `padding-left: ${ theme.spacing[$pl] ?? "" };` }
    ` }
  `
);

export const FLAVOR_PROFILES = [
  { id: 0, flavorProfile: "Young & spritely" },
  { id: 1, flavorProfile: "Sweet, fruity & mellow" },
  { id: 2, flavorProfile: "Spicy & sweet" },
  { id: 3, flavorProfile: "Spicy & dry" },
  { id: 4, flavorProfile: "Deep, rich & dried fruits" },
  { id: 5, flavorProfile: "Old & dignified" },
  { id: 6, flavorProfile: "Light & delicate" },
  { id: 7, flavorProfile: "Juicy, oak & vanilla" },
  { id: 8, flavorProfile: "Oily & coastal" },
  { id: 9, flavorProfile: "Lightly peated" },
  { id: 10, flavorProfile: "Peated" },
  { id: 11, flavorProfile: "Heavily peated" },
];

export const REGIONS = [
  { id: 0, region: "Islay" },
  { id: 1, region: "Highland" },
  { id: 2, region: "Speyside" },
  { id: 3, region: "Campbeltown" },
  { id: 4, region: "Lowland" }
];

export const generateOutturn = (name: string, description: string, casks: any[]): string => {
  return `
    <html>
      <head>
        <title>${ name }</title>
      </head>
      <body>

  <!--Header Begin-->

        <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
          <tbody>
            <tr>
              <td>
                <a href="https://www.smwsa.com/" target="_blank">
                  <img src="SMWS monogram.png" alt="SMWS Logo"/>
                </a>
              </td>
            </tr>
          </tbody>
        </table>

  <!--Header End-->

  <!--Email Body Begin-->

  <!--Hero Image Begin-->

        <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
          <tbody>
            <tr>
              <td style="padding: 30px 50px 10px;">
                <img src=${ hero } width="500"/>
              </td>
            </tr>
          </tbody>
        </table>

  <!--Hero Image End-->

  <!--Body Text Begin-->

        <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
          <tbody>
            <tr>
              <td style="height: 10px;"></td>
            </tr>
          </tbody>
        </table>
        <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
          <tbody>
            <tr>
              <td style="padding: 0 50px;">
                <h1 style="text-align: center; font-size: 42px;">${ name.toUpperCase() }</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
          <tbody>
            <tr>
              <td style="padding: 10px 50px;">
                <p style="font-family: Georgia, serif; font-size: 18px; line-height: 1.5;">
                  ${ description }
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        ${ casks.map(({
          caskNumber = "",
          name = "",
          flavorProfile = "",
          description = ""
        }) => (
          `
            <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 20px auto">
              <tbody>
                <tr>
                  <td style="padding: 20px 50px;">
                    <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
                      <tbody>
                        <tr>
                          <td style="padding: 0 250px;">
                            <img src=${ image } width="100" />
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 50px 0;">
                            <h2 style="font-size: 36px;">Cask No. ${ caskNumber.toUpperCase() }</h2>
                          </td>
                        </tr>
                        <tr style="height: 8px;"></tr>
                        <tr>
                          <td style="padding: 0 50px;">
                            <h3 style="font-size: 28px;">${ name.toUpperCase() }</h3>
                          </td>
                        </tr>
                        <tr style="height: 8px;"></tr>
                        <tr>
                          <td style="padding: 0 50px;">
                            <p style="background-color: ${ theme.color[flavorProfile].default }; color: white; border-radius: 4px; padding: 4px 8px; font-weight:bold;">${ flavorProfile.toUpperCase() }</p>
                          </td>
                        </tr>
                        <tr style="height: 16px;"></tr>
                        <tr>
                          <td style="padding: 0 50px;">
                            <p style="font-family: Georgia, serif; font-size: 18px; line-height: 1.5;">${ description }</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 20px 100px 0;">
                            <p style="background-color: ${ theme.color[flavorProfile].default }; color: white; text-align: center; font-size: 32px; font-weight: bold; padding: 8px; border-radius: 4px;">ORDER NOW</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          `
        ) ) }

  <!--Body Text End-->

  <!--Email Body End-->

  <!--Email Footer Begin-->

        <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
          <tbody>
            <tr>
              <td >
                <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
                  <tbody>
                    <tr>
                      <td>
                        <a href="https://www.smwsa.com/" target="_blank">
                          <img border="0" src="SMWS website_footer.jpg" alt="SMWS website link"/>
                        </a>
                      </td>
                      <td>
                        <img border="0" src="SMWS phone_footer.jpg" alt="SMWS phone number 646.844.1154"/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td> 
                <table align="center" cellpadding="0" cellspacing="0" width="400"> 
                  <tbody>
                    <tr>
                      <td>
                        <a href="https://www.facebook.com/smwsofamerica/" target="_blank">
                          <img border="0" src="SMWS facebook_footer.jpg" alt="Facebook link"/>
                        </a>
                      </td>
                      <td>
                        <a href="https://www.instagram.com/smwsamerica/?hl=en" target="_blank">
                          <img border="0" src="SMWS instagram_footer.jpg" alt="Instagram link"/>
                        </a>
                      </td>
                      <td>
                        <img border="0" src="SMWS twitter_footer.jpg" alt=""/>
                      </td>
                      <td>
                        <a href="https://www.instagram.com/smwsamerica/?hl=en" target="_blank">
                          <img border="0" src="SMWS handle hastage_footer.jpg" alt="@SMWSAmerica handle and #SMWSAmerica Hashtag"/>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
                  <tbody>
                    <tr>
                      <td>
                        <a href="mailto:info@smwsa.com" target="_blank">
                          <img border="0" src="SMWS info email_footer.jpg" alt="SMWSA info email link info@smwsa.com"/>
                        </a>
                      </td>
                      <td>
                        <a href="https://www.youtube.com/channel/UCqES06JS3iinhuoQc6-HXlg" target="_blank">
                          <img border="0" src="SMWS youtube email_footer.jpg" alt="SMWSAmerica Youtube link"/>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
                  <tbody>
                    <tr>
                      <td style="height: 10px;"></td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
                  <tbody>
                    <tr>
                      <td style="padding: 0 50px;">
                        <p style="font-family: Georgia, serif; font-size: 10px; text-align: center; line-height: 1.5;"><em>If you would like to stop receiving emails from SMWS
                          <br>
                          please click here to <unsubscribe style="text-decoration: underline; color:#000;">unsubscribe</unsubscribe>.</em>
                        </p>
                        <p style="font-family: Georgia, serif; font-size: 10px; text-align: center; line-height: 1.5; color: #982130;"><em>*Please note you will also be unsubscribing from receiving our monthly outturn releases</em></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
                  <tbody>
                    <tr>
                      <td style="height: 10px;"></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
                  <tbody>
                    <tr>
                      <td style="padding-left: 58px; padding-right: 58px;">
                        <p style="font-family: Georgia, serif; font-size: 12px; text-align: center; line-height: 1.5"><em>Problem seeing this email? View it as a <webversion style="text-decoration:underline; color:#000">webpage</webversion></em></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto">
                  <tbody>
                    <tr>
                      <td style="height: 20px;"></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  `
};