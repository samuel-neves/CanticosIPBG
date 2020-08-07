import styled from 'styled-components/native';

export const Container = styled.View``;

export const SearchBox = styled.View`
  padding: 6px 8px;

  border-bottom-width: 2px;
  border-color: #999;
`;

export const MusicContainer = styled.View`
  width: 100%;
  height: 95px;

  border-bottom-width: 2px;
  border-color: #999;

  padding: 8px 12px;
`;

export const Title = styled.Text`
  color: #00523c;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const Lyrics = styled.Text`
  flex: 1;

  margin-top: 6px;
  margin-left: 26px;

  color: #666;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;
