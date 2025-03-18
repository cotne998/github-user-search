import styled from "styled-components";
import MoonIcon from "/assets/icon-moon.svg";
import SearchIconImg from "/assets/icon-search.svg";
import SunIcon from "/assets/icon-sun.svg";

interface IUserData {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
}

interface SearchProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  fetchData: () => Promise<void>;
  user: IUserData | undefined;
  userNotFound: boolean;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Search({
  inputValue,
  setInputValue,
  fetchData,
  userNotFound,
  darkMode,
  setDarkMode,
}: SearchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <UpperWrap>
        <ThemeWrap>
          <h1
            style={{
              color: darkMode ? "#FFFFFF" : "#222731",
              transition: "0.2s",
            }}>
            devfinder
          </h1>
          <ThemeButton
            style={{ color: darkMode ? "white" : "#697C9A" }}
            onClick={handleDarkMode}>
            {darkMode ? "LIGHT" : "DARK"}
            {darkMode ? (
              <MoonIconImg src={SunIcon} alt="moon icon" />
            ) : (
              <MoonIconImg src={MoonIcon} alt="moon icon" />
            )}
          </ThemeButton>
        </ThemeWrap>
        <InputDiv>
          <Input
            style={{
              backgroundColor: darkMode ? "#1E2A47" : "",
              transition: "0.2s",
              color: darkMode ? "#FFFFFF" : "",
            }}
            type="text"
            placeholder="Search GitHub Username..."
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {userNotFound && <ErrorSpan>No result</ErrorSpan>}
          <SearchIcon src={SearchIconImg} alt="Search icon" />
          <SearchButton onClick={fetchData}>Search</SearchButton>
        </InputDiv>
      </UpperWrap>
    </>
  );
}

// Styled Components
const UpperWrap = styled.div`
  @media only screen and (min-width: 48rem) {
    width: 57.3rem;
  }

  @media only screen and (min-width: 90rem) {
    width: 73.3rem;
  }
`;

const ThemeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThemeButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-size: 1.3rem;
  color: #4b6a9b;
  letter-spacing: 0.25rem;

  &:hover {
    color: #222731;
    transition: 0.2s;
    cursor: pointer;
  }
`;

const InputDiv = styled.div`
  position: relative;
  width: 100%;
  margin-top: 3.6rem;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;

  @media only screen and (min-width: 48rem) {
    left: 3.2rem;
  }
`;

const Input = styled.input`
  background-color: #fefefe;
  padding: 1.7rem;
  padding-left: 4.5rem;
  border-radius: 0.8rem;
  width: 100%;
  border: none;
  box-shadow: 0px 5px 10px #00000028;
  font-size: 1.3rem;
  color: #4b6a9b;
  font-family: "Space Mono", monospace;

  @media only screen and (min-width: 48rem) {
    font-size: 1.8rem;
    padding: 2.2rem;
    padding-left: 8rem;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  padding: 1rem 1.4rem;
  right: 0.7rem;
  border-radius: 0.5rem;
  border: none;
  top: 50%;
  transform: translateY(-50%);
  background-color: #0079ff;
  color: white;
  font-family: "Space Mono", monospace;
  font-size: 1.4rem;

  &:hover {
    background-color: #60abff;
    transition: 0.2s;
    cursor: pointer;
  }

  @media only screen and (min-width: 48rem) {
    font-size: 1.6rem;
  }
`;

const MoonIconImg = styled.img``;

const ErrorSpan = styled.span`
  color: #f74646;
  font-weight: 700;
  font-size: 1.5rem;
  position: absolute;
  right: 9.7rem;
  top: 50%;
  transform: translateY(-50%);

  @media only screen and (min-width: 48rem) {
    right: 12.7rem;
  }
`;
