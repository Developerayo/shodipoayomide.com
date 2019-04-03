import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  WhatsappShareButton,
  EmailShareButton,

  // Comment to sepaate, overwriting codesandbox behavior
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  WhatsappIcon,
  EmailIcon,

  // Comment to sepaate, overwriting codesandbox behavior
  FacebookShareCount,
  GooglePlusShareCount,
  PinterestShareCount,
  VKShareCount
} from "react-share"; 
export default class SocialShare extends Component {
  static propTypes = {
    channelName: PropTypes.string,
    channelid: PropTypes.string.isRequired,
    shareImage: PropTypes.string
  };

  static defaultProps = {
    channelName: "LinkedIn",
    channelid: "",
    shareImage: ""
  };

  render() {
    const { channelName, channelId, shareImage } = this.props;

    const selectedPath = channelName || channelId;
    const shareLink = channelName
      ? `https://www.shodipoayomide.com/${selectedPath}`
      : `https://www.shodipoayomide.com/${selectedPath}`;
    const title = ` - ${shareLink}`;

    return (
      <section className="c-network">
        <div className="network">
          <FacebookShareButton
            url={shareLink}
            quote={title}
            className="network__share-button"
          >
            <FacebookIcon
              size={"2rem"} // You can use rem value isntead of numbers
              round
            />
          </FacebookShareButton>

          <FacebookShareCount url={shareLink} className="network__share-count">
            {count => count}
          </FacebookShareCount>
        </div>

        <div className="network">
          <TwitterShareButton
            url={shareLink}
            title={title}
            className="network__share-button"
          >
            <TwitterIcon size={"2rem"} round />
          </TwitterShareButton>

          <div className="network__share-count">&nbsp;</div>
        </div>

        <div className="network">
          <WhatsappShareButton
            url={shareLink}
            title={title}
            separator=":: "
            className="network__share-button"
          >
            <WhatsappIcon size={"2rem"} round />
          </WhatsappShareButton>

          <div className="network__share-count">&nbsp;</div>
        </div>

        <div className="network">
          <LinkedinShareButton
            url={shareLink}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="network__share-button"
          >
            <LinkedinIcon size={"2rem"} round />
          </LinkedinShareButton>
        </div>

        <div className="network">
          <GooglePlusShareButton
            url={shareLink}
            className="network__share-button"
          >
            <GooglePlusIcon size={"2rem"} round />
          </GooglePlusShareButton>

          <GooglePlusShareCount
            url={shareLink}
            className="network__share-count"
          >
            {count => count}
          </GooglePlusShareCount>
        </div>

        <div className="network">
          <PinterestShareButton
            url={String(window.location)}
            media={`${shareImage}`}
            windowWidth={1000}
            windowHeight={730}
            className="network__share-button"
          >
            <PinterestIcon size={"2rem"} round />
          </PinterestShareButton>

          <PinterestShareCount
            url={shareLink}
            className="network__share-count"
          />
        </div>

        <div className="network">
          <VKShareButton
            url={shareLink}
            image={`${shareImage}`}
            windowWidth={660}
            windowHeight={460}
            className="network__share-button"
          >
            <VKIcon size={"2rem"} round />
          </VKShareButton>

          <VKShareCount url={shareLink} className="network__share-count" />
        </div>
        <div className="network">
          <EmailShareButton
            url={shareLink}
            subject={title}
            body="body"
            className="network__share-button"
          >
            <EmailIcon size={"2rem"} round />
          </EmailShareButton>
        </div>
      </section>
    );
  }
}
