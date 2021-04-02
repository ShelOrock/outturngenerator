import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, Outturn } from './types/index';
import { theme } from './theme';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const truncateText = (string: string): string => {
  if(string.length > 50) return `${ string.slice(0, 50) }...`;
  return string;
};

export const capitalizeString = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const convertFromCamelCaseToSentenceCase = (str: string): string => str.replace(/([A-Z])/g, " $1");

export const flavourProfiles = [
  "Young & spritely",
  "Sweet, fruity & mellow",
  "Spicy & sweet",
  "Spicy & dry",
  "Deep, rich & dried fruits",
  "Old & dignified",
  "Light & delicate",
  "Juicy, oak & vanilla",
  "Oily & coastal",
  "Lightly peated",
  "Peated",
  "Heavily peated",
];

export const generateOutturn = (outturn: Outturn): void => console.log(
  `<html>
    <head>
      <title>${ outturn.name }</title>
    </head>
    <body>

<!--Header Begin-->

      <table align="center" cellpadding="0" cellspacing="0" width="700">
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

      <table align="center" cellpadding="0" cellspacing="0" width="700">
        <tbody>
          <tr>
            <td style='padding: 30px 58px 10px;'>
              <p>Insert Image Here.</p>
            </td>
          </tr>
        </tbody>
      </table>

<!--Hero Image End-->

<!--Body Text Begin-->

      <table align="center" cellpadding="0" cellspacing="0" width="700">
        <tbody>
          <tr>
            <td style="height: 10px;"></td>
          </tr>
        </tbody>
      </table>
      <table align="center" cellpadding="0" cellspacing="0" width="700">
        <tbody>
          <tr>
            <td style="padding-left: 174px; padding-right: 174px;">
              <h1>${ outturn.name }</h1>
            </td>
          </tr>
        </tbody>
      </table>
      <table align="center" cellpadding="0" cellspacing="0" width="700">
        <tbody>
          <tr>
            <td style="padding-left: 58px; padding-right: 58px;">
              <p style="font-family: 'Georgia', serif; font-size: 18px; line-height: 1.5;">
                ${ outturn.description }
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      ${
        outturn.casks
        ? outturn.casks.map(cask => {
          return (
            `
              <table align="center" cellpadding="0" cellspacing="0" width="700">
                <tbody>
                  <tr>
                    <td width:200px">
                      <table align="center" cellpadding="0" cellspacing="0" width="200">
                        <tbody>
                          <tr>
                            <td>Insert image here.</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td width:200px">
                      <table align="center" cellpadding="0" cellspacing="0" width="500">
                        <tbody>
                          <tr>
                            <td>
                              <h2>Cask No. ${ cask.caskNumber }</h2>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h3>${ cask.name }</h3>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>${ cask.price }</h4>
                            </td>
                          </tr>
                          <tr>
                            <td style='background-color: ${ theme.colors.flavourProfiles[cask.flavourProfile] };'>
                              <p style='color: white'>${ cask.flavourProfile }</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p style='color: gray;'>Age</p>
                              <p>${ cask.age }</p>
                            </td>
                            <td>
                              <p style='color: gray;'>Date Distilled</p>
                              <p>${ cask.date }</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p style='color: gray;'>Region</p>
                              <p>${ cask.region }</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p style='color: gray;'>Cask Type</p>
                              <p>${ cask.caskType }</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p style='color: gray;'>Outturn</p>
                              <p>${ cask.bottleOutturn }</p>
                            </td>
                            <td>
                              <p style='color: gray;'>Allocation</p>
                              <p>${ cask.allocation }</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p style='color: gray;'>Tasting Note</p>
                              <p>${ cask.description }</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            `
          )
        })
        : ''
      }

<!--Body Text End-->

<!--Email Body End-->

<!--Email Footer Begin-->

      <table align="center" cellpadding="0" cellspacing="0" width="700">
        <tbody>
          <tr>
            <td >
              <table align="center" cellpadding="0" cellspacing="0" width="700">
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
              <table align="center" cellpadding="0" cellspacing="0" width="700">
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
              <table align="center" cellpadding="0" cellspacing="0" width="700">
                <tbody>
                  <tr>
                    <td style="height: 10px;"></td>
                  </tr>
                </tbody>
              </table>
              <table align="center" cellpadding="0" cellspacing="0" width="700">
                <tbody>
                  <tr>
                    <td style="padding-left: 58px; padding-right: 58px;">
                      <p style="font-family: 'Georgia', serif; font-size: 10px; text-align: center; line-height: 1.5;"><em>If you would like to stop receiving emails from SMWS
                        <br>
                        please click here to <unsubscribe style='text-decoration: underline; color:#000;'>unsubscribe</unsubscribe>.</em>
                      </p>
                      <p style="font-family: 'Georgia', serif; font-size: 10px; text-align: center; line-height: 1.5; color: #982130;"><em>*Please note you will also be unsubscribing from receiving our monthly outturn releases</em></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" cellpadding="0" cellspacing="0" width="700">
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
              <table align="center" cellpadding="0" cellspacing="0" width="700">
                <tbody>
                  <tr>
                    <td style="padding-left: 58px; padding-right: 58px;">
                      <p style="font-family: 'Georgia', serif; font-size: 12px; text-align: center; line-height: 1.5"><em>Problem seeing this email? View it as a <webversion style='text-decoration:underline; color:#000'>webpage</webversion></em></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" cellpadding="0" cellspacing="0" width="700">
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
  </html>`
);