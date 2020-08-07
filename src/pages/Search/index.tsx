import React, { useState } from 'react';

import Input from '../../components/Input';

import { Container, SearchBox, MusicContainer, Title, Lyrics } from './styles';

interface MusicProps {
  title: string;
  lyrics: string;
}

const Search: React.FC = () => {
  const musicTest = {
    title: '1. Teste de título',
    lyrics: 'Lorem ipsum dolor sit amet, cectsetur adip',
  };

  const [musics, setMusics] = useState<MusicProps[]>([musicTest]);

  return (
    <Container>
      <SearchBox>
        <Input placeholder="Número, título ou letra" />
      </SearchBox>

      <MusicContainer>
        <Title>1. Teste de título</Title>
        <Lyrics>
          {musics.map(music => {
            return music.lyrics.length > 37
              ? music.lyrics.substring(0, 37 - 3) + '...'
              : music.lyrics;
          })}
        </Lyrics>
      </MusicContainer>
    </Container>
  );
};

export default Search;
