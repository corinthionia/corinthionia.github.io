import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};

const ProfileImgWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 37.5%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileImg: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImgWrapper image={profileImage} alt="Profile image" />;
};

export default ProfileImg;
