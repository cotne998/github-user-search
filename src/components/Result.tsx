import styled from "styled-components";
import { useEffect } from "react";
import LocationIcon from "/assets/icon-location.svg";
import WebsiteIcon from "/assets/icon-website.svg";
import TwitterIcon from "/assets/icon-twitter.svg";
import CompanyIcon from "/assets/icon-company.svg";

interface IUserData {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
  created_at: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  company: string | null;
  location: string | null;
  twitter_username: string | null;
  html_url: string;
}

interface ResultProps {
  fetchData: () => Promise<void>;
  user: IUserData | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUserData | undefined>>;
}

export default function Result({ fetchData, user, setUser }: ResultProps) {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainSection>
        <div className="avatar-div">
          {user?.avatar_url && <UserImg width={70} src={user.avatar_url} />}
        </div>
        <div className="info-div">
          <UserNameDiv>
            <UserInfoDiv>
              {user?.name && <UserName>{user.name}</UserName>}
              {user?.login && <UserLogin>{user.login}</UserLogin>}
              {user?.created_at && (
                <UserJoinInfo>Joined {user.created_at}</UserJoinInfo>
              )}
            </UserInfoDiv>
          </UserNameDiv>
          <Bio>{!user?.bio ? "No bio" : user.bio}</Bio>
          <FollowersDiv>
            <SocialInfoDiv>
              <SocialInfoTitle>Repos</SocialInfoTitle>
              <SocialInfo>{user?.public_repos}</SocialInfo>
            </SocialInfoDiv>
            <SocialInfoDiv>
              <SocialInfoTitle>Followers</SocialInfoTitle>
              <SocialInfo>{user?.followers}</SocialInfo>
            </SocialInfoDiv>
            <SocialInfoDiv>
              <SocialInfoTitle>Following</SocialInfoTitle>
              <SocialInfo>{user?.following}</SocialInfo>
            </SocialInfoDiv>
          </FollowersDiv>

          <OtherInfoSection>
            <div className="lower-wrap">
              <OtherInfoWrap>
                <OtherInfoImg src={LocationIcon} />
                <OtherInfo>
                  {!user?.location ? "Not available" : user.location}
                </OtherInfo>
              </OtherInfoWrap>
              <OtherInfoWrap>
                <OtherInfoImg src={WebsiteIcon} />
                <OtherInfo>
                  {!user?.html_url ? "Not available" : user.html_url}
                </OtherInfo>
              </OtherInfoWrap>
            </div>
            <div className="lower-wrap">
              <OtherInfoWrap>
                <OtherInfoImg src={TwitterIcon} />
                <OtherInfo>
                  {!user?.twitter_username
                    ? "Not available"
                    : user.twitter_username}
                </OtherInfo>
              </OtherInfoWrap>
              <OtherInfoWrap>
                <OtherInfoImg src={CompanyIcon} />
                <OtherInfo>
                  {!user?.company ? "Not available" : user.company}
                </OtherInfo>
              </OtherInfoWrap>
            </div>
          </OtherInfoSection>
        </div>
      </MainSection>
    </>
  );
}

const MainSection = styled.section`
  box-shadow: 0px 5px 10px #00000028;
  width: 100%;
  padding: 3.2rem 2.4rem 4.8rem;
  background-color: white;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;

  @media only screen and (min-width: 48rem) {
    gap: 3.2rem;
    padding: 4rem;
  }

  @media only screen and (min-width: 90rem) {
    gap: 3.2rem;
    padding: 4rem;
    flex-direction: row;
  }
`;

const UserNameDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.9rem;
`;

const UserImg = styled.img`
  border-radius: 50%;

  @media only screen and (min-width: 48rem) {
    width: 11.7rem;
  }
`;

const UserName = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #2b3442;

  @media only screen and (min-width: 48rem) {
    font-size: 2.6rem;
  }
`;

const UserInfoDiv = styled.div``;

const UserLogin = styled.span`
  color: #0079ff;
  font-size: 1.3rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.6rem;
  }
`;

const UserJoinInfo = styled.p`
  color: #697c9a;
  font-size: 1.3rem;
  margin-top: 0.7rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.5rem;
  }
`;

const Bio = styled.p`
  color: #4b6a9b;
  font-size: 1.3rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.5rem;
  }
`;

const FollowersDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #f6f8ff;
  border-radius: 0.5rem;
  padding: 1.8rem 0;
`;

const SocialInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.8rem;
`;

const SocialInfoTitle = styled.span`
  color: #4b6a9b;
  font-size: 1.1rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.3rem;
  }
`;

const SocialInfo = styled.span`
  color: #2b3442;
  font-size: 1.6rem;
  font-weight: 700;

  @media only screen and (min-width: 48rem) {
    font-size: 2.2rem;
  }
`;

const OtherInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const OtherInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;
`;

const OtherInfoImg = styled.img``;

const OtherInfo = styled.span`
  color: #4b6a9b;
  font-size: 1.3rem;
`;
